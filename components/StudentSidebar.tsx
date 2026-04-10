'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const viewOptions = [
  {
    href: '/dashboard',
    icon: 'dashboard' as const,
    title: 'Parent dashboard',
    subtitle: 'অভিভাবক ড্যাশবোর্ড',
    match: (p: string) => p.startsWith('/dashboard'),
  },
  {
    href: '/learn',
    icon: 'school' as const,
    title: 'Student app',
    subtitle: 'শিক্ষার্থী ভিউ',
    match: (p: string) => p.startsWith('/learn'),
  },
];

const navItems = [
  { href: '/learn', icon: 'home', label: 'হোম' },
  { href: '/learn/chapters', icon: 'auto_stories', label: 'অধ্যায়সমূহ' },
  { href: '/learn/lesson', icon: 'menu_book', label: 'পাঠ' },
  { href: '/learn/daily-challenge', icon: 'bolt', label: 'ডেইলি চ্যালেঞ্জ' },
  { href: '/learn/mini-game', icon: 'videogame_asset', label: 'মিনি গেমস' },
];

export default function StudentSidebar() {
  const pathname = usePathname();
  const [viewOpen, setViewOpen] = useState(false);
  const viewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (viewRef.current && !viewRef.current.contains(e.target as Node)) {
        setViewOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === '/learn') return pathname === '/learn';
    if (href === '/learn/chapters') return pathname.startsWith('/learn/chapters');
    return pathname.startsWith(href);
  };

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 pt-16 z-40
      bg-[#f2f7f4] dark:bg-[#01160D]
      border-r border-emerald-100/70 dark:border-green-900/30
    ">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-emerald-100/70 dark:border-green-900/30">
        <h1 className="text-xl font-extrabold font-headline tracking-tight
          text-emerald-700 dark:text-primary">
          বাংলাকুয়েস্ট
        </h1>
        <p className="text-xs font-semibold mt-0.5
          text-emerald-600/70 dark:text-slate-400">
          শ্রেণী ৭
        </p>
      </div>

      {/* XP Progress */}
      <div className="px-6 py-4 border-b border-emerald-100/70 dark:border-green-900/30">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-emerald-700 dark:text-primary uppercase tracking-wide">Level 12</span>
          <span className="text-xs text-emerald-600/70 dark:text-slate-400">250 XP বাকি</span>
        </div>
        <div className="w-full h-2 rounded-full bg-emerald-100 dark:bg-green-900/50 overflow-hidden">
          <div className="h-full w-[65%] rounded-full bg-emerald-600 dark:bg-emerald-500" />
        </div>
      </div>

      {/* Switch view */}
      <div className="px-6 pt-4 pb-2" ref={viewRef}>
        <button
          type="button"
          onClick={() => setViewOpen((v) => !v)}
          className="w-full py-1.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest
            text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-600/40 rounded-lg
            hover:bg-emerald-100/60 dark:hover:bg-emerald-900/25 transition-all"
        >
          <span className="material-symbols-outlined text-[14px]">layers</span>
          ভিউ পরিবর্তন
          <span className={`material-symbols-outlined text-[14px] transition-transform ${viewOpen ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </button>
        {viewOpen && (
          <div
            className="mt-1 z-50 rounded-xl overflow-hidden shadow-lg border
              bg-white dark:bg-[#082016] border-emerald-100/80 dark:border-green-900/40"
          >
            <p className="px-3 py-2 text-[10px] font-label uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-emerald-50/50 dark:bg-green-900/20 border-b border-emerald-100/60 dark:border-green-900/30">
              Open as
            </p>
            {viewOptions.map((opt) => {
              const current = opt.match(pathname);
              return (
                <Link
                  key={opt.href}
                  href={opt.href}
                  onClick={() => setViewOpen(false)}
                  className={`flex items-start gap-3 px-3 py-2.5 transition-colors border-b border-emerald-100/40 dark:border-green-900/20 last:border-0
                    ${current ? 'bg-emerald-50/80 dark:bg-green-900/25' : 'hover:bg-emerald-50/60 dark:hover:bg-green-900/15'}`}
                >
                  <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[20px] shrink-0 mt-0.5">
                    {opt.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-slate-800 dark:text-on-surface leading-tight">
                      {opt.title}
                    </span>
                    <span className="block text-[11px] text-slate-500 dark:text-on-surface-variant font-label mt-0.5">
                      {opt.subtitle}
                    </span>
                  </span>
                  {current && (
                    <span className="text-[9px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 shrink-0 mt-1">
                      Now
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto py-3">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 transition-all duration-200 ease-in-out active:translate-x-1 ${
                active
                  ? 'bg-emerald-100/85 dark:bg-green-600/10 text-emerald-900 dark:text-primary font-bold border-l-4 border-emerald-600 dark:border-primary'
                  : 'text-emerald-700 dark:text-slate-400 hover:bg-emerald-100/65 hover:text-emerald-900 dark:hover:bg-green-900/10 dark:hover:text-green-400'
              }`}
            >
              <span
                className="material-symbols-outlined shrink-0"
                style={{ fontSize: '20px', fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* CTA */}
      <div className="p-4 border-t border-emerald-100/70 dark:border-green-900/30">
        <Link
          href="/learn/quiz/start"
          className="w-full py-3 px-4 rounded-xl font-bold text-sm tracking-wide shadow-lg
            hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2
            bg-primary text-on-primary"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
          নতুন পাঠ শুরু করুন
        </Link>
      </div>
    </aside>
  );
}
