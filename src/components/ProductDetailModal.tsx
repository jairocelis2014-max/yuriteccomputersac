import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  X,
  ShoppingCart,
  ShieldCheck,
  Truck,
  CheckCircle2,
  AlertCircle,
  Share2,
  ChevronRight,
  Cpu,
  Layers,
  HardDrive,
  Flame,
  Award
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProductForDetail,
    setSelectedProductForDetail,
    addToCart,
    setIsCartOpen,
    setSelectedProductForShare
  } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>('');

  if (!selectedProductForDetail) return null;

  const product = selectedProductForDetail;
  const currentImage = selectedImage || product.image;
  const isOutOfStock = product.stock <= 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setSelectedProductForDetail(null);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span>{product.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-orange-600 font-bold">{product.brand}</span>
          </div>
          <button
            onClick={() => setSelectedProductForDetail(null)}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-8 flex-1 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Images */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="w-full h-72 sm:h-80 bg-slate-50 rounded-xl border border-slate-200 p-4 flex items-center justify-center relative overflow-hidden">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply"
              />
              {product.discountPercentage && (
                <span className="absolute top-3 left-3 bg-red-600 text-white font-extrabold text-xs px-2.5 py-1 rounded shadow">
                  -{product.discountPercentage}% OFF
                </span>
              )}
            </div>

            {/* Gallery thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-2 mt-3 w-full justify-center">
                {product.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`w-14 h-14 rounded-lg border-2 p-1 bg-slate-50 overflow-hidden cursor-pointer transition ${
                      currentImage === imgUrl ? 'border-orange-500 shadow-md' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img src={imgUrl} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Share action button */}
            <div className="mt-5 w-full flex items-center justify-center">
              <button
                onClick={() => {
                  setSelectedProductForShare(product);
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-orange-200 bg-orange-50/50 hover:bg-orange-100/60 text-orange-700 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartir este producto en redes</span>
              </button>
            </div>
          </div>

          {/* Right Column: Specs & Purchasing */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {product.name}
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Price Display */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    Precio Contado / Transferencia / Yape:
                  </span>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl font-black text-red-600">
                      S/ {product.price.toLocaleString('es-PE')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        S/ {product.originalPrice.toLocaleString('es-PE')}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
                    Incluye IGV (18%) • Boleta o Factura Electrónica
                  </span>
                </div>

                {/* Stock info */}
                <div className="text-right">
                  {isOutOfStock ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Agotado
                    </span>
                  ) : (
                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        En Stock
                      </span>
                      <span className="text-[11px] text-slate-500 mt-1">
                        {product.stock} unidades disponibles
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Technical Specifications Sheet */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-orange-500" />
                  Ficha Técnica Certificada
                </h4>
                <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
                  {Object.entries(product.specs).map(([key, value]) => {
                    if (!value) return null;
                    const labels: Record<string, string> = {
                      processor: 'Procesador',
                      ram: 'Memoria RAM',
                      storage: 'Almacenamiento SSD',
                      gpu: 'Tarjeta de Video',
                      motherboard: 'Placa Madre',
                      powerSupply: 'Fuente de Poder',
                      cooling: 'Enfriamiento',
                      screen: 'Pantalla',
                      warranty: 'Garantía Oficial'
                    };
                    return (
                      <div key={key} className="grid grid-cols-3 py-2 px-3 bg-white hover:bg-slate-50">
                        <span className="font-semibold text-slate-500">
                          {labels[key] || key}:
                        </span>
                        <span className="col-span-2 text-slate-800 font-medium">
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Shipping & Warranty Highlights */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-slate-600">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-orange-50/50 border border-orange-100">
                  <ShieldCheck className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>Garantía local hasta 36 meses</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-orange-50/50 border border-orange-100">
                  <Truck className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>Envíos por Shalom y Olva</span>
                </div>
              </div>
            </div>

            {/* Purchase Action Box */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white">
                  <button
                    disabled={quantity <= 1 || isOutOfStock}
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-bold text-slate-800 min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    disabled={quantity >= product.stock || isOutOfStock}
                    onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                    className="px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  disabled={isOutOfStock}
                  onClick={handleAddToCart}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Añadir al Carrito</span>
                </button>

                <button
                  disabled={isOutOfStock}
                  onClick={handleBuyNow}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-200 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-lg transition cursor-pointer text-center"
                >
                  Comprar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
