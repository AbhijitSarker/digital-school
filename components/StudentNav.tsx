'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

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
      <header className="flex justify-between items-center w-full px-6 py-3 sticky top-0 z-50 bg-emerald-950/95 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/learn" className="text-2xl font-black tracking-tight text-white font-headline">
            BanglaQuest
          </Link>
          <div className="hidden md:flex gap-8 items-center ml-4">
            <span className="text-white border-b-4 border-primary-fixed pb-1 text-base font-medium">শ্রেণী ৭</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined fill-icon text-tertiary-fixed-dim">local_fire_department</span>
            <span className="text-white font-bold font-label">১৫</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined fill-icon text-tertiary-fixed">monetization_on</span>
            <span className="text-white font-bold font-label">১২৫০</span>
          </div>
          <ThemeToggle className="hover:bg-white/10 text-white" />
          <div className="w-9 h-9 rounded-full border-2 border-primary-fixed bg-primary flex items-center justify-center text-on-primary font-bold text-sm">
            রা
          </div>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest/95 backdrop-blur-md flex justify-around items-center py-3 px-4 z-50 border-t border-outline-variant/20 shadow-lg">
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
