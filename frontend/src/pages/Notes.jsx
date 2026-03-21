import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const loadNotes = () => {
    api.getAllNotes().then(n => {
      setNotes(n);
      setLoading(false);
    });
  };

  useEffect(() => { loadNotes(); }, []);

  const handleDelete = async (topicId) => {
    await api.deleteNote(topicId);
    setDeleteConfirm(null);
    loadNotes();
  };

  // Group by section
  const grouped = {};
  const filtered = search
    ? notes.filter(n =>
        n.topicTitle.toLowerCase().includes(search.toLowerCase()) ||
        n.text.toLowerCase().includes(search.toLowerCase()) ||
        n.sectionName.toLowerCase().includes(search.toLowerCase())
      )
    : notes;

  filtered.forEach(n => {
    if (!grouped[n.sectionId]) {
      grouped[n.sectionId] = { name: n.sectionName, sectionId: n.sectionId, notes: [] };
    }
    grouped[n.sectionId].notes.push(n);
  });

  const sectionGroups = Object.values(grouped);

  if (loading) return <div className="text-center text-gray-600 py-20">Caricamento...</div>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="page-title">Appunti</h1>
        <p className="page-subtitle">I tuoi appunti personali organizzati per argomento</p>
      </div>

      {/* Stats bar */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span><strong className="text-white">{notes.length}</strong> appunt{notes.length === 1 ? 'o' : 'i'}</span>
        </div>
        {notes.length > 0 && (
          <div className="flex-1 min-w-[200px] max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cerca negli appunti..."
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20"
            />
          </div>
        )}
      </div>

      {/* Empty state */}
      {notes.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">{'\ud83d\udcdd'}</div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Nessun appunto</h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
            Apri un argomento nella sezione Studio e premi il bottone "Appunti" per iniziare a scrivere.
          </p>
          <Link
            to="/study"
            className="btn-primary inline-flex items-center gap-2"
          >
            Vai allo studio
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      )}

      {/* No results */}
      {notes.length > 0 && filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Nessun appunto trovato per "{search}"</p>
        </div>
      )}

      {/* Notes grouped by section */}
      {sectionGroups.map(group => (
        <div key={group.sectionId}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="section-badge w-8 h-8 text-[10px]">{group.sectionId}</div>
            <h2 className="text-sm font-semibold text-gray-300">{group.name}</h2>
            <span className="text-[11px] text-gray-600 ml-auto">{group.notes.length} appunt{group.notes.length === 1 ? 'o' : 'i'}</span>
          </div>
          <div className="grid gap-2.5">
            {group.notes.map(note => (
              <div key={note.topicId} className="card group relative">
                <div className="flex items-start justify-between gap-3">
                  <Link
                    to={`/study/${note.sectionId}/${note.topicId}`}
                    className="text-sm font-medium text-purple-300 hover:text-purple-200 transition-colors flex-1 min-w-0"
                  >
                    {note.topicTitle}
                  </Link>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="text-[10px] text-gray-600">
                      {new Date(note.updatedAt).toLocaleDateString('it-IT', {
                        day: '2-digit', month: 'short',
                      })}
                    </span>
                    {deleteConfirm === note.topicId ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleDelete(note.topicId)}
                          className="text-[10px] text-red-400 hover:text-red-300 bg-red-500/10 px-2 py-0.5 rounded-lg border border-red-500/20"
                        >
                          Elimina
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="text-[10px] text-gray-500 hover:text-gray-300 px-1.5 py-0.5"
                        >
                          No
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(note.topicId)}
                        className="text-gray-700 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 p-0.5"
                        title="Elimina appunto"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
                <div
                  className="text-[13px] text-gray-400 mt-2 line-clamp-4 leading-relaxed note-editor"
                  dangerouslySetInnerHTML={{ __html: note.text }}
                />
                <Link
                  to={`/study/${note.sectionId}/${note.topicId}`}
                  className="text-[11px] text-purple-400/70 hover:text-purple-300 mt-2 inline-block"
                >
                  Apri argomento →
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
