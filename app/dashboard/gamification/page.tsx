"use client";

import { useState } from "react";

const badges = [
  { icon: "auto_awesome", name: "নতুন যোদ্ধা", color: "text-tertiary", tooltip: "প্রথম ৩টি কুইজ সম্পন্ন করে অর্জিত", locked: false },
  { icon: "bolt", name: "বিদ্যুৎ গতি", color: "text-secondary", tooltip: "৫ মিনিটে কুইজ শেষ করে অর্জিত", locked: false },
  { icon: "book", name: "পুঁথি পাঠক", color: "text-primary", tooltip: "১০টি পাঠ সম্পূর্ণ করে অর্জিত", locked: false },
  { icon: "military_tech", name: "সপ্তাহের সেরা", color: "text-tertiary-fixed-dim", tooltip: "গত সপ্তাহে সর্বোচ্চ স্কোর করে অর্জিত", locked: false },
  { icon: "history_edu", name: "ব্যাকরণ বিদ", color: "text-primary-fixed-dim", tooltip: "ব্যাকরণ কুইজে ১০০% সঠিক উত্তর দিয়ে অর্জিত", locked: false },
  { icon: "lock", name: "অভিযাত্রী", color: "text-outline", tooltip: "এখনও অর্জিত হয়নি", locked: true },
  { icon: "lock", name: "ভাষা সৈনিক", color: "text-outline", tooltip: "৯৫% এ পৌঁছান", locked: true },
  { icon: "lock", name: "মহাজ্ঞানী", color: "text-outline", tooltip: "সব বিষয়ে ৯০%+ অর্জন করুন", locked: true },
];

const weekDays = [
  { day: "শনি", done: true },
  { day: "রবি", done: true },
  { day: "সোম", done: true },
  { day: "মঙ্গল", done: true },
  { day: "বুধ", done: true },
  { day: "বৃহ", done: false, current: true },
  { day: "শুক্র", done: false },
];

const xpBars = [40, 55, 35, 65, 85, 60, 45, 70, 50, 95, 40, 60];

