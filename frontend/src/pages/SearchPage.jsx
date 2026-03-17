import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

function Highlight({ text, query }) {
  if (!query || query.length < 2) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase()
          ? <mark key={i} className="bg-purple-500/30 text-purple-200 rounded px-0.5">{part}</mark>
          : part
      )}
    </>
  );
}

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get('q') || '';
  const { data, loading } = useFetch(() => api.search(q), [q]);

  const hasResults = data && (data.topics.length > 0 || data.quiz.length > 0 || data.glossary.length > 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-100">
          Risultati per "<span className="text-purple-400">{q}</span>"
        </h1>
      </div>

      {loading && <div className="text-center text-gray-500 py-10">Ricerca...</div>}

      {!loading && !hasResults && (
        <div className="text-center text-gray-500 py-10">Nessun risultato trovato.</div>
      )}

      {data?.topics.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-200 mb-3">Argomenti ({data.topics.length})</h2>
          <div className="space-y-2">
            {data.topics.map(t => (
              <Link key={t.id} to={`/study/${t.section_id}/${t.id}`} className="card block group">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">
                    {t.section_name}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-200 group-hover:text-purple-300 transition-colors">
                  <Highlight text={t.title} query={q} />
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  <Highlight text={t.content.substring(0, 200)} query={q} />
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {data?.glossary.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-200 mb-3">Glossario ({data.glossary.length})</h2>
          <div className="space-y-2">
            {data.glossary.map(g => (
              <div key={g.id} className="card py-3">
                <div className="text-sm font-medium text-gray-200">
                  <Highlight text={g.term} query={q} />
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  <Highlight text={g.definition} query={q} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data?.quiz.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-200 mb-3">Domande quiz ({data.quiz.length})</h2>
          <div className="space-y-2">
            {data.quiz.map(q2 => (
              <div key={q2.id} className="card py-3">
                <span className="text-xs font-mono text-purple-400">{q2.section_name}</span>
                <div className="text-sm text-gray-300 mt-1">
                  <Highlight text={q2.question} query={q} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
