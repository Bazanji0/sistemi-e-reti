import { sections, topics, quizQuestions, flashcards, oralQuestions, glossary } from '../data/database';

// ── localStorage helpers ──
const STORAGE_KEYS = {
  studied: 'sr_studied',
  bookmarked: 'sr_bookmarked',
  quizHistory: 'sr_quiz_history',
  flashcardProgress: 'sr_flashcard_progress',
};

function getSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); } catch { return new Set(); }
}
function saveSet(key, set) { localStorage.setItem(key, JSON.stringify([...set])); }
function getArray(key) {
  try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; }
}
function saveArray(key, arr) { localStorage.setItem(key, JSON.stringify(arr)); }

// ── Shuffle helper ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── API (all synchronous, returns Promises for compatibility with useFetch) ──
export const api = {
  // Sections & Topics
  getSections: () => Promise.resolve(
    sections.map(s => ({
      ...s,
      topic_count: topics.filter(t => t.section_id === s.id).length,
    }))
  ),

  getSection: (id) => {
    const section = sections.find(s => s.id === id);
    if (!section) return Promise.resolve(null);
    const studied = getSet(STORAGE_KEYS.studied);
    const bookmarked = getSet(STORAGE_KEYS.bookmarked);
    const sectionTopics = topics
      .filter(t => t.section_id === id)
      .map(t => ({
        ...t,
        studied: studied.has(t.id),
        bookmarked: bookmarked.has(t.id),
      }));
    return Promise.resolve({ ...section, topics: sectionTopics });
  },

  getTopic: (sectionId, topicId) => {
    const tid = Number(topicId);
    const topic = topics.find(t => t.section_id === sectionId && t.id === tid);
    if (!topic) return Promise.resolve(null);
    const studied = getSet(STORAGE_KEYS.studied);
    const bookmarked = getSet(STORAGE_KEYS.bookmarked);
    return Promise.resolve({
      ...topic,
      studied: studied.has(topic.id),
      bookmarked: bookmarked.has(topic.id),
    });
  },

  // Quiz
  getQuizBySection: (id, limit = 10) => {
    const qs = shuffle(quizQuestions.filter(q => q.section_id === id));
    return Promise.resolve(qs.slice(0, limit));
  },

  getMixedQuiz: (limit = 15) => {
    return Promise.resolve(shuffle(quizQuestions).slice(0, limit));
  },

  submitQuizResult: (data) => {
    const history = getArray(STORAGE_KEYS.quizHistory);
    const sectionName = data.section_id
      ? sections.find(s => s.id === data.section_id)?.name || null
      : null;
    history.unshift({
      id: Date.now(),
      section_id: data.section_id,
      section_name: sectionName,
      score: data.score,
      total: data.total,
      created_at: new Date().toISOString(),
    });
    // Keep max 50 entries
    saveArray(STORAGE_KEYS.quizHistory, history.slice(0, 50));
    return Promise.resolve({ ok: true });
  },

  getQuizHistory: () => Promise.resolve(getArray(STORAGE_KEYS.quizHistory)),

  // Progress
  toggleStudied: (topicId) => {
    const tid = Number(topicId);
    const set = getSet(STORAGE_KEYS.studied);
    if (set.has(tid)) set.delete(tid); else set.add(tid);
    saveSet(STORAGE_KEYS.studied, set);
    return Promise.resolve({ studied: set.has(tid) });
  },

  toggleBookmark: (topicId) => {
    const tid = Number(topicId);
    const set = getSet(STORAGE_KEYS.bookmarked);
    if (set.has(tid)) set.delete(tid); else set.add(tid);
    saveSet(STORAGE_KEYS.bookmarked, set);
    return Promise.resolve({ bookmarked: set.has(tid) });
  },

  // Flashcards
  getFlashcardsBySection: (id) => Promise.resolve(
    shuffle(flashcards.filter(f => f.section_id === id))
  ),

  getAllFlashcards: () => Promise.resolve(shuffle([...flashcards])),

  submitFlashcardResult: (id, correct) => {
    const progress = getArray(STORAGE_KEYS.flashcardProgress);
    const existing = progress.find(p => p.id === id);
    if (existing) {
      existing.correct = (existing.correct || 0) + (correct ? 1 : 0);
      existing.wrong = (existing.wrong || 0) + (correct ? 0 : 1);
    } else {
      progress.push({ id, correct: correct ? 1 : 0, wrong: correct ? 0 : 1 });
    }
    saveArray(STORAGE_KEYS.flashcardProgress, progress);
    return Promise.resolve({ ok: true });
  },

  // Search
  search: (q) => {
    if (!q || q.length < 2) return Promise.resolve({ topics: [], quiz: [], glossary: [] });
    const lower = q.toLowerCase();
    const matchedTopics = topics.filter(t =>
      t.title.toLowerCase().includes(lower) ||
      t.content.toLowerCase().includes(lower) ||
      (t.keywords && t.keywords.toLowerCase().includes(lower))
    ).map(t => ({
      ...t,
      section_name: sections.find(s => s.id === t.section_id)?.name || '',
    }));
    const matchedQuiz = quizQuestions.filter(qq =>
      qq.question.toLowerCase().includes(lower)
    ).map(qq => ({
      ...qq,
      section_name: sections.find(s => s.id === qq.section_id)?.name || '',
    }));
    const matchedGlossary = glossary.filter(g =>
      g.term.toLowerCase().includes(lower) ||
      g.definition.toLowerCase().includes(lower)
    );
    return Promise.resolve({ topics: matchedTopics, quiz: matchedQuiz, glossary: matchedGlossary });
  },

  // Glossary
  getGlossary: (q) => {
    if (!q) return Promise.resolve([...glossary]);
    const lower = q.toLowerCase();
    return Promise.resolve(glossary.filter(g =>
      g.term.toLowerCase().includes(lower) ||
      g.definition.toLowerCase().includes(lower)
    ));
  },

  // Oral
  getOralBySection: (id) => Promise.resolve(
    shuffle(oralQuestions.filter(o => o.section_id === id))
  ),
  getAllOral: () => Promise.resolve(shuffle([...oralQuestions])),
  getCrossOral: () => Promise.resolve(
    shuffle(oralQuestions.filter(o => o.cross_section))
  ),

  // Stats
  getStats: () => {
    const studied = getSet(STORAGE_KEYS.studied);
    const bookmarked = getSet(STORAGE_KEYS.bookmarked);
    const history = getArray(STORAGE_KEYS.quizHistory);

    const totalTopics = topics.length;
    const studiedTopics = topics.filter(t => studied.has(t.id)).length;
    const totalQuizzes = history.length;
    const avgScore = history.length > 0
      ? Math.round(history.reduce((sum, h) => sum + (h.score / h.total) * 100, 0) / history.length)
      : 0;

    const bookmarkedTopics = topics
      .filter(t => bookmarked.has(t.id))
      .map(t => ({
        ...t,
        section_name: sections.find(s => s.id === t.section_id)?.name || '',
      }));

    const sectionProgress = sections.map(s => {
      const sectionTopics = topics.filter(t => t.section_id === s.id);
      const studiedCount = sectionTopics.filter(t => studied.has(t.id)).length;
      return {
        id: s.id,
        code: s.code,
        name: s.name,
        total_topics: sectionTopics.length,
        studied_topics: studiedCount,
      };
    });

    // Weak sections: sections where avg quiz score < 70%
    const sectionQuizScores = {};
    history.forEach(h => {
      if (h.section_id) {
        if (!sectionQuizScores[h.section_id]) sectionQuizScores[h.section_id] = [];
        sectionQuizScores[h.section_id].push((h.score / h.total) * 100);
      }
    });
    const weakSections = sections
      .map(s => {
        const scores = sectionQuizScores[s.id];
        if (!scores || scores.length === 0) return null;
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
        if (avg < 70) return { id: s.id, name: s.name, avg_score: avg };
        return null;
      })
      .filter(Boolean);

    return Promise.resolve({
      totalTopics,
      studiedTopics,
      totalQuizzes,
      avgScore,
      bookmarked: bookmarkedTopics,
      sectionProgress,
      weakSections,
    });
  },
};
