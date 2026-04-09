'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
    <div className="min-h-screen bg-surface-dim font-body flex items-center justify-center p-6 transition-colors">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-emerald-950/5 via-transparent to-secondary/5" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-tertiary-fixed/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #004900 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/10 flex flex-col md:flex-row min-h-[540px]">
        {/* Left: Branding */}
        <div className="hidden md:flex md:w-1/2 p-10 flex-col justify-between relative bg-emerald-950 overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined fill-icon text-on-primary-fixed">menu_book</span>
            </div>
            <span className="font-headline font-black text-2xl tracking-tighter text-white">BanglaQuest</span>
          </div>

          {/* Main copy */}
          <div className="relative z-10 space-y-4">
            <h2 className="font-headline text-3xl font-extrabold text-white leading-tight">
              বাংলার সমৃদ্ধিতে<br />আপনার পদক্ষেপ।
            </h2>
            <p className="text-primary-fixed/70 text-base leading-relaxed">
              Manage student progress, curriculum integrity, and institutional growth from a single powerful console.
            </p>
          </div>

          {/* Stats */}
          <div className="relative z-10 border-t border-white/10 pt-6 flex gap-8">
            {[
              { value: '১২৫+', label: 'স্কুল পার্টনার' },
              { value: '১০K+', label: 'সক্রিয় শিক্ষার্থী' },
              { value: '৯৮%', label: 'আপটাইম' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-headline font-bold text-white">{s.value}</div>
                <div className="text-[10px] font-label uppercase tracking-widest text-primary-fixed/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Login form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-sm">
            {/* Mobile logo */}
            <div className="md:hidden flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '18px' }}>menu_book</span>
              </div>
              <span className="font-headline font-black text-xl text-primary">BanglaQuest</span>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold font-label uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: '12px' }}>shield</span>
                Admin Portal
              </div>
              <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">অ্যাডমিন লগইন</h1>
              <p className="text-on-surface-variant text-sm">আপনার পরিচয় নিশ্চিত করতে লগইন করুন</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-label font-bold text-outline uppercase tracking-wider block">ইমেইল বা ইউজারনেম</label>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="admin@banglaquest.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 px-4 py-3.5 text-sm font-medium outline-none transition-all placeholder:text-outline/50 text-on-surface"
                  />
                  <span className="material-symbols-outlined absolute right-3 top-3.5 text-outline/60 group-focus-within:text-primary transition-colors" style={{ fontSize: '20px' }}>person</span>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-label font-bold text-outline uppercase tracking-wider">পাসওয়ার্ড</label>
                  <button type="button" className="text-[10px] font-label font-bold text-primary hover:text-primary-container uppercase tracking-tighter transition-colors">পাসওয়ার্ড ভুলে গেছেন?</button>
                </div>
                <div className="relative group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 px-4 py-3.5 text-sm font-medium outline-none transition-all placeholder:text-outline/50 text-on-surface"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-outline/60 hover:text-on-surface transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              {/* 2FA notice */}
              <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/10">
                <span className="material-symbols-outlined fill-icon text-primary mt-0.5" style={{ fontSize: '18px' }}>verified_user</span>
                <p className="text-[11px] text-on-surface-variant leading-snug">
                  সুরক্ষার জন্য লগইনের পর আপনার ডিভাইসে একটি{' '}
                  <span className="text-primary font-bold">2FA</span> কোড পাঠানো হবে।
                </p>
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
                className="w-full bg-linear-to-br from-primary to-primary-container text-white py-4 rounded-2xl font-label font-bold text-sm uppercase tracking-[0.1em] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
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
                    লগইন করুন
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-[11px] font-label text-outline/60 text-center mt-8 leading-relaxed">
              © ২০২৪ BanglaQuest Admin Portal — সকল স্বত্ব সংরক্ষিত
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
