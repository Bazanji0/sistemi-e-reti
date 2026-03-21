import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const WORKER_URL = import.meta.env.VITE_WORKER_URL || '';
const HISTORY_KEY = 'sr_chat_history';

const SYSTEM_PROMPT = `Ti chiami Stocchi e sei un tutor esperto di Sistemi e Reti per studenti italiani delle scuole superiori (ITIS) che si preparano alla maturità.

Il tuo compito è spiegare in modo chiaro, semplice e diretto gli argomenti di Sistemi e Reti. Usa un tono amichevole, un po' ironico ma preciso. Sei uno di loro, parla come un compagno di classe che sa le cose.

Argomenti che puoi trattare:
- Mezzi trasmissivi (doppino, fibra ottica, wireless)
- Apparati di rete (hub, switch, router, access point)
- Cablaggio strutturato
- Ethernet (frame, MAC, CSMA/CD)
- Topologie di rete (stella, anello, bus, maglia, albero)
- Modelli ISO/OSI e TCP/IP
- Indirizzi IP, subnet mask, CIDR
- Subnetting FLSM e VLSM
- Routing (statico e dinamico, RIP, OSPF)
- Grafi e algoritmi (Dijkstra, Bellman-Ford)
- Trasporto (TCP, UDP, porte, socket)
- Protocolli applicativi (HTTP, DNS, SMTP, FTP, QUIC)
- Firewall e ACL
- Crittografia (simmetrica, asimmetrica, hash, TLS, certificati)
- VPN (IPsec, OpenVPN, WireGuard)
- VLAN e trunk 802.1Q
- Malware e sicurezza
- NAT, DHCP, Port Security
- Packet Tracer (configurazione dispositivi)
- RFC importanti

Regole:
- Rispondi SOLO a domande su Sistemi e Reti o argomenti correlati
- Se la domanda non è pertinente, rispondi gentilmente che puoi aiutare solo con Sistemi e Reti
- Usa markdown per formattare le risposte (tabelle, elenchi, grassetto)
- Quando possibile, fai esempi pratici
- Se utile, suggerisci comandi CLI Cisco o procedure Packet Tracer
- Rispondi in italiano
- Sii MOLTO conciso e diretto: risposte brevi, massimo 8-10 righe. Niente introduzioni lunghe, vai dritto al punto. Se serve una tabella falla corta. Solo se lo studente chiede esplicitamente di approfondire, allora puoi scrivere di piu.`;

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); } catch { return []; }
}
function saveHistory(msgs) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(msgs.slice(-50)));
}

const ALL_SUGGESTIONS = [
  'Spiegami il subnetting VLSM',
  'Differenza tra TCP e UDP?',
  'Come funziona il NAT?',
  'Come si configura OSPF?',
  'Cos\'è una VLAN?',
  'Come funziona il DHCP?',
  'Differenza tra hub e switch?',
  'Cos\'è il modello OSI?',
  'Come funziona il DNS?',
  'Spiegami il three-way handshake',
  'A cosa serve un firewall?',
  'Cos\'è il subnetting FLSM?',
  'Differenza tra routing statico e dinamico?',
  'Come funziona la crittografia TLS?',
  'Cos\'è una VPN e a cosa serve?',
  'Spiegami le ACL su Cisco',
  'Differenza tra fibra ottica e doppino?',
  'Come funziona l\'ARP?',
  'Cos\'è il NAT e il PAT?',
  'Spiegami OSPF in breve',
];

function pickRandom(arr, n) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, n);
}

const avatarUrl = (import.meta.env.BASE_URL || '/') + 'tutor-avatar.png';

