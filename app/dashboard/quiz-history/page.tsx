"use client";

import { useState } from "react";

const quizzes = [
  {
    id: 1,
    date: "১২ অক্টোবর, ২০২৪",
    time: "১০:৩০ AM",
    chapter: "ভাষা আন্দোলন",
    sub: "চতুর্থ অধ্যায়",
    score: 8,
    total: 10,
    xp: "+১২০ XP",
    xpBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    pct: 80,
    duration: "০৮:৪৫ মিনিট",
  },
  {
    id: 2,
    date: "১০ অক্টোবর, ২০২৪",
    time: "০৪:১৫ PM",
    chapter: "বাংলার প্রকৃতি",
    sub: "তৃতীয় অধ্যায়",
    score: 10,
    total: 10,
    xp: "+১৫০ XP",
    xpBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    pct: 100,
    duration: "০৬:২০ মিনিট",
  },
  {
    id: 3,
    date: "০৮ অক্টোবর, ২০২৪",
    time: "০৯:০০ AM",
    chapter: "বর্ণমালার গল্প",
    sub: "প্রথম অধ্যায়",
    score: 4,
    total: 10,
    xp: "+৩০ XP",
    xpBg: "bg-surface-container-high text-outline",
    pct: 40,
    duration: "১২:৫০ মিনিট",
  },
  {
    id: 4,
    date: "০৫ অক্টোবর, ২০২৪",
    time: "১১:৩০ AM",
    chapter: "যুক্তবর্ণ শিক্ষা",
    sub: "দ্বিতীয় অধ্যায়",
    score: 7,
    total: 10,
    xp: "+৯০ XP",
    xpBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    pct: 70,
    duration: "০৯:১৫ মিনিট",
  },
];

const latestQuizQs = [
  { correct: true, q: "ভাষা আন্দোলন কত সালে হয়েছিল?", ans: "সঠিক উত্তর: ১৯৫২" },
  { correct: false, q: "কেন্দ্রীয় শহীদ মিনারের স্থপতি কে?", ans: "আপনার উত্তর: জয়নুল আবেদিন" },
  { correct: true, q: "২১শে ফেব্রুয়ারিকে আন্তর্জাতিক মাতৃভাষা দিবস ঘোষণা করে কোন সংস্থা?", ans: "সঠিক উত্তর: ইউনেস্কো" },
  { correct: true, q: "সালাম, বরকত, রফিক নামগুলো কিসের সাথে যুক্ত?", ans: "সঠিক উত্তর: ভাষা শহীদ" },
];

