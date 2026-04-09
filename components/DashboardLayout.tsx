import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <TopNav />
      <Sidebar />
      <main className="md:ml-64 pt-16 pb-20 md:pb-0 min-h-screen bg-surface-dim/20">
        <div className="p-4 md:p-8">{children}</div>
      </main>
      <MobileNav />
      {/* Support FAB */}
      <button className="fixed bottom-20 md:bottom-8 right-4 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-90 z-40">
        <span className="material-symbols-outlined text-[20px] md:text-[24px]">
          support_agent
        </span>
      </button>
    </div>
  );
}
