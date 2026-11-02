import React from 'react';
import {
  ShieldCheck,
  Truck,
  Wrench,
  CreditCard,
  Zap,
  Flame,
  ArrowRight
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const HeroBanner: React.FC = () => {
  const { setSelectedCategoryFilter } = useStore();

  return (
    <div className="bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-orange-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Main Hero Promotion */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
              <Flame className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
              <span>SUPER OFERTAS DE TEMPORADA • YURITEC GAMING LAB</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Potencia Tu Experiencia con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                PC Gamer y Tecnología
              </span>{' '}
              de Alto Calibre
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              En <strong className="text-white font-semibold">YURITEC COMPUTER SAC</strong> ensamblamos equipos con componentes 100% nuevos de marcas líderes, refrigeración de vanguardia y garantía local directa en Lima y provincias.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setSelectedCategoryFilter('pc-gamer')}
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-lg shadow-orange-600/30 flex items-center gap-2 transition cursor-pointer"
              >
                <span>Ver PCs Gamer Armadas</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedCategoryFilter('punto-de-venta')}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm px-5 py-3 rounded-lg transition cursor-pointer"
              >
                Sistemas Punto de Venta (POS)
              </button>
            </div>
          </div>

          {/* Side Promo Card */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-xl relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wider uppercase">
                COMBO TOP
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 mb-2">
                <Zap className="w-4 h-4" />
                <span>CONFIGURACIÓN RECOMENDADA</span>
              </div>

              <h3 className="text-base font-bold text-white mb-1">
                PC Gamer Draco RGB Core i7 13th
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                Intel Core i7 13700F • RTX 4060 8GB • 32GB RAM DDR5 • 1TB NVMe Gen4
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-black text-orange-400">
                  S/ 3,899
                </span>
                <span className="text-xs text-slate-500 line-through">
                  S/ 4,299
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold">
                  Ahorra S/ 400
                </span>
              </div>

              <button
                onClick={() => setSelectedCategoryFilter('pc-gamer')}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-2.5 rounded-lg transition text-center cursor-pointer"
              >
                Personalizar y Comprar
              </button>
            </div>
          </div>
        </div>

        {/* 4 Feature Badges (Peruvian Retail Standards) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Envíos a Todo el Perú</p>
              <p className="text-[11px] text-slate-400">Shalom, Olva y Express</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Pasarela Bancaria</p>
              <p className="text-[11px] text-slate-400">Tarjetas, Yape, Plin y BCP</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Garantía Real 100%</p>
              <p className="text-[11px] text-slate-400">Hasta 3 años de cobertura</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Soporte Técnico</p>
              <p className="text-[11px] text-slate-400">Laboratorio en CompuPlaza</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
