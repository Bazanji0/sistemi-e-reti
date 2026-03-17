import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Quiz() {
  const { data: sections } = useFetch(() => api.getSections(), []);
  const { data: history } = useFetch(() => api.getQuizHistory(), []);

  const chartData = history?.slice(0, 10).reverse().map((h, i) => ({
    name: h.section_name ? h.section_name.substring(0, 8) : `Mix #${i + 1}`,
    punteggio: Math.round((h.score / h.total) * 100),
  })) || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Quiz
        </h1>
        <p className="text-gray-500 mt-1">Metti alla prova le tue conoscenze</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/quiz/play" className="card text-center group neon-glow">
          <div className="text-3xl mb-2">◆</div>
          <h3 className="font-semibold text-purple-300">Quiz misto</h3>
          <p className="text-xs text-gray-500 mt-1">Domande da tutte le sezioni</p>
        </Link>
        {sections?.map((s) => (
          <Link key={s.id} to={`/quiz/play/${s.id}`} className="card group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center text-purple-300 font-mono font-bold text-sm border border-purple-500/20">
                {s.code}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-200 group-hover:text-purple-300 transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs text-gray-500">{s.topic_count} argomenti</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {chartData.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-200 mb-4">Storico risultati</h2>
          <div className="card" style={{ height: 250 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 11 }} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{ background: '#161625', border: '1px solid rgba(168,85,247,0.3)', borderRadius: 8 }}
                  labelStyle={{ color: '#a855f7' }}
                />
                <Bar dataKey="punteggio" fill="url(#gradient)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {history && history.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-200 mb-3">Ultimi quiz</h2>
          <div className="space-y-2">
            {history.slice(0, 8).map((h) => (
              <div key={h.id} className="card flex items-center justify-between py-3">
                <div>
                  <span className="text-sm text-gray-300">{h.section_name || 'Quiz misto'}</span>
                  <div className="text-xs text-gray-600">{new Date(h.created_at).toLocaleString('it-IT')}</div>
                </div>
                <div className={`text-sm font-bold ${(h.score / h.total) >= 0.7 ? 'text-green-400' : 'text-red-400'}`}>
                  {h.score}/{h.total} ({Math.round((h.score / h.total) * 100)}%)
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
