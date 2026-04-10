'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

const primaryItems = [
  { href: '/learn', icon: 'home', label: 'হোম', exact: true },
  { href: '/learn/chapter', icon: 'auto_stories', label: 'অধ্যায়' },
  { href: '/learn/daily-challenge', icon: 'bolt', label: 'চ্যালেঞ্জ' },
  { href: '/learn/mini-game', icon: 'videogame_asset', label: 'গেমস' },
];

const overflowItems = [
  { href: '/learn/lesson', icon: 'menu_book', label: 'পাঠ' },
  { href: '/learn/quiz/start', icon: 'quiz', label: 'কুইজ' },
  { href: '/learn/level-up', icon: 'military_tech', label: 'লেভেল' },
  { href: '/dashboard', icon: 'dashboard', label: 'অভিভাবক' },
];

const breadcrumbMap: Record<string, string> = {
  '/learn': 'হোম',
  '/learn/lesson': 'পাঠ',
  '/learn/daily-challenge': 'ডেইলি চ্যালেঞ্জ',
  '/learn/mini-game': 'মিনি গেমস',
  '/learn/level-up': 'লেভেল আপ',
  '/learn/quiz/start': 'কুইজ',
  '/learn/quiz/mcq': 'MCQ',
  '/learn/quiz/interactive': 'ইন্টারেক্টিভ',
  '/learn/quiz/feedback': 'ফিডব্যাক',
  '/learn/quiz/results': 'ফলাফল',
};

