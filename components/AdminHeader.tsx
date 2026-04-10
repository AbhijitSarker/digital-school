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
      bg-surface-container-lowest/95 dark:bg-slate-950/80
      backdrop-blur-md shadow-sm
      border-b border-outline-variant/20 dark:border-green-900/30
    ">
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl
          bg-surface-container dark:bg-green-900/10
          hover:bg-surface-container-high dark:hover:bg-green-900/20
          text-on-surface transition-colors shrink-0"
        aria-label="Open menu"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>menu</span>
      </button>

      {/* Search / breadcrumb */}
      <div className="hidden sm:flex items-center gap-3
        bg-surface-container dark:bg-surface-container-low
        border border-transparent dark:border-green-900/20
        px-4 py-2 rounded-lg flex-1 max-w-xl min-w-0">
        <span className="material-symbols-outlined text-outline shrink-0" style={{ fontSize: '18px' }}>search</span>
        <span className="text-on-surface-variant dark:text-slate-400 font-label tracking-tight text-sm truncate">
          banglaquest / admin / {breadcrumb ?? title.toLowerCase()}
        </span>
      </div>

      {/* Title on narrow mobile */}
      <h1 className="sm:hidden font-headline font-bold text-primary text-base flex-1 truncate">{title}</h1>

      {/* Right actions */}
      <div className="flex items-center gap-2 md:gap-3 ml-auto">
        {actions}
        <button className="hidden md:flex text-on-surface-variant hover:text-on-surface
          hover:bg-surface-container dark:hover:bg-green-900/10 p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>notifications</span>
        </button>
        <button className="hidden md:flex text-on-surface-variant hover:text-on-surface
          hover:bg-surface-container dark:hover:bg-green-900/10 p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>help_outline</span>
        </button>
        <div className="hidden md:block h-6 w-px bg-outline-variant/30" />
        <div className="w-8 h-8 rounded-full bg-primary-container border border-primary/30 flex items-center justify-center font-bold text-primary text-sm font-headline shrink-0">
          আ
        </div>
      </div>
    </header>
  );
}
