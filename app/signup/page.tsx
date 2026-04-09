'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Role = 'parent' | 'student';
type Step = 1 | 2 | 3;

const classes = ['শ্রেণী ১', 'শ্রেণী ২', 'শ্রেণী ৩', 'শ্রেণী ৪', 'শ্রেণী ৫', 'শ্রেণী ৬', 'শ্রেণী ৭', 'শ্রেণী ৮', 'শ্রেণী ৯', 'শ্রেণী ১০'];

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>('parent');
  const [step, setStep] = useState<Step>(1);

  // Common fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Parent-specific
  const [childName, setChildName] = useState('');
  const [childClass, setChildClass] = useState('');
  const [childDob, setChildDob] = useState('');

  // Student-specific
  const [studentClass, setStudentClass] = useState('');
  const [parentCode, setParentCode] = useState('');

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const validateStep1 = () => {
    const e: Record<string, string | undefined> = {};
    if (!name.trim()) e.name = 'আপনার নাম দিন';
    if (!email.trim()) e.email = 'ইমেইল ঠিকানা দিন';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'সঠিক ইমেইল দিন';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string | undefined> = {};
    if (!password) e.password = 'পাসওয়ার্ড দিন';
    else if (password.length < 8) e.password = 'পাসওয়ার্ড কমপক্ষে ৮ অক্ষর হতে হবে';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = () => {
    const e: Record<string, string | undefined> = {};
    if (role === 'parent') {
      if (!childName.trim()) e.childName = 'সন্তানের নাম দিন';
      if (!childClass) e.childClass = 'শ্রেণী বেছে নিন';
    } else {
      if (!studentClass) e.studentClass = 'আপনার শ্রেণী বেছে নিন';
    }
    if (!agreed) e.agreed = 'শর্তাবলীতে সম্মত হতে হবে';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    router.push(role === 'parent' ? '/dashboard' : '/learn');
  };

  const stepTitles: Record<Step, { title: string; subtitle: string }> = {
    1: { title: 'মূল তথ্য', subtitle: 'আপনার পরিচয় জানাই' },
    2: { title: 'পাসওয়ার্ড তৈরি', subtitle: 'অ্যাকাউন্ট সুরক্ষিত করুন' },
    3: {
      title: role === 'parent' ? 'সন্তানের তথ্য' : 'শ্রেণীর তথ্য',
      subtitle: role === 'parent' ? 'আপনার সন্তানকে যুক্ত করুন' : 'আপনার পড়াশোনার স্তর',
    },
  };

  const Field = ({
    label, error, children,
  }: { label: string; error?: string | undefined; children: React.ReactNode }) => (
    <div className="space-y-1.5">
      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider font-label">{label}</label>
      {children}
      {error && (
        <p className="text-xs text-error font-medium flex items-center gap-1">
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>error</span>
          {error}
        </p>
      )}
    </div>
  );

  const InputWrap = ({ icon, error, children }: { icon: string; error?: boolean; children: React.ReactNode }) => (
    <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-colors bg-surface-container-low ${
      error ? 'border-error' : 'border-transparent focus-within:border-primary'
    }`}>
      <span className="material-symbols-outlined text-outline" style={{ fontSize: '20px' }}>{icon}</span>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-surface-dim flex flex-col">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-white/80 backdrop-blur-md shadow-sm border-b border-outline-variant/10">
        <Link href="/" className="text-2xl font-black text-emerald-800 tracking-tight font-headline">
          BanglaQuest
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-on-surface-variant hidden md:block">ইতিমধ্যে অ্যাকাউন্ট আছে?</span>
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-bold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all"
          >
            লগইন করুন
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center pt-16 px-4 py-12">
        <div className="w-full max-w-lg">
          {/* Role Selection (only shown at step 1) */}
          {step === 1 && (
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-black font-headline text-primary mb-2">নিবন্ধন করুন</h2>
              <p className="text-on-surface-variant">আপনার ভূমিকা বেছে নিন</p>
            </div>
          )}

          {/* Role Toggle (step 1 only) */}
          {step === 1 && (
            <div className="grid grid-cols-2 gap-3 mb-6">
              {(['parent', 'student'] as Role[]).map((r) => (
                <button
                  key={r}
                  onClick={() => { setRole(r); setErrors({}); }}
                  className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all ${
                    role === r
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-outline-variant/30 bg-surface-container-lowest hover:border-primary/30'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    role === r ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant'
                  }`}>
                    <span className="material-symbols-outlined fill-icon text-3xl">
                      {r === 'parent' ? 'family_restroom' : 'school'}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className={`font-bold text-base ${role === r ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {r === 'parent' ? 'অভিভাবক' : 'শিক্ষার্থী'}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      {r === 'parent' ? 'সন্তানের অগ্রগতি দেখুন' : 'শেখা শুরু করুন'}
                    </p>
                  </div>
                  {role === r && (
                    <span className="material-symbols-outlined fill-icon text-primary" style={{ fontSize: '20px' }}>
                      check_circle
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Main Card */}
          <div className="bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden">
            {/* Progress Steps */}
            <div className="px-8 pt-7 pb-5">
              <div className="flex items-center gap-2 mb-5">
                {([1, 2, 3] as Step[]).map((s) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                      step > s
                        ? 'bg-primary text-white'
                        : step === s
                        ? 'bg-primary text-white ring-4 ring-primary/20'
                        : 'bg-surface-container-high text-on-surface-variant'
                    }`}>
                      {step > s ? (
                        <span className="material-symbols-outlined fill-icon" style={{ fontSize: '16px' }}>check</span>
                      ) : s}
                    </div>
                    {s < 3 && (
                      <div className={`flex-1 h-0.5 rounded-full transition-all ${step > s ? 'bg-primary' : 'bg-surface-container-high'}`} />
                    )}
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-black font-headline text-on-surface">{stepTitles[step].title}</h3>
              <p className="text-sm text-on-surface-variant mt-0.5">{stepTitles[step].subtitle}</p>
            </div>

            <div className="px-8 pb-8">
              <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} noValidate className="space-y-4">

                {/* Step 1: Basic Info */}
                {step === 1 && (
                  <>
                    <Field label="পুরো নাম" error={errors.name}>
                      <InputWrap icon="person" error={!!errors.name}>
                        <input
                          type="text"
                          placeholder={role === 'parent' ? 'মোঃ আরিফ হোসেন' : 'রাহেলা বেগম'}
                          value={name}
                          onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                          className="flex-1 bg-transparent text-on-surface placeholder:text-outline/60 text-sm font-medium outline-none"
                        />
                      </InputWrap>
                    </Field>

                    <Field label="ইমেইল ঠিকানা" error={errors.email}>
                      <InputWrap icon="mail" error={!!errors.email}>
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                          className="flex-1 bg-transparent text-on-surface placeholder:text-outline/60 text-sm font-medium outline-none"
                        />
                      </InputWrap>
                    </Field>

                    <Field label="মোবাইল নম্বর (ঐচ্ছিক)">
                      <InputWrap icon="phone">
                        <input
                          type="tel"
                          placeholder="+880 1XXXXXXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="flex-1 bg-transparent text-on-surface placeholder:text-outline/60 text-sm font-medium outline-none"
                        />
                      </InputWrap>
                    </Field>
                  </>
                )}

                {/* Step 2: Password */}
                {step === 2 && (
                  <>
                    <Field label="পাসওয়ার্ড তৈরি করুন" error={errors.password}>
                      <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-colors bg-surface-container-low ${
                        errors.password ? 'border-error' : 'border-transparent focus-within:border-primary'
                      }`}>
                        <span className="material-symbols-outlined text-outline" style={{ fontSize: '20px' }}>lock</span>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="কমপক্ষে ৮ অক্ষর"
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
                    </Field>

                    {/* Password strength */}
                    {password.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`flex-1 h-1.5 rounded-full transition-all ${
                                password.length > i * 3
                                  ? password.length >= 12
                                    ? 'bg-primary'
                                    : password.length >= 8
                                    ? 'bg-tertiary-fixed-dim'
                                    : 'bg-secondary'
                                  : 'bg-surface-container-high'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-on-surface-variant font-medium">
                          পাসওয়ার্ড শক্তি:{' '}
                          <span className={
                            password.length >= 12 ? 'text-primary font-bold' :
                            password.length >= 8 ? 'text-tertiary font-bold' :
                            'text-secondary font-bold'
                          }>
                            {password.length >= 12 ? 'শক্তিশালী' : password.length >= 8 ? 'মাঝারি' : 'দুর্বল'}
                          </span>
                        </p>
                      </div>
                    )}

                    {/* Password tips */}
                    <div className="p-4 bg-surface-container-low rounded-xl space-y-2">
                      {[
                        { ok: password.length >= 8, text: 'কমপক্ষে ৮ অক্ষর' },
                        { ok: /[A-Z]/.test(password), text: 'একটি বড় অক্ষর (A-Z)' },
                        { ok: /[0-9]/.test(password), text: 'একটি সংখ্যা (0-9)' },
                      ].map((tip, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <span className={`material-symbols-outlined ${tip.ok ? 'fill-icon text-primary' : 'text-outline'}`} style={{ fontSize: '14px' }}>
                            {tip.ok ? 'check_circle' : 'radio_button_unchecked'}
                          </span>
                          <span className={tip.ok ? 'text-primary font-medium' : 'text-on-surface-variant'}>{tip.text}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Step 3: Role-Specific Info */}
                {step === 3 && (
                  <>
                    {role === 'parent' ? (
                      <>
                        <Field label="সন্তানের নাম" error={errors.childName}>
                          <InputWrap icon="child_care" error={!!errors.childName}>
                            <input
                              type="text"
                              placeholder="তানভীর আহমেদ"
                              value={childName}
                              onChange={(e) => { setChildName(e.target.value); setErrors((p) => ({ ...p, childName: undefined })); }}
                              className="flex-1 bg-transparent text-on-surface placeholder:text-outline/60 text-sm font-medium outline-none"
                            />
                          </InputWrap>
                        </Field>

                        <Field label="সন্তানের শ্রেণী" error={errors.childClass}>
                          <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 bg-surface-container-low transition-colors ${
                            errors.childClass ? 'border-error' : 'border-transparent focus-within:border-primary'
                          }`}>
                            <span className="material-symbols-outlined text-outline" style={{ fontSize: '20px' }}>school</span>
                            <select
                              value={childClass}
                              onChange={(e) => { setChildClass(e.target.value); setErrors((p) => ({ ...p, childClass: undefined })); }}
                              className="flex-1 bg-transparent text-on-surface text-sm font-medium outline-none appearance-none cursor-pointer"
                            >
                              <option value="">বেছে নিন...</option>
                              {classes.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>expand_more</span>
                          </div>
                        </Field>

                        <Field label="সন্তানের জন্ম তারিখ (ঐচ্ছিক)">
                          <InputWrap icon="cake">
                            <input
                              type="date"
                              value={childDob}
                              onChange={(e) => setChildDob(e.target.value)}
                              className="flex-1 bg-transparent text-on-surface text-sm font-medium outline-none"
                            />
                          </InputWrap>
                        </Field>
                      </>
                    ) : (
                      <>
                        <Field label="আপনার শ্রেণী" error={errors.studentClass}>
                          <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 bg-surface-container-low transition-colors ${
                            errors.studentClass ? 'border-error' : 'border-transparent focus-within:border-primary'
                          }`}>
                            <span className="material-symbols-outlined text-outline" style={{ fontSize: '20px' }}>school</span>
                            <select
                              value={studentClass}
                              onChange={(e) => { setStudentClass(e.target.value); setErrors((p) => ({ ...p, studentClass: undefined })); }}
                              className="flex-1 bg-transparent text-on-surface text-sm font-medium outline-none appearance-none cursor-pointer"
                            >
                              <option value="">বেছে নিন...</option>
                              {classes.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>expand_more</span>
                          </div>
                        </Field>

                        <Field label="অভিভাবকের কোড (ঐচ্ছিক)">
                          <InputWrap icon="link">
                            <input
                              type="text"
                              placeholder="BQ-XXXXXX"
                              value={parentCode}
                              onChange={(e) => setParentCode(e.target.value)}
                              className="flex-1 bg-transparent text-on-surface placeholder:text-outline/60 text-sm font-medium outline-none uppercase tracking-widest"
                            />
                          </InputWrap>
                          <p className="text-xs text-on-surface-variant mt-1 pl-1">
                            অভিভাবক যদি আমন্ত্রণ পাঠিয়ে থাকেন, তাহলে তাঁর কোড এখানে দিন।
                          </p>
                        </Field>

                        {/* XP Preview */}
                        <div className="p-4 bg-tertiary-fixed/20 rounded-xl flex items-center gap-3 border border-tertiary-fixed-dim/20">
                          <span className="material-symbols-outlined fill-icon text-tertiary text-3xl">stars</span>
                          <div>
                            <p className="font-bold text-tertiary text-sm">নিবন্ধনে পাবেন +৫০ XP!</p>
                            <p className="text-xs text-on-surface-variant">শুরু থেকেই এগিয়ে থাকুন।</p>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Terms */}
                    <div className="space-y-1">
                      <button
                        type="button"
                        onClick={() => { setAgreed(!agreed); setErrors((p) => ({ ...p, agreed: undefined })); }}
                        className="flex items-start gap-3 text-left"
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border-2 transition-all flex-shrink-0 ${
                          agreed ? 'bg-primary border-primary' : 'border-outline-variant'
                        }`}>
                          {agreed && <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '14px' }}>check</span>}
                        </div>
                        <span className="text-sm text-on-surface-variant leading-relaxed">
                          আমি BanglaQuest-এর{' '}
                          <a href="#" className="text-primary font-semibold hover:underline">সেবার শর্তাবলী</a>
                          {' '}এবং{' '}
                          <a href="#" className="text-primary font-semibold hover:underline">গোপনীয়তা নীতি</a>
                          {' '}পড়েছি এবং মেনে নিচ্ছি।
                        </span>
                      </button>
                      {errors.agreed && (
                        <p className="text-xs text-error font-medium flex items-center gap-1 pl-8">
                          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>error</span>
                          {errors.agreed}
                        </p>
                      )}
                    </div>
                  </>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => { setStep((step - 1) as Step); setErrors({}); }}
                      className="px-5 py-3.5 rounded-xl border-2 border-outline-variant text-on-surface-variant font-bold hover:bg-surface-container-low transition-all flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
                      পিছনে
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3.5 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-bold font-headline shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        অ্যাকাউন্ট তৈরি হচ্ছে...
                      </>
                    ) : step < 3 ? (
                      <>
                        পরবর্তী ধাপ
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                      </>
                    ) : (
                      <>
                        অ্যাকাউন্ট তৈরি করুন
                        <span className="material-symbols-outlined fill-icon" style={{ fontSize: '20px' }}>check_circle</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Step 1 alternative */}
              {step === 1 && (
                <>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex-1 h-px bg-outline-variant/30" />
                    <span className="text-xs text-outline font-label uppercase tracking-widest">অথবা</span>
                    <div className="flex-1 h-px bg-outline-variant/30" />
                  </div>
                  <button className="w-full mt-4 flex items-center justify-center gap-3 py-3.5 rounded-xl border-2 border-outline-variant/40 bg-white hover:bg-surface-container-low transition-all font-medium text-on-surface text-sm">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google দিয়ে নিবন্ধন করুন
                  </button>
                  <p className="text-center text-sm text-on-surface-variant mt-5">
                    ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
                    <Link href="/login" className="text-primary font-bold hover:underline underline-offset-2">
                      লগইন করুন
                    </Link>
                  </p>
                </>
              )}
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
