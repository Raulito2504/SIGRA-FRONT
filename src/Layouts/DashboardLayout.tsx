// src/layouts/DashboardLayout.tsx
// src/layouts/DashboardLayout.tsx
import type { FC, ReactNode } from 'react';
import Sidebar from '@/components/common/Sidebar';
import Header from '@/Layouts/DashboardLayout';

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full min-h-screen bg-gray-100">
        <Header children={undefined} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
