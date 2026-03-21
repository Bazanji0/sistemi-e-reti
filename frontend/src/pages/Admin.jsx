import { useState } from 'react';

const WORKER_URL = import.meta.env.VITE_WORKER_URL || '';

export default function Admin() {
  const [pass, setPass] = useState('');
  const [authed, setAuthed] = useState(false);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [days, setDays] = useState(30);

  const fetchStats = async (password, numDays) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${WORKER_URL}/stats?days=${numDays}`, {
        headers: { 'X-Admin-Pass': password },
      });
      if (res.status === 401) { setError('Password errata'); setAuthed(false); setLoading(false); return; }
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setStats(data);
      setAuthed(true);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchStats(pass, days);
  };

  const handleDaysChange = (newDays) => {
    setDays(newDays);
    fetchStats(pass, newDays);
  };

  if (!authed) {
    return (
      <div className="max-w-sm mx-auto py-20">
        <div className="card">
          <div className="text-center mb-6">
            <div className="text-3xl mb-2">{'\ud83d\udd12'}</div>
            <h1 className="text-lg font-bold text-white">Admin Analytics</h1>
            <p className="text-xs text-gray-500 mt-1">Accesso riservato</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password admin..."
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20"
              autoFocus
            />
            <button
              type="submit"
              disabled={!pass || loading}
              className="btn-primary w-full"
            >
              {loading ? 'Caricamento...' : 'Accedi'}
            </button>
            {error && <p className="text-xs text-red-400 text-center">{error}</p>}
          </form>
        </div>
      </div>
    );
  }

  const t = stats?.totals || {};
  const daily = stats?.daily || [];

  // Max values for bar chart scaling
  const maxVisits = Math.max(...daily.map(d => d.visits), 1);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="page-title">Analytics</h1>
          <p className="page-subtitle">Statistiche di utilizzo del sito</p>
        </div>
        <div className="flex items-center gap-2">
          {[7, 14, 30].map(d => (
            <button
              key={d}
              onClick={() => handleDaysChange(d)}
              className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
                days === d
                  ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.04]'
              }`}
            >
              {d}g
            </button>
          ))}
        </div>
      </div>

      {loading && <div className="text-center text-gray-600 py-10">Caricamento...</div>}

      {!loading && stats && (
        <>
          {/* Totals */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { label: 'Visitatori', value: t.visits || 0, emoji: '\ud83d\udc64' },
              { label: 'Quiz fatti', value: t.quizzes || 0, emoji: '\ud83e\udde0' },
              { label: 'Argomenti studiati', value: t.studied || 0, emoji: '\ud83d\udcda' },
              { label: 'Flashcards', value: t.flashcards || 0, emoji: '\ud83c\udccf' },
              { label: 'Chat Stocchi', value: t.chats || 0, emoji: '\ud83d\udcac' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="text-2xl mb-1">{s.emoji}</div>
                <div className="text-2xl font-bold text-white tracking-tight">{s.value}</div>
                <div className="text-[10px] text-gray-500 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Daily chart */}
          <div>
            <h2 className="text-sm font-semibold text-gray-300 mb-4">Visitatori giornalieri</h2>
            <div className="card overflow-x-auto">
              <div className="flex items-end gap-1 min-w-[400px]" style={{ height: '180px' }}>
                {[...daily].reverse().map((d, i) => {
                  const pct = (d.visits / maxVisits) * 100;
                  const isToday = d.date === new Date().toISOString().slice(0, 10);
                  return (
                    <div key={d.date} className="flex-1 flex flex-col items-center gap-1 group relative">
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 bg-dark-900/95 border border-white/[0.10] rounded-lg px-2.5 py-1.5 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-xl">
                        <div className="font-semibold text-white">{d.date}</div>
                        <div className="text-gray-400">{d.visits} visit{d.visits !== 1 ? 'e' : 'a'}</div>
                        <div className="text-gray-500">{d.quizzes} quiz, {d.studied} studio, {d.chats} chat</div>
                      </div>
                      {/* Bar */}
                      <div
                        className={`w-full rounded-t-sm transition-all duration-300 ${
                          isToday ? 'bg-purple-500' : 'bg-purple-500/40'
                        } hover:bg-purple-400`}
                        style={{ height: `${Math.max(pct, 2)}%`, minHeight: '2px' }}
                      />
                      {/* Date label (every 5th) */}
                      {(i % 5 === 0 || isToday) && (
                        <span className={`text-[8px] -rotate-45 origin-top-left mt-1 ${isToday ? 'text-purple-400' : 'text-gray-600'}`}>
                          {d.date.slice(5)}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Daily table */}
          <div>
            <h2 className="text-sm font-semibold text-gray-300 mb-4">Dettaglio giornaliero</h2>
            <div className="card overflow-x-auto p-0">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left p-3 text-gray-500 font-medium">Data</th>
                    <th className="text-center p-3 text-gray-500 font-medium">Visitatori</th>
                    <th className="text-center p-3 text-gray-500 font-medium">Quiz</th>
                    <th className="text-center p-3 text-gray-500 font-medium">Studio</th>
                    <th className="text-center p-3 text-gray-500 font-medium">Flash</th>
                    <th className="text-center p-3 text-gray-500 font-medium">Chat</th>
                  </tr>
                </thead>
                <tbody>
                  {daily.map(d => {
                    const isToday = d.date === new Date().toISOString().slice(0, 10);
                    return (
                      <tr key={d.date} className={`border-b border-white/[0.03] ${isToday ? 'bg-purple-500/[0.06]' : ''}`}>
                        <td className={`p-3 font-mono ${isToday ? 'text-purple-300 font-semibold' : 'text-gray-400'}`}>
                          {d.date} {isToday && '(oggi)'}
                        </td>
                        <td className="p-3 text-center text-white font-semibold">{d.visits}</td>
                        <td className="p-3 text-center text-gray-400">{d.quizzes}</td>
                        <td className="p-3 text-center text-gray-400">{d.studied}</td>
                        <td className="p-3 text-center text-gray-400">{d.flashcards}</td>
                        <td className="p-3 text-center text-gray-400">{d.chats}</td>
                      </tr>
                    );
                  })}
                  {daily.length === 0 && (
                    <tr><td colSpan="6" className="p-8 text-center text-gray-600">Nessun dato ancora</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
