'use client';

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  actions?: React.ReactNode;
}

export default function AdminHeader({ title, subtitle, breadcrumb, actions }: AdminHeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-xl w-full h-16 sticky top-0 z-40 shadow-sm border-b border-outline-variant/10 flex justify-between items-center px-6">
      {/* Search / breadcrumb */}
      <div className="flex items-center gap-4 bg-surface-container px-4 py-2 rounded-lg flex-1 max-w-xl">
        <span className="material-symbols-outlined text-outline/60" style={{ fontSize: '18px' }}>search</span>
        <span className="text-on-surface-variant font-label tracking-tight text-sm">
          banglaquest / {breadcrumb ?? title.toLowerCase()}
        </span>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4 ml-4">
        {actions}
        <button className="text-on-surface hover:bg-surface-container p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>notifications</span>
        </button>
        <button className="text-on-surface hover:bg-surface-container p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>help_outline</span>
        </button>
        <div className="h-6 w-px bg-outline-variant/30" />
        <div className="w-9 h-9 rounded-full bg-primary-fixed/40 border border-primary-fixed flex items-center justify-center font-bold text-primary text-sm font-headline">আ</div>
      </div>
    </header>
  );
}
