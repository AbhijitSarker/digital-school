'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

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

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-16 bottom-0 z-40
      bg-[#f2f7f4] dark:bg-[#01160D]
      border-r border-emerald-100/70 dark:border-green-900/30
      overflow-y-auto">

      {/* Nav */}
      <nav className="flex-1 px-2 py-3 space-y-0.5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
              isActive(item.href)
                ? 'bg-emerald-100/85 dark:bg-green-600/10 text-emerald-900 dark:text-primary border-l-4 border-emerald-600 dark:border-primary font-bold'
                : 'text-emerald-700 dark:text-slate-400 hover:bg-emerald-100/65 hover:text-emerald-900 dark:hover:bg-green-900/10 dark:hover:text-green-400'
            }`}
          >
            <span
              className="material-symbols-outlined shrink-0"
              style={{ fontSize: '20px', fontVariationSettings: isActive(item.href) ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-emerald-100/70 dark:border-green-900/30 space-y-3">
        {/* Theme toggle row */}
        <div className="flex items-center justify-between px-2">
          <span className="text-xs text-emerald-600/70 dark:text-on-surface-variant font-label uppercase tracking-widest">Theme</span>
          <ThemeToggle className="hover:bg-green-900/20 dark:hover:bg-green-900/20" />
        </div>

        {/* Generate Report CTA */}
        <button className="w-full py-2.5 bg-primary text-on-primary rounded-xl font-label text-xs font-bold tracking-[0.05em] uppercase shadow-lg active:scale-95 transition-transform hover:opacity-90">
          Generate Report
        </button>

        {/* Admin profile */}
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-white/70 dark:bg-green-900/10 border border-emerald-200/60 dark:border-green-900/20">
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-primary-container border border-emerald-300 dark:border-primary/30 flex items-center justify-center font-bold text-emerald-700 dark:text-primary text-sm font-headline shrink-0">
            আ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-emerald-900 dark:text-on-surface truncate">আরিফ হোসেন</p>
            <p className="text-[10px] text-emerald-600/70 dark:text-on-surface-variant font-label">Super Admin</p>
          </div>
          <button
            onClick={() => router.push('/admin/login')}
            className="text-emerald-600/70 dark:text-on-surface-variant hover:text-emerald-900 dark:hover:text-primary transition-colors"
            title="Logout"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
