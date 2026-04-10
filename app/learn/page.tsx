'use client';

import Link from 'next/link';

const continueLearning = {
  subject: 'গণিত',
  subjectIcon: 'calculate',
  subjectColor: 'emerald',
  chapter: 'অধ্যায় ৩: ভগ্নাংশের গসাগু ও লসাগু',
  chapterId: 'math-3',
  progress: 65,
  lastLesson: 'লেসন ৪ — লসাগু নির্ণয়',
  xpToNext: 70,
};

const subjectProgress = [
  { id: 'math', label: 'গণিত', icon: 'calculate', completed: 2, total: 12, color: 'emerald', xp: 610 },
  { id: 'bangla', label: 'বাংলা', icon: 'auto_stories', completed: 1, total: 12, color: 'amber', xp: 280 },
  { id: 'english', label: 'ইংরেজি', icon: 'translate', completed: 1, total: 12, color: 'blue', xp: 260 },
  { id: 'science', label: 'বিজ্ঞান', icon: 'science', completed: 1, total: 12, color: 'purple', xp: 300 },
];

const recentActivity = [
  { label: 'গণিত কুইজ সম্পন্ন', sub: 'অধ্যায় ২ · ৯০% স্কোর', icon: 'quiz', time: '২ ঘণ্টা আগে', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40' },
  { label: 'বাংলা পাঠ শেষ', sub: 'অধ্যায় ১ · ৫টি পাঠ', icon: 'menu_book', time: 'গতকাল', color: 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40' },
  { label: 'মিনি গেম খেলেছ', sub: 'Memory Match · Level 3', icon: 'videogame_asset', time: 'গতকাল', color: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40' },
];

const colorMap: Record<string, { bar: string; bg: string; text: string; badge: string; icon: string }> = {
  emerald: { bar: 'bg-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-400', badge: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400', icon: 'bg-emerald-600' },
  amber:   { bar: 'bg-amber-500',   bg: 'bg-amber-50 dark:bg-amber-950/30',     text: 'text-amber-700 dark:text-amber-400',     badge: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400',       icon: 'bg-amber-600' },
  blue:    { bar: 'bg-blue-500',    bg: 'bg-blue-50 dark:bg-blue-950/30',       text: 'text-blue-700 dark:text-blue-400',       badge: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400',           icon: 'bg-blue-600' },
  purple:  { bar: 'bg-purple-500',  bg: 'bg-purple-50 dark:bg-purple-950/30',   text: 'text-purple-700 dark:text-purple-400',   badge: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400',   icon: 'bg-purple-600' },
};

export default function LearnHomePage() {
  const c = colorMap[continueLearning.subjectColor];

  return (
    <div className="min-h-screen bg-surface dark:bg-background pb-24 md:pb-8">

      {/* ── Greeting hero ── */}
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600
        dark:from-[#0a2e1a] dark:via-emerald-900 dark:to-teal-950
        px-6 py-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-emerald-100 text-sm font-label mb-1">শুভ বিকাল, রাহেলা 👋</p>
          <h1 className="text-2xl md:text-3xl font-black text-white font-headline mb-5">
            আজ কী পড়তে চাও?
          </h1>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: 'local_fire_department', value: '১৫ দিন', label: 'স্ট্রিক', iconColor: 'text-orange-300' },
              { icon: 'stars', value: '১,৮৭০', label: 'মোট XP', iconColor: 'text-amber-300' },
              { icon: 'military_tech', value: 'Level 12', label: 'বর্তমান স্তর', iconColor: 'text-yellow-300' },
            ].map((s, i) => (
              <div key={i} className="bg-white/12 backdrop-blur-sm rounded-2xl px-3 py-3 flex items-center gap-2.5">
                <span className={`material-symbols-outlined fill-icon ${s.iconColor}`} style={{ fontSize: '22px' }}>{s.icon}</span>
                <div>
                  <p className="text-white font-black text-base leading-none font-headline">{s.value}</p>
                  <p className="text-emerald-100 text-[10px] font-label uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-6 space-y-8">

        {/* ── Continue learning ── */}
        <section>
          <h2 className="text-base font-black text-on-surface font-headline mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined fill-icon text-emerald-600 dark:text-emerald-400 text-[20px]">play_circle</span>
            চালিয়ে যাও
          </h2>
          <div className={`rounded-2xl border p-5 ${c.bg} ${c.text.replace('text-', 'border-').replace('dark:text-', 'dark:border-').replace('700', '200/60').replace('400', '800/40')}`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl ${c.icon} flex items-center justify-center shrink-0`}>
                <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '22px' }}>
                  {continueLearning.subjectIcon}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-bold uppercase tracking-widest ${c.text} mb-0.5`}>{continueLearning.subject}</p>
                <h3 className="font-bold text-on-surface text-base leading-snug font-headline">{continueLearning.chapter}</h3>
                <p className="text-xs text-on-surface-variant font-label mt-0.5">{continueLearning.lastLesson}</p>
                <div className="mt-3">
                  <div className="flex justify-between text-[10px] font-label text-on-surface-variant mb-1.5">
                    <span>অগ্রগতি</span>
                    <span>{continueLearning.progress}% · {continueLearning.xpToNext} XP বাকি</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/60 dark:bg-surface-container overflow-hidden">
                    <div className={`h-full rounded-full ${c.bar} transition-all duration-700`} style={{ width: `${continueLearning.progress}%` }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Link
                href={`/learn/chapter/${continueLearning.chapterId}`}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm text-white ${c.icon} shadow hover:opacity-90 active:scale-95 transition-all`}
              >
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: '18px' }}>play_arrow</span>
                চালিয়ে যাও
              </Link>
              <Link
                href="/learn/chapters"
                className="px-4 py-2.5 rounded-xl font-bold text-sm border border-current text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100/60 dark:hover:bg-emerald-900/20 transition-colors"
              >
                সব অধ্যায়
              </Link>
            </div>
          </div>
        </section>

        {/* ── Quick actions ── */}
        <section>
          <h2 className="text-base font-black text-on-surface font-headline mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined fill-icon text-emerald-600 dark:text-emerald-400 text-[20px]">flash_on</span>
            দ্রুত শুরু
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: '/learn/daily-challenge', icon: 'bolt', label: 'ডেইলি চ্যালেঞ্জ', sub: 'আজকের চ্যালেঞ্জ', bg: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200/60 dark:border-orange-900/40', text: 'text-orange-700 dark:text-orange-400', iconBg: 'bg-orange-500' },
              { href: '/learn/quiz/start', icon: 'quiz', label: 'কুইজ শুরু', sub: 'জ্ঞান যাচাই', bg: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200/60 dark:border-emerald-900/40', text: 'text-emerald-700 dark:text-emerald-400', iconBg: 'bg-emerald-600' },
              { href: '/learn/mini-game', icon: 'videogame_asset', label: 'মিনি গেম', sub: 'খেলে শেখো', bg: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200/60 dark:border-blue-900/40', text: 'text-blue-700 dark:text-blue-400', iconBg: 'bg-blue-600' },
              { href: '/learn/lesson', icon: 'record_voice_over', label: 'ভয়েস পাঠ', sub: 'শুনে শেখো', bg: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200/60 dark:border-purple-900/40', text: 'text-purple-700 dark:text-purple-400', iconBg: 'bg-purple-600' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col gap-3 p-4 rounded-2xl border hover:shadow-md hover:-translate-y-0.5 transition-all ${item.bg}`}
              >
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                  <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '20px' }}>{item.icon}</span>
                </div>
                <div>
                  <p className={`font-bold text-sm ${item.text}`}>{item.label}</p>
                  <p className="text-[11px] text-on-surface-variant font-label mt-0.5">{item.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Subject overview ── */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-black text-on-surface font-headline flex items-center gap-2">
              <span className="material-symbols-outlined fill-icon text-emerald-600 dark:text-emerald-400 text-[20px]">bar_chart</span>
              বিষয়ভিত্তিক অগ্রগতি
            </h2>
            <Link href="/learn/chapters" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
              সব দেখো
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {subjectProgress.map((subj) => {
              const sc = colorMap[subj.color];
              const pct = Math.round((subj.completed / subj.total) * 100);
              return (
                <Link
                  key={subj.id}
                  href="/learn/chapters"
                  className={`flex items-center gap-3 p-4 rounded-2xl border hover:shadow-sm transition-all ${sc.bg} border-current/10`}
                >
                  <div className={`w-10 h-10 rounded-xl ${sc.icon} flex items-center justify-center shrink-0`}>
                    <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '20px' }}>{subj.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-sm leading-tight ${sc.text}`}>{subj.label}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="flex-1 h-1.5 rounded-full bg-white/70 dark:bg-surface-container overflow-hidden">
                        <div className={`h-full rounded-full ${sc.bar}`} style={{ width: `${pct}%` }} />
                      </div>
                      <span className={`text-[10px] font-bold whitespace-nowrap ${sc.text}`}>{subj.completed}/{subj.total}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Recent activity ── */}
        <section>
          <h2 className="text-base font-black text-on-surface font-headline mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined fill-icon text-emerald-600 dark:text-emerald-400 text-[20px]">history</span>
            সাম্প্রতিক কার্যক্রম
          </h2>
          <div className="bg-surface-container-lowest dark:bg-surface-container rounded-2xl border border-outline-variant/20 dark:border-green-900/20 divide-y divide-outline-variant/10 dark:divide-green-900/20">
            {recentActivity.map((act, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3.5">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${act.color}`}>
                  <span className="material-symbols-outlined fill-icon text-[18px]">{act.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-on-surface leading-tight">{act.label}</p>
                  <p className="text-xs text-on-surface-variant font-label mt-0.5">{act.sub}</p>
                </div>
                <span className="text-[10px] text-on-surface-variant font-label whitespace-nowrap shrink-0">{act.time}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
