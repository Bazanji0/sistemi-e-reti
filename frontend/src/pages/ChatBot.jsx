import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// API key built-in dalla variabile d'ambiente (impostata in frontend/.env)
const BUILT_IN_KEY = import.meta.env.VITE_GEMINI_KEY || '';
const HISTORY_KEY = 'sr_chat_history';

const SYSTEM_PROMPT = `Sei un tutor esperto di Sistemi e Reti per studenti italiani delle scuole superiori (ITIS) che si preparano alla maturità.

Il tuo compito è spiegare in modo chiaro, semplice e diretto gli argomenti di Sistemi e Reti. Usa un tono amichevole ma preciso.

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
- Sii conciso ma completo`;

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); } catch { return []; }
}
function saveHistory(msgs) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(msgs.slice(-50)));
}

function MessageBubble({ msg }) {
  const isUser = msg.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
        isUser
          ? 'bg-purple-500/20 text-purple-400'
          : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400'
      }`}>
        {isUser ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 0 1 4-4z" /><path d="M10 17h4" /><path d="M9 21h6" /><path d="M10 13h4" /></svg>
        )}
      </div>
      <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
        isUser
          ? 'bg-purple-600/20 text-gray-200 border border-purple-500/15'
          : 'bg-white/[0.04] text-gray-300 border border-white/[0.06]'
      }`}>
        {isUser ? (
          <p className="whitespace-pre-wrap">{msg.content}</p>
        ) : (
          <div className="prose-chat">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 0 1 4-4z" /><path d="M10 17h4" /><path d="M9 21h6" /><path d="M10 13h4" /></svg>
      </div>
      <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl px-4 py-3">
        <div className="flex gap-1.5 items-center h-5">
          <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}

const SUGGESTIONS = [
  'Spiegami il subnetting VLSM',
  'Differenza tra TCP e UDP?',
  'Come funziona il NAT?',
  'Cos\'è una VLAN e a cosa serve?',
  'Come si configura OSPF?',
  'Spiegami il three-way handshake',
];

export default function ChatBot() {
  const [messages, setMessages] = useState(getHistory());
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const apiKey = BUILT_IN_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Se non c'è la key built-in, mostra errore
  if (!apiKey) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/15">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Tutor AI non configurato</h2>
        <p className="text-sm text-gray-500 max-w-md leading-relaxed">
          Il Tutor AI non è ancora attivo. Contatta chi gestisce il sito per attivarlo.
        </p>
      </div>
    );
  }

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

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: geminiContents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2048,
            },
          }),
        }
      );

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        if (response.status === 429) {
          throw new Error('Troppi messaggi, aspetta un minuto e riprova.');
        }
        throw new Error(errData?.error?.message || `Errore ${response.status}`);
      }

      const data = await response.json();
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!aiText) throw new Error('Nessuna risposta dal modello.');

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
    <div className="flex flex-col h-[calc(100vh-7rem)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="page-title">Tutor AI</h1>
          <p className="page-subtitle">Chiedi qualsiasi cosa su Sistemi e Reti</p>
        </div>
        <button onClick={clearChat} className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors px-2 py-1 rounded-lg hover:bg-white/[0.04]">
          Pulisci chat
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4 pr-1 min-h-0">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 flex items-center justify-center mb-4 border border-white/[0.06]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cyan-400">
                <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 0 1 4-4z" />
                <path d="M10 17h4" /><path d="M9 21h6" /><path d="M10 13h4" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-300 mb-1.5">Ciao! Sono il tuo tutor di Sistemi e Reti</h3>
            <p className="text-xs text-gray-600 mb-6 max-w-sm">Chiedimi qualsiasi cosa sugli argomenti del programma. Prova una di queste domande:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg w-full">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  className="text-left text-xs text-gray-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-purple-500/20 rounded-xl px-3.5 py-2.5 transition-all duration-200"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <MessageBubble key={i} msg={msg} />
        ))}

        {loading && <TypingIndicator />}

        {error && (
          <div className="flex justify-center">
            <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/15 rounded-xl px-4 py-2.5 max-w-md">
              {error}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="pt-3 border-t border-white/[0.06]">
        <div className="flex gap-2.5">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Scrivi una domanda su Sistemi e Reti..."
            rows="1"
            className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 min-h-[44px] max-h-[120px]"
            style={{ height: 'auto' }}
            onInput={(e) => { e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'; }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className="btn-primary px-4 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed self-end"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <p className="text-[9px] text-gray-700 mt-2 text-center">
          Powered by Google Gemini — Le risposte possono contenere errori, verifica sempre
        </p>
      </div>
    </div>
  );
}
