import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './SearchBar';
import StreakBadge from './StreakBadge';
import TutorBubble from './TutorBubble';
import {
  NetworkLogo, DashboardIcon, StudyIcon, QuizIcon,
  FlashcardIcon, OralIcon, MapIcon, GlossaryIcon, CheatSheetIcon, NotesIcon,
} from './Icons';

const navItems = [
  { to: '/', label: 'Dashboard', Icon: DashboardIcon },
  { to: '/study', label: 'Studio', Icon: StudyIcon },
  { to: '/quiz', label: 'Quiz', Icon: QuizIcon },
  { to: '/flashcards', label: 'Flashcards', Icon: FlashcardIcon },
  { to: '/oral', label: 'Orale', Icon: OralIcon },
  { to: '/map', label: 'Mappa', Icon: MapIcon },
  { to: '/glossary', label: 'Glossario', Icon: GlossaryIcon },
  { to: '/cheatsheet', label: 'Cheat Sheet', Icon: CheatSheetIcon },
  { to: '/notes', label: 'Appunti', Icon: NotesIcon },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/70 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-400 hover:text-white p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <NavLink to="/" className="flex items-center gap-2.5 group">
              <NetworkLogo className="transition-transform group-hover:scale-105" />
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold text-white tracking-tight">Sistemi & Reti</span>
                <span className="text-[10px] text-gray-500 hidden sm:block">Maturità 2025</span>
              </div>
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            <SearchBar />
            <StreakBadge />
          </div>
        </div>
      </header>

      <div className="flex pt-14 min-h-screen">
        {/* Sidebar overlay for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <nav className={`fixed lg:sticky top-14 left-0 h-[calc(100vh-3.5rem)] w-[220px] bg-dark-900/50 backdrop-blur-xl border-r border-white/[0.06] z-40 transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto flex-shrink-0`}>
          <div className="p-3 space-y-0.5 mt-2">
            {navItems.map((item) => {
              const isActive = item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/10 text-white shadow-sm shadow-purple-500/10'
                      : 'text-gray-500 hover:text-gray-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <item.Icon className={isActive ? 'text-purple-400' : ''} />
                  {item.label}
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400" />}
                </NavLink>
              );
            })}
          </div>

          {/* Sidebar footer */}
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <div className="text-[9px] text-gray-700 font-mono tracking-widest uppercase text-center">
              blackchair cooked this
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 pb-44 sm:pb-44 lg:pb-8">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Stocchi — floating chat widget */}
      <TutorBubble showGreeting={/^\/study\/[A-Z]\/\d+/.test(location.pathname)} />
    </div>
  );
}
