'use client';

import { useState } from 'react';
import Link from 'next/link';

const fractions = [
  { id: 'half', label: '১/২', numerator: '১', denominator: '২' },
  { id: 'threequarters', label: '৩/৪', numerator: '৩', denominator: '৪' },
  { id: 'quarter', label: '১/৪', numerator: '১', denominator: '৪' },
  { id: 'twothirds', label: '২/৩', numerator: '২', denominator: '৩' },
];

const targets = [
  { id: 'pizza', label: 'পিজ্জা', pct: 50, correct: 'half', color: '#006400' },
  { id: 'cake', label: 'কেক', pct: 75, correct: 'threequarters', color: '#004900' },
];

export default function InteractiveQuizPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [verified, setVerified] = useState(false);
  const [dragging, setDragging] = useState<string | null>(null);

  const handleDragStart = (id: string) => setDragging(id);
  const handleDrop = (targetId: string) => {
    if (!dragging) return;
    setAnswers((prev) => ({ ...prev, [targetId]: dragging }));
    setDragging(null);
  };

  const handleVerify = () => setVerified(true);

  const allCorrect = targets.every((t) => answers[t.id] === t.correct);
  const getAnswerFraction = (targetId: string) => fractions.find((f) => f.id === answers[targetId]);

  return (
    <div className="min-h-screen bg-surface-dim">
      <main className="max-w-5xl mx-auto p-4 md:p-8">
        {/* Progress Header */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-1">সঠিক ভগ্নাংশ মিলান</h1>
              <p className="text-on-surface-variant font-medium">নিচের ছবিগুলোর সাথে সঠিক ভগ্নাংশটি টেনে এনে বসান।</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-label font-bold text-primary tracking-wider uppercase">অংশ ৫ / ১০</span>
            </div>
          </div>
          <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full w-[50%] bg-gradient-to-r from-primary to-primary-container transition-all duration-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Draggable Fractions */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold font-label text-outline uppercase tracking-widest mb-4">ভগ্নাংশসমূহ</h3>
            {fractions.map((f) => {
              const isUsed = Object.values(answers).includes(f.id);
              return (
                <div
                  key={f.id}
                  draggable={!isUsed && !verified}
                  onDragStart={() => handleDragStart(f.id)}
                  className={`p-5 bg-surface-container-lowest rounded-xl editorial-shadow border-b-4 transition-all ${
                    isUsed
                      ? 'opacity-30 cursor-not-allowed border-transparent'
                      : 'cursor-grab active:cursor-grabbing border-transparent hover:border-primary hover:scale-105'
                  }`}
                >
                  <div className="flex flex-col items-center justify-center font-headline text-3xl font-extrabold text-primary select-none">
                    <span>{f.numerator}</span>
                    <div className="w-8 h-0.5 bg-primary my-1" />
                    <span>{f.denominator}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Target Cards */}
          <div className="lg:col-span-9 bg-surface-container-lowest rounded-[2rem] p-8 md:p-10 editorial-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full -ml-16 -mb-16 blur-3xl" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              {targets.map((target) => {
                const answer = getAnswerFraction(target.id);
                const isCorrect = verified && answers[target.id] === target.correct;
                const isWrong = verified && answers[target.id] && answers[target.id] !== target.correct;

                return (
                  <div key={target.id} className="flex flex-col items-center gap-4">
                    {/* Visual Fraction */}
                    <div className="w-full aspect-square bg-surface-container-low rounded-2xl flex items-center justify-center p-6">
                      <div className="relative w-40 h-40 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          <circle cx="50" cy="50" r="45" fill="#edeeef" />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke={target.color}
                            strokeWidth="45"
                            strokeDasharray={`${target.pct * 2.827} ${100 * 2.827}`}
                            strokeDashoffset="0"
                          />
                          <circle cx="50" cy="50" r="22" fill="white" />
                        </svg>
                        <div className="absolute text-xs font-bold text-primary text-center">
                          {target.pct}%<br />
                          <span className="text-on-surface-variant font-normal">{target.label}</span>
                        </div>
                      </div>
                    </div>

                    {/* Drop Zone */}
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={() => handleDrop(target.id)}
                      className={`w-full h-20 border-2 border-dashed rounded-xl flex items-center justify-center transition-all ${
                        isCorrect
                          ? 'border-primary bg-primary-fixed/30'
                          : isWrong
                          ? 'border-error bg-error-container/30'
                          : answer
                          ? 'border-primary-container bg-primary/5'
                          : 'border-outline-variant hover:border-primary hover:bg-primary/5'
                      }`}
                    >
                      {answer ? (
                        <div className="flex flex-col items-center font-headline text-2xl font-extrabold text-primary">
                          <span>{answer.numerator}</span>
                          <div className="w-6 h-0.5 bg-primary my-0.5" />
                          <span>{answer.denominator}</span>
                        </div>
                      ) : (
                        <span className="text-outline font-medium text-sm">এখানে টেনে আনুন</span>
                      )}
                      {isCorrect && (
                        <span className="material-symbols-outlined fill-icon text-primary ml-2">check_circle</span>
                      )}
                      {isWrong && (
                        <span className="material-symbols-outlined fill-icon text-error ml-2">cancel</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feedback */}
            {verified && (
              <div className={`mt-8 p-4 rounded-xl ${allCorrect ? 'bg-primary-fixed/30' : 'bg-error-container/30'}`}>
                <p className={`font-bold text-center ${allCorrect ? 'text-primary' : 'text-error'}`}>
                  {allCorrect ? '🎉 চমৎকার! সব উত্তর সঠিক!' : '❌ কিছু উত্তর ভুল। আবার চেষ্টা করো।'}
                </p>
              </div>
            )}

            {/* Footer Action */}
            <div className="mt-10 pt-6 border-t border-surface-container flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-white">
                  <span className="material-symbols-outlined fill-icon">lightbulb</span>
                </div>
                <p className="text-on-surface-variant text-sm max-w-xs">সাহায্য দরকার? পিজ্জার অর্ধেক = ১/২!</p>
              </div>
              {!verified ? (
                <button
                  onClick={handleVerify}
                  disabled={Object.keys(answers).length < targets.length}
                  className="w-full md:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-label font-bold text-sm tracking-widest uppercase editorial-shadow hover:translate-y-[-2px] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  যাচাই করুন
                </button>
              ) : (
                <Link
                  href="/learn/quiz/feedback"
                  className="w-full md:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-label font-bold text-sm tracking-widest uppercase editorial-shadow hover:translate-y-[-2px] active:scale-95 transition-all text-center"
                >
                  পরবর্তী ধাপ →
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
