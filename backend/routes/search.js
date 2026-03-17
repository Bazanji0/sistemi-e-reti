import { Router } from 'express';
import { getDB } from '../db/database.js';

const router = Router();

router.get('/', (req, res) => {
  const db = getDB();
  const q = req.query.q;
  if (!q || q.length < 2) return res.json({ topics: [], quiz: [], glossary: [] });

  const pattern = `%${q}%`;

  const topics = db.prepare(`
    SELECT t.id, t.title, t.content, t.section_id, s.name as section_name
    FROM topics t JOIN sections s ON s.id = t.section_id
    WHERE t.title LIKE ? OR t.content LIKE ? OR t.keywords LIKE ?
    LIMIT 20
  `).all(pattern, pattern, pattern);

  const quiz = db.prepare(`
    SELECT q.id, q.question, q.section_id, s.name as section_name
    FROM quiz_questions q JOIN sections s ON s.id = q.section_id
    WHERE q.question LIKE ?
    LIMIT 10
  `).all(pattern);

  const glossary = db.prepare(`
    SELECT * FROM glossary WHERE term LIKE ? OR definition LIKE ? LIMIT 15
  `).all(pattern, pattern);

  res.json({ topics, quiz, glossary });
});

export default router;
