'use client';

import { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';

const challenges = [
  { id: 'CH001', title: 'আজকের ভগ্নাংশ চ্যালেঞ্জ', subject: 'গণিত', class: 'শ্রেণী ৬', date: '১৩ মে ২০২৪', reward: '৫০০ কয়েন', participants: '৩,২২০', completions: '২,৪৮৮', status: 'active' },
  { id: 'CH002', title: 'বাংলা রচনা স্প্রিন্ট', subject: 'বাংলা', class: 'শ্রেণী ৭', date: '১৪ মে ২০২৪', reward: '৩৫০ কয়েন', participants: '—', completions: '—', status: 'scheduled' },
  { id: 'CH003', title: 'ব্যাকরণ মাস্টারক্লাস', subject: 'ব্যাকরণ', class: 'সব শ্রেণী', date: '১২ মে ২০২৪', reward: '৪০০ কয়েন', participants: '৫,৪৪০', completions: '৩,৮৮০', status: 'completed' },
  { id: 'CH004', title: 'বিজ্ঞান কুইজ ব্লিটজ', subject: 'বিজ্ঞান', class: 'শ্রেণী ৫-৬', date: '১১ মে ২০২৪', reward: '৪৫০ কয়েন', participants: '২,১৮০', completions: '১,৫৫০', status: 'completed' },
];

const statusConfig: Record<string, { label: string; cls: string; dot: string }> = {
  active: { label: 'চলমান', cls: 'bg-primary-fixed/30 text-primary', dot: 'bg-primary-fixed/150' },
  scheduled: { label: 'নির্ধারিত', cls: 'bg-primary/10 text-primary', dot: 'bg-primary' },
  completed: { label: 'সম্পন্ন', cls: 'bg-surface-container-high text-on-surface-variant', dot: 'bg-outline' },
};

export default function ChallengesPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader title="Challenges" breadcrumb="admin / challenges" />

      <div className="p-4 md:p-8 space-y-5 md:space-y-6">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="text-xs font-label text-outline uppercase tracking-widest font-bold mb-1">Management</p>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">ডেইলি চ্যালেঞ্জ</h2>
          </div>
          <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-label font-bold text-sm shadow-lg hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
            চ্যালেঞ্জ তৈরি করুন
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: 'মোট চ্যালেঞ্জ', value: '৮৬', icon: 'emoji_events', color: 'text-primary' },
            { label: 'চলমান', value: '৩', icon: 'play_circle', color: 'text-primary' },
            { label: 'মোট অংশগ্রহণ', value: '৪৮,৮৮০', icon: 'group', color: 'text-tertiary' },
            { label: 'গড় সমাপ্তি হার', value: '৭২%', icon: 'task_alt', color: 'text-secondary' },
          ].map((c) => (
            <div key={c.label} className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10">
              <span className={`material-symbols-outlined fill-icon ${c.color} block mb-2`} style={{ fontSize: '22px' }}>{c.icon}</span>
              <div className={`text-2xl font-headline font-bold ${c.color}`}>{c.value}</div>
              <div className="text-xs font-label text-outline mt-0.5">{c.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {challenges.map((c) => {
            const cfg = statusConfig[c.status];
            const pct = c.participants !== '—' && c.completions !== '—'
              ? Math.round((parseInt(c.completions.replace(/,|৳/g, '')) / parseInt(c.participants.replace(/,|৳/g, ''))) * 100)
              : 0;
            return (
              <div key={c.id} className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 border border-outline-variant/10 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`flex items-center gap-1.5 text-[11px] font-label font-bold px-2.5 py-1 rounded-full ${cfg.cls}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${c.status === 'active' ? 'animate-pulse' : ''}`} />
                        {cfg.label}
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-lg text-on-surface">{c.title}</h3>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>
                    </button>
                    <button className="p-2 rounded-lg bg-error-container/30 hover:bg-error-container text-error transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs text-outline">
                    <span className="material-symbols-outlined fill-icon" style={{ fontSize: '14px' }}>subject</span>
                    {c.subject} — {c.class}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-outline">
                    <span className="material-symbols-outlined fill-icon" style={{ fontSize: '14px' }}>calendar_today</span>
                    {c.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="material-symbols-outlined fill-icon text-yellow-500" style={{ fontSize: '14px' }}>monetization_on</span>
                    <span className="font-bold text-on-surface">{c.reward}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-outline">
                    <span className="material-symbols-outlined fill-icon" style={{ fontSize: '14px' }}>group</span>
                    {c.participants} জন
                  </div>
                </div>

                {pct > 0 && (
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-outline font-label">সমাপ্তির হার</span>
                      <span className="font-bold text-primary font-label">{c.completions} / {c.participants}</span>
                    </div>
                    <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="text-[10px] text-outline font-label mt-1">{pct}% সম্পন্ন</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Create Challenge Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl shadow-2xl w-full max-w-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-headline font-bold text-primary">নতুন চ্যালেঞ্জ তৈরি</h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-4">
              {[
                { label: 'চ্যালেঞ্জের নাম', placeholder: 'যেমন: আজকের গণিত চ্যালেঞ্জ' },
                { label: 'বিষয়', placeholder: 'যেমন: গণিত, বাংলা...' },
                { label: 'পুরস্কার (কয়েন)', placeholder: 'যেমন: ৫০০' },
                { label: 'তারিখ', placeholder: 'YYYY-MM-DD' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-xs font-label font-bold text-outline uppercase tracking-wider block mb-1.5">{f.label}</label>
                  <input type="text" placeholder={f.placeholder} className="w-full bg-surface-container-low px-4 py-3 rounded-xl text-sm outline-none border border-outline-variant/20 focus:border-primary transition-colors" />
                </div>
              ))}
              <button className="w-full py-3.5 bg-primary text-white rounded-xl font-label font-bold mt-2 hover:opacity-90 transition-opacity">
                চ্যালেঞ্জ প্রকাশ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
