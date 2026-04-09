'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
  { href: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { href: '/admin/students', icon: 'group', label: 'Students' },
  { href: '/admin/content', icon: 'library_books', label: 'Content' },
  { href: '/admin/quiz-bank', icon: 'quiz', label: 'Quiz Bank' },
  { href: '/admin/analytics', icon: 'insights', label: 'Analytics' },
  { href: '/admin/gamification', icon: 'military_tech', label: 'Gamification' },
  { href: '/admin/schools', icon: 'domain', label: 'Schools' },
  { href: '/admin/challenges', icon: 'emoji_events', label: 'Challenges' },
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
      {/* Mobile backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-emerald-950 text-emerald-50 h-screen w-72 lg:w-64 fixed left-0 top-0 overflow-y-auto shadow-2xl z-50 flex flex-col p-4 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo + close on mobile */}
        <div className="mb-8 px-2 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined fill-icon text-primary-fixed">auto_stories</span>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-black text-white leading-none font-headline">BanglaQuest</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/50 font-bold font-label">Admin Console</p>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-emerald-300/70 hover:text-white transition-colors p-1"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium tracking-wide rounded-lg transition-all duration-200 hover:translate-x-1 ${
                isActive(item.href)
                  ? 'bg-white/15 text-white border-l-4 border-primary-fixed'
                  : 'text-emerald-300/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span
                className={`material-symbols-outlined ${isActive(item.href) ? 'fill-icon' : ''}`}
                style={{ fontSize: '20px' }}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Theme toggle */}
        <div className="mt-4 px-2 flex items-center justify-between rounded-xl bg-white/5 border border-white/10 py-2">
          <span className="text-xs text-emerald-300/60 font-label uppercase tracking-widest">Theme</span>
          <ThemeToggle className="hover:bg-white/10" />
        </div>

        {/* Generate Report CTA */}
        <button className="mt-2 mb-2 bg-primary-fixed text-on-primary-fixed py-3 rounded-xl font-label text-xs font-bold tracking-[0.05em] uppercase shadow-lg active:scale-95 transition-transform hover:opacity-90">
          Generate Report
        </button>

        {/* Admin profile */}
        <div className="mt-2 flex items-center gap-3 px-2 py-3 rounded-xl bg-white/5 border border-white/10">
          <div className="w-9 h-9 rounded-full bg-primary-fixed/20 border border-primary-fixed/40 flex items-center justify-center font-bold text-primary-fixed text-sm font-headline shrink-0">
            আ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">আরিফ হোসেন</p>
            <p className="text-[10px] text-emerald-300/60 font-label">Super Admin</p>
          </div>
          <button
            onClick={() => { router.push('/admin/login'); onClose(); }}
            className="text-emerald-300/60 hover:text-white transition-colors"
            title="Logout"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
