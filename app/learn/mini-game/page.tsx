'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Card = {
  id: number;
  pairId: number;
  content: string;
  isText: boolean;
  flipped: boolean;
  matched: boolean;
};

const PAIRS = [
  { id: 1, term: 'সালোকসংশ্লেষণ', match: 'অক্সিজেন ত্যাগ' },
  { id: 2, term: 'কোষ প্রাচীর', match: 'উদ্ভিদ রক্ষা' },
  { id: 3, term: 'ক্লোরোফিল', match: 'সবুজ রঞ্জক' },
  { id: 4, term: 'মাইটোকন্ড্রিয়া', match: 'শক্তি উৎপাদন' },
  { id: 5, term: 'নিউক্লিয়াস', match: 'কোষের মস্তিষ্ক' },
  { id: 6, term: 'রাইবোসোম', match: 'প্রোটিন সংশ্লেষণ' },
];

function createCards(): Card[] {
  const cards: Card[] = [];
  PAIRS.forEach((pair) => {
    cards.push({ id: pair.id * 2 - 1, pairId: pair.id, content: pair.term, isText: true, flipped: false, matched: false });
    cards.push({ id: pair.id * 2, pairId: pair.id, content: pair.match, isText: false, flipped: false, matched: false });
  });
  return cards.sort(() => Math.random() - 0.5);
}

