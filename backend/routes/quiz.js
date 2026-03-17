import { Router } from 'express';
import { getDB } from '../db/database.js';

const router = Router();

// Get quiz for a section (random order)
router.get('/section/:id', (req, res) => {
  const db = getDB();
  const limit = parseInt(req.query.limit) || 10;
  const questions = db.prepare(
    'SELECT * FROM quiz_questions WHERE section_id = ? ORDER BY RANDOM() LIMIT ?'
  ).all(req.params.id, limit);
  res.json(questions);
});

// Get mixed quiz from all sections
router.get('/mixed', (req, res) => {
  const db = getDB();
  const limit = parseInt(req.query.limit) || 15;
  const questions = db.prepare(
    'SELECT * FROM quiz_questions ORDER BY RANDOM() LIMIT ?'
  ).all(limit);
  res.json(questions);
});

// Submit quiz result
router.post('/result', (req, res) => {
  const db = getDB();
  const { section_id, score, total } = req.body;
  const result = db.prepare(
    'INSERT INTO quiz_results (section_id, score, total) VALUES (?, ?, ?)'
  ).run(section_id || null, score, total);
  db.save();
  res.json({ id: result.lastInsertRowid });
});

// Get quiz history
router.get('/history', (req, res) => {
  const db = getDB();
  const results = db.prepare(
    'SELECT qr.*, s.name as section_name FROM quiz_results qr LEFT JOIN sections s ON s.id = qr.section_id ORDER BY qr.created_at DESC LIMIT 50'
  ).all();
  res.json(results);
});

export default router;
