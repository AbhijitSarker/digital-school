'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const confettiPieces = [
  { left: '15%', top: '10%', color: 'bg-tertiary-fixed', rotate: 'rotate-45', delay: '0s', w: 'w-3', h: 'h-8' },
  { left: '80%', top: '20%', color: 'bg-secondary-fixed', rotate: '-rotate-12', delay: '0.3s', w: 'w-3', h: 'h-8' },
  { left: '5%', top: '70%', color: 'bg-primary-fixed', rotate: 'rotate-0', delay: '0.6s', w: 'w-6', h: 'h-6' },
  { left: '90%', top: '60%', color: 'bg-tertiary-fixed-dim', rotate: 'rotate-[60deg]', delay: '0.2s', w: 'w-4', h: 'h-10' },
  { left: '40%', top: '40%', color: 'bg-white', rotate: 'rotate-45', delay: '0.8s', w: 'w-2', h: 'h-10' },
  { left: '60%', top: '15%', color: 'bg-primary-fixed-dim', rotate: '-rotate-20', delay: '0.4s', w: 'w-3', h: 'h-6' },
  { left: '25%', top: '85%', color: 'bg-secondary-fixed-dim', rotate: 'rotate-[30deg]', delay: '1s', w: 'w-5', h: 'h-5' },
];

export default function LevelUpPage() {
  const [visible, setVisible] = useState(false);
  const [shareClicked, setShareClicked] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary via-primary-container to-emerald-950 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-tertiary-fixed-dim blur-sm" />
        <div className="absolute top-1/3 right-20 w-8 h-8 rounded-full bg-tertiary blur-xs" />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-primary-fixed-dim blur-md" />
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confettiPieces.map((piece, i) => (
          <div
            key={i}
            className={`absolute ${piece.color} ${piece.rotate} ${piece.w} ${piece.h} rounded opacity-60`}
            style={{
              left: piece.left,
              top: piece.top,
              animation: `confetti-fall 3s linear ${piece.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Core Container */}
      <div
        className={`relative z-10 w-full max-w-xl flex flex-col items-center text-center transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      >
        {/* Achievement Badge */}
        <div className="mb-10 relative group">
          <div className="absolute inset-0 bg-tertiary-fixed-dim rounded-3xl blur-3xl opacity-30 animate-pulse-glow" />
          <div className="relative bg-surface-container-lowest p-8 rounded-3xl shadow-2xl border-b-8 border-tertiary-container transform -rotate-3 animate-float">
            <div className="w-40 h-40 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined fill-icon text-[120px] text-tertiary-fixed-dim">
                workspace_premium
              </span>
            </div>
            <div className="absolute -top-4 -right-4 bg-secondary-container text-white p-3 rounded-2xl shadow-lg flex items-center gap-2">
              <span className="material-symbols-outlined fill-icon">local_fire_department</span>
              <span className="font-headline font-bold text-lg">৭ দিন!</span>
            </div>
          </div>
        </div>

        {/* Big Message */}
        <h1 className="font-headline text-7xl md:text-8xl font-black text-white mb-4 tracking-tighter drop-shadow-lg text-glow">
          লেভেল আপ!
        </h1>
        <p className="font-body text-xl md:text-2xl text-primary-fixed-dim font-medium mb-10 tracking-wide">
          আপনি এখন লেভেল ১২-তে উন্নীত হয়েছেন
        </p>

        {/* Metrics Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10">
          <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 flex items-center justify-between overflow-hidden">
            <div className="text-left">
              <p className="font-label text-xs uppercase tracking-[0.2em] text-primary-fixed-dim mb-1">মোট অর্জিত</p>
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-4xl font-extrabold text-white">২৫৫০</span>
                <span className="font-body text-lg text-primary-fixed-dim">XP</span>
              </div>
            </div>
            <span className="material-symbols-outlined fill-icon text-tertiary-fixed-dim text-5xl">monetization_on</span>
          </div>
          <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 flex items-center justify-between">
            <div className="text-left">
              <p className="font-label text-xs uppercase tracking-[0.2em] text-primary-fixed-dim mb-1">ধারাবাহিকতা</p>
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-4xl font-extrabold text-white">০৭</span>
                <span className="font-body text-lg text-primary-fixed-dim">দিন</span>
              </div>
            </div>
            <span className="material-symbols-outlined fill-icon text-secondary-container text-5xl">
              local_fire_department
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={() => setShareClicked(true)}
            className={`flex items-center justify-center gap-3 px-10 py-5 rounded-3xl font-headline font-extrabold text-lg tracking-wide shadow-xl active:scale-95 transition-all ${
              shareClicked
                ? 'bg-primary-fixed text-on-primary-fixed'
                : 'bg-gradient-to-r from-primary-fixed-dim to-primary-fixed text-on-primary-fixed'
            }`}
          >
            <span className="material-symbols-outlined">{shareClicked ? 'check' : 'share'}</span>
            {shareClicked ? 'শেয়ার করা হয়েছে!' : 'আমি আজ ১৫০ XP অর্জন করেছি!'}
          </button>
          <Link
            href="/learn/daily-challenge"
            className="text-primary-fixed-dim font-body font-semibold px-8 py-3 rounded-2xl hover:bg-white/5 transition-colors text-center"
          >
            ডেইলি চ্যালেঞ্জে যান →
          </Link>
        </div>
      </div>
    </div>
  );
}
