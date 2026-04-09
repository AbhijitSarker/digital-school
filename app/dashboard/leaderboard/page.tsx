"use client";

import { useState } from "react";

type Period = "week" | "month" | "all";

const leaders = [
  { rank: 1, name: "Nafisa Islam", school: "বাউনিয়া সরকারি প্রাথমিক বিদ্যালয়", xp: 8200, avatar: "NI", color: "bg-amber-100 text-amber-800", badge: "🥇" },
  { rank: 2, name: "Tanvir Ahmed", school: "রহমতপুর সরকারি প্রাথমিক বিদ্যালয়", xp: 7950, avatar: "TA", color: "bg-emerald-100 text-emerald-800", badge: "🥈", isUser: true },
  { rank: 3, name: "Riya Das", school: "ধানমন্ডি সরকারি প্রাথমিক বিদ্যালয়", xp: 7680, avatar: "RD", color: "bg-blue-100 text-blue-800", badge: "🥉" },
  { rank: 4, name: "Arham Chowdhury", school: "গুলশান সরকারি প্রাথমিক বিদ্যালয়", xp: 6540, avatar: "AC", color: "bg-purple-100 text-purple-800", badge: null },
  { rank: 5, name: "Priya Barua", school: "মিরপুর সরকারি প্রাথমিক বিদ্যালয়", xp: 5900, avatar: "PB", color: "bg-pink-100 text-pink-800", badge: null },
  { rank: 6, name: "Shakib Rahman", school: "উত্তরা সরকারি প্রাথমিক বিদ্যালয়", xp: 5420, avatar: "SR", color: "bg-indigo-100 text-indigo-800", badge: null },
  { rank: 7, name: "Meghna Akter", school: "বনানী সরকারি প্রাথমিক বিদ্যালয়", xp: 4980, avatar: "MA", color: "bg-rose-100 text-rose-800", badge: null },
];

const subjects = ["সকল বিষয়", "বাংলা", "গণিত", "ইংরেজি", "বিজ্ঞান"];

