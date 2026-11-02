import React, { useState, useMemo } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HeroSlider } from './components/HeroSlider';
import { TechnicalServiceModal } from './components/TechnicalServiceModal';
import { ProductCard } from './components/ProductCard';
import { TechnicalServicePage } from './components/TechnicalServicePage';
import { HostingDomainsPage } from './components/HostingDomainsPage';
import { WebDevelopmentPage } from './components/WebDevelopmentPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { EmailConfirmationModal } from './components/EmailConfirmationModal';
import { UserAccountModal } from './components/UserAccountModal';
import { AdminPanel } from './components/AdminPanel';
import { SocialShareModal } from './components/SocialShareModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import {
  ChevronRight,
  SlidersHorizontal,
  Flame,
  CheckCircle2,
  Sparkles,
  Search,
  FilterX
} from 'lucide-react';

const MainStoreContent: React.FC = () => {
  const {
    products,
    restoreDefaultCatalog,
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    searchQuery,
    setSearchQuery,
    toastMessage,
    currentView,
    setCurrentView
  } = useStore();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [priceRange, setPriceRange] = useState<string>('all');

  // Compute available brands
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    products.forEach(p => brandsSet.add(p.brand));
    return Array.from(brandsSet);
  }, [products]);

  // Filter & Sort products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategoryFilter !== 'todos' && p.category !== selectedCategoryFilter) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesSpecs = Object.values(p.specs).some(
          val => typeof val === 'string' && val.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesSpecs) {
          return false;
        }
      }

      // Brand filter
      if (selectedBrand !== 'all' && p.brand !== selectedBrand) {
        return false;
      }

      // In-stock only
      if (onlyInStock && p.stock <= 0) {
        return false;
      }

      // Price brackets
      if (priceRange === 'under-1000' && p.price >= 1000) return false;
      if (priceRange === '1000-2500' && (p.price < 1000 || p.price > 2500)) return false;
      if (priceRange === '2500-4000' && (p.price < 2500 || p.price > 4000)) return false;
      if (priceRange === 'over-4000' && p.price <= 4000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured or original
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [products, selectedCategoryFilter, searchQuery, selectedBrand, onlyInStock, priceRange, sortBy]);

  const resetFilters = () => {
    setSelectedCategoryFilter('todos');
    setSelectedBrand('all');
    setOnlyInStock(false);
    setPriceRange('all');
    setSearchQuery('');
  };

  // Breadcrumb label helper
  const getCategoryBreadcrumb = () => {
    switch (selectedCategoryFilter) {
      case 'pc-gamer': return 'PC GAMER / GAMA INTEL & AMD';
      case 'computadoras': return 'COMPUTADORAS / OFICINA & EMPRESA';
      case 'cctv': return 'CCTV / CÁMARAS DE VIDEOVIGILANCIA & SEGURIDAD';
      case 'punto-de-venta': return 'PUNTO DE VENTA (POS)';
      case 'todo-en-uno': return 'TODO EN UNO (ALL-IN-ONE)';
      case 'laptops': return 'LAPTOPS GAMER & PROFESIONALES';
      case 'monitores': return 'MONITORES GAMER 144HZ / 240HZ';
      case 'impresoras': return 'IMPRESORAS & MULTIFUNCIONALES';
      case 'componentes': return 'COMPONENTES & TARJETAS DE VIDEO';
      case 'accesorios': return 'ACCESORIOS & PERIFÉRICOS';
      default: return 'CATÁLOGO GENERAL';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-orange-500/50 flex items-center gap-2 text-xs font-semibold animate-in slide-in-from-top duration-300">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header & Nav */}
      <Header />
      <Navigation />

      {/* View Switcher: Shop vs Technical Support vs Hosting & Domains vs Web & Apps */}
      {currentView === 'shop' && (
        <>
          {/* 5-Slide Interactive Main Slider */}
          {(selectedCategoryFilter === 'todos' || selectedCategoryFilter === 'pc-gamer') && !searchQuery && (
            <HeroSlider />
          )}

          {/* Main Catalog Section */}
          <main id="catalog-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
            {/* Breadcrumb (as seen in reference screenshot) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <button
                onClick={() => {
                  setSelectedCategoryFilter('todos');
                  setSearchQuery('');
                }}
                className="hover:text-orange-600 cursor-pointer"
              >
                Inicio
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-orange-600 font-bold uppercase tracking-wider">
                {getCategoryBreadcrumb()}
              </span>
              {searchQuery && (
                <>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-slate-700">Búsqueda: "{searchQuery}"</span>
                </>
              )}
            </div>

            {/* Filter and Control Bar */}
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3.5 flex flex-wrap items-center justify-between gap-3">
              {/* Filter pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mr-1">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-orange-600" />
                  <span>Filtros:</span>
                </span>

                {/* Brand Filter */}
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg py-1 px-2.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer"
                >
                  <option value="all">Todas las Marcas</option>
                  {availableBrands.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg py-1 px-2.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer"
                >
                  <option value="all">Todos los Precios</option>
                  <option value="under-1000">Hasta S/ 1,000</option>
                  <option value="1000-2500">S/ 1,000 - S/ 2,500</option>
                  <option value="2500-4000">S/ 2,500 - S/ 4,000</option>
                  <option value="over-4000">Más de S/ 4,000</option>
                </select>

                {/* Stock Toggle */}
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="accent-orange-600 w-3.5 h-3.5 rounded"
                  />
                  <span>Sólo en stock</span>
                </label>
              </div>

              {/* Sort & Counter */}
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-xs text-slate-500 font-medium">
                  <strong className="text-slate-800">{filteredProducts.length}</strong> productos
                </span>

                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <span className="font-bold text-slate-700">Ordenar:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-2.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer"
                  >
                    <option value="featured">Destacados</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="rating">Mejor Calificados</option>
                  </select>
                </div>

                {(selectedBrand !== 'all' || priceRange !== 'all' || onlyInStock || searchQuery || selectedCategoryFilter !== 'todos') && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1 cursor-pointer transition"
                  >
                    <FilterX className="w-3.5 h-3.5" />
                    <span>Limpiar filtros</span>
                  </button>
                )}
              </div>
            </div>

            {/* Products Grid (Matching the 4-column reference in image_b6847fe7.png) */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-base text-slate-800">
                  No encontramos productos con los filtros seleccionados
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Intenta cambiar la categoría o limpiar los filtros para visualizar todo nuestro inventario disponible.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                  <button
                    onClick={resetFilters}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-2 px-5 rounded-lg transition cursor-pointer shadow-sm"
                  >
                    Restablecer Filtros
                  </button>
                  <button
                    onClick={restoreDefaultCatalog}
                    className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs py-2 px-4 rounded-lg transition cursor-pointer flex items-center gap-1.5 shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                    <span>Sincronizar Catálogo Completo</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </>
      )}

      {/* Dedicated Section: Soporte Técnico a Domicilio y en Taller Yurimaguas */}
      {currentView === 'technical-service' && <TechnicalServicePage />}

      {/* Dedicated Section: Hosting NVMe & Dominios */}
      {currentView === 'hosting-domains' && <HostingDomainsPage />}

      {/* Dedicated Section: Desarrollo de Sistemas Webs & Apps */}
      {currentView === 'web-app-development' && <WebDevelopmentPage />}

      {/* Floating Elements & Modals */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
      <TechnicalServiceModal />
      <EmailConfirmationModal />
      <UserAccountModal />
      <AdminPanel />
      <SocialShareModal />
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainStoreContent />
    </StoreProvider>
  );
}
