'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const viewOptions = [
  {
    href: '/dashboard',
    icon: 'dashboard' as const,
    title: 'Parent dashboard',
    subtitle: 'অভিভাবক ড্যাশবোর্ড',
    match: (p: string) => p.startsWith('/dashboard'),
  },
  {
    href: '/learn',
    icon: 'school' as const,
    title: 'Student app',
    subtitle: 'শিক্ষার্থী ভিউ',
    match: (p: string) => p.startsWith('/learn'),
  },
];

const navItems = [
  { href: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard Overview' },
  { href: '/admin/students', icon: 'group', label: 'Student Management' },
  { href: '/admin/content', icon: 'library_books', label: 'Content Management' },
  { href: '/admin/quiz-bank', icon: 'quiz', label: 'Quiz Bank' },
  { href: '/admin/analytics', icon: 'insights', label: 'Analytics' },
  { href: '/admin/gamification', icon: 'military_tech', label: 'Gamification' },
  { href: '/admin/schools', icon: 'domain', label: 'School Management' },
  { href: '/admin/challenges', icon: 'emoji_events', label: 'Daily Challenges' },
  { href: '/admin/settings', icon: 'settings_applications', label: 'System Settings' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [viewOpen, setViewOpen] = useState(false);
  const viewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (viewRef.current && !viewRef.current.contains(e.target as Node)) {
        setViewOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-16 bottom-0 z-40
      bg-[#f2f7f4] dark:bg-[#01160D]
      border-r border-emerald-100/70 dark:border-green-900/30
      overflow-y-auto">

      {/* Admin identity card — matches Sidebar.tsx structure */}
      <div className="px-6 pt-4 pb-2">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-emerald-100/80 shadow-sm dark:bg-surface-container dark:border-outline-variant/30">
          <div className="w-10 h-10 rounded-full bg-primary-fixed/20 flex items-center justify-center shrink-0 border border-primary-fixed/30 font-bold text-emerald-700 dark:text-on-primary-container text-base font-headline">
            আ
          </div>
          <div className="min-w-0">
            <h3 className="font-headline font-bold text-on-surface leading-tight text-sm truncate">
              আরিফ হোসেন
            </h3>
            <p className="text-xs text-on-surface-variant font-label">Super Admin</p>
          </div>
        </div>

        {/* Switch View button — identical to Sidebar.tsx */}
        <div className="relative mt-2" ref={viewRef}>
          <button
            type="button"
            onClick={() => setViewOpen((v) => !v)}
            className="w-full py-1.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest
              text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-600/40 rounded-lg
              hover:bg-emerald-100/60 dark:hover:bg-emerald-900/25 transition-all"
          >
            <span className="material-symbols-outlined text-[14px]">layers</span>
            Switch view
            <span className={`material-symbols-outlined text-[14px] transition-transform ${viewOpen ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          {viewOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 z-50 rounded-xl overflow-hidden shadow-lg
              bg-white dark:bg-[#082016] border border-emerald-100/80 dark:border-green-900/40">
              <p className="px-3 py-2 text-[10px] font-label uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-emerald-50/50 dark:bg-green-900/20 border-b border-emerald-100/60 dark:border-green-900/30">
                Open as
              </p>
              {viewOptions.map((opt) => {
                const current = opt.match(pathname);
                return (
                  <Link
                    key={opt.href}
                    href={opt.href}
                    onClick={() => setViewOpen(false)}
                    className={`flex items-start gap-3 px-3 py-2.5 transition-colors border-b border-emerald-100/40 dark:border-green-900/20 last:border-0
                      ${current ? 'bg-emerald-50/80 dark:bg-green-900/25' : 'hover:bg-emerald-50/60 dark:hover:bg-green-900/15'}`}
                  >
                    <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[20px] shrink-0 mt-0.5">
                      {opt.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-slate-800 dark:text-on-surface leading-tight">
                        {opt.title}
                      </span>
                      <span className="block text-[11px] text-slate-500 dark:text-on-surface-variant font-label mt-0.5">
                        {opt.subtitle}
                      </span>
                    </span>
                    {current && (
                      <span className="text-[9px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 shrink-0 mt-1">
                        Now
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-0.5 pr-4 overflow-y-auto py-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? 'sidebar-link-active' : 'sidebar-link'}
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: isActive(item.href) ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom CTA — logout + generate report */}
      <div className="pr-4 pb-6">
        <div className="mx-6 border-t border-emerald-200/60 dark:border-outline-variant/30 mb-3" />
        <button
          onClick={() => router.push('/admin/login')}
          className="sidebar-link w-full text-left"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span>Logout</span>
        </button>
        <div className="px-6 mt-3">
          <button className="w-full py-2.5 bg-primary text-on-primary rounded-xl font-label text-xs font-bold tracking-[0.05em] uppercase shadow-lg active:scale-95 transition-transform hover:opacity-90">
            Generate Report
          </button>
        </div>
      </div>
    </aside>
  );
}
