'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const glossaryTerms = [
  { term: 'লব (Numerator)', def: 'ভগ্নাংশের উপরের অংশ যা নির্দেশ করে কয়টি ভাগ নেওয়া হয়েছে।' },
  { term: 'হর (Denominator)', def: 'ভগ্নাংশের নিচের অংশ যা নির্দেশ করে মোট কয়টি সমান ভাগ করা হয়েছে।' },
  { term: 'গসাগু (HCF)', def: 'গরিষ্ঠ সাধারণ গুণনীয়ক — বৃহত্তম সংখ্যা যা দ্বারা প্রদত্ত সংখ্যাগুলো বিভাজ্য।' },
  { term: 'লসাগু (LCM)', def: 'লঘিষ্ঠ সাধারণ গুণিতক — ক্ষুদ্রতম সংখ্যা যা প্রদত্ত সংখ্যাগুলো দ্বারা বিভাজ্য।' },
];

const waveHeights = [12, 20, 32, 24, 16, 28, 12, 20, 8, 24, 16, 12, 20, 28];

export default function TextbookReaderPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(16);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p >= 100 ? 100 : p + 0.1));
      }, 200);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying]);

  const currentTime = Math.floor((progress / 100) * 15 * 60);
  const mins = Math.floor(currentTime / 60).toString().padStart(2, '0');
  const secs = (currentTime % 60).toString().padStart(2, '0');

  return (
    <div className="flex flex-1 relative">
      {/* Main Content */}
      <div className="flex-1 bg-surface min-h-screen p-6 md:p-12 xl:mr-80">
        {/* Content Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-2 text-tertiary mb-4">
            <span className="material-symbols-outlined">school</span>
            <span className="font-label text-sm font-bold uppercase tracking-widest">অধ্যায় ৫: গণিত</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-headline text-primary mb-6 leading-tight">
            ভগ্নাংশের খেলা: গসাগু ও লসাগু
          </h1>

          {/* Voice Narration Controller */}
          <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-2xl shadow-sm border-b-2 border-primary/10">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined fill-icon">{isPlaying ? 'pause' : 'play_arrow'}</span>
            </button>
            <div className="flex-1">
              <div className="flex items-end gap-1 h-8">
                {waveHeights.map((h, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-full bg-primary-fixed-dim"
                    style={{
                      height: isPlaying ? undefined : `${h}px`,
                      animation: isPlaying ? `waveform ${0.8 + i * 0.1}s ease-in-out infinite` : undefined,
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-1 w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <span className="font-label text-xs font-semibold text-outline whitespace-nowrap">
              {mins}:{secs} / 15:00
            </span>
          </div>
        </div>

        {/* Learning Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Concept Intro */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <h2 className="text-2xl font-bold text-primary-container mb-4">ভগ্নাংশের প্রাথমিক ধারণা</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-6">
                আমরা জানি, একটি বস্তুকে কয়েকটি সমান ভাগে ভাগ করে তার কয়েক অংশ নেওয়া হলে তা একটি ভগ্নাংশ। মনে করো
                একটি আয়তাকার কাগজকে সমান ৩ ভাগে ভাগ করে ২ ভাগ রং করলে সেটি হয়{' '}
                <span className="font-bold text-primary">২/৩</span>।
              </p>
              <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-tertiary">
                <p className="text-lg italic font-medium text-tertiary">
                  "গণিতে ভগ্নাংশ হলো কোনো একটি অখণ্ড জিনিসের অংশ নির্দেশকারী সংখ্যা।"
                </p>
              </div>
            </div>
            <div className="md:col-span-5 bg-surface-container-lowest p-2 rounded-2xl shadow-sm rotate-2">
              <div className="w-full rounded-xl bg-surface-container-low aspect-square flex items-center justify-center p-8">
                <div className="grid grid-cols-3 gap-2 w-full">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg ${i < 2 ? 'bg-primary' : 'bg-primary-fixed'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Card */}
          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline-variant/10">
            <h3 className="text-3xl font-extrabold text-primary mb-8 font-headline">গসাগু নির্ণয়ের কৌশল</h3>
            <div className="space-y-6 text-lg text-on-surface-variant">
              <p>ভগ্নাংশের গসাগু নির্ণয় করার জন্য আমাদের প্রথমে একটি বিশেষ সূত্র মনে রাখতে হবে:</p>
              <div className="my-8 flex justify-center">
                <div className="bg-primary-container text-on-primary-container px-10 py-8 rounded-2xl text-2xl font-bold text-center shadow-lg">
                  ভগ্নাংশের গসাগু =
                  <div className="border-t-2 border-on-primary-container mt-2 pt-2">
                    লবগুলোর গসাগু / হরগুলোর লসাগু
                  </div>
                </div>
              </div>
              <p>
                উদাহরণস্বরূপ, ১/২ এবং ১/৩ এর গসাগু হবে লব ১ ও ১ এর গসাগু এবং হর ২ ও ৩ এর লসাগু এর অনুপাত।
              </p>
            </div>
          </section>

          {/* Interactive Tasks */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-8 rounded-[1.5rem] border-b-4 border-tertiary">
              <div className="flex items-center gap-3 mb-4 text-tertiary">
                <span className="material-symbols-outlined">edit_note</span>
                <h4 className="text-xl font-bold">নিজেই চেষ্টা করো</h4>
              </div>
              <p className="text-lg mb-6">নিচের ভগ্নাংশ দুটির গসাগু কত হবে তা খাতায় লিখে যাচাই করো:</p>
              <div className="text-3xl font-black text-center text-primary tracking-widest bg-white/70 py-4 rounded-xl">
                ৩/৪ , ৫/৬
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-[1.5rem] border-b-4 border-secondary">
              <div className="flex items-center gap-3 mb-4 text-secondary">
                <span className="material-symbols-outlined">lightbulb</span>
                <h4 className="text-xl font-bold">মনে রেখো</h4>
              </div>
              <p className="text-lg">
                লবগুলোর সাধারণ গুণনীয়ক খুঁজে বের করা হলো গসাগু নির্ণয়ের প্রথম ধাপ। লসাগু হলো ক্ষুদ্রতম সাধারণ
                গুণিতক।
              </p>
            </div>
          </section>

          {/* Next Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/learn/lesson"
              className="flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-surface-container-high text-on-surface-variant rounded-xl font-bold hover:bg-surface-container-highest transition-all"
            >
              <span className="material-symbols-outlined">animation</span>
              অ্যানিমেটেড পাঠ দেখুন
            </Link>
            <Link
              href="/learn/quiz/start"
              className="flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-secondary-container text-white rounded-xl font-bold shadow-lg shadow-secondary/20 hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined">quiz</span>
              কুইজ শুরু করুন
            </Link>
          </div>
        </div>
      </div>

      {/* Glossary Sidebar */}
      <aside className="hidden xl:block w-80 bg-surface-container-low fixed right-0 top-[64px] h-[calc(100vh-64px)] overflow-y-auto p-8">
        <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined">book</span>
          গুরুত্বপূর্ণ শব্দাবলী
        </h3>
        <div className="space-y-6">
          {glossaryTerms.map((item, i) => (
            <div key={i} className="group cursor-help">
              <h4 className="font-bold text-primary-container border-b border-outline-variant pb-1 mb-2 group-hover:text-secondary transition-colors">
                {item.term}
              </h4>
              <p className="text-sm text-on-surface-variant">{item.def}</p>
            </div>
          ))}
        </div>

        {/* XP Badge */}
        <div className="mt-12 p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-primary/5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined fill-icon">stars</span>
            </div>
            <div>
              <p className="text-xs font-bold text-outline uppercase tracking-tighter">অর্জিত অভিজ্ঞতা</p>
              <p className="text-xl font-black text-on-surface">+২৫০ XP</p>
            </div>
          </div>
          <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[65%] transition-all duration-1000" />
          </div>
        </div>
      </aside>

      {/* Quiz FAB */}
      <Link
        href="/learn/quiz/start"
        className="fixed bottom-24 md:bottom-8 right-8 flex items-center gap-3 px-6 py-4 bg-secondary-container text-white rounded-full shadow-[0_8px_30px_rgb(186,10,6,0.3)] hover:scale-105 active:scale-95 transition-all z-50"
      >
        <span className="material-symbols-outlined">quiz</span>
        <span className="font-bold">কুইজ শুরু করুন</span>
      </Link>
    </div>
  );
}
