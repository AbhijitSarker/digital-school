'use client';

import { useState } from 'react';

const contentItems = [
  { id: 'CNT001', title: 'ভগ্নাংশের গাণিতিক ধারণা', subject: 'গণিত', class: 'শ্রেণী ৬', type: 'পাঠ', status: 'published', views: '৪,২৫০', updated: '১০ মে ২০২৪' },
  { id: 'CNT002', title: 'বাংলা গদ্য: রবীন্দ্রনাথ ঠাকুর', subject: 'বাংলা', class: 'শ্রেণী ৭', type: 'পাঠ্যবই', status: 'published', views: '৬,৮৮০', updated: '০৮ মে ২০২৪' },
  { id: 'CNT003', title: 'বিশেষণ ও ক্রিয়া বিশেষণ', subject: 'ব্যাকরণ', class: 'শ্রেণী ৫', type: 'কুইজ', status: 'draft', views: '—', updated: '০৬ মে ২০২৪' },
  { id: 'CNT004', title: 'কবিতা: আমার সোনার বাংলা', subject: 'বাংলা', class: 'শ্রেণী ৮', type: 'অডিও পাঠ', status: 'published', views: '৩,১২০', updated: '০৫ মে ২০২৪' },
  { id: 'CNT005', title: 'পরিবেশ ও বাস্তুতন্ত্র', subject: 'বিজ্ঞান', class: 'শ্রেণী ৬', type: 'ইন্টারেক্টিভ', status: 'review', views: '—', updated: '০৪ মে ২০২৪' },
];

const statusConfig: Record<string, { label: string; cls: string }> = {
  published: { label: 'প্রকাশিত', cls: 'bg-primary-fixed/30 text-primary' },
  draft: { label: 'ড্রাফট', cls: 'bg-surface-container-high text-on-surface dark:bg-surface-container-highest dark:border dark:border-green-900/30-variant' },
  review: { label: 'পর্যালোচনা', cls: 'bg-tertiary-fixed/50 text-on-tertiary-fixed-variant' },
};

const typeIcons: Record<string, string> = {
  'পাঠ': 'menu_book', 'পাঠ্যবই': 'auto_stories', 'কুইজ': 'quiz',
  'অডিও পাঠ': 'headphones', 'ইন্টারেক্টিভ': 'touch_app',
};

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="flex flex-col">

      <div className="p-4 md:p-8 space-y-5 md:space-y-6">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="text-xs font-label text-outline uppercase tracking-widest font-bold mb-1">Management</p>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">কন্টেন্ট ব্যবস্থাপনা</h2>
          </div>
          <button className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-label font-bold text-sm shadow-lg hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
            নতুন কন্টেন্ট
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: 'মোট কন্টেন্ট', value: '১,২৮৫', icon: 'folder', color: 'text-primary' },
            { label: 'প্রকাশিত', value: '৯৮৪', icon: 'check_circle', color: 'text-primary' },
            { label: 'ড্রাফট', value: '২১৮', icon: 'edit_note', color: 'text-outline' },
            { label: 'পর্যালোচনায়', value: '৮৩', icon: 'pending', color: 'text-tertiary' },
          ].map((c) => (
            <div key={c.label} className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 dark:border-green-900/10">
              <div className="flex items-center gap-2 mb-2">
                <span className={`material-symbols-outlined fill-icon ${c.color}`} style={{ fontSize: '20px' }}>{c.icon}</span>
                <span className="text-xs font-label text-outline">{c.label}</span>
              </div>
              <div className={`text-2xl font-headline font-bold ${c.color}`}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Tab filters */}
        <div className="flex gap-2 p-1 bg-surface-container rounded-2xl w-fit">
          {['all', 'lesson', 'quiz', 'audio', 'interactive'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-label font-bold rounded-xl transition-all ${activeTab === tab ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {tab === 'all' ? 'সব' : tab === 'lesson' ? 'পাঠ' : tab === 'quiz' ? 'কুইজ' : tab === 'audio' ? 'অডিও' : 'ইন্টারেক্টিভ'}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 gap-4">
          {contentItems.map((item) => (
            <div key={item.id} className="bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm p-5 flex items-center gap-5 hover:shadow-md transition-shadow border border-outline-variant/10 dark:border-green-900/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined fill-icon text-primary" style={{ fontSize: '24px' }}>{typeIcons[item.type]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-on-surface truncate">{item.title}</h3>
                  <span className={`text-[10px] font-label font-bold px-2 py-0.5 rounded-full shrink-0 ${statusConfig[item.status].cls}`}>
                    {statusConfig[item.status].label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-outline font-label">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>subject</span>
                    {item.subject}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>class</span>
                    {item.class}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>visibility</span>
                    {item.views} ভিউ
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>schedule</span>
                    {item.updated}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high dark:hover:bg-green-900/10 text-on-surface-variant transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
                </button>
                <button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high dark:hover:bg-green-900/10 text-on-surface-variant transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>preview</span>
                </button>
                <button className="p-2 rounded-lg bg-error-container/30 hover:bg-error-container text-error transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
