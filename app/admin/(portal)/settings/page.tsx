'use client';

import { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';

export default function SettingsPage() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [siteName, setSiteName] = useState('BanglaQuest');
  const [supportEmail, setSupportEmail] = useState('support@banglaquest.com');
  const [activeTab, setActiveTab] = useState('general');

  const Toggle = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`w-12 h-6 rounded-full transition-colors relative ${value ? 'bg-primary' : 'bg-surface-container-high'}`}
    >
      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all shadow-sm ${value ? 'right-0.5' : 'left-0.5'}`} />
    </button>
  );

  const tabs = [
    { id: 'general', label: 'সাধারণ', icon: 'settings' },
    { id: 'notifications', label: 'বিজ্ঞপ্তি', icon: 'notifications' },
    { id: 'security', label: 'নিরাপত্তা', icon: 'shield' },
    { id: 'system', label: 'সিস্টেম', icon: 'dns' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader title="Settings" breadcrumb="admin / settings" />

      <div className="p-8 space-y-6">
        <div>
          <p className="text-xs font-label text-outline uppercase tracking-widest font-bold mb-1">Configuration</p>
          <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">সিস্টেম সেটিংস</h2>
        </div>

        <div className="flex gap-6">
          {/* Sidebar tabs */}
          <div className="w-56 shrink-0 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${activeTab === tab.id ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container'}`}
              >
                <span className={`material-symbols-outlined ${activeTab === tab.id ? 'fill-icon' : ''}`} style={{ fontSize: '18px' }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Settings panel */}
          <div className="flex-1 space-y-4">
            {activeTab === 'general' && (
              <>
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 space-y-5">
                  <h3 className="font-headline font-bold text-on-surface text-lg border-b border-outline-variant/10 pb-3">সাধারণ তথ্য</h3>
                  {[
                    { label: 'সাইটের নাম', value: siteName, onChange: setSiteName, type: 'text' },
                    { label: 'সাপোর্ট ইমেইল', value: supportEmail, onChange: setSupportEmail, type: 'email' },
                    { label: 'প্রাথমিক ভাষা', value: 'বাংলা (bn)', onChange: () => {}, type: 'text' },
                    { label: 'টাইম জোন', value: 'Asia/Dhaka (GMT+6)', onChange: () => {}, type: 'text' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="text-xs font-label font-bold text-outline uppercase tracking-wider block mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        value={f.value}
                        onChange={(e) => f.onChange(e.target.value)}
                        className="w-full bg-surface-container-low px-4 py-3 rounded-xl text-sm outline-none border border-outline-variant/20 focus:border-primary transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 space-y-4">
                  <h3 className="font-headline font-bold text-on-surface text-lg border-b border-outline-variant/10 pb-3">প্রদর্শনী</h3>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p className="font-medium text-on-surface text-sm">ডার্ক মোড</p>
                      <p className="text-xs text-outline">অ্যাডমিন কনসোলে ডার্ক মোড চালু করুন</p>
                    </div>
                    <Toggle value={darkMode} onChange={() => setDarkMode(!darkMode)} />
                  </div>
                </div>
              </>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 space-y-4">
                <h3 className="font-headline font-bold text-on-surface text-lg border-b border-outline-variant/10 pb-3">বিজ্ঞপ্তি সেটিংস</h3>
                {[
                  { label: 'ইমেইল বিজ্ঞপ্তি', desc: 'গুরুত্বপূর্ণ আপডেটে ইমেইল পাবেন', value: emailNotifs, onChange: () => setEmailNotifs(!emailNotifs) },
                  { label: 'পুশ নোটিফিকেশন', desc: 'ব্রাউজারে পুশ বিজ্ঞপ্তি', value: pushNotifs, onChange: () => setPushNotifs(!pushNotifs) },
                  { label: 'নতুন নিবন্ধন সতর্কতা', desc: 'নতুন স্কুল যোগ হলে জানান', value: true, onChange: () => {} },
                  { label: 'সিস্টেম ত্রুটি সতর্কতা', desc: 'সার্ভার ত্রুটিতে তাৎক্ষণিক বিজ্ঞপ্তি', value: true, onChange: () => {} },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between items-center py-3 border-b border-outline-variant/10 last:border-0">
                    <div>
                      <p className="font-medium text-on-surface text-sm">{s.label}</p>
                      <p className="text-xs text-outline">{s.desc}</p>
                    </div>
                    <Toggle value={s.value} onChange={s.onChange} />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'security' && (
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 space-y-4">
                <h3 className="font-headline font-bold text-on-surface text-lg border-b border-outline-variant/10 pb-3">নিরাপত্তা</h3>
                {[
                  { label: 'দুই-ধাপ যাচাইকরণ (2FA)', desc: 'সব অ্যাডমিন লগইনে 2FA বাধ্যতামূলক', value: twoFactor, onChange: () => setTwoFactor(!twoFactor) },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                    <div>
                      <p className="font-medium text-on-surface text-sm">{s.label}</p>
                      <p className="text-xs text-outline">{s.desc}</p>
                    </div>
                    <Toggle value={s.value} onChange={s.onChange} />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-label font-bold text-outline uppercase tracking-wider block mb-1.5">সেশন টাইমআউট</label>
                  <select className="w-full bg-surface-container-low px-4 py-3 rounded-xl text-sm outline-none border border-outline-variant/20 focus:border-primary">
                    <option>৩০ মিনিট</option>
                    <option>১ ঘন্টা</option>
                    <option>৮ ঘন্টা</option>
                    <option>২৪ ঘন্টা</option>
                  </select>
                </div>
                <button className="w-full py-3 bg-secondary text-white rounded-xl font-label font-bold text-sm hover:opacity-90 transition-opacity">
                  পাসওয়ার্ড পরিবর্তন করুন
                </button>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 space-y-4">
                <h3 className="font-headline font-bold text-on-surface text-lg border-b border-outline-variant/10 pb-3">সিস্টেম</h3>
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                  <div>
                    <p className="font-medium text-on-surface text-sm">মেইনটেনেন্স মোড</p>
                    <p className="text-xs text-outline">চালু করলে ব্যবহারকারীরা অ্যাক্সেস করতে পারবে না</p>
                  </div>
                  <Toggle value={maintenanceMode} onChange={() => setMaintenanceMode(!maintenanceMode)} />
                </div>
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                  <div>
                    <p className="font-medium text-on-surface text-sm">স্বয়ংক্রিয় ব্যাকআপ</p>
                    <p className="text-xs text-outline">প্রতিদিন রাত ১২টায় ব্যাকআপ নেওয়া হবে</p>
                  </div>
                  <Toggle value={autoBackup} onChange={() => setAutoBackup(!autoBackup)} />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <button className="py-3 bg-surface-container rounded-xl font-label font-bold text-sm text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>backup</span>
                    এখনই ব্যাকআপ
                  </button>
                  <button className="py-3 bg-surface-container rounded-xl font-label font-bold text-sm text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>cached</span>
                    ক্যাশ পরিষ্কার
                  </button>
                </div>

                {/* System info */}
                <div className="mt-4 p-4 bg-surface-container rounded-xl space-y-2">
                  {[
                    { label: 'ভার্সন', value: 'v2.4.1' },
                    { label: 'Node.js', value: '20.11.0' },
                    { label: 'ডাটাবেস', value: 'PostgreSQL 15.4' },
                    { label: 'আপটাইম', value: '৯৮.৯৪%' },
                    { label: 'শেষ ব্যাকআপ', value: '১২ মে ২০২৪, রাত ১২:০০' },
                  ].map((info) => (
                    <div key={info.label} className="flex justify-between text-xs">
                      <span className="font-label text-outline font-medium">{info.label}</span>
                      <span className="font-label font-bold text-on-surface">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3">
              <button className="px-6 py-3 bg-surface-container rounded-xl font-label font-bold text-sm text-on-surface hover:bg-surface-container-high transition-colors">বাতিল করুন</button>
              <button className="px-6 py-3 bg-primary text-white rounded-xl font-label font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">পরিবর্তন সংরক্ষণ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
