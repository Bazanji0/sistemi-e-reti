// Minimal SVG icon components — 20x20 viewBox, stroke-based
const I = ({ d, ...p }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    {typeof d === 'string' ? <path d={d} /> : d}
  </svg>
);

export const DashboardIcon = (p) => <I {...p} d={<>
  <rect x="3" y="3" width="7" height="9" rx="1.5" />
  <rect x="14" y="3" width="7" height="5" rx="1.5" />
  <rect x="14" y="12" width="7" height="9" rx="1.5" />
  <rect x="3" y="16" width="7" height="5" rx="1.5" />
</>} />;

export const StudyIcon = (p) => <I {...p} d={<>
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  <path d="M8 7h6" />
  <path d="M8 11h8" />
</>} />;

export const QuizIcon = (p) => <I {...p} d={<>
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
  <circle cx="12" cy="12" r="10" />
  <line x1="12" y1="17" x2="12.01" y2="17" />
</>} />;

export const FlashcardIcon = (p) => <I {...p} d={<>
  <rect x="2" y="6" width="16" height="14" rx="2" />
  <path d="M6 2h12a2 2 0 0 1 2 2v12" />
</>} />;

export const OralIcon = (p) => <I {...p} d={<>
  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <line x1="12" y1="19" x2="12" y2="23" />
  <line x1="8" y1="23" x2="16" y2="23" />
</>} />;

export const MapIcon = (p) => <I {...p} d={<>
  <circle cx="6" cy="6" r="2" />
  <circle cx="18" cy="6" r="2" />
  <circle cx="12" cy="18" r="2" />
  <circle cx="6" cy="18" r="2" />
  <circle cx="18" cy="18" r="2" />
  <line x1="6" y1="8" x2="6" y2="16" />
  <line x1="8" y1="6" x2="16" y2="6" />
  <line x1="7.5" y1="7.5" x2="10.5" y2="16.5" />
  <line x1="16.5" y1="7.5" x2="13.5" y2="16.5" />
  <line x1="14" y1="18" x2="16" y2="18" />
</>} />;

export const GlossaryIcon = (p) => <I {...p} d={<>
  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</>} />;

export const CheatSheetIcon = (p) => <I {...p} d={<>
  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
  <rect x="9" y="3" width="6" height="4" rx="1" />
  <path d="M9 12h6" />
  <path d="M9 16h4" />
</>} />;

export const ChatBotIcon = (p) => <I {...p} d={<>
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  <path d="M8 10h.01" />
  <path d="M12 10h.01" />
  <path d="M16 10h.01" />
</>} />;

export const SearchIcon = (p) => <I {...p} d={<>
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
</>} />;

export const NetworkLogo = ({ className = '' }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="logoBg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7c3aed" />
        <stop offset="1" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="logoNet" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e9d5ff" />
        <stop offset="1" stopColor="#bfdbfe" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#logoBg)" />
    <circle cx="10" cy="10" r="2.5" fill="url(#logoNet)" />
    <circle cx="22" cy="10" r="2.5" fill="url(#logoNet)" />
    <circle cx="16" cy="18" r="3" fill="url(#logoNet)" />
    <circle cx="8" cy="24" r="2" fill="url(#logoNet)" />
    <circle cx="24" cy="24" r="2" fill="url(#logoNet)" />
    <line x1="10" y1="10" x2="22" y2="10" stroke="url(#logoNet)" strokeWidth="1" opacity="0.5" />
    <line x1="10" y1="10" x2="16" y2="18" stroke="url(#logoNet)" strokeWidth="1" opacity="0.5" />
    <line x1="22" y1="10" x2="16" y2="18" stroke="url(#logoNet)" strokeWidth="1" opacity="0.5" />
    <line x1="16" y1="18" x2="8" y2="24" stroke="url(#logoNet)" strokeWidth="1" opacity="0.5" />
    <line x1="16" y1="18" x2="24" y2="24" stroke="url(#logoNet)" strokeWidth="1" opacity="0.5" />
  </svg>
);
