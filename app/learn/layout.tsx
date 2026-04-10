import StudentNav from '@/components/StudentNav';
import StudentSidebar from '@/components/StudentSidebar';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <StudentNav />
      <StudentSidebar />
      <main className="md:ml-64 pt-16 pb-20 md:pb-0 min-h-screen bg-surface-dim/20">
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
