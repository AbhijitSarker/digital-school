import Link from "next/link";
import CircularProgress from "@/components/CircularProgress";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-primary font-headline tracking-tight mb-2">
          স্বাগতম, মোঃ আরিফ!
        </h1>
        <p className="text-on-surface-variant font-body text-sm md:text-base">
          আপনার সন্তানের আজকের অগ্রগতির একটি সংক্ষিপ্ত বিবরণ এখানে রয়েছে।
        </p>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
        {/* XP Card */}
        <div className="bg-surface-container-lowest p-4 md:p-6 rounded-3xl shadow-sm flex flex-col justify-between border border-emerald-50/80">
          <div className="flex justify-between items-start mb-3 md:mb-4">
            <div className="bg-tertiary-fixed p-2 rounded-xl">
              <span
                className="material-symbols-outlined text-tertiary fill-icon"
                style={{ fontSize: "20px" }}
              >
                stars
              </span>
            </div>
            <span className="text-[10px] md:text-xs font-label text-primary bg-primary-fixed/20 px-2 py-0.5 rounded-full font-medium">
              +১২% আজ
            </span>
          </div>
          <div>
            <p className="text-on-surface-variant text-xs md:text-sm font-medium mb-1">
              মোট এক্সপি (XP)
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-primary font-headline">
              ৫৪২০
            </h2>
          </div>
        </div>

        {/* Streak Card */}
        <div className="bg-surface-container-lowest p-4 md:p-6 rounded-3xl shadow-sm flex flex-col justify-between border border-emerald-50/80">
          <div className="flex justify-between items-start mb-3 md:mb-4">
            <div className="bg-secondary-fixed p-2 rounded-xl">
              <span
                className="material-symbols-outlined text-secondary fill-icon"
                style={{ fontSize: "20px" }}
              >
                local_fire_department
              </span>
            </div>
          </div>
          <div>
            <p className="text-on-surface-variant text-xs md:text-sm font-medium mb-1">
              বর্তমান স্ট্রিক
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-primary font-headline">
              ১২ দিন 🔥
            </h2>
          </div>
        </div>

        {/* Progress Ring Card */}
        <div className="bg-surface-container-lowest p-4 md:p-6 rounded-3xl shadow-sm flex items-center justify-between border border-emerald-50/80 col-span-2 md:col-span-1">
          <CircularProgress percentage={78} size={72} />
          <div className="text-right">
            <p className="text-on-surface-variant text-xs md:text-sm font-medium mb-1">
              সামগ্রিক অগ্রগতি
            </p>
            <p className="text-xs text-outline">গত মাসের চেয়ে ৫% বেশি</p>
          </div>
        </div>

        {/* Avg Quiz Score */}
        <div className="bg-surface-container-lowest p-4 md:p-6 rounded-3xl shadow-sm flex flex-col justify-between border border-emerald-50/80 col-span-2 md:col-span-1">
          <div className="flex justify-between items-start mb-3 md:mb-4">
            <div className="bg-primary-fixed p-2 rounded-xl">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: "20px" }}
              >
                quiz
              </span>
            </div>
          </div>
          <div>
            <p className="text-on-surface-variant text-xs md:text-sm font-medium mb-1">
              গড় কুইজ স্কোর
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-primary font-headline">
              ৮৫%
            </h2>
          </div>
        </div>
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm border border-emerald-50/80">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-primary font-headline">
              আজকের কার্যক্রম
            </h3>
            <Link
              href="/dashboard/quiz-history"
              className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
            >
              সবগুলো দেখুন{" "}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
              >
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="space-y-5 md:space-y-6">
            {[
              {
                icon: "menu_book",
                title: "পাঠ ১.২: স্বরবর্ণের ব্যবহার",
                meta: "১০:৩০ পূর্বাহ্ণ • ব্যাকরণ বিভাগ",
                xp: "+৫০ XP",
                color: "text-primary",
              },
              {
                icon: "verified",
                title: "সাপ্তাহিক কুইজ সম্পন্ন",
                meta: "১১:১৫ পূর্বাহ্ণ • ২০টি প্রশ্নের মধ্যে ১৮টি সঠিক",
                xp: "+১৫০ XP",
                color: "text-primary",
              },
              {
                icon: "emoji_events",
                title: "অ্যাচিভমেন্ট আনলকড: দ্রুত পাঠক",
                meta: "১২:০৫ অপরাহ্ণ • নতুন ব্যাজ অর্জিত",
                xp: "+৫০০ XP",
                color: "text-tertiary",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: "20px" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-on-surface text-sm md:text-base truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-outline font-label">
                    {item.meta}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span
                    className={`font-bold font-headline text-sm md:text-base ${item.color}`}
                  >
                    {item.xp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Column */}
        <div className="space-y-6 md:space-y-8">
          {/* XP Level Progress */}
          <div className="bg-primary p-6 md:p-8 rounded-3xl text-on-primary relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-base md:text-lg font-bold font-headline mb-2">
                লেভেল ১২ সম্পন্ন হতে বাকি
              </h4>
              <p className="text-primary-fixed-dim text-xs md:text-sm mb-5">
                আর মাত্র ৮০০ XP প্রয়োজন পরবর্তী ধাপের জন্য
              </p>
              <div className="w-full bg-primary-container h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary-fixed-dim h-full rounded-full"
                  style={{ width: "66.6%" }}
                />
              </div>
              <p className="text-primary-fixed text-xs mt-2 font-label">
                ৪০০ / ১২০০ XP
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-primary-container opacity-50 rounded-full blur-2xl" />
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-on-primary-container opacity-20 rounded-full blur-xl" />
          </div>

          {/* Recommended Action */}
          <div className="bg-surface-container-high/50 p-5 md:p-6 rounded-3xl border border-outline-variant/10">
            <h4 className="font-bold text-primary mb-4 font-headline">
              পরবর্তী পদক্ষেপ
            </h4>
            <div className="flex items-start gap-3 md:gap-4 mb-4">
              <div className="p-2 bg-surface-container-lowest rounded-xl border border-outline-variant/10 shrink-0">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: "20px" }}
                >
                  auto_stories
                </span>
              </div>
              <div>
                <p className="text-sm font-bold leading-snug">
                  অধ্যায় ৩: সহজ বাক্য গঠন শুরু করুন
                </p>
                <p className="text-xs text-outline mt-1 font-label">
                  তানভীরের শিখার গতি বাড়াতে সহায়ক হবে
                </p>
              </div>
            </div>
            <Link href="/dashboard/subjects">
              <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold tracking-widest text-xs uppercase transition-all hover:bg-primary-container active:scale-95">
                কোর্স দেখুন
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links Row */}
      <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[
          { href: "/dashboard/progress", icon: "trending_up", label: "অগ্রগতি দেখুন", color: "bg-primary/5 text-primary" },
          { href: "/dashboard/gamification", icon: "military_tech", label: "ব্যাজ ও পুরস্কার", color: "bg-tertiary-fixed/30 text-tertiary" },
          { href: "/dashboard/leaderboard", icon: "leaderboard", label: "লিডারবোর্ড", color: "bg-secondary-fixed/30 text-secondary" },
          { href: "/dashboard/reports", icon: "assessment", label: "রিপোর্ট", color: "bg-surface-container-high text-on-surface-variant" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 p-4 rounded-2xl hover:scale-[1.02] transition-all ${item.color}`}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>{item.icon}</span>
            <span className="text-sm font-bold font-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
