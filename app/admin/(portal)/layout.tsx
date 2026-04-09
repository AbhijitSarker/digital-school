'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-dim">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content — full width on mobile, offset by sidebar on desktop */}
      <div className="lg:ml-64 min-h-screen flex flex-col">
        {/* Pass toggle handler to children via context would be ideal, but we clone the
            first child prop instead. Simpler: expose via a wrapper that injects the prop. */}
        {/* Children use AdminHeader which receives onMenuToggle via the layout wrapper */}
        <AdminLayoutContent onMenuToggle={() => setSidebarOpen((v) => !v)}>
          {children}
        </AdminLayoutContent>
      </div>
    </div>
  );
}

function AdminLayoutContent({
  children,
  onMenuToggle,
}: {
  children: React.ReactNode;
  onMenuToggle: () => void;
}) {
  // Inject onMenuToggle into all AdminHeader children via a context
  // (pages import AdminHeader directly, so we use a context provider)
  return (
    <AdminMenuContext.Provider value={onMenuToggle}>
      {children}
    </AdminMenuContext.Provider>
  );
}

// Context so every AdminHeader in the tree can access the toggle
import { createContext, useContext } from 'react';

export const AdminMenuContext = createContext<() => void>(() => {});
export const useAdminMenu = () => useContext(AdminMenuContext);
