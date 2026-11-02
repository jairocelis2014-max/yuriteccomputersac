import React, { useState } from 'react';
import {
  Search,
  ShoppingCart,
  User,
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  ChevronDown,
  Package,
  Wrench,
  Settings,
  LogOut,
  X,
  Sparkles
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCategory } from '../types';

export const Header: React.FC = () => {
  const {
    products,
    cartCount,
    cartSubtotal,
    setIsCartOpen,
    setIsAccountOpen,
    setAccountInitialTab,
    setIsAdminOpen,
    searchQuery,
    setSearchQuery,
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    currentUser,
    orders,
    tickets,
    setIsServiceModalOpen,
    setSelectedServiceModality,
    currentView,
    setCurrentView
  } = useStore();


  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categoriesList: { id: string; label: string }[] = [
    { id: 'todos', label: 'Todas las categorías' },
    { id: 'pc-gamer', label: 'PC Gamer' },
    { id: 'computadoras', label: 'Computadoras' },
    { id: 'cctv', label: 'Cámaras y CCTV' },
    { id: 'punto-de-venta', label: 'Punto de Venta' },
    { id: 'todo-en-uno', label: 'Todo En Uno' },
    { id: 'laptops', label: 'Laptops' },
    { id: 'monitores', label: 'Monitores' },
    { id: 'impresoras', label: 'Impresoras' },
    { id: 'componentes', label: 'Componentes' },
    { id: 'accesorios', label: 'Accesorios' }
  ];

  // Live search suggestions
  const searchSuggestions = searchQuery.trim().length > 1
    ? products
        .filter(p =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  const handleOpenAccountTab = (tab: 'orders' | 'support' | 'profile') => {
    setAccountInitialTab(tab);
    setIsAccountOpen(true);
    setIsUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
      {/* Top Info Bar with Yurimaguas Address and 2 Advisors */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              <span>Lun a Sáb 8am - 7pm • Dom 9am - 1pm</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Calle Humbolt c/ Claveles - Barrio Las Flores - Yurimaguas, Loreto</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Garantía Oficial YURITEC</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-[11px]">
            <span className="text-slate-400 hidden sm:inline">WhatsApp Asesores:</span>
            <a
              href="https://wa.me/51920159765?text=Hola%20Asesor%201,%20deseo%20atenci%C3%B3n%20en%20Yuritec%20Computer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40"
              title="Asesor 1"
            >
              <Phone className="w-3 h-3" />
              <span>920 159 765</span>
            </a>
            <a
              href="https://wa.me/51907373993?text=Hola%20Asesor%202,%20deseo%20atenci%C3%B3n%20en%20Yuritec%20Computer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-bold transition bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40"
              title="Asesor 2"
            >
              <Phone className="w-3 h-3" />
              <span>907 373 993</span>
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-xs text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1 cursor-pointer transition"
            >
              <Settings className="w-3 h-3" />
              <span>Panel Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <button
              onClick={() => {
                setCurrentView('shop');
                setSelectedCategoryFilter('todos');
                setSearchQuery('');
              }}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <img
                src="/assets/aistudio/LOGO_5776283b.png"
                alt="YURITEC COMPUTER SAC"
                className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </button>
          </div>

          {/* Search Bar (Matching reference design) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-2 relative">
            <div className="flex w-full items-center border-2 border-orange-500 rounded-lg overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-orange-300 transition">
              {/* Category dropdown */}
              <div className="relative border-r border-slate-200 bg-slate-50">
                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="appearance-none bg-transparent py-2.5 pl-3 pr-8 text-xs font-semibold text-slate-700 outline-none cursor-pointer"
                >
                  {categoriesList.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>

              {/* Text input */}
              <div className="relative flex-1 flex items-center">
                <input
                  type="text"
                  placeholder="Busca computadoras, laptops gamer, monitores, accesorios..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  className="w-full py-2 px-3 text-sm text-slate-800 placeholder-slate-400 outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 mr-1 text-slate-400 hover:text-slate-600 rounded-full cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Search button */}
              <button
                onClick={() => setIsSearchFocused(false)}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs px-5 py-2.5 uppercase tracking-wider flex items-center gap-1.5 transition cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>BUSCAR</span>
              </button>
            </div>

            {/* Live Search Suggestions Dropdown */}
            {isSearchFocused && searchSuggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-lg shadow-xl border border-slate-200 z-50 overflow-hidden divide-y divide-slate-100">
                <div className="p-2 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50">
                  Resultados sugeridos
                </div>
                {searchSuggestions.map((prod) => (
                  <div
                    key={prod.id}
                    onMouseDown={() => {
                      setSearchQuery(prod.name);
                      setSelectedCategoryFilter('todos');
                    }}
                    className="flex items-center gap-3 p-2.5 hover:bg-orange-50 cursor-pointer transition"
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-10 h-10 object-cover rounded border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-800 truncate">
                        {prod.name}
                      </p>
                      <p className="text-xs text-orange-600 font-bold">
                        S/ {prod.price.toLocaleString('es-PE')}
                      </p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      {prod.category}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Soporte Técnico Button (Tienda o Domicilio) */}
            <button
              onClick={() => {
                setCurrentView('technical-service');
              }}
              className="hidden sm:flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-3 py-2 rounded-lg font-bold text-xs border border-slate-700 hover:border-orange-500 transition cursor-pointer shadow-xs"
              title="Solicitar soporte técnico en tienda o a domicilio"
            >
              <Wrench className="w-4 h-4 text-orange-400" />
              <span>Soporte Técnico</span>
            </button>

            {/* User Account Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-100 transition cursor-pointer text-slate-700"
              >
                <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm border border-orange-200">
                  <User className="w-5 h-5" />
                </div>
                <div className="hidden lg:block text-left text-xs leading-tight">
                  <span className="text-slate-400 block font-normal">Hola,</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1">
                    {currentUser.name.split(' ')[0]}
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </span>
                </div>
              </button>


              {/* User Menu Modal / Dropdown */}
              {isUserMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50"
                  onMouseLeave={() => setIsUserMenuOpen(false)}
                >
                  <div className="px-4 py-2.5 border-b border-slate-100">
                    <p className="text-xs text-slate-500">Sesión iniciada como:</p>
                    <p className="text-sm font-bold text-slate-800 truncate">{currentUser.name}</p>
                    <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={() => handleOpenAccountTab('orders')}
                      className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 cursor-pointer transition text-left"
                    >
                      <span className="flex items-center gap-2.5">
                        <Package className="w-4 h-4 text-orange-500" />
                        Mis Pedidos
                      </span>
                      <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded-full font-bold">
                        {orders.length}
                      </span>
                    </button>

                    <button
                      onClick={() => handleOpenAccountTab('support')}
                      className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 cursor-pointer transition text-left"
                    >
                      <span className="flex items-center gap-2.5">
                        <Wrench className="w-4 h-4 text-orange-500" />
                        Soporte Técnico
                      </span>
                      <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-bold">
                        {tickets.length}
                      </span>
                    </button>

                    <button
                      onClick={() => handleOpenAccountTab('profile')}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 cursor-pointer transition text-left"
                    >
                      <User className="w-4 h-4 text-orange-500" />
                      Mis Datos de Envío y Facturación
                    </button>
                  </div>

                  <div className="border-t border-slate-100 pt-1 mt-1">
                    <button
                      onClick={() => {
                        setIsAdminOpen(true);
                        setIsUserMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-bold text-slate-900 bg-slate-50 hover:bg-orange-500 hover:text-white cursor-pointer transition text-left"
                    >
                      <Settings className="w-4 h-4" />
                      Panel de Administración (Inventario)
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 bg-orange-600 hover:bg-orange-700 active:scale-95 text-white px-3.5 py-2 rounded-lg font-bold text-xs shadow-md transition cursor-pointer"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-slate-950 text-white font-extrabold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:block text-left leading-tight">
                <span className="text-[10px] text-orange-200 block font-normal">Carrito</span>
                <span className="font-extrabold text-xs">
                  S/ {cartSubtotal.toLocaleString('es-PE')}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="flex w-full items-center border border-slate-300 rounded-lg overflow-hidden bg-white shadow-xs">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-3 text-xs text-slate-800 placeholder-slate-400 outline-none"
            />
            <button
              onClick={() => setSelectedCategoryFilter('todos')}
              className="bg-orange-600 text-white p-2"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
