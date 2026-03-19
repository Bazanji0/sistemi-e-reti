import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

export default function Glossary() {
  const [search, setSearch] = useState('');
  const { data: terms, loading } = useFetch(() => api.getGlossary(), []);

  const filtered = terms?.filter(t =>
    !search ||
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.definition.toLowerCase().includes(search.toLowerCase())
  ) || [];

  const grouped = {};
  filtered.forEach(t => {
    const letter = t.term[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(t);
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Glossario</h1>
        <p className="page-subtitle">{terms?.length || 0} termini tecnici</p>
      </div>

      <div className="relative">
        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Cerca un termine..."
          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl pl-10 pr-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/30 transition-colors"
        />
      </div>

      {loading ? (
        <div className="text-center text-gray-600 py-10">Caricamento...</div>
      ) : (
        <div className="space-y-8">
          {Object.keys(grouped).sort().map(letter => (
            <div key={letter}>
              <div className="text-sm font-bold text-purple-400 font-mono mb-2.5 pb-1.5 border-b border-white/[0.04] sticky top-14 bg-dark-900/90 backdrop-blur-sm z-10">
                {letter}
              </div>
              <div className="space-y-1.5">
                {grouped[letter].map(t => (
                  <div key={t.id} className="card py-3 px-4">
                    <div className="font-medium text-gray-200 text-sm">{t.term}</div>
                    <div className="text-xs text-gray-500 mt-1 leading-relaxed">{t.definition}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center text-gray-600 py-10">Nessun termine trovato.</div>
          )}
        </div>
      )}
    </div>
  );
}
