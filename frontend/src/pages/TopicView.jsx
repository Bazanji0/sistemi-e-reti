import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

export default function TopicView() {
  const { sectionId, topicId } = useParams();
  const { data: topic, loading, refetch } = useFetch(() => api.getTopic(sectionId, topicId), [sectionId, topicId]);
  const [actionLoading, setActionLoading] = useState(false);

  // Record study activity for streak
  useEffect(() => {
    if (topic) {
      api.recordStudyActivity().then(() => {
        window.dispatchEvent(new Event('streak-update'));
      });
    }
  }, [topic?.id]);

  if (loading) return <div className="text-center text-gray-600 py-20">Caricamento...</div>;
  if (!topic) return <div className="text-center text-gray-600 py-20">Argomento non trovato</div>;

  const handleToggle = async (action) => {
    setActionLoading(true);
    await action(topic.id);
    refetch();
    setActionLoading(false);
  };

  const keywords = topic.keywords ? topic.keywords.split(',').map(k => k.trim()) : [];

  return (
    <div className="space-y-6">
      <Link to={`/study/${sectionId}`} className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-400 transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
        Torna alla sezione
      </Link>

      <div>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/15">
            {sectionId}.{topic.number}
          </span>
          {topic.studied && (
            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/15 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Studiato
            </span>
          )}
        </div>
        <h1 className="text-2xl font-bold text-white">{topic.title}</h1>
      </div>

      {keywords.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {keywords.map((kw, i) => (
            <span key={i} className="text-[11px] bg-white/[0.04] text-purple-300/80 px-2.5 py-1 rounded-full border border-white/[0.06]">
              {kw}
            </span>
          ))}
        </div>
      )}

      <div className="card prose-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{topic.content}</ReactMarkdown>
      </div>

      <div className="flex gap-2.5">
        <button
          onClick={() => handleToggle(api.toggleStudied)}
          disabled={actionLoading}
          className={`btn-primary flex items-center gap-2 ${topic.studied ? 'opacity-70' : ''}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          {topic.studied ? 'Studiato' : 'Segna come studiato'}
        </button>
        <button
          onClick={() => handleToggle(api.toggleBookmark)}
          disabled={actionLoading}
          className={`btn-secondary flex items-center gap-2 ${topic.bookmarked ? 'text-amber-400' : ''}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={topic.bookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
          {topic.bookmarked ? 'Salvato' : 'Segnalibro'}
        </button>
      </div>

    </div>
  );
}
