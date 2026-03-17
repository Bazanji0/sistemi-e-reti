import express from 'express';
import cors from 'cors';
import { initDB } from './db/database.js';
import topicsRouter from './routes/topics.js';
import quizRouter from './routes/quiz.js';
import progressRouter from './routes/progress.js';
import flashcardsRouter from './routes/flashcards.js';
import searchRouter from './routes/search.js';
import glossaryRouter from './routes/glossary.js';
import oralRouter from './routes/oral.js';
import statsRouter from './routes/stats.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/sections', topicsRouter);
app.use('/api/quiz', quizRouter);
app.use('/api/progress', progressRouter);
app.use('/api/flashcards', flashcardsRouter);
app.use('/api/search', searchRouter);
app.use('/api/glossary', glossaryRouter);
app.use('/api/oral', oralRouter);
app.use('/api/stats', statsRouter);

async function start() {
  await initDB();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start();
