// src/components/Sidebar.tsx
// src/components/Sidebar.tsx
import type { FC } from 'react';
import { FaUser, FaSignOutAlt, FaChartBar, FaCar, FaUsers, FaCalendarAlt, FaCog } from 'react-icons/fa';

const Sidebar: FC = () => {
  return (
    <aside className="w-64 h-screen bg-black text-white flex flex-col justify-between fixed">
      <div>
        <div className="p-4 font-bold text-xl border-b border-gray-700">
          CARBUSTER
        </div>
        <nav className="p-4 space-y-3">
          <div className="flex items-center gap-3 text-red-400 font-semibold">
            <FaUser /> Usuario (Administrador)
          </div>
          <div className="mt-6 flex flex-col space-y-4">
            <NavItem icon={<FaChartBar />} label="Inicio" />
            <NavItem icon={<FaCalendarAlt />} label="Reportes" />
            <NavItem icon={<FaCar />} label="Vehículos" />
            <NavItem icon={<FaUsers />} label="Clientes" />
            <NavItem icon={<FaCalendarAlt />} label="Reservas" />
            <NavItem icon={<FaCog />} label="Configuración" />
          </div>
        </nav>
      </div>
      <div className="p-4">
        <button className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400">
          <FaSignOutAlt /> Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 hover:text-red-400 cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
