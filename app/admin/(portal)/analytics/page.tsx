'use client';

import { useState } from 'react';

const kpis = [
  { label: 'মোট পাঠ সম্পন্ন', value: '৮৪,৩২০', delta: '+৬.২%', up: true, icon: 'menu_book', color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'গড় সেশন সময়', value: '২৪ মিনিট', delta: '+৩ মিনিট', up: true, icon: 'schedule', color: 'text-primary-container', bg: 'bg-primary/5' },
  { label: 'কুইজ পাসের হার', value: '৭৮.৪%', delta: '-১.২%', up: false, icon: 'quiz', color: 'text-tertiary', bg: 'bg-tertiary-fixed/30' },
  { label: 'নতুন নিবন্ধন', value: '১,২৪৫', delta: '+১৮%', up: true, icon: 'person_add', color: 'text-secondary', bg: 'bg-secondary-fixed/40' },
];

const subjectStats = [
  { name: 'বাংলা গদ্য', completions: '২৮,৪৪০', avgScore: '৮৯%', trend: 92 },
  { name: 'গণিত', completions: '২৩,১২০', avgScore: '৮৪%', trend: 84 },
  { name: 'ব্যাকরণ', completions: '১৮,৬৫০', avgScore: '৭৮%', trend: 78 },
  { name: 'কবিতা', completions: '১৪,১১০', avgScore: '৭২%', trend: 72 },
];

const months = ['জানু', 'ফেব', 'মার্চ', 'এপ্রিল', 'মে', 'জুন'];
const barData = [45, 62, 58, 78, 85, 92];

export default function AnalyticsPage() {
  const [period, setPeriod] = useState('month');

  return (
    <div className="flex flex-col min-h-screen">

      <div className="p-4 md:p-8 space-y-5 md:space-y-6">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="text-xs font-label text-outline uppercase tracking-widest font-bold mb-1">Insights</p>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">অ্যানালিটিক্স ও রিপোর্ট</h2>
          </div>
          <div className="flex gap-2">
            <div className="flex bg-surface-container p-1 rounded-xl gap-1">
              {['week', 'month', 'year'].map((p) => (
                <button key={p} onClick={() => setPeriod(p)} className={`px-4 py-2 text-xs font-label font-bold rounded-lg transition-all ${period === p ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant'}`}>
                  {p === 'week' ? 'সপ্তাহ' : p === 'month' ? 'মাস' : 'বছর'}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-container dark:border dark:border-green-900/10 rounded-xl border border-outline-variant/20 dark:border-green-900/20 text-sm font-label font-bold text-on-surface hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
              রিপোর্ট ডাউনলোড
            </button>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {kpis.map((k) => (
            <div key={k.label} className="bg-surface-container p-6 rounded-2xl shadow-sm border border-outline-variant/10 dark:border-green-900/10 hover:-translate-y-0.5 transition-transform">
              <div className={`w-10 h-10 rounded-xl ${k.bg} flex items-center justify-center mb-4`}>
                <span className={`material-symbols-outlined fill-icon ${k.color}`} style={{ fontSize: '20px' }}>{k.icon}</span>
              </div>
              <p className="text-xs font-label text-outline tracking-wide">{k.label}</p>
              <h3 className="text-2xl font-headline font-bold text-on-surface mt-1">{k.value}</h3>
              <div className={`mt-2 text-xs font-label font-bold flex items-center gap-1 ${k.up ? 'text-primary' : 'text-error'}`}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{k.up ? 'trending_up' : 'trending_down'}</span>
                {k.delta} আগের সময়ের তুলনায়
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 md:gap-6">
          {/* Bar chart */}
          <div className="xl:col-span-2 bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm p-5 md:p-7">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-headline font-bold text-primary">মাসিক অ্যাক্টিভিটি</h3>
                <p className="text-sm text-outline mt-0.5">পাঠ সম্পন্ন ও কুইজ অংশগ্রহণ</p>
              </div>
              <div className="flex gap-3 text-xs font-label">
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-primary" /> পাঠ</div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-tertiary-fixed-dim" /> কুইজ</div>
              </div>
            </div>
            <div className="flex items-end gap-4 h-52">
              {months.map((m, i) => (
                <div key={m} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex gap-1 items-end" style={{ height: '180px' }}>
                    <div className="flex-1 bg-primary rounded-t-md hover:bg-primary-container transition-colors" style={{ height: `${barData[i]}%` }} />
                    <div className="flex-1 bg-tertiary-fixed rounded-t-md hover:bg-tertiary-fixed-dim transition-colors" style={{ height: `${barData[i] * 0.75}%` }} />
                  </div>
                  <span className="text-[10px] font-label text-outline font-bold">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut-style distribution */}
          <div className="bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm p-7">
            <h3 className="text-xl font-headline font-bold text-primary mb-1">বিষয় বিতরণ</h3>
            <p className="text-sm text-outline mb-6">কোন বিষয়ে বেশি পাঠ সম্পন্ন</p>
            <div className="relative mx-auto w-36 h-36 mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {(() => {
                const segments = [{ pct: 34, stroke: '#004900' }, { pct: 27, stroke: '#6d5100' }, { pct: 22, stroke: '#fabd00' }, { pct: 17, stroke: '#d9dadb' }];
                let offset = 0;
                return segments.map((d) => {
                  const el = <circle key={d.stroke} cx="50" cy="50" r="40" fill="none" stroke={d.stroke} strokeWidth="18" strokeDasharray={`${d.pct * 2.513} 251.3`} strokeDashoffset={`${-offset * 2.513}`} />;
                  offset += d.pct;
                  return el;
                });
              })()}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-headline font-black text-primary">৮৪K</span>
                <span className="text-[10px] font-label text-outline">পাঠ</span>
              </div>
            </div>
            <div className="space-y-2">
              {[{ label: 'বাংলা গদ্য', pct: '৩৪%', color: 'bg-primary' }, { label: 'গণিত', pct: '২৭%', color: 'bg-tertiary-container' }, { label: 'ব্যাকরণ', pct: '২২%', color: 'bg-tertiary-fixed-dim' }, { label: 'কবিতা', pct: '১৭%', color: 'bg-surface-container-high' }].map((l) => (
                <div key={l.label} className="flex items-center gap-2 text-xs">
                  <div className={`w-2.5 h-2.5 rounded-sm ${l.color}`} />
                  <span className="flex-1 text-on-surface-variant">{l.label}</span>
                  <span className="font-bold text-on-surface font-label">{l.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subject breakdown table */}
        <div className="bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm">
          <div className="p-5 border-b border-outline-variant/10 dark:border-green-900/10">
            <h3 className="text-lg font-headline font-bold text-primary">বিষয়ভিত্তিক বিশ্লেষণ</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-container-low dark:text-slate-400 text-left">
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">বিষয়</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">পাঠ সম্পন্ন</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">গড় স্কোর</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">পারফরম্যান্স</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {subjectStats.map((s) => (
                  <tr key={s.name} className="hover:bg-surface-container-low/50 dark:hover:bg-green-900/5">
                    <td className="px-5 py-4 font-semibold text-on-surface">{s.name}</td>
                    <td className="px-5 py-4 text-on-surface-variant font-label">{s.completions}</td>
                    <td className="px-5 py-4 font-bold text-primary font-label">{s.avgScore}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${s.trend}%` }} />
                        </div>
                        <span className="text-xs font-label font-bold text-outline">{s.trend}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
