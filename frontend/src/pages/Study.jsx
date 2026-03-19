import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

export default function Study() {
  const { data: sections, loading } = useFetch(() => api.getSections(), []);
  const { data: stats } = useFetch(() => api.getStats(), []);

  if (loading) return <div className="text-center text-gray-600 py-20">Caricamento...</div>;

  const progressMap = {};
  if (stats) {
    stats.sectionProgress.forEach(s => {
      progressMap[s.id] = { studied: s.studied_topics, total: s.total_topics };
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Studio</h1>
        <p className="page-subtitle">Seleziona una sezione per iniziare</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {sections?.map((s) => {
          const p = progressMap[s.id] || { studied: 0, total: s.topic_count };
          const pct = p.total > 0 ? Math.round((p.studied / p.total) * 100) : 0;
          return (
            <Link key={s.id} to={`/study/${s.id}`} className="card group">
              <div className="flex items-start gap-3.5">
                <div className="section-badge">
                  {s.code}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors text-[15px]">
                    {s.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{s.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${pct}%`,
                          background: pct > 0 ? 'linear-gradient(90deg, #7c3aed, #3b82f6)' : 'transparent',
                        }}
                      />
                    </div>
                    <span className={`text-[10px] font-mono ${pct > 0 ? 'text-purple-400' : 'text-gray-700'}`}>{pct}%</span>
                  </div>
                  <div className="text-[10px] text-gray-600 mt-1.5">{s.topic_count} argomenti</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
