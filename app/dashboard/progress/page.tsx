import Link from "next/link";
import CircularProgress from "@/components/CircularProgress";

const subjects = [
  {
    name: "গণিত",
    icon: "calculate",
    pct: 85,
    color: "text-primary",
    borderColor: "border-primary-fixed",
    label: "অসাধারণ!",
    labelColor: "text-primary",
  },
  {
    name: "বাংলা",
    icon: "translate",
    pct: 92,
    color: "text-primary-container",
    borderColor: "border-primary-container",
    label: "সেরা পারফর্ম্যান্স",
    labelColor: "text-primary",
  },
  {
    name: "ইংরেজি",
    icon: "language",
    pct: 68,
    color: "text-tertiary",
    borderColor: "border-tertiary-fixed-dim",
    label: "উন্নতি প্রয়োজন",
    labelColor: "text-tertiary",
  },
  {
    name: "বিজ্ঞান",
    icon: "science",
    pct: 78,
    color: "text-primary-container",
    borderColor: "border-primary",
    label: "ভালো অগ্রগতি",
    labelColor: "text-primary",
  },
];

const weekDays = [
  { day: "শনি", height: "40%", bg: "bg-surface-container-high" },
  { day: "রবি", height: "65%", bg: "bg-surface-container-high" },
  { day: "সোম", height: "90%", bg: "bg-primary-container" },
  { day: "মঙ্গল", height: "50%", bg: "bg-surface-container-high" },
  { day: "বুধ", height: "30%", bg: "bg-surface-container-high" },
  { day: "বৃহ", height: "75%", bg: "bg-surface-container-high" },
  { day: "শুক্র", height: "100%", bg: "bg-secondary-container" },
];

