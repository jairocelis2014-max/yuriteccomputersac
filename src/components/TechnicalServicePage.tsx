import React, { useState } from 'react';
import {
  Wrench,
  Home,
  Store,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Search,
  MessageCircle,
  HelpCircle,
  Send,
  Sparkles,
  MapPin,
  Laptop,
  Cpu,
  HardDrive,
  Activity,
  AlertCircle
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { SALES_ADVISORS, BUSINESS_INFO } from '../data/mockData';
import { TechnicalServiceModality } from '../types';

export const TechnicalServicePage: React.FC = () => {
  const { createServiceBooking, serviceBookings, showToast } = useStore();

  const [activeTab, setActiveTab] = useState<'solicitar' | 'rastrear' | 'tarifas'>('solicitar');
  const [modality, setModality] = useState<TechnicalServiceModality>('a_domicilio');

  // Form state
  const [formData, setFormData] = useState<{
    deviceType: 'pc_escritorio' | 'laptop' | 'servidor';
    brandModel: string;
    serviceCategory: 'diagnostico_falla' | 'mantenimiento_preventivo' | 'formateo_software' | 'repotenciacion_hardware' | 'cambio_pantalla_teclado' | 'limpieza_pasta_termica';
    issueDescription: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerDni: string;
    address: string;
    district: string;
    preferredDate: string;
    preferredTime: string;
  }>({
    deviceType: 'pc_escritorio',
    brandModel: '',
    serviceCategory: 'repotenciacion_hardware',
    issueDescription: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerDni: '',
    address: 'Barrio Las Flores, Yurimaguas',
    district: 'Yurimaguas',
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTime: '10:00 - 12:00'
  });

  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);

  // Tracking state
  const [searchCode, setSearchCode] = useState('');
  const [trackedBooking, setTrackedBooking] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.customerPhone || !formData.issueDescription) {
      showToast('Por favor completa los campos obligatorios.');
      return;
    }

    const created = createServiceBooking({
      serviceModality: modality,
      deviceType: formData.deviceType,
      brandModel: formData.brandModel || 'Equipo no especificado',
      serviceCategory: formData.serviceCategory,
      issueDescription: formData.issueDescription,
      customerName: formData.customerName,
      customerEmail: formData.customerEmail || 'cliente@yuritec.pe',
      customerPhone: formData.customerPhone,
      customerDni: formData.customerDni || '00000000',
      address: modality === 'a_domicilio' ? formData.address : BUSINESS_INFO.address,
      district: 'Yurimaguas',
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime
    });

    setBookingSuccess(created.id);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const cleanSearch = searchCode.trim().toLowerCase();
    const found = serviceBookings.find(
      b => b.id.toLowerCase() === cleanSearch || b.customerPhone.includes(cleanSearch) || b.customerDni.includes(cleanSearch)
    );
    setTrackedBooking(found || null);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-950 text-white rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden border border-orange-500/20">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/40 rounded-full text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Servicio Técnico Especializado en Yurimaguas
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Soporte Técnico <span className="text-orange-500">a Domicilio</span> o en <span className="text-sky-400">Taller Central</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              ¿Tu computadora o laptop está fallando o lenta? Nuestro equipo de ingenieros y técnicos certificados realiza diagnóstico, mantenimiento preventivo y reparación integral. Puedes traer tu equipo a nuestra tienda en <span className="text-white font-semibold">Calle Humbolt c/ Claveles</span> o solicitar la visita de nuestro técnico a tu casa u oficina en Yurimaguas.
            </p>

            {/* Quick Advisor Contact Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-xs uppercase font-bold text-slate-400">Atención Inmediata por WhatsApp:</span>
              {SALES_ADVISORS.map(adv => (
                <a
                  key={adv.id}
                  href={`https://wa.me/${adv.phoneRaw}?text=Hola%20${encodeURIComponent(adv.name)},%20necesito%20soporte%20t%C3%A9cnico%20para%20mi%20computadora%20en%20Yurimaguas`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{adv.name}: <strong className="text-white">{adv.phone}</strong></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center border-b border-slate-200 mb-8">
          <div className="flex space-x-2 bg-slate-200 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('solicitar')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'solicitar'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Wrench className="w-4 h-4" />
              Solicitar Soporte
            </button>
            <button
              onClick={() => setActiveTab('rastrear')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'rastrear'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Search className="w-4 h-4" />
              Rastrear Orden de Servicio
            </button>
            <button
              onClick={() => setActiveTab('tarifas')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'tarifas'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-4 h-4" />
              Servicios y Tarifas
            </button>
          </div>
        </div>

        {/* Tab 1: Formulario de Solicitud */}
        {activeTab === 'solicitar' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              {bookingSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">¡Orden de Soporte Registrada!</h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Tu código de servicio es <strong className="text-orange-600 font-mono text-lg">{bookingSuccess}</strong>. Hemos notificado al equipo técnico de Yuritec.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-600 space-y-1">
                    <div><strong>Modalidad:</strong> {modality === 'a_domicilio' ? 'Visita Técnica a Domicilio' : 'Recepción en Tienda Central Yuritec'}</div>
                    <div><strong>Cliente:</strong> {formData.customerName} ({formData.customerPhone})</div>
                    <div><strong>Ubicación:</strong> {modality === 'a_domicilio' ? formData.address : BUSINESS_INFO.address}</div>
                  </div>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={`https://wa.me/51920159765?text=Hola%20Yuritec,%20acabo%20de%20agendar%20el%20servicio%20${bookingSuccess}%20para%20${formData.customerName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Notificar por WhatsApp a Asesor 1
                    </a>
                    <button
                      onClick={() => {
                        setBookingSuccess(null);
                        setFormData({
                          ...formData,
                          issueDescription: '',
                          brandModel: ''
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold"
                    >
                      Registrar otra solicitud
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Selector de Modalidad */}
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-3">
                      1. Selecciona la Modalidad de Atención:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div
                        onClick={() => setModality('a_domicilio')}
                        className={`cursor-pointer border-2 rounded-xl p-4 transition-all flex items-start gap-3.5 ${
                          modality === 'a_domicilio'
                            ? 'border-orange-500 bg-orange-50/50 text-orange-950 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                        }`}
                      >
                        <div className={`p-2.5 rounded-lg ${modality === 'a_domicilio' ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <Home className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-black text-sm flex items-center gap-2">
                            Soporte a Domicilio
                            {modality === 'a_domicilio' && <CheckCircle2 className="w-4 h-4 text-orange-600 inline" />}
                          </div>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            Un técnico de Yuritec acude a tu casa u oficina en Yurimaguas con herramientas y repuestos.
                          </p>
                        </div>
                      </div>

                      <div
                        onClick={() => setModality('en_tienda')}
                        className={`cursor-pointer border-2 rounded-xl p-4 transition-all flex items-start gap-3.5 ${
                          modality === 'en_tienda'
                            ? 'border-sky-500 bg-sky-50/50 text-sky-950 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                        }`}
                      >
                        <div className={`p-2.5 rounded-lg ${modality === 'en_tienda' ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <Store className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-black text-sm flex items-center gap-2">
                            Llevar a Tienda / Taller
                            {modality === 'en_tienda' && <CheckCircle2 className="w-4 h-4 text-sky-600 inline" />}
                          </div>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            Trae tu equipo a <span className="font-medium text-slate-700">Calle Humbolt c/ Claveles</span> para diagnóstico gratuito en mostrador.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Datos del Equipo */}
                  <div className="border-t border-slate-100 pt-5">
                    <label className="block text-sm font-bold text-slate-800 mb-3">
                      2. Datos del Equipo y Problema:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Tipo de Equipo</label>
                        <select
                          value={formData.deviceType}
                          onChange={e => setFormData({ ...formData, deviceType: e.target.value as any })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        >
                          <option value="pc_escritorio">Computadora de Escritorio / PC Gamer</option>
                          <option value="laptop">Laptop / Notebook</option>
                          <option value="impresora">Impresora / Multifuncional</option>
                          <option value="servidor">Servidor / Redes</option>
                          <option value="otro">Otro periférico</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Marca y Modelo (Opcional)</label>
                        <input
                          type="text"
                          placeholder="Ej: Asus TUF, HP Pavilion, Core i5..."
                          value={formData.brandModel}
                          onChange={e => setFormData({ ...formData, brandModel: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Categoría de Falla</label>
                        <select
                          value={formData.serviceCategory}
                          onChange={e => setFormData({ ...formData, serviceCategory: e.target.value as any })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        >
                          <option value="mantenimiento_preventivo">Mantenimiento Preventivo / Limpieza y Pasta Térmica</option>
                          <option value="formateo_software">Formateo, Windows 11/10, Office y Antivirus</option>
                          <option value="repotenciacion_hardware">Reparación Hardware (No enciende, pantalla azul, se apaga)</option>
                          <option value="diagnostico_falla">Diagnóstico de Falla Integral y Reparación</option>
                          <option value="cambio_pantalla_teclado">Cambio de Pantalla o Teclado de Laptop</option>
                          <option value="limpieza_pasta_termica">Limpieza Profunda & Pasta Térmica Artic MX-4</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Fecha y Horario de Preferencia</label>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="date"
                            value={formData.preferredDate}
                            onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="w-full border border-slate-300 rounded-lg px-2 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                          />
                          <select
                            value={formData.preferredTime}
                            onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full border border-slate-300 rounded-lg px-2 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                          >
                            <option value="09:00 - 11:00">Mañana (9am - 11am)</option>
                            <option value="11:00 - 13:00">Mediodía (11am - 1pm)</option>
                            <option value="15:00 - 17:00">Tarde (3pm - 5pm)</option>
                            <option value="17:00 - 19:00">Noche (5pm - 7pm)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Describe el problema que presenta el equipo *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Ej: La computadora enciende pero no da video en el monitor, o suena un pitido repetitivo y se recalienta..."
                        value={formData.issueDescription}
                        onChange={e => setFormData({ ...formData, issueDescription: e.target.value })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Datos del Cliente */}
                  <div className="border-t border-slate-100 pt-5">
                    <label className="block text-sm font-bold text-slate-800 mb-3">
                      3. Tus Datos de Contacto en Yurimaguas:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Nombre Completo *</label>
                        <input
                          type="text"
                          required
                          placeholder="Tu nombre y apellido"
                          value={formData.customerName}
                          onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Teléfono / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="920 159 765"
                          value={formData.customerPhone}
                          onChange={e => setFormData({ ...formData, customerPhone: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">DNI o RUC</label>
                        <input
                          type="text"
                          placeholder="Para orden y boleta"
                          value={formData.customerDni}
                          onChange={e => setFormData({ ...formData, customerDni: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {modality === 'a_domicilio' && (
                      <div className="mt-4">
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Dirección exacta en Yurimaguas (Calle, Número, Referencia) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ej: Calle Humbolt con Claveles, Barrio Las Flores, a media cuadra del colegio..."
                          value={formData.address}
                          onChange={e => setFormData({ ...formData, address: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-slate-100">
                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Garantía por escrito de 3 meses en reparaciones y repuestos originales.
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-black px-8 py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all text-sm uppercase tracking-wider"
                    >
                      <Send className="w-4 h-4" />
                      Confirmar y Agendar Soporte
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Store Details & Trust Badges */}
            <div className="lg:col-span-4 space-y-6">
              {/* Store Location Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Taller Central Yuritec</h3>
                    <p className="text-xs text-slate-500">Yurimaguas, Loreto</p>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-2.5 bg-slate-50 p-4 rounded-xl border border-slate-200/80 mb-5">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 min-w-16">Dirección:</span>
                    <span>Calle Humbolt c/ Claveles - Barrio Las Flores - Yurimaguas, Alto Amazonas, Loreto</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 min-w-16">Horario:</span>
                    <span>Lunes a Sábado: 8:00am - 7:00pm<br />Domingo: 9:00am - 1:00pm</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 min-w-16">Teléfonos:</span>
                    <span className="font-mono text-orange-600 font-bold">920 159 765 / 907 373 993</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-700 mb-2">Asesores Técnicos Disponibles:</div>
                  {SALES_ADVISORS.map(adv => (
                    <a
                      key={adv.id}
                      href={`https://wa.me/${adv.phoneRaw}?text=Hola%20${encodeURIComponent(adv.name)},%20tengo%20una%20consulta%20t%C3%A9cnica%20sobre%20mi%20computadora`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs">
                          {adv.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">{adv.name}</div>
                          <div className="text-[11px] text-slate-500">{adv.phone}</div>
                        </div>
                      </div>
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md">
                <h4 className="font-bold text-sm mb-4 text-orange-400 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  ¿Por qué reparar con Yuritec?
                </h4>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Diagnóstico transparente:</strong> Te enviamos fotos y videos de la falla antes de reemplazar piezas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Repuestos con garantía:</strong> Memorias RAM, SSDs NVMe Kingston/Crucial, pantallas y cargadores originales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Rapidez de atención:</strong> Servicio express en 2 a 4 horas para emergencias de oficina o estudio.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Rastrear Orden */}
        {activeTab === 'rastrear' && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-800">Consulta el Estado de tu Reparación</h3>
              <p className="text-xs text-slate-500 mt-1">
                Ingresa el código de orden (Ej: <span className="font-mono font-semibold">SERV-2026-1042</span>) o tu número de teléfono registrado.
              </p>
            </div>

            <form onSubmit={handleTrack} className="flex gap-2 mb-6">
              <input
                type="text"
                required
                placeholder="Ingresa código de servicio o teléfono..."
                value={searchCode}
                onChange={e => setSearchCode(e.target.value)}
                className="flex-1 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all"
              >
                Buscar
              </button>
            </form>

            {searched && (
              trackedBooking ? (
                <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <div className="font-mono text-xs text-slate-500">Orden de Servicio</div>
                      <div className="text-lg font-black text-slate-900">{trackedBooking.id}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      trackedBooking.status === 'completado' ? 'bg-emerald-100 text-emerald-800' :
                      trackedBooking.status === 'en_reparacion' ? 'bg-amber-100 text-amber-800' :
                      trackedBooking.status === 'diagnosticado' ? 'bg-sky-100 text-sky-800' :
                      'bg-slate-200 text-slate-800'
                    }`}>
                      {trackedBooking.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">Cliente:</span>
                      <strong className="text-slate-800">{trackedBooking.customerName}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Equipo:</span>
                      <strong className="text-slate-800">{trackedBooking.brandModel} ({trackedBooking.deviceType})</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Modalidad:</span>
                      <strong className="text-slate-800">{trackedBooking.serviceModality === 'a_domicilio' ? 'A Domicilio en Yurimaguas' : 'En Taller Yuritec'}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Técnico Asignado:</span>
                      <strong className="text-slate-800">{trackedBooking.assignedTechnician}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Presupuesto Estimado:</span>
                      <strong className="text-orange-600 text-sm font-bold">S/ {trackedBooking.estimatedBudget}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Fecha Registro:</span>
                      <strong className="text-slate-800">{trackedBooking.createdAt}</strong>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600">
                    <span className="font-bold text-slate-800 block mb-1">Falla descrita:</span>
                    {trackedBooking.issueDescription}
                  </div>

                  <div className="pt-2 text-center">
                    <a
                      href={`https://wa.me/51920159765?text=Hola%20Yuritec,%20consulto%20por%20mi%20orden%20${trackedBooking.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 px-4 py-2 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Preguntar a Técnico por WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">No se encontró ninguna orden con el código ingresado.</p>
                  <p className="text-xs text-slate-400 mt-1">Verifica tu número o comunícate con un asesor al 920 159 765.</p>
                </div>
              )
            )}
          </div>
        )}

        {/* Tab 3: Tarifario y Servicios Comunes */}
        {activeTab === 'tarifas' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Mantenimiento Preventivo & Pasta Térmica',
                icon: Cpu,
                price: 'Desde S/ 45 (Taller) / S/ 70 (Domicilio)',
                features: [
                  'Limpieza profunda de componentes y ventiladores',
                  'Cambio de pasta térmica de alto rendimiento (Artic MX-4)',
                  'Optimización de arranque de Windows y drivers',
                  'Revisión de voltajes y temperaturas'
                ]
              },
              {
                title: 'Formateo & Sistema Operativo Completo',
                icon: Laptop,
                price: 'Desde S/ 50',
                features: [
                  'Instalación limpia de Windows 11 o Windows 10 Pro',
                  'Paquete Office completo activado',
                  'Antivirus profesional y utilitarios',
                  'Copia de seguridad de fotos y documentos personales'
                ]
              },
              {
                title: 'Reparación de Hardware & Placas',
                icon: Wrench,
                price: 'Diagnóstico Gratis en Taller',
                features: [
                  'Reparación de placa madre y cortos de corriente',
                  'Cambio de pantallas de laptop rotas o rayadas',
                  'Reemplazo de teclados, bisagras y carcasas',
                  'Reparación de puertos USB, Jack DC y conectores'
                ]
              },
              {
                title: 'Upgrade de Velocidad (SSD + RAM)',
                icon: HardDrive,
                price: 'Instalación + Disco desde S/ 110',
                features: [
                  'Cambio de disco duro mecánico a SSD NVMe de alta velocidad',
                  'Tu computadora arrancará en 7 segundos',
                  'Clonación exacta de tus programas sin perder nada',
                  'Ampliación de memoria RAM para diseño o juegos'
                ]
              },
              {
                title: 'Recuperación de Archivos & Discos',
                icon: ShieldCheck,
                price: 'Evaluación técnica previa',
                features: [
                  'Recuperación de discos formateados o inaccesibles',
                  'Rescate de información de memorias USB dañadas',
                  'Tratamiento seguro y confidencial de tu información',
                  'Exportación a disco externo o nube'
                ]
              },
              {
                title: 'Redes, Routers & Cámaras de Seguridad',
                icon: Activity,
                price: 'Visita técnica en Yurimaguas',
                features: [
                  'Cableado estructurado UTP Cat6 para oficinas',
                  'Configuración de repetidores WiFi y routers Starlink / Fibra',
                  'Instalación y monitoreo de cámaras de seguridad en celular',
                  'Solución de cortes y lentitud de internet'
                ]
              }
            ].map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">{srv.title}</h4>
                    <div className="text-orange-600 font-black text-sm mb-4">{srv.price}</div>
                    <ul className="space-y-2 text-xs text-slate-600 mb-6">
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
                      setActiveTab('solicitar');
                    }}
                    className="w-full bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 text-xs font-bold py-2.5 rounded-xl transition-all"
                  >
                    Agendar este servicio
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
