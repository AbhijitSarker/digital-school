'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  /** 'icon' = icon-only button (default), 'full' = icon + label */
  variant?: 'icon' | 'full';
  className?: string;
}

export default function ThemeToggle({ variant = 'icon', className = '' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`flex items-center gap-2 p-2 rounded-xl transition-all hover:bg-surface-container active:scale-95 ${className}`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span
        className="material-symbols-outlined fill-icon text-on-surface"
        style={{ fontSize: '22px' }}
      >
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
      {variant === 'full' && (
        <span className="text-sm font-label font-medium text-on-surface-variant">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
}
