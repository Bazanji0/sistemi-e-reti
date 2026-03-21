import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

// ── Formatting helpers ──
function applyFormat(textareaRef, noteText, setNoteText, type) {
  const ta = textareaRef.current;
  if (!ta) return;
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  const selected = noteText.slice(start, end);
  let before = noteText.slice(0, start);
  let after = noteText.slice(end);
  let insert = '';
  let cursorOffset = 0;

  switch (type) {
    case 'bold':
      insert = selected ? `**${selected}**` : '**testo**';
      cursorOffset = selected ? insert.length : 2;
      break;
    case 'italic':
      insert = selected ? `*${selected}*` : '*testo*';
      cursorOffset = selected ? insert.length : 1;
      break;
    case 'heading':
      // Add ### at the start of the current line
      const lineStart = noteText.lastIndexOf('\n', start - 1) + 1;
      before = noteText.slice(0, lineStart);
      const lineContent = noteText.slice(lineStart, end);
      after = noteText.slice(end);
      insert = `### ${lineContent || 'Titolo'}`;
      cursorOffset = insert.length;
      break;
    case 'list':
      if (selected) {
        insert = selected.split('\n').map(l => `- ${l}`).join('\n');
      } else {
        insert = '- ';
      }
      cursorOffset = insert.length;
      break;
    case 'ordered':
      if (selected) {
        insert = selected.split('\n').map((l, i) => `${i + 1}. ${l}`).join('\n');
      } else {
        insert = '1. ';
      }
      cursorOffset = insert.length;
      break;
    case 'code':
      insert = selected ? `\`${selected}\`` : '`codice`';
      cursorOffset = selected ? insert.length : 1;
      break;
    case 'highlight':
      insert = selected ? `==${selected}==` : '==evidenzia==';
      cursorOffset = selected ? insert.length : 2;
      break;
    default:
      return;
  }

  const newText = before + insert + after;
  setNoteText(newText);

  // Restore cursor position
  requestAnimationFrame(() => {
    ta.focus();
    const pos = before.length + cursorOffset;
    ta.setSelectionRange(pos, pos);
  });
}

const FMT_BUTTONS = [
  { type: 'bold', label: 'B', title: 'Grassetto', className: 'font-bold' },
  { type: 'italic', label: 'I', title: 'Corsivo', className: 'italic' },
  { type: 'heading', label: 'H', title: 'Titolo', className: 'font-bold text-[10px]' },
  { type: 'list', label: null, title: 'Elenco puntato', icon: 'list' },
  { type: 'ordered', label: '1.', title: 'Elenco numerato', className: 'text-[10px] font-mono' },
  { type: 'code', label: '<>', title: 'Codice', className: 'font-mono text-[10px]' },
];

export default function TopicView() {
  const { sectionId, topicId } = useParams();
  const { data: topic, loading, refetch } = useFetch(() => api.getTopic(sectionId, topicId), [sectionId, topicId]);
  const [actionLoading, setActionLoading] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);
  const [noteLoaded, setNoteLoaded] = useState(false);
  const [notePreview, setNotePreview] = useState(false);
  const noteRef = useRef(null);

  // Record study activity for streak
  useEffect(() => {
    if (topic) {
      api.recordStudyActivity().then(() => {
        window.dispatchEvent(new Event('streak-update'));
      });
    }
  }, [topic?.id]);

  // Load existing note for this topic
  useEffect(() => {
    if (topic && !noteLoaded) {
      api.getNote(topic.id).then(note => {
        if (note) {
          setNoteText(note.text);
          setNoteOpen(true);
        }
        setNoteLoaded(true);
      });
    }
  }, [topic?.id, noteLoaded]);

  // Reset note state when topic changes
  useEffect(() => {
    setNoteLoaded(false);
    setNoteText('');
    setNoteOpen(false);
    setNoteSaved(false);
  }, [sectionId, topicId]);

  // Auto-save note
  useEffect(() => {
    if (!noteLoaded || !topic) return;
    const timer = setTimeout(() => {
      api.saveNote(topic.id, noteText, sectionId, topic.title).then(() => {
        if (noteText.trim()) {
          setNoteSaved(true);
          setTimeout(() => setNoteSaved(false), 2000);
        }
      });
    }, 800);
    return () => clearTimeout(timer);
  }, [noteText]);

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

      <div className="flex gap-2.5 flex-wrap">
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
        <button
          onClick={() => setNoteOpen(!noteOpen)}
          className={`btn-secondary flex items-center gap-2 ${noteOpen ? 'text-yellow-400 border-yellow-500/20' : ''}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={noteText.trim() ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          {noteText.trim() ? 'Appunti' : 'Prendi appunti'}
        </button>
      </div>

      {/* Note editor */}
      {noteOpen && (
        <div className="card border-yellow-500/15 bg-gradient-to-br from-yellow-500/[0.04] to-transparent animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-yellow-400">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span className="text-sm font-semibold text-gray-300">Appunti</span>
              {noteSaved && (
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/15 animate-fade-in-up">
                  Salvato!
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              {/* Preview toggle */}
              <button
                onClick={() => setNotePreview(!notePreview)}
                className={`text-[11px] px-2.5 py-1 rounded-lg transition-all ${
                  notePreview
                    ? 'text-yellow-300 bg-yellow-500/10 border border-yellow-500/20'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.04]'
                }`}
                title={notePreview ? 'Modifica' : 'Anteprima'}
              >
                {notePreview ? 'Modifica' : 'Anteprima'}
              </button>
              <button
                onClick={() => setNoteOpen(false)}
                className="text-gray-600 hover:text-gray-400 transition-colors p-1"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
          </div>

          {notePreview ? (
            /* Markdown preview */
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 min-h-[168px] prose-content text-[13px] text-gray-300 leading-relaxed">
              {noteText.trim() ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{noteText}</ReactMarkdown>
              ) : (
                <p className="text-gray-600 italic">Nessun contenuto da visualizzare</p>
              )}
            </div>
          ) : (
            <>
              {/* Formatting toolbar */}
              <div className="flex items-center gap-0.5 mb-2 p-1 bg-white/[0.02] rounded-lg border border-white/[0.04] flex-wrap">
                {FMT_BUTTONS.map(btn => (
                  <button
                    key={btn.type}
                    onClick={() => applyFormat(noteRef, noteText, setNoteText, btn.type)}
                    title={btn.title}
                    className={`w-7 h-7 flex items-center justify-center rounded-md text-gray-500 hover:text-yellow-300 hover:bg-yellow-500/10 transition-all text-xs ${btn.className || ''}`}
                  >
                    {btn.icon === 'list' ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                    ) : btn.label}
                  </button>
                ))}
                <div className="w-px h-4 bg-white/[0.06] mx-1" />
                <span className="text-[9px] text-gray-600 ml-1">Markdown</span>
              </div>

              {/* Textarea */}
              <textarea
                ref={noteRef}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Scrivi i tuoi appunti qui... Usa i tasti sopra per formattare! (salvataggio automatico)"
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-[13px] text-gray-300 placeholder-gray-600 resize-y focus:outline-none focus:border-yellow-500/30 focus:ring-1 focus:ring-yellow-500/15 leading-relaxed font-mono"
                rows="6"
              />
            </>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] text-gray-600">
              {noteText.length > 0 ? `${noteText.length} caratteri` : 'Il salvataggio avviene automaticamente'}
            </span>
            {noteText.trim() && (
              <button
                onClick={() => { setNoteText(''); setNotePreview(false); api.deleteNote(topic.id); }}
                className="text-[10px] text-red-400/60 hover:text-red-400 transition-colors"
              >
                Cancella appunto
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
