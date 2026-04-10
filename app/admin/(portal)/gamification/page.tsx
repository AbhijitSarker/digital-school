'use client';

import { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';

const badges = [
  { id: 'B001', name: 'প্রথম পদক্ষেপ', icon: 'stars', color: 'bg-tertiary-fixed text-on-tertiary-fixed', condition: 'প্রথম পাঠ সম্পন্ন', awarded: '১২,৪৫০', active: true },
  { id: 'B002', name: 'কুইজ মাস্টার', icon: 'military_tech', color: 'bg-primary-fixed text-on-primary-fixed', condition: '১০টি কুইজে ৯০%+', awarded: '৩,৮৮০', active: true },
  { id: 'B003', name: 'অগ্নি ধারাবাহিকতা', icon: 'local_fire_department', color: 'bg-secondary-fixed text-on-secondary-fixed', condition: '৩০ দিনের স্ট্রিক', awarded: '৮৮৪', active: true },
  { id: 'B004', name: 'বাংলা বিশেষজ্ঞ', icon: 'workspace_premium', color: 'bg-surface-container-high text-on-surface dark:bg-surface-container-highest dark:border dark:border-green-900/30-variant', condition: 'সব বাংলা পাঠ শেষ', awarded: '২৪৫', active: false },
];

const leaderboard = [
  { rank: 1, name: 'সুমাইয়া আক্তার', xp: '১২,৮৮০', badge: 'কুইজ মাস্টার', delta: '↑২' },
  { rank: 2, name: 'তানভীর আহমেদ', xp: '১১,৫৫০', badge: 'অগ্নি ধারাবাহিকতা', delta: '—' },
  { rank: 3, name: 'নাফিসা তাবাস্সুম', xp: '১০,২২০', badge: 'কুইজ মাস্টার', delta: '↑১' },
  { rank: 4, name: 'রাহেলা বেগম', xp: '৮,৯৫০', badge: 'প্রথম পদক্ষেপ', delta: '↓১' },
  { rank: 5, name: 'আল-আমিন রহমান', xp: '৭,৬৮০', badge: 'প্রথম পদক্ষেপ', delta: '—' },
];

export default function GamificationPage() {
  const [xpPerLesson, setXpPerLesson] = useState(50);
  const [xpPerQuiz, setXpPerQuiz] = useState(100);
  const [streakBonus, setStreakBonus] = useState(20);

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader title="Gamification" breadcrumb="admin / gamification" />

      <div className="p-4 md:p-8 space-y-5 md:space-y-6">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="text-xs font-label text-outline uppercase tracking-widest font-bold mb-1">Management</p>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">গেমিফিকেশন ব্যবস্থাপনা</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 md:gap-6">
          {/* XP Settings */}
          <div className="bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm p-6 space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-tertiary-fixed/30 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined fill-icon text-tertiary" style={{ fontSize: '22px' }}>stars</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface">XP কনফিগারেশন</h3>
                <p className="text-xs text-outline">পয়েন্ট সিস্টেম নিয়ন্ত্রণ</p>
              </div>
            </div>
            {[
              { label: 'প্রতি পাঠে XP', value: xpPerLesson, setter: setXpPerLesson, min: 10, max: 200 },
              { label: 'প্রতি কুইজে XP', value: xpPerQuiz, setter: setXpPerQuiz, min: 20, max: 500 },
              { label: 'স্ট্রিক বোনাস %', value: streakBonus, setter: setStreakBonus, min: 0, max: 100 },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-wide">{s.label}</label>
                  <span className="text-sm font-bold text-primary font-label">{s.value}</span>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  value={s.value}
                  onChange={(e) => s.setter(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[10px] text-outline font-label mt-0.5">
                  <span>{s.min}</span>
                  <span>{s.max}</span>
                </div>
              </div>
            ))}
            <button className="w-full py-3 bg-primary text-white rounded-xl font-label font-bold text-sm hover:opacity-90 transition-opacity mt-2">
              সংরক্ষণ করুন
            </button>
          </div>

          {/* Badge Management */}
          <div className="bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-headline font-bold text-on-surface">ব্যাজ সমূহ</h3>
              <button className="text-xs font-label font-bold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>add</span>
                নতুন
              </button>
            </div>
            <div className="space-y-3">
              {badges.map((b) => (
                <div key={b.id} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className={`w-10 h-10 rounded-xl ${b.color} flex items-center justify-center shrink-0`}>
                    <span className="material-symbols-outlined fill-icon" style={{ fontSize: '20px' }}>{b.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-on-surface truncate">{b.name}</p>
                    <p className="text-[10px] text-outline font-label truncate">{b.condition}</p>
                    <p className="text-[10px] text-primary font-bold font-label">{b.awarded} জন পেয়েছে</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-10 h-5 rounded-full transition-colors cursor-pointer ${b.active ? 'bg-primary' : 'bg-surface-container-high'} flex items-center ${b.active ? 'justify-end pr-0.5' : 'justify-start pl-0.5'}`}>
                      <div className="w-4 h-4 rounded-full bg-surface-container-lowest shadow-sm" />
                    </div>
                    <span className="text-[9px] font-label text-outline">{b.active ? 'চালু' : 'বন্ধ'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm p-6">
            <h3 className="font-headline font-bold text-on-surface mb-4">শীর্ষ শিক্ষার্থী</h3>
            <div className="space-y-2">
              {leaderboard.map((l) => (
                <div key={l.rank} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${l.rank === 1 ? 'bg-tertiary-fixed/30' : 'bg-surface-container-low hover:bg-surface-container'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black font-headline text-sm ${l.rank === 1 ? 'bg-tertiary-fixed-dim text-on-tertiary-fixed' : l.rank === 2 ? 'bg-surface-container-highest text-on-surface' : l.rank === 3 ? 'bg-secondary-fixed-dim text-on-secondary-fixed' : 'bg-surface-container text-on-surface-variant'}`}>
                    {l.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-on-surface truncate">{l.name}</p>
                    <p className="text-[10px] text-outline font-label">{l.badge}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary font-label text-sm">{l.xp}</p>
                    <p className={`text-[10px] font-bold ${l.delta.includes('↑') ? 'text-primary' : l.delta.includes('↓') ? 'text-error' : 'text-outline'}`}>{l.delta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coin shop preview */}
        <div className="bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-headline font-bold text-lg text-on-surface">কয়েন শপ আইটেম</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-label font-bold text-xs">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>add</span>
              আইটেম যোগ করুন
            </button>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
            {[
              { name: 'হিন্ট বুস্টার', cost: '৫০', icon: 'lightbulb', stock: '∞' },
              { name: 'টাইম ফ্রিজ', cost: '৭৫', icon: 'hourglass_pause', stock: '∞' },
              { name: 'ডাবল XP', cost: '২০০', icon: 'auto_awesome', stock: '১২৫' },
              { name: 'প্রিমিয়াম থিম', cost: '৫০০', icon: 'palette', stock: '৫০' },
            ].map((item) => (
              <div key={item.name} className="border border-outline-variant/20 dark:border-green-900/20 rounded-2xl p-4 text-center hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-tertiary-fixed/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined fill-icon text-tertiary" style={{ fontSize: '24px' }}>{item.icon}</span>
                </div>
                <p className="font-semibold text-sm text-on-surface">{item.name}</p>
                <div className="flex items-center justify-center gap-1 mt-1.5">
                  <span className="material-symbols-outlined fill-icon text-yellow-500" style={{ fontSize: '14px' }}>monetization_on</span>
                  <span className="font-bold text-primary font-label text-sm">{item.cost}</span>
                </div>
                <p className="text-[10px] text-outline font-label mt-1">স্টক: {item.stock}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