export default function ProgressPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Browser Frame Header */}
      <div className="mb-6 md:mb-8 flex items-center justify-between bg-surface-container-high rounded-xl px-4 md:px-6 py-3 shadow-sm">
        <div className="flex items-center gap-2 md:gap-4 text-xs font-label text-on-surface-variant uppercase tracking-widest font-bold">
          <span className="hidden sm:inline">banglaquest</span>
          <span className="text-outline hidden sm:inline">/</span>
          <span className="hidden sm:inline">dashboard</span>
          <span className="text-outline hidden sm:inline">/</span>
          <span className="text-primary font-black">progress_summary</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-outline-variant/30" />
          <div className="w-3 h-3 rounded-full bg-outline-variant/30" />
          <div className="w-3 h-3 rounded-full bg-outline-variant/30" />
        </div>
      </div>

      {/* Page Title */}
      <div className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-headline font-black text-primary tracking-tight mb-2">
          সামগ্রিক অগ্রগতি
        </h1>
        <p className="text-on-surface-variant font-body">
          আপনার সন্তানের শিখন যাত্রা এবং দক্ষতা বিশ্লেষণ।
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Subject Progress Cards */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className={`bg-surface-container-low p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all group border-b-4 ${subject.borderColor}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg md:text-xl font-headline font-extrabold text-primary">
                  {subject.name}
                </h3>
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontSize: "22px" }}
                >
                  {subject.icon}
                </span>
              </div>
              <div className="flex items-center gap-6 md:gap-8">
                <CircularProgress
                  percentage={subject.pct}
                  size={96}
                  strokeWidth={8}
                  color={subject.color}
                />
                <div>
                  <p className="text-sm font-label text-on-surface-variant mb-1">
                    দক্ষতা অর্জন
                  </p>
                  <p className={`font-bold text-base md:text-lg ${subject.labelColor}`}>
                    {subject.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Bar Chart */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-6 md:p-8 rounded-xl shadow-sm border-t-8 border-primary">
          <h3 className="text-lg md:text-xl font-headline font-black text-primary mb-6 md:mb-8">
            সাপ্তাহিক সময় ব্যয়
          </h3>
          <div className="flex items-end justify-between h-40 md:h-48 gap-2 md:gap-3">
            {weekDays.map((day) => (
              <div key={day.day} className="flex flex-col items-center gap-2 flex-1">
                <div
                  className={`w-full rounded-t-lg transition-all hover:opacity-80 ${day.bg}`}
                  style={{ height: day.height }}
                />
                <span className="text-[10px] font-label text-on-surface-variant">
                  {day.day}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-surface-container">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl md:text-2xl font-headline font-black text-primary">
                  ১২.৫ ঘণ্টা
                </p>
                <p className="text-xs font-label text-on-surface-variant">
                  মোট ব্যয়িত সময়
                </p>
              </div>
              <div className="flex items-center gap-1 bg-secondary/10 px-3 py-1 rounded-full">
                <span
                  className="material-symbols-outlined text-secondary fill-icon"
                  style={{ fontSize: "16px" }}
                >
                  local_fire_department
                </span>
                <span className="text-xs font-bold text-secondary">
                  ৭ দিনের স্ট্রিক!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Weakest Subject */}
        <div className="col-span-12 bg-surface-container-low p-6 md:p-8 rounded-xl shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 pointer-events-none">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "160px" }}
            >
              warning
            </span>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontSize: "22px" }}
                >
                  trending_down
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-headline font-black text-on-surface">
                সবচেয়ে দুর্বল বিষয়:{" "}
                <span className="text-secondary">ইংরেজি</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  n: "১",
                  title: "প্রতিদিন ৫টি নতুন শব্দ",
                  desc: "ভোকাবুলারি বাড়াতে প্রতিদিন সকালে ১০ মিনিট ইংরেজি শব্দ অনুশীলন করুন।",
                  cta: "অনুশীলন শুরু করুন",
                },
                {
                  n: "২",
                  title: "বেসিক গ্রামার কুইজ",
                  desc: "Tense এবং Sentence structure এর উপর ভিত্তি করে স্পেশাল ৫টি কুইজ সম্পন্ন করুন।",
                  cta: "কুইজ দেখুন",
                },
                {
                  n: "৩",
                  title: "অডিও লেসন শুনুন",
                  desc: "উচ্চারণ ও শোনার দক্ষতা বাড়াতে আমাদের স্টোরি অডিওগুলো শুনুন।",
                  cta: "অডিও শুনুন",
                },
              ].map((card) => (
                <div
                  key={card.n}
                  className="p-5 md:p-6 rounded-2xl bg-surface-container-low border-l-4 border-secondary flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs font-label font-bold text-secondary uppercase tracking-widest mb-2">
                      পরামর্শ {card.n}
                    </p>
                    <h4 className="text-base md:text-lg font-headline font-bold text-primary mb-2 md:mb-3">
                      {card.title}
                    </h4>
                    <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <button className="mt-4 md:mt-6 flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    {card.cta}
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "16px" }}
                    >
                      arrow_forward
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Banner */}
        <div className="col-span-12 bg-gradient-to-br from-tertiary-container to-tertiary p-6 md:p-8 rounded-2xl text-on-tertiary flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-tertiary-fixed-dim/20 rounded-full flex items-center justify-center border-4 border-tertiary-fixed-dim/30 shrink-0">
              <span
                className="material-symbols-outlined text-tertiary-fixed fill-icon"
                style={{ fontSize: "32px" }}
              >
                emoji_events
              </span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-headline font-black">
                মাইলস্টোন অর্জিত!
              </h3>
              <p className="text-tertiary-fixed/80 max-w-md text-sm md:text-base">
                আপনার সন্তান "ভাষা সৈনিক" ব্যাজ অর্জনের পথে ৯৫% এগিয়ে আছে।
                আর মাত্র একটি কুইজ বাকি!
              </p>
            </div>
          </div>
          <Link href="/dashboard/gamification">
            <button className="bg-tertiary-fixed text-on-tertiary-fixed px-6 md:px-8 py-3 rounded-full font-label font-extrabold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap">
              ব্যাজটি দেখুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
