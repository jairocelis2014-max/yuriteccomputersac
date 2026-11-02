import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Product, ProductCategory, OrderStatus, SupportTicket, TechnicalServiceBooking, HeroSlide } from '../types';
import {
  X,
  LayoutDashboard,
  Boxes,
  ShoppingBag,
  Wrench,
  Mail,
  Plus,
  Trash2,
  Edit2,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Search,
  Filter,
  Eye,
  RefreshCw,
  Image as ImageIcon,
  Sliders,
  Star,
  Layers,
  Sparkles,
  Home,
  MapPin,
  Clock,
  DollarSign,
  Tag,
  SlidersHorizontal,
  Upload
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    products,
    restoreDefaultCatalog,
    addProduct,
    updateProduct,
    deleteProduct,
    updateStock,
    orders,
    updateOrderStatus,
    tickets,
    addTicketMessage,
    updateTicketStatus,
    sentEmails,
    setSelectedEmailForModal,
    setShowEmailModal,
    serviceBookings,
    updateServiceBookingStatus,
    slides,
    updateSlide,
    showToast
  } = useStore();

  const [activeTab, setActiveTab] = useState<'metrics' | 'inventory' | 'orders' | 'services' | 'slides' | 'support' | 'emails'>('inventory');
  const [productSearch, setProductSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState<'all' | 'in_stock' | 'low_stock' | 'out_of_stock'>('all');

  // Selected products for bulk actions
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);

  // WooCommerce-style Product Editor Modal State
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorTab, setEditorTab] = useState<'general' | 'inventory' | 'images' | 'specs' | 'publish'>('general');
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  // Form Fields
  const [formName, setFormName] = useState('');
  const [formBrand, setFormBrand] = useState('Yuritec Edition');
  const [formCategory, setFormCategory] = useState<ProductCategory>('pc-gamer');
  const [formSubCategory, setFormSubCategory] = useState('');
  const [formPrice, setFormPrice] = useState(2999);
  const [formOriginalPrice, setFormOriginalPrice] = useState(3399);
  const [formStock, setFormStock] = useState(10);
  const [formMinStockAlert, setFormMinStockAlert] = useState(2);
  const [formSku, setFormSku] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formFeatured, setFormFeatured] = useState(false);
  const [formIsNew, setFormIsNew] = useState(false);

  // Technical Specs Fields
  const [formProcessor, setFormProcessor] = useState('');
  const [formRam, setFormRam] = useState('');
  const [formStorage, setFormStorage] = useState('');
  const [formGpu, setFormGpu] = useState('');
  const [formMotherboard, setFormMotherboard] = useState('');
  const [formCooling, setFormCooling] = useState('');
  const [formScreen, setFormScreen] = useState('');
  const [formWarranty, setFormWarranty] = useState('24 Meses de garantía local');

  // Support ticket admin response
  const [adminReplyText, setAdminReplyText] = useState('');
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  // Service Booking management state
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [techAssignee, setTechAssignee] = useState('');
  const [techBudget, setTechBudget] = useState(50);

  if (!isAdminOpen) return null;

  // Compute Metrics
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const totalOrdersCount = orders.length;
  const totalInventoryUnits = products.reduce((sum, p) => sum + p.stock, 0);
  const lowStockProducts = products.filter(p => p.stock > 0 && p.stock <= (p.minStockAlert || 3));
  const outOfStockProducts = products.filter(p => p.stock <= 0);
  const openTicketsCount = tickets.filter(t => t.status !== 'resuelto' && t.status !== 'cerrado').length;
  const pendingServicesCount = serviceBookings.filter(s => s.status === 'solicitado' || s.status === 'en_evaluacion').length;

  // Sample quick image presets for hardware
  const sampleHardwareImages = [
    { label: 'PC Gamer Draco RGB', url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80' },
    { label: 'Gamer Green Matrix', url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80' },
    { label: 'Laptop ROG OLED', url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80' },
    { label: 'Terminal POS Touch', url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80' },
    { label: 'Monitor UltraGear', url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80' },
    { label: 'Teclado Mecánico', url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80' }
  ];

  // Open WooCommerce Editor for NEW product
  const handleOpenAddProduct = () => {
    setEditingProductId(null);
    setEditorTab('general');
    setFormName('');
    setFormBrand('Yuritec Edition');
    setFormCategory('pc-gamer');
    setFormSubCategory('PC Gama Alta Intel');
    setFormPrice(3299);
    setFormOriginalPrice(3699);
    setFormStock(10);
    setFormMinStockAlert(2);
    setFormSku(`YURI-SKU-${Math.floor(1000 + Math.random() * 9000)}`);
    setFormImage('https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80');
    setFormDescription('Configuración ensamblada con componentes de alto rendimiento para gaming competitivo, streaming y renderizado.');
    setFormFeatured(true);
    setFormIsNew(true);
    setFormProcessor('Intel Core i7-13700F 16 Núcleos');
    setFormRam('32GB DDR5 5600MHz Kingston Fury');
    setFormStorage('1TB SSD NVMe Gen4 7000MB/s');
    setFormGpu('NVIDIA GeForce RTX 4060 8GB GDDR6');
    setFormMotherboard('ASUS Prime B760M-A WiFi');
    setFormCooling('Refrigeración Líquida 240mm ARGB');
    setFormScreen('');
    setFormWarranty('24 Meses de garantía local oficial');
    setIsEditorOpen(true);
  };

  // Open WooCommerce Editor for EXISTING product
  const handleOpenEditProduct = (prod: Product) => {
    setEditingProductId(prod.id);
    setEditorTab('general');
    setFormName(prod.name);
    setFormBrand(prod.brand);
    setFormCategory(prod.category);
    setFormSubCategory(prod.subCategory || '');
    setFormPrice(prod.price);
    setFormOriginalPrice(prod.originalPrice || 0);
    setFormStock(prod.stock);
    setFormMinStockAlert(prod.minStockAlert || 2);
    setFormSku(prod.id);
    setFormImage(prod.image);
    setFormDescription(prod.description);
    setFormFeatured(prod.featured || false);
    setFormIsNew(prod.isNew || false);
    setFormProcessor(prod.specs.processor || '');
    setFormRam(prod.specs.ram || '');
    setFormStorage(prod.specs.storage || '');
    setFormGpu(prod.specs.gpu || '');
    setFormMotherboard(prod.specs.motherboard || '');
    setFormCooling(prod.specs.cooling || '');
    setFormScreen(prod.specs.screen || '');
    setFormWarranty(prod.specs.warranty || '24 Meses');
    setIsEditorOpen(true);
  };

  // Duplicate product (like WooCommerce duplicate)
  const handleDuplicateProduct = (prod: Product) => {
    const copy: Omit<Product, 'id'> = {
      ...prod,
      name: `${prod.name} (Copia)`,
      stock: 5,
      isNew: true
    };
    addProduct(copy);
    showToast(`📋 Producto clonado: "${copy.name.slice(0, 25)}..."`);
  };

  // Save Product
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || formPrice <= 0) {
      showToast('⚠️ Ingresa un nombre válido y un precio mayor a S/ 0.');
      return;
    }

    const discountPercentage = formOriginalPrice > formPrice
      ? Math.round(((formOriginalPrice - formPrice) / formOriginalPrice) * 100)
      : undefined;

    const payload = {
      name: formName,
      brand: formBrand || 'Yuritec',
      category: formCategory,
      subCategory: formSubCategory || undefined,
      price: Number(formPrice),
      originalPrice: formOriginalPrice > 0 ? Number(formOriginalPrice) : undefined,
      discountPercentage,
      stock: Number(formStock),
      minStockAlert: Number(formMinStockAlert),
      image: formImage || 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      description: formDescription,
      featured: formFeatured,
      isNew: formIsNew,
      rating: 4.9,
      reviewsCount: 15,
      specs: {
        processor: formProcessor || undefined,
        ram: formRam || undefined,
        storage: formStorage || undefined,
        gpu: formGpu || undefined,
        motherboard: formMotherboard || undefined,
        cooling: formCooling || undefined,
        screen: formScreen || undefined,
        warranty: formWarranty
      }
    };

    if (editingProductId) {
      updateProduct(editingProductId, payload);
    } else {
      addProduct(payload);
    }

    setIsEditorOpen(false);
  };

  // Bulk actions
  const handleSelectAllProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedProductIds(filteredProducts.map(p => p.id));
    } else {
      setSelectedProductIds([]);
    }
  };

  const handleToggleSelectProduct = (id: string) => {
    setSelectedProductIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleBulkDelete = () => {
    if (selectedProductIds.length === 0) return;
    if (confirm(`¿Estás seguro de eliminar los ${selectedProductIds.length} productos seleccionados?`)) {
      selectedProductIds.forEach(id => deleteProduct(id));
      setSelectedProductIds([]);
      showToast(`🗑️ Se eliminaron ${selectedProductIds.length} productos.`);
    }
  };

  const handleBulkAddStock = (amount: number) => {
    if (selectedProductIds.length === 0) return;
    selectedProductIds.forEach(id => {
      const p = products.find(prod => prod.id === id);
      if (p) updateStock(id, p.stock + amount);
    });
    showToast(`📦 Se aumentó stock (+${amount}) a ${selectedProductIds.length} productos.`);
  };

  // Filter products
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(productSearch.toLowerCase()) || p.brand.toLowerCase().includes(productSearch.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    let matchesStock = true;
    if (stockFilter === 'in_stock') matchesStock = p.stock > (p.minStockAlert || 3);
    else if (stockFilter === 'low_stock') matchesStock = p.stock > 0 && p.stock <= (p.minStockAlert || 3);
    else if (stockFilter === 'out_of_stock') matchesStock = p.stock <= 0;

    return matchesSearch && matchesCategory && matchesStock;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-5 animate-in fade-in duration-200">
      <div className="bg-slate-900 text-slate-100 w-full max-w-7xl rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col max-h-[95vh]">
        {/* WooCommerce Admin Bar Top */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black shadow-lg">
              <Boxes className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-base text-white tracking-wide">
                  SISTEMA ADMINISTRATIVO DE TIENDA • YURITEC COMPUTER SAC
                </h2>
                <span className="bg-orange-500/20 text-orange-400 border border-orange-500/40 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                  Modo WooCommerce Pro
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Gestión integral de catálogo, stock de inventario, pasarela bancaria, soporte técnico y sliders
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-6 flex flex-wrap gap-1.5 pt-2">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 cursor-pointer transition ${
              activeTab === 'inventory'
                ? 'border-orange-500 text-orange-400 bg-slate-800/60 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Boxes className="w-4 h-4" />
            <span>Productos e Inventario ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 cursor-pointer transition ${
              activeTab === 'services'
                ? 'border-orange-500 text-orange-400 bg-slate-800/60 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Soporte Tienda & Domicilio ({serviceBookings.length})</span>
            {pendingServicesCount > 0 && (
              <span className="bg-orange-600 text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">
                {pendingServicesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('slides')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 cursor-pointer transition ${
              activeTab === 'slides'
                ? 'border-orange-500 text-orange-400 bg-slate-800/60 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>5 Diapositivas (Slider)</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 cursor-pointer transition ${
              activeTab === 'orders'
                ? 'border-orange-500 text-orange-400 bg-slate-800/60 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Pedidos y Envíos ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 cursor-pointer transition ${
              activeTab === 'metrics'
                ? 'border-orange-500 text-orange-400 bg-slate-800/60 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Métricas de Ventas</span>
          </button>

          <button
            onClick={() => setActiveTab('support')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 cursor-pointer transition ${
              activeTab === 'support'
                ? 'border-orange-500 text-orange-400 bg-slate-800/60 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Tickets de Clientes ({tickets.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('emails')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 cursor-pointer transition ${
              activeTab === 'emails'
                ? 'border-orange-500 text-orange-400 bg-slate-800/60 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Correos Despachados ({sentEmails.length})</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="overflow-y-auto p-5 sm:p-6 flex-1 bg-slate-900/60">
          {/* TAB: INVENTORY & WOOCOMMERCE PRODUCT MANAGER */}
          {activeTab === 'inventory' && (
            <div className="space-y-4">
              {/* Top Action & Bulk Actions Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/90 p-3.5 rounded-xl border border-slate-700">
                <div className="flex flex-wrap items-center gap-2 flex-1">
                  {/* Search */}
                  <div className="relative min-w-[220px] flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Buscar por nombre, marca o modelo..."
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      className="w-full bg-slate-900 text-xs text-white pl-9 pr-3 py-2 rounded-lg border border-slate-700 outline-none focus:border-orange-500"
                    />
                  </div>

                  {/* Category Filter */}
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 outline-none"
                  >
                    <option value="all">Todas las categorías</option>
                    <option value="pc-gamer">PC Gamer</option>
                    <option value="computadoras">Computadoras</option>
                    <option value="cctv">CCTV y Videovigilancia</option>
                    <option value="punto-de-venta">Punto De Venta</option>
                    <option value="todo-en-uno">Todo En Uno</option>
                    <option value="laptops">Laptops</option>
                    <option value="monitores">Monitores</option>
                    <option value="impresoras">Impresoras</option>
                    <option value="componentes">Componentes</option>
                    <option value="accesorios">Accesorios</option>
                  </select>

                  {/* Stock Filter */}
                  <select
                    value={stockFilter}
                    onChange={(e) => setStockFilter(e.target.value as any)}
                    className="bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 outline-none"
                  >
                    <option value="all">Todos los stocks</option>
                    <option value="in_stock">En existencias</option>
                    <option value="low_stock">Pocas existencias (Alerta)</option>
                    <option value="out_of_stock">Agotado (0 unids)</option>
                  </select>
                </div>

                {/* Add Product Button (WooCommerce style) */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (confirm('¿Deseas sincronizar y recargar todo el catálogo oficial completo (incluyendo Cámaras CCTV, PCs, Laptops, Impresoras y Accesorios)?')) {
                        restoreDefaultCatalog();
                      }
                    }}
                    className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-xs py-2 px-3.5 rounded-lg flex items-center gap-1.5 transition cursor-pointer border border-slate-600 hover:text-white"
                    title="Recarga todos los productos originales con la categoría CCTV"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-orange-400" />
                    <span>Sincronizar Catálogo</span>
                  </button>
                  <button
                    onClick={handleOpenAddProduct}
                    className="bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs py-2 px-4 rounded-lg flex items-center gap-1.5 transition shadow-md cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Añadir Producto (WooCommerce)</span>
                  </button>
                </div>
              </div>

              {/* Bulk Actions Bar if items selected */}
              {selectedProductIds.length > 0 && (
                <div className="bg-orange-950/60 border border-orange-700/60 p-2.5 rounded-xl flex items-center justify-between text-xs animate-in fade-in duration-150">
                  <span className="font-bold text-orange-300">
                    {selectedProductIds.length} productos seleccionados
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleBulkAddStock(5)}
                      className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-3 py-1.5 rounded-lg border border-slate-600 cursor-pointer text-xs"
                    >
                      +5 Stock masivo
                    </button>
                    <button
                      onClick={handleBulkDelete}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded-lg cursor-pointer text-xs flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Borrar Seleccionados</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Products Table */}
              <div className="bg-slate-800/70 border border-slate-700 rounded-xl overflow-hidden overflow-x-auto shadow-md">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-700">
                    <tr>
                      <th className="py-3 px-3 w-8">
                        <input
                          type="checkbox"
                          checked={selectedProductIds.length > 0 && selectedProductIds.length === filteredProducts.length}
                          onChange={handleSelectAllProducts}
                          className="accent-orange-600"
                        />
                      </th>
                      <th className="py-3 px-3 w-14">Imagen</th>
                      <th className="py-3 px-4">Nombre / Modelo</th>
                      <th className="py-3 px-3">SKU / ID</th>
                      <th className="py-3 px-3">Inventario</th>
                      <th className="py-3 px-4">Precio Regular</th>
                      <th className="py-3 px-3">Categoría</th>
                      <th className="py-3 px-4 text-center">Ajuste de Stock</th>
                      <th className="py-3 px-4 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {filteredProducts.map((p) => {
                      const isSelected = selectedProductIds.includes(p.id);
                      const isLowStock = p.stock > 0 && p.stock <= (p.minStockAlert || 3);
                      const isOutOfStock = p.stock <= 0;

                      return (
                        <tr
                          key={p.id}
                          className={`hover:bg-slate-800/50 transition ${isSelected ? 'bg-orange-950/20' : ''}`}
                        >
                          <td className="py-3 px-3">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleToggleSelectProduct(p.id)}
                              className="accent-orange-600"
                            />
                          </td>
                          <td className="py-3 px-3">
                            <img
                              src={p.image}
                              alt=""
                              className="w-12 h-12 object-contain rounded-lg bg-slate-900 border border-slate-700 p-0.5"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <div className="min-w-0 max-w-xs">
                              <p className="font-bold text-white line-clamp-1">{p.name}</p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[10px] text-orange-400 font-semibold">{p.brand}</span>
                                {p.featured && (
                                  <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded font-bold">
                                    ★ Destacado
                                  </span>
                                )}
                                {p.isNew && (
                                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-bold">
                                    Nuevo
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3 font-mono text-slate-400 text-[11px]">
                            {p.id.slice(0, 14)}
                          </td>
                          <td className="py-3 px-3">
                            {isOutOfStock ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                                Agotado (0)
                              </span>
                            ) : isLowStock ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                Pocas ({p.stock})
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                En stock ({p.stock})
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 font-bold text-white">
                            <span className="text-emerald-400 block font-mono">
                              S/ {p.price.toLocaleString('es-PE')}
                            </span>
                            {p.originalPrice && (
                              <span className="text-[10px] text-slate-500 line-through">
                                S/ {p.originalPrice.toLocaleString('es-PE')}
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-3">
                            <span className="bg-slate-900 px-2 py-0.5 rounded text-[10px] text-slate-300 border border-slate-700">
                              {p.category}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <div className="inline-flex items-center gap-1 bg-slate-900 border border-slate-700 rounded-lg p-0.5">
                              <button
                                onClick={() => updateStock(p.id, p.stock - 1)}
                                className="px-2 py-0.5 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 rounded cursor-pointer"
                                title="Restar 1"
                              >
                                -1
                              </button>
                              <span className="px-2 text-xs font-bold text-white font-mono">{p.stock}</span>
                              <button
                                onClick={() => updateStock(p.id, p.stock + 1)}
                                className="px-2 py-0.5 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 rounded cursor-pointer"
                                title="Sumar 1"
                              >
                                +1
                              </button>
                              <button
                                onClick={() => updateStock(p.id, p.stock + 5)}
                                className="px-1.5 py-0.5 text-[10px] font-bold bg-orange-600 text-white rounded hover:bg-orange-500 cursor-pointer ml-1"
                                title="Añadir 5 unidades de stock"
                              >
                                +5
                              </button>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right space-x-1.5">
                            <button
                              onClick={() => handleOpenEditProduct(p)}
                              className="p-1.5 text-slate-300 hover:text-orange-400 hover:bg-slate-800 rounded cursor-pointer transition"
                              title="Editar producto"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDuplicateProduct(p)}
                              className="p-1.5 text-slate-300 hover:text-blue-400 hover:bg-slate-800 rounded cursor-pointer transition"
                              title="Duplicar producto"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`¿Eliminar permanentemente "${p.name}" del catálogo?`)) {
                                  deleteProduct(p.id);
                                }
                              }}
                              className="p-1.5 text-slate-300 hover:text-red-400 hover:bg-slate-800 rounded cursor-pointer transition"
                              title="Borrar producto"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: SOPORTE TÉCNICO PARTICULAR (TIENDA & DOMICILIO) */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                <div>
                  <h3 className="font-bold text-sm text-white">
                    Gestión de Solicitudes de Soporte Técnico Particular
                  </h3>
                  <p className="text-xs text-slate-400">
                    Administra atenciones en tienda (Laboratorio CompuPlaza Wilson) y visitas a domicilio en Lima
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full">
                    {serviceBookings.length} Solicitudes Totales
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Bookings List */}
                <div className="md:col-span-5 space-y-2.5 max-h-[500px] overflow-y-auto">
                  {serviceBookings.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => {
                        setSelectedServiceId(b.id);
                        setTechAssignee(b.assignedTechnician || '');
                        setTechBudget(b.estimatedBudget || 50);
                      }}
                      className={`p-3.5 rounded-xl border text-xs cursor-pointer transition ${
                        selectedServiceId === b.id
                          ? 'border-orange-500 bg-slate-800 ring-1 ring-orange-500'
                          : 'border-slate-700 bg-slate-800/40 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white">#{b.id}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                          b.serviceModality === 'en_tienda'
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {b.serviceModality === 'en_tienda' ? 'En Tienda Wilson' : 'A Domicilio'}
                        </span>
                      </div>

                      <p className="text-white font-semibold">{b.customerName}</p>
                      <p className="text-[11px] text-slate-400 truncate">
                        {b.deviceType.toUpperCase()} • {b.issueDescription}
                      </p>

                      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                        <span>Cita: {b.preferredDate} ({b.preferredTime})</span>
                        <span className="text-orange-400 font-bold uppercase">{b.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Selected Booking Detail & Administration */}
                <div className="md:col-span-7 bg-slate-800/80 border border-slate-700 rounded-xl p-5 flex flex-col justify-between">
                  {selectedServiceId ? (
                    (() => {
                      const cur = serviceBookings.find(s => s.id === selectedServiceId);
                      if (!cur) return null;

                      return (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-black text-sm text-white">
                                  Orden de Servicio #{cur.id}
                                </h4>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                  cur.serviceModality === 'en_tienda' ? 'bg-orange-600 text-white' : 'bg-emerald-600 text-white'
                                }`}>
                                  {cur.serviceModality === 'en_tienda' ? 'EN TIENDA COMPUPLAZA' : 'A DOMICILIO'}
                                </span>
                              </div>
                              <span className="text-xs text-slate-400">Registrado el {cur.createdAt}</span>
                            </div>

                            <select
                              value={cur.status}
                              onChange={(e) => updateServiceBookingStatus(cur.id, e.target.value as any, cur.assignedTechnician, cur.estimatedBudget)}
                              className="bg-slate-900 text-xs font-bold text-orange-400 border border-orange-500/50 rounded-lg p-2 outline-none cursor-pointer"
                            >
                              <option value="solicitado">Solicitado</option>
                              <option value="en_evaluacion">En Evaluación / Diagnóstico</option>
                              <option value="tecnico_asignado">Técnico Asignado</option>
                              <option value="en_reparacion">En Reparación</option>
                              <option value="listo_entrega">Listo para Entrega</option>
                              <option value="finalizado">Finalizado</option>
                            </select>
                          </div>

                          {/* Client Details */}
                          <div className="grid grid-cols-2 gap-3 text-xs bg-slate-900/60 p-3.5 rounded-xl border border-slate-700">
                            <div>
                              <span className="text-slate-400 block text-[11px]">Cliente:</span>
                              <strong className="text-white">{cur.customerName}</strong>
                              <p className="text-slate-400 text-[11px]">{cur.customerPhone} • {cur.customerEmail}</p>
                            </div>
                            <div>
                              <span className="text-slate-400 block text-[11px]">DNI / Identificación:</span>
                              <strong className="text-white">{cur.customerDni}</strong>
                            </div>
                            {cur.address && (
                              <div className="col-span-2">
                                <span className="text-slate-400 block text-[11px]">Dirección de Visita a Domicilio:</span>
                                <strong className="text-orange-300">{cur.address}, {cur.district}</strong>
                              </div>
                            )}
                          </div>

                          {/* Hardware problem description */}
                          <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700 text-xs space-y-1">
                            <span className="text-slate-400 text-[11px] block font-semibold">
                              Dispositivo: {cur.deviceType.toUpperCase()} - {cur.brandModel}
                            </span>
                            <span className="text-orange-400 text-[11px] block font-bold">
                              Servicio: {cur.serviceCategory.replace('_', ' ').toUpperCase()}
                            </span>
                            <p className="text-slate-200 mt-1 leading-relaxed bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                              {cur.issueDescription}
                            </p>
                          </div>

                          {/* Technician Assignment and Budget Edit */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                                Técnico Asignado
                              </label>
                              <input
                                type="text"
                                value={techAssignee}
                                onChange={(e) => setTechAssignee(e.target.value)}
                                placeholder="Ej. Ing. Rodrigo Paz"
                                className="w-full bg-slate-900 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                                Presupuesto Estimado (S/)
                              </label>
                              <input
                                type="number"
                                min={0}
                                value={techBudget}
                                onChange={(e) => setTechBudget(Number(e.target.value))}
                                className="w-full bg-slate-900 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none"
                              />
                            </div>
                          </div>

                          <div className="flex justify-end gap-2 pt-2 border-t border-slate-700">
                            <button
                              onClick={() => {
                                updateServiceBookingStatus(cur.id, cur.status, techAssignee, techBudget);
                                showToast('✅ Asignación de técnico y presupuesto actualizada.');
                              }}
                              className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs py-2 px-5 rounded-lg transition cursor-pointer"
                            >
                              Guardar Cambios de la Orden
                            </button>
                          </div>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="h-full flex items-center justify-center text-slate-400 text-xs">
                      Selecciona una solicitud técnica para ver detalles y asignar técnico.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB: 5 HERO SLIDES SLIDER MANAGEMENT */}
          {activeTab === 'slides' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                <div>
                  <h3 className="font-bold text-sm text-white">
                    Gestor de Diapositivas Principales (5 Sliders)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Edita los textos, banners e imágenes de las diapositivas de la página de inicio
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {slides.map((s, idx) => (
                  <div key={s.id} className="bg-slate-800/70 border border-slate-700 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center">
                    <img
                      src={s.image}
                      alt=""
                      className="w-full md:w-44 h-28 object-cover rounded-lg border border-slate-700"
                    />

                    <div className="flex-1 space-y-1.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="bg-orange-600 text-white text-[10px] font-black px-2 py-0.5 rounded">
                          Slide #{idx + 1}
                        </span>
                        <span className="text-xs font-bold text-white truncate">{s.title}</span>
                      </div>
                      <p className="text-xs font-semibold text-orange-400 truncate">{s.highlightText}</p>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{s.subtitle}</p>
                      <span className="text-[10px] text-slate-500">CTA: &quot;{s.ctaText}&quot;</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          const newTitle = prompt('Editar título del slide:', s.title);
                          if (newTitle) updateSlide(s.id, { title: newTitle });
                        }}
                        className="bg-slate-900 hover:bg-slate-700 text-white text-xs font-bold py-1.5 px-3 rounded-lg border border-slate-700 cursor-pointer"
                      >
                        Editar Título
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: ORDERS MANAGEMENT */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-white">
                Control de Despachos y Comprobantes SUNAT
              </h3>

              <div className="space-y-3">
                {orders.map((ord) => (
                  <div key={ord.id} className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-white">#{ord.id}</span>
                          <span className="text-xs text-orange-400 font-semibold">{ord.customerName}</span>
                          <span className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-700 font-mono">
                            {ord.customerDniOrRuc}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400">
                          {ord.date} • {ord.customerEmail} • Tel: {ord.customerPhone}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-xs font-bold text-emerald-400 block font-mono">
                            S/ {ord.total.toLocaleString('es-PE')}
                          </span>
                          <span className="text-[10px] text-slate-400 uppercase">
                            Pago: {ord.paymentMethod}
                          </span>
                        </div>

                        <select
                          value={ord.status}
                          onChange={(e) => updateOrderStatus(ord.id, e.target.value as OrderStatus)}
                          className="bg-slate-900 text-xs font-bold text-orange-400 border border-orange-500/50 rounded-lg p-2 outline-none cursor-pointer"
                        >
                          <option value="pendiente">Pendiente</option>
                          <option value="pagado">Pagado</option>
                          <option value="en_preparacion">En Preparación / Lab</option>
                          <option value="enviado">Enviado en Tránsito</option>
                          <option value="entregado">Entregado</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2">
                      <div>
                        <span className="text-slate-400 font-medium">Entrega: </span>
                        <span>{ord.shippingAddress}, {ord.shippingCity} ({ord.shippingMethod})</span>
                      </div>

                      <button
                        onClick={() => {
                          const emailMatch = sentEmails.find(e => e.orderId === ord.id);
                          if (emailMatch) {
                            setSelectedEmailForModal(emailMatch);
                            setShowEmailModal(true);
                          } else {
                            showToast('ℹ️ No hay copia guardada del correo.');
                          }
                        }}
                        className="bg-slate-900 hover:bg-slate-700 text-white text-[11px] font-bold py-1 px-2.5 rounded border border-slate-700 flex items-center gap-1 cursor-pointer"
                      >
                        <Mail className="w-3.5 h-3.5 text-orange-400" />
                        <span>Ver Correo Notificado</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: METRICS DASHBOARD */}
          {activeTab === 'metrics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                    <span>Ventas Totales</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white font-mono">
                    S/ {totalRevenue.toLocaleString('es-PE')}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium mt-1 block">
                    Ventas con boleta y factura electrónica
                  </span>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                    <span>Total de Pedidos</span>
                    <ShoppingBag className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="text-2xl font-black text-white">
                    {totalOrdersCount}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium mt-1 block">
                    {orders.filter(o => o.status === 'pagado' || o.status === 'en_preparacion').length} activos en laboratorio
                  </span>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                    <span>Unidades en Almacén</span>
                    <Boxes className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-2xl font-black text-white">
                    {totalInventoryUnits}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium mt-1 block">
                    {products.length} productos registrados
                  </span>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                    <span>Alertas de Stock Bajo</span>
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-amber-400">
                    {lowStockProducts.length}
                  </div>
                  <span className="text-[11px] text-amber-300 font-medium mt-1 block">
                    {lowStockProducts.length > 0 ? 'Requiere reabastecimiento' : 'Stock saludable'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB: SUPPORT TICKETS DESK */}
          {activeTab === 'support' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-white">
                Mesa de Ayuda y Soporte Técnico de Hardware
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-5 space-y-2 max-h-[480px] overflow-y-auto">
                  {tickets.map(t => (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTicketId(t.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition ${
                        selectedTicketId === t.id
                          ? 'border-orange-500 bg-slate-800'
                          : 'border-slate-700 bg-slate-800/40 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white truncate">{t.subject}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 font-bold uppercase">
                          {t.status}
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px]">Cliente: {t.userName}</p>
                      <span className="text-[10px] text-slate-500">{t.updatedAt}</span>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-7 bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex flex-col justify-between h-[480px]">
                  {selectedTicketId ? (
                    (() => {
                      const curTicket = tickets.find(t => t.id === selectedTicketId);
                      if (!curTicket) return null;
                      return (
                        <>
                          <div>
                            <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
                              <div>
                                <h4 className="font-bold text-xs text-white">#{curTicket.id} - {curTicket.subject}</h4>
                                <span className="text-[11px] text-slate-400">{curTicket.userName} ({curTicket.userEmail})</span>
                              </div>
                              <select
                                value={curTicket.status}
                                onChange={(e) => updateTicketStatus(curTicket.id, e.target.value as any)}
                                className="bg-slate-900 text-xs text-orange-400 font-bold border border-slate-700 rounded p-1 outline-none cursor-pointer"
                              >
                                <option value="abierto">Abierto</option>
                                <option value="en_revision">En Revisión</option>
                                <option value="resuelto">Resuelto</option>
                                <option value="cerrado">Cerrado</option>
                              </select>
                            </div>

                            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                              {curTicket.messages.map(m => (
                                <div key={m.id} className={`p-2.5 rounded-lg text-xs ${
                                  m.sender === 'support' ? 'bg-orange-950/60 border border-orange-800/40 ml-4' : 'bg-slate-900 border border-slate-700 mr-4'
                                }`}>
                                  <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                                    <span className="font-bold text-white">{m.senderName}</span>
                                    <span>{m.timestamp}</span>
                                  </div>
                                  <p className="text-slate-200">{m.message}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-700 flex gap-2">
                            <input
                              type="text"
                              value={adminReplyText}
                              onChange={(e) => setAdminReplyText(e.target.value)}
                              placeholder="Responder como Ing. de Soporte Técnico Yuritec..."
                              className="flex-1 bg-slate-900 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none"
                            />
                            <button
                              onClick={() => {
                                if (!adminReplyText.trim()) return;
                                addTicketMessage(curTicket.id, 'support', adminReplyText, 'Ing. Rodrigo Paz - Soporte Yuritec');
                                setAdminReplyText('');
                                showToast('💬 Respuesta de soporte enviada.');
                              }}
                              className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-4 rounded-lg cursor-pointer transition"
                            >
                              Responder
                            </button>
                          </div>
                        </>
                      );
                    })()
                  ) : (
                    <div className="h-full flex items-center justify-center text-slate-400 text-xs">
                      Selecciona un ticket para ver la conversación y responder.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB: AUTOMATIC EMAILS LOG */}
          {activeTab === 'emails' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-white">
                Registro de Notificaciones Automáticas por Correo Despachadas
              </h3>
              <div className="space-y-2">
                {sentEmails.map(em => (
                  <div key={em.id} className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 flex items-center justify-between text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-emerald-400" />
                        <span className="font-bold text-white">{em.subject}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Destinatario: {em.toEmail} • Enviado el: {em.sentAt} • Orden: #{em.orderId}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedEmailForModal(em);
                        setShowEmailModal(true);
                      }}
                      className="bg-slate-900 hover:bg-slate-700 text-orange-400 font-bold text-xs px-3 py-1.5 rounded border border-slate-700 flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver Plantilla HTML</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* WOOCOMMERCE-STYLE TABBED PRODUCT EDITOR MODAL */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-60 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
          <form
            onSubmit={handleSaveProduct}
            className="bg-slate-900 text-white border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-black text-base text-white flex items-center gap-2">
                  <Boxes className="w-5 h-5 text-orange-500" />
                  <span>
                    {editingProductId ? `Editar Producto: ${formName}` : 'Añadir Nuevo Producto (WooCommerce)'}
                  </span>
                </h3>
                <span className="text-xs text-slate-400">
                  {editingProductId ? `SKU / ID: ${editingProductId}` : 'Configura datos generales, precios, inventario y ficha técnica'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                className="text-slate-400 hover:text-white cursor-pointer p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* WooCommerce Navigation Tabs */}
            <div className="bg-slate-950/80 px-6 border-b border-slate-800 flex gap-2 pt-1 text-xs">
              <button
                type="button"
                onClick={() => setEditorTab('general')}
                className={`px-3 py-2 font-bold border-b-2 cursor-pointer transition ${
                  editorTab === 'general' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-400'
                }`}
              >
                General & Precios
              </button>
              <button
                type="button"
                onClick={() => setEditorTab('inventory')}
                className={`px-3 py-2 font-bold border-b-2 cursor-pointer transition ${
                  editorTab === 'inventory' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-400'
                }`}
              >
                Inventario & Stock
              </button>
              <button
                type="button"
                onClick={() => setEditorTab('images')}
                className={`px-3 py-2 font-bold border-b-2 cursor-pointer transition ${
                  editorTab === 'images' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-400'
                }`}
              >
                Imágenes
              </button>
              <button
                type="button"
                onClick={() => setEditorTab('specs')}
                className={`px-3 py-2 font-bold border-b-2 cursor-pointer transition ${
                  editorTab === 'specs' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-400'
                }`}
              >
                Ficha Técnica
              </button>
              <button
                type="button"
                onClick={() => setEditorTab('publish')}
                className={`px-3 py-2 font-bold border-b-2 cursor-pointer transition ${
                  editorTab === 'publish' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-400'
                }`}
              >
                Categoría & Destacado
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 flex-1 space-y-4">
              {/* TAB 1: GENERAL */}
              {editorTab === 'general' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre Completo del Producto *</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Ej. PC Gamer Draco Intel Core i7 13th + RTX 4060"
                        className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Marca / Ensamblador *</label>
                      <input
                        type="text"
                        required
                        value={formBrand}
                        onChange={(e) => setFormBrand(e.target.value)}
                        placeholder="Ej. Yuritec Pro / ASUS / MSI"
                        className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Precio de Venta Normal (S/) *</label>
                      <input
                        type="number"
                        required
                        min={1}
                        value={formPrice}
                        onChange={(e) => setFormPrice(Number(e.target.value))}
                        className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Precio Original Antes de Oferta (S/ - Opcional)</label>
                      <input
                        type="number"
                        min={0}
                        value={formOriginalPrice}
                        onChange={(e) => setFormOriginalPrice(Number(e.target.value))}
                        className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Descripción del Producto</label>
                    <textarea
                      rows={4}
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      placeholder="Describe el rendimiento, usos ideales (gaming, render, diseño, oficina)..."
                      className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: INVENTARIO */}
              {editorTab === 'inventory' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">SKU (Código único de inventario)</label>
                      <input
                        type="text"
                        value={formSku}
                        onChange={(e) => setFormSku(e.target.value)}
                        className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Cantidad de Stock Actual *</label>
                      <input
                        type="number"
                        required
                        min={0}
                        value={formStock}
                        onChange={(e) => setFormStock(Number(e.target.value))}
                        className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Umbral de Pocas Existencias (Alerta)</label>
                      <input
                        type="number"
                        min={1}
                        value={formMinStockAlert}
                        onChange={(e) => setFormMinStockAlert(Number(e.target.value))}
                        className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-xs space-y-2">
                    <p className="font-semibold text-orange-400">Estado de inventario en tiempo real:</p>
                    <p className="text-slate-300">
                      {formStock <= 0 ? '⚠️ El producto aparecerá como AGOTADO en la tienda.' : `✅ Disponible para la venta: ${formStock} unidades.`}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: IMÁGENES */}
              {editorTab === 'images' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">URL de la Imagen Principal *</label>
                    <input
                      type="text"
                      required
                      value={formImage}
                      onChange={(e) => setFormImage(e.target.value)}
                      placeholder="https://..."
                      className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none font-mono"
                    />
                  </div>

                  {/* Image Preview */}
                  {formImage && (
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-4">
                      <img
                        src={formImage}
                        alt="Preview"
                        className="w-20 h-20 object-contain rounded-lg bg-slate-900 border border-slate-700 p-1"
                      />
                      <div className="text-xs text-slate-400">
                        <span className="font-bold text-white block">Vista Previa de la Imagen</span>
                        <span>Se mostrará en la tienda virtual y en el carrito</span>
                      </div>
                    </div>
                  )}

                  {/* Quick Select Preset Images */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">
                      O selecciona rápidamente una imagen de hardware optimizada:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {sampleHardwareImages.map((s, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormImage(s.url)}
                          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-2 text-left cursor-pointer transition text-xs"
                        >
                          <img src={s.url} alt="" className="w-8 h-8 object-cover rounded" />
                          <span className="truncate text-slate-200">{s.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: FICHA TÉCNICA */}
              {editorTab === 'specs' && (
                <div className="space-y-3 animate-in fade-in duration-150">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Procesador</label>
                      <input
                        type="text"
                        value={formProcessor}
                        onChange={(e) => setFormProcessor(e.target.value)}
                        placeholder="Ej. Intel Core i7-13700F"
                        className="w-full bg-slate-800 text-xs text-white p-2 rounded-lg border border-slate-700 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Memoria RAM</label>
                      <input
                        type="text"
                        value={formRam}
                        onChange={(e) => setFormRam(e.target.value)}
                        placeholder="Ej. 32GB DDR5 5600MHz RGB"
                        className="w-full bg-slate-800 text-xs text-white p-2 rounded-lg border border-slate-700 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Almacenamiento SSD</label>
                      <input
                        type="text"
                        value={formStorage}
                        onChange={(e) => setFormStorage(e.target.value)}
                        placeholder="Ej. 1TB SSD NVMe M.2 Gen4"
                        className="w-full bg-slate-800 text-xs text-white p-2 rounded-lg border border-slate-700 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Tarjeta Gráfica</label>
                      <input
                        type="text"
                        value={formGpu}
                        onChange={(e) => setFormGpu(e.target.value)}
                        placeholder="Ej. NVIDIA RTX 4060 8GB GDDR6"
                        className="w-full bg-slate-800 text-xs text-white p-2 rounded-lg border border-slate-700 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Placa Madre</label>
                      <input
                        type="text"
                        value={formMotherboard}
                        onChange={(e) => setFormMotherboard(e.target.value)}
                        placeholder="Ej. ASUS Prime B760M-A WiFi"
                        className="w-full bg-slate-800 text-xs text-white p-2 rounded-lg border border-slate-700 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Garantía Oficial</label>
                      <input
                        type="text"
                        value={formWarranty}
                        onChange={(e) => setFormWarranty(e.target.value)}
                        placeholder="Ej. 24 Meses de garantía local"
                        className="w-full bg-slate-800 text-xs text-white p-2 rounded-lg border border-slate-700 outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: CATEGORÍA & DESTACADOS */}
              {editorTab === 'publish' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Categoría Principal *</label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as any)}
                        className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none"
                      >
                        <option value="pc-gamer">PC Gamer</option>
                        <option value="computadoras">Computadoras</option>
                        <option value="cctv">CCTV y Videovigilancia</option>
                        <option value="punto-de-venta">Punto De Venta</option>
                        <option value="todo-en-uno">Todo En Uno</option>
                        <option value="laptops">Laptops</option>
                        <option value="monitores">Monitores</option>
                        <option value="impresoras">Impresoras</option>
                        <option value="componentes">Componentes</option>
                        <option value="accesorios">Accesorios</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Subcategoría</label>
                      <input
                        type="text"
                        value={formSubCategory}
                        onChange={(e) => setFormSubCategory(e.target.value)}
                        placeholder="Ej. PC Gama Alta Intel"
                        className="w-full bg-slate-800 text-xs text-white p-2.5 rounded-lg border border-slate-700 outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 space-y-3">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
                      <input
                        type="checkbox"
                        checked={formFeatured}
                        onChange={(e) => setFormFeatured(e.target.checked)}
                        className="accent-orange-600 w-4 h-4 rounded"
                      />
                      <span>Destacar este producto en la página principal (Featured)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
                      <input
                        type="checkbox"
                        checked={formIsNew}
                        onChange={(e) => setFormIsNew(e.target.checked)}
                        className="accent-orange-600 w-4 h-4 rounded"
                      />
                      <span>Etiquetar como &quot;NUEVO INGRESO&quot;</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Guarda los cambios para que se reflejen al instante en el catálogo.
              </span>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-500 text-white font-black text-xs py-2 px-6 rounded-lg transition shadow-md cursor-pointer"
                >
                  {editingProductId ? 'Actualizar Producto' : 'Publicar Producto'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
