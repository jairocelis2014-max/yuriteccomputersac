import React from 'react';
import { useStore } from '../context/StoreContext';
import {
  Laptop,
  Monitor,
  Cpu,
  Printer,
  Gamepad2,
  HardDrive,
  Headphones,
  Home,
  CreditCard,
  Wrench,
  Server,
  Code2,
  Sparkles
} from 'lucide-react';

export const Navigation: React.FC = () => {
  const {
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    setSearchQuery,
    currentView,
    setCurrentView
  } = useStore();

  const primaryViews = [
    { id: 'shop', label: 'Tienda de Cómputo', icon: Home, badge: 'CATÁLOGO' },
    { id: 'technical-service', label: 'Soporte Domicilio & Taller', icon: Wrench, badge: 'YURIMAGUAS' },
    { id: 'hosting-domains', label: 'Hosting & Dominios', icon: Server, badge: 'DESDE S/ 60' },
    { id: 'web-app-development', label: 'Desarrollo Web & Apps', icon: Code2, badge: 'SISTEMAS' }
  ];

  const productCategories = [
    { id: 'todos', label: 'Todos' },
    { id: 'pc-gamer', label: 'PC Gamer', badge: 'GAMING' },
    { id: 'computadoras', label: 'Computadoras' },
    { id: 'cctv', label: 'Cámaras y CCTV', badge: 'SEGURIDAD' },
    { id: 'punto-de-venta', label: 'Punto De Venta' },
    { id: 'todo-en-uno', label: 'Todo En Uno' },
    { id: 'laptops', label: 'Laptops' },
    { id: 'monitores', label: 'Monitores' },
    { id: 'impresoras', label: 'Impresoras' },
    { id: 'componentes', label: 'Componentes' },
    { id: 'accesorios', label: 'Accesorios' },
  ];

  const handleSelectCategory = (id: string) => {
    setCurrentView('shop');
    setSelectedCategoryFilter(id);
    setSearchQuery('');
    const target = document.getElementById('catalog-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-orange-600 via-orange-600 to-amber-600 text-white shadow-md relative z-30">
      {/* Upper Navigation Row: Main App Sections */}
      <div className="border-b border-orange-500/50 bg-black/15">
        <div className="max-w-7xl mx-auto px-2 sm:px-6">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-1.5 gap-1.5">
            {primaryViews.map((view) => {
              const isActive = currentView === view.id;
              const Icon = view.icon;
              return (
                <button
                  key={view.id}
                  onClick={() => {
                    setCurrentView(view.id as any);
                    if (view.id === 'shop') {
                      setSelectedCategoryFilter('todos');
                    }
                  }}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-black tracking-wide whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-white text-orange-600 shadow-md font-black scale-102'
                      : 'text-orange-50 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{view.label}</span>
                  {view.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-extrabold uppercase ${
                      isActive ? 'bg-orange-100 text-orange-700' : 'bg-black/30 text-amber-300'
                    }`}>
                      {view.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lower Navigation Row: Store Product Categories (Always visible when in shop or for quick filtering) */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-1">
          {productCategories.map((item) => {
            const isActive = currentView === 'shop' && selectedCategoryFilter === item.id;
            return (
              <div key={item.id} className="relative flex-shrink-0">
                {item.badge && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-slate-950 text-orange-400 text-[9px] font-black px-1.5 py-0.2 rounded-sm tracking-wider uppercase border border-orange-500/40 shadow-sm z-10 pointer-events-none">
                    {item.badge}
                  </span>
                )}

                <button
                  onClick={() => handleSelectCategory(item.id)}
                  className={`relative px-3 sm:px-3.5 py-2 text-xs font-bold tracking-tight whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-black/25 text-white shadow-inner font-extrabold'
                      : 'text-orange-50 hover:bg-black/15 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-t-sm" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
