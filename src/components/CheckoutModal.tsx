import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useStore } from '../context/StoreContext';
import { BANK_ACCOUNTS } from '../data/mockData';
import {
  X,
  CreditCard,
  QrCode,
  Building2,
  FileText,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Copy,
  Upload,
  Lock,
  ArrowRight,
  ArrowLeft,
  Clock,
  Sparkles
} from 'lucide-react';
import { PaymentMethodType } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    isCheckoutOpen,
    setIsCheckoutOpen,
    createOrder,
    currentUser,
    showToast
  } = useStore();

  const [step, setStep] = useState<1 | 2>(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form Fields
  const [documentType, setDocumentType] = useState<'boleta' | 'factura'>('boleta');
  const [customerName, setCustomerName] = useState(currentUser.name || '');
  const [customerEmail, setCustomerEmail] = useState(currentUser.email || '');
  const [customerPhone, setCustomerPhone] = useState(currentUser.phone || '');
  const [customerDniOrRuc, setCustomerDniOrRuc] = useState(currentUser.dni || '');
  const [companyName, setCompanyName] = useState('');
  const [shippingAddress, setShippingAddress] = useState(currentUser.address || 'Calle Humbolt c/ Claveles - Barrio Las Flores');
  const [shippingCity, setShippingCity] = useState(currentUser.city || 'Yurimaguas');
  const [shippingMethod, setShippingMethod] = useState<'lima_express' | 'provincia_shalom' | 'recojo_tienda'>('recojo_tienda');

  // Payment Options
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('card');

  // Credit Card state
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState(currentUser.name || '');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardInstallments, setCardInstallments] = useState('1');

  // Bank Transfer state
  const [selectedBankIndex, setSelectedBankIndex] = useState(0);
  const [operationNumber, setOperationNumber] = useState('');
  const [uploadedVoucherName, setUploadedVoucherName] = useState('');

  // Yape / Plin state
  const [yapeOpNumber, setYapeOpNumber] = useState('');

  // Discount coupon code
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  if (!isCheckoutOpen) return null;

  // Shipping calculation
  let shippingCost = 0;
  if (shippingMethod === 'recojo_tienda') {
    shippingCost = 0;
  } else if (shippingMethod === 'lima_express') {
    shippingCost = cartSubtotal >= 2000 ? 0 : 10;
  } else if (shippingMethod === 'provincia_shalom') {
    shippingCost = cartSubtotal >= 2000 ? 0 : 25;
  }

  const grandTotal = Math.max(0, cartSubtotal + shippingCost - appliedDiscount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'YURITEC100') {
      setAppliedDiscount(100);
      showToast('🎉 ¡Cupón aplicado! Descuento de S/ 100 concedido.');
    } else if (couponCode.trim().toUpperCase() === 'GAMER50') {
      setAppliedDiscount(50);
      showToast('🎉 ¡Cupón aplicado! Descuento de S/ 50 concedido.');
    } else {
      showToast('❌ Cupón no válido. Prueba con "YURITEC100" o "GAMER50".');
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`📋 ${label} copiado al portapapeles.`);
  };

  const handleFakeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedVoucherName(e.target.files[0].name);
      showToast('📎 Comprobante adjuntado con éxito.');
    }
  };

  const handleFinalSubmit = async () => {
    // Form validation
    if (!customerName.trim() || !customerEmail.trim() || !customerPhone.trim() || !customerDniOrRuc.trim()) {
      showToast('⚠️ Por favor completa todos los datos obligatorios del cliente.');
      setStep(1);
      return;
    }

    if (shippingMethod !== 'recojo_tienda' && !shippingAddress.trim()) {
      showToast('⚠️ Por favor indica la dirección de envío.');
      setStep(1);
      return;
    }

    setIsProcessing(true);

    // Simulate secure bank gateway transaction processing
    setTimeout(async () => {
      try {
        const order = await createOrder({
          customerName,
          customerEmail,
          customerPhone,
          customerDniOrRuc,
          documentType,
          companyName: documentType === 'factura' ? companyName : undefined,
          shippingAddress: shippingMethod === 'recojo_tienda' ? 'Recojo en Tienda Yuritec (Calle Humbolt c/ Claveles - Barrio Las Flores, Yurimaguas)' : shippingAddress,
          shippingCity,
          shippingMethod,
          paymentMethod,
          paymentDetails: {
            referenceNumber:
              paymentMethod === 'card'
                ? `AUTH-${Math.floor(100000 + Math.random() * 900000)}`
                : paymentMethod === 'yape-plin'
                ? yapeOpNumber || 'YAPE-VERIFIED'
                : operationNumber || 'TRANSF-VERIFIED',
            cardLast4: paymentMethod === 'card' ? (cardNumber.slice(-4) || '4242') : undefined,
            bankName: paymentMethod === 'transfer' ? BANK_ACCOUNTS[selectedBankIndex].bank : undefined,
            voucherImage: uploadedVoucherName || undefined,
            cipCode: paymentMethod === 'pagoefectivo' ? `CIP-${Math.floor(10000000 + Math.random() * 90000000)}` : undefined
          },
          subtotal: cartSubtotal,
          shippingCost,
          discount: appliedDiscount,
          total: grandTotal
        });

        // Trigger celebratory confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });

        setIsProcessing(false);
        setIsCheckoutOpen(false);
      } catch (err) {
        setIsProcessing(false);
        showToast('❌ Ocurrió un error al procesar el pago. Inténtalo nuevamente.');
      }
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-base">
                Pasarela de Pago Segura • YURITEC COMPUTER SAC
              </h2>
              <p className="text-[11px] text-slate-500">
                Paso {step} de 2: {step === 1 ? 'Datos de Envío y Facturación' : 'Selección de Método de Pago Bancario'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-7 space-y-6">
            {step === 1 ? (
              /* STEP 1: Customer Data & Shipping */
              <div className="space-y-5 animate-in fade-in duration-150">
                {/* Document Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Tipo de Comprobante
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDocumentType('boleta')}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition ${
                        documentType === 'boleta'
                          ? 'border-orange-500 bg-orange-50/50 text-orange-950 ring-1 ring-orange-500'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-bold text-xs block">Boleta de Venta</span>
                      <span className="text-[11px] text-slate-500">Para persona natural (DNI o CE)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDocumentType('factura')}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition ${
                        documentType === 'factura'
                          ? 'border-orange-500 bg-orange-50/50 text-orange-950 ring-1 ring-orange-500'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-bold text-xs block">Factura Electrónica</span>
                      <span className="text-[11px] text-slate-500">Con RUC (Válido para crédito fiscal)</span>
                    </button>
                  </div>
                </div>

                {/* Personal / Company fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {documentType === 'factura' ? 'Razón Social / Empresa' : 'Nombres y Apellidos'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ej. Jairo Celis"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {documentType === 'factura' ? 'RUC (11 dígitos)' : 'DNI o Carné de Extranjería'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerDniOrRuc}
                      onChange={(e) => setCustomerDniOrRuc(e.target.value)}
                      placeholder={documentType === 'factura' ? '20601234567' : '48920154'}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Correo Electrónico (Para confirmación) *
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="tuemail@gmail.com"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                    />
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      📧 Recibirás el correo automático con tu comprobante y seguimiento.
                    </span>
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
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                    />
                  </div>
                </div>

                {/* Delivery Options */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Modalidad de Entrega
                  </label>
                  <div className="space-y-2">
                    <label
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
                        shippingMethod === 'lima_express'
                          ? 'border-orange-500 bg-orange-50/50 text-orange-950 ring-1 ring-orange-500'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="shippingMethod"
                          checked={shippingMethod === 'recojo_tienda'}
                          onChange={() => setShippingMethod('recojo_tienda')}
                          className="accent-orange-600"
                        />
                        <div>
                          <span className="text-xs font-bold block">Recojo en Tienda Yuritec (Yurimaguas)</span>
                          <span className="text-[11px] text-slate-500">Calle Humbolt c/ Claveles - Barrio Las Flores • Listo de inmediato</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-600">GRATIS</span>
                    </label>

                    <label
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
                        shippingMethod === 'lima_express'
                          ? 'border-orange-500 bg-orange-50/50 text-orange-950 ring-1 ring-orange-500'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="shippingMethod"
                          checked={shippingMethod === 'lima_express'}
                          onChange={() => setShippingMethod('lima_express')}
                          className="accent-orange-600"
                        />
                        <div>
                          <span className="text-xs font-bold block">Delivery a Domicilio en Yurimaguas (Local)</span>
                          <span className="text-[11px] text-slate-500">Entrega express en 2 a 4 horas con técnico</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-800">
                        {cartSubtotal >= 2000 ? 'GRATIS' : 'S/ 10'}
                      </span>
                    </label>

                    <label
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
                        shippingMethod === 'provincia_shalom'
                          ? 'border-orange-500 bg-orange-50/50 text-orange-950 ring-1 ring-orange-500'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="shippingMethod"
                          checked={shippingMethod === 'provincia_shalom'}
                          onChange={() => setShippingMethod('provincia_shalom')}
                          className="accent-orange-600"
                        />
                        <div>
                          <span className="text-xs font-bold block">Envío Nacional a todo el Perú (Shalom / Olva)</span>
                          <span className="text-[11px] text-slate-500">Embalaje reforzado con precinto de seguridad</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-800">
                        {cartSubtotal >= 2000 ? 'GRATIS' : 'S/ 25'}
                      </span>
                    </label>
                  </div>
                </div>

                {shippingMethod !== 'recojo_tienda' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Dirección exacta de entrega *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        placeholder="Av. / Calle, N°, Dpto o Referencia"
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Ciudad / Distrito *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingCity}
                        onChange={(e) => setShippingCity(e.target.value)}
                        placeholder="Lima / Arequipa / Trujillo"
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                      />
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>Continuar a Métodos de Pago Bancarios</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* STEP 2: Diverse Payment Gateway */
              <div className="space-y-5 animate-in fade-in duration-150">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Selecciona tu Opción de Pago
                  </label>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-orange-600 font-bold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Modificar datos
                  </button>
                </div>

                {/* Payment Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-orange-500 bg-orange-50 text-orange-950 ring-1 ring-orange-500'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-orange-600" />
                    <span className="text-[11px] font-bold text-center">Tarjeta Débito/Crédito</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('yape-plin')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition cursor-pointer ${
                      paymentMethod === 'yape-plin'
                        ? 'border-purple-600 bg-purple-50 text-purple-950 ring-1 ring-purple-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-purple-600" />
                    <span className="text-[11px] font-bold text-center">Yape / Plin (QR)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('transfer')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition cursor-pointer ${
                      paymentMethod === 'transfer'
                        ? 'border-blue-600 bg-blue-50 text-blue-950 ring-1 ring-blue-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <span className="text-[11px] font-bold text-center">Transferencia BCP/BBVA</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pagoefectivo')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition cursor-pointer ${
                      paymentMethod === 'pagoefectivo'
                        ? 'border-amber-600 bg-amber-50 text-amber-950 ring-1 ring-amber-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <FileText className="w-5 h-5 text-amber-600" />
                    <span className="text-[11px] font-bold text-center">PagoEfectivo / CIP</span>
                  </button>
                </div>

                {/* 1. Credit / Debit Card Interface */}
                {paymentMethod === 'card' && (
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                      <span>Procesamiento Seguro con Tokenización SSL</span>
                      <div className="flex gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-blue-600 text-white text-[10px] font-extrabold">VISA</span>
                        <span className="px-1.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-extrabold">MC</span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-600 text-white text-[10px] font-extrabold">AMEX</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Número de Tarjeta
                      </label>
                      <input
                        type="text"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4557 •••• •••• 4242"
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-mono outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Titular de la Tarjeta
                        </label>
                        <input
                          type="text"
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value)}
                          placeholder="Como figura en la tarjeta"
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Vencimiento
                        </label>
                        <input
                          type="text"
                          maxLength={5}
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/AA"
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-mono outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          CVV / CVC
                        </label>
                        <input
                          type="password"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="•••"
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-mono outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Cuotas de Financiamiento
                      </label>
                      <select
                        value={cardInstallments}
                        onChange={(e) => setCardInstallments(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white outline-none"
                      >
                        <option value="1">1 cuota sin intereses (S/ {grandTotal.toLocaleString('es-PE')})</option>
                        <option value="3">3 cuotas sin intereses (3x S/ {Math.round(grandTotal / 3).toLocaleString('es-PE')})</option>
                        <option value="6">6 cuotas (6x S/ {Math.round((grandTotal * 1.05) / 6).toLocaleString('es-PE')})</option>
                        <option value="12">12 cuotas (12x S/ {Math.round((grandTotal * 1.10) / 12).toLocaleString('es-PE')})</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* 2. Yape / Plin Interface */}
                {paymentMethod === 'yape-plin' && (
                  <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/40 space-y-4">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      {/* Dynamic Simulated QR */}
                      <div className="w-36 h-36 bg-white p-2 rounded-xl shadow-md border border-purple-200 flex flex-col items-center justify-center">
                        <div className="w-28 h-28 bg-slate-900 rounded-lg p-2 flex items-center justify-center relative overflow-hidden">
                          {/* Stylized QR grid pattern */}
                          <div className="grid grid-cols-5 gap-1 w-full h-full p-1 bg-white rounded">
                            {Array.from({ length: 25 }).map((_, i) => (
                              <div
                                key={i}
                                className={`rounded-xs ${
                                  [0, 1, 3, 4, 5, 9, 11, 12, 13, 15, 19, 20, 21, 23, 24].includes(i)
                                    ? 'bg-purple-900'
                                    : 'bg-purple-200'
                                }`}
                              />
                            ))}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="bg-purple-700 text-white font-black text-[9px] px-1 py-0.5 rounded shadow">
                              YAPE/PLIN
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 text-center sm:text-left space-y-2">
                        <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider block">
                          Números Yape / Plin Oficiales:
                        </span>
                        <div className="space-y-1">
                          <div className="flex items-center justify-center sm:justify-start gap-2 bg-white/80 p-1.5 rounded-lg border border-purple-200">
                            <span className="text-xs text-purple-900 font-semibold">Asesor 1:</span>
                            <span className="text-sm font-black text-slate-900 font-mono">920 159 765</span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard('920159765', 'Yape Asesor 1')}
                              className="p-1 rounded hover:bg-purple-200 text-purple-700 cursor-pointer ml-auto"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start gap-2 bg-white/80 p-1.5 rounded-lg border border-purple-200">
                            <span className="text-xs text-purple-900 font-semibold">Asesor 2:</span>
                            <span className="text-sm font-black text-slate-900 font-mono">907 373 993</span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard('907373993', 'Yape Asesor 2')}
                              className="p-1 rounded hover:bg-purple-200 text-purple-700 cursor-pointer ml-auto"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600">
                          Titular: <strong className="text-slate-800">YURITEC COMPUTER SAC</strong>
                        </p>
                        <p className="text-xs font-bold text-purple-900">
                          Monto exacto a transferir: S/ {grandTotal.toLocaleString('es-PE')}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-purple-200/60">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          N° de Operación (Código de 6 u 8 dígitos)
                        </label>
                        <input
                          type="text"
                          value={yapeOpNumber}
                          onChange={(e) => setYapeOpNumber(e.target.value)}
                          placeholder="Ej. 849102"
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-mono outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Subir captura de comprobante (Opcional)
                        </label>
                        <label className="flex items-center justify-center gap-2 w-full text-xs p-2 rounded-lg border border-dashed border-purple-400 bg-white text-purple-700 hover:bg-purple-50 cursor-pointer transition">
                          <Upload className="w-4 h-4" />
                          <span className="truncate">{uploadedVoucherName || 'Adjuntar imagen / captura'}</span>
                          <input type="file" accept="image/*" className="hidden" onChange={handleFakeFileUpload} />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Bank Transfer Interface */}
                {paymentMethod === 'transfer' && (
                  <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Cuentas Bancarias a nombre de YURITEC COMPUTER SAC
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {BANK_ACCOUNTS.map((b, idx) => (
                        <div
                          key={b.bank}
                          onClick={() => setSelectedBankIndex(idx)}
                          className={`p-2.5 rounded-lg border text-left cursor-pointer transition ${
                            selectedBankIndex === idx
                              ? 'border-blue-500 bg-white shadow-xs ring-1 ring-blue-500'
                              : 'border-slate-200 bg-white/70 hover:bg-white'
                          }`}
                        >
                          <span className="font-bold text-xs text-blue-900 block truncate">
                            {b.bank}
                          </span>
                          <div className="mt-1 flex items-center justify-between text-[11px] text-slate-600">
                            <span className="font-mono">Cta: {b.accountNumber}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(b.accountNumber, `Cuenta ${b.bank}`);
                              }}
                              className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-slate-500">
                            <span className="font-mono">CCI: {b.cci}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(b.cci, `CCI ${b.bank}`);
                              }}
                              className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                            >
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          N° de Operación de Transferencia
                        </label>
                        <input
                          type="text"
                          value={operationNumber}
                          onChange={(e) => setOperationNumber(e.target.value)}
                          placeholder="Ej. BCP-492019"
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-mono outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Adjuntar voucher (Opcional)
                        </label>
                        <label className="flex items-center justify-center gap-2 w-full text-xs p-2 rounded-lg border border-dashed border-blue-400 bg-white text-blue-700 hover:bg-blue-50 cursor-pointer transition">
                          <Upload className="w-4 h-4" />
                          <span className="truncate">{uploadedVoucherName || 'Subir comprobante'}</span>
                          <input type="file" accept="image/*" className="hidden" onChange={handleFakeFileUpload} />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. PagoEfectivo / CIP */}
                {paymentMethod === 'pagoefectivo' && (
                  <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-900">
                        Código CIP Generado para Pago en Agentes o Banca Móvil
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-amber-700 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        Vigencia: 24 horas
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-amber-300 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Código de Pago (CIP):</span>
                        <span className="text-xl font-black text-slate-900 font-mono tracking-wider">
                          CIP-84920153
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('84920153', 'Código CIP')}
                        className="bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1 cursor-pointer transition"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        Copiar CIP
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      Paga este código en agentes BCP, BBVA, Interbank, Scotiabank, Kasnet, Western Union o agentes Tambo buscando el servicio de <strong>PagoEfectivo Soles</strong>.
                    </p>
                  </div>
                )}

                {/* Submit Payment button */}
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleFinalSubmit}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Procesando pago con banco emisor...</span>
                    </div>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Confirmar y Pagar S/ {grandTotal.toLocaleString('es-PE')}</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary & Coupon */}
          <div className="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-800 border-b border-slate-200 pb-2 mb-3">
                Resumen de tu Compra ({cart.reduce((a, c) => a + c.quantity, 0)} artículos)
              </h3>

              {/* Items preview */}
              <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-2.5 text-xs">
                    <img
                      src={item.product.image}
                      alt=""
                      className="w-10 h-10 object-contain rounded bg-white border border-slate-200 p-0.5"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-800 truncate">{item.product.name}</p>
                      <span className="text-[10px] text-slate-500">
                        {item.quantity} x S/ {item.product.price.toLocaleString('es-PE')}
                      </span>
                    </div>
                    <span className="font-bold text-slate-900">
                      S/ {(item.product.price * item.quantity).toLocaleString('es-PE')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="mt-4 pt-3 border-t border-slate-200 flex gap-2">
                <input
                  type="text"
                  placeholder="Cupón (ej. YURITEC100)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 text-xs p-2 rounded-lg border border-slate-300 bg-white uppercase outline-none"
                />
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3 py-2 rounded-lg transition cursor-pointer"
                >
                  Aplicar
                </button>
              </form>

              {/* Cost breakdown */}
              <div className="mt-4 pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal productos:</span>
                  <span className="font-semibold text-slate-800">
                    S/ {cartSubtotal.toLocaleString('es-PE')}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Costo de envío ({shippingMethod.replace('_', ' ')}):</span>
                  <span className="font-semibold text-slate-800">
                    {shippingCost === 0 ? 'Gratis' : `S/ ${shippingCost}`}
                  </span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Descuento cupón:</span>
                    <span>-S/ {appliedDiscount.toLocaleString('es-PE')}</span>
                  </div>
                )}

                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>IGV (18%):</span>
                  <span>Incluido en precios oficiales</span>
                </div>

                <div className="flex justify-between text-base font-black text-slate-900 border-t border-slate-200 pt-2">
                  <span>Total a Pagar:</span>
                  <span className="text-xl text-orange-600">
                    S/ {grandTotal.toLocaleString('es-PE')}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Transacción cifrada con protocolo bancario SSL 256 bits</span>
              </div>
              <p>
                Al confirmar, se enviará una notificación con el detalle íntegro a tu correo electrónico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
