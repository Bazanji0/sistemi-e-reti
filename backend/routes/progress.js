import { Router } from 'express';
import { getDB } from '../db/database.js';

const router = Router();

// Toggle studied
router.post('/studied/:topicId', (req, res) => {
  const db = getDB();
  const topicId = parseInt(req.params.topicId);
  const existing = db.prepare('SELECT * FROM progress WHERE topic_id = ?').get(topicId);
  if (existing) {
    db.prepare('UPDATE progress SET studied = ?, updated_at = datetime("now") WHERE topic_id = ?')
      .run(existing.studied ? 0 : 1, topicId);
  } else {
    db.prepare('INSERT INTO progress (topic_id, studied) VALUES (?, 1)').run(topicId);
  }
  db.save();
  res.json({ success: true });
});

// Toggle bookmark
router.post('/bookmark/:topicId', (req, res) => {
  const db = getDB();
  const topicId = parseInt(req.params.topicId);
  const existing = db.prepare('SELECT * FROM progress WHERE topic_id = ?').get(topicId);
  if (existing) {
    db.prepare('UPDATE progress SET bookmarked = ?, updated_at = datetime("now") WHERE topic_id = ?')
      .run(existing.bookmarked ? 0 : 1, topicId);
  } else {
    db.prepare('INSERT INTO progress (topic_id, bookmarked) VALUES (?, 1)').run(topicId);
  }
  db.save();
  res.json({ success: true });
});

// Get all progress
router.get('/', (req, res) => {
  const db = getDB();
  const progress = db.prepare('SELECT * FROM progress').all();
  res.json(progress);
});

export default router;
