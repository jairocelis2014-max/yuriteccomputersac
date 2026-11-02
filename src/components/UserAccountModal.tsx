import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  X,
  Package,
  Wrench,
  User,
  Clock,
  CheckCircle2,
  Truck,
  AlertCircle,
  Mail,
  Send,
  MessageSquare,
  PlusCircle,
  HelpCircle,
  Phone,
  FileText
} from 'lucide-react';
import { SupportTicket, Order } from '../types';

export const UserAccountModal: React.FC = () => {
  const {
    isAccountOpen,
    setIsAccountOpen,
    accountInitialTab,
    setAccountInitialTab,
    orders,
    tickets,
    createTicket,
    addTicketMessage,
    currentUser,
    updateUserProfile,
    sentEmails,
    setSelectedEmailForModal,
    setShowEmailModal,
    showToast
  } = useStore();

  const [activeTab, setActiveTab] = useState<'orders' | 'support' | 'profile'>(accountInitialTab || 'orders');

  // Support ticket form state
  const [isCreatingTicket, setIsCreatingTicket] = useState(false);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState<SupportTicket['category']>('garantia');
  const [ticketPriority, setTicketPriority] = useState<SupportTicket['priority']>('media');
  const [ticketOrderId, setTicketOrderId] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');

  // Active ticket chat view
  const [activeTicketId, setActiveTicketId] = useState<string | null>(null);
  const [replyMessage, setReplyMessage] = useState('');

  // Profile Form state
  const [profileName, setProfileName] = useState(currentUser.name);
  const [profileEmail, setProfileEmail] = useState(currentUser.email);
  const [profilePhone, setProfilePhone] = useState(currentUser.phone);
  const [profileDni, setProfileDni] = useState(currentUser.dni);
  const [profileAddress, setProfileAddress] = useState(currentUser.address);
  const [profileCity, setProfileCity] = useState(currentUser.city);

  if (!isAccountOpen) return null;

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject.trim() || !ticketMessage.trim()) {
      showToast('⚠️ Completa el asunto y la descripción de tu consulta.');
      return;
    }

    const created = createTicket(
      {
        subject: ticketSubject,
        category: ticketCategory,
        priority: ticketPriority,
        orderId: ticketOrderId || undefined
      },
      ticketMessage
    );

    setTicketSubject('');
    setTicketMessage('');
    setIsCreatingTicket(false);
    setActiveTicketId(created.id);
  };

  const handleSendReply = (ticketId: string) => {
    if (!replyMessage.trim()) return;
    addTicketMessage(ticketId, 'user', replyMessage, currentUser.name);
    setReplyMessage('');
  };

  const handleViewEmail = (orderId: string) => {
    const match = sentEmails.find(e => e.orderId === orderId);
    if (match) {
      setSelectedEmailForModal(match);
      setShowEmailModal(true);
    } else {
      showToast('ℹ️ No se encontró copia del correo generado.');
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name: profileName,
      email: profileEmail,
      phone: profilePhone,
      dni: profileDni,
      address: profileAddress,
      city: profileCity
    });
  };

  const activeTicket = tickets.find(t => t.id === activeTicketId);

  // Status badge styling helper
  const renderStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'pendiente':
        return <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Pendiente de Pago</span>;
      case 'pagado':
        return <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Pagado</span>;
      case 'en_preparacion':
        return <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">En Preparación Técnica</span>;
      case 'enviado':
        return <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Enviado en Tránsito</span>;
      case 'entregado':
        return <span className="bg-slate-100 text-slate-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Entregado con Éxito</span>;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        {/* Header with Navigation Tabs */}
        <div className="bg-slate-900 text-white px-5 pt-4 pb-0 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center font-bold text-white">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-base text-white">
                  Panel de Usuario • {currentUser.name}
                </h2>
                <p className="text-xs text-slate-400">
                  {currentUser.email} • {currentUser.phone}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsAccountOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2 border-t border-slate-800 pt-1">
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 cursor-pointer transition ${
                activeTab === 'orders'
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Mis Pedidos ({orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('support')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 cursor-pointer transition ${
                activeTab === 'support'
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Soporte Técnico ({tickets.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 cursor-pointer transition ${
                activeTab === 'profile'
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Mis Datos y Facturación</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-8 flex-1 bg-slate-50">
          {/* TAB 1: ORDER HISTORY */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-sm text-slate-800">
                  Historial de Pedidos Realizados
                </h3>
                <span className="text-xs text-slate-500">
                  Total de órdenes: {orders.length}
                </span>
              </div>

              {orders.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                  <Package className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                  <p className="font-semibold text-slate-700 text-sm">Aún no has realizado pedidos</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Tus compras con boleta o factura aparecerán aquí en tiempo real.
                  </p>
                </div>
              ) : (
                orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-slate-900">
                            Orden #{order.id}
                          </span>
                          {renderStatusBadge(order.status)}
                        </div>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          Fecha: {order.date} • {order.documentType.toUpperCase()}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block uppercase">Total Pagado:</span>
                        <span className="text-base font-black text-orange-600">
                          S/ {order.total.toLocaleString('es-PE')}
                        </span>
                      </div>
                    </div>

                    {/* Tracking Timeline */}
                    <div className="py-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                        <span className="font-semibold text-slate-700">Estado del Envío:</span>
                        <span className="font-mono text-orange-600 font-bold">
                          Guía: {order.trackingNumber || 'En trámite'}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold">
                        <div className="p-1.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          1. Pago Verificado
                        </div>
                        <div className={`p-1.5 rounded border ${
                          ['en_preparacion', 'enviado', 'entregado'].includes(order.status)
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : 'bg-slate-100 text-slate-400 border-slate-200'
                        }`}>
                          2. Ensamblaje / Lab
                        </div>
                        <div className={`p-1.5 rounded border ${
                          ['enviado', 'entregado'].includes(order.status)
                            ? 'bg-purple-50 text-purple-700 border-purple-200'
                            : 'bg-slate-100 text-slate-400 border-slate-200'
                        }`}>
                          3. En Tránsito (Shalom)
                        </div>
                        <div className={`p-1.5 rounded border ${
                          order.status === 'entregado'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-slate-100 text-slate-400 border-slate-200'
                        }`}>
                          4. Entregado
                        </div>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="divide-y divide-slate-100 bg-slate-50/70 rounded-lg p-2.5">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 text-xs">
                          <div className="flex items-center gap-2">
                            <img src={item.image} alt="" className="w-9 h-9 object-contain rounded bg-white border p-0.5" />
                            <div>
                              <p className="font-semibold text-slate-800 line-clamp-1">{item.productName}</p>
                              <span className="text-[10px] text-slate-500">
                                Cantidad: {item.quantity}
                              </span>
                            </div>
                          </div>
                          <span className="font-bold text-slate-900">
                            S/ {(item.price * item.quantity).toLocaleString('es-PE')}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Order Action Buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="text-[11px] text-slate-500">
                        Destino: {order.shippingAddress}, {order.shippingCity}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleViewEmail(order.id)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-1.5 px-3 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <Mail className="w-3.5 h-3.5 text-orange-600" />
                          <span>Ver Correo Notificado</span>
                        </button>

                        <button
                          onClick={() => {
                            setTicketOrderId(order.id);
                            setTicketSubject(`Consulta sobre orden #${order.id}`);
                            setActiveTab('support');
                            setIsCreatingTicket(true);
                          }}
                          className="bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-bold py-1.5 px-3 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <Wrench className="w-3.5 h-3.5" />
                          <span>Solicitar Asistencia</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 2: TECHNICAL SUPPORT & WARRANTY */}
          {activeTab === 'support' && (
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-sm text-slate-800">
                    Centro de Soporte Técnico y Garantías
                  </h3>
                  <p className="text-xs text-slate-500">
                    Atención directa con ingenieros de ensamblaje y laboratorio de hardware
                  </p>
                </div>

                {!isCreatingTicket && !activeTicketId && (
                  <button
                    onClick={() => setIsCreatingTicket(true)}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-2 px-4 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Crear Nuevo Ticket</span>
                  </button>
                )}
              </div>

              {/* Create Ticket Form */}
              {isCreatingTicket ? (
                <form
                  onSubmit={handleCreateTicket}
                  className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-xs"
                >
                  <div className="flex items-center justify-between border-b pb-2">
                    <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                      Nuevo Ticket de Asistencia Técnica
                    </h4>
                    <button
                      type="button"
                      onClick={() => setIsCreatingTicket(false)}
                      className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      Cancelar
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Categoría del Problema
                      </label>
                      <select
                        value={ticketCategory}
                        onChange={(e) => setTicketCategory(e.target.value as any)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                      >
                        <option value="garantia">Garantía de Hardware / Falla de Componente</option>
                        <option value="ensamblaje">Asistencia de Ensamblaje / Configuración BIOS</option>
                        <option value="drivers">Instalación de Drivers y Tarjetas de Video</option>
                        <option value="reparacion">Mantenimiento preventivo / Laboratorio</option>
                        <option value="consulta_general">Consulta general sobre pedido</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        N° de Orden Asociada (Opcional)
                      </label>
                      <input
                        type="text"
                        value={ticketOrderId}
                        onChange={(e) => setTicketOrderId(e.target.value)}
                        placeholder="Ej. YURI-2026-9142"
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Asunto de la consulta *
                    </label>
                    <input
                      type="text"
                      required
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      placeholder="Ej. Dudas con el cable DisplayPort y 165Hz"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Detalle de lo ocurrido *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={ticketMessage}
                      onChange={(e) => setTicketMessage(e.target.value)}
                      placeholder="Describe con la mayor cantidad de detalles posible..."
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsCreatingTicket(false)}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                    >
                      Volver
                    </button>
                    <button
                      type="submit"
                      className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-2 px-5 rounded-lg transition cursor-pointer"
                    >
                      Enviar Ticket al Laboratorio
                    </button>
                  </div>
                </form>
              ) : activeTicket ? (
                /* Ticket Chat Conversation Thread */
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs flex flex-col h-[450px]">
                  {/* Chat Header */}
                  <div className="p-3.5 bg-slate-100 border-b flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">
                          {activeTicket.subject}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold uppercase">
                          {activeTicket.status}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500">
                        Ticket #{activeTicket.id} • Categoría: {activeTicket.category}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveTicketId(null)}
                      className="text-xs text-orange-600 font-bold hover:underline cursor-pointer"
                    >
                      Ver todos los tickets
                    </button>
                  </div>

                  {/* Messages Bubble Area */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {activeTicket.messages.map((m) => {
                      const isMe = m.sender === 'user';
                      return (
                        <div
                          key={m.id}
                          className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                        >
                          <span className="text-[10px] text-slate-400 mb-0.5">
                            {m.senderName} • {m.timestamp}
                          </span>
                          <div
                            className={`p-3 rounded-2xl max-w-md text-xs leading-relaxed ${
                              isMe
                                ? 'bg-orange-600 text-white rounded-br-none'
                                : 'bg-slate-100 text-slate-800 border border-slate-200 rounded-bl-none'
                            }`}
                          >
                            {m.message}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Chat Input */}
                  <div className="p-3 border-t bg-slate-50 flex gap-2">
                    <input
                      type="text"
                      placeholder="Escribe tu respuesta a los ingenieros de soporte..."
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendReply(activeTicket.id)}
                      className="flex-1 text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                    />
                    <button
                      onClick={() => handleSendReply(activeTicket.id)}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 rounded-lg flex items-center justify-center transition cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Tickets List */
                <div className="space-y-3">
                  {tickets.length === 0 ? (
                    <div className="text-center py-10 bg-white rounded-xl border border-slate-200">
                      <Wrench className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-slate-600">No tienes tickets abiertos</p>
                    </div>
                  ) : (
                    tickets.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => setActiveTicketId(t.id)}
                        className="bg-white rounded-xl border border-slate-200 p-4 hover:border-orange-300 hover:shadow-xs transition cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-slate-900">
                              #{t.id} - {t.subject}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 uppercase">
                              {t.status}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 block mt-1">
                            Categoría: {t.category} • {t.messages.length} mensajes • Creado el {t.createdAt}
                          </span>
                        </div>

                        <span className="text-xs text-orange-600 font-bold flex items-center gap-1">
                          <MessageSquare className="w-3.5 h-3.5" />
                          Abrir chat
                        </span>
                      </div>
                    ))
                  )}

                  {/* Direct WhatsApp Callout */}
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-xs text-emerald-900">
                        ¿Requieres asistencia inmediata por WhatsApp?
                      </h5>
                      <p className="text-[11px] text-emerald-700">
                        Nuestro equipo técnico atiende de 9am a 7pm en tiempo real.
                      </p>
                    </div>
                    <a
                      href="https://wa.me/51983558113?text=Hola%20Yuritec,%20necesito%20soporte%20t%C3%A9cnico"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3.5 rounded-lg flex items-center gap-1.5 transition"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>WhatsApp Soporte</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: USER PROFILE */}
          {activeTab === 'profile' && (
            <form
              onSubmit={handleSaveProfile}
              className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs"
            >
              <h3 className="font-bold text-sm text-slate-800 border-b pb-2">
                Datos Personales de Entrega y Facturación
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nombres y Apellidos / Razón Social
                  </label>
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    DNI o RUC
                  </label>
                  <input
                    type="text"
                    value={profileDni}
                    onChange={(e) => setProfileDni(e.target.value)}
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
                    value={profileEmail}
                    onChange={(e) => setProfileEmail(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Teléfono Móvil
                  </label>
                  <input
                    type="tel"
                    value={profilePhone}
                    onChange={(e) => setProfilePhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Dirección Habitual de Entrega
                  </label>
                  <input
                    type="text"
                    value={profileAddress}
                    onChange={(e) => setProfileAddress(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ciudad / Distrito
                  </label>
                  <input
                    type="text"
                    value={profileCity}
                    onChange={(e) => setProfileCity(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-2 px-6 rounded-lg transition cursor-pointer"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
