'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/learn', icon: 'home', label: 'হোম' },
  { href: '/learn/chapter', icon: 'auto_stories', label: 'অধ্যায়সমূহ' },
  { href: '/learn/lesson', icon: 'menu_book', label: 'পাঠ' },
  { href: '/learn/daily-challenge', icon: 'bolt', label: 'ডেইলি চ্যালেঞ্জ' },
  { href: '/learn/mini-game', icon: 'videogame_asset', label: 'মিনি গেমস' },
  { href: '/dashboard', icon: 'dashboard', label: 'অভিভাবক ড্যাশবোর্ড' },
];

export default function StudentSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/learn') return pathname === '/learn';
    if (href === '/learn/chapter') return pathname.startsWith('/learn/chapter');
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
