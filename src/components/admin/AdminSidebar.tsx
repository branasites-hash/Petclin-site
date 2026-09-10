import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Stethoscope,
  MapPin,
  Package,
  ShoppingCart,
  Settings,
  Stethoscope as Logo,
  X,
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  icon: typeof LayoutDashboard;
  to: string;
  available: boolean;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/admin', available: true },
  { label: 'Serviços', icon: Stethoscope, to: '/admin/servicos', available: false },
  { label: 'Unidades', icon: MapPin, to: '/admin/unidades', available: false },
  { label: 'Produtos', icon: Package, to: '/admin/produtos', available: false },
  { label: 'Pedidos', icon: ShoppingCart, to: '/admin/pedidos', available: false },
  { label: 'Configurações', icon: Settings, to: '/admin/configuracoes', available: false },
];

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-900/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-gray-900 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-800 px-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <Logo className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">PetClin</p>
              <p className="text-[11px] text-gray-400">Painel Admin</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white lg:hidden"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.to === '/admin'
              ? location.pathname === '/admin'
              : location.pathname.startsWith(item.to);

            if (!item.available) {
              return (
                <div
                  key={item.to}
                  className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600"
                  title="Em breve"
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                  <span className="ml-auto rounded-full bg-gray-800 px-2 py-0.5 text-[10px] font-semibold text-gray-500">
                    Em breve
                  </span>
                </div>
              );
            }

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/admin'}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-gray-800 px-5 py-4">
          <p className="text-[11px] text-gray-500">PetClin © 2026</p>
          <p className="text-[11px] text-gray-600">v1.0.0 — Painel Administrativo</p>
        </div>
      </aside>
    </>
  );
}
