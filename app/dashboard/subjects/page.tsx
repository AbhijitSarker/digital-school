"use client";

import { useState } from "react";
import Link from "next/link";

const subjects = [
  {
    id: "math",
    name: "গণিত",
    subtitle: "Mathematics",
    icon: "calculate",
    color: "from-primary to-primary-container",
    pct: 65,
    abstract: "∑ ∫ π",
    chapters: [
      { name: "গুণ (Multiplication)", chapter: "৩", lessons: "১২", time: "৩ ঘণ্টা ২০ মিনিট", score: "৯২%", scoreColor: "text-primary", progress: 85, icon: "close" },
      { name: "ভাগ (Division)", chapter: "৪", lessons: "১৫", time: "৪ ঘণ্টা ১৫ মিনিট", score: "৬৮%", scoreColor: "text-secondary", progress: 52, icon: "percent" },
      { name: "ভগ্নাংশ (Fractions)", chapter: "৮", lessons: "১০", time: "১ ঘণ্টা ১০ মিনিট", score: "--", scoreColor: "text-on-surface-variant", progress: 12, icon: "pie_chart" },
    ],
  },
  {
    id: "bangla",
    name: "বাংলা",
    subtitle: "Bangla Language",
    icon: "translate",
    color: "from-emerald-700 to-emerald-900",
    pct: 92,
    abstract: "অ আ ক খ",
    chapters: [
      { name: "স্বরবর্ণ", chapter: "১", lessons: "৮", time: "২ ঘণ্টা", score: "৯৮%", scoreColor: "text-primary", progress: 98, icon: "abc" },
      { name: "ব্যঞ্জনবর্ণ", chapter: "২", lessons: "১২", time: "৩ ঘণ্টা ৪০ মিনিট", score: "৯৫%", scoreColor: "text-primary", progress: 95, icon: "spellcheck" },
      { name: "যুক্তবর্ণ", chapter: "৩", lessons: "১০", time: "২ ঘণ্টা ৩০ মিনিট", score: "৮৫%", scoreColor: "text-primary", progress: 85, icon: "format_shapes" },
    ],
  },
  {
    id: "english",
    name: "ইংরেজি",
    subtitle: "English Language",
    icon: "language",
    color: "from-amber-700 to-amber-900",
    pct: 68,
    abstract: "A B C D",
    chapters: [
      { name: "Grammar Basics", chapter: "১", lessons: "৮", time: "২ ঘণ্টা ১০ মিনিট", score: "৭৫%", scoreColor: "text-primary", progress: 75, icon: "format_quote" },
      { name: "Vocabulary", chapter: "২", lessons: "১৫", time: "৩ ঘণ্টা", score: "৬০%", scoreColor: "text-secondary", progress: 60, icon: "library_books" },
      { name: "Reading Comprehension", chapter: "৩", lessons: "৬", time: "১ ঘণ্টা", score: "--", scoreColor: "text-on-surface-variant", progress: 20, icon: "chrome_reader_mode" },
    ],
  },
];

