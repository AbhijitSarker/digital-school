"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryItems = [
  { href: "/dashboard", icon: "dashboard", label: "হোম" },
  { href: "/dashboard/progress", icon: "trending_up", label: "অগ্রগতি" },
  { href: "/dashboard/subjects", icon: "menu_book", label: "বিষয়" },
  { href: "/dashboard/gamification", icon: "military_tech", label: "অর্জন" },
];

const overflowItems = [
  { href: "/dashboard/quiz-history", icon: "history", label: "কুইজ ইতিহাস" },
  { href: "/dashboard/leaderboard", icon: "leaderboard", label: "লিডারবোর্ড" },
  { href: "/dashboard/reports", icon: "assessment", label: "রিপোর্ট" },
  { href: "/dashboard/notifications", icon: "notifications", label: "বিজ্ঞপ্তি" },
  { href: "/dashboard/profile", icon: "person", label: "প্রোফাইল" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const anyOverflowActive = overflowItems.some((item) => isActive(item.href));

  return (
    <>
      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Slide-up More drawer */}
      <div
        className={`md:hidden fixed left-0 right-0 z-50 transition-transform duration-300 ease-out
          bg-surface-container-lowest dark:bg-[#082016]
          border-t border-emerald-100/70 dark:border-green-900/30
          rounded-t-3xl shadow-2xl
          ${drawerOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
        style={{ bottom: '64px' }}
      >
        {/* Drawer handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-outline-variant/40 dark:bg-green-900/60" />
        </div>
        <div className="px-4 pt-2 pb-4">
          <p className="text-xs font-label uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 px-2">ভিউ পরিবর্তন</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Link
              href="/dashboard"
              onClick={() => setDrawerOpen(false)}
              className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all ${
                pathname.startsWith("/dashboard")
                  ? "bg-emerald-100 dark:bg-green-600/15 text-emerald-800 dark:text-emerald-400"
                  : "text-slate-500 dark:text-slate-400 hover:bg-surface-container dark:hover:bg-green-900/10"
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">dashboard</span>
              <span className="text-[10px] font-label font-bold text-center leading-tight">অভিভাবক</span>
            </Link>
            <Link
              href="/learn"
              onClick={() => setDrawerOpen(false)}
              className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all ${
                pathname.startsWith("/learn")
                  ? "bg-emerald-100 dark:bg-green-600/15 text-emerald-800 dark:text-emerald-400"
                  : "text-slate-500 dark:text-slate-400 hover:bg-surface-container dark:hover:bg-green-900/10"
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">school</span>
              <span className="text-[10px] font-label font-bold text-center leading-tight">শিক্ষার্থী</span>
            </Link>
          </div>
          <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3 px-2">আরও পেজসমূহ</p>
          <div className="grid grid-cols-5 gap-2">
            {overflowItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all ${
                    active
                      ? "bg-emerald-100 dark:bg-green-600/15 text-emerald-800 dark:text-primary"
                      : "text-on-surface-variant hover:bg-surface-container dark:hover:bg-green-900/10"
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[22px]"
                    style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-label font-bold text-center leading-tight">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50
        bg-white/95 dark:bg-[#01160D]
        backdrop-blur-xl
        border-t border-emerald-100/70 dark:border-green-900/30
        flex justify-around items-center py-2">
        {primaryItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 p-2 min-w-0 transition-colors ${
                active ? "text-emerald-700 dark:text-primary" : "text-slate-400 dark:text-on-surface-variant"
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-label font-bold">{item.label}</span>
            </Link>
          );
        })}

        {/* More button */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className={`flex flex-col items-center gap-0.5 p-2 min-w-0 transition-colors ${
            anyOverflowActive || drawerOpen
              ? "text-emerald-700 dark:text-primary"
              : "text-slate-400 dark:text-on-surface-variant"
          }`}
        >
          <span
            className={`material-symbols-outlined text-[22px] transition-transform duration-200 ${drawerOpen ? 'rotate-180' : ''}`}
          >
            {drawerOpen ? 'expand_more' : 'more_horiz'}
          </span>
          <span className="text-[10px] font-label font-bold">আরও</span>
        </button>
      </nav>
    </>
  );
}
