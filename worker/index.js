// Cloudflare Worker — proxy Gemini + analytics
// Secrets: GEMINI_KEY, ADMIN_PASS
// KV: ANALYTICS

const ALLOWED_ORIGIN = 'https://bazanji0.github.io';

function corsHeaders(extra = {}) {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Pass',
    ...extra,
  };
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders() },
  });
}

// Get today's date key
function todayKey() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

// Increment a counter in KV
async function increment(kv, date, field) {
  const key = `stats:${date}`;
  const raw = await kv.get(key, 'json');
  const stats = raw || { visits: 0, quizzes: 0, studied: 0, flashcards: 0, chats: 0, unique: [] };
  if (field === 'unique') return stats; // handled separately
  stats[field] = (stats[field] || 0) + 1;
  await kv.put(key, JSON.stringify(stats), { expirationTtl: 60 * 60 * 24 * 90 }); // 90 days
  return stats;
}

// Track a unique visitor by hashed IP
async function trackVisit(kv, date, ip) {
  const key = `stats:${date}`;
  const raw = await kv.get(key, 'json');
  const stats = raw || { visits: 0, quizzes: 0, studied: 0, flashcards: 0, chats: 0, unique: [] };

  // Hash IP for privacy
  const encoder = new TextEncoder();
  const data = encoder.encode(ip + date);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hash = [...new Uint8Array(hashBuffer)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 12);

  if (!stats.unique.includes(hash)) {
    stats.unique.push(hash);
    stats.visits = (stats.visits || 0) + 1;
  }
  await kv.put(key, JSON.stringify(stats), { expirationTtl: 60 * 60 * 24 * 90 });
  return stats;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders({ 'Access-Control-Max-Age': '86400' }) });
    }

    // ── TRACK endpoint ──
    if (path === '/track' && request.method === 'POST') {
      try {
        const { event } = await request.json();
        const date = todayKey();
        const ip = request.headers.get('CF-Connecting-IP') || '0.0.0.0';

        if (event === 'visit') {
          await trackVisit(env.ANALYTICS, date, ip);
        } else if (['quizzes', 'studied', 'flashcards', 'chats'].includes(event)) {
          await increment(env.ANALYTICS, date, event);
        }
        return jsonResponse({ ok: true });
      } catch {
        return jsonResponse({ ok: true }); // fail silently
      }
    }

    // ── STATS endpoint (admin only) ──
    if (path === '/stats' && request.method === 'GET') {
      const pass = request.headers.get('X-Admin-Pass');
      if (!pass || pass !== env.ADMIN_PASS) {
        return jsonResponse({ error: 'Non autorizzato' }, 401);
      }

      try {
        const days = parseInt(url.searchParams.get('days') || '30');
        const results = [];

        for (let i = 0; i < days; i++) {
          const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
          const raw = await env.ANALYTICS.get(`stats:${d}`, 'json');
          if (raw) {
            results.push({
              date: d,
              visits: raw.visits || 0,
              quizzes: raw.quizzes || 0,
              studied: raw.studied || 0,
              flashcards: raw.flashcards || 0,
              chats: raw.chats || 0,
              uniqueVisitors: (raw.unique || []).length,
            });
          }
        }

        // Totali
        const totals = results.reduce((acc, r) => {
          acc.visits += r.visits;
          acc.quizzes += r.quizzes;
          acc.studied += r.studied;
          acc.flashcards += r.flashcards;
          acc.chats += r.chats;
          return acc;
        }, { visits: 0, quizzes: 0, studied: 0, flashcards: 0, chats: 0 });

        return jsonResponse({ totals, daily: results });
      } catch (err) {
        return jsonResponse({ error: err.message }, 500);
      }
    }

    // ── GEMINI proxy (existing) ──
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const body = await request.json();

      const geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      const data = await geminiResponse.text();

      return new Response(data, {
        status: geminiResponse.status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    } catch (err) {
      return jsonResponse({ error: err.message }, 500);
    }
  },
};
