'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type TabId = 'read' | 'summary' | 'topics' | 'guide' | 'audio' | 'quiz' | 'game';

const tabs: { id: TabId; icon: string; label: string }[] = [
  { id: 'read',    icon: 'menu_book',       label: 'NCTB বই' },
  { id: 'summary', icon: 'summarize',       label: 'সারাংশ' },
  { id: 'topics',  icon: 'stars',           label: 'মূল বিষয়' },
  { id: 'guide',   icon: 'help_outline',    label: 'গাইড উত্তর' },
  { id: 'audio',   icon: 'headphones',      label: 'অডিও পাঠ' },
  { id: 'quiz',    icon: 'bolt',            label: 'কুইজ' },
  { id: 'game',    icon: 'videogame_asset', label: 'গেম' },
];

// Mock chapter data — keyed by chapter id
const chapterData: Record<string, {
  title: string;
  subtitle: string;
  subject: string;
  chapterNum: number;
  pdfUrl: string;
  summary: string[];
  keyTopics: { title: string; description: string; icon: string }[];
  guideQA: { question: string; answer: string }[];
  audioSections: { title: string; duration: string }[];
}> = {
  default: {
    title: 'ভগ্নাংশের গসাগু ও লসাগু',
    subtitle: 'HCF & LCM of Fractions',
    subject: 'গণিত',
    chapterNum: 3,
    pdfUrl: 'https://nctb.gov.bd/books/',
    summary: [
      'ভগ্নাংশের গসাগু নির্ণয়ে লবগুলোর গসাগু এবং হরগুলোর লসাগু ব্যবহার করা হয়।',
      'লসাগু নির্ণয়ে লবগুলোর লসাগু এবং হরগুলোর গসাগু ব্যবহার করা হয়।',
      'ভগ্নাংশের সরলীকরণে গসাগু গুরুত্বপূর্ণ ভূমিকা পালন করে।',
      'দুই বা ততোধিক ভগ্নাংশের গসাগু সর্বদা ছোট বা সমান ভগ্নাংশ হয়।',
      'বাস্তব জীবনে ভগ্নাংশের গসাগু ও লসাগু রান্না, নির্মাণ ও বিজ্ঞানে ব্যবহৃত হয়।',
    ],
    keyTopics: [
      { title: 'গসাগু (HCF)', description: 'গরিষ্ঠ সাধারণ গুণনীয়ক — দুই বা ততোধিক সংখ্যার মধ্যে সর্বোচ্চ সংখ্যা যা উভয়কে নিঃশেষে ভাগ করে। সূত্র: ভগ্নাংশের গসাগু = লবগুলোর গসাগু / হরগুলোর লসাগু', icon: 'functions' },
      { title: 'লসাগু (LCM)', description: 'লঘিষ্ঠ সাধারণ গুণিতক — সর্বনিম্ন সংখ্যা যা দুই বা ততোধিক সংখ্যা দ্বারা নিঃশেষে বিভাজ্য। সূত্র: ভগ্নাংশের লসাগু = লবগুলোর লসাগু / হরগুলোর গসাগু', icon: 'calculate' },
      { title: 'ভগ্নাংশ সরলীকরণ', description: 'গসাগু দিয়ে লব ও হর ভাগ করে ভগ্নাংশকে সরলতম রূপে প্রকাশ করা হয়। যেমন: ৬/৯ = ২/৩ (গসাগু ৩ দিয়ে ভাগ করে)', icon: 'compress' },
      { title: 'মৌলিক বিভাজন পদ্ধতি', description: 'কোনো সংখ্যাকে মৌলিক সংখ্যার গুণফল হিসেবে প্রকাশ করে গসাগু ও লসাগু নির্ণয় করার পদ্ধতি। যেমন: ১২ = ২×২×৩, ১৮ = ২×৩×৩', icon: 'account_tree' },
      { title: 'ভাগ পদ্ধতি (Euclidean)', description: 'বড় সংখ্যাকে ছোট সংখ্যা দিয়ে ভাগ করে ভাগশেষ শূন্য না হওয়া পর্যন্ত চালিয়ে যাওয়া হয়। শেষ ভাজকই গসাগু।', icon: 'splitscreen' },
    ],
    guideQA: [
      { question: '১. ৩/৪ এবং ৫/৬ এর গসাগু ও লসাগু নির্ণয় করো।', answer: 'গসাগু = লবগুলোর গসাগু / হরগুলোর লসাগু = গসাগু(৩,৫) / লসাগু(৪,৬) = ১/১২\nলসাগু = লবগুলোর লসাগু / হরগুলোর গসাগু = লসাগু(৩,৫) / গসাগু(৪,৬) = ১৫/২' },
      { question: '২. ২/৩, ৪/৯ এবং ৮/২৭ এর গসাগু নির্ণয় করো।', answer: 'লবগুলোর গসাগু = গসাগু(২,৪,৮) = ২\nহরগুলোর লসাগু = লসাগু(৩,৯,২৭) = ২৭\nসুতরাং, গসাগু = ২/২৭' },
      { question: '৩. কোনো একটি ভগ্নাংশের লব ও হরের গসাগু ১ হলে ভগ্নাংশটিকে কী বলে?', answer: 'যদি লব ও হরের গসাগু ১ হয় তাহলে ভগ্নাংশটিকে সরলতম আকার বা "লঘিষ্ঠ পদের ভগ্নাংশ" বলে। যেমন: ৩/৭ সরলতম আকারে কারণ গসাগু(৩,৭) = ১।' },
      { question: '৪. গসাগু ও লসাগু এর সম্পর্ক লেখো।', answer: 'দুটি সংখ্যা a ও b এর জন্য:\na × b = গসাগু(a,b) × লসাগু(a,b)\nঅর্থাৎ, দুটি সংখ্যার গুণফল = তাদের গসাগু × লসাগু' },
      { question: '৫. ১/২ এবং ১/৩ এর মধ্যে কোনটি বড়? লসাগু ব্যবহার করে দেখাও।', answer: 'হরদুটির লসাগু = লসাগু(২,৩) = ৬\n১/২ = ৩/৬ এবং ১/৩ = ২/৬\nযেহেতু ৩/৬ > ২/৬, তাই ১/২ > ১/৩' },
    ],
    audioSections: [
      { title: 'ভগ্নাংশের প্রাথমিক ধারণা', duration: '৫:৩০' },
      { title: 'গসাগু নির্ণয়ের পদ্ধতি', duration: '৮:১৫' },
      { title: 'লসাগু নির্ণয়ের পদ্ধতি', duration: '৭:৪৫' },
      { title: 'উদাহরণ ও অনুশীলনী', duration: '১২:০০' },
    ],
  },
};

