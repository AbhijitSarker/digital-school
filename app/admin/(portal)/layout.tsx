'use client';

import { createContext, useContext } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import AdminTopNav from '@/components/AdminTopNav';
import AdminMobileNav from '@/components/AdminMobileNav';

// Context kept for backward compatibility (no-op on mobile now)
export const AdminMenuContext = createContext<() => void>(() => {});
export const useAdminMenu = () => useContext(AdminMenuContext);

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <AdminTopNav />
      <AdminSidebar />

      {/* Main content — offset by sidebar on desktop, pt-16 clears the fixed nav, pb-20 clears mobile bottom nav */}
      <main className="lg:ml-64 pt-16 pb-20 lg:pb-0 min-h-screen bg-surface-dim/20">
        <div className="p-4 md:p-8">{children}</div>
      </main>

      <AdminMobileNav />
    </div>
  );
}