export default function QuizHistoryPage() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-fixed/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-tertiary-fixed-dim/10 blur-[80px] rounded-full" />
      </div>

      {/* Header */}
      <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-headline text-primary tracking-tight mb-2">
            কুইজ ইতিহাস
          </h1>
          <p className="text-on-surface-variant max-w-lg text-sm md:text-base">
            আপনার সন্তানের সাম্প্রতিক কুইজের ফলাফল এবং অগ্রগতির বিস্তারিত তথ্য এখানে দেখুন।
          </p>
        </div>
        <div className="bg-surface-container-low px-4 py-3 rounded-xl flex items-center gap-3 border-b-2 border-primary self-start md:self-auto">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>
            calendar_today
          </span>
          <div>
            <p className="text-[10px] uppercase font-bold text-outline tracking-wider">ফিল্টার</p>
            <p className="text-sm font-semibold">গত ৩০ দিন</p>
          </div>
        </div>
      </div>

      {/* Latest Quiz Expanded */}
      <section className="mb-10 md:mb-12">
        <div className="bg-surface-container-low rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
          {/* Left: Score side */}
          <div className="lg:w-1/3 bg-primary p-6 md:p-8 text-on-primary">
            <div className="flex justify-between items-start mb-6 md:mb-8">
              <span className="bg-surface-container-low/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                সর্বশেষ কুইজ
              </span>
              <span className="material-symbols-outlined opacity-50" style={{ fontSize: "20px" }}>
                auto_awesome
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold font-headline mb-1">বাংলার বীরগাথা</h2>
            <p className="text-primary-fixed-dim text-sm mb-5 md:mb-6">অধ্যায় ৪: ভাষা আন্দোলন</p>
            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="50%" cy="50%" r="40%" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="8%" />
                  <circle cx="50%" cy="50%" r="40%" fill="transparent" stroke="#9df888" strokeWidth="8%"
                    strokeDasharray="251.2" strokeDashoffset="50.24" strokeLinecap="round" />
                </svg>
                <span className="text-xl md:text-2xl font-black font-headline">৮০%</span>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-tertiary-fixed">+১২০ XP</p>
                <p className="text-xs opacity-70">অর্জিত এক্সপি</p>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-white/10">
              <div className="flex justify-between text-sm">
                <span className="opacity-70">তারিখ</span>
                <span className="font-bold">১২ অক্টোবর, ২০২৪</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-70">সময় লেগেছে</span>
                <span className="font-bold">০৮:৪৫ মিনিট</span>
              </div>
            </div>
          </div>
          {/* Right: Question breakdown */}
          <div className="lg:w-2/3 p-6 md:p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-outline mb-4 md:mb-6">
              প্রশ্নোত্তর বিশ্লেষণ
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {latestQuizQs.map((q, i) => (
                <div
                  key={i}
                  className={`p-3 md:p-4 bg-surface-container rounded-2xl flex gap-3 md:gap-4 border-l-4 ${q.correct ? "border-outline-variant/200" : "border-secondary"}`}
                >
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 ${q.correct ? "bg-primary-fixed/30 text-primary" : "bg-secondary/20 text-secondary"}`}>
                    <span className="material-symbols-outlined fill-icon" style={{ fontSize: "16px" }}>
                      {q.correct ? "check" : "close"}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold mb-1">{q.q}</p>
                    <p className={`text-xs ${q.correct ? "text-on-surface-variant" : "text-secondary font-medium"}`}>
                      {q.ans}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 md:mt-8 w-full py-3 bg-surface-container-high rounded-xl text-primary font-bold text-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
              সকল ১০টি প্রশ্ন দেখুন
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quiz History Table */}
      <section className="bg-surface-container-low rounded-3xl shadow-sm overflow-hidden">
        <div className="px-5 md:px-8 py-5 md:py-6 border-b border-surface-container-low flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold font-headline text-on-surface">
            সাম্প্রতিক কুইজ তালিকা
          </h3>
          <div className="flex items-center gap-2 text-xs font-bold text-outline bg-surface-container-low px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary-fixed-dim" />
            ১২টি কুইজ সম্পন্ন
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-5 md:px-8 py-4 text-[11px] font-black uppercase tracking-widest text-outline">তারিখ</th>
                <th className="px-4 md:px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">অধ্যায়</th>
                <th className="px-4 md:px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">প্রাপ্ত নম্বর</th>
                <th className="px-4 md:px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">অর্জিত XP</th>
                <th className="px-5 md:px-8 py-4 text-[11px] font-black uppercase tracking-widest text-outline text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {quizzes.map((q) => (
                <tr key={q.id} className="hover:bg-surface-container-high/30 transition-colors">
                  <td className="px-5 md:px-8 py-4 md:py-5">
                    <p className="text-sm font-semibold">{q.date}</p>
                    <p className="text-[10px] text-outline font-label">{q.time}</p>
                  </td>
                  <td className="px-4 md:px-6 py-4 md:py-5">
                    <p className="text-sm font-bold text-on-surface">{q.chapter}</p>
                    <p className="text-[10px] text-outline">{q.sub}</p>
                  </td>
                  <td className="px-4 md:px-6 py-4 md:py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-20 md:w-24 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${q.pct >= 70 ? "bg-primary" : "bg-secondary"}`}
                          style={{ width: `${q.pct}%` }}
                        />
                      </div>
                      <span className={`text-sm font-bold ${q.pct < 70 ? "text-secondary" : ""}`}>
                        {String(q.score).padStart(2, "০")}/{q.total}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4 md:py-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-black ${q.xpBg}`}>
                      {q.xp}
                    </span>
                  </td>
                  <td className="px-5 md:px-8 py-4 md:py-5 text-right">
                    <button
                      onClick={() => setExpanded(expanded === q.id ? null : q.id)}
                      className="text-xs font-bold text-primary px-3 md:px-4 py-2 bg-primary-fixed/20 rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                      বিস্তারিত
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-5 md:p-6 bg-surface-container-low/30 border-t border-surface-container-low flex justify-center">
          <button className="text-sm font-bold text-outline hover:text-primary transition-colors flex items-center gap-2">
            আরো কুইজ দেখুন
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>expand_more</span>
          </button>
        </div>
      </section>
    </div>
  );
}