const waveHeights = [12, 20, 32, 24, 16, 28, 12, 20, 8, 24, 16, 12, 20, 28];

export default function ChapterDetailPage() {
  const params = useParams();
  const id = (params?.id as string) ?? 'default';
  const data = chapterData[id] ?? chapterData.default;

  const [activeTab, setActiveTab] = useState<TabId>('read');
  const [expandedQA, setExpandedQA] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingSection, setPlayingSection] = useState<number | null>(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setAudioProgress((p) => (p >= 100 ? 100 : p + 0.15));
      }, 200);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying]);

  return (
    <div className="flex-1 min-h-screen bg-surface dark:bg-background pb-24 md:pb-8">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 dark:from-emerald-900 dark:to-emerald-800 px-6 py-5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-200 text-xs font-label uppercase tracking-widest mb-2">
            <Link href="/learn" className="hover:text-white transition-colors">পাঠ্যক্রম</Link>
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
            <span>{data.subject}</span>
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
            <span>অধ্যায় {data.chapterNum}</span>
          </div>
          <h1 className="text-xl md:text-2xl font-black text-white font-headline leading-tight">
            অধ্যায় {data.chapterNum}: {data.title}
          </h1>
          <p className="text-emerald-200 text-sm mt-1">{data.subtitle}</p>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-16 z-30 bg-surface-container-lowest dark:bg-surface-container border-b border-outline-variant/20 dark:border-green-900/30 shadow-sm">
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 md:px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap border-b-2 transition-all shrink-0 ${
                  activeTab === tab.id
                    ? 'border-emerald-600 dark:border-primary text-emerald-700 dark:text-primary bg-emerald-50/60 dark:bg-emerald-900/20'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low dark:hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-6">

        {/* ── NCTB বই (Read) ── */}
        {activeTab === 'read' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-xl font-bold text-on-surface font-headline">NCTB পাঠ্যবই পড়ুন</h2>
              <a
                href={data.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                নতুন ট্যাবে খুলুন
              </a>
            </div>

            {/* PDF Embed — desktop */}
            <div className="hidden md:block w-full rounded-2xl overflow-hidden border border-outline-variant/20 dark:border-green-900/30 shadow-sm bg-surface-container-low dark:bg-surface-container" style={{ height: '70vh' }}>
              <iframe
                src={data.pdfUrl}
                className="w-full h-full"
                title={`NCTB ${data.subject} Chapter ${data.chapterNum}`}
              />
            </div>

            {/* Mobile PDF fallback */}
            <div className="md:hidden rounded-2xl border border-outline-variant/20 dark:border-green-900/30 bg-surface-container-low dark:bg-surface-container p-8 flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                <span className="material-symbols-outlined fill-icon text-emerald-600" style={{ fontSize: '32px' }}>picture_as_pdf</span>
              </div>
              <div>
                <p className="font-bold text-on-surface mb-1">NCTB পাঠ্যবই — অধ্যায় {data.chapterNum}</p>
                <p className="text-sm text-on-surface-variant">মোবাইলে বইটি পড়তে নিচের বোতামে ক্লিক করুন</p>
              </div>
              <a
                href={data.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>picture_as_pdf</span>
                PDF বই পড়ুন
              </a>
            </div>

            {/* Inline text reader */}
            <div className="rounded-2xl bg-surface-container-lowest dark:bg-surface-container border border-outline-variant/10 dark:border-green-900/20 p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-primary font-headline">পাঠ্যপুস্তকের সারসংক্ষেপ পাঠ</h3>
              <p className="text-on-surface-variant leading-relaxed">
                আমরা জানি, একটি বস্তুকে কয়েকটি সমান ভাগে ভাগ করে তার কয়েক অংশ নেওয়া হলে তা একটি ভগ্নাংশ।
                যেমন, একটি আয়তাকার কাগজকে সমান ৩ ভাগে ভাগ করে ২ ভাগ রং করলে সেটি <strong className="text-primary">২/৩</strong>।
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-600 rounded-r-xl p-5">
                <p className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">সূত্র মনে রাখো:</p>
                <div className="text-center font-bold text-lg text-emerald-900 dark:text-emerald-200">
                  ভগ্নাংশের গসাগু = <span className="underline">লবগুলোর গসাগু</span> / <span className="underline">হরগুলোর লসাগু</span>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                উদাহরণ: ১/২ এবং ১/৩ এর গসাগু হবে গসাগু(১,১) / লসাগু(২,৩) = ১/৬।
                এবং লসাগু হবে লসাগু(১,১) / গসাগু(২,৩) = ১/১।
              </p>
            </div>
          </div>
        )}

        {/* ── সারাংশ (Summary) ── */}
        {activeTab === 'summary' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-on-surface font-headline">অধ্যায় সারাংশ</h2>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 rounded-2xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '16px' }}>info</span>
                </div>
                <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
                  এই সারাংশটি অধ্যায়ের মূল বিষয়বস্তু দ্রুত পুনরাবৃত্তির জন্য। বিস্তারিত পড়তে NCTB বই ট্যাব দেখুন।
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {data.summary.map((point, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-surface-container-lowest dark:bg-surface-container rounded-xl border border-outline-variant/15 dark:border-green-900/20 hover:shadow-sm transition-shadow">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-black text-emerald-700 dark:text-emerald-400">{i + 1}</span>
                  </div>
                  <p className="text-on-surface leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-surface-container-lowest dark:bg-surface-container rounded-2xl border border-outline-variant/15 dark:border-green-900/20">
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3">এই অধ্যায়ে যা শিখবে</p>
              <div className="flex flex-wrap gap-2">
                {['গসাগু নির্ণয়', 'লসাগু নির্ণয়', 'মৌলিক বিভাজন', 'ভাগ পদ্ধতি', 'প্রায়োগিক সমস্যা'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── মূল বিষয় (Key Topics) ── */}
        {activeTab === 'topics' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-on-surface font-headline">মূল বিষয়সমূহ</h2>
            <div className="grid gap-4">
              {data.keyTopics.map((topic, i) => (
                <div key={i} className="bg-surface-container-lowest dark:bg-surface-container rounded-2xl border border-outline-variant/15 dark:border-green-900/20 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined fill-icon text-emerald-600 dark:text-emerald-400" style={{ fontSize: '20px' }}>{topic.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-on-surface mb-2 font-headline">{topic.title}</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">{topic.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 p-5 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200/60 dark:border-amber-900/30">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined fill-icon text-amber-500" style={{ fontSize: '22px' }}>lightbulb</span>
                <div>
                  <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">মনে রাখার টিপস</p>
                  <p className="text-sm text-amber-700 dark:text-amber-400">গসাগু → গ = গরিষ্ঠ (বড়), সা = সাধারণ, গু = গুণনীয়ক। লসাগু → ল = লঘিষ্ঠ (ছোট), সা = সাধারণ, গু = গুণিতক।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── গাইড উত্তর (Guide Answers) ── */}
        {activeTab === 'guide' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <h2 className="text-xl font-bold text-on-surface font-headline">গাইড বইয়ের উত্তর</h2>
              <span className="text-xs font-label text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">{data.guideQA.length}টি প্রশ্ন</span>
            </div>
            {data.guideQA.map((qa, i) => (
              <div key={i} className="rounded-2xl border border-outline-variant/20 dark:border-green-900/20 overflow-hidden">
                <button
                  onClick={() => setExpandedQA(expandedQA === i ? null : i)}
                  className="w-full flex items-start justify-between gap-3 p-5 text-left hover:bg-surface-container-low dark:hover:bg-surface-container transition-colors"
                >
                  <p className="font-semibold text-on-surface leading-snug flex-1">{qa.question}</p>
                  <span className={`material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-200 ${expandedQA === i ? 'rotate-180' : ''}`} style={{ fontSize: '20px' }}>
                    expand_more
                  </span>
                </button>
                {expandedQA === i && (
                  <div className="px-5 pb-5 border-t border-outline-variant/15 dark:border-green-900/20 bg-emerald-50/50 dark:bg-emerald-950/20">
                    <div className="flex items-start gap-3 pt-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '14px' }}>check</span>
                      </div>
                      <p className="text-sm text-on-surface leading-relaxed whitespace-pre-line">{qa.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── অডিও পাঠ (Audio) ── */}
        {activeTab === 'audio' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-on-surface font-headline">অডিও পাঠ</h2>

            {/* Active player */}
            {playingSection !== null && (
              <div className="bg-emerald-700 dark:bg-emerald-900 rounded-2xl p-5 text-white mb-2">
                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors shrink-0"
                  >
                    <span className="material-symbols-outlined fill-icon" style={{ fontSize: '24px' }}>{isPlaying ? 'pause' : 'play_arrow'}</span>
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold truncate">{data.audioSections[playingSection].title}</p>
                    <p className="text-emerald-200 text-xs">{data.audioSections[playingSection].duration}</p>
                  </div>
                  <button onClick={() => { setPlayingSection(null); setIsPlaying(false); setAudioProgress(0); }} className="text-white/60 hover:text-white transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
                  </button>
                </div>
                {/* Waveform */}
                <div className="flex items-end gap-1 h-8 mb-3">
                  {waveHeights.map((h, i) => (
                    <div key={i} className="w-[3px] rounded-full bg-white/60"
                      style={{ height: isPlaying ? undefined : `${h}px`, animation: isPlaying ? `waveform ${0.8 + i * 0.1}s ease-in-out infinite` : undefined, animationDelay: `${i * 0.08}s` }}
                    />
                  ))}
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full transition-all duration-200" style={{ width: `${audioProgress}%` }} />
                </div>
              </div>
            )}

            {/* Section list */}
            <div className="space-y-3">
              {data.audioSections.map((section, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                  playingSection === i
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700'
                    : 'bg-surface-container-lowest dark:bg-surface-container border-outline-variant/15 dark:border-green-900/20 hover:border-emerald-300 dark:hover:border-emerald-800'
                }`}
                  onClick={() => { setPlayingSection(i); setIsPlaying(true); setAudioProgress(0); }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    playingSection === i ? 'bg-emerald-600 text-white' : 'bg-surface-container-high dark:bg-surface-container-high text-on-surface-variant'
                  }`}>
                    <span className="material-symbols-outlined fill-icon" style={{ fontSize: '18px' }}>
                      {playingSection === i && isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-on-surface text-sm">{section.title}</p>
                    <p className="text-xs text-on-surface-variant">{section.duration}</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '18px' }}>headphones</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── কুইজ (Quiz) ── */}
        {activeTab === 'quiz' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-on-surface font-headline">কুইজ অনুশীলন</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'MCQ কুইজ', desc: 'বহুনির্বাচনী প্রশ্নের মাধ্যমে অনুশীলন', icon: 'quiz', href: '/learn/quiz/mcq', color: 'emerald', badge: '১৫টি প্রশ্ন' },
                { title: 'ইন্টারেক্টিভ কুইজ', desc: 'টেনে মেলাও এবং পূরণ করো', icon: 'touch_app', href: '/learn/quiz/interactive', color: 'blue', badge: '১০টি প্রশ্ন' },
                { title: 'কুইজ শুরু করো', desc: 'সম্পূর্ণ অধ্যায়ের কুইজ দাও', icon: 'bolt', href: '/learn/quiz/start', color: 'amber', badge: '২০টি প্রশ্ন' },
                { title: 'ডেইলি চ্যালেঞ্জ', desc: 'আজকের বিশেষ চ্যালেঞ্জ', icon: 'local_fire_department', href: '/learn/daily-challenge', color: 'red', badge: 'নতুন!' },
              ].map((item) => (
                <Link key={item.title} href={item.href}
                  className="flex items-start gap-4 p-5 bg-surface-container-lowest dark:bg-surface-container rounded-2xl border border-outline-variant/15 dark:border-green-900/20 hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-${item.color}-100 dark:bg-${item.color}-900/40`}>
                    <span className={`material-symbols-outlined fill-icon text-${item.color}-600 dark:text-${item.color}-400`} style={{ fontSize: '22px' }}>{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-on-surface">{item.title}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/40 text-${item.color}-700 dark:text-${item.color}-400`}>{item.badge}</span>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-0.5">{item.desc}</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '18px' }}>arrow_forward</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── গেম (Game) ── */}
        {activeTab === 'game' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-on-surface font-headline">মজার গেমস</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'মিনি গেমস', desc: 'মজার মিনি গেমের মাধ্যমে গণিত শিখুন', icon: 'videogame_asset', href: '/learn/mini-game', gradient: 'from-purple-500 to-indigo-600', xp: '+150 XP' },
                { title: 'লেভেল-আপ চ্যালেঞ্জ', desc: 'পরের লেভেলে উঠতে চ্যালেঞ্জ নাও', icon: 'military_tech', href: '/learn/level-up', gradient: 'from-amber-500 to-orange-600', xp: '+250 XP' },
              ].map((game) => (
                <Link key={game.title} href={game.href}
                  className={`relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br ${game.gradient} text-white hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg`}>
                  <div className="absolute top-3 right-3 text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">{game.xp}</div>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined fill-icon text-white" style={{ fontSize: '24px' }}>{game.icon}</span>
                  </div>
                  <p className="font-bold text-lg font-headline">{game.title}</p>
                  <p className="text-white/80 text-sm mt-1">{game.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-white/90 text-sm font-bold">
                    খেলতে শুরু করো
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
