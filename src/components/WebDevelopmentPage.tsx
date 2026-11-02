import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Smartphone,
  Layers,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  FileText,
  CreditCard,
  Database,
  ShieldCheck,
  Rocket,
  Settings,
  ShoppingCart,
  Send,
  Monitor
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { WEB_DEV_SERVICES, SALES_ADVISORS } from '../data/mockData';

export const WebDevelopmentPage: React.FC = () => {
  const { addCustomServiceToCart, showToast } = useStore();

  // Quote Calculator State
  const [selectedType, setSelectedType] = useState<string>('web_administrable');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['pasarela_pagos', 'panel_admin']);
  const [projectNotes, setProjectNotes] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const basePrices: Record<string, { title: string; price: number; time: string; desc: string }> = {
    landing_page: {
      title: 'Landing Page de Alta Conversión',
      price: 380,
      time: '3 a 5 días',
      desc: 'Página de impacto para captar clientes rápidamente y promocionar productos o servicios.'
    },
    web_basica: {
      title: 'Página Web Básica / Corporativa',
      price: 550,
      time: '5 a 7 días',
      desc: 'Presencia formal para empresas con secciones de Nosotros, Servicios, Catálogo y Contacto.'
    },
    web_administrable: {
      title: 'Página Web Administrable (CMS / E-Commerce)',
      price: 950,
      time: '10 a 14 días',
      desc: 'Panel de administración estilo WordPress/WooCommerce para subir productos, fotos y precios.'
    },
    sistema_a_medida: {
      title: 'Sistema Web a Medida / App Móvil',
      price: 1800,
      time: '15 a 25 días',
      desc: 'Software empresarial en la nube para control de ventas, inventarios, facturación SUNAT o App.'
    }
  };

  const addonsList = [
    { id: 'pasarela_pagos', label: 'Pasarela de Pagos (Yape, Plin, Tarjetas Visa/Mastercard)', price: 180 },
    { id: 'facturacion_sunat', label: 'Facturación Electrónica SUNAT (Boletas y Facturas XML)', price: 350 },
    { id: 'panel_admin', label: 'Panel Administrativo Multiusuario con Roles y Métricas', price: 200 },
    { id: 'whatsapp_notif', label: 'Notificaciones automáticas por WhatsApp / Correo', price: 120 },
    { id: 'app_movil_pwa', label: 'Adaptación a App Móvil Instalable (Android / iOS PWA)', price: 300 }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const currentBase = basePrices[selectedType] || basePrices.web_administrable;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = addonsList.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);
  const totalEstimated = currentBase.price + addonsTotal;

  const handleAddToCart = () => {
    const addonNames = selectedAddons
      .map(id => addonsList.find(a => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    addCustomServiceToCart({
      name: `Desarrollo: ${currentBase.title}`,
      price: totalEstimated,
      category: 'Desarrollo Web & Software',
      description: `${currentBase.desc} Incluye complementos: ${addonNames || 'Configuración estándar'}. Plazo estimado: ${currentBase.time}.`,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    });
  };

  const handleSendToAdvisor = (advisorNumber: string, advisorName: string) => {
    if (!clientName.trim() || !clientPhone.trim()) {
      showToast('Por favor ingresa tu nombre y teléfono para la cotización.');
      return;
    }

    const addonNames = selectedAddons
      .map(id => `• ${addonsList.find(a => a.id === id)?.label}`)
      .join('%0A');

    const msg = `¡Hola ${advisorName}! Quiero cotizar un proyecto de Desarrollo Web/App con Yuritec:%0A%0A*Cliente:* ${encodeURIComponent(clientName)} (${clientPhone})%0A*Tipo de Proyecto:* ${encodeURIComponent(currentBase.title)}%0A*Presupuesto Estimado:* S/ ${totalEstimated}%0A*Plazo:* ${currentBase.time}%0A%0A*Complementos seleccionados:*%0A${addonNames}%0A%0A*Detalles adicionales:* ${encodeURIComponent(projectNotes || 'Sin notas adicionales')}`;

    window.open(`https://wa.me/${advisorNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-indigo-500/20">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-400/40 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Code2 className="w-3.5 h-3.5" />
              Software & Soluciones Digitales Yuritec
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Desarrollo de <span className="text-indigo-400">Sistemas Webs</span>, <span className="text-orange-500">Tiendas Online</span> y <span className="text-sky-400">Apps Móviles</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Transformamos tu negocio tradicional en una máquina de ventas digital. Desarrollamos desde <span className="text-white font-semibold">páginas web básicas</span> y <span className="text-white font-semibold">landing pages de alta conversión</span>, hasta <span className="text-orange-400 font-bold">tiendas web 100% administrables</span> y sistemas empresariales a medida con facturación electrónica SUNAT.
            </p>

            {/* Quick Advisor Contact Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-xs uppercase font-bold text-slate-400">Asesores de Proyectos Digitales:</span>
              {SALES_ADVISORS.map(adv => (
                <a
                  key={adv.id}
                  href={`https://wa.me/${adv.phoneRaw}?text=Hola%20${encodeURIComponent(adv.name)},%20tengo%20un%20proyecto%20de%20p%C3%A1gina%20web%20o%20sistema%20para%20cotizar`}
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

      {/* 4 Core Development Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Nuestros 4 Pilares de Desarrollo Digital
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Elegimos la tecnología adecuada para tu modelo de negocio y presupuesto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEB_DEV_SERVICES.map(srv => {
            const icons: Record<string, any> = {
              'landing-pages': Rocket,
              'paginas-basicas': Layout,
              'paginas-administrables': Settings,
              'sistemas-apps': Smartphone
            };
            const Icon = icons[srv.id] || Code2;

            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{srv.title}</h3>
                  <div className="text-indigo-600 font-black text-xs uppercase tracking-wider mb-2">
                    {srv.priceStarting}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-400 mb-3">
                    Entrega: {srv.deliveryTime}
                  </div>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {srv.description}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-600 mb-6 border-t border-slate-100 pt-3">
                    {srv.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    if (srv.id === 'landing-pages') setSelectedType('landing_page');
                    else if (srv.id === 'paginas-basicas') setSelectedType('web_basica');
                    else if (srv.id === 'paginas-administrables') setSelectedType('web_administrable');
                    else setSelectedType('sistema_a_medida');

                    const element = document.getElementById('cotizador-interactivo');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-800 text-xs font-bold py-2.5 rounded-xl transition-all"
                >
                  Personalizar y Cotizar
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Estimator & Quote Form */}
      <div id="cotizador-interactivo" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Cotizador Interactivo de Proyectos</h3>
              <p className="text-xs text-slate-500">
                Selecciona las características de tu proyecto y recibe un presupuesto transparente al instante
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Type Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Selecciona el Tipo de Solución:
                </label>
                <div className="space-y-2">
                  {Object.entries(basePrices).map(([key, data]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedType(key)}
                      className={`cursor-pointer p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${
                        selectedType === key
                          ? 'border-indigo-600 bg-indigo-50/60 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-slate-900">{data.title}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{data.desc}</div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <div className="text-sm font-black text-indigo-700">S/ {data.price}</div>
                        <div className="text-[10px] text-slate-400">{data.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Addons Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Módulos Adicionales e Integraciones:
                </label>
                <div className="space-y-2">
                  {addonsList.map(addon => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`cursor-pointer p-3 rounded-xl border transition-all flex items-center justify-between text-xs ${
                          isChecked
                            ? 'border-emerald-500 bg-emerald-50/50 text-emerald-950 font-semibold'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            readOnly
                            className="rounded text-emerald-600 focus:ring-0"
                          />
                          <span>{addon.label}</span>
                        </div>
                        <span className="font-mono font-bold text-slate-800 shrink-0 ml-2">
                          +S/ {addon.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Client Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Tu Nombre o Empresa *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Inversiones Selva SAC"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Teléfono WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="920 159 765"
                    value={clientPhone}
                    onChange={e => setClientPhone(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Notas o requerimientos especiales:</label>
                <textarea
                  rows={2}
                  placeholder="Ej: Necesito que se conecte con lector de código de barras y emita ticket térmico..."
                  value={projectNotes}
                  onChange={e => setProjectNotes(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Breakdown & Action Column */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase font-bold text-indigo-400 mb-1">Resumen de Cotización</div>
                <h4 className="text-xl font-black mb-4">{currentBase.title}</h4>

                <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3 mb-4">
                  <div className="flex justify-between">
                    <span>Base del proyecto:</span>
                    <strong className="text-white font-mono">S/ {currentBase.price}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Plazo de entrega:</span>
                    <strong className="text-sky-300">{currentBase.time}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Módulos extras ({selectedAddons.length}):</span>
                    <strong className="text-white font-mono">S/ {addonsTotal}</strong>
                  </div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 mb-6">
                  <div className="text-xs text-slate-400">Total Estimado del Proyecto:</div>
                  <div className="text-3xl font-black text-amber-400 font-mono mt-1">
                    S/ {totalEstimated}.00
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Incluye 1 año de Hosting NVMe + Dominio + Soporte post-entrega.
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Añadir al Carrito de la Tienda
                </button>

                <div className="text-center text-[11px] text-slate-400 font-semibold">O cotiza directamente con un asesor:</div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleSendToAdvisor('51920159765', 'Asesor 1 (920 159 765)')}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-[11px] flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Asesor 1 (920...)
                  </button>
                  <button
                    onClick={() => handleSendToAdvisor('51907373993', 'Asesor 2 (907 373 993)')}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-[11px] flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Asesor 2 (907...)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
