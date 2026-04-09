"use client";

import { useState } from "react";

const notifications = [
  {
    id: 1,
    type: "achievement",
    icon: "emoji_events",
    color: "bg-tertiary-fixed/30 text-tertiary",
    title: "নতুন ব্যাজ অর্জিত!",
    body: "তানভীর 'বিদ্যুৎ গতি' ব্যাজ অর্জন করেছে। ৫ মিনিটে কুইজ সম্পন্ন করার জন্য।",
    time: "২ ঘণ্টা আগে",
    unread: true,
  },
  {
    id: 2,
    type: "quiz",
    icon: "quiz",
    color: "bg-primary-fixed/30 text-primary",
    title: "কুইজ ফলাফল প্রকাশিত",
    body: "বাংলার বীরগাথা কুইজে তানভীর ৮/১০ স্কোর করেছে এবং +১২০ XP অর্জন করেছে।",
    time: "৫ ঘণ্টা আগে",
    unread: true,
  },
  {
    id: 3,
    type: "streak",
    icon: "local_fire_department",
    color: "bg-secondary-fixed/30 text-secondary",
    title: "স্ট্রিক ব্রেকিং সতর্কতা!",
    body: "তানভীর আজ এখনও পড়াশোনা করেনি। স্ট্রিক বজায় রাখতে তাকে উৎসাহিত করুন।",
    time: "১ দিন আগে",
    unread: false,
  },
  {
    id: 4,
    type: "report",
    icon: "assessment",
    color: "bg-emerald-100 text-emerald-700",
    title: "সাপ্তাহিক রিপোর্ট প্রস্তুত",
    body: "অক্টোবরের ২য় সপ্তাহের সাপ্তাহিক রিপোর্ট প্রস্তুত। এই সপ্তাহে সামগ্রিক উন্নতি ৮%।",
    time: "২ দিন আগে",
    unread: false,
  },
  {
    id: 5,
    type: "milestone",
    icon: "military_tech",
    color: "bg-amber-100 text-amber-700",
    title: "লেভেল আপ আসন্ন!",
    body: "তানভীর লেভেল ১৩ অর্জন থেকে মাত্র ৮০০ XP দূরে। আর একটু চেষ্টাই লাগবে!",
    time: "৩ দিন আগে",
    unread: false,
  },
];

type NotifType = "email" | "push" | "weekly";
type Pref = Record<NotifType, boolean>;

export default function NotificationsPage() {
  const [prefs, setPrefs] = useState<Pref>({ email: true, push: true, weekly: false });
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const displayed = filter === "unread" ? notifications.filter((n) => n.unread) : notifications;

  const toggle = (key: NotifType) => setPrefs((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6 md:mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-headline font-black text-primary tracking-tight mb-1">
            বিজ্ঞপ্তি
          </h1>
          <p className="text-on-surface-variant text-sm md:text-base">
            তানভীরের সকল আপডেট এখানে দেখুন।
          </p>
        </div>
        <span className="bg-secondary text-on-secondary text-xs font-bold px-3 py-1.5 rounded-full font-label">
          {notifications.filter((n) => n.unread).length} নতুন
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {(["all", "unread"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              filter === f ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            {f === "all" ? "সকল" : "অপঠিত"}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div className="space-y-3 mb-8 md:mb-10">
        {displayed.map((notif) => (
          <div
            key={notif.id}
            className={`flex gap-3 md:gap-4 p-4 md:p-5 rounded-2xl transition-all cursor-pointer hover:shadow-md ${
              notif.unread
                ? "bg-surface-container-lowest border-l-4 border-primary shadow-sm"
                : "bg-surface-container hover:bg-surface-container-low"
            }`}
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 ${notif.color}`}>
              <span className="material-symbols-outlined fill-icon" style={{ fontSize: "22px" }}>{notif.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className={`font-bold text-sm md:text-base ${notif.unread ? "text-on-surface" : "text-on-surface-variant"}`}>
                  {notif.title}
                  {notif.unread && <span className="ml-2 w-2 h-2 bg-primary rounded-full inline-block" />}
                </h4>
                <span className="text-[10px] text-outline whitespace-nowrap font-label shrink-0">{notif.time}</span>
              </div>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{notif.body}</p>
            </div>
          </div>
        ))}
        {displayed.length === 0 && (
          <div className="text-center py-12 text-on-surface-variant">
            <span className="material-symbols-outlined" style={{ fontSize: "48px" }}>notifications_off</span>
            <p className="mt-2 font-bold">কোনো অপঠিত বিজ্ঞপ্তি নেই</p>
          </div>
        )}
      </div>

      {/* Notification Settings */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm">
        <h3 className="font-headline font-bold text-lg text-primary mb-6">বিজ্ঞপ্তি সেটিংস</h3>
        <div className="space-y-4">
          {([
            { key: "email", label: "ইমেইল বিজ্ঞপ্তি", desc: "দৈনিক সারসংক্ষেপ এবং সাপ্তাহিক রিপোর্ট" },
            { key: "push", label: "পুশ নোটিফিকেশন", desc: "তাৎক্ষণিক আপডেট এবং অ্যাচিভমেন্ট" },
            { key: "weekly", label: "সাপ্তাহিক রিপোর্ট", desc: "প্রতি সোমবার সাপ্তাহিক পারফর্ম্যান্স রিপোর্ট" },
          ] as { key: NotifType; label: string; desc: string }[]).map((setting) => (
            <div key={setting.key} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
              <div>
                <p className="font-bold text-sm text-on-surface">{setting.label}</p>
                <p className="text-xs text-on-surface-variant">{setting.desc}</p>
              </div>
              <button
                onClick={() => toggle(setting.key)}
                className={`relative w-12 h-6 rounded-full transition-colors ${prefs[setting.key] ? "bg-primary" : "bg-outline-variant"}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${prefs[setting.key] ? "translate-x-7" : "translate-x-1"}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