export default function GamificationPage() {
  const [activeTab, setActiveTab] = useState<"xp" | "time">("xp");

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-headline font-black text-primary tracking-tight mb-2">
          গেমিফিকেশন ও পুরস্কার
        </h1>
        <p className="text-on-surface-variant">
          তানভীরের স্ট্রিক, XP এবং অর্জিত ব্যাজসমূহ।
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Streak Hero Card */}
        <div className="col-span-12 lg:col-span-5 bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-6 md:p-8 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <span className="material-symbols-outlined text-tertiary-fixed fill-icon" style={{ fontSize: "36px" }}>
                local_fire_department
              </span>
              <span className="font-label text-sm uppercase tracking-[0.2em] text-primary-fixed">
                বর্তমান স্ট্রিক
              </span>
            </div>
            <div className="flex items-baseline gap-3 md:gap-4 mb-2">
              <h1 className="text-7xl md:text-8xl font-black font-headline tracking-tighter">১২</h1>
              <span className="text-3xl md:text-4xl font-bold font-body">দিন</span>
            </div>
            <p className="text-primary-fixed/80 text-base md:text-lg">
              অসাধারণ! আপনি টানা ১২ দিন অনুশীলন করেছেন।
            </p>
            {/* Week visualization */}
            <div className="mt-6 md:mt-8">
              <div className="flex flex-1 justify-between items-center bg-surface-container-low/60 rounded-2xl p-3 md:p-4 backdrop-blur-sm">
                {weekDays.map((d) => (
                  <div key={d.day} className="flex flex-col items-center gap-1">
                    <span className={`text-[10px] ${d.current ? "font-bold text-tertiary-fixed" : "opacity-60"}`}>
                      {d.day}
                    </span>
                    {d.done ? (
                      <span className="material-symbols-outlined text-primary-fixed fill-icon" style={{ fontSize: "18px" }}>
                        check_circle
                      </span>
                    ) : d.current ? (
                      <span className="w-5 h-5 rounded-full border-2 border-tertiary-fixed flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 bg-tertiary-fixed rounded-full" />
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full border border-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-surface-container/30 rounded-full blur-3xl" />
        </div>

        {/* Level Progress */}
        <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col justify-between border border-emerald-100/20">
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <div>
              <span className="font-label text-xs uppercase tracking-widest text-outline mb-2 block">
                অগ্রগতি ট্র্যাকার
              </span>
              <h2 className="text-2xl md:text-3xl font-black font-headline text-on-surface">
                লেভেল ১২
              </h2>
            </div>
            <div className="text-right">
              <span className="text-on-surface font-bold text-xl md:text-2xl">
                ৪৫০ / ৬০০{" "}
                <span className="text-sm font-normal text-outline">XP</span>
              </span>
              <p className="text-xs text-outline mt-1 font-label">পরবর্তী লেভেল: ১৩</p>
            </div>
          </div>
          {/* Level Bar */}
          <div className="w-full h-6 md:h-8 bg-surface-container-highest rounded-full mb-8 md:mb-10 overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full relative"
              style={{ width: "75%" }}
            >
              <div className="absolute right-2 top-1.5 w-4 h-4 bg-surface-container-low/40 rounded-full blur-sm" />
            </div>
          </div>
          {/* Mini Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              { icon: "menu_book", val: "১৫", label: "বই শেষ", bg: "bg-primary-fixed/15", ic: "text-primary", vc: "text-on-surface" },
              { icon: "star", val: "১২০", label: "অর্জিত স্টার", bg: "bg-orange-50", ic: "text-orange-700", vc: "text-orange-900" },
              { icon: "emoji_events", val: "৮", label: "ব্যাজ অর্জন", bg: "bg-surface-container-high", ic: "text-tertiary", vc: "text-on-surface" },
            ].map((stat) => (
              <div key={stat.label} className={`p-3 md:p-4 ${stat.bg} rounded-2xl flex flex-col items-center justify-center text-center`}>
                <span className={`material-symbols-outlined fill-icon mb-1.5 ${stat.ic}`} style={{ fontSize: "22px" }}>
                  {stat.icon}
                </span>
                <span className={`text-lg md:text-xl font-bold ${stat.vc}`}>{stat.val}</span>
                <span className={`text-[10px] font-medium uppercase ${stat.vc} opacity-70`}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* XP Chart */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-[2rem] p-6 md:p-8 shadow-sm border border-emerald-100/20">
          <div className="flex justify-between items-center mb-8 md:mb-10">
            <h3 className="font-headline font-bold text-lg md:text-xl text-on-surface">
              গত ৩০ দিনের XP অগ্রগতি
            </h3>
            <div className="flex gap-2">
              {(["xp", "time"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 md:px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeTab === tab
                      ? "bg-primary-fixed/25 text-on-surface"
                      : "text-outline hover:bg-surface-container"
                  }`}
                >
                  {tab === "xp" ? "XP পয়েন্ট" : "সময় ব্যয়"}
                </button>
              ))}
            </div>
          </div>
          <div className="relative h-48 md:h-64 flex items-end justify-between gap-1">
            <div className="absolute left-0 top-0 bottom-0 w-full flex flex-col justify-between pointer-events-none opacity-10">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="border-t border-emerald-800 w-full" />
              ))}
            </div>
            <div className="w-full flex items-end gap-1.5 md:gap-3 h-full px-2">
              {xpBars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-full transition-all hover:opacity-80 ${i === 9 ? "bg-primary" : "bg-primary-fixed/25"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4 md:mt-6 px-2 text-[10px] font-label text-outline uppercase tracking-tighter">
            <span>১ মে</span>
            <span>১০ মে</span>
            <span>২০ মে</span>
            <span>৩০ মে</span>
          </div>
        </div>

        {/* XP Wallet + Challenge */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6">
          <div className="flex-1 bg-tertiary-fixed rounded-[2rem] p-6 md:p-8 shadow-sm relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-md mb-3 md:mb-4">
              <span className="material-symbols-outlined text-tertiary fill-icon" style={{ fontSize: "32px" }}>
                monetization_on
              </span>
            </div>
            <h4 className="text-2xl md:text-3xl font-black font-headline text-tertiary-container">
              ১২৫০ XP
            </h4>
            <p className="text-tertiary-container/70 text-sm mt-1 font-body">মোট সংগ্রহীত ব্যালেন্স</p>
            <button className="mt-5 md:mt-6 w-full py-3 bg-tertiary-container text-tertiary-fixed rounded-xl font-bold font-label uppercase tracking-widest hover:shadow-lg transition-all">
              শপ ভিজিট করুন
            </button>
          </div>
          <div className="bg-surface-container-lowest rounded-[2rem] p-5 md:p-6 shadow-sm border border-emerald-100/20">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: "20px" }}>
                campaign
              </span>
              <span className="font-bold text-on-surface">নতুন চ্যালেঞ্জ!</span>
            </div>
            <p className="text-sm text-outline mb-4">
              আজকের ৩টি কুইজ সম্পন্ন করলে পাবেন অতিরিক্ত ১০০ XP।
            </p>
            <div className="flex justify-between items-center bg-surface-container p-3 rounded-xl">
              <span className="text-xs font-bold text-on-surface">১ / ৩ সম্পন্ন</span>
              <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-1/3" />
              </div>
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="col-span-12 bg-surface-container-lowest rounded-[2rem] p-6 md:p-8 shadow-sm border border-emerald-100/20">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <h3 className="font-headline font-bold text-xl md:text-2xl text-on-surface">
                অর্জিত ব্যাজসমূহ
              </h3>
              <p className="text-outline text-sm">Tanvir এর সকল কৃতিত্ব এখানে সংরক্ষিত</p>
            </div>
            <button className="text-primary font-bold text-sm hover:underline">সবগুলো দেখুন</button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className={`group relative flex flex-col items-center p-4 md:p-6 rounded-3xl transition-all cursor-help ${
                  badge.locked
                    ? "bg-surface-container/50 opacity-40 border-2 border-dashed border-outline-variant grayscale"
                    : "bg-surface-container hover:bg-primary-fixed/15"
                }`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                  <span className={`material-symbols-outlined fill-icon ${badge.color}`} style={{ fontSize: "28px" }}>
                    {badge.icon}
                  </span>
                </div>
                <span className="text-xs font-bold text-on-surface text-center leading-tight">
                  {badge.name}
                </span>
                {!badge.locked && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-on-surface text-surface text-[10px] px-3 py-1.5 rounded-lg whitespace-nowrap z-20 pointer-events-none">
                    {badge.tooltip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
