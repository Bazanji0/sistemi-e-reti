import { Router } from 'express';
import { getDB } from '../db/database.js';

const router = Router();

// Get flashcards by section
router.get('/section/:id', (req, res) => {
  const db = getDB();
  const cards = db.prepare(`
    SELECT f.*, COALESCE(fp.correct_count, 0) as correct_count,
           COALESCE(fp.wrong_count, 0) as wrong_count
    FROM flashcards f
    LEFT JOIN flashcard_progress fp ON fp.flashcard_id = f.id
    WHERE f.section_id = ?
    ORDER BY COALESCE(fp.next_review, datetime('now')) ASC
  `).all(req.params.id);
  res.json(cards);
});

// Get all flashcards (spaced repetition order)
router.get('/', (req, res) => {
  const db = getDB();
  const cards = db.prepare(`
    SELECT f.*, COALESCE(fp.correct_count, 0) as correct_count,
           COALESCE(fp.wrong_count, 0) as wrong_count
    FROM flashcards f
    LEFT JOIN flashcard_progress fp ON fp.flashcard_id = f.id
    ORDER BY COALESCE(fp.next_review, datetime('now')) ASC
  `).all();
  res.json(cards);
});

// Update flashcard progress
router.post('/:id/result', (req, res) => {
  const db = getDB();
  const { correct } = req.body;
  const cardId = parseInt(req.params.id);
  const existing = db.prepare('SELECT * FROM flashcard_progress WHERE flashcard_id = ?').get(cardId);

  if (existing) {
    if (correct) {
      const days = Math.min((existing.correct_count + 1) * 2, 30);
      db.prepare(
        `UPDATE flashcard_progress SET correct_count = correct_count + 1, last_seen = datetime('now'), next_review = datetime('now', '+' || ? || ' days') WHERE flashcard_id = ?`
      ).run(String(days), cardId);
    } else {
      db.prepare(
        `UPDATE flashcard_progress SET wrong_count = wrong_count + 1, last_seen = datetime('now'), next_review = datetime('now', '+0.5 days') WHERE flashcard_id = ?`
      ).run(cardId);
    }
  } else {
    const days = correct ? '2' : '0.5';
    db.prepare(
      `INSERT INTO flashcard_progress (flashcard_id, correct_count, wrong_count, next_review) VALUES (?, ?, ?, datetime('now', '+' || ? || ' days'))`
    ).run(cardId, correct ? 1 : 0, correct ? 0 : 1, days);
  }
  db.save();
  res.json({ success: true });
});

export default router;
