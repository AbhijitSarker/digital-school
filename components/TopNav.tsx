"use client";

import { useState, useRef, useEffect } from "react";
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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* Notifications */}
        <Link
          href="/dashboard/notifications"
          className="relative p-2 rounded-full hover:bg-emerald-50 dark:hover:bg-green-900/20 transition-colors"
        >
          <span className="material-symbols-outlined text-slate-400 dark:text-on-surface-variant text-[20px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full ring-2 ring-white dark:ring-[#01160D]" />
        </Link>

        {/* User dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="flex items-center gap-2 bg-primary/10 dark:bg-primary/15 px-2 py-1 rounded-full border border-primary/20
              hover:bg-primary/20 dark:hover:bg-primary/25 transition-colors"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4HfnnTD3oOQzKgyBT-5hc5eYQLnh-ngU8WkGLk1ICYsdqTIefBRjYMrYUyqr-nKKbfVr9WaV9irUf30-0tEdOzwgVwWpgsaS8q9uPssR-QSgScEiO1YOODluaWxeFbEiMgeKkshvp1i8jTc19W-HLnRy_YV7JCoyxuHQcawErnCJXDZ5rqLdK2NvCs7UwQQrvzs-D7jaQ_4RFZ1nOMVNtJS7jbSD3yIdW5FxTlZZMTqyBmS4fu_Y0U5Bn-DiATr3euwbMVf_UEwq"
              alt="Student"
              className="w-6 h-6 rounded-full"
            />
            <div className="hidden sm:flex flex-col items-start leading-none">
              <span className="text-sm font-semibold text-slate-700 dark:text-on-surface">Tanvir</span>
              <span className="text-[10px] text-slate-400 dark:text-on-surface-variant font-label">Class 4</span>
            </div>
            <span className={`material-symbols-outlined text-[16px] text-slate-400 dark:text-on-surface-variant transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}>
              expand_more
            </span>
          </button>

          {/* Dropdown panel */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl shadow-xl
              bg-white dark:bg-[#082016]
              border border-emerald-100/80 dark:border-green-900/40
              overflow-hidden z-50">

              {/* Profile header */}
              <div className="px-4 py-3 bg-emerald-50/60 dark:bg-green-900/20 border-b border-emerald-100/60 dark:border-green-900/30 flex items-center gap-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4HfnnTD3oOQzKgyBT-5hc5eYQLnh-ngU8WkGLk1ICYsdqTIefBRjYMrYUyqr-nKKbfVr9WaV9irUf30-0tEdOzwgVwWpgsaS8q9uPssR-QSgScEiO1YOODluaWxeFbEiMgeKkshvp1i8jTc19W-HLnRy_YV7JCoyxuHQcawErnCJXDZ5rqLdK2NvCs7UwQQrvzs-D7jaQ_4RFZ1nOMVNtJS7jbSD3yIdW5FxTlZZMTqyBmS4fu_Y0U5Bn-DiATr3euwbMVf_UEwq"
                  alt="Tanvir"
                  className="w-10 h-10 rounded-full border-2 border-primary/30"
                />
                <div>
                  <p className="font-bold text-sm text-slate-800 dark:text-on-surface font-headline">Tanvir Ahmed</p>
                  <p className="text-xs text-slate-500 dark:text-on-surface-variant font-label">Class 4 · Level 12 · 1250 XP</p>
                </div>
              </div>

              {/* Parent info */}
              <div className="px-4 py-2.5 flex items-center gap-2 border-b border-emerald-100/40 dark:border-green-900/20">
                <span className="material-symbols-outlined text-slate-400 dark:text-on-surface-variant text-[16px]">supervisor_account</span>
                <div>
                  <p className="text-xs font-semibold text-slate-600 dark:text-on-surface">Arif Ahmed</p>
                  <p className="text-[10px] text-slate-400 dark:text-on-surface-variant font-label uppercase tracking-wide">অভিভাবক অ্যাকাউন্ট</p>
                </div>
              </div>

              {/* Menu items */}
              <div className="py-1.5">
                {[
                  { href: "/dashboard/profile", icon: "person", label: "Profile & Settings" },
                  { href: "/dashboard/notifications", icon: "notifications", label: "Notifications", badge: "3" },
                  { href: "/dashboard/progress", icon: "trending_up", label: "Progress Report" },
                  { href: "/learn", icon: "school", label: "Switch to Student View" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-emerald-50/80 dark:hover:bg-green-900/15 transition-colors"
                  >
                    <span className="material-symbols-outlined text-emerald-600 dark:text-primary text-[18px]">{item.icon}</span>
                    <span className="flex-1 text-sm text-slate-700 dark:text-on-surface font-label">{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-bold bg-secondary text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Switch student */}
              <div className="px-4 py-2.5 border-t border-emerald-100/40 dark:border-green-900/20">
                <button className="w-full flex items-center gap-3 py-2 px-3 rounded-xl
                  bg-emerald-50 dark:bg-green-900/20
                  hover:bg-emerald-100/80 dark:hover:bg-green-900/30
                  border border-emerald-200/60 dark:border-green-900/30 transition-colors">
                  <span className="material-symbols-outlined text-emerald-600 dark:text-primary text-[18px]">swap_horiz</span>
                  <span className="text-sm font-semibold text-emerald-700 dark:text-primary font-label">Switch Student</span>
                </button>
              </div>

              {/* Logout */}
              <div className="px-4 pb-3">
                <Link
                  href="/"
                  onClick={() => setDropdownOpen(false)}
                  className="w-full flex items-center gap-3 py-2 px-3 rounded-xl
                    hover:bg-red-50 dark:hover:bg-red-900/15
                    text-red-500 dark:text-red-400 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  <span className="text-sm font-semibold font-label">Logout</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