export default function StudentNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (href: string, exact?: boolean) => {
    if (exact || href === '/learn') return pathname === href;
    if (href === '/learn/chapter') return pathname.startsWith('/learn/chapter');
    return pathname.startsWith(href);
  };

  const anyOverflowActive = overflowItems.some((item) => isActive(item.href));

  const crumb = pathname.startsWith('/learn/chapter/')
    ? 'অধ্যায়'
    : breadcrumbMap[pathname] ?? 'শিক্ষা';

  return (
    <>
      {/* ── Fixed Top Nav — identical structure to TopNav.tsx ── */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 h-16
        bg-white/95 dark:bg-[#01160D]
        backdrop-blur-md shadow-sm
        border-b border-emerald-100/60 dark:border-green-900/30">

        {/* Left: Logo + breadcrumb pill (pill hidden on mobile) */}
        <div className="flex items-center gap-3 md:gap-4 min-w-0">
          <Link href="/learn" className="text-xl md:text-2xl font-black text-primary font-headline tracking-tight shrink-0">
            BanglaQuest
          </Link>
          <div className="hidden md:flex items-center gap-1 px-3 py-1 bg-emerald-50/90 border border-emerald-200/60 rounded-full text-xs font-label text-slate-500 dark:text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px]">school</span>
            <span>banglaquest / learn /</span>
            <span className="text-emerald-700 dark:text-primary font-bold">{crumb}</span>
          </div>
          {/* Desktop nav links — only on lg+ to avoid overflow */}
          <nav className="hidden lg:flex gap-5 ml-4">
            {[
              { href: '/learn', label: 'হোম', exact: true },
              { href: '/learn/chapter', label: 'অধ্যায়' },
              { href: '/learn/quiz/start', label: 'কুইজ', match: '/learn/quiz' },
              { href: '/learn/mini-game', label: 'গেমস' },
            ].map((item) => {
              const active = item.exact ? pathname === item.href
                : item.match ? pathname.startsWith(item.match)
                : pathname.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href}
                  className={`pb-1 text-sm font-bold transition-colors ${
                    active
                      ? 'text-emerald-700 dark:text-primary border-b-2 border-emerald-600 dark:border-primary'
                      : 'text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-green-400'
                  }`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: streak + XP hidden on mobile, ThemeToggle + avatar always */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          {/* Streak — hidden on mobile */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-orange-50 dark:bg-emerald-900/30
            border border-orange-200/60 dark:border-green-900/40">
            <span className="material-symbols-outlined fill-icon text-orange-400" style={{ fontSize: '16px' }}>local_fire_department</span>
            <span className="text-slate-700 dark:text-white font-bold font-label text-sm">১৫</span>
          </div>

          {/* XP — hidden below lg */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-amber-50 dark:bg-emerald-900/30
            border border-amber-200/60 dark:border-green-900/40">
            <span className="material-symbols-outlined fill-icon text-amber-400" style={{ fontSize: '16px' }}>monetization_on</span>
            <span className="text-slate-700 dark:text-white font-bold font-label text-sm">১২৫০</span>
          </div>

          {/* Compact streak — mobile only */}
          <div className="flex md:hidden items-center gap-1">
            <span className="material-symbols-outlined fill-icon text-orange-400" style={{ fontSize: '18px' }}>local_fire_department</span>
            <span className="text-slate-700 dark:text-white font-bold font-label text-sm">১৫</span>
          </div>

          <ThemeToggle className="hover:bg-emerald-50 dark:hover:bg-green-900/20" />

          {/* Student avatar pill */}
          <div className="flex items-center gap-2 bg-primary/10 dark:bg-primary/15 px-2 py-1 rounded-full border border-primary/20 cursor-pointer hover:bg-primary/20 transition-colors">
            <div className="w-6 h-6 rounded-full bg-primary-container dark:bg-emerald-700 flex items-center justify-center text-on-primary-container dark:text-white font-bold text-xs shrink-0">
              রা
            </div>
            <span className="hidden sm:inline text-sm font-semibold text-slate-700 dark:text-on-surface">রাহেলা</span>
            <span className="material-symbols-outlined text-[16px] text-slate-400 dark:text-on-surface-variant hidden sm:inline">expand_more</span>
          </div>

          <Link href="/" className="hidden md:inline text-sm font-bold text-secondary hover:underline">
            Logout
          </Link>
        </div>
      </header>

      {/* ── Mobile: backdrop ── */}
      {drawerOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── Mobile: slide-up More drawer — identical to MobileNav.tsx ── */}
      <div
        className={`md:hidden fixed left-0 right-0 z-50 transition-transform duration-300 ease-out
          bg-surface-container-lowest dark:bg-[#082016]
          border-t border-emerald-100/70 dark:border-green-900/30
          rounded-t-3xl shadow-2xl
          ${drawerOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
        style={{ bottom: '64px' }}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-outline-variant/40 dark:bg-green-900/60" />
        </div>
        <div className="px-4 pt-2 pb-4">
          <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3 px-2">আরও পেজসমূহ</p>
          <div className="grid grid-cols-4 gap-2">
            {overflowItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all ${
                    active
                      ? 'bg-emerald-100 dark:bg-green-600/15 text-emerald-800 dark:text-primary'
                      : 'text-on-surface-variant hover:bg-surface-container dark:hover:bg-green-900/10'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[22px]"
                    style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-label font-bold text-center leading-tight">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Mobile Bottom Tab Bar — identical to MobileNav.tsx ── */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50
        bg-white/95 dark:bg-[#01160D]
        backdrop-blur-xl
        border-t border-emerald-100/70 dark:border-green-900/30
        flex justify-around items-center py-2">

        {primaryItems.map((item) => {
          const active = isActive(item.href, item.exact);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 p-2 min-w-0 transition-colors ${
                active ? 'text-emerald-700 dark:text-primary' : 'text-slate-400 dark:text-on-surface-variant'
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-label font-bold">{item.label}</span>
            </Link>
          );
        })}

        {/* More button */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className={`flex flex-col items-center gap-0.5 p-2 min-w-0 transition-colors ${
            anyOverflowActive || drawerOpen
              ? 'text-emerald-700 dark:text-primary'
              : 'text-slate-400 dark:text-on-surface-variant'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[22px] transition-transform duration-200 ${drawerOpen ? 'rotate-180' : ''}`}
          >
            {drawerOpen ? 'expand_more' : 'more_horiz'}
          </span>
          <span className="text-[10px] font-label font-bold">আরও</span>
        </button>
      </nav>
    </>
  );
}
