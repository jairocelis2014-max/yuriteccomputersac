import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  ArrowRight,
  Wrench,
  ShieldCheck,
  Truck,
  CreditCard,
  MapPin,
  Home,
  Sparkles,
  Play,
  Pause
} from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const {
    slides,
    setSelectedCategoryFilter,
    setIsServiceModalOpen,
    setSelectedServiceModality
  } = useStore();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex] || slides[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCtaClick = () => {
    if (currentSlide.isSpecialAction === 'open_service_modal') {
      setSelectedServiceModality('en_tienda');
      setIsServiceModalOpen(true);
    } else if (currentSlide.ctaActionCategory) {
      setSelectedCategoryFilter(currentSlide.ctaActionCategory);
      const catalogEl = document.getElementById('catalog-section');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800 select-none">
      {/* Dynamic Slide Background with subtle glow effects */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className="w-full h-full object-cover object-center opacity-25 filter blur-xs scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px] sm:min-h-[420px]">
          {/* Left Text / Action Info */}
          <div className="lg:col-span-7 space-y-4 animate-in fade-in slide-in-from-left-4 duration-500">
            {/* Slide Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className={`${currentSlide.badgeColor || 'bg-orange-600'} text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5`}>
                <Sparkles className="w-3.5 h-3.5" />
                {currentSlide.badge}
              </span>
              <span className="text-xs text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-2.5 py-1 rounded-full">
                Diapositiva {currentIndex + 1} de {slides.length}
              </span>
            </div>

            {/* Title & Highlight */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase font-heading">
              {currentSlide.title}{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 mt-1">
                {currentSlide.highlightText}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
              {currentSlide.subtitle}
            </p>

            {/* Specs Summary Pills */}
            {currentSlide.specsSummary && (
              <div className="flex flex-wrap gap-2 pt-1">
                {currentSlide.specsSummary.map((spec, i) => (
                  <span
                    key={i}
                    className="bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs px-2.5 py-1 rounded-md font-semibold"
                  >
                    ✓ {spec}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={handleCtaClick}
                className="bg-orange-600 hover:bg-orange-500 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xl shadow-orange-600/30 flex items-center gap-2 transition-all hover:scale-102 cursor-pointer"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Dedicated Quick Action: Soporte Técnico Particular Button */}
              <button
                onClick={() => {
                  setSelectedServiceModality('en_tienda');
                  setIsServiceModalOpen(true);
                }}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-orange-500/50 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl flex items-center gap-2 transition cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-orange-400" />
                <span>Soporte Técnico (Tienda o Domicilio)</span>
              </button>
            </div>
          </div>

          {/* Right Product / Service High-Res Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-500">
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-sm overflow-hidden group">
              <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-950 relative flex items-center justify-center p-2 border border-slate-800">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                />
                {currentSlide.priceNotice && (
                  <div className="absolute bottom-3 right-3 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-lg shadow-lg">
                    {currentSlide.priceNotice}
                  </div>
                )}
              </div>

              <div className="mt-3">
                <p className="text-xs font-bold text-orange-400">
                  {currentSlide.tagline}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Laboratorio técnico especializado en Av. Wilson 1250, CompuPlaza • Lima, Perú
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls: Arrows, Dots & Autoplay Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-800/80">
          {/* Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-orange-600 border border-slate-700 hover:border-orange-500 text-white flex items-center justify-center transition cursor-pointer shadow-md"
              title="Diapositiva anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-orange-600 border border-slate-700 hover:border-orange-500 text-white flex items-center justify-center transition cursor-pointer shadow-md"
              title="Siguiente diapositiva"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-8 h-8 rounded-full bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer text-xs ml-1"
              title={isAutoPlaying ? 'Pausar diapositivas' : 'Reanudar diapositivas'}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Slide Indicator Dots (1 to 5) */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer flex items-center justify-center text-[10px] font-bold ${
                  currentIndex === idx
                    ? 'w-8 h-3 bg-orange-500 text-white shadow-md shadow-orange-500/50'
                    : 'w-3 h-3 bg-slate-700 hover:bg-slate-500 text-transparent'
                }`}
                title={`Ir a diapositiva ${idx + 1}: ${s.title}`}
              />
            ))}
          </div>

          {/* Quick Support Direct Callout */}
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span className="text-slate-400">¿Problemas con tu equipo particular?</span>
            <button
              onClick={() => {
                setSelectedServiceModality('a_domicilio');
                setIsServiceModalOpen(true);
              }}
              className="text-orange-400 hover:text-orange-300 font-bold underline cursor-pointer"
            >
              Solicitar Técnico a Domicilio →
            </button>
          </div>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div
            onClick={() => {
              setSelectedServiceModality('en_tienda');
              setIsServiceModalOpen(true);
            }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/50 cursor-pointer transition group"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white group-hover:text-orange-400 transition">Soporte en Tienda</p>
              <p className="text-[11px] text-slate-400">Laboratorio CompuPlaza Wilson</p>
            </div>
          </div>

          <div
            onClick={() => {
              setSelectedServiceModality('a_domicilio');
              setIsServiceModalOpen(true);
            }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/50 cursor-pointer transition group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white group-hover:text-emerald-400 transition">Soporte a Domicilio</p>
              <p className="text-[11px] text-slate-400">Atención técnica en Lima</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Envíos a Todo el Perú</p>
              <p className="text-[11px] text-slate-400">Shalom, Olva Courier y Express</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Garantía Real 100%</p>
              <p className="text-[11px] text-slate-400">Repuestos nuevos sellados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
