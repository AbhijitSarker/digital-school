'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const crumb = Object.entries(breadcrumbMap).find(([key]) =>
    pathname === key || pathname.startsWith(key + '/')
  )?.[1] ?? 'admin';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

        {/* Admin avatar dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="flex items-center gap-2 bg-primary/10 dark:bg-primary/15 px-2 py-1 rounded-full border border-primary/20
              hover:bg-primary/20 dark:hover:bg-primary/25 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-primary-container dark:bg-emerald-700 flex items-center justify-center text-on-primary-container dark:text-white font-bold text-xs shrink-0">
              আ
            </div>
            <div className="hidden sm:flex flex-col items-start leading-none">
              <span className="text-sm font-semibold text-slate-700 dark:text-on-surface">আরিফ হোসেন</span>
              <span className="text-[10px] text-slate-400 dark:text-on-surface-variant font-label">Super Admin</span>
            </div>
            <span className={`material-symbols-outlined text-[16px] text-slate-400 dark:text-on-surface-variant transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl shadow-xl
              bg-white dark:bg-[#082016]
              border border-emerald-100/80 dark:border-green-900/40
              overflow-hidden z-50">
              <div className="px-4 py-3 bg-emerald-50/60 dark:bg-green-900/20 border-b border-emerald-100/60 dark:border-green-900/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container dark:bg-emerald-700 flex items-center justify-center text-on-primary-container dark:text-white font-bold text-sm">
                  আ
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-800 dark:text-on-surface font-headline">আরিফ হোসেন</p>
                  <p className="text-xs text-slate-500 dark:text-on-surface-variant font-label">Super Admin · BanglaQuest</p>
                </div>
              </div>

              <div className="py-1.5">
                {[
                  { href: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard Overview' },
                  { href: '/admin/students', icon: 'group', label: 'Student Management' },
                  { href: '/admin/settings', icon: 'settings', label: 'System Settings' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-emerald-50/80 dark:hover:bg-green-900/15 transition-colors"
                  >
                    <span className="material-symbols-outlined text-emerald-600 dark:text-primary text-[18px]">{item.icon}</span>
                    <span className="flex-1 text-sm text-slate-700 dark:text-on-surface font-label">{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="px-4 pb-3 pt-1 border-t border-emerald-100/40 dark:border-green-900/20">
                <Link
                  href="/admin/login"
                  onClick={() => setDropdownOpen(false)}
                  className="w-full flex items-center gap-3 py-2 px-3 rounded-xl
                    hover:bg-red-50 dark:hover:bg-red-900/15
                    text-red-500 dark:text-red-400 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  <span className="text-sm font-semibold font-label">Logout</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
