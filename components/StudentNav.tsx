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
        bg-emerald-800 dark:bg-emerald-950/90
        backdrop-blur-md shadow-lg
        border-b border-emerald-700/50 dark:border-emerald-900/50
      ">
        <div className="flex items-center gap-4">
          <Link href="/learn" className="text-2xl font-black tracking-tight font-headline
            text-white dark:text-emerald-400">
            BanglaQuest
          </Link>
          <nav className="hidden md:flex gap-6 ml-8">
            <span className="text-white dark:text-emerald-400 border-b-2 border-white dark:border-emerald-400 pb-1 text-sm font-bold">Lessons</span>
            <Link href="/learn/quiz/start" className="text-emerald-200/70 dark:text-emerald-700 hover:text-white dark:hover:text-emerald-500 transition-colors text-sm font-medium">Quizzes</Link>
            <Link href="/learn/mini-game" className="text-emerald-200/70 dark:text-emerald-700 hover:text-white dark:hover:text-emerald-500 transition-colors text-sm font-medium">Games</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Streak badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-white/15 dark:bg-emerald-900/30
            border border-white/20 dark:border-emerald-800/50">
            <span className="material-symbols-outlined fill-icon text-orange-300" style={{ fontSize: '16px' }}>local_fire_department</span>
            <span className="text-white font-bold font-label text-sm">১৫</span>
          </div>
          {/* XP badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-white/15 dark:bg-emerald-900/30
            border border-white/20 dark:border-emerald-800/50">
            <span className="material-symbols-outlined fill-icon text-yellow-300" style={{ fontSize: '16px' }}>monetization_on</span>
            <span className="text-white font-bold font-label text-sm">১২৫০</span>
          </div>

          <ThemeToggle className="hover:bg-white/15 dark:hover:bg-emerald-900/30 text-white dark:text-emerald-400" />

          <div className="w-9 h-9 rounded-full border-2 border-white/50 dark:border-emerald-500
            bg-emerald-600 dark:bg-emerald-700
            flex items-center justify-center text-white font-bold text-sm">
            রা
          </div>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-4 pt-2 pb-4
        bg-emerald-800/95 dark:bg-emerald-950/95
        border-t border-emerald-700/40 dark:border-emerald-800/30
        backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        {mobileNavItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-0.5">
              {active ? (
                <div className="flex flex-col items-center justify-center
                  bg-emerald-400 dark:bg-emerald-500
                  text-emerald-900 dark:text-emerald-950
                  rounded-xl px-4 py-1.5 shadow-[0_0_15px_rgba(52,211,153,0.4)]
                  font-bold uppercase tracking-wider text-[10px]">
                  <span className="material-symbols-outlined fill-icon" style={{ fontSize: '20px' }}>{item.icon}</span>
                  {item.label}
                </div>
              ) : (
                <>
                  <span className="material-symbols-outlined text-emerald-200/60 dark:text-emerald-700" style={{ fontSize: '22px' }}>{item.icon}</span>
                  <span className="text-[10px] font-medium text-emerald-200/50 dark:text-emerald-700/80">{item.label}</span>
                </>
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
