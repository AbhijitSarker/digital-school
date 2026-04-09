'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const stats = [
  { value: '৫০,০০০+', label: 'সক্রিয় শিক্ষার্থী', icon: 'school' },
  { value: '৯৮%', label: 'অভিভাবক সন্তুষ্ট', icon: 'thumb_up' },
  { value: '১২০০+', label: 'পাঠ্য বিষয়বস্তু', icon: 'menu_book' },
  { value: '৪.৯★', label: 'অ্যাপ রেটিং', icon: 'grade' },
];

const parentFeatures = [
  { icon: 'analytics', title: 'রিয়েল-টাইম অগ্রগতি', desc: 'প্রতিটি পাঠ, কুইজ এবং অর্জনের লাইভ আপডেট পান।' },
  { icon: 'notifications_active', title: 'স্মার্ট অ্যালার্ট', desc: 'সন্তানের দুর্বল বিষয়ে স্বয়ংক্রিয় বিজ্ঞপ্তি পাবেন।' },
  { icon: 'leaderboard', title: 'বিস্তারিত রিপোর্ট', desc: 'সাপ্তাহিক ও মাসিক পারফরম্যান্স রিপোর্ট ডাউনলোড করুন।' },
  { icon: 'family_restroom', title: 'পারিবারিক সংযোগ', desc: 'একটি অ্যাকাউন্টে একাধিক সন্তানের তথ্য পরিচালনা করুন।' },
];

const studentFeatures = [
  { icon: 'auto_stories', title: 'ইন্টারেক্টিভ পাঠ', desc: 'ভয়েস নারেশন ও অ্যানিমেশন সহ মজাদার পাঠ্যবই।' },
  { icon: 'quiz', title: 'গেমিফাইড কুইজ', desc: 'MCQ, ড্র্যাগ-ড্রপ এবং ম্যাচিং চ্যালেঞ্জ।' },
  { icon: 'military_tech', title: 'ব্যাজ ও পুরস্কার', desc: 'প্রতিটি সাফল্যে XP, কয়েন এবং বিশেষ ব্যাজ অর্জন করুন।' },
  { icon: 'videogame_asset', title: 'মিনি গেমস', desc: 'মেমোরি কার্ড, ম্যাচিং গেম সহ মস্তিষ্ক তীক্ষ্ণ করুন।' },
];

const testimonials = [
  { name: 'ফারহানা বেগম', role: 'অভিভাবক, ঢাকা', quote: 'আমার মেয়ে এখন নিজে থেকেই পড়তে বসে। BanglaQuest তার মধ্যে শেখার আগ্রহ জাগিয়ে তুলেছে।', stars: 5 },
  { name: 'মোঃ রফিকুল', role: 'অভিভাবক, চট্টগ্রাম', quote: 'রিপোর্ট দেখে বুঝতে পারছি কোথায় আরও সাহায্য দরকার। এই প্ল্যাটফর্ম অসাধারণ।', stars: 5 },
  { name: 'সুমাইয়া আক্তার', role: 'শ্রেণী ৭, শিক্ষার্থী', quote: 'কুইজ আর মিনি গেম খেলতে খেলতে পড়া শেষ হয়ে যায়! এটা স্কুলের চেয়েও মজার।', stars: 5 },
];

const howItWorks = [
  { step: '০১', title: 'নিবন্ধন করুন', desc: 'অভিভাবক বা শিক্ষার্থী হিসেবে ৩০ সেকেন্ডে অ্যাকাউন্ট খুলুন।', icon: 'how_to_reg' },
  { step: '০২', title: 'শ্রেণী যুক্ত করুন', desc: 'সন্তানের শ্রেণী এবং বিষয় নির্ধারণ করুন। কারিকুলাম স্বয়ংক্রিয় সেট হবে।', icon: 'class' },
  { step: '০৩', title: 'শেখা শুরু হোক', desc: 'ইন্টারেক্টিভ পাঠ, কুইজ ও গেমের মাধ্যমে প্রতিদিন শিখুন এবং বাড়ুন।', icon: 'rocket_launch' },
];

