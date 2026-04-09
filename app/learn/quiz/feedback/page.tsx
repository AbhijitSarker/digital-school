import Link from 'next/link';

export default function MidQuizFeedbackPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-tertiary-container/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-3xl z-10">
        {/* Encouraging Banner */}
        <div className="mb-10 text-center animate-bounce-in">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-primary-fixed shadow-lg shadow-primary/10">
            <span className="material-symbols-outlined fill-icon text-5xl text-primary">celebration</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-primary tracking-tight mb-4">
            দারুণ চলছে!
          </h1>
          <p className="text-xl font-medium text-on-surface-variant max-w-md mx-auto">
            আপনি কুইজের অর্ধেক পথ সফলভাবে পার করেছেন। আপনার মনোযোগ প্রশংসনীয়!
          </p>
        </div>

        {/* Stats Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow flex flex-col items-center justify-center text-center">
            <div className="mb-4 text-tertiary">
              <span className="material-symbols-outlined fill-icon text-6xl">stars</span>
            </div>
            <h3 className="text-sm font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
              অর্জিত XP
            </h3>
            <div className="text-5xl font-black font-headline text-tertiary">+১২০</div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow flex flex-col items-center justify-center">
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="58" fill="transparent" stroke="#e1e3e4" strokeWidth="12" />
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  fill="transparent"
                  stroke="#004900"
                  strokeWidth="12"
                  strokeDasharray={`${Math.PI * 2 * 58 * 0.5} ${Math.PI * 2 * 58}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold font-headline">৫০%</span>
              </div>
            </div>
            <h3 className="text-sm font-label font-bold uppercase tracking-widest text-on-surface-variant">
              সম্পন্ন হয়েছে
            </h3>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow flex flex-col items-center justify-center text-center">
            <div className="mb-4 text-secondary">
              <span className="material-symbols-outlined fill-icon text-6xl">task_alt</span>
            </div>
            <h3 className="text-sm font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
              সঠিক উত্তর
            </h3>
            <div className="text-5xl font-black font-headline text-secondary">৫/৫</div>
          </div>
        </div>

        {/* Streak Feedback */}
        <div className="bg-gradient-to-r from-primary to-primary-container p-[2px] rounded-2xl mb-10">
          <div className="bg-surface-container-lowest rounded-[calc(1rem-2px)] p-6 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined fill-icon text-secondary text-4xl">local_fire_department</span>
              </div>
              <div>
                <h4 className="text-xl font-bold font-headline text-primary">সুপার স্ট্রিক!</h4>
                <p className="text-on-surface-variant">আপনি টানা ৫টি প্রশ্নের সঠিক উত্তর দিয়েছেন!</p>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-3xl font-black font-headline text-primary-container">x১.৫ বোনাস</span>
            </div>
          </div>
        </div>

        {/* Primary Action */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/learn/quiz/results"
            className="w-full md:w-auto px-16 py-5 bg-gradient-to-br from-primary to-primary-container text-white text-lg font-bold font-label uppercase tracking-[0.05em] rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 text-center"
          >
            পরবর্তী ধাপে যান →
          </Link>
          <button className="text-primary font-bold hover:underline decoration-2 underline-offset-4">
            সংক্ষিপ্ত বিরতি নিন
          </button>
        </div>

        {/* Journey Tracker */}
        <div className="mt-14 w-full max-w-xl mx-auto opacity-40">
          <div className="h-1 w-full bg-outline-variant/30 rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-primary" />
          </div>
          <div className="flex justify-between mt-3 text-xs font-label text-outline uppercase tracking-widest">
            <span>শুরু</span>
            <span>অর্ধেক পথ ✓</span>
            <span>গন্তব্য</span>
          </div>
        </div>
      </div>
    </div>
  );
}
