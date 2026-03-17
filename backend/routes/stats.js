import { Router } from 'express';
import { getDB } from '../db/database.js';

const router = Router();

router.get('/', (req, res) => {
  const db = getDB();

  const totalTopics = db.prepare('SELECT COUNT(*) as c FROM topics').get().c;
  const studiedTopics = db.prepare('SELECT COUNT(*) as c FROM progress WHERE studied = 1').get().c;
  const totalQuizzes = db.prepare('SELECT COUNT(*) as c FROM quiz_results').get().c;
  const avgScore = db.prepare(
    'SELECT COALESCE(AVG(CAST(score AS FLOAT) / total * 100), 0) as avg FROM quiz_results'
  ).get().avg;

  // Per-section progress
  const sectionProgress = db.prepare(`
    SELECT s.id, s.code, s.name,
           COUNT(t.id) as total_topics,
           COALESCE(SUM(CASE WHEN p.studied = 1 THEN 1 ELSE 0 END), 0) as studied_topics
    FROM sections s
    LEFT JOIN topics t ON t.section_id = s.id
    LEFT JOIN progress p ON p.topic_id = t.id
    GROUP BY s.id
    ORDER BY s.sort_order
  `).all();

  // Topics to review (most wrong in quizzes - approximate by section quiz performance)
  const weakSections = db.prepare(`
    SELECT s.id, s.name, AVG(CAST(qr.score AS FLOAT) / qr.total * 100) as avg_score
    FROM quiz_results qr
    JOIN sections s ON s.id = qr.section_id
    GROUP BY qr.section_id
    HAVING avg_score < 70
    ORDER BY avg_score ASC
    LIMIT 5
  `).all();

  // Bookmarked topics
  const bookmarked = db.prepare(`
    SELECT t.id, t.title, t.section_id, s.name as section_name
    FROM topics t
    JOIN progress p ON p.topic_id = t.id
    JOIN sections s ON s.id = t.section_id
    WHERE p.bookmarked = 1
  `).all();

  res.json({
    totalTopics,
    studiedTopics,
    totalQuizzes,
    avgScore: Math.round(avgScore * 10) / 10,
    sectionProgress,
    weakSections,
    bookmarked,
  });
});

export default router;
