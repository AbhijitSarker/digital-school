'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const questions = [
  {
    q: `'বই পড়া' প্রবন্ধে প্রাবন্ধিক কোন বিষয়ের ওপর সবচেয়ে বেশি গুরুত্ব দিয়েছেন?`,
    options: ['লাইব্রেরি প্রতিষ্ঠা', 'পার্থিব উন্নতি', 'পরীক্ষায় পাস', 'টাকা উপার্জন'],
    correct: 0,
  },
  {
    q: `ভগ্নাংশ ৩/৪ এবং ৫/৬ এর গসাগু কত?`,
    options: ['১/১২', '১/৬', '১/৪', '১/২'],
    correct: 0,
  },
  {
    q: `'সমতুল ভগ্নাংশ' বলতে কী বোঝায়?`,
    options: [
      'একই মান কিন্তু ভিন্ন রূপের ভগ্নাংশ',
      'সমান লব বিশিষ্ট ভগ্নাংশ',
      'সমান হর বিশিষ্ট ভগ্নাংশ',
      'পূর্ণ সংখ্যার ভগ্নাংশ',
    ],
    correct: 0,
  },
];

const LABELS = ['ক', 'খ', 'গ', 'ঘ'];
const TOTAL_TIME = 30;

export default function MCQPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentQ];
  const totalQuestions = 15;
  const questionNumber = currentQ + 4;
  const overallProgress = (questionNumber / totalQuestions) * 100;

  const goNext = useCallback(() => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setRevealed(false);
      setTimeLeft(TOTAL_TIME);
      setShowHint(false);
    } else {
      router.push('/learn/quiz/feedback');
    }
  }, [currentQ, router]);

  useEffect(() => {
    if (revealed) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setRevealed(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [revealed, currentQ]);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    if (idx === question.correct) setScore((s) => s + 1);
  };

  const timerPct = (timeLeft / TOTAL_TIME) * 100;
  const timerColor = timeLeft > 15 ? 'text-on-surface' : timeLeft > 8 ? 'text-tertiary' : 'text-secondary';

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
        {/* Progress & Timer */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/70">বর্তমান প্রশ্ন</span>
              <h2 className="text-3xl font-headline font-bold text-primary">
                {questionNumber}{' '}
                <span className="text-lg text-on-surface-variant font-normal">/ {totalQuestions}</span>
              </h2>
            </div>
            <div className={`flex items-center gap-3 bg-surface-container-high px-4 py-2 rounded-xl ${timerColor}`}>
              <span className="material-symbols-outlined">timer</span>
              <span className="text-xl font-headline font-extrabold">
                00:{timeLeft.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-container transition-all duration-500 ease-out relative"
              style={{ width: `${overallProgress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
            </div>
          </div>
          {/* Timer mini bar */}
          <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 rounded-full ${
                timeLeft > 15 ? 'bg-primary' : timeLeft > 8 ? 'bg-tertiary-fixed-dim' : 'bg-secondary'
              }`}
              style={{ width: `${timerPct}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-headline font-extrabold text-on-surface leading-tight text-center max-w-2xl mx-auto">
            {question.q}
          </h3>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {question.options.map((opt, idx) => {
            const isCorrect = idx === question.correct;
            const isSelected = idx === selected;
            let cls =
              'group relative flex items-center gap-5 p-5 md:p-6 text-left rounded-xl shadow-sm transition-all cursor-pointer ';

            if (!revealed) {
              cls += 'bg-surface-container-lowest hover:shadow-md hover:bg-surface-container-low border border-transparent hover:border-outline-variant/30';
            } else if (isCorrect) {
              cls += 'bg-primary-fixed ring-2 ring-primary scale-[1.02]';
            } else if (isSelected && !isCorrect) {
              cls += 'bg-error-container ring-2 ring-error';
            } else {
              cls += 'bg-surface-container-lowest opacity-50';
            }

            return (
              <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={revealed}>
                <span
                  className={`flex items-center justify-center w-11 h-11 rounded-full font-headline font-bold text-xl transition-colors ${
                    !revealed
                      ? 'bg-surface-container-highest text-on-surface-variant group-hover:bg-primary-container group-hover:text-white'
                      : isCorrect
                      ? 'bg-primary text-white'
                      : isSelected
                      ? 'bg-error text-white'
                      : 'bg-surface-container-highest text-on-surface-variant'
                  }`}
                >
                  {LABELS[idx]}
                </span>
                <span className="text-lg font-semibold text-on-surface flex-1">{opt}</span>
                {revealed && isCorrect && (
                  <span className="material-symbols-outlined fill-icon text-primary text-2xl absolute top-3 right-3">
                    check_circle
                  </span>
                )}
                {revealed && isSelected && !isCorrect && (
                  <span className="material-symbols-outlined fill-icon text-error text-2xl absolute top-3 right-3">
                    cancel
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Hint */}
        {showHint && (
          <div className="mb-6 p-4 bg-tertiary-fixed/30 rounded-xl border-l-4 border-tertiary">
            <p className="text-tertiary font-medium text-sm">
              💡 ইঙ্গিত: লাইব্রেরি ও বই পড়ার গুরুত্ব নিয়ে চিন্তা করো।
            </p>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/15">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-2 px-5 py-3 font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">lightbulb</span>
            ইঙ্গিত দেখুন
          </button>
          <div className="flex gap-3">
            {!revealed && (
              <button
                onClick={goNext}
                className="px-6 py-3 font-bold text-on-surface-variant bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors active:scale-95"
              >
                এড়িয়ে যান
              </button>
            )}
            <button
              onClick={goNext}
              disabled={!revealed}
              className={`px-8 py-3 font-headline font-bold text-lg text-white rounded-xl shadow-lg transition-all ${
                revealed
                  ? 'bg-gradient-to-br from-primary to-primary-container shadow-primary-container/20 hover:opacity-90 active:scale-95'
                  : 'bg-surface-container-highest text-on-surface-variant cursor-not-allowed'
              }`}
            >
              {currentQ < questions.length - 1 ? 'পরবর্তী' : 'মধ্যবর্তী রিপোর্ট'}
            </button>
          </div>
        </div>
      </main>

      {/* Decorative Backgrounds */}
      <div className="fixed top-20 right-[-100px] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-[-50px] w-[300px] h-[300px] bg-secondary-container/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
    </div>
  );
}
