"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"profile" | "account" | "privacy">("profile");
  const [parentName, setParentName] = useState("মোঃ আরিফ আহমেদ");
  const [parentEmail, setParentEmail] = useState("arif.ahmed@example.com");
  const [parentPhone, setParentPhone] = useState("+৮৮ ০১৭১২-৩৪৫৬৭৮");
  const [childName, setChildName] = useState("তানভীর আহমেদ");
  const [childClass, setChildClass] = useState("চতুর্থ শ্রেণী");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-headline font-black text-primary tracking-tight mb-2">
          প্রোফাইল ও সেটিংস
        </h1>
        <p className="text-on-surface-variant">
          আপনার অ্যাকাউন্ট এবং সন্তানের তথ্য পরিচালনা করুন।
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-6 md:p-8 mb-6 md:mb-8 shadow-xl text-on-primary relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-fixed flex items-center justify-center text-3xl md:text-4xl font-black font-headline text-on-primary-fixed shrink-0">
            আ
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl font-black font-headline mb-1">{parentName}</h2>
            <p className="text-primary-fixed-dim text-sm">অভিভাবক অ্যাকাউন্ট</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
              <div className="flex items-center gap-2 bg-surface-container-low/50 px-3 py-1.5 rounded-full text-sm">
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>email</span>
                {parentEmail}
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low/50 px-3 py-1.5 rounded-full text-sm">
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>phone</span>
                {parentPhone}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-surface-container/20 rounded-full blur-2xl" />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-surface-container-low rounded-xl p-1">
        {[
          { key: "profile", label: "প্রোফাইল" },
          { key: "account", label: "অ্যাকাউন্ট" },
          { key: "privacy", label: "গোপনীয়তা" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as typeof activeTab)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === tab.key
                ? "bg-surface-container-lowest text-primary shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "profile" && (
        <div className="space-y-6">
          {/* Parent Info */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="font-headline font-bold text-lg text-primary mb-6">অভিভাবকের তথ্য</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "পূর্ণ নাম", value: parentName, setter: setParentName, icon: "person" },
                { label: "ইমেইল", value: parentEmail, setter: setParentEmail, icon: "email" },
                { label: "মোবাইল নম্বর", value: parentPhone, setter: setParentPhone, icon: "phone" },
                { label: "জেলা", value: "ঢাকা", setter: () => {}, icon: "location_on" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-xs font-bold text-on-surface-variant font-label uppercase tracking-widest mb-1.5">
                    {field.label}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline" style={{ fontSize: "18px" }}>
                      {field.icon}
                    </span>
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-surface-container rounded-xl border-b-2 border-transparent focus:border-primary focus:outline-none font-body text-on-surface transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Child Info */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline font-bold text-lg text-primary">সন্তানের তথ্য</h3>
              <button className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>add</span>
                সন্তান যোগ করুন
              </button>
            </div>
            <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl mb-5">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4HfnnTD3oOQzKgyBT-5hc5eYQLnh-ngU8WkGLk1ICYsdqTIefBRjYMrYUyqr-nKKbfVr9WaV9irUf30-0tEdOzwgVwWpgsaS8q9uPssR-QSgScEiO1YOODluaWxeFbEiMgeKkshvp1i8jTc19W-HLnRy_YV7JCoyxuHQcawErnCJXDZ5rqLdK2NvCs7UwQQrvzs-D7jaQ_4RFZ1nOMVNtJS7jbSD3yIdW5FxTlZZMTqyBmS4fu_Y0U5Bn-DiATr3euwbMVf_UEwq"
                alt="Child"
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
              />
              <div className="flex-1">
                <p className="font-bold text-on-surface">{childName}</p>
                <p className="text-xs text-on-surface-variant">{childClass} • লেভেল ১২</p>
              </div>
              <div className="flex gap-1">
                <span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-[10px] font-bold font-label">সক্রিয়</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "শিক্ষার্থীর নাম", value: childName, setter: setChildName, icon: "face" },
                { label: "শ্রেণী", value: childClass, setter: setChildClass, icon: "school" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-xs font-bold text-on-surface-variant font-label uppercase tracking-widest mb-1.5">
                    {field.label}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline" style={{ fontSize: "18px" }}>
                      {field.icon}
                    </span>
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-surface-container rounded-xl border-b-2 border-transparent focus:border-primary focus:outline-none font-body text-on-surface transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-label font-bold text-sm uppercase tracking-widest transition-all ${
                saved ? "bg-emerald-500 text-white" : "bg-primary text-on-primary hover:bg-primary-container"
              }`}
            >
              {saved ? (
                <>
                  <span className="material-symbols-outlined fill-icon" style={{ fontSize: "18px" }}>check_circle</span>
                  সংরক্ষিত!
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>save</span>
                  পরিবর্তন সংরক্ষণ
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {activeTab === "account" && (
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm space-y-5">
          <h3 className="font-headline font-bold text-lg text-primary mb-6">অ্যাকাউন্ট সেটিংস</h3>
          {[
            { icon: "lock", label: "পাসওয়ার্ড পরিবর্তন", desc: "আপনার অ্যাকাউন্টের পাসওয়ার্ড আপডেট করুন" },
            { icon: "language", label: "ভাষা নির্বাচন", desc: "বাংলা / English" },
            { icon: "subscriptions", label: "সাবস্ক্রিপশন", desc: "বর্তমান পরিকল্পনা: বেসিক (বিনামূল্যে)" },
            { icon: "delete", label: "অ্যাকাউন্ট মুছুন", desc: "সমস্ত ডেটা স্থায়ীভাবে মুছে ফেলুন", danger: true },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-colors cursor-pointer ${
                item.danger ? "hover:bg-error/5 group" : "hover:bg-surface-container-low"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.danger ? "bg-error/10" : "bg-primary-fixed/20"}`}>
                <span className={`material-symbols-outlined ${item.danger ? "text-error group-hover:fill-icon" : "text-primary"}`} style={{ fontSize: "20px" }}>
                  {item.icon}
                </span>
              </div>
              <div className="flex-1">
                <p className={`font-bold text-sm ${item.danger ? "text-error" : "text-on-surface"}`}>{item.label}</p>
                <p className="text-xs text-on-surface-variant">{item.desc}</p>
              </div>
              {!item.danger && (
                <span className="material-symbols-outlined text-outline" style={{ fontSize: "18px" }}>chevron_right</span>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === "privacy" && (
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 className="font-headline font-bold text-lg text-primary mb-6">গোপনীয়তা সেটিংস</h3>
          <div className="space-y-4">
            {[
              { label: "ডেটা সংগ্রহের অনুমতি", desc: "শিক্ষার অগ্রগতি ট্র্যাক করতে ডেটা সংগ্রহ" },
              { label: "লিডারবোর্ডে প্রদর্শন", desc: "অন্যান্য ব্যবহারকারীদের সাথে র‍্যাংকিং শেয়ার" },
              { label: "পরামর্শদাতার অ্যাক্সেস", desc: "শিক্ষকদের প্রোফাইল দেখার অনুমতি" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
                <div>
                  <p className="font-bold text-sm text-on-surface">{s.label}</p>
                  <p className="text-xs text-on-surface-variant">{s.desc}</p>
                </div>
                <ToggleSwitch defaultOn={i < 2} />
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-primary-fixed/10 rounded-2xl">
            <p className="text-xs text-on-surface-variant leading-relaxed">
              আমরা আপনার গোপনীয়তার মূল্য দিই। আমাদের{" "}
              <a href="#" className="text-primary font-bold hover:underline">গোপনীয়তা নীতি</a>{" "}
              পড়ুন এবং আপনার ডেটা কিভাবে ব্যবহৃত হয় জানুন।
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function ToggleSwitch({ defaultOn }: { defaultOn: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative w-12 h-6 rounded-full transition-colors ${on ? "bg-primary" : "bg-outline-variant"}`}
    >
      <div className={`absolute top-1 w-4 h-4 bg-surface-container-lowest rounded-full shadow border border-outline-variant/10 transition-transform ${on ? "translate-x-7" : "translate-x-1"}`} />
    </button>
  );
}
