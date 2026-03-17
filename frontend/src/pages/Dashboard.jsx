import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

function ProgressBar({ value, max, className = '' }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className={`h-2 bg-dark-500 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-700"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function Dashboard() {
  const { data: stats, loading } = useFetch(() => api.getStats(), []);

  if (loading) return <div className="text-center text-gray-500 py-20">Caricamento...</div>;
  if (!stats) return null;

  const totalPct = stats.totalTopics > 0 ? Math.round((stats.studiedTopics / stats.totalTopics) * 100) : 0;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-500 mt-1">Panoramica del tuo progresso in Sistemi e Reti</p>
      </div>

      {/* Global stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Argomenti studiati', value: `${stats.studiedTopics}/${stats.totalTopics}`, sub: `${totalPct}%` },
          { label: 'Quiz completati', value: stats.totalQuizzes, sub: 'totali' },
          { label: 'Media quiz', value: `${stats.avgScore}%`, sub: 'punteggio' },
          { label: 'Segnalibri', value: stats.bookmarked.length, sub: 'salvati' },
        ].map((s, i) => (
          <div key={i} className="card text-center">
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Section progress */}
      <div>
        <h2 className="text-lg font-semibold text-gray-200 mb-4">Progresso per sezione</h2>
        <div className="grid gap-3">
          {stats.sectionProgress.map((s) => {
            const pct = s.total_topics > 0 ? Math.round((s.studied_topics / s.total_topics) * 100) : 0;
            return (
              <Link key={s.id} to={`/study/${s.id}`} className="card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center text-purple-300 font-mono font-bold text-sm border border-purple-500/20">
                  {s.code}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-200 truncate">{s.name}</span>
                    <span className="text-xs text-gray-500 ml-2">{pct}%</span>
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
          <h2 className="text-lg font-semibold text-gray-200 mb-4">Da ripassare</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {stats.weakSections.map((s) => (
              <Link key={s.id} to={`/quiz/play/${s.id}`} className="card border-red-500/30 hover:border-red-500/50">
                <div className="text-sm font-medium text-red-300">{s.name}</div>
                <div className="text-xs text-gray-500 mt-1">Media: {Math.round(s.avg_score)}%</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick links */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Link to="/quiz/play" className="card text-center group">
          <div className="text-2xl mb-2">◆</div>
          <div className="text-sm font-medium text-gray-200 group-hover:text-purple-300 transition-colors">Quiz misto</div>
        </Link>
        <Link to="/flashcards" className="card text-center group">
          <div className="text-2xl mb-2">▣</div>
          <div className="text-sm font-medium text-gray-200 group-hover:text-purple-300 transition-colors">Flashcards</div>
        </Link>
        <Link to="/oral" className="card text-center group">
          <div className="text-2xl mb-2">◎</div>
          <div className="text-sm font-medium text-gray-200 group-hover:text-purple-300 transition-colors">Simulazione orale</div>
        </Link>
      </div>
    </div>
  );
}
