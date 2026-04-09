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
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-slate-50 border-r border-surface-container-high py-6 gap-2 z-40">
      <div className="px-6 mb-6">
        <h1 className="text-xl font-extrabold text-emerald-900 font-headline tracking-tight">বাংলাকুয়েস্ট</h1>
        <p className="text-sm font-semibold text-emerald-700 opacity-70">শ্রেণী ৭</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 py-3 transition-all duration-200 ${
              isActive(item.href)
                ? 'text-emerald-700 font-bold border-l-4 border-secondary pl-4 bg-emerald-50'
                : 'text-slate-600 pl-5 hover:bg-slate-200/50 hover:translate-x-1'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive(item.href) ? 'fill-icon' : ''}`}>
              {item.icon}
            </span>
            <span className="text-sm font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="px-4 mt-auto">
        <Link
          href="/learn/quiz/start"
          className="w-full py-3 px-4 bg-primary text-white rounded-xl font-bold text-sm tracking-wide shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 uppercase"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          নতুন পাঠ শুরু করুন
        </Link>
      </div>
    </aside>
  );
}