export default function MiniGamePage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(165);
  const [gameWon, setGameWon] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setCards(createCards());
  }, []);

  useEffect(() => {
    if (gameWon) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 0) { clearInterval(timer); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameWon]);

  const handleCardClick = (cardId: number) => {
    if (isProcessing) return;
    const card = cards.find((c) => c.id === cardId);
    if (!card || card.flipped || card.matched) return;
    if (flipped.includes(cardId)) return;

    const newFlipped = [...flipped, cardId];
    setCards((prev) => prev.map((c) => c.id === cardId ? { ...c, flipped: true } : c));
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setIsProcessing(true);
      setMoves((m) => m + 1);
      const [first, second] = newFlipped.map((id) => cards.find((c) => c.id === id)!);
      if (first.pairId === second.pairId) {
        setTimeout(() => {
          setCards((prev) => prev.map((c) => newFlipped.includes(c.id) ? { ...c, matched: true } : c));
          setScore((s) => s + 100);
          setFlipped([]);
          setIsProcessing(false);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 2000);
        }, 600);
      } else {
        setTimeout(() => {
          setCards((prev) => prev.map((c) => newFlipped.includes(c.id) ? { ...c, flipped: false } : c));
          setFlipped([]);
          setLives((l) => Math.max(0, l - 1));
          setIsProcessing(false);
        }, 900);
      }
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.matched)) {
      setGameWon(true);
    }
  }, [cards]);

  const resetGame = () => {
    setCards(createCards());
    setFlipped([]);
    setScore(0);
    setMoves(0);
    setLives(3);
    setTimeLeft(165);
    setGameWon(false);
  };

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-surface-dim">
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Game Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
          <div>
            <nav className="flex gap-2 text-xs text-on-surface-variant mb-2">
              <Link href="/learn" className="font-label tracking-wider opacity-60 hover:opacity-100">BANGLAQUEST /</Link>
              <span className="font-label tracking-wider opacity-60">বিজ্ঞান /</span>
              <span className="font-label tracking-wider text-primary font-bold">স্মৃতি কার্ড খেলা</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-extrabold font-headline text-primary tracking-tight">
              বৈজ্ঞানিক পরিভাষা মেলানো
            </h1>
            <p className="text-on-surface-variant font-medium mt-1 max-w-sm">
              সঠিক জোড়া খুঁজে বের করে আপনার বিজ্ঞানের জ্ঞান ঝালিয়ে নিন।
            </p>
          </div>
          <div className="flex gap-3">
            <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm border-b-4 border-primary/20 flex flex-col items-center min-w-[80px]">
              <span className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1">স্কোর</span>
              <span className="text-2xl font-black font-headline text-primary">{score}</span>
            </div>
            <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm border-b-4 border-tertiary/20 flex flex-col items-center min-w-[80px]">
              <span className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1">সময়</span>
              <span className="text-2xl font-black font-headline text-tertiary-container">{mins}:{secs}</span>
            </div>
            <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm border-b-4 border-secondary/20 flex flex-col items-center min-w-[80px]">
              <span className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1">জীবন</span>
              <div className="flex gap-0.5 mt-1">
                {[0, 1, 2].map((i) => (
                  <span key={i} className={`material-symbols-outlined text-xl ${i < lives ? 'fill-icon text-secondary' : 'text-outline-variant'}`}>
                    favorite
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-primary-container/10 border border-primary/5 rounded-2xl p-5 mb-6 flex items-start gap-4">
          <div className="bg-primary p-2 rounded-lg text-white flex-shrink-0">
            <span className="material-symbols-outlined">lightbulb</span>
          </div>
          <div>
            <h3 className="font-bold text-primary font-headline">কিভাবে খেলবেন:</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              কার্ডগুলোতে ক্লিক করুন। বাম পাশে বিজ্ঞানের একটি শব্দ এবং ডান পাশে তার সঠিক সংজ্ঞা বা চিত্র থাকবে।
              একই জোড়া মেলালে আপনার পয়েন্ট বাড়বে!
            </p>
          </div>
        </div>

        {/* Game Won Overlay */}
        {gameWon && (
          <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">
            <div className="bg-surface-container-lowest rounded-3xl p-10 text-center max-w-md w-full shadow-2xl animate-bounce-in">
              <span className="material-symbols-outlined fill-icon text-[80px] text-tertiary-fixed-dim mb-4">military_tech</span>
              <h2 className="text-4xl font-black font-headline text-primary mb-2">অসাধারণ!</h2>
              <p className="text-on-surface-variant mb-6">আপনি সব জোড়া মিলিয়ে ফেলেছেন!</p>
              <div className="flex gap-3 justify-center mb-6">
                <div className="text-center">
                  <div className="text-2xl font-black text-primary">{score}</div>
                  <div className="text-xs text-outline">স্কোর</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-tertiary">{moves}</div>
                  <div className="text-xs text-outline">মুভ</div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button onClick={resetGame} className="py-3 px-8 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all">
                  আবার খেলুন
                </button>
                <Link href="/learn/level-up" className="py-3 px-8 bg-surface-container-high text-on-surface rounded-xl font-bold hover:bg-surface-container-highest transition-all">
                  পরবর্তী ধাপ →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Card Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={card.matched || isProcessing}
              className={`relative aspect-[3/4] rounded-2xl transition-all duration-300 ${
                card.matched
                  ? 'bg-emerald-50 border-2 border-emerald-200 opacity-50 cursor-default'
                  : card.flipped
                  ? 'bg-primary-container shadow-lg border-2 border-primary-fixed scale-105 cursor-default'
                  : 'bg-surface-container-lowest shadow-sm hover:shadow-md hover:scale-105 cursor-pointer border-b-4 border-primary/10'
              }`}
            >
              {card.matched ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="material-symbols-outlined fill-icon text-emerald-600 text-4xl mb-1">check_circle</span>
                  <p className="text-emerald-800 font-bold text-xs uppercase tracking-tighter">সংযোজিত</p>
                </div>
              ) : card.flipped ? (
                <div className="flex flex-col items-center justify-center h-full p-2 text-center">
                  {card.isText ? (
                    <>
                      <span className="material-symbols-outlined fill-icon text-white text-4xl mb-2">science</span>
                      <p className="text-white font-bold font-headline text-sm">{card.content}</p>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined fill-icon text-white text-4xl mb-2">eco</span>
                      <p className="text-white font-bold font-headline text-sm">{card.content}</p>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center">
                    <span className="text-3xl font-black text-primary/20 font-headline">?</span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-10 flex justify-center gap-5">
          <button
            onClick={resetGame}
            className="px-7 py-3.5 bg-surface-container-highest text-primary font-bold font-label rounded-full flex items-center gap-2 hover:bg-primary-fixed-dim transition-colors"
          >
            <span className="material-symbols-outlined">refresh</span>
            নতুন খেলা
          </button>
          <Link
            href="/learn/daily-challenge"
            className="px-9 py-3.5 bg-gradient-to-r from-primary to-primary-container text-white font-bold font-label rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all tracking-wider"
          >
            চ্যালেঞ্জে যান
          </Link>
        </div>
      </main>

      {/* Achievement Toast */}
      {showToast && (
        <div className="fixed bottom-24 md:bottom-8 right-8 z-[100] max-w-xs animate-bounce-in">
          <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,73,0,0.12)] border-t-4 border-tertiary-fixed-dim flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined fill-icon text-tertiary-fixed-dim text-3xl">military_tech</span>
            </div>
            <div>
              <p className="text-xs font-bold text-tertiary uppercase tracking-widest">নতুন জোড়া!</p>
              <h4 className="font-headline font-bold text-on-surface">+১০০ পয়েন্ট!</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
