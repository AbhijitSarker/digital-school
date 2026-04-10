import StudentNav from '@/components/StudentNav';
import StudentSidebar from '@/components/StudentSidebar';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-dim dark:bg-background">
      <StudentNav />
      <div className="flex">
        <StudentSidebar />
        <main className="flex-1 md:ml-64 min-h-[calc(100vh-64px)] pb-20 md:pb-0">
          {children}
        </main>
      </div>
    </div>
  );
}
