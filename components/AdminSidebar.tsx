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

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside
        className={`
          h-screen w-72 lg:w-64 fixed left-0 top-0 z-50 flex flex-col
          bg-emerald-950 dark:bg-[#01160D]
          border-r border-emerald-900/40 dark:border-green-900/20
          overflow-y-auto shadow-2xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="px-6 pt-6 pb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined fill-icon text-primary" style={{ fontSize: '20px' }}>school</span>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-black tracking-tighter text-primary font-headline leading-none">BanglaQuest</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold font-label mt-0.5">Admin Console</p>
          </div>
          <button onClick={onClose} className="lg:hidden text-on-surface-variant hover:text-on-surface transition-colors p-1">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive(item.href)
                  ? 'bg-green-600/10 dark:bg-green-600/10 text-primary border-l-4 border-primary font-bold'
                  : 'text-on-surface-variant dark:text-slate-400 hover:bg-green-900/10 hover:text-primary dark:hover:text-green-400'
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
        <div className="p-4 border-t border-emerald-900/30 dark:border-green-900/20 space-y-3">
          {/* Theme toggle row */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs text-on-surface-variant font-label uppercase tracking-widest">Theme</span>
            <ThemeToggle className="hover:bg-green-900/20 dark:hover:bg-green-900/20" />
          </div>

          {/* Generate Report CTA */}
          <button className="w-full py-2.5 bg-primary text-on-primary rounded-xl font-label text-xs font-bold tracking-[0.05em] uppercase shadow-lg active:scale-95 transition-transform hover:opacity-90">
            Generate Report
          </button>

          {/* Admin profile */}
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-surface-container dark:bg-green-900/10 border border-outline-variant/20 dark:border-green-900/20">
            <div className="w-8 h-8 rounded-full bg-primary-container border border-primary/30 flex items-center justify-center font-bold text-primary text-sm font-headline shrink-0">
              আ
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-on-surface truncate">আরিফ হোসেন</p>
              <p className="text-[10px] text-on-surface-variant font-label">Super Admin</p>
            </div>
            <button
              onClick={() => { router.push('/admin/login'); onClose(); }}
              className="text-on-surface-variant hover:text-primary transition-colors"
              title="Logout"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
