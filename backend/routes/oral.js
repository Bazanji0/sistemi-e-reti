import { Router } from 'express';
import { getDB } from '../db/database.js';

const router = Router();

// Get oral questions by section
router.get('/section/:id', (req, res) => {
  const db = getDB();
  const questions = db.prepare(
    'SELECT * FROM oral_questions WHERE section_id = ? ORDER BY RANDOM()'
  ).all(req.params.id);
  res.json(questions);
});

// Get all oral questions
router.get('/', (req, res) => {
  const db = getDB();
  const questions = db.prepare('SELECT * FROM oral_questions ORDER BY RANDOM()').all();
  res.json(questions);
});

// Get cross-section questions
router.get('/cross', (req, res) => {
  const db = getDB();
  const questions = db.prepare(
    'SELECT * FROM oral_questions WHERE cross_section = 1 ORDER BY RANDOM()'
  ).all();
  res.json(questions);
});

export default router;
