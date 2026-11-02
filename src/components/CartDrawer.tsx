import React from 'react';
import { useStore } from '../context/StoreContext';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    setIsCheckoutOpen
  } = useStore();

  if (!isCartOpen) return null;

  // Free shipping threshold in Soles
  const freeShippingThreshold = 2000;
  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-orange-600" />
            <h3 className="font-bold text-slate-800 text-base">
              Carrito de Compras ({cart.reduce((a, c) => a + c.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-orange-50/70 border-b border-orange-100">
          <div className="flex items-center justify-between text-xs font-semibold text-orange-800 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-orange-600" />
              {remainingForFreeShipping === 0
                ? '¡Felicidades! Calificas para Envío Gratis'
                : `Faltan S/ ${remainingForFreeShipping.toLocaleString('es-PE')} para Envío Gratis`}
            </span>
            <span className="font-bold text-[11px]">{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full h-2 bg-orange-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-600 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">Tu carrito está vacío</h4>
              <p className="text-xs text-slate-500 max-w-xs">
                Descubre nuestras PCs Gamer ensambladas, accesorios de cómputo y monitores listos para entrega inmediata.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-2 bg-orange-600 text-white font-bold text-xs py-2 px-5 rounded-lg hover:bg-orange-700 transition cursor-pointer"
              >
                Explorar Catálogo
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:border-orange-200 transition"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-contain rounded-lg bg-slate-50 border border-slate-100 p-1 flex-shrink-0"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-slate-800 line-clamp-1">
                      {item.product.name}
                    </h5>
                    <span className="text-[10px] text-slate-500 block">
                      {item.product.brand}
                    </span>
                    <span className="text-xs font-black text-red-600 block mt-0.5">
                      S/ {item.product.price.toLocaleString('es-PE')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-slate-200 rounded-md bg-slate-50">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 text-xs text-slate-600 hover:bg-slate-200 cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-slate-800">
                        {item.quantity}
                      </span>
                      <button
                        disabled={item.quantity >= item.product.stock}
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 text-xs text-slate-600 hover:bg-slate-200 disabled:opacity-40 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-slate-400 hover:text-red-600 p-1 transition cursor-pointer"
                      title="Eliminar del carrito"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Totals & Checkout Trigger */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-slate-800">
                  S/ {cartSubtotal.toLocaleString('es-PE')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Envío estimado:</span>
                <span className="text-emerald-600 font-bold">
                  {cartSubtotal >= freeShippingThreshold ? 'Gratis' : 'Calculado en caja'}
                </span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>IGV (18%):</span>
                <span>Incluido en precios</span>
              </div>
              <div className="flex justify-between text-base font-black text-slate-900 border-t border-slate-200 pt-2">
                <span>Total Estimado:</span>
                <span className="text-orange-600">
                  S/ {cartSubtotal.toLocaleString('es-PE')}
                </span>
              </div>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm py-3 rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <span>Continuar al Pago Seguro</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Compra 100% Protegida
              </span>
              <button
                onClick={clearCart}
                className="text-slate-400 hover:text-red-500 underline cursor-pointer"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
