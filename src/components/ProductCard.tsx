import React from 'react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import {
  ShoppingCart,
  Share2,
  Eye,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    addToCart,
    setSelectedProductForDetail,
    setSelectedProductForShare,
    setIsCartOpen
  } = useStore();

  const handleBuyNow = () => {
    addToCart(product, 1);
    setIsCartOpen(true);
  };

  const isOutOfStock = product.stock <= 0;
  const isLowStock = product.stock > 0 && product.stock <= (product.minStockAlert || 3);

  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative hover:border-orange-300">
      {/* Top Badges */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 pointer-events-none">
        {product.discountPercentage && product.discountPercentage > 0 && (
          <span className="bg-red-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
            -{product.discountPercentage}%
          </span>
        )}
        {product.isNew && (
          <span className="bg-orange-500 text-white font-extrabold text-[10px] px-2 py-0.5 rounded shadow-sm uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            NUEVO
          </span>
        )}
      </div>

      {/* Share & Quick View float buttons */}
      <div className="absolute top-2.5 right-2.5 z-10 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedProductForShare(product);
          }}
          title="Compartir en redes sociales"
          className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-slate-700 hover:text-orange-600 hover:bg-white shadow-md flex items-center justify-center transition cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedProductForDetail(product);
          }}
          title="Ver especificaciones completas"
          className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-slate-700 hover:text-orange-600 hover:bg-white shadow-md flex items-center justify-center transition cursor-pointer"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Product Image Area */}
      <div
        onClick={() => setSelectedProductForDetail(product)}
        className="w-full h-52 sm:h-56 bg-slate-50 relative overflow-hidden flex items-center justify-center p-4 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-106 transition-transform duration-300"
          loading="lazy"
        />

        {isOutOfStock && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center">
            <span className="bg-red-600 text-white font-black text-xs px-3 py-1 rounded tracking-wider uppercase">
              Agotado Temporalmente
            </span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Subcategory & Brand */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <span>{product.subCategory || product.category.replace('-', ' ')}</span>
            <span className="text-orange-600 font-bold">{product.brand}</span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => setSelectedProductForDetail(product)}
            className="font-bold text-sm text-slate-800 hover:text-orange-600 transition cursor-pointer line-clamp-2 min-h-[2.5rem] leading-snug"
          >
            {product.name}
          </h3>

          {/* Quick Specs Snippet */}
          <div className="mt-2.5 flex flex-wrap gap-1 text-[11px] text-slate-600">
            {product.specs.processor && (
              <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-medium truncate max-w-full">
                ⚡ {product.specs.processor.split('(')[0]}
              </span>
            )}
            {product.specs.gpu && (
              <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-medium truncate max-w-full">
                🎮 {product.specs.gpu.split('(')[0]}
              </span>
            )}
            {product.specs.ram && (
              <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-medium">
                💾 {product.specs.ram.split(' ')[0]} RAM
              </span>
            )}
          </div>
        </div>

        {/* Price & Stock Section (matches screenshot S/ 2,799 style) */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-1">
            <div>
              <div className="text-xl sm:text-2xl font-black text-red-600 tracking-tight">
                S/ {product.price.toLocaleString('es-PE')}
              </div>
              {product.originalPrice && (
                <div className="text-xs text-slate-400 line-through">
                  S/ {product.originalPrice.toLocaleString('es-PE')}
                </div>
              )}
            </div>

            {/* Stock Pill */}
            <div className="text-right">
              {isOutOfStock ? (
                <span className="text-[11px] text-red-500 font-bold flex items-center gap-1 justify-end">
                  <AlertCircle className="w-3 h-3" />
                  Sin stock
                </span>
              ) : isLowStock ? (
                <span className="text-[11px] text-amber-600 font-bold flex items-center gap-1 justify-end">
                  <AlertCircle className="w-3 h-3" />
                  ¡Últimas {product.stock} unids!
                </span>
              ) : (
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 justify-end">
                  <CheckCircle2 className="w-3 h-3" />
                  Stock: {product.stock} unids
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            <button
              disabled={isOutOfStock}
              onClick={() => addToCart(product, 1)}
              className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Añadir</span>
            </button>

            <button
              disabled={isOutOfStock}
              onClick={handleBuyNow}
              className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs py-2 px-2 rounded-lg transition cursor-pointer text-center"
            >
              Comprar Ya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
