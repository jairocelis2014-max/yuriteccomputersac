import React, { useState } from 'react';
import {
  Server,
  Globe,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Mail,
  HardDrive,
  Cpu,
  Search,
  ShoppingCart,
  MessageCircle,
  Sparkles,
  Lock,
  ArrowRight,
  Database
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { HOSTING_PLANS, DOMAIN_PRICING, SALES_ADVISORS } from '../data/mockData';

export const HostingDomainsPage: React.FC = () => {
  const { addCustomServiceToCart, showToast } = useStore();

  const [domainSearch, setDomainSearch] = useState('');
  const [selectedTld, setSelectedTld] = useState('.com');
  const [domainResult, setDomainResult] = useState<{
    name: string;
    tld: string;
    available: boolean;
    price: number;
  } | null>(null);

  const handleDomainCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainSearch.trim()) {
      showToast('Ingresa el nombre del dominio que deseas buscar.');
      return;
    }

    const cleanName = domainSearch.toLowerCase().replace(/[^a-z0-9-]/g, '');
    const tldObj = DOMAIN_PRICING.find(d => d.extension === selectedTld) || DOMAIN_PRICING[0];

    // Simulating availability check (most available, popular taken)
    const isTaken = ['google', 'facebook', 'yuritec', 'amazon', 'microsoft'].includes(cleanName);

    setDomainResult({
      name: cleanName,
      tld: tldObj.extension || tldObj.tld,
      available: !isTaken,
      price: tldObj.priceAnnual
    });
  };

  const handleHireDomain = () => {
    if (!domainResult) return;
    const fullDomain = `${domainResult.name}${domainResult.tld}`;
    addCustomServiceToCart({
      name: `Registro de Dominio: ${fullDomain}`,
      price: domainResult.price,
      category: 'Dominios Web',
      description: `Registro anual del dominio web ${fullDomain} con DNS administrable, protección WHOIS y activación inmediata por S/ ${domainResult.price}/año.`,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
    });
  };

  const handleHireHosting = (plan: typeof HOSTING_PLANS[0]) => {
    addCustomServiceToCart({
      name: `Hosting ${plan.name} (${plan.storage})`,
      price: plan.priceAnnual,
      category: 'Hosting Web',
      description: `Plan de Hosting Anual ${plan.name} con ${plan.storage} de almacenamiento NVMe SSD ultra rápido, cPanel, correos corporativos y certificado SSL incluido.`,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80'
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-blue-500/20">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/20 border border-sky-400/40 rounded-full text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              Infraestructura Cloud NVMe de Alta Velocidad
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Hosting NVMe & Registro de Dominios para tu Negocio
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Servidores optimizados en discos de estado sólido NVMe, 10 veces más rápidos que el hosting tradicional. Paquetes desde <span className="text-orange-400 font-bold">10 GB a 150 GB</span> de almacenamiento con precios de <span className="text-white font-extrabold underline decoration-orange-500">S/ 100 a S/ 350 anual</span>. Además, registra tu dominio oficial a solo <span className="text-sky-400 font-bold">S/ 60 soles anuales</span>.
            </p>

            {/* Sales Advisors Contacts */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-xs uppercase font-bold text-slate-400">Asesores de Activación Web:</span>
              {SALES_ADVISORS.map(adv => (
                <a
                  key={adv.id}
                  href={`https://wa.me/${adv.phoneRaw}?text=Hola%20${encodeURIComponent(adv.name)},%20deseo%20contratar%20un%20plan%20de%20hosting%20y%20dominio%20con%20Yuritec`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{adv.name}: <strong className="text-white">{adv.phone}</strong></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Domain Search Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 mb-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Encuentra y Registra tu Dominio Web</h2>
              <p className="text-xs text-slate-500">Tu nombre en internet a precio fijo garantizado: <span className="font-bold text-orange-600">S/ 60.00 / año</span></p>
            </div>
          </div>

          <form onSubmit={handleDomainCheck} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex rounded-xl border-2 border-slate-300 focus-within:border-orange-500 overflow-hidden bg-slate-50 focus-within:bg-white transition-all">
              <div className="px-3.5 flex items-center text-slate-400 font-mono text-sm">www.</div>
              <input
                type="text"
                placeholder="tunegocio o tuempresa"
                value={domainSearch}
                onChange={e => setDomainSearch(e.target.value)}
                className="flex-1 py-3 px-2 bg-transparent text-sm font-semibold focus:outline-none text-slate-800"
              />
              <select
                value={selectedTld}
                onChange={e => setSelectedTld(e.target.value)}
                className="bg-slate-200 text-slate-800 font-bold px-3 py-3 text-sm border-l border-slate-300 focus:outline-none cursor-pointer"
              >
                {DOMAIN_PRICING.map(d => (
                  <option key={d.extension} value={d.extension}>{d.extension} (S/ {d.priceAnnual}/año)</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-black px-8 py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Verificar
            </button>
          </form>

          {/* Domain Result Box */}
          {domainResult && (
            <div className={`mt-5 p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              domainResult.available
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}>
              <div className="flex items-center gap-3">
                {domainResult.available ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                ) : (
                  <Lock className="w-6 h-6 text-rose-600 shrink-0" />
                )}
                <div>
                  <div className="font-mono text-base font-black">
                    www.{domainResult.name}{domainResult.tld}
                  </div>
                  <div className="text-xs text-slate-600">
                    {domainResult.available
                      ? '¡Felicidades! Este dominio se encuentra DISPONIBLE para registro inmediato.'
                      : 'Este dominio ya se encuentra ocupado por otra entidad. Prueba con otra extensión o nombre.'}
                  </div>
                </div>
              </div>

              {domainResult.available && (
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">Tarifa Anual</span>
                    <span className="text-xl font-black text-emerald-700">S/ {domainResult.price}.00</span>
                  </div>
                  <button
                    onClick={handleHireDomain}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-md transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Añadir al Carrito
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Supported Extensions Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold">Extensiones incluidas:</span>
            {DOMAIN_PRICING.map(d => (
              <span key={d.extension} className="bg-slate-100 px-2.5 py-1 rounded-md font-mono text-slate-700">
                {d.extension} • <strong className="text-orange-600">S/ {d.priceAnnual}/año</strong>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hosting Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Server className="w-3.5 h-3.5" />
            Planes Estructurados por Capacidad de Almacenamiento
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Elige el Hosting Perfecto para tu Proyecto
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Todos nuestros planes incluyen panel de control cPanel en español, certificado de seguridad SSL gratis, cuentas de correo corporativo y copias de seguridad.
          </p>
        </div>

        {/* 5 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {HOSTING_PLANS.map(plan => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between relative ${
                plan.isPopular
                  ? 'border-2 border-orange-500 shadow-xl shadow-orange-500/10 scale-102 lg:-translate-y-2'
                  : 'border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md">
                  Más Recomendado
                </div>
              )}

              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">{plan.name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-black text-slate-900">S/ {plan.priceAnnual}</span>
                  <span className="text-xs text-slate-500 font-semibold">/ año</span>
                </div>
                <p className="text-xs text-slate-500 mb-4 h-10">{plan.idealFor}</p>

                {/* Storage Highlight Box */}
                <div className="bg-orange-50 border border-orange-200/60 rounded-xl p-3 mb-5 text-center">
                  <span className="text-[11px] font-bold text-orange-700 uppercase tracking-wider block">Almacenamiento NVMe</span>
                  <span className="text-2xl font-black text-orange-950">{plan.storage}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleHireHosting(plan)}
                  className={`w-full font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all ${
                    plan.isPopular
                      ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-orange-600/30'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Contratar Plan
                </button>

                <a
                  href={`https://wa.me/51920159765?text=Hola%20Yuritec,%20deseo%20contratar%20el%20Hosting%20${plan.name}%20de%20${plan.storage}%20(S/%20${plan.priceAnnual}/a%C3%B1o)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 text-slate-700 text-[11px] font-semibold py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications & Guarantees */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-slate-900">¿Qué incluye la plataforma Hosting de Yuritec?</h3>
            <p className="text-xs text-slate-500 mt-1">Garantía de uptime 99.9% con atención en español</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <HardDrive className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Discos NVMe Enterprise</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Lectura y escritura ultra rápida que reduce a la mitad el tiempo de carga de tu sitio web o tienda virtual.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Certificados SSL Gratuitos</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tus visitantes verán el candado verde y la navegación segura HTTPS con emisión y renovación automática Let's Encrypt.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Correos Corporativos</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Crea cuentas profesionales como contacto@tuempresa.com configurables en Outlook, Gmail o tu smartphone.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Copias de Seguridad</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Backups automáticos semanales de tus bases de datos y archivos para que nunca pierdas tu valiosa información.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
