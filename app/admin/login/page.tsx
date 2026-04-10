'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError('সব ঘর পূরণ করুন।'); return; }
    setLoading(true);
    setError('');
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen font-body flex flex-col items-center justify-center px-4 py-10 transition-colors
      bg-surface-dim dark:bg-background">

      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #82db6f 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      {/* Top right: theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Logo badge */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-primary/20 dark:bg-primary/25 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-500" />
          <div className="relative w-20 h-20 bg-surface-container-high dark:bg-surface-container-high border border-outline-variant/30 dark:border-outline-variant rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="material-symbols-outlined fill-icon text-primary" style={{ fontSize: '40px' }}>school</span>
          </div>
        </div>
        <h1 className="text-3xl font-black tracking-tighter text-on-surface font-headline mb-1">BanglaQuest</h1>
        <p className="text-xs text-on-surface-variant uppercase tracking-[0.25em] font-bold font-label">অ্যাডমিন কন্ট্রোল সেন্টার</p>
      </div>

      {/* Card */}
      <div className="w-full max-w-md
        bg-surface-container-low dark:bg-surface-container-low
        border border-outline-variant/30 dark:border-outline-variant/30
        rounded-2xl p-8 shadow-2xl">

        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold font-label uppercase tracking-widest mb-4">
            <span className="material-symbols-outlined fill-icon" style={{ fontSize: '12px' }}>shield</span>
            Admin Portal
          </div>
          <h2 className="font-headline text-xl font-bold text-on-surface mb-1">লগইন করুন</h2>
          <p className="text-sm text-on-surface-variant">আপনার ক্রেডেনশিয়াল ব্যবহার করে সুরক্ষিত অ্যাক্সেস করুন।</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-label font-semibold text-on-surface-variant block">ইমেইল অথবা ফোন নম্বর</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" style={{ fontSize: '20px' }}>person</span>
              <input
                type="text"
                placeholder="আপনার অ্যাডমিন আইডি লিখুন"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-lg text-sm text-on-surface placeholder-outline/60 outline-none transition-all
                  bg-surface-container dark:bg-surface-container
                  border border-outline-variant/50 dark:border-outline-variant/50
                  focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-label font-semibold text-on-surface-variant">পাসওয়ার্ড</label>
              <button type="button" className="text-[10px] font-label font-bold text-primary hover:underline uppercase tracking-tighter transition-colors">পাসওয়ার্ড ভুলে গেছেন?</button>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" style={{ fontSize: '20px' }}>lock</span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-12 py-3.5 rounded-lg text-sm text-on-surface placeholder-outline/60 outline-none transition-all
                  bg-surface-container dark:bg-surface-container
                  border border-outline-variant/50 dark:border-outline-variant/50
                  focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-primary bg-surface-container border-outline-variant rounded focus:ring-primary"
            />
            <label htmlFor="remember" className="text-sm text-on-surface-variant">এই ডিভাইসে আমাকে মনে রাখুন</label>
          </div>

          {/* Error */}
          {error && (
            <p className="text-xs text-error font-medium flex items-center gap-1">
              <span className="material-symbols-outlined fill-icon" style={{ fontSize: '14px' }}>error</span>
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                যাচাই হচ্ছে...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: '18px' }}>login</span>
                লগইন করুন
              </>
            )}
          </button>
        </form>

        {/* Footer links */}
        <div className="mt-8 pt-6 border-t border-outline-variant/20 flex flex-col items-center gap-4">
          <p className="text-xs text-on-surface-variant text-center leading-relaxed">
            সুরক্ষিত সেশন • শুধুমাত্র অনুমোদিত প্রশাসকগণ
          </p>
          <div className="flex gap-3">
            {[{ icon: 'help', label: 'Help' }, { icon: 'language', label: 'Language' }].map((b) => (
              <button key={b.icon}
                className="p-2 rounded-full bg-surface-container-high/50 dark:bg-surface-container-highest/50 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{b.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-outline font-bold">
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        Secured by BanglaQuest Auth
      </div>
    </div>
  );
}
