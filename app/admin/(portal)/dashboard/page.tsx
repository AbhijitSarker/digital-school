'use client';

import Link from 'next/link';

const metrics = [
  { label: 'মোট সক্রিয় শিক্ষার্থী', value: '১২,৪৫০', delta: '+৮.৪% এই মাসে', deltaColor: 'bg-primary-fixed/30 text-primary', icon: 'groups', iconColor: 'text-primary', iconBg: 'bg-primary/10', border: 'border-primary' },
  { label: 'আজকের DAU', value: '৩,৮২০', delta: '+১২% আজ', deltaColor: 'bg-primary-fixed/30 text-primary', icon: 'ads_click', iconColor: 'text-primary-container', iconBg: 'bg-primary-container/10', border: 'border-primary-container' },
  { label: 'গড় কুইজ স্কোর', value: '৮৪%', delta: 'স্থির পারফরম্যান্স', deltaColor: 'bg-tertiary-fixed text-on-tertiary-fixed-variant', icon: 'analytics', iconColor: 'text-tertiary', iconBg: 'bg-tertiary-fixed/30', border: 'border-tertiary' },
  { label: 'মোট অর্জিত XP', value: '৮৫০K', delta: '+৪৫K গতকাল', deltaColor: 'bg-tertiary-fixed text-on-tertiary-fixed-variant', icon: 'stars', iconColor: 'text-tertiary-container', iconBg: 'bg-tertiary-container/10', border: 'border-tertiary-container' },
  { label: 'রিটেনশন রেট', value: '৬৪.২%', delta: 'উন্নত হচ্ছে', deltaColor: 'bg-secondary-fixed text-on-secondary-fixed-variant', icon: 'cached', iconColor: 'text-secondary', iconBg: 'bg-secondary-fixed/50', border: 'border-secondary' },
];

const activities = [
  { icon: 'person_add', color: 'text-primary', bg: 'bg-primary/10', text: 'নতুন শিক্ষার্থী নিবন্ধন করেছে: মোঃ ইমরান হোসেন (শ্রেণী ৬)', time: '২ মিনিট আগে' },
  { icon: 'quiz', color: 'text-tertiary', bg: 'bg-tertiary-fixed/30', text: 'নতুন কুইজ প্রকাশিত: ভগ্নাংশের গাণিতিক সমস্যা', time: '১৫ মিনিট আগে' },
  { icon: 'military_tech', color: 'text-secondary', bg: 'bg-secondary-fixed/50', text: 'ব্যাজ আনলক: প্রথম ব্যাচে ১০০ শিক্ষার্থী "মাস্টার" ব্যাজ পেয়েছে', time: '১ ঘন্টা আগে' },
  { icon: 'domain', color: 'text-primary-container', bg: 'bg-primary/5', text: 'নতুন স্কুল যুক্ত হয়েছে: সরকারি প্রাথমিক বিদ্যালয়, ময়মনসিংহ', time: '৩ ঘন্টা আগে' },
  { icon: 'warning', color: 'text-error', bg: 'bg-error-container/50', text: 'সতর্কতা: ৪৫ জন শিক্ষার্থী ৭ দিনের বেশি নিষ্ক্রিয়', time: 'আজ সকাল ৯:০০' },
];

const chartBars = [
  { h: 'h-32', label: '১ এপ্রিল' },
  { h: 'h-40', label: '৮ এপ্রিল' },
  { h: 'h-24', label: '১৫ এপ্রিল' },
  { h: 'h-52', label: '২২ এপ্রিল' },
  { h: 'h-60', label: '২৯ এপ্রিল' },
  { h: 'h-44', label: '৬ মে' },
  { h: 'h-64', label: '১৩ মে' },
];

