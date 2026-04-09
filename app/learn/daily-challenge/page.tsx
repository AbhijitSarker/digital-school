import Link from 'next/link';

export default function DailyChallengeEntryPage() {
  return (
    <div className="bg-surface min-h-screen">
      <main className="p-6 md:p-12 max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
              <span className="material-symbols-outlined fill-icon text-sm">bolt</span>
              <span className="text-xs font-bold tracking-wider font-label uppercase">ডেইলি চ্যালেঞ্জ</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-primary font-headline leading-tight mb-4">
              আজকের ম্যাথ কোয়েস্ট
            </h2>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              গণিতের ধাঁধা সমাধান করুন এবং আপনার মগজকে সচল রাখুন। আজকের চ্যালেঞ্জটি আপনার যুক্তিবিদ্যার পরীক্ষা নেবে।
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105" />
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-surface-container-lowest bg-primary-fixed/20 flex items-center justify-center">
              <div className="text-center p-8">
                <span className="material-symbols-outlined fill-icon text-[80px] text-primary">calculate</span>
                <div className="text-3xl font-black text-primary font-headline mt-4">গণিত কোয়েস্ট</div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: 'timer', label: 'সময় সীমা', value: '৫ মিনিট', border: 'border-primary/20', iconBg: 'bg-surface-container-low', iconColor: 'text-primary' },
            { icon: 'token', label: 'পুরস্কার', value: '১০০ XP', border: 'border-tertiary-fixed-dim/40', iconBg: 'bg-tertiary/10', iconColor: 'text-tertiary-fixed-dim', iconFill: true },
            { icon: 'local_fire_department', label: 'স্ট্রিক ফায়ার', value: '+১ দিন', border: 'border-secondary/20', iconBg: 'bg-secondary-container/10', iconColor: 'text-secondary', iconFill: true },
          ].map((card, i) => (
            <div key={i} className={`bg-surface-container-lowest p-8 rounded-xl shadow-sm border-b-4 ${card.border} flex flex-col items-center text-center`}>
              <div className={`w-16 h-16 rounded-full ${card.iconBg} flex items-center justify-center mb-4`}>
                <span className={`material-symbols-outlined text-3xl ${card.iconColor} ${card.iconFill ? 'fill-icon' : ''}`}>
                  {card.icon}
                </span>
              </div>
              <h3 className="text-sm font-label text-on-surface-variant uppercase tracking-widest mb-1">{card.label}</h3>
              <p className="text-3xl font-black text-on-surface tracking-tight">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Challenge Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { num: '০১', title: 'বীজগাণিতিক সমীকরণ', xp: '+২০ XP', difficulty: 'সহজ', color: 'border-primary/20' },
            { num: '০২', title: 'ভগ্নাংশের গুণফল', xp: '+৩৫ XP', difficulty: 'মাঝারি', color: 'border-tertiary/20' },
            { num: '০৩', title: 'শতাংশ নির্ণয়', xp: '+৪৫ XP', difficulty: 'কঠিন', color: 'border-secondary/20' },
          ].map((c, i) => (
            <div key={i} className={`bg-surface-container-lowest p-6 rounded-2xl border-b-4 ${c.color} shadow-sm`}>
              <div className="text-4xl font-black font-headline text-primary/20 mb-2">{c.num}</div>
              <h4 className="font-bold text-on-surface mb-1">{c.title}</h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">{c.difficulty}</span>
                <span className="text-xs font-bold text-tertiary">{c.xp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="max-w-xl w-full bg-surface-container-low p-1 rounded-3xl mb-8">
            <div className="bg-surface-container-lowest rounded-2xl px-8 md:px-12 py-10 shadow-inner">
              <p className="text-on-surface-variant mb-6 italic">
                "গণিত হলো মানুষের আত্মার সুন্দরতম সঙ্গীত।"
              </p>
              <Link
                href="/learn/quiz/mcq"
                className="bg-gradient-to-br from-primary to-primary-container text-white text-xl font-headline font-extrabold px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 uppercase tracking-wider"
              >
                চ্যালেঞ্জ শুরু করুন
                <span className="material-symbols-outlined fill-icon text-2xl">play_arrow</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-8 opacity-50">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">group</span>
              <span className="text-xs font-label">১.২ হাজার শিক্ষার্থী অংশ নিয়েছে</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span className="text-xs font-label">শ্রেণী ৭ কারিকুলাম ভিত্তিক</span>
            </div>
          </div>
        </div>

        {/* Mini Game Link */}
        <div className="mt-6 p-6 bg-tertiary/5 rounded-2xl flex items-center justify-between border border-tertiary/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined fill-icon text-on-tertiary-fixed">videogame_asset</span>
            </div>
            <div>
              <p className="font-bold text-on-surface">মিনি গেম খেলুন</p>
              <p className="text-sm text-on-surface-variant">মেমোরি কার্ড মিলিয়ে XP অর্জন করুন</p>
            </div>
          </div>
          <Link
            href="/learn/mini-game"
            className="px-5 py-2.5 bg-tertiary text-on-tertiary rounded-xl font-bold text-sm hover:opacity-90 transition-all"
          >
            খেলুন →
          </Link>
        </div>
      </main>
    </div>
  );
}
