import { Router } from 'express';
import { getDB } from '../db/database.js';

const router = Router();

// Get all sections with topic count
router.get('/', (req, res) => {
  const db = getDB();
  const sections = db.prepare(`
    SELECT s.*, COUNT(t.id) as topic_count
    FROM sections s
    LEFT JOIN topics t ON t.section_id = s.id
    GROUP BY s.id
    ORDER BY s.sort_order
  `).all();
  res.json(sections);
});

// Get section with topics
router.get('/:id', (req, res) => {
  const db = getDB();
  const section = db.prepare('SELECT * FROM sections WHERE id = ?').get(req.params.id);
  if (!section) return res.status(404).json({ error: 'Section not found' });

  const topics = db.prepare(`
    SELECT t.*, COALESCE(p.studied, 0) as studied, COALESCE(p.bookmarked, 0) as bookmarked
    FROM topics t
    LEFT JOIN progress p ON p.topic_id = t.id
    WHERE t.section_id = ?
    ORDER BY t.number
  `).all(req.params.id);

  res.json({ ...section, topics });
});

// Get single topic
router.get('/:sectionId/topics/:topicId', (req, res) => {
  const db = getDB();
  const topic = db.prepare(`
    SELECT t.*, COALESCE(p.studied, 0) as studied, COALESCE(p.bookmarked, 0) as bookmarked
    FROM topics t
    LEFT JOIN progress p ON p.topic_id = t.id
    WHERE t.id = ?
  `).get(req.params.topicId);
  if (!topic) return res.status(404).json({ error: 'Topic not found' });
  res.json(topic);
});

export default router;
