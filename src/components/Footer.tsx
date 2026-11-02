import React from 'react';
import { useStore } from '../context/StoreContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CreditCard,
  BookOpen,
  Send,
  ArrowUp,
  Server,
  Code2,
  Wrench,
  Globe,
  MessageCircle
} from 'lucide-react';
import { SALES_ADVISORS, BUSINESS_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const { setSelectedCategoryFilter, setIsAdminOpen, setIsAccountOpen, setAccountInitialTab, setCurrentView } = useStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Top Banner with Guarantee & Payment Icons */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">
                Garantía Local & Cobertura en Yurimaguas y a Nivel Nacional
              </h4>
              <p className="text-slate-400 text-xs">
                Computadoras, Hosting NVMe, Sistemas Web y Servicio Técnico especializado en taller o a domicilio
              </p>
            </div>
          </div>

          {/* Payment badges */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-slate-300">
            <span className="px-2.5 py-1 rounded bg-purple-900/50 text-purple-300 border border-purple-700">YAPE</span>
            <span className="px-2.5 py-1 rounded bg-sky-900/50 text-sky-300 border border-sky-700">PLIN</span>
            <span className="px-2.5 py-1 rounded bg-blue-900/50 text-blue-300 border border-blue-700">BCP</span>
            <span className="px-2.5 py-1 rounded bg-blue-900/50 text-blue-300 border border-blue-700">BBVA</span>
            <span className="px-2.5 py-1 rounded bg-emerald-900/50 text-emerald-300 border border-emerald-700">BANCO DE LA NACIÓN</span>
            <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">VISA</span>
            <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">MASTERCARD</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Brand Information & Yurimaguas Address */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/LOGO_5776283b.png"
                alt="YURITEC COMPUTER SAC"
                className="h-12 w-auto object-contain bg-white/5 p-1 rounded-lg"
              />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              <strong className="text-white">YURITEC COMPUTER SAC</strong> es tu aliado tecnológico en Yurimaguas y todo el Perú. Venta de computadoras, laptops gamer, infraestructura de Hosting NVMe, registro de dominios, desarrollo de sistemas web y servicio técnico integral a domicilio y en taller.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Lunes a Sábado: 8:00 am - 7:00 pm | Dom: 9:00 am - 1:00 pm</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>ventas@yuritec.pe / soporte@yuritec.pe</span>
              </div>
            </div>

            {/* Asesores de Ventas Cards */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-2">
                Asesores de Ventas & Soporte Directo:
              </span>
              <div className="flex flex-wrap gap-2">
                {SALES_ADVISORS.map(adv => (
                  <a
                    key={adv.id}
                    href={`https://wa.me/${adv.phoneRaw}?text=Hola%20${encodeURIComponent(adv.name)},%20deseo%20atenci%C3%B3n%20en%20Yuritec%20Computer`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-emerald-950 border border-slate-800 hover:border-emerald-600 px-3 py-1.5 rounded-xl transition-all text-xs group"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <div>
                      <span className="text-white font-bold block leading-none">{adv.name}</span>
                      <span className="text-emerald-400 font-mono text-[10px]">{adv.phone}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Servicios Digitales & Cloud */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Servicios Digitales
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setCurrentView('hosting-domains');
                    scrollToTop();
                  }}
                  className="text-slate-400 hover:text-orange-400 transition cursor-pointer flex items-center gap-1.5"
                >
                  <Server className="w-3.5 h-3.5 text-orange-400" />
                  <span>Hosting NVMe (S/ 100 - S/ 350)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('hosting-domains');
                    scrollToTop();
                  }}
                  className="text-slate-400 hover:text-orange-400 transition cursor-pointer flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-sky-400" />
                  <span>Registro de Dominios (S/ 60/año)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('web-app-development');
                    scrollToTop();
                  }}
                  className="text-slate-400 hover:text-orange-400 transition cursor-pointer flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Desarrollo de Sistemas & Apps</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('web-app-development');
                    scrollToTop();
                  }}
                  className="text-slate-400 hover:text-orange-400 transition cursor-pointer"
                >
                  Páginas Web Administrables
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('web-app-development');
                    scrollToTop();
                  }}
                  className="text-slate-400 hover:text-orange-400 transition cursor-pointer"
                >
                  Landing Pages de Alta Conversión
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Soporte Técnico & Tienda */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Soporte & Garantía
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setCurrentView('technical-service');
                    scrollToTop();
                  }}
                  className="text-slate-400 hover:text-orange-400 transition cursor-pointer flex items-center gap-1.5"
                >
                  <Wrench className="w-3.5 h-3.5 text-amber-400" />
                  <span>Soporte Técnico a Domicilio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('technical-service');
                    scrollToTop();
                  }}
                  className="text-slate-400 hover:text-orange-400 transition cursor-pointer"
                >
                  Soporte en Taller Yuritec
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setAccountInitialTab('support');
                    setIsAccountOpen(true);
                  }}
                  className="text-slate-400 hover:text-orange-400 transition cursor-pointer"
                >
                  Tickets de Soporte Técnico
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setAccountInitialTab('orders');
                    setIsAccountOpen(true);
                  }}
                  className="text-slate-400 hover:text-orange-400 transition cursor-pointer"
                >
                  Seguimiento de Despacho
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="text-orange-400 hover:text-orange-300 font-semibold cursor-pointer"
                >
                  Panel Administrativo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Libro de reclamaciones */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Seguridad & Legal
            </h4>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span>Libro de Reclamaciones</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Conforme a lo establecido en el Código de Protección y Defensa del Consumidor (Ley N° 29571).
              </p>
              <div className="text-[10px] text-orange-400 font-mono">
                RUC: 10434869230
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} YURITEC COMPUTER SAC. Calle Humbolt c/ Claveles - Barrio Las Flores - Yurimaguas, Loreto.</p>
          <div className="flex items-center gap-4">
            <span>Precios incluyen IGV (18%)</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white cursor-pointer"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
