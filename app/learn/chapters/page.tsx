'use client';

import { useState } from 'react';
import Link from 'next/link';

const subjects = [
  { id: 'math', label: 'গণিত', icon: 'calculate', color: 'emerald' },
  { id: 'bangla', label: 'বাংলা', icon: 'auto_stories', color: 'amber' },
  { id: 'english', label: 'ইংরেজি', icon: 'translate', color: 'blue' },
  { id: 'science', label: 'বিজ্ঞান', icon: 'science', color: 'purple' },
];

type SubjectId = 'math' | 'bangla' | 'english' | 'science';

const chapters: Record<SubjectId, { id: string; number: number; title: string; subtitle: string; progress: number; xp: number; totalLessons: number; status: 'completed' | 'active' | 'locked' }[]> = {
  math: [
    { id: 'math-1', number: 1, title: 'স্বাভাবিক সংখ্যা ও ভগ্নাংশ', subtitle: 'Natural Numbers & Fractions', progress: 100, xp: 320, totalLessons: 6, status: 'completed' },
    { id: 'math-2', number: 2, title: 'দশমিক ভগ্নাংশ', subtitle: 'Decimal Fractions', progress: 100, xp: 290, totalLessons: 5, status: 'completed' },
    { id: 'math-3', number: 3, title: 'ভগ্নাংশের গসাগু ও লসাগু', subtitle: 'HCF & LCM of Fractions', progress: 65, xp: 180, totalLessons: 7, status: 'active' },
    { id: 'math-4', number: 4, title: 'অনুপাত ও সমানুপাত', subtitle: 'Ratio & Proportion', progress: 0, xp: 0, totalLessons: 6, status: 'locked' },
    { id: 'math-5', number: 5, title: 'শতকরা', subtitle: 'Percentage', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'math-6', number: 6, title: 'সরল সমীকরণ', subtitle: 'Simple Equations', progress: 0, xp: 0, totalLessons: 8, status: 'locked' },
    { id: 'math-7', number: 7, title: 'জ্যামিতি: রেখা ও কোণ', subtitle: 'Geometry: Lines & Angles', progress: 0, xp: 0, totalLessons: 6, status: 'locked' },
    { id: 'math-8', number: 8, title: 'ত্রিভুজ ও চতুর্ভুজ', subtitle: 'Triangles & Quadrilaterals', progress: 0, xp: 0, totalLessons: 7, status: 'locked' },
    { id: 'math-9', number: 9, title: 'বৃত্ত', subtitle: 'Circle', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'math-10', number: 10, title: 'ক্ষেত্রফল ও পরিসীমা', subtitle: 'Area & Perimeter', progress: 0, xp: 0, totalLessons: 6, status: 'locked' },
    { id: 'math-11', number: 11, title: 'পরিসংখ্যান', subtitle: 'Statistics', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'math-12', number: 12, title: 'তথ্য ও যোগাযোগ প্রযুক্তি', subtitle: 'ICT in Math', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
  ],
  bangla: [
    { id: 'bangla-1', number: 1, title: 'গদ্য: আমাদের লোকশিল্প', subtitle: 'Prose: Folk Art of Bangladesh', progress: 100, xp: 280, totalLessons: 5, status: 'completed' },
    { id: 'bangla-2', number: 2, title: 'কবিতা: বাংলাদেশ', subtitle: 'Poetry: Bangladesh', progress: 80, xp: 210, totalLessons: 4, status: 'active' },
    { id: 'bangla-3', number: 3, title: 'ব্যাকরণ: শব্দ ও বাক্য', subtitle: 'Grammar: Words & Sentences', progress: 0, xp: 0, totalLessons: 6, status: 'locked' },
    { id: 'bangla-4', number: 4, title: 'রচনা: পরিবেশ দূষণ', subtitle: 'Essay: Environmental Pollution', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
    { id: 'bangla-5', number: 5, title: 'পত্রলেখন', subtitle: 'Letter Writing', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
    { id: 'bangla-6', number: 6, title: 'গল্প: সুখী মানুষ', subtitle: 'Story: The Happy Man', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'bangla-7', number: 7, title: 'কবিতা: মানবধর্ম', subtitle: 'Poetry: Human Religion', progress: 0, xp: 0, totalLessons: 3, status: 'locked' },
    { id: 'bangla-8', number: 8, title: 'ব্যাকরণ: ক্রিয়া', subtitle: 'Grammar: Verbs', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'bangla-9', number: 9, title: 'নাটক: বহিপীর', subtitle: 'Drama: Bohipir', progress: 0, xp: 0, totalLessons: 6, status: 'locked' },
    { id: 'bangla-10', number: 10, title: 'রচনা: আমার দেশ', subtitle: 'Essay: My Country', progress: 0, xp: 0, totalLessons: 3, status: 'locked' },
    { id: 'bangla-11', number: 11, title: 'বাগধারা ও প্রবাদ', subtitle: 'Idioms & Proverbs', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
    { id: 'bangla-12', number: 12, title: 'সারাংশ ও সারমর্ম', subtitle: 'Précis Writing', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
  ],
  english: [
    { id: 'eng-1', number: 1, title: 'Reading: The Story of Language', subtitle: 'Comprehension & Vocabulary', progress: 100, xp: 260, totalLessons: 5, status: 'completed' },
    { id: 'eng-2', number: 2, title: 'Grammar: Tenses', subtitle: 'Present, Past & Future Tense', progress: 45, xp: 120, totalLessons: 6, status: 'active' },
    { id: 'eng-3', number: 3, title: 'Writing: Paragraph', subtitle: 'Paragraph Writing Skills', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
    { id: 'eng-4', number: 4, title: 'Listening: Conversations', subtitle: 'Audio & Dialogue Practice', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'eng-5', number: 5, title: 'Grammar: Articles & Prepositions', subtitle: 'a, an, the & Prepositions', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'eng-6', number: 6, title: 'Reading: Short Stories', subtitle: 'Story Comprehension', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'eng-7', number: 7, title: 'Writing: Letter Writing', subtitle: 'Formal & Informal Letters', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
    { id: 'eng-8', number: 8, title: 'Grammar: Sentence Structure', subtitle: 'Subject, Predicate & Clauses', progress: 0, xp: 0, totalLessons: 6, status: 'locked' },
    { id: 'eng-9', number: 9, title: 'Vocabulary Building', subtitle: 'Words, Synonyms & Antonyms', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
    { id: 'eng-10', number: 10, title: 'Speaking: Dialogues', subtitle: 'Conversation Practice', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
    { id: 'eng-11', number: 11, title: 'Grammar: Voice & Narration', subtitle: 'Active/Passive & Direct/Indirect', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'eng-12', number: 12, title: 'Writing: Essay & Composition', subtitle: 'Essay Writing Practice', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
  ],
  science: [
    { id: 'sci-1', number: 1, title: 'জীবজগৎ', subtitle: 'The Living World', progress: 100, xp: 300, totalLessons: 6, status: 'completed' },
    { id: 'sci-2', number: 2, title: 'উদ্ভিদের জীবনকার্য', subtitle: 'Functions of Plant Life', progress: 55, xp: 150, totalLessons: 7, status: 'active' },
    { id: 'sci-3', number: 3, title: 'মানবদেহ', subtitle: 'The Human Body', progress: 0, xp: 0, totalLessons: 8, status: 'locked' },
    { id: 'sci-4', number: 4, title: 'পদার্থের অবস্থা', subtitle: 'States of Matter', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'sci-5', number: 5, title: 'শক্তির রূপান্তর', subtitle: 'Energy Transformation', progress: 0, xp: 0, totalLessons: 6, status: 'locked' },
    { id: 'sci-6', number: 6, title: 'আলো ও শব্দ', subtitle: 'Light & Sound', progress: 0, xp: 0, totalLessons: 6, status: 'locked' },
    { id: 'sci-7', number: 7, title: 'রাসায়নিক পরিবর্তন', subtitle: 'Chemical Changes', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'sci-8', number: 8, title: 'বায়ু ও পানি', subtitle: 'Air & Water', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'sci-9', number: 9, title: 'পরিবেশ দূষণ', subtitle: 'Environmental Pollution', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
    { id: 'sci-10', number: 10, title: 'মহাকাশ ও মহাবিশ্ব', subtitle: 'Space & Universe', progress: 0, xp: 0, totalLessons: 6, status: 'locked' },
    { id: 'sci-11', number: 11, title: 'তথ্য প্রযুক্তি', subtitle: 'Information Technology', progress: 0, xp: 0, totalLessons: 4, status: 'locked' },
    { id: 'sci-12', number: 12, title: 'স্বাস্থ্য ও পুষ্টি', subtitle: 'Health & Nutrition', progress: 0, xp: 0, totalLessons: 5, status: 'locked' },
  ],
};

const subjectColors: Record<SubjectId, { bg: string; border: string; text: string; badge: string; bar: string; activeBg: string; activeText: string }> = {
  math:    { bg: 'bg-emerald-50 dark:bg-emerald-950/30',    border: 'border-emerald-200/60 dark:border-emerald-900/40',  text: 'text-emerald-700 dark:text-emerald-400',  badge: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400',    bar: 'bg-emerald-500',  activeBg: 'bg-emerald-600 dark:bg-emerald-600', activeText: 'text-white' },
  bangla:  { bg: 'bg-amber-50 dark:bg-amber-950/30',        border: 'border-amber-200/60 dark:border-amber-900/40',      text: 'text-amber-700 dark:text-amber-400',      badge: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400',          bar: 'bg-amber-500',    activeBg: 'bg-amber-600 dark:bg-amber-600',     activeText: 'text-white' },
  english: { bg: 'bg-blue-50 dark:bg-blue-950/30',          border: 'border-blue-200/60 dark:border-blue-900/40',        text: 'text-blue-700 dark:text-blue-400',        badge: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400',             bar: 'bg-blue-500',     activeBg: 'bg-blue-600 dark:bg-blue-600',       activeText: 'text-white' },
  science: { bg: 'bg-purple-50 dark:bg-purple-950/30',      border: 'border-purple-200/60 dark:border-purple-900/40',    text: 'text-purple-700 dark:text-purple-400',    badge: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400',     bar: 'bg-purple-500',   activeBg: 'bg-purple-600 dark:bg-purple-600',   activeText: 'text-white' },
};

const overallStats = { completedChapters: 5, totalXP: 1870, currentStreak: 15, level: 12 };

export default function ChaptersCatalogPage() {
  const [activeSubject, setActiveSubject] = useState<SubjectId>('math');
  const subjectChapters = chapters[activeSubject];
  const colors = subjectColors[activeSubject];
  const completedCount = subjectChapters.filter(c => c.status === 'completed').length;
  const totalXP = subjectChapters.reduce((sum, c) => sum + c.xp, 0);

  return (
    <div className="flex-1 min-h-screen bg-surface dark:bg-background pb-24 md:pb-8">
      {/* Hero Stats Banner */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 dark:from-emerald-900 dark:to-emerald-800 px-6 py-6 md:py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-white font-headline mb-1">আমার পাঠ্যক্রম</h1>
          <p className="text-emerald-100 text-sm mb-5">শ্রেণী ৭ — ২০২৪ শিক্ষাবর্ষ</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: 'auto_stories', value: `${overallStats.completedChapters}/48`, label: 'অধ্যায় শেষ' },
              { icon: 'stars', value: `${overallStats.totalXP}`, label: 'মোট XP' },
              { icon: 'local_fire_department', value: `${overallStats.currentStreak} দিন`, label: 'স্ট্রিক' },
              { icon: 'military_tech', value: `Level ${overallStats.level}`, label: 'বর্তমান স্তর' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm rounded-2xl p-3 md:p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '18px' }}>{stat.icon}</span>
                </div>
                <div>
                  <p className="text-white font-black text-lg leading-none font-headline">{stat.value}</p>
                  <p className="text-emerald-100 text-[10px] font-label uppercase tracking-wide mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-6">
        {/* Subject Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-6 scrollbar-hide">
          {subjects.map((subject) => {
            const isActive = activeSubject === subject.id;
            const sc = subjectColors[subject.id as SubjectId];
            return (
              <button
                key={subject.id}
                onClick={() => setActiveSubject(subject.id as SubjectId)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all shrink-0 border ${
                  isActive
                    ? `${sc.activeBg} ${sc.activeText} border-transparent shadow-md`
                    : `bg-surface-container-low dark:bg-surface-container border-outline-variant/20 dark:border-green-900/20 text-on-surface-variant hover:${sc.bg}`
                }`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{subject.icon}</span>
                {subject.label}
              </button>
            );
          })}
        </div>

        {/* Subject Progress Summary */}
        <div className={`flex items-center gap-4 p-4 rounded-2xl mb-6 border ${colors.bg} ${colors.border}`}>
          <div className={`w-12 h-12 rounded-2xl ${colors.activeBg} flex items-center justify-center shrink-0`}>
            <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '22px' }}>
              {subjects.find(s => s.id === activeSubject)?.icon}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className={`font-bold text-sm ${colors.text}`}>
              {subjects.find(s => s.id === activeSubject)?.label} — শ্রেণী ৭
            </p>
            <div className="flex items-center gap-3 mt-1.5">
              <div className="flex-1 h-2 rounded-full bg-white/60 dark:bg-surface-container overflow-hidden">
                <div
                  className={`h-full rounded-full ${colors.bar} transition-all duration-700`}
                  style={{ width: `${(completedCount / 12) * 100}%` }}
                />
              </div>
              <span className={`text-xs font-bold whitespace-nowrap ${colors.text}`}>{completedCount}/12 অধ্যায়</span>
            </div>
          </div>
          <div className={`px-3 py-1.5 rounded-xl text-xs font-bold ${colors.badge}`}>
            {totalXP} XP
          </div>
        </div>

        {/* Chapter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectChapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} colors={colors} subjectId={activeSubject} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChapterCard({
  chapter,
  colors,
  subjectId,
}: {
  chapter: { id: string; number: number; title: string; subtitle: string; progress: number; xp: number; totalLessons: number; status: string };
  colors: { bg: string; border: string; text: string; badge: string; bar: string; activeBg: string; activeText: string };
  subjectId: SubjectId;
}) {
  const isLocked = chapter.status === 'locked';
  const isCompleted = chapter.status === 'completed';
  const isActive = chapter.status === 'active';

  return (
    <div className={`relative rounded-2xl border overflow-hidden transition-all duration-200 ${
      isLocked
        ? 'bg-surface-container-low dark:bg-surface-container border-outline-variant/20 dark:border-green-900/10 opacity-70'
        : `bg-surface-container-lowest dark:bg-surface-container ${colors.border} hover:shadow-md hover:-translate-y-0.5`
    }`}>
      {/* Status ribbon */}
      {isCompleted && (
        <div className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${colors.badge}`}>
          <span className="material-symbols-outlined fill-icon" style={{ fontSize: '12px' }}>check_circle</span>
          সম্পূর্ণ
        </div>
      )}
      {isActive && (
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 animate-pulse">
          <span className="material-symbols-outlined fill-icon" style={{ fontSize: '12px' }}>play_circle</span>
          চলমান
        </div>
      )}

      <div className="p-5">
        {/* Chapter number badge */}
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black mb-3 ${
          isLocked ? 'bg-surface-container-high dark:bg-surface-container-high text-on-surface-variant' : `${colors.activeBg} text-white`
        }`}>
          {isLocked ? <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>lock</span> : chapter.number}
        </div>

        <h3 className={`font-bold text-base leading-snug mb-1 font-headline ${
          isLocked ? 'text-on-surface-variant' : 'text-on-surface'
        }`}>
          {chapter.title}
        </h3>
        <p className="text-xs text-on-surface-variant mb-3 font-label">{chapter.subtitle}</p>

        {/* Progress bar */}
        {!isLocked && (
          <div className="mb-3">
            <div className="flex justify-between text-[10px] font-label text-on-surface-variant mb-1">
              <span>{chapter.totalLessons}টি পাঠ</span>
              <span>{chapter.progress}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-surface-container-high dark:bg-surface-container overflow-hidden">
              <div className={`h-full rounded-full ${colors.bar} transition-all duration-700`} style={{ width: `${chapter.progress}%` }} />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-2">
          {chapter.xp > 0 ? (
            <span className={`text-xs font-bold ${colors.text}`}>+{chapter.xp} XP</span>
          ) : (
            <span className="text-xs text-on-surface-variant/60 font-label">{chapter.totalLessons}টি পাঠ</span>
          )}

          {isLocked ? (
            <span className="text-xs text-on-surface-variant/60 font-label">লক</span>
          ) : (
            <Link
              href={`/learn/chapter/${chapter.id}`}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                isCompleted
                  ? `${colors.badge} hover:opacity-80`
                  : `${colors.activeBg} text-white shadow-sm hover:opacity-90`
              }`}
            >
              {isCompleted ? 'পুনরায় পড়ো' : isActive ? 'চালিয়ে যাও' : 'শুরু করো'}
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
