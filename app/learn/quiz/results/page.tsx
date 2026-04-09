'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const badges = [
  { icon: 'military_tech', label: 'দ্রুত উত্তরদাতা', color: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-container/20', ring: 'ring-tertiary/10', locked: false },
  { icon: 'auto_awesome', label: 'ব্যাকরণ সম্রাট', color: 'text-primary', bg: 'bg-primary-container/20', ring: 'ring-primary/10', locked: false },
  { icon: 'workspace_premium', label: 'পরবর্তী লক্ষ্য', color: 'text-outline', bg: 'bg-surface-container-low', ring: 'ring-outline/10', locked: true },
];

const breakdown = [
  { icon: 'check_circle', label: 'সঠিক উত্তর', value: '১২', bg: 'bg-primary-fixed/30', color: 'text-primary', textColor: 'text-on-surface', labelColor: 'text-primary/80' },
  { icon: 'cancel', label: 'ভুল উত্তর', value: '০৩', bg: 'bg-red-100', color: 'text-red-600', textColor: 'text-red-800', labelColor: 'text-red-600/80' },
  { icon: 'timer', label: 'মোট সময়', value: '০৮:৪৫', bg: 'bg-blue-100', color: 'text-blue-600', textColor: 'text-blue-800', labelColor: 'text-blue-600/80' },
];

export default function QuizResultsPage() {
  const [xpVisible, setXpVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setXpVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-surface p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Score Celebration */}
        <section className="relative text-center py-12 bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle,_#82db6f_1px,_transparent_1px)] bg-[size:20px_20px]" />
          <div className="relative z-10 space-y-6">
            <div
              className={`inline-flex items-center justify-center p-1 rounded-full bg-primary-container/10 mb-4 transition-all duration-700 ${xpVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
            >
              <span className="material-symbols-outlined fill-icon text-6xl text-primary p-4 bg-primary-container/20 rounded-full">
                celebration
              </span>
            </div>
            <h1
              className={`text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-primary transition-all duration-700 delay-200 ${xpVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              চমৎকার!
            </h1>
            <p className="text-xl text-on-surface-variant font-medium">আপনি কুইজটি সফলভাবে সম্পন্ন করেছেন</p>

            {/* Score Display */}
            <div className="flex justify-center items-center gap-8 mt-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full border-8 border-primary flex items-center justify-center relative animate-pulse-glow">
                  <span className="text-3xl font-black font-headline text-primary">১২/১৫</span>
                  <div className="absolute -top-2 -right-2 bg-secondary-container text-white p-2 rounded-full shadow-lg">
                    <span className="material-symbols-outlined fill-icon text-lg">local_fire_department</span>
                  </div>
                </div>
                <span className="mt-4 font-bold text-on-surface-variant">মোট স্কোর</span>
              </div>
              <div className="hidden sm:block h-20 w-[2px] bg-outline-variant/30" />
              <div className="flex flex-col gap-3">
                <div
                  className={`flex items-center gap-4 bg-surface-container px-6 py-3 rounded-2xl transition-all duration-700 delay-300 ${xpVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                >
                  <span className="material-symbols-outlined fill-icon text-tertiary font-bold">add_circle</span>
                  <span className="text-xl font-bold font-label text-tertiary">+১৫০ XP</span>
                </div>
                <div
                  className={`flex items-center gap-4 bg-surface-container px-6 py-3 rounded-2xl transition-all duration-700 delay-500 ${xpVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                >
                  <span className="material-symbols-outlined fill-icon text-tertiary-fixed-dim font-bold">monetization_on</span>
                  <span className="text-xl font-bold font-label text-on-tertiary-fixed-variant">+৫০ কুইন</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Badges */}
          <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-[1.5rem] space-y-6 shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold font-headline text-on-surface">অর্জিত ব্যাজ</h3>
              <span className="text-sm font-bold bg-primary-container text-on-primary-container px-3 py-1 rounded-full">
                +২ নতুন
              </span>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center p-5 rounded-3xl cursor-default transition-colors ${
                    badge.locked
                      ? 'border-2 border-dashed border-outline-variant opacity-50'
                      : 'bg-surface-container-low hover:bg-surface-container'
                  }`}
                >
                  <div
                    className={`w-16 h-16 ${badge.bg} rounded-full flex items-center justify-center mb-3 ring-4 ${badge.ring}`}
                  >
                    <span className={`material-symbols-outlined fill-icon text-4xl ${badge.color}`}>
                      {badge.icon}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-center text-on-surface">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Streak Card */}
          <div className="md:col-span-4 bg-primary text-white p-8 rounded-[1.5rem] flex flex-col justify-between shadow-lg shadow-emerald-950/20 overflow-hidden relative">
            <div className="absolute -right-4 -top-4 opacity-20">
              <span className="material-symbols-outlined fill-icon text-[100px]">local_fire_department</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold font-headline mb-2">স্ট্রিক বুস্ট!</h3>
              <p className="text-primary-fixed-dim text-sm">আপনি টানা ১৫ দিন শিখছেন</p>
            </div>
            <div className="relative z-10 mt-8">
              <div className="text-6xl font-black font-headline mb-2">১৫</div>
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary-fixed w-[75%] rounded-full transition-all duration-1000" />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-widest text-white/70">
                পরবর্তী রিওয়ার্ড: ২০ দিন
              </p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="md:col-span-12 bg-surface-container-low p-8 rounded-[1.5rem] border border-outline-variant/10">
            <h3 className="text-2xl font-bold font-headline mb-6 text-on-surface">বিস্তারিত ফলাফল</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {breakdown.map((item, i) => (
                <div key={i} className="bg-surface-container-lowest p-5 rounded-2xl flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                    <span className="material-symbols-outlined fill-icon">{item.icon}</span>
                  </div>
                  <div>
                    <div className={`text-2xl font-black font-headline ${item.textColor}`}>{item.value}</div>
                    <div className={`text-xs font-bold uppercase ${item.labelColor}`}>{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-6">
          <Link
            href="/learn/quiz/start"
            className="w-full sm:w-auto px-10 py-5 bg-surface-container-high text-on-surface-variant rounded-full font-bold hover:bg-surface-container-highest transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            <span className="material-symbols-outlined">refresh</span>
            আবার চেষ্টা করুন
          </Link>
          <Link
            href="/learn/level-up"
            className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-full font-bold hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 active:scale-95 group"
          >
            পরবর্তী অধ্যায়
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward_ios
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