const quickLinks = [
  { href: '/admin/students', icon: 'group_add', label: 'শিক্ষার্থী যোগ করুন', color: 'bg-primary/10 text-primary' },
  { href: '/admin/content', icon: 'post_add', label: 'কন্টেন্ট তৈরি করুন', color: 'bg-tertiary-fixed/40 text-on-tertiary-fixed-variant' },
  { href: '/admin/quiz-bank', icon: 'add_circle', label: 'কুইজ যোগ করুন', color: 'bg-secondary-fixed/50 text-on-secondary-fixed-variant' },
  { href: '/admin/analytics', icon: 'bar_chart', label: 'রিপোর্ট দেখুন', color: 'bg-surface-container-high text-on-surface dark:bg-surface-container-highest dark:border dark:border-green-900/30' },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen">

        <div className="p-4 md:p-8 space-y-6 md:space-y-8">
        {/* Welcome row */}
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="font-label text-xs text-outline tracking-widest font-bold uppercase mb-1">Administrative Overview</p>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">শুভেচ্ছা, অ্যাডমিন প্যানেল</h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-xl border border-outline-variant/10 dark:border-green-900/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-fixed/150 animate-pulse" />
            <span className="text-xs font-label font-bold text-outline uppercase tracking-widest">Server Status</span>
            <span className="text-sm font-semibold text-on-surface ml-1">অপারেশনাল</span>
          </div>
        </div>

        {/* Metrics bento grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {metrics.map((m) => (
            <div key={m.label} className={`bg-surface-container dark:border-green-900/10 p-6 rounded-2xl shadow-sm border-b-4 ${m.border} hover:-translate-y-1 transition-transform`}>
              <div className={`w-10 h-10 rounded-xl ${m.iconBg} flex items-center justify-center mb-4`}>
                <span className={`material-symbols-outlined fill-icon ${m.iconColor}`} style={{ fontSize: '22px' }}>{m.icon}</span>
              </div>
              <p className="text-xs font-label text-outline font-medium tracking-wide">{m.label}</p>
              <h3 className="text-3xl font-headline font-bold text-on-surface mt-1">{m.value}</h3>
              <div className={`mt-3 text-[10px] font-label font-semibold py-1 px-2 ${m.deltaColor} rounded-md self-start inline-block`}>{m.delta}</div>
            </div>
          ))}
        </div>

        {/* Chart + Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 md:gap-6">
          {/* Chart */}
          <div className="xl:col-span-2 bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm p-5 md:p-7 flex flex-col gap-4">
            <div className="flex justify-between items-start flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-headline font-bold text-primary">শিক্ষার্থী বৃদ্ধির ধারা</h3>
                <p className="text-sm text-outline">গত ৩০ দিনের ইউজার অ্যাক্টিভিটি</p>
              </div>
              <div className="flex bg-surface-container p-1 rounded-lg gap-1">
                <button className="px-3 py-1 text-xs font-label font-bold bg-surface-container-lowest text-primary rounded-md shadow-sm">সপ্তাহ</button>
                <button className="px-3 py-1 text-xs font-label font-semibold text-outline hover:text-primary transition-colors">মাস</button>
              </div>
            </div>
            {/* Chart */}
            <div className="relative h-56 flex items-end justify-between gap-2 px-1 mt-2">
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                  <path d="M0 50 Q 15 15, 30 35 T 60 10 T 100 20" fill="none" stroke="#004900" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                  <path d="M0 55 Q 20 45, 40 40 T 80 25 T 100 30" fill="none" stroke="#82db6f" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" opacity="0.5" />
                </svg>
              </div>
              {chartBars.map((b, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className={`w-full ${b.h} bg-primary/10 hover:bg-primary/20 rounded-t-lg transition-colors cursor-pointer`} />
                  <span className="text-[9px] font-label text-outline font-bold whitespace-nowrap">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col">
            <div className="p-5 border-b border-outline-variant/10 dark:border-green-900/10">
              <h3 className="text-lg font-headline font-bold text-primary">সাম্প্রতিক কার্যক্রম</h3>
              <p className="text-sm text-outline mt-0.5">সিস্টেমের রিয়েল-টাইম ইভেন্টস</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activities.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg ${a.bg} flex items-center justify-center shrink-0`}>
                    <span className={`material-symbols-outlined ${a.color}`} style={{ fontSize: '16px' }}>{a.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface leading-snug">{a.text}</p>
                    <p className="text-[10px] text-outline font-label mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick actions + top subjects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {/* Quick Actions */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-headline font-bold text-primary mb-4">দ্রুত কাজ</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${q.color} font-medium text-sm hover:opacity-80 transition-opacity`}
                >
                  <span className="material-symbols-outlined fill-icon" style={{ fontSize: '20px' }}>{q.icon}</span>
                  {q.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Top performing subjects */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-headline font-bold text-primary mb-4">শীর্ষ বিষয়সমূহ</h3>
            <div className="space-y-3">
              {[
                { name: 'বাংলা গদ্য', score: '৮৯%', pct: 89 },
                { name: 'গণিত', score: '৮৪%', pct: 84 },
                { name: 'ব্যাকরণ', score: '৭৮%', pct: 78 },
                { name: 'কবিতা', score: '৭২%', pct: 72 },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-5 text-xs font-bold font-label text-outline">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-on-surface">{s.name}</span>
                      <span className="font-bold text-primary font-label">{s.score}</span>
                    </div>
                    <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
