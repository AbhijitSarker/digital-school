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
    <header className="bg-surface-container-lowest/90 dark:bg-[#01160D] backdrop-blur-xl w-full h-16 sticky top-0 z-40 shadow-sm border-b border-outline-variant/20 dark:border-green-900/30 flex items-center gap-3 px-4 md:px-6">
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors shrink-0"
        aria-label="Open menu"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>menu</span>
      </button>

      {/* Search / breadcrumb — hidden on narrow mobile */}
      <div className="hidden sm:flex items-center gap-3 bg-surface-container px-4 py-2 rounded-lg flex-1 max-w-xl min-w-0">
        <span className="material-symbols-outlined text-outline/60 shrink-0" style={{ fontSize: '18px' }}>search</span>
        <span className="text-on-surface-variant font-label tracking-tight text-sm truncate">
          banglaquest / {breadcrumb ?? title.toLowerCase()}
        </span>
      </div>

      {/* Title on narrow mobile */}
      <h1 className="sm:hidden font-headline font-bold text-primary text-base flex-1 truncate">{title}</h1>

      {/* Right actions */}
      <div className="flex items-center gap-2 md:gap-3 ml-auto">
        {actions}
        <button className="hidden md:flex text-on-surface hover:bg-surface-container p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>notifications</span>
        </button>
        <button className="hidden md:flex text-on-surface hover:bg-surface-container p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>help_outline</span>
        </button>
        <div className="hidden md:block h-6 w-px bg-outline-variant/30" />
        <div className="w-9 h-9 rounded-full bg-primary-fixed/40 border border-primary-fixed flex items-center justify-center font-bold text-primary text-sm font-headline shrink-0">
          আ
        </div>
      </div>
    </header>
  );
}