const floatingBadges = [
  { top: '15%', left: '-5%', text: '+১৫০ XP', icon: 'stars', color: 'bg-tertiary-fixed text-on-tertiary-fixed' },
  { top: '55%', left: '-8%', text: '১৫ দিন 🔥', icon: 'local_fire_department', color: 'bg-secondary-container text-white' },
  { top: '20%', right: '-5%', text: 'নতুন ব্যাজ!', icon: 'military_tech', color: 'bg-primary-fixed text-on-primary-fixed' },
  { top: '70%', right: '-8%', text: '৯২% স্কোর', icon: 'task_alt', color: 'bg-surface-container-lowest text-primary' },
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'parent' | 'student'>('parent');
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-surface font-body text-on-surface antialiased overflow-x-hidden">

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 bg-white/90 backdrop-blur-md shadow-sm border-b border-outline-variant/10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '18px' }}>school</span>
          </div>
          <span className="text-xl font-black text-emerald-800 tracking-tight font-headline">BanglaQuest</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-on-surface-variant">
          <a href="#features" className="hover:text-primary transition-colors">বৈশিষ্ট্যসমূহ</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">কিভাবে কাজ করে</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">অভিজ্ঞতা</a>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-xl transition-all">
            লগইন
          </Link>
          <Link href="/signup" className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-xl hover:bg-primary-container transition-all shadow-md shadow-primary/20">
            বিনামূল্যে শুরু করুন
          </Link>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary-fixed/20 to-transparent" />
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary-fixed-dim/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-tertiary-fixed-dim/10 blur-[100px] rounded-full" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #004900 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-20">
          {/* Left: Copy */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-fixed/40 border border-primary-fixed-dim/30">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-primary font-label tracking-widest uppercase">৫০,০০০+ শিক্ষার্থী ইতিমধ্যে শিখছে</span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.05] font-headline tracking-tighter mb-4">
                বাংলা শিক্ষাকে{' '}
                <span className="relative">
                  <span className="relative z-10">মজাদার</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 bg-tertiary-fixed/60 z-0 rounded" />
                </span>{' '}
                করি
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
                ইন্টারেক্টিভ পাঠ, গেমিফাইড কুইজ এবং রিয়েল-টাইম রিপোর্ট দিয়ে আপনার সন্তানের বাংলা শিক্ষাকে
                অর্থবহ করে তুলুন।
              </p>
            </div>

            {/* Role CTA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/signup"
                  className="group flex items-center justify-center gap-3 px-7 py-4 bg-primary text-white rounded-2xl font-bold text-base shadow-xl shadow-primary/25 hover:bg-primary-container hover:-translate-y-0.5 transition-all"
                >
                  <span className="material-symbols-outlined fill-icon">family_restroom</span>
                  অভিভাবক হিসেবে শুরু
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                  href="/signup"
                  className="group flex items-center justify-center gap-3 px-7 py-4 bg-surface-container-lowest text-primary rounded-2xl font-bold text-base border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <span className="material-symbols-outlined fill-icon">school</span>
                  শিক্ষার্থী হিসেবে যোগ দিন
                </Link>
              </div>
              <p className="text-xs text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined fill-icon text-primary" style={{ fontSize: '14px' }}>check_circle</span>
                বিনামূল্যে শুরু করুন। ক্রেডিট কার্ড লাগবে না।
              </p>
            </div>

            {/* Social Proof Avatars */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-3">
                {['bg-emerald-200', 'bg-amber-200', 'bg-red-200', 'bg-blue-200', 'bg-purple-200'].map((c, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-white ${c} flex items-center justify-center text-xs font-bold`}>
                    {['ম', 'র', 'স', 'ত', 'আ'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-icon text-amber-400" style={{ fontSize: '14px' }}>star</span>
                  ))}
                </div>
                <p className="text-xs text-on-surface-variant">৫,০০০+ অভিভাবক এবং শিক্ষার্থীর বিশ্বাস</p>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex justify-center items-center">
            {/* Floating badges */}
            {floatingBadges.map((badge, i) => (
              <div
                key={i}
                className={`absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg ${badge.color} text-xs font-bold whitespace-nowrap z-20`}
                style={{
                  top: badge.top,
                  left: badge.left,
                  right: badge.right,
                  animation: `float ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
                }}
              >
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: '16px' }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}

            {/* Main phone mockup container */}
            <div className="relative w-full max-w-md">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-primary-fixed-dim/20 blur-[60px] rounded-full scale-110" />

              {/* Browser-style frame */}
              <div className="relative bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden border border-outline-variant/20">
                {/* Address bar */}
                <div className="bg-surface-container-high px-4 py-2.5 flex items-center gap-3 border-b border-outline-variant/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-error/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim/60" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-3 py-1 text-[10px] font-label text-outline flex items-center gap-1.5">
                    <span className="material-symbols-outlined" style={{ fontSize: '11px' }}>lock</span>
                    banglaquest.edu.bd
                  </div>
                </div>

                {/* App preview: top bar */}
                <div className="bg-emerald-900 px-5 py-3 flex items-center justify-between">
                  <span className="text-white font-black font-headline text-lg">BanglaQuest</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full">
                      <span className="material-symbols-outlined fill-icon text-amber-400" style={{ fontSize: '14px' }}>local_fire_department</span>
                      <span className="text-white text-xs font-bold">১৫</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full">
                      <span className="material-symbols-outlined fill-icon text-yellow-300" style={{ fontSize: '14px' }}>monetization_on</span>
                      <span className="text-white text-xs font-bold">৮৫০</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-emerald-600 border border-emerald-400 flex items-center justify-center text-white text-xs font-bold">র</div>
                  </div>
                </div>

                {/* Dashboard preview */}
                <div className="p-4 space-y-3 bg-surface">
                  {/* Greeting */}
                  <div>
                    <p className="text-xs text-on-surface-variant font-label">স্বাগতম,</p>
                    <h3 className="text-lg font-black font-headline text-primary">তানভীর আহমেদ!</h3>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'XP', value: '২৫৫০', icon: 'stars', color: 'text-tertiary' },
                      { label: 'স্ট্রিক', value: '১৫ দিন', icon: 'local_fire_department', color: 'text-secondary' },
                      { label: 'স্কোর', value: '৯২%', icon: 'task_alt', color: 'text-primary' },
                    ].map((s, i) => (
                      <div key={i} className="bg-surface-container-lowest p-2.5 rounded-xl text-center border border-outline-variant/10">
                        <span className={`material-symbols-outlined fill-icon ${s.color}`} style={{ fontSize: '18px' }}>{s.icon}</span>
                        <div className="text-sm font-black font-headline text-on-surface">{s.value}</div>
                        <div className="text-[9px] text-on-surface-variant font-label">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Current lesson card */}
                  <div className="bg-primary rounded-2xl p-3.5 text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined fill-icon text-primary-fixed" style={{ fontSize: '20px' }}>menu_book</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-primary-fixed-dim font-label uppercase tracking-wider">চলমান পাঠ</p>
                      <p className="text-sm font-bold truncate">ভগ্নাংশের খেলা: গসাগু ও লসাগু</p>
                      <div className="h-1 bg-white/20 rounded-full mt-1.5 overflow-hidden">
                        <div className="h-full bg-primary-fixed w-[65%] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Badges preview */}
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-on-surface-variant flex-1">সাম্প্রতিক ব্যাজ</p>
                    <span className="text-xs text-primary font-bold">সব দেখুন</span>
                  </div>
                  <div className="flex gap-2">
                    {[
                      { icon: 'military_tech', bg: 'bg-amber-100', color: 'text-amber-600' },
                      { icon: 'auto_awesome', bg: 'bg-emerald-100', color: 'text-emerald-600' },
                      { icon: 'workspace_premium', bg: 'bg-blue-100', color: 'text-blue-600' },
                    ].map((b, i) => (
                      <div key={i} className={`w-10 h-10 ${b.bg} rounded-xl flex items-center justify-center`}>
                        <span className={`material-symbols-outlined fill-icon ${b.color}`} style={{ fontSize: '20px' }}>{b.icon}</span>
                      </div>
                    ))}
                    <div className="w-10 h-10 bg-surface-container-high rounded-xl flex items-center justify-center text-xs font-bold text-on-surface-variant">+৯</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-primary py-12">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${visibleStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="material-symbols-outlined fill-icon text-primary-fixed-dim block mb-2" style={{ fontSize: '28px' }}>{s.icon}</span>
              <div className="text-3xl md:text-4xl font-black font-headline text-white">{s.value}</div>
              <div className="text-sm text-primary-fixed-dim font-label mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="py-20 md:py-28 bg-surface-dim">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-fixed/40 text-primary font-label text-xs font-bold tracking-widest uppercase rounded-full mb-4">
              বৈশিষ্ট্যসমূহ
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-headline text-primary tracking-tight mb-4">
              সবার জন্য তৈরি
            </h2>
            <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
              অভিভাবক এবং শিক্ষার্থী দুজনের জন্যই আলাদা, শক্তিশালী অভিজ্ঞতা।
            </p>
          </div>

          {/* Tab toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-surface-container rounded-2xl gap-1">
              {(['parent', 'student'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-primary text-white shadow-md'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined fill-icon" style={{ fontSize: '18px' }}>
                    {tab === 'parent' ? 'supervisor_account' : 'school'}
                  </span>
                  {tab === 'parent' ? 'অভিভাবকের জন্য' : 'শিক্ষার্থীর জন্য'}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {(activeTab === 'parent' ? parentFeatures : studentFeatures).map((f, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-6 md:p-8 rounded-3xl shadow-sm border border-outline-variant/10 group hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <span className="material-symbols-outlined fill-icon text-primary group-hover:text-white" style={{ fontSize: '28px' }}>{f.icon}</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-on-surface mb-2">{f.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-20 md:py-28 bg-surface">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-tertiary-fixed/40 text-tertiary font-label text-xs font-bold tracking-widest uppercase rounded-full mb-4">
              কিভাবে কাজ করে
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-headline text-primary tracking-tight mb-4">
              তিনটি সহজ ধাপ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-outline-variant/30 z-0" />

            {howItWorks.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20 relative z-10">
                  <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '40px' }}>{step.icon}</span>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-tertiary-fixed rounded-xl flex items-center justify-center">
                    <span className="text-xs font-black text-on-tertiary-fixed">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-headline text-on-surface mb-2">{step.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary-container hover:-translate-y-0.5 transition-all"
            >
              এখনই শুরু করুন
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="py-20 md:py-28 bg-surface-dim">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-label text-xs font-bold tracking-widest uppercase rounded-full mb-4">
              অভিজ্ঞতা
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-headline text-primary tracking-tight">
              তাঁরা বলছেন
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-surface-container-lowest p-7 rounded-3xl shadow-sm border border-outline-variant/10 flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[...Array(t.stars)].map((_, j) => (
                    <span key={j} className="material-symbols-outlined fill-icon text-tertiary-fixed-dim" style={{ fontSize: '16px' }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant leading-relaxed italic flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-outline-variant/10">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-on-surface">{t.name}</p>
                    <p className="text-xs text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-linear-to-br from-primary via-primary-container to-emerald-800 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
          <span className="material-symbols-outlined fill-icon text-tertiary-fixed-dim block mb-4" style={{ fontSize: '56px' }}>school</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline text-white tracking-tight mb-5">
            আজই শুরু করুন
          </h2>
          <p className="text-xl text-primary-fixed-dim mb-10 leading-relaxed">
            হাজার হাজার পরিবার ইতিমধ্যে BanglaQuest-এর সাথে তাদের সন্তানের ভবিষ্যৎ গড়ছে।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-bold text-lg shadow-2xl hover:bg-primary-fixed transition-all"
            >
              <span className="material-symbols-outlined fill-icon">family_restroom</span>
              অভিভাবক হিসেবে যোগ দিন
            </Link>
            <Link
              href="/signup"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <span className="material-symbols-outlined fill-icon">school</span>
              শিক্ষার্থী হিসেবে যোগ দিন
            </Link>
          </div>
          <p className="text-primary-fixed-dim/70 text-sm mt-6">
            ক্রেডিট কার্ড লাগবে না • বিনামূল্যে • ৩০ সেকেন্ডে শুরু
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-inverse-surface py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined fill-icon text-on-primary-fixed" style={{ fontSize: '16px' }}>school</span>
            </div>
            <span className="text-lg font-black text-inverse-on-surface tracking-tight font-headline">BanglaQuest</span>
          </div>
          <div className="flex gap-6 text-inverse-on-surface/60 text-xs font-label tracking-widest uppercase">
            <a href="#" className="hover:text-inverse-on-surface transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-inverse-on-surface transition-colors">Parent Guide</a>
            <a href="#" className="hover:text-inverse-on-surface transition-colors">Support</a>
          </div>
          <p className="text-inverse-on-surface/40 text-xs font-label tracking-wider">
            © 2024 BanglaQuest Education Foundation
          </p>
        </div>
      </footer>
    </div>
  );
}
