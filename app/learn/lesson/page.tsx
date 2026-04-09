'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AnimatedLessonPage() {
  const [isNarrating, setIsNarrating] = useState(true);

  return (
    <div className="bg-surface-dim min-h-screen p-4 md:p-8">
      {/* Browser Frame */}
      <div className="max-w-5xl mx-auto bg-surface-container-lowest shadow-2xl rounded-xl overflow-hidden flex flex-col">
        {/* Address Bar */}
        <div className="bg-surface-container-high px-6 py-3 flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-error/40" />
            <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim/40" />
            <div className="w-3 h-3 rounded-full bg-primary-fixed-dim/40" />
          </div>
          <div className="flex-1 bg-surface-container-lowest rounded-lg px-4 py-1.5 flex items-center gap-2 text-on-surface-variant/60 text-sm font-label">
            <span className="material-symbols-outlined text-sm">lock</span>
            banglaquest / পাঠ / অধ্যায়-৩ / অ্যানিমেটেড
          </div>
        </div>

        {/* Progress Header */}
        <div className="bg-primary px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-white font-headline font-bold text-xl">BanglaQuest</span>
            <div className="h-6 w-px bg-white/20" />
            <span className="text-primary-fixed font-medium">অধ্যায় ৩/১২</span>
          </div>
          <div className="flex-1 max-w-md mx-8">
            <div className="h-2 w-full bg-primary-container rounded-full overflow-hidden">
              <div className="h-full bg-primary-fixed w-1/4 transition-all duration-1000" />
            </div>
          </div>
          <button
            onClick={() => setIsNarrating(!isNarrating)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold border transition-all ${
              isNarrating
                ? 'bg-primary-container text-primary-fixed border-primary-fixed-dim/20'
                : 'bg-primary-container/30 text-primary-fixed/70 border-transparent'
            }`}
          >
            <span className="material-symbols-outlined fill-icon text-sm">auto_stories</span>
            {isNarrating ? 'রিডিং মোড অন' : 'রিডিং মোড অফ'}
          </button>
        </div>

        {/* Main Area */}
        <div className="flex overflow-hidden">
          {/* Side Nav */}
          <aside className="hidden md:flex w-56 bg-surface-container-low flex-col py-6 gap-2">
            <div className="px-6 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed">menu_book</span>
              </div>
              <div>
                <p className="text-sm font-bold text-primary font-headline">শ্রেণী ৭</p>
                <p className="text-[10px] text-outline uppercase tracking-widest font-label">গণিত পাঠ্যবই</p>
              </div>
            </div>
            {[
              { icon: 'home', label: 'হোম', href: '/learn' },
              { icon: 'menu_book', label: 'পাঠসমূহ', active: true },
              { icon: 'dictionary', label: 'শব্দকোষ' },
              { icon: 'military_tech', label: 'অর্জনসমূহ' },
              { icon: 'settings', label: 'সেটিংস' },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 py-3 cursor-pointer transition-all ${
                  item.active
                    ? 'text-primary font-bold border-l-4 border-secondary pl-4 bg-primary-fixed-dim/10'
                    : 'text-slate-600 pl-5 hover:bg-slate-200/50'
                }`}
              >
                <span className={`material-symbols-outlined ${item.active ? 'fill-icon' : ''}`}>{item.icon}</span>
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            ))}
            <div className="px-4 mt-auto">
              <Link
                href="/learn/quiz/start"
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20 flex items-center justify-center"
              >
                নতুন পাঠ শুরু করুন
              </Link>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-surface-container-lowest relative">
            <div className="max-w-2xl mx-auto mb-10">
              <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold font-label tracking-wider uppercase mb-4 inline-block">
                অধ্যায় ৩: ভগ্নাংশের খেলা
              </span>
              <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-primary mb-6 leading-tight">
                সমতুল ভগ্নাংশের ধারণা ও প্রয়োগ
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                আমরা গত পাঠে দেখেছি কিভাবে একটি পূর্ণ বস্তুকে সমান ভাগে ভাগ করা যায়। আজকে আমরা শিখব কিভাবে একই
                পরিমাণের বিভিন্ন ভগ্নাংশ রূপ হতে পারে, যাকে আমরা বলি সমতুল ভগ্নাংশ।
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-3xl mx-auto">
              {/* Animated Fraction Bars */}
              <div className="md:col-span-8 bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/15">
                <h3 className="text-xl font-bold font-headline text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined fill-icon text-secondary">animation</span>
                  অ্যানিমেটেড ভগ্নাংশ তুলনা
                </h3>
                <div className="space-y-6 py-2">
                  {/* Bar 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold text-on-surface-variant">
                      <span>১/২ অংশ</span>
                      <span>৫০%</span>
                    </div>
                    <div className="h-12 w-full bg-surface-container-highest rounded-xl overflow-hidden flex">
                      <div
                        className="h-full bg-primary flex items-center justify-center text-white font-bold"
                        style={{ width: '50%', animation: 'fraction-slide 3s ease-in-out infinite alternate' }}
                      >
                        ১/২
                      </div>
                    </div>
                  </div>
                  {/* Bar 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold text-on-surface-variant">
                      <span>২/৪ অংশ (সমতুল)</span>
                      <span>৫০%</span>
                    </div>
                    <div className="h-12 w-full bg-surface-container-highest rounded-xl overflow-hidden flex">
                      <div
                        className="h-full bg-primary-container flex items-center justify-center text-primary-fixed font-bold border-r border-primary/20"
                        style={{ width: '25%', animation: 'fraction-slide 3s ease-in-out 0.2s infinite alternate' }}
                      >
                        ১/৪
                      </div>
                      <div
                        className="h-full bg-primary-container flex items-center justify-center text-primary-fixed font-bold"
                        style={{ width: '25%', animation: 'fraction-slide 3s ease-in-out 0.2s infinite alternate' }}
                      >
                        ১/৪
                      </div>
                    </div>
                  </div>
                  {/* Bar 3 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold text-on-surface-variant">
                      <span>৩/৬ অংশ (সমতুল)</span>
                      <span>৫০%</span>
                    </div>
                    <div className="h-12 w-full bg-surface-container-highest rounded-xl overflow-hidden flex">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-full bg-primary-fixed-dim flex items-center justify-center text-primary font-bold border-r border-primary/20 last:border-r-0"
                          style={{
                            width: '16.666%',
                            animation: `fraction-slide 3s ease-in-out ${i * 0.1}s infinite alternate`,
                          }}
                        >
                          ১/৬
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary-fixed-dim/20 rounded-xl">
                  <p className="text-sm font-medium text-primary leading-relaxed italic">
                    * লক্ষ্য করো, উপরের তিনটি চিত্রেই সমান জায়গা দখল করা হয়েছে, যদিও ভাগের সংখ্যা ভিন্ন।
                  </p>
                </div>
              </div>

              {/* Voice Narration Card */}
              <div className="md:col-span-4 bg-primary text-white rounded-3xl p-6 flex flex-col justify-between shadow-xl shadow-primary/20">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed">
                      {isNarrating ? 'spatial_audio' : 'spatial_audio_off'}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsNarrating(!isNarrating)}
                    className="text-[10px] font-label uppercase tracking-widest bg-white/20 px-2 py-1 rounded"
                  >
                    {isNarrating ? 'Narrating...' : 'Paused'}
                  </button>
                </div>
                <div className="my-6">
                  <p className="text-sm font-label text-primary-fixed-dim mb-2 uppercase tracking-tighter">
                    Current Passage
                  </p>
                  <p className="text-lg font-body leading-relaxed text-white">
                    "...একই পরিমাণের বিভিন্ন ভগ্নাংশ রূপ হতে পারে..."
                  </p>
                </div>

                {/* Waveform */}
                {isNarrating && (
                  <div className="flex items-end gap-1 h-10 mb-4">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-primary-fixed rounded-full animate-waveform"
                        style={{ animationDelay: `${i * 0.1}s`, minHeight: '4px' }}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-primary-fixed-dim cursor-pointer hover:text-white transition-colors">
                    fast_rewind
                  </span>
                  <button
                    onClick={() => setIsNarrating(!isNarrating)}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all"
                  >
                    <span className="material-symbols-outlined fill-icon">{isNarrating ? 'pause' : 'play_arrow'}</span>
                  </button>
                  <span className="material-symbols-outlined text-primary-fixed-dim cursor-pointer hover:text-white transition-colors">
                    fast_forward
                  </span>
                </div>
              </div>

              {/* Mini Challenge */}
              <div className="md:col-span-12 bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-outline-variant/20 shadow-sm">
                <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden bg-surface-container-low flex items-center justify-center relative">
                  <div className="text-center p-6">
                    <div className="text-6xl font-black text-primary font-headline">১/৩</div>
                    <div className="text-2xl font-black text-outline mt-2">=</div>
                    <div className="text-6xl font-black text-primary-container font-headline mt-2">?</div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h4 className="text-2xl font-bold font-headline text-primary">ছোট্ট একটি চ্যালেঞ্জ!</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    তুমি কি বলতে পারবে ১/৩ এর সমতুল্য একটি ভগ্নাংশ কি হবে? খাতার পাতায় এঁকে চেষ্টা করে দেখো।
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="/learn/quiz/start"
                      className="px-6 py-2 bg-primary-fixed-dim text-on-primary-fixed font-bold rounded-xl text-sm border-b-4 border-primary-container active:border-b-0 active:translate-y-1 transition-all"
                    >
                      কুইজ দিই
                    </Link>
                    <Link
                      href="/learn"
                      className="px-6 py-2 bg-surface-container-high text-on-surface-variant font-bold rounded-xl text-sm hover:bg-surface-variant transition-colors"
                    >
                      পাঠে ফিরি
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Toolbar */}
            <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 bg-surface-container-lowest/90 backdrop-blur-xl px-6 py-3 rounded-full shadow-2xl border border-outline-variant/10 flex items-center gap-4 z-50">
              <button className="flex flex-col items-center gap-0.5 text-primary group">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">text_fields</span>
                <span className="text-[10px] font-bold uppercase font-label">Font</span>
              </button>
              <div className="h-6 w-px bg-outline-variant/30" />
              <button className="flex flex-col items-center gap-0.5 text-secondary">
                <span className="material-symbols-outlined fill-icon">local_fire_department</span>
                <span className="text-[10px] font-bold uppercase font-label">Streak</span>
              </button>
              <div className="h-6 w-px bg-outline-variant/30" />
              <button className="flex flex-col items-center gap-0.5 text-on-surface-variant">
                <span className="material-symbols-outlined">bookmark</span>
                <span className="text-[10px] font-bold uppercase font-label">Save</span>
              </button>
              <div className="h-6 w-px bg-outline-variant/30" />
              <button
                onClick={() => setIsNarrating(!isNarrating)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full ${
                  isNarrating ? 'bg-primary-container text-primary-fixed' : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                <span className="material-symbols-outlined text-sm">headphones</span>
                <span className="text-xs font-bold font-label">{isNarrating ? 'Voice Active' : 'Voice Off'}</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
