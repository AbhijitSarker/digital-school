'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/learn', icon: 'home', label: 'হোম' },
  { href: '/learn/lesson', icon: 'menu_book', label: 'পাঠসমূহ' },
  { href: '/learn/daily-challenge', icon: 'bolt', label: 'ডেইলি চ্যালেঞ্জ' },
  { href: '/learn/mini-game', icon: 'videogame_asset', label: 'মিনি গেমস' },
  { href: '/dashboard', icon: 'dashboard', label: 'অভিভাবক ড্যাশবোর্ড' },
];

export default function StudentSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/learn') return pathname === '/learn';
    return pathname.startsWith(href);
  };

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 z-40
      bg-emerald-900 dark:bg-emerald-950
      border-r border-emerald-800/50 dark:border-emerald-900/40
      shadow-2xl shadow-black/20
    ">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-emerald-800/40 dark:border-emerald-900/40">
        <h1 className="text-xl font-extrabold font-headline tracking-tight
          text-emerald-300 dark:text-emerald-400">
          বাংলাকুয়েস্ট
        </h1>
        <p className="text-xs font-semibold mt-0.5
          text-emerald-500/80 dark:text-emerald-700/80">
          শ্রেণী ৭
        </p>
      </div>

      {/* XP Progress */}
      <div className="px-6 py-4 border-b border-emerald-800/30 dark:border-emerald-900/40">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-emerald-400 dark:text-emerald-500 uppercase tracking-wide">Level 12</span>
          <span className="text-xs text-emerald-500/70 dark:text-emerald-700/80">250 XP বাকি</span>
        </div>
        <div className="w-full h-2 rounded-full bg-emerald-900/60 dark:bg-emerald-900/50 overflow-hidden">
          <div className="h-full w-[65%] rounded-full bg-emerald-400 dark:bg-emerald-500" />
        </div>
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
                  ? 'bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-300 dark:text-emerald-400 font-bold border-r-4 border-emerald-400 dark:border-emerald-500'
                  : 'text-emerald-500/70 dark:text-emerald-700/80 hover:text-emerald-300 dark:hover:text-emerald-400 hover:bg-emerald-900/50 dark:hover:bg-emerald-900/50'
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
      <div className="p-4 border-t border-emerald-800/40 dark:border-emerald-900/40">
        <Link
          href="/learn/quiz/start"
          className="w-full py-3 px-4 rounded-xl font-bold text-sm tracking-wide shadow-lg
            hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2
            bg-emerald-500 dark:bg-primary text-emerald-950 dark:text-on-primary"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
          নতুন পাঠ শুরু করুন
        </Link>
      </div>
    </aside>
  );
}
