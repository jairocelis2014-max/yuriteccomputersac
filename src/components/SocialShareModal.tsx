import React from 'react';
import { useStore } from '../context/StoreContext';
import {
  X,
  Share2,
  Copy,
  MessageCircle,
  Facebook,
  Twitter,
  Send,
  Check
} from 'lucide-react';

export const SocialShareModal: React.FC = () => {
  const { selectedProductForShare, setSelectedProductForShare, showToast } = useStore();

  if (!selectedProductForShare) return null;

  const product = selectedProductForShare;
  const currentUrl = window.location.href.split('#')[0];
  const shareText = `¡Mira esta ${product.name} en YURITEC COMPUTER SAC por solo S/ ${product.price.toLocaleString('es-PE')}! Envíos a todo el Perú y garantía oficial:`;

  const handleShareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`;
    window.open(url, '_blank');
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank');
  };

  const handleShareTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText} ${currentUrl}`);
    showToast('📋 Enlace del producto copiado con mensaje listo para compartir.');
    setSelectedProductForShare(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-orange-600" />
            <h3 className="font-bold text-slate-800 text-sm">
              Compartir Producto en Redes Sociales
            </h3>
          </div>
          <button
            onClick={() => setSelectedProductForShare(null)}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Product brief */}
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <img
              src={product.image}
              alt=""
              className="w-14 h-14 object-contain rounded-lg bg-white border border-slate-200 p-1"
            />
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-xs text-slate-900 line-clamp-1">{product.name}</h4>
              <span className="text-sm font-black text-red-600 block mt-0.5">
                S/ {product.price.toLocaleString('es-PE')}
              </span>
              <span className="text-[10px] text-slate-500">YURITEC COMPUTER SAC</span>
            </div>
          </div>

          {/* Social Network buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={handleShareWhatsApp}
              className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handleShareFacebook}
              className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Facebook className="w-4 h-4 text-blue-600 fill-blue-600" />
              <span>Facebook</span>
            </button>

            <button
              onClick={handleShareTwitter}
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Twitter className="w-4 h-4 text-slate-800 fill-slate-800" />
              <span>Twitter / X</span>
            </button>

            <button
              onClick={handleShareTelegram}
              className="p-3 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Send className="w-4 h-4 text-sky-600" />
              <span>Telegram</span>
            </button>
          </div>

          {/* Copy Direct Link */}
          <div className="pt-2">
            <button
              onClick={handleCopyLink}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Copy className="w-4 h-4" />
              <span>Copiar Enlace con Información</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
