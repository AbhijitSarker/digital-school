"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const breadcrumbMap: Record<string, string> = {
  "/dashboard": "overview",
  "/dashboard/progress": "progress_summary",
  "/dashboard/subjects": "subjects",
  "/dashboard/quiz-history": "quiz-history",
  "/dashboard/gamification": "gamification",
  "/dashboard/leaderboard": "leaderboard",
  "/dashboard/reports": "reports",
  "/dashboard/notifications": "notifications",
  "/dashboard/profile": "profile",
};

export default function TopNav() {
  const pathname = usePathname();
  const crumb = breadcrumbMap[pathname] || "dashboard";

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 h-16
      bg-white/95 dark:bg-[#01160D]
      backdrop-blur-md shadow-sm
      border-b border-emerald-100/60 dark:border-green-900/30">
      {/* Left: Logo + Breadcrumb */}
      <div className="flex items-center gap-3 md:gap-4">
        <Link
          href="/dashboard"
          className="text-xl md:text-2xl font-black text-primary font-headline tracking-tight"
        >
          BanglaQuest
        </Link>
        <div className="hidden md:flex items-center gap-1 px-3 py-1 bg-emerald-50/90 border border-emerald-200/60 rounded-full text-xs font-label text-slate-500 dark:text-on-surface-variant">
          <span className="material-symbols-outlined text-[14px]">folder</span>
          <span>banglaquest / dashboard /</span>
          <span className="text-emerald-700 dark:text-primary font-bold">{crumb}</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-3">
        <ThemeToggle />

        <div className="hidden md:flex flex-col items-end mr-1">
          <span className="text-sm font-bold text-slate-700 dark:text-on-surface font-headline leading-tight">Arif Ahmed</span>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-on-surface-variant font-label">অভিভাবক</span>
        </div>

        <Link
          href="/dashboard/notifications"
          className="p-2 rounded-full hover:bg-emerald-50 dark:hover:bg-green-900/20 transition-colors relative"
        >
          <span className="material-symbols-outlined text-slate-400 dark:text-on-surface-variant text-[20px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full" />
        </Link>

        <div className="flex items-center gap-2 bg-primary/10 dark:bg-primary/15 px-2 py-1 rounded-full border border-primary/20 cursor-pointer hover:bg-primary/20 transition-colors">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4HfnnTD3oOQzKgyBT-5hc5eYQLnh-ngU8WkGLk1ICYsdqTIefBRjYMrYUyqr-nKKbfVr9WaV9irUf30-0tEdOzwgVwWpgsaS8q9uPssR-QSgScEiO1YOODluaWxeFbEiMgeKkshvp1i8jTc19W-HLnRy_YV7JCoyxuHQcawErnCJXDZ5rqLdK2NvCs7UwQQrvzs-D7jaQ_4RFZ1nOMVNtJS7jbSD3yIdW5FxTlZZMTqyBmS4fu_Y0U5Bn-DiATr3euwbMVf_UEwq"
            alt="Student"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm font-semibold text-slate-700 dark:text-on-surface hidden sm:inline">Tanvir</span>
          <span className="material-symbols-outlined text-[16px] text-slate-400 dark:text-on-surface-variant">expand_more</span>
        </div>

        <Link href="/" className="hidden md:inline text-sm font-bold text-secondary hover:underline">
          Logout
        </Link>
      </div>
    </header>
  );
}