export default function TutorBubble({ showGreeting = false }) {
  const [open, setOpen] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const [greetVisible, setGreetVisible] = useState(false);
  const [messages, setMessages] = useState(getHistory());
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState(() => pickRandom(ALL_SUGGESTIONS, 4));
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Fumetto di saluto (solo su TopicView)
  useEffect(() => {
    if (showGreeting && !greeted && !open) {
      const t = setTimeout(() => setGreetVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, [showGreeting, greeted, open]);

  // Auto-hide fumetto dopo 5s
  useEffect(() => {
    if (greetVisible) {
      const t = setTimeout(() => { setGreetVisible(false); setGreeted(true); }, 5000);
      return () => clearTimeout(t);
    }
  }, [greetVisible]);

  // Scroll in basso quando arrivano messaggi
  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, open]);

  // Focus input quando si apre
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  if (!WORKER_URL) return null;

  const toggleOpen = () => {
    if (!open) setSuggestions(pickRandom(ALL_SUGGESTIONS, 4));
    setOpen(!open);
    setGreetVisible(false);
    setGreeted(true);
  };

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;

    setInput('');
    setError('');

    const newMessages = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    saveHistory(newMessages);
    setLoading(true);

    try {
      const geminiContents = [];
      const recentMsgs = newMessages.slice(-20);
      for (const msg of recentMsgs) {
        geminiContents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        });
      }

      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: geminiContents,
          generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        if (response.status === 429) throw new Error('Troppi messaggi, aspetta un minuto.');
        throw new Error(errData?.error?.message || `Errore ${response.status}`);
      }

      const data = await response.json();
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!aiText) throw new Error('Nessuna risposta.');

      const finalMessages = [...newMessages, { role: 'assistant', content: aiText }];
      setMessages(finalMessages);
      saveHistory(finalMessages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    saveHistory([]);
    setError('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
      {/* ── PANNELLO CHAT ── */}
      {open && (
        <div className="mb-3 w-[360px] max-w-[calc(100vw-2.5rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-dark-900/95 backdrop-blur-2xl border border-white/[0.10] rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden animate-fade-in-up">

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08] bg-gradient-to-r from-purple-600/15 to-blue-600/10 flex-shrink-0">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-purple-500/40 flex-shrink-0">
              <img src={avatarUrl} alt="Stocchi" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-dark-900" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white">STOCCHI</div>
              <div className="text-[10px] text-gray-500">Tutor di Sistemi e Reti</div>
            </div>
            <button
              onClick={clearChat}
              className="text-[10px] text-gray-600 hover:text-gray-400 transition-colors px-2 py-1 rounded-lg hover:bg-white/[0.06]"
              title="Pulisci chat"
            >
              Pulisci
            </button>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/[0.06] rounded-lg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          {/* Messaggi */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
            {messages.length === 0 && (
              <div className="flex flex-col items-center text-center pt-6 px-2">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30 mb-3">
                  <img src={avatarUrl} alt="Stocchi" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold text-gray-300 mb-1">Merdina, se hai qualche dubbio chiedi.</p>
                <p className="text-[11px] text-gray-600 mb-4">Chiedimi qualsiasi cosa su Sistemi e Reti</p>
                <div className="grid grid-cols-1 gap-1.5 w-full">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(s)}
                      className="text-left text-[11px] text-gray-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-purple-500/20 rounded-xl px-3 py-2 transition-all duration-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => {
              const isUser = msg.role === 'user';
              return (
                <div key={i} className={`flex gap-2 ${isUser ? 'flex-row-reverse' : ''}`}>
                  {!isUser && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 border border-purple-500/30">
                      <img src={avatarUrl} alt="Stocchi" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed ${
                    isUser
                      ? 'bg-purple-600/25 text-gray-200 border border-purple-500/15 rounded-br-md'
                      : 'bg-white/[0.05] text-gray-300 border border-white/[0.06] rounded-bl-md'
                  }`}>
                    {isUser ? (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <div className="prose-chat"><ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown></div>
                    )}
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-purple-500/30">
                  <img src={avatarUrl} alt="Stocchi" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white/[0.05] border border-white/[0.06] rounded-2xl rounded-bl-md px-3 py-2">
                  <div className="flex gap-1 items-center h-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="text-[11px] text-red-400 bg-red-500/10 border border-red-500/15 rounded-xl px-3 py-2 text-center">
                {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/[0.08] flex-shrink-0">
            <div className="flex gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Chiedi a Stocchi..."
                rows="1"
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-[13px] text-white placeholder-gray-600 resize-none focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 min-h-[40px] max-h-[80px]"
                style={{ height: 'auto' }}
                onInput={(e) => { e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 80) + 'px'; }}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl px-3 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:from-purple-500 hover:to-blue-500 transition-all self-end shadow-lg shadow-purple-500/20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── FUMETTO SEMPRE VISIBILE ── */}
      {!open && (
        <div
          className="mb-3 relative bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-2xl rounded-br-md px-4 py-2.5 shadow-xl cursor-pointer hover:bg-white/[0.12] transition-all duration-200 animate-fade-in-up"
          onClick={toggleOpen}
        >
          <p className="text-sm text-gray-200 font-bold leading-snug">
            Chiedi a Stocchi!
          </p>
        </div>
      )}

      {/* ── AVATAR BOTTONE ── */}
      <button
        onClick={toggleOpen}
        className="relative group flex-shrink-0"
        title="Chiedi a Stocchi"
      >
        <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        <div className={`relative w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300 shadow-lg shadow-purple-500/20 ${
          open ? 'border-purple-400/70 scale-95' : 'border-purple-500/40 group-hover:border-purple-400/70 group-hover:scale-105'
        }`}>
          <img src={avatarUrl} alt="Stocchi" className="w-full h-full object-cover" />
        </div>
        {/* Pallino online */}
        <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-dark-900 flex items-center justify-center">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        </div>
        {/* Badge messaggi non letti (se chat chiusa e ci sono messaggi) */}
        {!open && messages.length > 0 && (
          <div className="absolute -top-1 -left-1 w-5 h-5 bg-purple-500 rounded-full border-2 border-dark-900 flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">{Math.min(messages.filter(m => m.role === 'assistant').length, 9)}</span>
          </div>
        )}
      </button>
    </div>
  );
}
