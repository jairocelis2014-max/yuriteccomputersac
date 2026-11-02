import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, User, Phone, Check } from 'lucide-react';
import { SALES_ADVISORS } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState(SALES_ADVISORS[0].id);

  const predefinedOptions = [
    { label: '🎮 Cotizar Computadora o Laptop Gamer', text: 'Hola, deseo cotizar una computadora o laptop en Yuritec Computer SAC.' },
    { label: '🛠️ Solicitar Soporte Técnico a Domicilio en Yurimaguas', text: 'Hola, necesito solicitar una visita técnica a domicilio en Yurimaguas para reparar mi computadora.' },
    { label: '🏪 Traer computadora a revisión en Taller Central', text: 'Hola, deseo llevar mi computadora al taller central de Yuritec en Calle Humbolt c/ Claveles para diagnóstico.' },
    { label: '🌐 Contratar Hosting (S/ 100 a S/ 350) o Dominio (S/ 60)', text: 'Hola, deseo contratar un plan de Hosting NVMe y registrar un Dominio web con Yuritec.' },
    { label: '💻 Cotizar Página Web, Tienda Online o Sistema a Medida', text: 'Hola, deseo cotizar el desarrollo de una página web administrable / sistema web para mi negocio.' },
    { label: '📦 Consultar estado de pedido / Compra online', text: 'Hola, quisiera consultar sobre el despacho de mi compra.' }
  ];

  const handleSendToWhatsApp = (text: string) => {
    const advisor = SALES_ADVISORS.find(a => a.id === selectedAdvisor) || SALES_ADVISORS[0];
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${advisor.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start font-sans">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-92 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom duration-200">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xs">YURITEC COMPUTER SAC</h4>
                <span className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                  Atención directa con 2 Asesores
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3.5 bg-slate-50 space-y-3 text-xs">
            {/* Advisor Selector */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                Selecciona tu Asesor de Atención:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SALES_ADVISORS.map(adv => (
                  <button
                    key={adv.id}
                    onClick={() => setSelectedAdvisor(adv.id)}
                    className={`p-2 rounded-xl border text-left transition-all ${
                      selectedAdvisor === adv.id
                        ? 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold shadow-xs ring-1 ring-emerald-500'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-[11px] truncate flex items-center justify-between">
                      <span>{adv.name}</span>
                      {selectedAdvisor === adv.id && <Check className="w-3 h-3 text-emerald-600" />}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500">{adv.phone}</div>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-slate-600 text-[11px] font-medium leading-relaxed">
              ¿En qué podemos asesorarte hoy? Haz clic en tu consulta:
            </p>

            <div className="space-y-1.5 pt-0.5 max-h-56 overflow-y-auto pr-1">
              {predefinedOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendToWhatsApp(opt.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-800 hover:text-emerald-900 transition flex items-center justify-between text-[11px] font-semibold cursor-pointer group shadow-2xs"
                >
                  <span className="leading-snug">{opt.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-1 transition-transform group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-emerald-500/40 flex items-center justify-center transition-all duration-300 hover:scale-108 cursor-pointer ring-4 ring-white"
        title="Contáctanos por WhatsApp con nuestros 2 Asesores"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </button>
    </div>
  );
};
