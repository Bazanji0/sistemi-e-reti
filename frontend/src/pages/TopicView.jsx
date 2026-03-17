import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

export default function TopicView() {
  const { sectionId, topicId } = useParams();
  const { data: topic, loading, refetch } = useFetch(() => api.getTopic(sectionId, topicId), [sectionId, topicId]);
  const [actionLoading, setActionLoading] = useState(false);

  if (loading) return <div className="text-center text-gray-500 py-20">Caricamento...</div>;
  if (!topic) return <div className="text-center text-gray-500 py-20">Argomento non trovato</div>;

  const handleToggle = async (action) => {
    setActionLoading(true);
    await action(topic.id);
    refetch();
    setActionLoading(false);
  };

  const keywords = topic.keywords ? topic.keywords.split(',').map(k => k.trim()) : [];

  return (
    <div className="space-y-6">
      <Link to={`/study/${sectionId}`} className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
        ← Torna alla sezione
      </Link>

      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
            {sectionId}.{topic.number}
          </span>
          {topic.studied ? (
            <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">Studiato</span>
          ) : null}
        </div>
        <h1 className="text-2xl font-bold text-gray-100">{topic.title}</h1>
      </div>

      {keywords.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {keywords.map((kw, i) => (
            <span key={i} className="text-xs bg-dark-600 text-purple-300 px-2 py-1 rounded-full border border-purple-500/20">
              {kw}
            </span>
          ))}
        </div>
      )}

      <div className="card prose-content">
        <ReactMarkdown>{topic.content}</ReactMarkdown>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => handleToggle(api.toggleStudied)}
          disabled={actionLoading}
          className={`btn-primary text-sm ${topic.studied ? 'opacity-70' : ''}`}
        >
          {topic.studied ? '✓ Studiato' : 'Segna come studiato'}
        </button>
        <button
          onClick={() => handleToggle(api.toggleBookmark)}
          disabled={actionLoading}
          className={`btn-secondary text-sm ${topic.bookmarked ? 'text-yellow-400' : ''}`}
        >
          {topic.bookmarked ? '★ Salvato' : '☆ Segnalibro'}
        </button>
      </div>
    </div>
  );
}
