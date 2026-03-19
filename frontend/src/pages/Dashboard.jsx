import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';
import { QuizIcon, FlashcardIcon, OralIcon } from '../components/Icons';

function ProgressBar({ value, max, className = '' }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className={`h-1.5 bg-white/[0.06] rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{
          width: `${pct}%`,
          background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
        }}
      />
    </div>
  );
}

export default function Dashboard() {
  const { data: stats, loading } = useFetch(() => api.getStats(), []);

  if (loading) return <div className="text-center text-gray-600 py-20">Caricamento...</div>;
  if (!stats) return null;

  const totalPct = stats.totalTopics > 0 ? Math.round((stats.studiedTopics / stats.totalTopics) * 100) : 0;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Panoramica del tuo progresso in Sistemi e Reti</p>
      </div>

      {/* Global stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          { label: 'Studiati', value: `${stats.studiedTopics}/${stats.totalTopics}`, accent: totalPct > 0 },
          { label: 'Quiz fatti', value: stats.totalQuizzes, accent: false },
          { label: 'Media quiz', value: `${stats.avgScore}%`, accent: stats.avgScore >= 70 },
          { label: 'Segnalibri', value: stats.bookmarked.length, accent: false },
        ].map((s, i) => (
          <div key={i} className="stat-card">
            <div className={`text-2xl sm:text-3xl font-bold tracking-tight ${s.accent ? 'text-white' : 'text-gray-200'}`}>
              {s.value}
            </div>
            <div className="text-xs text-gray-500 mt-1.5 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Section progress */}
      <div>
        <h2 className="text-base font-semibold text-gray-300 mb-4">Progresso per sezione</h2>
        <div className="grid gap-2">
          {stats.sectionProgress.map((s) => {
            const pct = s.total_topics > 0 ? Math.round((s.studied_topics / s.total_topics) * 100) : 0;
            return (
              <Link key={s.id} to={`/study/${s.id}`} className="card flex items-center gap-4 group py-3.5 px-4">
                <div className="section-badge w-9 h-9 text-xs">
                  {s.code}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors truncate">{s.name}</span>
                    <span className={`text-xs font-mono ml-2 ${pct > 0 ? 'text-purple-400' : 'text-gray-600'}`}>{pct}%</span>
                  </div>
                  <ProgressBar value={s.studied_topics} max={s.total_topics} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Weak sections */}
      {stats.weakSections.length > 0 && (
        <div>
          <h2 className="text-base font-semibold text-gray-300 mb-4">Da ripassare</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {stats.weakSections.map((s) => (
              <Link key={s.id} to={`/quiz/play/${s.id}`} className="card border-red-500/20 hover:border-red-500/30 group">
                <div className="text-sm font-medium text-red-300 group-hover:text-red-200 transition-colors">{s.name}</div>
                <div className="text-xs text-gray-600 mt-1">Media: {Math.round(s.avg_score)}%</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick links */}
      <div>
        <h2 className="text-base font-semibold text-gray-300 mb-4">Azioni rapide</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link to="/quiz/play" className="card-glow text-center group py-6">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 mb-3 group-hover:scale-110 transition-transform">
              <QuizIcon />
            </div>
            <div className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">Quiz misto</div>
            <div className="text-xs text-gray-600 mt-0.5">Tutte le sezioni</div>
          </Link>
          <Link to="/flashcards" className="card-glow text-center group py-6">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 mb-3 group-hover:scale-110 transition-transform">
              <FlashcardIcon />
            </div>
            <div className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">Flashcards</div>
            <div className="text-xs text-gray-600 mt-0.5">Ripasso veloce</div>
          </Link>
          <Link to="/oral" className="card-glow text-center group py-6">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
              <OralIcon />
            </div>
            <div className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">Simulazione orale</div>
            <div className="text-xs text-gray-600 mt-0.5">Prepara il colloquio</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
