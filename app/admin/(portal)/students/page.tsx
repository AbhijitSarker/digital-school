'use client';

import { useState } from 'react';

const students = [
  { id: 'STU001', name: 'তানভীর আহমেদ', class: 'শ্রেণী ৬', school: 'ঢাকা মডেল স্কুল', xp: '২,৫৫০', streak: '১৫ দিন', score: '৯২%', status: 'active', joined: '১৫ জানু ২০২৪' },
  { id: 'STU002', name: 'রাহেলা বেগম', class: 'শ্রেণী ৭', school: 'চট্টগ্রাম পাবলিক', xp: '১,৮৮০', streak: '৮ দিন', score: '৮৬%', status: 'active', joined: '২০ জানু ২০২৪' },
  { id: 'STU003', name: 'মোঃ ইমরান', class: 'শ্রেণী ৫', school: 'রাজশাহী কলেজিয়েট', xp: '৯৫০', streak: '০ দিন', score: '৬৪%', status: 'inactive', joined: '০৫ ফেব ২০২৪' },
  { id: 'STU004', name: 'সুমাইয়া আক্তার', class: 'শ্রেণী ৮', school: 'সিলেট উইমেন্স', xp: '৩,২০০', streak: '২২ দিন', score: '৯৮%', status: 'active', joined: '১০ ফেব ২০২৪' },
  { id: 'STU005', name: 'আল-আমিন রহমান', class: 'শ্রেণী ৬', school: 'ময়মনসিংহ সরকারি', xp: '১,১২০', streak: '৩ দিন', score: '৭৩%', status: 'warning', joined: '১৮ ফেব ২০২৪' },
  { id: 'STU006', name: 'নাফিসা তাবাস্সুম', class: 'শ্রেণী ৭', school: 'কুমিল্লা ভিক্টোরিয়া', xp: '২,১০০', streak: '১২ দিন', score: '৮৮%', status: 'active', joined: '২২ ফেব ২০২৪' },
];

const statusConfig: Record<string, { label: string; cls: string }> = {
  active: { label: 'সক্রিয়', cls: 'bg-primary-fixed/30 text-primary' },
  inactive: { label: 'নিষ্ক্রিয়', cls: 'bg-surface-container-high text-on-surface dark:bg-surface-container-highest dark:border dark:border-green-900/30-variant' },
  warning: { label: 'সতর্কতা', cls: 'bg-tertiary-fixed/50 text-on-tertiary-fixed-variant' },
};

export default function StudentsPage() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = students.filter((s) => {
    const matchSearch = s.name.includes(search) || s.id.includes(search);
    const matchStatus = filterStatus === 'all' || s.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="flex flex-col">

      <div className="p-4 md:p-8 space-y-5 md:space-y-6">
        {/* Header */}
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="text-xs font-label text-outline uppercase tracking-widest font-bold mb-1">Management</p>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">শিক্ষার্থী ব্যবস্থাপনা</h2>
          </div>
          <button className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-label font-bold text-sm shadow-lg hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person_add</span>
            শিক্ষার্থী যোগ করুন
          </button>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: 'মোট শিক্ষার্থী', value: '১২,৪৫০', icon: 'group', color: 'border-primary text-primary' },
            { label: 'সক্রিয়', value: '১০,৮৮০', icon: 'check_circle', color: 'border-emerald-500 text-primary' },
            { label: 'নিষ্ক্রিয়', value: '১,২০০', icon: 'cancel', color: 'border-outline text-outline' },
            { label: 'সতর্কতা', value: '৩৭০', icon: 'warning', color: 'border-tertiary text-tertiary' },
          ].map((c) => (
            <div key={c.label} className={`bg-surface-container-lowest p-4 rounded-2xl shadow-sm border-l-4 ${c.color.split(' ')[0]}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`material-symbols-outlined fill-icon ${c.color.split(' ')[1]}`} style={{ fontSize: '18px' }}>{c.icon}</span>
                <span className="text-xs font-label text-outline font-medium">{c.label}</span>
              </div>
              <div className={`text-2xl font-headline font-bold ${c.color.split(' ')[1]}`}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Filters + search */}
        <div className="bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm">
          <div className="p-5 border-b border-outline-variant/10 dark:border-green-900/10 flex flex-wrap gap-3 justify-between items-center">
            <div className="flex items-center gap-3 bg-surface-container px-4 py-2 rounded-xl flex-1 max-w-xs">
              <span className="material-symbols-outlined text-outline" style={{ fontSize: '18px' }}>search</span>
              <input
                type="text"
                placeholder="নাম বা ID দিয়ে খুঁজুন..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-outline/60"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'active', 'inactive', 'warning'].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className={`px-3 py-1.5 text-xs font-label font-bold rounded-lg transition-all ${filterStatus === s ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-green-900/10'}`}
                >
                  {s === 'all' ? 'সব' : s === 'active' ? 'সক্রিয়' : s === 'inactive' ? 'নিষ্ক্রিয়' : 'সতর্কতা'}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-container-low text-left">
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">ID</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">শিক্ষার্থী</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">শ্রেণী</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">স্কুল</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">XP</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">স্ট্রিক</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">গড় স্কোর</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">স্ট্যাটাস</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">কাজ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-5 py-4">
                      <span className="text-xs font-label font-bold text-outline">{s.id}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary-fixed/40 flex items-center justify-center font-bold text-primary text-sm font-headline shrink-0">
                          {s.name[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-on-surface">{s.name}</p>
                          <p className="text-xs text-outline">{s.joined}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-on-surface-variant">{s.class}</td>
                    <td className="px-5 py-4 text-on-surface-variant text-xs">{s.school}</td>
                    <td className="px-5 py-4 font-bold text-primary font-label">{s.xp}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined fill-icon text-secondary" style={{ fontSize: '14px' }}>local_fire_department</span>
                        <span className="text-on-surface font-medium text-xs">{s.streak}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: s.score }} />
                        </div>
                        <span className="font-bold text-primary font-label text-xs">{s.score}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-[11px] font-label font-bold px-2.5 py-1 rounded-full ${statusConfig[s.status].cls}`}>
                        {statusConfig[s.status].label}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high dark:hover:bg-green-900/10 text-on-surface-variant transition-colors" title="View">
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high dark:hover:bg-green-900/10 text-on-surface-variant transition-colors" title="Edit">
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg bg-error-container/30 hover:bg-error-container text-error transition-colors" title="Delete">
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="p-5 border-t border-outline-variant/10 dark:border-green-900/10 flex justify-between items-center">
              <p className="text-sm text-outline font-label">{filtered.length} টি ফলাফল দেখাচ্ছে</p>
              <div className="flex gap-1">
                {[1, 2, 3, '...', 12].map((p, i) => (
                  <button key={i} className={`w-8 h-8 rounded-lg text-xs font-label font-bold transition-all ${p === 1 ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-green-900/10'}`}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
