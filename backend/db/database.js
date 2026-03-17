import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { seedDatabase } from './seed.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, 'study.db');

let db;

// sql.js wrapper to match better-sqlite3-like API
class DBWrapper {
  constructor(sqlDb) {
    this._db = sqlDb;
  }

  exec(sql) {
    this._db.run(sql);
  }

  prepare(sql) {
    return {
      run: (...params) => {
        this._db.run(sql, params);
        const lastId = this._db.exec('SELECT last_insert_rowid() as id');
        const changes = this._db.getRowsModified();
        return {
          lastInsertRowid: lastId.length > 0 ? lastId[0].values[0][0] : 0,
          changes,
        };
      },
      get: (...params) => {
        const stmt = this._db.prepare(sql);
        stmt.bind(params);
        if (stmt.step()) {
          const cols = stmt.getColumnNames();
          const vals = stmt.get();
          stmt.free();
          const row = {};
          cols.forEach((c, i) => { row[c] = vals[i]; });
          return row;
        }
        stmt.free();
        return undefined;
      },
      all: (...params) => {
        const results = [];
        const stmt = this._db.prepare(sql);
        stmt.bind(params);
        while (stmt.step()) {
          const cols = stmt.getColumnNames();
          const vals = stmt.get();
          const row = {};
          cols.forEach((c, i) => { row[c] = vals[i]; });
          results.push(row);
        }
        stmt.free();
        return results;
      },
    };
  }

  transaction(fn) {
    return () => {
      this._db.run('BEGIN TRANSACTION');
      try {
        fn();
        this._db.run('COMMIT');
      } catch (e) {
        this._db.run('ROLLBACK');
        throw e;
      }
    };
  }

  pragma(str) {
    this._db.run(`PRAGMA ${str}`);
  }

  save() {
    const data = this._db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(dbPath, buffer);
  }
}

export function getDB() {
  return db;
}

export async function initDB() {
  const SQL = await initSqlJs();

  if (fs.existsSync(dbPath)) {
    const fileBuffer = fs.readFileSync(dbPath);
    db = new DBWrapper(new SQL.Database(fileBuffer));
  } else {
    db = new DBWrapper(new SQL.Database());
  }

  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');

  db.exec(`
    CREATE TABLE IF NOT EXISTS sections (
      id TEXT PRIMARY KEY,
      code TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      sort_order INTEGER
    );

    CREATE TABLE IF NOT EXISTS topics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section_id TEXT NOT NULL,
      number INTEGER,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      keywords TEXT,
      FOREIGN KEY (section_id) REFERENCES sections(id)
    );

    CREATE TABLE IF NOT EXISTS quiz_questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section_id TEXT NOT NULL,
      topic_id INTEGER,
      question TEXT NOT NULL,
      option_a TEXT NOT NULL,
      option_b TEXT NOT NULL,
      option_c TEXT NOT NULL,
      option_d TEXT NOT NULL,
      correct_answer TEXT NOT NULL,
      explanation TEXT,
      FOREIGN KEY (section_id) REFERENCES sections(id),
      FOREIGN KEY (topic_id) REFERENCES topics(id)
    );

    CREATE TABLE IF NOT EXISTS flashcards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section_id TEXT NOT NULL,
      topic_id INTEGER,
      front TEXT NOT NULL,
      back TEXT NOT NULL,
      FOREIGN KEY (section_id) REFERENCES sections(id)
    );

    CREATE TABLE IF NOT EXISTS oral_questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section_id TEXT NOT NULL,
      question TEXT NOT NULL,
      model_answer TEXT NOT NULL,
      cross_section INTEGER DEFAULT 0,
      FOREIGN KEY (section_id) REFERENCES sections(id)
    );

    CREATE TABLE IF NOT EXISTS glossary (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      term TEXT NOT NULL UNIQUE,
      definition TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      topic_id INTEGER NOT NULL UNIQUE,
      studied INTEGER DEFAULT 0,
      bookmarked INTEGER DEFAULT 0,
      updated_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (topic_id) REFERENCES topics(id)
    );

    CREATE TABLE IF NOT EXISTS quiz_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section_id TEXT,
      score INTEGER NOT NULL,
      total INTEGER NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS flashcard_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      flashcard_id INTEGER NOT NULL UNIQUE,
      correct_count INTEGER DEFAULT 0,
      wrong_count INTEGER DEFAULT 0,
      last_seen TEXT DEFAULT (datetime('now')),
      next_review TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (flashcard_id) REFERENCES flashcards(id)
    );
  `);

  const count = db.prepare('SELECT COUNT(*) as c FROM sections').get();
  if (count.c === 0) {
    seedDatabase(db);
    console.log('Database seeded successfully.');
  }

  db.save();

  // Auto-save every 30 seconds
  setInterval(() => { db.save(); }, 30000);
}
