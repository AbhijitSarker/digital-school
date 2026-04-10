'use client';

import { useAdminMenu } from '@/app/admin/(portal)/layout';

interface AdminHeaderProps {
  title: string;
  breadcrumb?: string;
  actions?: React.ReactNode;
}

export default function AdminHeader({ title, breadcrumb, actions }: AdminHeaderProps) {
  const onMenuToggle = useAdminMenu();

  return (
    <header className="
      w-full h-14 sticky top-0 z-40 flex items-center gap-3 px-4 md:px-6
      bg-white/95 dark:bg-[#01160D]
      backdrop-blur-md shadow-sm
      border-b border-emerald-100/60 dark:border-green-900/30
    ">
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl
          bg-emerald-50 dark:bg-green-900/10
          hover:bg-emerald-100 dark:hover:bg-green-900/20
          text-slate-600 dark:text-on-surface transition-colors shrink-0"
        aria-label="Open menu"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>menu</span>
      </button>

      {/* Search / breadcrumb */}
      <div className="hidden sm:flex items-center gap-3
        bg-emerald-50/90 dark:bg-surface-container-low
        border border-transparent dark:border-green-900/20
        px-4 py-2 rounded-lg flex-1 max-w-xl min-w-0">
        <span className="material-symbols-outlined text-slate-400 dark:text-outline shrink-0" style={{ fontSize: '18px' }}>search</span>
        <span className="text-slate-500 dark:text-slate-400 font-label tracking-tight text-sm truncate">
          banglaquest / admin / {breadcrumb ?? title.toLowerCase()}
        </span>
      </div>

      {/* Title on narrow mobile */}
      <h1 className="sm:hidden font-headline font-bold text-primary text-base flex-1 truncate">{title}</h1>

      {/* Right actions */}
      <div className="flex items-center gap-2 md:gap-3 ml-auto">
        {actions}
        <button className="hidden md:flex text-slate-400 dark:text-on-surface-variant hover:text-slate-600 dark:hover:text-on-surface
          hover:bg-emerald-50 dark:hover:bg-green-900/10 p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>notifications</span>
        </button>
        <button className="hidden md:flex text-slate-400 dark:text-on-surface-variant hover:text-slate-600 dark:hover:text-on-surface
          hover:bg-emerald-50 dark:hover:bg-green-900/10 p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>help_outline</span>
        </button>
        <div className="hidden md:block h-6 w-px bg-emerald-200/60 dark:bg-outline-variant/30" />
        <div className="w-8 h-8 rounded-full bg-primary-container border border-primary/30 flex items-center justify-center font-bold text-primary text-sm font-headline shrink-0">
          আ
        </div>
      </div>
    </header>
  );
}
