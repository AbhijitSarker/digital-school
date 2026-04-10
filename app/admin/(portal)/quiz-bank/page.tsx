'use client';

import { useState } from 'react';

const quizzes = [
  { id: 'QZ001', title: 'ভগ্নাংশের গাণিতিক সমস্যা', subject: 'গণিত', class: 'শ্রেণী ৬', questions: 15, difficulty: 'মাঝারি', attempts: '৩,৪৪০', avgScore: '৮২%', status: 'active' },
  { id: 'QZ002', title: 'রবীন্দ্রনাথের কবিতা বিশ্লেষণ', subject: 'বাংলা', class: 'শ্রেণী ৭', questions: 10, difficulty: 'সহজ', attempts: '৫,১২০', avgScore: '৯১%', status: 'active' },
  { id: 'QZ003', title: 'বিশেষণ ও সর্বনাম', subject: 'ব্যাকরণ', class: 'শ্রেণী ৫', questions: 20, difficulty: 'কঠিন', attempts: '১,৮৮০', avgScore: '৬৮%', status: 'draft' },
  { id: 'QZ004', title: 'পরিবেশ বিজ্ঞান: জীববৈচিত্র্য', subject: 'বিজ্ঞান', class: 'শ্রেণী ৬', questions: 12, difficulty: 'মাঝারি', attempts: '২,৩৬০', avgScore: '৭৬%', status: 'active' },
  { id: 'QZ005', title: 'বাংলাদেশের ইতিহাস ও স্বাধীনতা', subject: 'ইতিহাস', class: 'শ্রেণী ৮', questions: 25, difficulty: 'কঠিন', attempts: '—', avgScore: '—', status: 'draft' },
];

const difficultyColor: Record<string, string> = {
  'সহজ': 'bg-primary-fixed/30 text-primary',
  'মাঝারি': 'bg-tertiary-fixed/50 text-on-tertiary-fixed-variant',
  'কঠিন': 'bg-secondary-fixed/50 text-on-secondary-fixed-variant',
};

export default function QuizBankPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  return (
    <div className="flex flex-col min-h-screen">

      <div className="p-4 md:p-8 space-y-5 md:space-y-6">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="text-xs font-label text-outline uppercase tracking-widest font-bold mb-1">Management</p>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">কুইজ ব্যাংক</h2>
          </div>
          <div className="flex gap-3">
            {selected.length > 0 && (
              <button className="flex items-center gap-2 px-4 py-2.5 bg-error-container/30 text-error rounded-xl font-label font-bold text-sm border border-error/20">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>
                {selected.length}টি মুছুন
              </button>
            )}
            <button className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-label font-bold text-sm shadow-lg hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
              নতুন কুইজ তৈরি
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: 'মোট কুইজ', value: '৩৮৬', icon: 'quiz', color: 'text-primary' },
            { label: 'সক্রিয়', value: '২৮৮', icon: 'play_circle', color: 'text-primary' },
            { label: 'ড্রাফট', value: '৯৮', icon: 'edit_note', color: 'text-outline' },
            { label: 'মোট প্রশ্ন', value: '৫,৪৪০', icon: 'help', color: 'text-tertiary' },
          ].map((c) => (
            <div key={c.label} className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 dark:border-green-900/10">
              <span className={`material-symbols-outlined fill-icon ${c.color} block mb-2`} style={{ fontSize: '22px' }}>{c.icon}</span>
              <div className={`text-2xl font-headline font-bold ${c.color}`}>{c.value}</div>
              <div className="text-xs font-label text-outline mt-0.5">{c.label}</div>
            </div>
          ))}
        </div>

        {/* Quiz table */}
        <div className="bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm">
          <div className="p-5 border-b border-outline-variant/10 dark:border-green-900/10 flex gap-3 items-center flex-wrap">
            <div className="flex items-center gap-3 bg-surface-container px-4 py-2 rounded-xl flex-1 max-w-xs">
              <span className="material-symbols-outlined text-outline" style={{ fontSize: '18px' }}>search</span>
              <input type="text" placeholder="কুইজ খুঁজুন..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-outline/60" />
            </div>
            <select className="px-3 py-2 bg-surface-container rounded-xl text-sm font-label text-on-surface-variant outline-none border-0">
              <option>সব বিষয়</option>
              <option>গণিত</option>
              <option>বাংলা</option>
              <option>ব্যাকরণ</option>
            </select>
            <select className="px-3 py-2 bg-surface-container rounded-xl text-sm font-label text-on-surface-variant outline-none border-0">
              <option>সব শ্রেণী</option>
              <option>শ্রেণী ৫</option>
              <option>শ্রেণী ৬</option>
              <option>শ্রেণী ৭</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-container-low text-left">
                  <th className="px-5 py-3 w-10">
                    <input type="checkbox" className="rounded border-outline-variant" onChange={() => {}} />
                  </th>
                  <th className="px-3 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">কুইজ</th>
                  <th className="px-3 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">বিষয়</th>
                  <th className="px-3 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">প্রশ্ন</th>
                  <th className="px-3 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">কঠিনত্ব</th>
                  <th className="px-3 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">অংশগ্রহণ</th>
                  <th className="px-3 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">গড় স্কোর</th>
                  <th className="px-3 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">স্ট্যাটাস</th>
                  <th className="px-3 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">কাজ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {quizzes.map((q) => (
                  <tr key={q.id} className={`hover:bg-surface-container-low/50 transition-colors ${selected.includes(q.id) ? 'bg-primary/5' : ''}`}>
                    <td className="px-5 py-4">
                      <input type="checkbox" checked={selected.includes(q.id)} onChange={() => toggle(q.id)} className="rounded border-outline-variant" />
                    </td>
                    <td className="px-3 py-4">
                      <p className="font-semibold text-on-surface">{q.title}</p>
                      <p className="text-xs text-outline">{q.class}</p>
                    </td>
                    <td className="px-3 py-4">
                      <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-lg text-xs font-label font-bold">{q.subject}</span>
                    </td>
                    <td className="px-3 py-4 text-on-surface-variant text-center font-bold font-label">{q.questions}</td>
                    <td className="px-3 py-4">
                      <span className={`text-[11px] font-label font-bold px-2 py-1 rounded-full ${difficultyColor[q.difficulty]}`}>{q.difficulty}</span>
                    </td>
                    <td className="px-3 py-4 text-on-surface-variant font-label">{q.attempts}</td>
                    <td className="px-3 py-4 font-bold text-primary font-label">{q.avgScore}</td>
                    <td className="px-3 py-4">
                      <span className={`text-[11px] font-label font-bold px-2 py-1 rounded-full ${q.status === 'active' ? 'bg-primary-fixed/30 text-primary' : 'bg-surface-container-high text-on-surface dark:bg-surface-container-highest dark:border dark:border-green-900/30-variant'}`}>
                        {q.status === 'active' ? 'সক্রিয়' : 'ড্রাফট'}
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex gap-1.5">
                        <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high dark:hover:bg-green-900/10 text-on-surface-variant transition-colors">
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high dark:hover:bg-green-900/10 text-on-surface-variant transition-colors">
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>copy_all</span>
                        </button>
                        <button className="p-1.5 rounded-lg bg-error-container/30 hover:bg-error-container text-error transition-colors">
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>
                        </button>
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
