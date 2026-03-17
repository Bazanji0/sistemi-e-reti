const BASE = '/api';

async function fetchJSON(url) {
  const res = await fetch(`${BASE}${url}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function postJSON(url, data) {
  const res = await fetch(`${BASE}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export const api = {
  // Sections & Topics
  getSections: () => fetchJSON('/sections'),
  getSection: (id) => fetchJSON(`/sections/${id}`),
  getTopic: (sectionId, topicId) => fetchJSON(`/sections/${sectionId}/topics/${topicId}`),

  // Quiz
  getQuizBySection: (id, limit) => fetchJSON(`/quiz/section/${id}?limit=${limit || 10}`),
  getMixedQuiz: (limit) => fetchJSON(`/quiz/mixed?limit=${limit || 15}`),
  submitQuizResult: (data) => postJSON('/quiz/result', data),
  getQuizHistory: () => fetchJSON('/quiz/history'),

  // Progress
  toggleStudied: (topicId) => postJSON(`/progress/studied/${topicId}`),
  toggleBookmark: (topicId) => postJSON(`/progress/bookmark/${topicId}`),
  getProgress: () => fetchJSON('/progress'),

  // Flashcards
  getFlashcardsBySection: (id) => fetchJSON(`/flashcards/section/${id}`),
  getAllFlashcards: () => fetchJSON('/flashcards'),
  submitFlashcardResult: (id, correct) => postJSON(`/flashcards/${id}/result`, { correct }),

  // Search
  search: (q) => fetchJSON(`/search?q=${encodeURIComponent(q)}`),

  // Glossary
  getGlossary: (q) => fetchJSON(`/glossary${q ? `?q=${encodeURIComponent(q)}` : ''}`),

  // Oral
  getOralBySection: (id) => fetchJSON(`/oral/section/${id}`),
  getAllOral: () => fetchJSON('/oral'),
  getCrossOral: () => fetchJSON('/oral/cross'),

  // Stats
  getStats: () => fetchJSON('/stats'),
};
