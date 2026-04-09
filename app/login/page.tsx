'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

type Role = 'parent' | 'student';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>('parent');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!email.trim()) e.email = 'ইমেইল বা ফোন নম্বর দিন';
    if (!password) e.password = 'পাসওয়ার্ড দিন';
    else if (password.length < 6) e.password = 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হতে হবে';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    router.push(role === 'parent' ? '/dashboard' : '/learn');
  };

  return (
    <div className="min-h-screen bg-surface-dim flex flex-col transition-colors">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface-container-lowest/90 backdrop-blur-md shadow-sm border-b border-outline-variant/20">
        <Link href="/" className="text-2xl font-black text-primary tracking-tight font-headline">
          BanglaQuest
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="text-sm text-on-surface-variant hidden md:block">অ্যাকাউন্ট নেই?</span>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-bold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-on-primary transition-all"
          >
            নিবন্ধন করুন
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center pt-16 px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden">
            {/* Header Banner */}
            <div className="bg-gradient-to-br from-primary to-primary-container px-8 py-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined fill-icon text-3xl text-primary-fixed">school</span>
                </div>
                <h1 className="text-3xl font-black font-headline tracking-tight mb-2">স্বাগতম ফিরে!</h1>
                <p className="text-primary-fixed-dim font-medium">আপনার শিক্ষার যাত্রা চলছে।</p>
              </div>
            </div>

            <div className="px-8 py-8 space-y-6">
              {/* Role Toggle */}
              <div>
                <p className="text-xs font-bold text-outline uppercase tracking-widest mb-3 font-label">
                  আপনি কে?
                </p>
                <div className="grid grid-cols-2 gap-2 p-1 bg-surface-container-low rounded-2xl">
                  {(['parent', 'student'] as Role[]).map((r) => (
                    <button
                      key={r}
                      onClick={() => setRole(r)}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        role === r
                          ? 'bg-surface-container-lowest text-primary shadow-sm'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      <span className={`material-symbols-outlined ${role === r ? 'fill-icon' : ''}`} style={{ fontSize: '18px' }}>
                        {r === 'parent' ? 'supervisor_account' : 'school'}
                      </span>
                      {r === 'parent' ? 'অভিভাবক' : 'শিক্ষার্থী'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
                    ইমেইল / ফোন নম্বর
                  </label>
                  <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-colors bg-surface-container-low ${
                    errors.email ? 'border-error' : 'border-transparent focus-within:border-primary'
                  }`}>
                    <span className="material-symbols-outlined text-outline" style={{ fontSize: '20px' }}>
                      {role === 'parent' ? 'mail' : 'person'}
                    </span>
                    <input
                      type="email"
                      placeholder={role === 'parent' ? 'parent@email.com' : 'student@email.com'}
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                      className="flex-1 bg-transparent text-on-surface placeholder:text-outline/60 text-sm font-medium outline-none"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-error font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>error</span>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">
                      পাসওয়ার্ড
                    </label>
                    <Link href="#" className="text-xs text-primary font-semibold hover:underline">
                      ভুলে গেছেন?
                    </Link>
                  </div>
                  <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-colors bg-surface-container-low ${
                    errors.password ? 'border-error' : 'border-transparent focus-within:border-primary'
                  }`}>
                    <span className="material-symbols-outlined text-outline" style={{ fontSize: '20px' }}>lock</span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                      className="flex-1 bg-transparent text-on-surface placeholder:text-outline/60 text-sm font-medium outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-outline hover:text-on-surface transition-colors"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-error font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>error</span>
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setRemember(!remember)}
                    className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all ${
                      remember ? 'bg-primary border-primary' : 'border-outline-variant'
                    }`}
                  >
                    {remember && <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '14px' }}>check</span>}
                  </button>
                  <span className="text-sm text-on-surface-variant font-medium">আমাকে মনে রাখুন</span>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-bold font-headline tracking-wide shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      লগইন হচ্ছে...
                    </>
                  ) : (
                    <>
                      লগইন করুন
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-outline-variant/30" />
                <span className="text-xs text-outline font-label uppercase tracking-widest">অথবা</span>
                <div className="flex-1 h-px bg-outline-variant/30" />
              </div>

              {/* Google Sign In */}
              <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border-2 border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container-low transition-all font-medium text-on-surface text-sm">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google দিয়ে লগইন করুন
              </button>

              {/* Sign up link */}
              <p className="text-center text-sm text-on-surface-variant">
                নতুন ব্যবহারকারী?{' '}
                <Link href="/signup" className="text-primary font-bold hover:underline underline-offset-2">
                  বিনামূল্যে নিবন্ধন করুন
                </Link>
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex items-center justify-center gap-6 opacity-50">
            <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-label">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lock</span>
              SSL সুরক্ষিত
            </div>
            <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-label">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>verified_user</span>
              COPPA সম্মত
            </div>
            <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-label">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>privacy_tip</span>
              গোপনীয়তা নিশ্চিত
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
