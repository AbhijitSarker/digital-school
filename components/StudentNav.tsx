'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

const mobileNavItems = [
  { href: '/learn', icon: 'home', label: 'হোম' },
  { href: '/learn/lesson', icon: 'menu_book', label: 'পাঠ' },
  { href: '/learn/daily-challenge', icon: 'bolt', label: 'চ্যালেঞ্জ' },
  { href: '/learn/mini-game', icon: 'videogame_asset', label: 'গেমস' },
];

export default function StudentNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/learn') return pathname === '/learn';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Top Nav */}
      <header className="
        flex justify-between items-center w-full px-6 h-16 sticky top-0 z-50
        bg-white/95 dark:bg-[#01160D]
        backdrop-blur-md shadow-lg
        border-b border-emerald-100/60 dark:border-green-900/30
      ">
        <div className="flex items-center gap-4">
          <Link href="/learn" className="text-2xl font-black tracking-tight font-headline
            text-primary">
            BanglaQuest
          </Link>
          <nav className="hidden md:flex gap-6 ml-8">
            <span className="text-emerald-700 dark:text-primary border-b-2 border-emerald-600 dark:border-primary pb-1 text-sm font-bold">Lessons</span>
            <Link href="/learn/quiz/start" className="text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-green-400 transition-colors text-sm font-medium">Quizzes</Link>
            <Link href="/learn/mini-game" className="text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-green-400 transition-colors text-sm font-medium">Games</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Streak badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-orange-50 dark:bg-emerald-900/30
            border border-orange-200/60 dark:border-green-900/40">
            <span className="material-symbols-outlined fill-icon text-orange-400" style={{ fontSize: '16px' }}>local_fire_department</span>
            <span className="text-slate-700 dark:text-white font-bold font-label text-sm">১৫</span>
          </div>
          {/* XP badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-amber-50 dark:bg-emerald-900/30
            border border-amber-200/60 dark:border-green-900/40">
            <span className="material-symbols-outlined fill-icon text-amber-400" style={{ fontSize: '16px' }}>monetization_on</span>
            <span className="text-slate-700 dark:text-white font-bold font-label text-sm">১২৫০</span>
          </div>

          <ThemeToggle className="hover:bg-surface-container dark:hover:bg-green-900/20 text-on-surface" />

          <div className="w-9 h-9 rounded-full border-2 border-primary/40 dark:border-emerald-500
            bg-primary-container dark:bg-emerald-700
            flex items-center justify-center text-on-primary-container dark:text-white font-bold text-sm">
            রা
          </div>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-4 pt-2 pb-4
        bg-white/95 dark:bg-[#01160D]
        border-t border-emerald-100/70 dark:border-green-900/30
        backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        {mobileNavItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-0.5">
              {active ? (
                <div className="flex flex-col items-center justify-center
                  bg-emerald-100 dark:bg-emerald-500
                  text-emerald-800 dark:text-emerald-950
                  rounded-xl px-4 py-1.5 shadow-[0_0_15px_rgba(52,211,153,0.3)]
                  font-bold uppercase tracking-wider text-[10px]">
                  <span className="material-symbols-outlined fill-icon" style={{ fontSize: '20px' }}>{item.icon}</span>
                  {item.label}
                </div>
              ) : (
                <>
                  <span className="material-symbols-outlined text-slate-400 dark:text-slate-400" style={{ fontSize: '22px' }}>{item.icon}</span>
                  <span className="text-[10px] font-medium text-slate-400 dark:text-slate-400">{item.label}</span>
                </>
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