export default function SubjectsPage() {
  const [activeSubject, setActiveSubject] = useState(subjects[0]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Subject Tabs */}
      <div className="flex gap-2 md:gap-3 mb-6 overflow-x-auto pb-2">
        {subjects.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSubject(s)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all shrink-0 ${
              activeSubject.id === s.id
                ? "bg-primary text-on-primary shadow-md"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              {s.icon}
            </span>
            {s.name}
          </button>
        ))}
      </div>

      {/* Subject Hero Card */}
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${activeSubject.color} p-6 md:p-8 mb-6 md:mb-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8`}
      >
        <div className="relative z-10 space-y-3 md:space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low/50 backdrop-blur-md rounded-full text-sm font-medium">
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>school</span>
            <span>চতুর্থ শ্রেণী</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-headline tracking-tighter">
            {activeSubject.name} ({activeSubject.subtitle})
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2">
            <div className="flex items-center gap-2 bg-surface-container/30 px-3 md:px-4 py-2 rounded-2xl text-sm">
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>schedule</span>
              <span className="font-label">মোট সময়: ১৮ ঘণ্টা</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container/30 px-3 md:px-4 py-2 rounded-2xl text-sm">
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>verified</span>
              <span className="font-label">সম্পূর্ণ: {activeSubject.pct}%</span>
            </div>
            <Link
              href="/learn"
              className="flex items-center gap-2 bg-surface-container-lowest text-primary px-4 py-2 rounded-2xl text-sm font-bold hover:bg-white/90 transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>play_arrow</span>
              <span className="font-label">পাঠ শুরু করুন</span>
            </Link>
          </div>
        </div>
        <div className="relative w-36 h-36 md:w-56 md:h-56 flex items-center justify-center shrink-0">
          <div className="text-6xl md:text-8xl font-black text-white/10 select-none absolute">
            {activeSubject.abstract}
          </div>
          <div className="w-28 h-28 md:w-40 md:h-40 border-4 border-white/20 rounded-full flex items-center justify-center">
            <div className="text-3xl md:text-4xl font-bold font-headline">
              {activeSubject.pct}%
            </div>
          </div>
        </div>
      </div>

      {/* Chapters + Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
        {/* Chapters List */}
        <div className="lg:col-span-8 space-y-5 md:space-y-6">
          <div className="bg-surface-container-lowest rounded-3xl p-5 md:p-6 shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-extrabold text-primary font-headline tracking-tight">
                অধ্যায়ভিত্তিক অগ্রগতি
              </h2>
              <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                ফিল্টার{" "}
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                  filter_list
                </span>
              </button>
            </div>
            <div className="space-y-3 md:space-y-4">
              {activeSubject.chapters.map((ch) => (
                <div
                  key={ch.name}
                  className="group p-4 md:p-5 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4">
                    <div className="flex gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                        <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>
                          {ch.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-on-surface font-body">
                          {ch.name}
                        </h3>
                        <p className="text-xs text-on-surface-variant font-label">
                          অধ্যায় {ch.chapter} • {ch.lessons}টি পাঠ
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="hidden sm:block space-y-0.5">
                        <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-label font-bold">
                          সময়
                        </p>
                        <p className="text-sm font-bold text-on-surface font-body">
                          {ch.time}
                        </p>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-label font-bold">
                          স্কোর
                        </p>
                        <p className={`text-sm font-black font-headline ${ch.scoreColor}`}>
                          {ch.score}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${ch.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Skills + CTA */}
        <div className="lg:col-span-4 space-y-5 md:space-y-6">
          <div className="bg-surface-container-high rounded-3xl p-5 md:p-6 border border-outline-variant/10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 md:mb-6 font-label">
              সামগ্রিক দক্ষতা
            </h3>
            <div className="space-y-4">
              {[
                { skill: "যৌক্তিক চিন্তা", val: 80, color: "bg-primary" },
                { skill: "হিসাব করার গতি", val: 60, color: "bg-secondary" },
                { skill: "সঠিকতা", val: 90, color: "bg-primary" },
              ].map((s) => (
                <div key={s.skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-bold font-body">{s.skill}</span>
                    <span className="text-xs font-label text-on-surface-variant">
                      {s.val}/১০০
                    </span>
                  </div>
                  <div className="h-2 bg-surface-container-lowest rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${s.color}`}
                      style={{ width: `${s.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-tertiary-container text-on-tertiary-container rounded-3xl p-5 md:p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-tertiary-fixed rounded-full flex items-center justify-center text-on-tertiary-fixed">
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: "20px" }}>
                  bolt
                </span>
              </div>
              <h3 className="font-bold font-headline leading-tight">পরবর্তী চ্যালেঞ্জ</h3>
            </div>
            <p className="text-sm font-body mb-5 opacity-90">
              স্কোর বাড়ানোর জন্য ৩টি বিশেষ কুইজ বাকি আছে। এগুলো সম্পন্ন করলে
              লেভেল ১৩-এ পৌঁছাবে!
            </p>
            <button className="w-full py-3.5 bg-tertiary text-on-tertiary font-black font-label text-xs uppercase tracking-widest rounded-2xl shadow-md hover:opacity-90 transition-opacity active:scale-95">
              শুরু করো
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
