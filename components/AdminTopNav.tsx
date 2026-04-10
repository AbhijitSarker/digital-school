'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

const breadcrumbMap: Record<string, string> = {
  '/admin/dashboard': 'overview',
  '/admin/students': 'students',
  '/admin/content': 'content',
  '/admin/quiz-bank': 'quiz_bank',
  '/admin/analytics': 'analytics',
  '/admin/gamification': 'gamification',
  '/admin/schools': 'schools',
  '/admin/challenges': 'challenges',
  '/admin/settings': 'settings',
};

export default function AdminTopNav() {
  const pathname = usePathname();

  const crumb = Object.entries(breadcrumbMap).find(([key]) =>
    pathname === key || pathname.startsWith(key + '/')
  )?.[1] ?? 'admin';

  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-6 h-16
      bg-white/95 dark:bg-[#01160D]
      backdrop-blur-md shadow-sm
      border-b border-emerald-100/60 dark:border-green-900/30">

      {/* Left: Logo + Breadcrumb */}
      <div className="flex items-center gap-3 md:gap-4 min-w-0">
        <Link
          href="/admin/dashboard"
          className="text-xl md:text-2xl font-black text-primary font-headline tracking-tight shrink-0"
        >
          BanglaQuest
        </Link>

        {/* Breadcrumb pill — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1 px-3 py-1 bg-emerald-50/90 border border-emerald-200/60 rounded-full text-xs font-label text-slate-500 dark:text-on-surface-variant">
          <span className="material-symbols-outlined text-[14px]">admin_panel_settings</span>
          <span>banglaquest / admin /</span>
          <span className="text-emerald-700 dark:text-primary font-bold">{crumb}</span>
        </div>

        {/* Desktop nav links — lg+ only */}
        <nav className="hidden lg:flex gap-5 ml-4">
          {[
            { href: '/admin/dashboard', label: 'Overview' },
            { href: '/admin/students', label: 'Students' },
            { href: '/admin/content', label: 'Content' },
            { href: '/admin/analytics', label: 'Analytics' },
          ].map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-1 text-sm font-bold transition-colors ${
                  active
                    ? 'text-emerald-700 dark:text-primary border-b-2 border-emerald-600 dark:border-primary'
                    : 'text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-green-400'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right: Theme toggle + notifications + admin avatar */}
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        <ThemeToggle className="hover:bg-emerald-50 dark:hover:bg-green-900/20" />

        <button className="hidden md:flex p-2 rounded-full relative
          text-slate-400 dark:text-on-surface-variant
          hover:bg-emerald-50 dark:hover:bg-green-900/10
          hover:text-slate-600 dark:hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full" />
        </button>

        <div className="hidden md:flex flex-col items-end mr-1">
          <span className="text-sm font-bold text-slate-700 dark:text-on-surface font-headline leading-tight">আরিফ হোসেন</span>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-on-surface-variant font-label">Super Admin</span>
        </div>

        {/* Admin avatar pill */}
        <div className="flex items-center gap-2 bg-primary/10 dark:bg-primary/15 px-2 py-1 rounded-full border border-primary/20 cursor-pointer hover:bg-primary/20 transition-colors">
          <div className="w-6 h-6 rounded-full bg-primary-container dark:bg-emerald-700 flex items-center justify-center text-on-primary-container dark:text-white font-bold text-xs shrink-0">
            আ
          </div>
          <span className="hidden sm:inline text-sm font-semibold text-slate-700 dark:text-on-surface">Admin</span>
          <span className="material-symbols-outlined text-[16px] text-slate-400 dark:text-on-surface-variant hidden sm:inline">expand_more</span>
        </div>

        <Link href="/admin/login" className="hidden md:inline text-sm font-bold text-secondary hover:underline">
          Logout
        </Link>
      </div>
    </header>
  );
}
