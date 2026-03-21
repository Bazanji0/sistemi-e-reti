import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

// ── WYSIWYG toolbar buttons ──
const FMT_BUTTONS = [
  { cmd: 'bold', label: 'B', title: 'Grassetto', className: 'font-bold' },
  { cmd: 'italic', label: 'I', title: 'Corsivo', className: 'italic' },
  { cmd: 'underline', label: 'U', title: 'Sottolineato', className: 'underline' },
  { cmd: 'strikeThrough', label: 'S', title: 'Barrato', className: 'line-through' },
  { divider: true },
  { cmd: 'insertUnorderedList', icon: 'list', title: 'Elenco puntato' },
  { cmd: 'insertOrderedList', label: '1.', title: 'Elenco numerato', className: 'font-mono text-[10px]' },
  { divider: true },
  { cmd: 'formatBlock:H3', label: 'H', title: 'Titolo', className: 'font-bold text-[10px]' },
];

export default function TopicView() {
  const { sectionId, topicId } = useParams();
  const { data: topic, loading, refetch } = useFetch(() => api.getTopic(sectionId, topicId), [sectionId, topicId]);
  const [actionLoading, setActionLoading] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [noteHtml, setNoteHtml] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);
  const [noteLoaded, setNoteLoaded] = useState(false);
  const [activeFormats, setActiveFormats] = useState({});
  const editorRef = useRef(null);
  const saveTimerRef = useRef(null);

  // Stable function to check active formats via ref
  const checkFormats = useCallback(() => {
    if (!editorRef.current) return;
    const f = {};
    try { f.bold = document.queryCommandState('bold'); } catch { f.bold = false; }
    try { f.italic = document.queryCommandState('italic'); } catch { f.italic = false; }
    try { f.underline = document.queryCommandState('underline'); } catch { f.underline = false; }
    try { f.strikeThrough = document.queryCommandState('strikeThrough'); } catch { f.strikeThrough = false; }
    try { f.insertUnorderedList = document.queryCommandState('insertUnorderedList'); } catch { f.insertUnorderedList = false; }
    try { f.insertOrderedList = document.queryCommandState('insertOrderedList'); } catch { f.insertOrderedList = false; }

    // H3 check: walk up from cursor
    f['formatBlock:H3'] = false;
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      let node = sel.anchorNode;
      while (node && node !== editorRef.current) {
        if (node.nodeName === 'H3') { f['formatBlock:H3'] = true; break; }
        node = node.parentNode;
      }
    }
    setActiveFormats(f);
  }, []);

  // Execute format and refresh button states
  const handleFormat = useCallback((cmd) => {
    editorRef.current?.focus();
    if (cmd.startsWith('formatBlock:')) {
      // Toggle H3: if already H3, go back to paragraph
      const sel = window.getSelection();
      let inH3 = false;
      if (sel?.anchorNode) {
        let node = sel.anchorNode;
        while (node && node !== editorRef.current) {
          if (node.nodeName === 'H3') { inH3 = true; break; }
          node = node.parentNode;
        }
      }
      document.execCommand('formatBlock', false, inH3 ? 'P' : cmd.split(':')[1]);
    } else {
      document.execCommand(cmd, false, null);
    }
    // Update HTML state
    if (editorRef.current) {
      setNoteHtml(editorRef.current.innerHTML);
    }
    // Refresh active states with multiple delays for reliability
    requestAnimationFrame(() => checkFormats());
    setTimeout(() => checkFormats(), 50);
    setTimeout(() => checkFormats(), 150);
  }, [checkFormats]);

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
          setNoteHtml(note.text);
          setNoteOpen(true);
        }
        setNoteLoaded(true);
      });
    }
  }, [topic?.id, noteLoaded]);

  // Set editor content when note loads
  useEffect(() => {
    if (noteLoaded && editorRef.current && noteHtml) {
      editorRef.current.innerHTML = noteHtml;
    }
  }, [noteLoaded, noteOpen]);

  // Reset note state when topic changes
  useEffect(() => {
    setNoteLoaded(false);
    setNoteHtml('');
    setNoteOpen(false);
    setNoteSaved(false);
    setActiveFormats({});
  }, [sectionId, topicId]);

  // Selection change listener
  useEffect(() => {
    if (!noteOpen) return;
    const handler = () => checkFormats();
    document.addEventListener('selectionchange', handler);
    return () => document.removeEventListener('selectionchange', handler);
  }, [noteOpen, checkFormats]);

  // Auto-save on noteHtml change
  useEffect(() => {
    if (!noteLoaded || !topic) return;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      const plainText = editorRef.current?.innerText?.trim() || '';
      api.saveNote(topic.id, noteHtml, sectionId, topic.title).then(() => {
        if (plainText) {
          setNoteSaved(true);
          setTimeout(() => setNoteSaved(false), 2000);
        }
      });
    }, 800);
    return () => clearTimeout(saveTimerRef.current);
  }, [noteHtml]);

  if (loading) return <div className="text-center text-gray-600 py-20">Caricamento...</div>;
  if (!topic) return <div className="text-center text-gray-600 py-20">Argomento non trovato</div>;

  const handleToggle = async (action) => {
    setActionLoading(true);
    await action(topic.id);
    refetch();
    setActionLoading(false);
  };

  const handleEditorInput = () => {
    if (editorRef.current) {
      setNoteHtml(editorRef.current.innerHTML);
    }
    checkFormats();
  };

  const handleClearNote = () => {
    setNoteHtml('');
    if (editorRef.current) editorRef.current.innerHTML = '';
    setActiveFormats({});
    api.deleteNote(topic.id);
  };

  const hasContent = noteHtml && noteHtml.replace(/<[^>]*>/g, '').trim().length > 0;

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
          onClick={() => {
            setNoteOpen(!noteOpen);
            if (!noteOpen) {
              setTimeout(() => {
                if (editorRef.current) {
                  editorRef.current.innerHTML = noteHtml;
                  editorRef.current.focus();
                }
              }, 50);
            }
          }}
          className={`btn-secondary flex items-center gap-2 ${noteOpen ? 'text-yellow-400 border-yellow-500/20' : ''}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={hasContent ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          {hasContent ? 'Appunti' : 'Prendi appunti'}
        </button>
      </div>

      {/* WYSIWYG Note editor */}
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
            <button
              onClick={() => setNoteOpen(false)}
              className="text-gray-600 hover:text-gray-400 transition-colors p-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          {/* Formatting toolbar */}
          <div className="flex items-center gap-0.5 mb-2 p-1 bg-white/[0.02] rounded-lg border border-white/[0.04] flex-wrap">
            {FMT_BUTTONS.map((btn, i) => {
              if (btn.divider) return <div key={`d${i}`} className="w-px h-4 bg-white/[0.06] mx-1" />;
              const isActive = !!activeFormats[btn.cmd];
              return (
                <button
                  key={btn.cmd}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleFormat(btn.cmd)}
                  title={btn.title}
                  className={`w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-md transition-all text-xs ${btn.className || ''} ${
                    isActive
                      ? 'text-yellow-300 bg-yellow-500/20 ring-1 ring-yellow-500/40'
                      : 'text-gray-500 hover:text-yellow-300 hover:bg-yellow-500/10'
                  }`}
                >
                  {btn.icon === 'list' ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  ) : btn.label}
                </button>
              );
            })}
          </div>

          {/* Editable area */}
          <div
            ref={editorRef}
            contentEditable
            onInput={handleEditorInput}
            onKeyUp={checkFormats}
            onMouseUp={checkFormats}
            onFocus={checkFormats}
            data-placeholder="Scrivi i tuoi appunti qui... (salvataggio automatico)"
            className="note-editor w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-[13px] text-gray-300 focus:outline-none focus:border-yellow-500/30 focus:ring-1 focus:ring-yellow-500/15 leading-relaxed min-h-[168px] max-h-[400px] overflow-y-auto"
          />

          {/* Footer */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] text-gray-600">
              Salvataggio automatico
            </span>
            {hasContent && (
              <button
                onClick={handleClearNote}
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
