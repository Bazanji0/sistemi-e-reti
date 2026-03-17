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

  // Group by first letter
  const grouped = {};
  filtered.forEach(t => {
    const letter = t.term[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(t);
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Glossario
        </h1>
        <p className="text-gray-500 mt-1">{terms?.length || 0} termini tecnici</p>
      </div>

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Cerca un termine..."
        className="w-full bg-dark-700 border border-purple-500/20 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
      />

      {loading ? (
        <div className="text-center text-gray-500 py-10">Caricamento...</div>
      ) : (
        <div className="space-y-6">
          {Object.keys(grouped).sort().map(letter => (
            <div key={letter}>
              <div className="text-lg font-bold text-purple-400 font-mono mb-2 border-b border-purple-500/20 pb-1">
                {letter}
              </div>
              <div className="space-y-2">
                {grouped[letter].map(t => (
                  <div key={t.id} className="card py-3">
                    <div className="font-medium text-gray-200 text-sm">{t.term}</div>
                    <div className="text-xs text-gray-400 mt-1">{t.definition}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center text-gray-500 py-10">Nessun termine trovato.</div>
          )}
        </div>
      )}
    </div>
  );
}
