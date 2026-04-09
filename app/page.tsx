import Link from "next/link";

export default function InviteLandingPage() {
  return (
    <div className="bg-surface-dim font-body text-on-surface antialiased min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 h-16 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-black text-emerald-800 tracking-tight font-headline">
            BanglaQuest
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant text-sm font-label">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
            >
              lock
            </span>
            <span>banglaquest / invite / secure</span>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-20 md:pt-24 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col justify-end">
        {/* Browser Frame */}
        <div className="browser-frame bg-surface-bright flex-grow flex flex-col shadow-2xl overflow-hidden">
          {/* Address Bar Mockup */}
          <div className="h-10 bg-surface-container-high flex items-center px-4 md:px-6 gap-2 border-b border-outline-variant/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-error/20" />
              <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim/40" />
              <div className="w-3 h-3 rounded-full bg-primary-fixed-dim/40" />
            </div>
            <div className="mx-auto bg-surface-container-lowest px-4 py-1 rounded text-[10px] font-label text-outline tracking-wider uppercase">
              Secure Parent Access Portal
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-16 py-10 md:py-12 gap-8 md:gap-12">
            {/* Left Column: Copy & Action */}
            <div className="space-y-6 md:space-y-8 z-10">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label text-xs font-bold tracking-widest uppercase">
                  ব্যক্তিগত আমন্ত্রণ
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.1] font-headline tracking-tighter">
                  আপনার সন্তানের লেখাপড়ার অগ্রগতি দেখুন
                </h1>
                <p className="text-lg md:text-xl text-on-surface-variant font-body max-w-lg leading-relaxed">
                  একটি আধুনিক এবং তথ্যনির্ভর প্ল্যাটফর্মের মাধ্যমে আপনার
                  সন্তানের বাংলা শিক্ষার প্রতিটি ধাপ পর্যবেক্ষণ করুন।
                </p>
              </div>

              {/* Child Info Card */}
              <div className="inline-flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-surface-container-low border-b-2 border-primary-fixed-dim transition-all hover:bg-surface-container cursor-pointer">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-4 ring-white editorial-shadow shrink-0">
                  <img
                    alt="Child Portrait"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyGjknmXH5sXSAIOMue0NbivYsG7efDuUKY5YLGHSrw8SSsaMczyLrmRJN7SoQvQGG-mo3TS9RAWR3uYnseBibdZu-ADx7e3Zr6QCcf1hF_jjq6GvapclI-rTQVMcra-JpO6YYwnNj8gBftfyRcGMufYwTfWUjc5wxK4J7GGM4qhHx-zhjhanZG1GFE-G4OOIhTO53PnwCm6pGeX5u9x84J_WnC7j7u6fUGecCgMyTp-EyFponazPyvlRtRGCXP_RGC7GxXYhcF6T0"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary font-headline tracking-tight">
                    তানভীর আহমেদ
                  </h3>
                  <p className="text-on-surface-variant font-medium text-sm md:text-base">
                    শ্রেণী ৪ • লেভেল ১২
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-label font-bold text-sm tracking-[0.05em] uppercase shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  ড্যাশবোর্ডে প্রবেশ করুন
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Illustration */}
            <div className="relative flex justify-center items-center">
              <div className="absolute w-[120%] h-[120%] bg-primary-fixed/20 blur-[100px] rounded-full -z-10" />
              <div className="relative w-full aspect-square max-w-sm md:max-w-lg rounded-3xl overflow-hidden editorial-shadow bg-surface-container-lowest">
                <img
                  alt="Parent and Child Learning"
                  className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChTr0QSJxoAdvk07Z2_9kO5GANPXqonUGu-NdLMHPZO_-MAo4MTdXpf-495j0fQjpiAEB9qOO7GchDALUdJ7batml_StTuhLNia3G3Vj1VD2Yf3XwV2eP9OodjcWmnRawa-6vKWNuN2vLt9eLzJng7KBGJKYEEovInK8DWEVlXWlP2e6gryI0IQ4zea9mAqQt0OEbgS92Nh5MDBgbkOo5joaaVwcpx_C_o0FFbCtkWGPhHoDs_XfOBLU_3CbIXSV8lKiAl3cQrbDsP"
                />
                {/* Overlay Content */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 p-4 md:p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-label font-bold text-primary/60 tracking-widest uppercase">
                      Weekly Streak
                    </span>
                    <span className="text-2xl md:text-3xl font-black text-primary font-headline">
                      ১৫ দিন
                    </span>
                  </div>
                  <div className="flex -space-x-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white bg-tertiary-fixed flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-on-tertiary-fixed fill-icon"
                        style={{ fontSize: "18px" }}
                      >
                        military_tech
                      </span>
                    </div>
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white bg-primary-fixed flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-on-primary-fixed fill-icon"
                        style={{ fontSize: "18px" }}
                      >
                        auto_awesome
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="py-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-outline text-[11px] font-label tracking-widest uppercase opacity-60 border-t border-outline-variant/5">
            <span>© 2024 BanglaQuest Education Foundation</span>
            <div className="flex gap-6 md:gap-8">
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Parent Guide
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Support
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-fixed-dim/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-tertiary-fixed-dim/5 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
