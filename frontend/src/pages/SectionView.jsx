import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

export default function SectionView() {
  const { sectionId } = useParams();
  const { data: section, loading, refetch } = useFetch(() => api.getSection(sectionId), [sectionId]);

  if (loading) return <div className="text-center text-gray-600 py-20">Caricamento...</div>;
  if (!section) return <div className="text-center text-gray-600 py-20">Sezione non trovata</div>;

  const studied = section.topics.filter(t => t.studied).length;
  const pct = section.topics.length > 0 ? Math.round((studied / section.topics.length) * 100) : 0;

  const handleToggleStudied = async (e, topicId) => {
    e.preventDefault();
    e.stopPropagation();
    await api.toggleStudied(topicId);
    refetch();
  };

  const handleToggleBookmark = async (e, topicId) => {
    e.preventDefault();
    e.stopPropagation();
    await api.toggleBookmark(topicId);
    refetch();
  };

  return (
    <div className="space-y-6">
      <div>
        <Link to="/study" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-400 transition-colors mb-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
          Torna alle sezioni
        </Link>
        <div className="flex items-center gap-4 mt-1">
          <div className="section-badge w-14 h-14 text-lg">
            {section.code}
          </div>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-white">{section.name}</h1>
            <p className="text-sm text-gray-500 mt-0.5">{section.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden max-w-xs">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #7c3aed, #3b82f6)' }}
            />
          </div>
          <span className="text-sm text-gray-500">{studied}/{section.topics.length} studiati</span>
        </div>
      </div>

      <div className="flex gap-2.5 flex-wrap">
        <Link to={`/quiz/play/${sectionId}`} className="btn-primary">Quiz sezione</Link>
        <Link to={`/flashcards/${sectionId}`} className="btn-secondary">Flashcards</Link>
        <Link to={`/oral/${sectionId}`} className="btn-secondary">Simulazione orale</Link>
      </div>

      <div className="space-y-1.5">
        {section.topics.map((t) => (
          <Link
            key={t.id}
            to={`/study/${sectionId}/${t.id}`}
            className="card flex items-center gap-3 group py-3 px-4"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 transition-colors ${
              t.studied
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                : 'bg-white/[0.04] text-gray-600 border border-white/[0.06]'
            }`}>
              {t.number}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors truncate">
                {t.title}
              </h3>
            </div>
            <div className="flex items-center gap-0.5 flex-shrink-0">
              <button
                onClick={(e) => handleToggleBookmark(e, t.id)}
                className={`p-2 rounded-lg transition-all ${t.bookmarked ? 'text-amber-400 hover:text-amber-300' : 'text-gray-700 hover:text-amber-400'}`}
                title="Segnalibro"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={t.bookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </button>
              <button
                onClick={(e) => handleToggleStudied(e, t.id)}
                className={`p-2 rounded-lg transition-all ${t.studied ? 'text-emerald-400 hover:text-emerald-300' : 'text-gray-700 hover:text-emerald-400'}`}
                title="Segna come studiato"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={t.studied ? '3' : '2'} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
