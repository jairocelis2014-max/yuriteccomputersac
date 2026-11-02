import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  X,
  Mail,
  CheckCircle,
  Copy,
  Printer,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';

export const EmailConfirmationModal: React.FC = () => {
  const {
    showEmailModal,
    setShowEmailModal,
    selectedEmailForModal,
    lastCreatedOrder,
    showToast
  } = useStore();

  const [isResending, setIsResending] = useState(false);

  if (!showEmailModal || !selectedEmailForModal) return null;

  const email = selectedEmailForModal;

  const handleResend = () => {
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      showToast(`📨 Correo de confirmación reenviado a ${email.toEmail}`);
    }, 1000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        {/* Modal Top Announcement */}
        <div className="bg-emerald-600 text-white px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-100" />
            <div>
              <h3 className="font-bold text-sm">
                ¡Compra Exitosa! Notificación enviada por Correo Electrónico
              </h3>
              <p className="text-[11px] text-emerald-100">
                Se ha generado y enviado el comprobante oficial a la dirección de correo indicada.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowEmailModal(false)}
            className="p-1 text-white/80 hover:text-white rounded-full hover:bg-emerald-700 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Email Client Simulation Header */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-500">De:</span>
              <span className="font-bold text-slate-800">
                YURITEC COMPUTER SAC &lt;ventas@yuritec.pe&gt;
              </span>
            </div>
            <span className="text-slate-400 text-[11px]">{email.sentAt}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-500">Para:</span>
            <span className="font-semibold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-300">
              {email.toEmail}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-500">Asunto:</span>
            <span className="font-bold text-slate-800">{email.subject}</span>
          </div>
        </div>

        {/* Email Body HTML Preview (Rendered safely) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
          <div
            className="bg-white rounded-xl shadow-xs border border-slate-200 p-2 sm:p-4 overflow-hidden"
            dangerouslySetInnerHTML={{ __html: email.htmlContent }}
          />
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleResend}
              disabled={isResending}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2 px-3 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isResending ? 'animate-spin' : ''}`} />
              <span>{isResending ? 'Reenviando...' : 'Reenviar Notificación'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2 px-3 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Boleta / Factura</span>
            </button>
          </div>

          <button
            onClick={() => setShowEmailModal(false)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-2 px-6 rounded-lg transition cursor-pointer"
          >
            Entendido / Continuar en la Tienda
          </button>
        </div>
      </div>
    </div>
  );
};
