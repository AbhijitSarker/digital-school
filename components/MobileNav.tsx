"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileItems = [
  { href: "/dashboard", icon: "dashboard", label: "হোম" },
  { href: "/dashboard/progress", icon: "trending_up", label: "অগ্রগতি" },
  { href: "/dashboard/subjects", icon: "menu_book", label: "বিষয়" },
  { href: "/dashboard/gamification", icon: "military_tech", label: "অর্জন" },
  { href: "/dashboard/profile", icon: "person", label: "প্রোফাইল" },
];

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-outline-variant/20 flex justify-around items-center py-2 z-50">
      {mobileItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center gap-0.5 p-2 min-w-0 transition-colors ${
            isActive(item.href)
              ? "text-primary"
              : "text-emerald-800/60"
          }`}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={
              isActive(item.href)
                ? { fontVariationSettings: "'FILL' 1" }
                : undefined
            }
          >
            {item.icon}
          </span>
          <span className="text-[10px] font-label font-bold">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
