'use client';

import Link from 'next/link';

export default function QuizStartPage() {
  return (
    <div className="bg-surface-dim min-h-screen flex flex-col">
      {/* Side Nav */}
      <div className="md:hidden" />

      <section className="flex-1 p-4 md:p-12 max-w-5xl mx-auto w-full">
        {/* Browser Frame Container */}
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl border border-outline-variant/10">
          {/* Address Bar */}
          <div className="bg-surface-container-high px-6 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-surface-container-lowest rounded-lg px-4 py-1.5 text-xs font-label text-on-surface-variant/60 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">lock</span>
              banglaquest / পাঠ / অধ্যায়_৩ / কুইজ
            </div>
          </div>

          {/* Quiz Details */}
          <div className="p-8 md:p-14 flex flex-col gap-10">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center bg-secondary-container/10 text-secondary px-4 py-1.5 rounded-full border border-secondary/20">
                <span className="material-symbols-outlined fill-icon text-lg mr-2">bolt</span>
                <span className="text-xs font-bold font-label tracking-widest uppercase">Ready to Challenge?</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black font-headline text-primary tracking-tight">
                অধ্যায় ৩ কুইজ
              </h2>
              <p className="text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                এই কুইজটি আপনার শব্দ গঠন এবং ব্যাকরণ জ্ঞান যাচাই করার জন্য তৈরি করা হয়েছে। সর্বোচ্চ অর্জনের জন্য
                প্রস্তুত হোন!
              </p>
            </div>

            {/* Stats Bento */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'quiz', label: 'মোট প্রশ্ন', value: '১৫ টি', color: 'text-primary', bg: 'bg-primary-container/20' },
                { icon: 'timer', label: 'নির্ধারিত সময়', value: '৮ মিনিট', color: 'text-secondary', bg: 'bg-secondary-container/10' },
                { icon: 'grade', label: 'কঠিনত্ব', value: null, color: 'text-tertiary', bg: 'bg-tertiary-container/10', stars: true },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-surface-container-low p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:scale-[1.02] transition-transform"
                >
                  <div className={`w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined fill-icon text-3xl ${stat.color}`}>{stat.icon}</span>
                  </div>
                  {stat.value && (
                    <span className={`text-3xl font-black font-headline ${stat.color}`}>{stat.value}</span>
                  )}
                  {stat.stars && (
                    <div className="flex gap-1 mb-1">
                      <span className="material-symbols-outlined fill-icon text-tertiary text-xl">star</span>
                      <span className="material-symbols-outlined fill-icon text-tertiary text-xl">star</span>
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl">star</span>
                    </div>
                  )}
                  <span className="text-sm font-semibold text-on-surface-variant font-label mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Reward Preview */}
            <div className="relative overflow-hidden bg-primary p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-50 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10 space-y-2">
                <h3 className="text-2xl font-bold font-headline text-white">সাফল্যের পুরস্কার</h3>
                <p className="text-primary-fixed-dim font-medium">কুইজটি শেষ করলে আপনি যা পাবেন:</p>
              </div>
              <div className="relative z-10 flex gap-4">
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 flex flex-col items-center gap-1">
                  <span className="text-3xl font-black text-white font-headline tracking-tighter">+৫০ XP</span>
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest font-label">
                    Experience Points
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined fill-icon text-tertiary-fixed-dim text-3xl">military_tech</span>
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest font-label">
                    Badge Earned
                  </span>
                </div>
              </div>
            </div>

            {/* Start Button */}
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/learn/quiz/mcq"
                className="group relative w-full md:w-auto min-w-[280px] py-5 px-12 bg-gradient-to-r from-primary to-primary-container text-white rounded-full text-2xl font-extrabold font-headline shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                কুইজ শুরু করুন
                <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">
                  arrow_forward_ios
                </span>
              </Link>
              <p className="text-sm font-medium text-on-surface-variant opacity-60">
                আপনি কি প্রস্তুত? আপনার উত্তর সংরক্ষণ করা হবে।
              </p>
            </div>
          </div>
        </div>

        {/* Rules Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/10 space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined">info</span>
              <h4 className="font-bold font-headline text-lg">নিয়মাবলী</h4>
            </div>
            <ul className="space-y-3 text-on-surface-variant text-sm font-medium leading-relaxed">
              <li className="flex gap-2">
                <span className="text-secondary">•</span> প্রতিটি প্রশ্নের জন্য চারটি বিকল্প থাকবে।
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">•</span> ভুল উত্তরের জন্য কোনো নম্বর কাটা হবে না।
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">•</span> সময় শেষ হয়ে গেলে কুইজ স্বয়ংক্রিয়ভাবে জমা হবে।
              </li>
            </ul>
          </div>
          <div className="bg-emerald-100/50 p-1 rounded-xl">
            <div className="bg-white p-6 rounded-lg h-full border-2 border-dashed border-emerald-200 flex flex-col justify-center">
              <p className="italic text-primary/80 font-medium leading-relaxed mb-4">
                "সাফল্য কোনো গন্তব্য নয়, এটি একটি যাত্রা। ভাষা শেখা হচ্ছে সংস্কৃতির হৃদপিণ্ড স্পর্শ করা।"
              </p>
              <span className="text-xs font-bold text-primary tracking-widest uppercase opacity-60">
                — বাংলাকুয়েস্ট টিপস
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
