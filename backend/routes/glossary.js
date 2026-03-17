import { Router } from 'express';
import { getDB } from '../db/database.js';

const router = Router();

router.get('/', (req, res) => {
  const db = getDB();
  const q = req.query.q;
  let terms;
  if (q) {
    terms = db.prepare('SELECT * FROM glossary WHERE term LIKE ? OR definition LIKE ? ORDER BY term')
      .all(`%${q}%`, `%${q}%`);
  } else {
    terms = db.prepare('SELECT * FROM glossary ORDER BY term').all();
  }
  res.json(terms);
});

export default router;
