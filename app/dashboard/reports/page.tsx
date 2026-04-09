import Link from "next/link";
import CircularProgress from "@/components/CircularProgress";

const insights = [
  { icon: "trending_up", title: "সামগ্রিক উন্নতি", value: "+১৫%", desc: "গত মাসের তুলনায় সামগ্রিক পারফর্ম্যান্স ১৫% বেড়েছে।", color: "bg-primary/5 border-primary/20 text-primary" },
  { icon: "local_fire_department", title: "সর্বোচ্চ স্ট্রিক", value: "১২ দিন", desc: "এই মাসে টানা সর্বোচ্চ ১২ দিন অনুশীলন করা হয়েছে।", color: "bg-secondary/5 border-secondary/20 text-secondary" },
  { icon: "emoji_events", title: "সেরা বিষয়", value: "বাংলা ৯২%", desc: "বাংলায় সর্বোচ্চ ৯২% দক্ষতা অর্জন করা হয়েছে।", color: "bg-tertiary/5 border-tertiary/20 text-tertiary" },
  { icon: "warning", title: "মনোযোগ প্রয়োজন", value: "ইংরেজি", desc: "ইংরেজিতে দক্ষতা মাত্র ৬৮%, উন্নতির সুযোগ রয়েছে।", color: "bg-error/5 border-error/20 text-error" },
];

const monthlyScores = [
  { month: "জুলাই", score: 72 },
  { month: "আগস্ট", score: 75 },
  { month: "সেপ্টেম্বর", score: 80 },
  { month: "অক্টোবর", score: 85 },
];

export default function ReportsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-headline font-black text-primary tracking-tight mb-2">
            রিপোর্ট ও বিশ্লেষণ
          </h1>
          <p className="text-on-surface-variant">
            তানভীরের বিস্তারিত পারফর্ম্যান্স ডেটা এবং প্রবণতা।
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-on-primary rounded-xl font-label font-bold text-sm hover:bg-primary-container transition-colors self-start">
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>download</span>
          PDF রিপোর্ট
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "মোট অধ্যয়ন সময়", value: "৪৮.৫ ঘণ্টা", icon: "schedule", sub: "এই মাসে" },
          { label: "কুইজ পাস রেট", value: "৮৭%", icon: "check_circle", sub: "১২টি কুইজের মধ্যে" },
          { label: "গড় সেশন দৈর্ঘ্য", value: "২৩ মিনিট", icon: "timer", sub: "প্রতিদিন" },
          { label: "মোট XP অর্জন", value: "৫৪২০", icon: "stars", sub: "সর্বকালীন" },
        ].map((card) => (
          <div key={card.label} className="bg-surface-container-low p-4 md:p-5 rounded-2xl shadow-sm border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary fill-icon" style={{ fontSize: "22px" }}>
              {card.icon}
            </span>
            <p className="text-2xl md:text-3xl font-black font-headline text-primary mt-2">{card.value}</p>
            <p className="text-xs font-label text-on-surface-variant mt-0.5">{card.label}</p>
            <p className="text-[10px] text-outline mt-0.5">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {insights.map((ins) => (
          <div key={ins.title} className={`p-5 md:p-6 rounded-2xl border ${ins.color} bg-opacity-5`}>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-xl bg-surface-container-lowest border border-outline-variant/15 shrink-0">
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: "20px" }}>
                  {ins.icon}
                </span>
              </div>
              <div>
                <p className="text-xs font-label font-bold uppercase tracking-widest mb-1 opacity-70">{ins.title}</p>
                <p className="text-xl md:text-2xl font-black font-headline">{ins.value}</p>
                <p className="text-sm font-body text-on-surface-variant mt-1">{ins.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Progress Chart */}
        <div className="lg:col-span-2 bg-surface-container-low rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 className="font-headline font-bold text-xl text-primary mb-6">মাসিক গড় স্কোর</h3>
          <div className="space-y-4">
            {monthlyScores.map((m) => (
              <div key={m.month}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-bold font-body">{m.month}</span>
                  <span className="text-sm font-black font-headline text-primary">{m.score}%</span>
                </div>
                <div className="h-3 bg-surface-container-highest rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all"
                    style={{ width: `${m.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Subject Breakdown */}
          <div className="mt-8 pt-6 border-t border-surface-container">
            <h4 className="font-headline font-bold text-base text-primary mb-4">বিষয়ভিত্তিক বিভাজন</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { subject: "বাংলা", pct: 92, color: "text-primary" },
                { subject: "গণিত", pct: 85, color: "text-primary" },
                { subject: "বিজ্ঞান", pct: 78, color: "text-primary" },
                { subject: "ইংরেজি", pct: 68, color: "text-tertiary" },
              ].map((s) => (
                <div key={s.subject} className="flex flex-col items-center gap-2">
                  <CircularProgress percentage={s.pct} size={72} strokeWidth={7} color={s.color} />
                  <span className="text-xs font-bold text-on-surface-variant">{s.subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="space-y-4">
          <div className="bg-surface-container-low rounded-3xl p-5 md:p-6 shadow-sm">
            <h3 className="font-headline font-bold text-base text-primary mb-4">অভিভাবক সুপারিশ</h3>
            <div className="space-y-4">
              {[
                { icon: "auto_stories", text: "প্রতিদিন ইংরেজি পড়ার অভ্যাস তৈরি করুন", priority: "উচ্চ" },
                { icon: "quiz", text: "সাপ্তাহিক কুইজে নিয়মিত অংশগ্রহণ নিশ্চিত করুন", priority: "মধ্যম" },
                { icon: "schedule", text: "পড়াশোনার সময়সূচি নির্দিষ্ট রাখুন", priority: "সাধারণ" },
              ].map((rec) => (
                <div key={rec.text} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-fixed/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "16px" }}>{rec.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-on-surface">{rec.text}</p>
                    <span className={`text-[10px] font-bold font-label ${rec.priority === "উচ্চ" ? "text-secondary" : rec.priority === "মধ্যম" ? "text-tertiary" : "text-outline"}`}>
                      {rec.priority} অগ্রাধিকার
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-tertiary-container to-tertiary p-5 md:p-6 rounded-3xl text-on-tertiary shadow-lg">
            <span className="material-symbols-outlined fill-icon text-tertiary-fixed" style={{ fontSize: "28px" }}>
              emoji_events
            </span>
            <h4 className="font-headline font-bold text-lg mt-2 mb-1">পরবর্তী মাইলস্টোন</h4>
            <p className="text-sm text-tertiary-fixed/80">লেভেল ১৩ অর্জনে মাত্র ৮০০ XP বাকি!</p>
            <Link href="/dashboard/gamification">
              <button className="mt-4 w-full py-2.5 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
                অগ্রগতি দেখুন
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
