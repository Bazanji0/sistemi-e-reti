import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

export default function Study() {
  const { data: sections, loading } = useFetch(() => api.getSections(), []);
  const { data: stats } = useFetch(() => api.getStats(), []);

  if (loading) return <div className="text-center text-gray-500 py-20">Caricamento...</div>;

  const progressMap = {};
  if (stats) {
    stats.sectionProgress.forEach(s => {
      progressMap[s.id] = { studied: s.studied_topics, total: s.total_topics };
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Modalità Studio
        </h1>
        <p className="text-gray-500 mt-1">Seleziona una sezione per iniziare</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {sections?.map((s) => {
          const p = progressMap[s.id] || { studied: 0, total: s.topic_count };
          const pct = p.total > 0 ? Math.round((p.studied / p.total) * 100) : 0;
          return (
            <Link key={s.id} to={`/study/${s.id}`} className="card group">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center text-purple-300 font-mono font-bold border border-purple-500/20 flex-shrink-0">
                  {s.code}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{s.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1.5 bg-dark-500 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">{pct}%</span>
                  </div>
                  <div className="text-[10px] text-gray-600 mt-1">{s.topic_count} argomenti</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
