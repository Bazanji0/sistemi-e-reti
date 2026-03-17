import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

export default function SectionView() {
  const { sectionId } = useParams();
  const { data: section, loading, refetch } = useFetch(() => api.getSection(sectionId), [sectionId]);

  if (loading) return <div className="text-center text-gray-500 py-20">Caricamento...</div>;
  if (!section) return <div className="text-center text-gray-500 py-20">Sezione non trovata</div>;

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
        <Link to="/study" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
          ← Torna alle sezioni
        </Link>
        <div className="flex items-center gap-3 mt-2">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center text-purple-300 font-mono font-bold border border-purple-500/20">
            {section.code}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-100">{section.name}</h1>
            <p className="text-sm text-gray-500">{section.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex-1 h-2 bg-dark-500 rounded-full overflow-hidden max-w-xs">
            <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-sm text-gray-400">{studied}/{section.topics.length} studiati</span>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        <Link to={`/quiz/play/${sectionId}`} className="btn-primary text-sm">Quiz sezione</Link>
        <Link to={`/flashcards/${sectionId}`} className="btn-secondary text-sm">Flashcards</Link>
        <Link to={`/oral/${sectionId}`} className="btn-secondary text-sm">Simulazione orale</Link>
      </div>

      <div className="space-y-2">
        {section.topics.map((t) => (
          <Link
            key={t.id}
            to={`/study/${sectionId}/${t.id}`}
            className="card flex items-center gap-3 group"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 ${
              t.studied
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-dark-500 text-gray-500 border border-dark-500'
            }`}>
              {t.number}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-200 group-hover:text-purple-300 transition-colors truncate">
                {t.title}
              </h3>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={(e) => handleToggleBookmark(e, t.id)}
                className={`p-1.5 rounded-lg transition-colors ${t.bookmarked ? 'text-yellow-400' : 'text-gray-600 hover:text-yellow-400'}`}
                title="Segnalibro"
              >
                ★
              </button>
              <button
                onClick={(e) => handleToggleStudied(e, t.id)}
                className={`p-1.5 rounded-lg text-xs transition-colors ${t.studied ? 'text-green-400' : 'text-gray-600 hover:text-green-400'}`}
                title="Segna come studiato"
              >
                ✓
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