export default function LeaderboardPage() {
  const [period, setPeriod] = useState<Period>("week");
  const [subject, setSubject] = useState("সকল বিষয়");

  const top3 = leaders.slice(0, 3);
  const rest = leaders.slice(3);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-headline font-black text-primary tracking-tight mb-2">
          লিডারবোর্ড
        </h1>
        <p className="text-on-surface-variant">
          তানভীর তার বন্ধুদের মধ্যে কোথায় আছে দেখুন।
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex bg-surface-container-low rounded-full p-1 gap-1">
          {(["week", "month", "all"] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                period === p ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              {p === "week" ? "এই সপ্তাহ" : p === "month" ? "এই মাস" : "সর্বকালীন"}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {subjects.map((s) => (
            <button
              key={s}
              onClick={() => setSubject(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                subject === s ? "bg-primary-fixed text-on-primary-fixed-variant" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Podium - Top 3 */}
      <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-6 md:p-8 mb-6 md:mb-8 shadow-xl">
        <div className="flex items-end justify-center gap-3 md:gap-6">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-container-high/30 flex items-center justify-center text-white font-black text-lg md:text-xl font-headline mb-2 border-2 border-white/30">
              {top3[1].avatar}
            </div>
            <div className={`w-20 md:w-24 rounded-t-2xl flex flex-col items-center justify-end pb-3 pt-6`} style={{ height: "100px", background: "rgba(255,255,255,0.15)" }}>
              <span className="text-2xl">🥈</span>
              <span className="text-white font-bold text-xs text-center mt-1 leading-tight px-1">
                {top3[1].name.split(" ")[0]}
              </span>
              <span className="text-primary-fixed text-[10px] font-bold">{top3[1].xp.toLocaleString()} XP</span>
            </div>
          </div>
          {/* 1st Place */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary-container font-black text-xl md:text-2xl font-headline mb-2 border-4 border-white shadow-lg">
              {top3[0].avatar}
            </div>
            <div className="w-24 md:w-28 rounded-t-2xl flex flex-col items-center justify-end pb-3 pt-6" style={{ height: "130px", background: "rgba(255,255,255,0.25)" }}>
              <span className="text-3xl">🥇</span>
              <span className="text-white font-bold text-sm text-center mt-1 leading-tight px-1">
                {top3[0].name.split(" ")[0]}
              </span>
              <span className="text-tertiary-fixed text-[11px] font-bold">{top3[0].xp.toLocaleString()} XP</span>
            </div>
          </div>
          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-container-high/30 flex items-center justify-center text-white font-black text-lg md:text-xl font-headline mb-2 border-2 border-white/30">
              {top3[2].avatar}
            </div>
            <div className="w-20 md:w-24 rounded-t-2xl flex flex-col items-center justify-end pb-3 pt-6" style={{ height: "80px", background: "rgba(255,255,255,0.10)" }}>
              <span className="text-2xl">🥉</span>
              <span className="text-white font-bold text-xs text-center mt-1 leading-tight px-1">
                {top3[2].name.split(" ")[0]}
              </span>
              <span className="text-primary-fixed text-[10px] font-bold">{top3[2].xp.toLocaleString()} XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full Rankings Table */}
      <div className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden">
        <div className="px-5 md:px-8 py-4 md:py-5 border-b border-surface-container-low flex items-center justify-between">
          <h3 className="font-headline font-bold text-emerald-900">সম্পূর্ণ র‍্যাংকিং</h3>
          <span className="text-xs font-label text-outline">{period === "week" ? "এই সপ্তাহ" : period === "month" ? "এই মাস" : "সর্বকালীন"}</span>
        </div>
        <div className="divide-y divide-surface-container-low">
          {leaders.map((leader) => (
            <div
              key={leader.rank}
              className={`flex items-center gap-3 md:gap-4 px-5 md:px-8 py-3 md:py-4 transition-colors ${
                leader.isUser ? "bg-primary-fixed/20 border-l-4 border-primary" : "hover:bg-emerald-50/30"
              }`}
            >
              <span className="w-6 text-center font-black font-headline text-sm text-on-surface-variant shrink-0">
                {leader.badge ? leader.badge : `#${leader.rank}`}
              </span>
              <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${leader.color}`}>
                {leader.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-bold text-sm md:text-base ${leader.isUser ? "text-primary" : "text-on-surface"}`}>
                  {leader.name} {leader.isUser && <span className="text-[10px] font-label bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded-full ml-1">আপনার সন্তান</span>}
                </p>
                <p className="text-xs text-outline truncate">{leader.school}</p>
              </div>
              <div className="text-right shrink-0">
                <p className={`font-black font-headline text-sm md:text-base ${leader.isUser ? "text-primary" : "text-on-surface"}`}>
                  {leader.xp.toLocaleString()}
                </p>
                <p className="text-[10px] text-outline font-label">XP</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-5 md:p-6 border-t border-surface-container-low flex justify-center">
          <button className="text-sm font-bold text-outline hover:text-primary transition-colors flex items-center gap-2">
            আরো দেখুন
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>expand_more</span>
          </button>
        </div>
      </div>

      {/* Tanvir's Ranking Summary */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "বর্তমান র‍্যাংক", value: "#২", icon: "leaderboard", color: "text-primary" },
          { label: "শীর্ষে পৌঁছাতে", value: "২৫০ XP", icon: "bolt", color: "text-secondary" },
          { label: "উন্নতি (এ সপ্তাহ)", value: "+৩ ধাপ", icon: "trending_up", color: "text-emerald-600" },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <span className={`material-symbols-outlined fill-icon ${stat.color}`} style={{ fontSize: "28px" }}>{stat.icon}</span>
            <div>
              <p className="text-xs text-outline font-label">{stat.label}</p>
              <p className={`text-xl font-black font-headline ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
