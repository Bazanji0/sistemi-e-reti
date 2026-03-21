import { sections, topics, quizQuestions, flashcards, oralQuestions, glossary } from '../data/database';

// ── Analytics tracking (silent, no errors) ──
const WORKER_URL = import.meta.env.VITE_WORKER_URL || '';
function trackEvent(event) {
  if (!WORKER_URL) return;
  fetch(`${WORKER_URL}/track`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event }),
  }).catch(() => {});
}

// Track visit once per session
if (!sessionStorage.getItem('sr_visited')) {
  trackEvent('visit');
  sessionStorage.setItem('sr_visited', '1');
}

// ── localStorage helpers ──
const STORAGE_KEYS = {
  studied: 'sr_studied',
  bookmarked: 'sr_bookmarked',
  quizHistory: 'sr_quiz_history',
  flashcardProgress: 'sr_flashcard_progress',
  studyDays: 'sr_study_days',
  notes: 'sr_notes',
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
    trackEvent('quizzes');
    return Promise.resolve({ ok: true });
  },

  getQuizHistory: () => Promise.resolve(getArray(STORAGE_KEYS.quizHistory)),

  // Progress
  toggleStudied: (topicId) => {
    const tid = Number(topicId);
    const set = getSet(STORAGE_KEYS.studied);
    const wasStudied = set.has(tid);
    if (wasStudied) set.delete(tid); else set.add(tid);
    saveSet(STORAGE_KEYS.studied, set);
    if (!wasStudied) trackEvent('studied');
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
    trackEvent('flashcards');
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

  // Streak
  recordStudyActivity: () => {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const days = getArray(STORAGE_KEYS.studyDays);
    if (!days.includes(today)) {
      days.push(today);
      // Keep last 365 days max
      if (days.length > 365) days.shift();
      saveArray(STORAGE_KEYS.studyDays, days);
    }
    return Promise.resolve({ ok: true });
  },

  getStreak: () => {
    const days = getArray(STORAGE_KEYS.studyDays).sort();
    if (days.length === 0) return Promise.resolve({ streak: 0, studiedToday: false });

    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const studiedToday = days.includes(today);

    // Start counting from today or yesterday
    let startDate = studiedToday ? today : (days.includes(yesterday) ? yesterday : null);
    if (!startDate) return Promise.resolve({ streak: 0, studiedToday: false });

    let streak = 1;
    let current = new Date(startDate);
    while (true) {
      current = new Date(current.getTime() - 86400000);
      const dateStr = current.toISOString().slice(0, 10);
      if (days.includes(dateStr)) {
        streak++;
      } else {
        break;
      }
    }

    return Promise.resolve({ streak, studiedToday, totalDays: days.length });
  },

  // Notes
  getNotes: () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.notes) || '{}'); } catch { return {}; }
  },

  getNote: (topicId) => {
    const notes = api.getNotes();
    return Promise.resolve(notes[topicId] || null);
  },

  saveNote: (topicId, text, sectionId, topicTitle) => {
    const notes = api.getNotes();
    if (!text || text.trim() === '') {
      delete notes[topicId];
    } else {
      notes[topicId] = {
        text: text.trim(),
        sectionId,
        topicTitle,
        updatedAt: new Date().toISOString(),
      };
    }
    localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(notes));
    return Promise.resolve({ ok: true });
  },

  deleteNote: (topicId) => {
    const notes = api.getNotes();
    delete notes[topicId];
    localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(notes));
    return Promise.resolve({ ok: true });
  },

  getAllNotes: () => {
    const notes = api.getNotes();
    const entries = Object.entries(notes).map(([topicId, note]) => ({
      topicId: Number(topicId),
      ...note,
      sectionName: sections.find(s => s.id === note.sectionId)?.name || note.sectionId,
    }));
    // Sort by most recently updated
    entries.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    return Promise.resolve(entries);
  },

  getNotesCount: () => {
    return Object.keys(api.getNotes()).length;
  },

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
