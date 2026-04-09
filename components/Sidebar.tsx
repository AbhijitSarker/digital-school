"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard Home" },
  { href: "/dashboard/progress", icon: "trending_up", label: "Progress" },
  { href: "/dashboard/subjects", icon: "menu_book", label: "Subjects" },
  { href: "/dashboard/quiz-history", icon: "history", label: "Quiz History" },
  { href: "/dashboard/gamification", icon: "military_tech", label: "Gamification" },
  { href: "/dashboard/leaderboard", icon: "leaderboard", label: "Leaderboard" },
  { href: "/dashboard/reports", icon: "assessment", label: "Reports" },
];

const bottomItems = [
  { href: "/dashboard/notifications", icon: "notifications", label: "Notifications" },
  { href: "/dashboard/profile", icon: "settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 pt-20 flex flex-col z-40 hidden md:flex
      bg-surface-container-lowest dark:bg-[#01160D]
      border-r border-outline-variant/20 dark:border-green-900/30">
      {/* Student Card */}
      <div className="px-6 mb-6">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container border border-outline-variant/20 dark:border-outline-variant/30">
          <div className="w-10 h-10 rounded-full bg-primary-fixed/20 flex items-center justify-center overflow-hidden shrink-0 border border-primary-fixed/30">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4HfnnTD3oOQzKgyBT-5hc5eYQLnh-ngU8WkGLk1ICYsdqTIefBRjYMrYUyqr-nKKbfVr9WaV9irUf30-0tEdOzwgVwWpgsaS8q9uPssR-QSgScEiO1YOODluaWxeFbEiMgeKkshvp1i8jTc19W-HLnRy_YV7JCoyxuHQcawErnCJXDZ5rqLdK2NvCs7UwQQrvzs-D7jaQ_4RFZ1nOMVNtJS7jbSD3yIdW5FxTlZZMTqyBmS4fu_Y0U5Bn-DiATr3euwbMVf_UEwq"
              alt="Tanvir"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-headline font-bold text-on-surface leading-tight text-sm truncate">
              Tanvir Ahmed
            </h3>
            <p className="text-xs text-on-surface-variant font-label">Class 4 • Level 12</p>
          </div>
        </div>
        <button className="mt-2 w-full py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-all">
          Switch Student
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-0.5 pr-4 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "sidebar-link-active" : "sidebar-link"}
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={isActive(item.href) ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {item.icon}
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="pr-4 pb-6 flex flex-col gap-0.5">
        <div className="mx-6 border-t border-outline-variant/30 mb-2" />
        {bottomItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "sidebar-link-active" : "sidebar-link"}
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
