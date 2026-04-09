'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/learn', icon: 'home', label: 'হোম' },
  { href: '/learn/lesson', icon: 'menu_book', label: 'পাঠসমূহ' },
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
      <header className="flex justify-between items-center w-full px-6 py-3 sticky top-0 z-50 bg-emerald-900/90 backdrop-blur-md shadow-sm shadow-emerald-950/20">
        <div className="flex items-center gap-4">
          <Link href="/learn" className="text-2xl font-black tracking-tight text-white font-headline">
            BanglaQuest
          </Link>
          <div className="hidden md:flex gap-8 items-center ml-4">
            <span className="text-white border-b-4 border-white pb-1 text-base font-medium">শ্রেণী ৭</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-emerald-800/40 px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined fill-icon text-yellow-400">local_fire_department</span>
            <span className="text-emerald-50 font-bold font-label">১৫</span>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-800/40 px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined fill-icon text-yellow-300">monetization_on</span>
            <span className="text-emerald-50 font-bold font-label">১২৫০</span>
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-emerald-400 bg-emerald-700 flex items-center justify-center text-white font-bold text-sm">
            রা
          </div>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md flex justify-around items-center py-3 px-4 z-50 border-t border-outline-variant/20 shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive(item.href) ? 'text-primary' : 'text-on-surface-variant'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive(item.href) ? 'fill-icon' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
