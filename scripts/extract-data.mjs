// Extracts data from seed.js and outputs a static data module for the frontend
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const seedPath = join(__dirname, '..', 'backend', 'db', 'seed.js');
const seedSrc = readFileSync(seedPath, 'utf-8');

// Mock DB to capture all inserts
const data = {
  sections: [],
  topics: [],
  quiz_questions: [],
  flashcards: [],
  oral_questions: [],
  glossary: [],
};

let topicId = 1;
let quizId = 1;
let flashcardId = 1;
let oralId = 1;
let glossaryId = 1;

const mockDb = {
  transaction(fn) { return fn; },
  prepare(sql) {
    return {
      run(...args) {
        let id;
        if (sql.includes('sections')) {
          data.sections.push({ id: args[0], code: args[1], name: args[2], description: args[3], sort_order: args[4] });
          id = args[0];
        } else if (sql.includes('topics')) {
          id = topicId++;
          data.topics.push({ id, section_id: args[0], number: args[1], title: args[2], content: args[3], keywords: args[4] });
        } else if (sql.includes('quiz_questions')) {
          id = quizId++;
          data.quiz_questions.push({ id, section_id: args[0], topic_id: args[1], question: args[2], option_a: args[3], option_b: args[4], option_c: args[5], option_d: args[6], correct_answer: args[7], explanation: args[8] });
        } else if (sql.includes('flashcards')) {
          id = flashcardId++;
          data.flashcards.push({ id, section_id: args[0], topic_id: args[1], front: args[2], back: args[3] });
        } else if (sql.includes('oral_questions')) {
          id = oralId++;
          data.oral_questions.push({ id, section_id: args[0], question: args[1], model_answer: args[2], cross_section: args[3] });
        } else if (sql.includes('glossary')) {
          id = glossaryId++;
          data.glossary.push({ id, term: args[0], definition: args[1] });
        }
        return { lastInsertRowid: id, changes: 1 };
      }
    };
  }
};

// Dynamic import won't work easily, so let's eval the module
// We need to transform the export function to be callable
const code = seedSrc.replace('export function seedDatabase(db)', 'globalThis.__seedDatabase = function(db)');
const fn = new Function('globalThis', code + '\nreturn globalThis.__seedDatabase;');
const seedDatabase = fn(globalThis);
seedDatabase(mockDb);

// Write output
const outputPath = join(__dirname, '..', 'frontend', 'src', 'data', 'database.js');
const output = `// Auto-generated from backend/db/seed.js — DO NOT EDIT MANUALLY
export const sections = ${JSON.stringify(data.sections, null, 2)};

export const topics = ${JSON.stringify(data.topics, null, 2)};

export const quizQuestions = ${JSON.stringify(data.quiz_questions, null, 2)};

export const flashcards = ${JSON.stringify(data.flashcards, null, 2)};

export const oralQuestions = ${JSON.stringify(data.oral_questions, null, 2)};

export const glossary = ${JSON.stringify(data.glossary, null, 2)};
`;

// Ensure directory exists
import { mkdirSync } from 'fs';
try { mkdirSync(join(__dirname, '..', 'frontend', 'src', 'data'), { recursive: true }); } catch {}

writeFileSync(outputPath, output, 'utf-8');
console.log(`Generated ${outputPath}`);
console.log(`  Sections: ${data.sections.length}`);
console.log(`  Topics: ${data.topics.length}`);
console.log(`  Quiz questions: ${data.quiz_questions.length}`);
console.log(`  Flashcards: ${data.flashcards.length}`);
console.log(`  Oral questions: ${data.oral_questions.length}`);
console.log(`  Glossary terms: ${data.glossary.length}`);
