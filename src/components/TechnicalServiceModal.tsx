import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useStore } from '../context/StoreContext';
import { TechnicalServiceModality, TechnicalServiceBooking } from '../types';
import {
  X,
  Wrench,
  MapPin,
  Home,
  Calendar,
  Clock,
  Phone,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Monitor,
  Laptop,
  CreditCard,
  Send,
  ShieldCheck,
  Building
} from 'lucide-react';

export const TechnicalServiceModal: React.FC = () => {
  const {
    isServiceModalOpen,
    setIsServiceModalOpen,
    selectedServiceModality,
    setSelectedServiceModality,
    createServiceBooking,
    currentUser,
    showToast
  } = useStore();

  const [deviceType, setDeviceType] = useState<TechnicalServiceBooking['deviceType']>('pc_gamer');
  const [brandModel, setBrandModel] = useState('');
  const [serviceCategory, setServiceCategory] = useState<TechnicalServiceBooking['serviceCategory']>('diagnostico_falla');
  const [issueDescription, setIssueDescription] = useState('');
  const [customerName, setCustomerName] = useState(currentUser.name || '');
  const [customerEmail, setCustomerEmail] = useState(currentUser.email || '');
  const [customerPhone, setCustomerPhone] = useState(currentUser.phone || '');
  const [customerDni, setCustomerDni] = useState(currentUser.dni || '');
  const [address, setAddress] = useState(currentUser.address || '');
  const [district, setDistrict] = useState(currentUser.city || 'Lima');
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [preferredTime, setPreferredTime] = useState('11:00 AM');

  // Confirmation view
  const [createdBooking, setCreatedBooking] = useState<TechnicalServiceBooking | null>(null);

  if (!isServiceModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !issueDescription.trim()) {
      showToast('⚠️ Por favor completa los datos obligatorios del servicio.');
      return;
    }

    if (selectedServiceModality === 'a_domicilio' && !address.trim()) {
      showToast('⚠️ Para servicio a domicilio debes indicar la dirección exacta.');
      return;
    }

    const booking = createServiceBooking({
      serviceModality: selectedServiceModality,
      deviceType,
      brandModel: brandModel || 'Equipo Personal Particular',
      serviceCategory,
      issueDescription,
      customerName,
      customerEmail,
      customerPhone,
      customerDni: customerDni || 'Particular',
      address: selectedServiceModality === 'a_domicilio' ? address : undefined,
      district: selectedServiceModality === 'a_domicilio' ? district : undefined,
      preferredDate,
      preferredTime
    });

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    setCreatedBooking(booking);
  };

  const handleOpenWhatsAppCoordination = () => {
    if (!createdBooking) return;
    const msg = `Hola Yuritec Computer SAC, he registrado la solicitud de servicio técnico *#${createdBooking.id}* (${createdBooking.serviceModality === 'en_tienda' ? 'EN TIENDA WILSON' : 'A DOMICILIO'}).\n\nEquipo: ${createdBooking.deviceType}\nFalla: ${createdBooking.issueDescription}\nCliente: ${createdBooking.customerName}\nTeléfono: ${createdBooking.customerPhone}`;
    window.open(`https://wa.me/51983558113?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleResetAndClose = () => {
    setCreatedBooking(null);
    setIsServiceModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-orange-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold shadow-md">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-base text-white">
                Soporte Técnico Particular Especializado
              </h2>
              <p className="text-xs text-orange-400 font-medium">
                YURITEC COMPUTER SAC • Laboratorio CompuPlaza & Servicio a Domicilio en Lima
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-7 flex-1 bg-slate-50">
          {createdBooking ? (
            /* Booking Confirmation Voucher */
            <div className="bg-white rounded-2xl border border-emerald-200 p-6 text-center space-y-4 shadow-sm animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                  ¡Cita de Soporte Agendada con Éxito!
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  Código: #{createdBooking.id}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Hemos registrado tu solicitud en nuestro sistema técnico.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-lg mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Modalidad:</span>
                  <span className="font-bold text-slate-900">
                    {createdBooking.serviceModality === 'en_tienda'
                      ? '🏢 En Tienda (Galerías CompuPlaza Wilson, Tda 204)'
                      : '🏠 A Domicilio (Lima Metropolitana)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Equipo:</span>
                  <span className="font-bold text-slate-900">{createdBooking.deviceType.toUpperCase()} - {createdBooking.brandModel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Falla Reportada:</span>
                  <span className="font-medium text-slate-800 line-clamp-2">{createdBooking.issueDescription}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Fecha y Hora:</span>
                  <span className="font-bold text-orange-600">{createdBooking.preferredDate} a las {createdBooking.preferredTime}</span>
                </div>
                {createdBooking.address && (
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">Dirección de Visita:</span>
                    <span className="font-bold text-slate-900">{createdBooking.address}, {createdBooking.district}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleOpenWhatsAppCoordination}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-6 rounded-xl flex items-center gap-2 transition shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmar Inmediatamente por WhatsApp</span>
                </button>

                <button
                  onClick={handleResetAndClose}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 px-6 rounded-xl transition cursor-pointer"
                >
                  Cerrar y Volver a la Tienda
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. Modality Selector: En Tienda vs A Domicilio */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Selecciona la Modalidad de Atención *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedServiceModality('en_tienda')}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition flex items-start gap-3.5 ${
                      selectedServiceModality === 'en_tienda'
                        ? 'border-orange-500 bg-orange-50/60 ring-2 ring-orange-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-xs text-slate-900 block">
                        Llevar a Tienda / Laboratorio
                      </span>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        Trae tu PC o Laptop a nuestro laboratorio técnico en <strong className="text-slate-700">Galerías CompuPlaza (Av. Wilson 1250, Tienda 204)</strong>. Diagnóstico en banco de pruebas con descarte instantáneo.
                      </p>
                      <span className="inline-block mt-2 text-[10px] bg-orange-100 text-orange-800 font-bold px-2 py-0.5 rounded">
                        Diagnóstico prioritario
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedServiceModality('a_domicilio')}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition flex items-start gap-3.5 ${
                      selectedServiceModality === 'a_domicilio'
                        ? 'border-emerald-500 bg-emerald-50/60 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-xs text-slate-900 block">
                        Técnico a Domicilio u Oficina
                      </span>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        Un técnico certificado de Yuritec visita tu casa o empresa en <strong className="text-slate-700">Lima Metropolitana</strong> con kit de herramientas para solucionar el problema in situ.
                      </p>
                      <span className="inline-block mt-2 text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                        Sin mover tu equipo de casa
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* 2. Device Type & Problem Details */}
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 space-y-4">
                <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider border-b pb-2">
                  2. Datos del Equipo y Falla Particular
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tipo de Dispositivo *
                    </label>
                    <select
                      value={deviceType}
                      onChange={(e) => setDeviceType(e.target.value as any)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    >
                      <option value="pc_gamer">PC Gamer Armada</option>
                      <option value="pc_escritorio">Computadora de Escritorio / Oficina</option>
                      <option value="laptop">Laptop Gamer / Laptop Portátil</option>
                      <option value="todo_en_uno">Computadora Todo En Uno (AIO)</option>
                      <option value="punto_de_venta">Sistema Punto de Venta (POS)</option>
                      <option value="servidor">Servidor / Estación de Trabajo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Marca y Modelo / Componentes
                    </label>
                    <input
                      type="text"
                      value={brandModel}
                      onChange={(e) => setBrandModel(e.target.value)}
                      placeholder="Ej. ASUS TUF / Core i7 RTX 3060"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tipo de Servicio Requerido *
                    </label>
                    <select
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value as any)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    >
                      <option value="diagnostico_falla">Diagnóstico de falla (Se apaga, pantalla azul)</option>
                      <option value="limpieza_pasta_termica">Mantenimiento y pasta térmica (Thermal Grizzly)</option>
                      <option value="formateo_software">Formateo + Windows 11 + Antivirus</option>
                      <option value="repotenciacion_hardware">Repotenciación de SSD NVMe o RAM</option>
                      <option value="cambio_pantalla_teclado">Cambio de pantalla o teclado roto</option>
                      <option value="mantenimiento_preventivo">Mantenimiento preventivo integral</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Describe detalladamente la falla o síntoma del equipo *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={issueDescription}
                    onChange={(e) => setIssueDescription(e.target.value)}
                    placeholder="Ejemplo: La computadora enciende pero no da video en el monitor, o los ventiladores giran muy rápido y se congela al jugar..."
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                  />
                </div>
              </div>

              {/* 3. Schedule & Customer Information */}
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 space-y-4">
                <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider border-b pb-2">
                  3. Datos de Contacto y Horario Preferido
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ej. Jairo Celis"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Teléfono Móvil (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+51 983 558 113"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="cliente@gmail.com"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      DNI / CE
                    </label>
                    <input
                      type="text"
                      value={customerDni}
                      onChange={(e) => setCustomerDni(e.target.value)}
                      placeholder="DNI del titular"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    />
                  </div>
                </div>

                {/* Address if at-home */}
                {selectedServiceModality === 'a_domicilio' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Dirección exacta del domicilio u oficina *
                      </label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Av. / Calle, N°, Dpto o Referencia"
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Distrito (Lima) *
                      </label>
                      <input
                        type="text"
                        required
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder="Ej. Miraflores / Surco"
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Fecha preferida para la atención
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Horario conveniente
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    >
                      <option value="10:00 AM">Mañana: 10:00 AM</option>
                      <option value="11:30 AM">Mañana: 11:30 AM</option>
                      <option value="02:30 PM">Tarde: 02:30 PM</option>
                      <option value="04:00 PM">Tarde: 04:00 PM</option>
                      <option value="05:30 PM">Tarde: 05:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Wrench className="w-4 h-4" />
                <span>
                  Agendar Solicitud de Soporte Técnico (
                  {selectedServiceModality === 'en_tienda' ? 'En Tienda CompuPlaza' : 'A Domicilio'}
                  )
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
