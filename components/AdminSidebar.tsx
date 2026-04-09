'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

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

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <aside className="bg-emerald-900 text-emerald-50 h-screen w-64 fixed left-0 top-0 overflow-y-auto shadow-2xl z-50 flex flex-col p-4">
      {/* Logo */}
      <div className="mb-8 px-2 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
          <span className="material-symbols-outlined fill-icon text-white">auto_stories</span>
        </div>
        <div>
          <h1 className="text-lg font-black text-white leading-none font-headline">BanglaQuest</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-200/60 font-bold font-label">Admin Console</p>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium tracking-wide rounded-lg transition-all duration-200 hover:translate-x-1 ${
              isActive(item.href)
                ? 'bg-white/10 text-white border-l-4 border-secondary'
                : 'text-emerald-200/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive(item.href) ? 'fill-icon' : ''}`} style={{ fontSize: '20px' }}>
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Generate Report CTA */}
      <button className="mt-4 mb-2 bg-linear-to-br from-primary to-primary-container text-white py-3 rounded-xl font-label text-xs font-bold tracking-[0.05em] uppercase shadow-lg active:scale-95 transition-transform">
        Generate Report
      </button>

      {/* Admin profile */}
      <div className="mt-2 flex items-center gap-3 px-2 py-3 rounded-xl bg-white/5 border border-white/10">
        <div className="w-9 h-9 rounded-full bg-primary-fixed/30 border border-primary-fixed flex items-center justify-center font-bold text-white text-sm font-headline">
          আ
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">আরিফ হোসেন</p>
          <p className="text-[10px] text-emerald-300/60 font-label">Super Admin</p>
        </div>
        <button
          onClick={() => router.push('/admin/login')}
          className="text-emerald-300/60 hover:text-white transition-colors"
          title="Logout"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
        </button>
      </div>
    </aside>
  );
}
