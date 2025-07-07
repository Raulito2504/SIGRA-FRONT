// src/components/Header.tsx
import { type FC } from "react";

const Header: FC = () => {
  return (
    <header className="h-16 w-full bg-neutral-900 text-white flex items-center justify-between px-6 shadow">
      <h1 className="text-lg font-semibold">Panel de control</h1>
      <div>
        <input
          type="search"
          placeholder="Buscar"
          className="px-3 py-1 rounded bg-neutral-800 text-white border border-neutral-600 focus:outline-none"
        />
      </div>
    </header>
  );
};

export default Header;
