import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Product,
  CartItem,
  Order,
  SupportTicket,
  UserProfile,
  SentEmail,
  OrderStatus,
  HeroSlide,
  TechnicalServiceBooking,
  TechnicalServiceModality,
  AppView
} from '../types';
import {
  INITIAL_PRODUCTS,
  INITIAL_ORDERS,
  INITIAL_TICKETS,
  DEFAULT_USER,
  INITIAL_SLIDES,
  INITIAL_SERVICE_BOOKINGS,
  BUSINESS_INFO,
  SALES_ADVISORS
} from '../data/mockData';



interface StoreContextType {
  // Products & Inventory
  products: Product[];
  restoreDefaultCatalog: () => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  updateStock: (id: string, newStock: number) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;

  // Orders
  orders: Order[];
  createOrder: (orderData: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerDniOrRuc: string;
    documentType: 'boleta' | 'factura';
    companyName?: string;
    shippingAddress: string;
    shippingCity: string;
    shippingMethod: 'lima_express' | 'provincia_shalom' | 'recojo_tienda';
    paymentMethod: Order['paymentMethod'];
    paymentDetails: Order['paymentDetails'];
    subtotal: number;
    shippingCost: number;
    discount: number;
    total: number;
  }) => Promise<Order>;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;

  // Support Tickets
  tickets: SupportTicket[];
  createTicket: (
    ticketData: {
      subject: string;
      category: SupportTicket['category'];
      priority: SupportTicket['priority'];
      orderId?: string;
    },
    initialMessage: string
  ) => SupportTicket;
  addTicketMessage: (
    ticketId: string,
    sender: 'user' | 'support',
    message: string,
    senderName: string
  ) => void;
  updateTicketStatus: (ticketId: string, status: SupportTicket['status']) => void;

  // User
  currentUser: UserProfile;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  updateUserProfile: (updates: Partial<UserProfile>) => void;

  // Email Notifications
  sentEmails: SentEmail[];
  lastCreatedOrder: Order | null;
  selectedEmailForModal: SentEmail | null;
  setSelectedEmailForModal: (email: SentEmail | null) => void;
  showEmailModal: boolean;
  setShowEmailModal: (show: boolean) => void;

  // Technical Support In-Store / Home Service
  serviceBookings: TechnicalServiceBooking[];
  createServiceBooking: (data: {
    serviceModality: TechnicalServiceModality;
    deviceType: TechnicalServiceBooking['deviceType'];
    brandModel: string;
    serviceCategory: TechnicalServiceBooking['serviceCategory'];
    issueDescription: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerDni: string;
    address?: string;
    district?: string;
    preferredDate: string;
    preferredTime: string;
  }) => TechnicalServiceBooking;
  updateServiceBookingStatus: (
    bookingId: string,
    status: TechnicalServiceBooking['status'],
    technician?: string,
    budget?: number
  ) => void;
  isServiceModalOpen: boolean;
  setIsServiceModalOpen: (open: boolean) => void;
  selectedServiceModality: TechnicalServiceModality;
  setSelectedServiceModality: (mod: TechnicalServiceModality) => void;

  // 5 Hero Slides Slider State
  slides: HeroSlide[];
  updateSlide: (id: string, updates: Partial<HeroSlide>) => void;
  addSlide: (slide: Omit<HeroSlide, 'id'>) => void;
  deleteSlide: (id: string) => void;

  // Navigation & Page Views
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  addCustomServiceToCart: (item: { name: string; price: number; category: string; description: string; image?: string }) => void;

  // UI state & Modals
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (cat: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  accountInitialTab: 'orders' | 'support' | 'profile';
  setAccountInitialTab: (tab: 'orders' | 'support' | 'profile') => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  selectedProductForDetail: Product | null;
  setSelectedProductForDetail: (product: Product | null) => void;
  selectedProductForShare: Product | null;
  setSelectedProductForShare: (product: Product | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}



const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const CATALOG_VERSION = 'yuritec_catalog_v5_cctv_all';

  // Products with localStorage persistence & automatic catalog sync
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const storedVersion = localStorage.getItem('yuritec_catalog_version');
      const saved = localStorage.getItem('yuritec_products');
      if (saved && storedVersion === CATALOG_VERSION) {
        const parsed: Product[] = JSON.parse(saved);
        // Smart merge: ensure any new product added in code is present
        const existingIds = new Set(parsed.map(p => p.id));
        const missing = INITIAL_PRODUCTS.filter(p => !existingIds.has(p.id));
        if (missing.length === 0) {
          return parsed;
        }
        const merged = [...parsed, ...missing];
        return merged;
      }
    } catch (e) {
      console.error('Error loading products from cache:', e);
    }
    // Fresh seed if version differs or missing
    try {
      localStorage.setItem('yuritec_catalog_version', CATALOG_VERSION);
      localStorage.setItem('yuritec_products', JSON.stringify(INITIAL_PRODUCTS));
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PRODUCTS;
  });

  // Cart with localStorage persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('yuritec_cart');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  });

  // Orders with localStorage persistence
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('yuritec_orders');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_ORDERS;
  });

  // Support Tickets
  const [tickets, setTickets] = useState<SupportTicket[]>(() => {
    const saved = localStorage.getItem('yuritec_tickets');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_TICKETS;
  });

  // User profile
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('yuritec_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return DEFAULT_USER;
  });

  // Sent Emails log
  const [sentEmails, setSentEmails] = useState<SentEmail[]>(() => {
    const saved = localStorage.getItem('yuritec_sent_emails');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  });

  // 5 Hero Slides Slider State with persistence
  const [slides, setSlides] = useState<HeroSlide[]>(() => {
    const saved = localStorage.getItem('yuritec_slides');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_SLIDES;
  });

  // Technical Service Bookings (In-Store & At-Home)
  const [serviceBookings, setServiceBookings] = useState<TechnicalServiceBooking[]>(() => {
    const saved = localStorage.getItem('yuritec_service_bookings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_SERVICE_BOOKINGS;
  });

  // Technical Service Modal State
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedServiceModality, setSelectedServiceModality] = useState<TechnicalServiceModality>('en_tienda');

  // Navigation View State
  const [currentView, setCurrentView] = useState<AppView>('shop');

  // UI state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('todos');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [accountInitialTab, setAccountInitialTab] = useState<'orders' | 'support' | 'profile'>('orders');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [selectedProductForShare, setSelectedProductForShare] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);


  // Email Confirmation modal state
  const [lastCreatedOrder, setLastCreatedOrder] = useState<Order | null>(null);
  const [selectedEmailForModal, setSelectedEmailForModal] = useState<SentEmail | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('yuritec_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('yuritec_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('yuritec_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('yuritec_tickets', JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem('yuritec_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('yuritec_sent_emails', JSON.stringify(sentEmails));
  }, [sentEmails]);

  useEffect(() => {
    localStorage.setItem('yuritec_slides', JSON.stringify(slides));
  }, [slides]);

  useEffect(() => {
    localStorage.setItem('yuritec_service_bookings', JSON.stringify(serviceBookings));
  }, [serviceBookings]);


  // Toast handler
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 4000);
  };

  // Cart operations
  const addToCart = (product: Product, quantity = 1) => {
    if (product.stock <= 0) {
      showToast('❌ Lo sentimos, este producto se encuentra agotado temporalmente.');
      return;
    }

    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        const newQty = Math.min(existing.quantity + quantity, product.stock);
        if (newQty === existing.quantity && existing.quantity >= product.stock) {
          showToast(`⚠️ Has alcanzado el límite de stock disponible (${product.stock} unidades).`);
          return prev;
        }
        showToast(`✅ "${product.name.slice(0, 30)}..." actualizado en tu carrito.`);
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: newQty } : item
        );
      } else {
        const initialQty = Math.min(quantity, product.stock);
        showToast(`🛒 "${product.name.slice(0, 30)}..." agregado al carrito.`);
        return [...prev, { product, quantity: initialQty }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('🗑️ Producto retirado del carrito.');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => {
        if (item.product.id === productId) {
          const max = item.product.stock;
          const finalQty = Math.min(quantity, max);
          return { ...item, quantity: finalQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  // Inventory management
  const addProduct = (newProdData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...newProdData,
      id: `prod-${Date.now()}`
    };
    setProducts(prev => [newProduct, ...prev]);
    showToast(`✨ Producto "${newProduct.name.slice(0, 25)}..." agregado al inventario.`);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updates } : p))
    );
    showToast('✅ Producto actualizado correctamente.');
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    showToast('🗑️ Producto eliminado del catálogo.');
  };

  const updateStock = (id: string, newStock: number) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, stock: Math.max(0, newStock) } : p))
    );
    showToast('📦 Stock actualizado.');
  };

  const restoreDefaultCatalog = () => {
    setProducts(INITIAL_PRODUCTS);
    try {
      localStorage.setItem('yuritec_catalog_version', CATALOG_VERSION);
      localStorage.setItem('yuritec_products', JSON.stringify(INITIAL_PRODUCTS));
    } catch (e) {
      console.error(e);
    }
    showToast('✅ Catálogo oficial sincronizado (Todas las categorías y productos restaurados).');
  };

  // Generate Email HTML helper
  const generateOrderEmailHtml = (order: Order): string => {
    const itemsHtml = order.items
      .map(
        item => `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 12px 8px; vertical-align: middle;">
            <div style="font-weight: 600; color: #1e293b; font-size: 14px;">${item.productName}</div>
            <div style="color: #64748b; font-size: 12px;">Cant: ${item.quantity} x S/ ${item.price.toLocaleString('es-PE')}</div>
          </td>
          <td style="padding: 12px 8px; text-align: right; font-weight: bold; color: #0f172a; font-size: 14px; vertical-align: middle;">
            S/ ${(item.price * item.quantity).toLocaleString('es-PE')}
          </td>
        </tr>
      `
      )
      .join('');

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #334155; }
          .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 28px 24px; text-align: center; border-bottom: 4px solid #f97316; }
          .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
          .header p { color: #f97316; margin: 6px 0 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
          .badge-order { display: inline-block; background-color: #ffedd5; color: #c2410c; padding: 6px 14px; border-radius: 9999px; font-size: 13px; font-weight: bold; margin-top: 15px; }
          .body-content { padding: 24px; }
          .greeting { font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
          .info-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0; }
          .info-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; }
          .info-label { color: #64748b; font-weight: 500; }
          .info-val { color: #0f172a; font-weight: 600; text-align: right; }
          .table-items { width: 100%; border-collapse: collapse; margin-top: 15px; }
          .totals-table { width: 100%; margin-top: 16px; border-top: 2px solid #e2e8f0; padding-top: 12px; }
          .totals-row { display: flex; justify-content: space-between; font-size: 14px; padding: 4px 0; }
          .grand-total { font-size: 18px; font-weight: 800; color: #ea580c; border-top: 1px dashed #cbd5e1; padding-top: 8px; margin-top: 8px; }
          .footer { background-color: #0f172a; color: #94a3b8; text-align: center; padding: 20px; font-size: 12px; line-height: 1.6; }
          .footer strong { color: #ffffff; }
          .btn-action { display: inline-block; background-color: #ea580c; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin-top: 20px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>YURITEC COMPUTER SAC</h1>
            <p>Especialistas en Cómputo, Laptops y Gaming</p>
            <div class="badge-order">Orden Confirmada: #${order.id}</div>
          </div>
          <div class="body-content">
            <div class="greeting">¡Hola, ${order.customerName}! 👋</div>
            <p style="font-size: 14px; line-height: 1.6; color: #475569;">
              Muchas gracias por tu compra en <strong>YURITEC COMPUTER SAC</strong>. Hemos recibido tu pedido con éxito y nuestro equipo de laboratorio y logística ya se encuentra preparando tus productos bajo estrictos estándares de calidad.
            </p>

            <div class="info-box">
              <div class="info-row"><span class="info-label">Fecha de Compra:</span><span class="info-val">${order.date}</span></div>
              <div class="info-row"><span class="info-label">Comprobante:</span><span class="info-val">${order.documentType === 'factura' ? 'Factura Electrónica' : 'Boleta de Venta Electrónica'} (${order.customerDniOrRuc})</span></div>
              <div class="info-row"><span class="info-label">Método de Pago:</span><span class="info-val">${order.paymentMethod.toUpperCase()}</span></div>
              <div class="info-row"><span class="info-label">Destino / Entrega:</span><span class="info-val">${order.shippingAddress}, ${order.shippingCity}</span></div>
              <div class="info-row"><span class="info-label">Código de Seguimiento:</span><span class="info-val" style="color: #ea580c;">${order.trackingNumber || 'Generándose en agencia'}</span></div>
            </div>

            <h3 style="font-size: 15px; color: #0f172a; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ea580c; padding-bottom: 6px; display: inline-block;">
              Resumen de Artículos
            </h3>
            <table class="table-items">
              ${itemsHtml}
            </table>

            <div class="totals-table">
              <div class="totals-row"><span>Subtotal:</span><span>S/ ${order.subtotal.toLocaleString('es-PE')}</span></div>
              <div class="totals-row"><span>Envío:</span><span>${order.shippingCost === 0 ? 'Gratis' : `S/ ${order.shippingCost}`}</span></div>
              ${order.discount > 0 ? `<div class="totals-row" style="color: #16a34a;"><span>Descuento aplicado:</span><span>-S/ ${order.discount}</span></div>` : ''}
              <div class="totals-row grand-total"><span>Total Pagado:</span><span>S/ ${order.total.toLocaleString('es-PE')}</span></div>
            </div>

            <div style="text-align: center; margin-top: 24px;">
              <div style="font-size: 13px; color: #64748b;">¿Tienes alguna consulta técnica o deseas coordinar tu entrega? Contáctanos de inmediato por WhatsApp con nuestros asesores:</div>
              <div style="margin-top: 14px; display: flex; justify-content: center; gap: 10px;">
                <a href="https://wa.me/51920159765?text=Hola%20Yuritec,%20hice%20el%20pedido%20${order.id}" class="btn-action" style="margin-top: 0; background-color: #ea580c;">
                  Asesor 1: 920 159 765
                </a>
                <a href="https://wa.me/51907373993?text=Hola%20Yuritec,%20hice%20el%20pedido%20${order.id}" class="btn-action" style="margin-top: 0; background-color: #0284c7;">
                  Asesor 2: 907 373 993
                </a>
              </div>
            </div>
          </div>

          <div class="footer">
            <strong>YURITEC COMPUTER SAC</strong> • RUC: 20609845123<br />
            Calle Humbolt c/ Claveles - Barrio Las Flores - Yurimaguas, Alto Amazonas, Loreto - Perú<br />
            Horario: Lunes a Sábado 8:00am a 7:00pm | Domingo 9:00am a 1:00pm<br />
            Asesores de Ventas & Soporte: +51 920 159 765 / +51 907 373 993
          </div>
        </div>
      </body>
      </html>
    `;
  };

  // Create Order with automatic stock decrement & automatic confirmation email
  const createOrder = async (orderData: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerDniOrRuc: string;
    documentType: 'boleta' | 'factura';
    companyName?: string;
    shippingAddress: string;
    shippingCity: string;
    shippingMethod: 'lima_express' | 'provincia_shalom' | 'recojo_tienda';
    paymentMethod: Order['paymentMethod'];
    paymentDetails: Order['paymentDetails'];
    subtotal: number;
    shippingCost: number;
    discount: number;
    total: number;
  }): Promise<Order> => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `YURI-EXP-${Date.now().toString().slice(-5)}`;
    
    const newOrder: Order = {
      id: `YURI-2026-${randomSuffix}`,
      date: new Date().toLocaleString('es-PE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }),
      customerName: orderData.customerName,
      customerEmail: orderData.customerEmail,
      customerPhone: orderData.customerPhone,
      customerDniOrRuc: orderData.customerDniOrRuc,
      documentType: orderData.documentType,
      companyName: orderData.companyName,
      shippingAddress: orderData.shippingAddress,
      shippingCity: orderData.shippingCity,
      shippingMethod: orderData.shippingMethod,
      paymentMethod: orderData.paymentMethod,
      paymentDetails: orderData.paymentDetails,
      items: cart.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.image
      })),
      subtotal: orderData.subtotal,
      shippingCost: orderData.shippingCost,
      discount: orderData.discount,
      total: orderData.total,
      status: 'pagado',
      trackingNumber: trackingCode,
      estimatedDelivery: 'En 24 a 48 horas'
    };

    // 1. Decrement inventory stock
    setProducts(prevProducts =>
      prevProducts.map(prod => {
        const cartMatch = cart.find(ci => ci.product.id === prod.id);
        if (cartMatch) {
          const updatedStock = Math.max(0, prod.stock - cartMatch.quantity);
          return { ...prod, stock: updatedStock };
        }
        return prod;
      })
    );

    // 2. Save order
    setOrders(prev => [newOrder, ...prev]);

    // 3. Clear cart
    clearCart();

    // 4. Generate and record the automatic confirmation email
    const emailHtml = generateOrderEmailHtml(newOrder);
    const sentEmailRecord: SentEmail = {
      id: `email-${Date.now()}`,
      orderId: newOrder.id,
      toEmail: newOrder.customerEmail,
      subject: `✅ Confirmación de Compra #${newOrder.id} - YURITEC COMPUTER SAC`,
      sentAt: newOrder.date,
      htmlContent: emailHtml
    };
    setSentEmails(prev => [sentEmailRecord, ...prev]);

    // 5. Trigger popup of confirmation & email preview
    setLastCreatedOrder(newOrder);
    setSelectedEmailForModal(sentEmailRecord);
    setShowEmailModal(true);

    showToast(`🎉 ¡Compra confirmada! Se envió correo a ${newOrder.customerEmail}`);
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev =>
      prev.map(ord => (ord.id === orderId ? { ...ord, status } : ord))
    );
    showToast(`📦 Estado del pedido #${orderId} actualizado a "${status.toUpperCase()}".`);
  };

  // Support Tickets
  const createTicket = (
    ticketData: {
      subject: string;
      category: SupportTicket['category'];
      priority: SupportTicket['priority'];
      orderId?: string;
    },
    initialMessage: string
  ): SupportTicket => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const nowStr = new Date().toLocaleString('es-PE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newTicket: SupportTicket = {
      id: `TICKET-${randomNum}`,
      userId: currentUser.id,
      userName: currentUser.name,
      userEmail: currentUser.email,
      userPhone: currentUser.phone,
      orderId: ticketData.orderId,
      subject: ticketData.subject,
      category: ticketData.category,
      priority: ticketData.priority,
      status: 'abierto',
      createdAt: nowStr,
      updatedAt: nowStr,
      messages: [
        {
          id: `msg-${Date.now()}`,
          sender: 'user',
          senderName: currentUser.name,
          message: initialMessage,
          timestamp: nowStr
        }
      ]
    };

    setTickets(prev => [newTicket, ...prev]);
    showToast(`🛠️ Ticket #${newTicket.id} creado. Nuestro equipo responderá a la brevedad.`);
    return newTicket;
  };

  const addTicketMessage = (
    ticketId: string,
    sender: 'user' | 'support',
    message: string,
    senderName: string
  ) => {
    const nowStr = new Date().toLocaleString('es-PE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    setTickets(prev =>
      prev.map(ticket => {
        if (ticket.id === ticketId) {
          return {
            ...ticket,
            updatedAt: nowStr,
            messages: [
              ...ticket.messages,
              {
                id: `msg-${Date.now()}`,
                sender,
                senderName,
                message,
                timestamp: nowStr
              }
            ]
          };
        }
        return ticket;
      })
    );
    showToast('💬 Mensaje enviado.');
  };

  const updateTicketStatus = (ticketId: string, status: SupportTicket['status']) => {
    setTickets(prev =>
      prev.map(t => (t.id === ticketId ? { ...t, status } : t))
    );
    showToast(`Estado del ticket #${ticketId} actualizado a "${status.toUpperCase()}".`);
  };

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    setCurrentUser(prev => ({ ...prev, ...updates }));
    showToast('👤 Perfil de usuario actualizado.');
  };

  // Technical Service Bookings Management
  const createServiceBooking = (data: {
    serviceModality: TechnicalServiceModality;
    deviceType: TechnicalServiceBooking['deviceType'];
    brandModel: string;
    serviceCategory: TechnicalServiceBooking['serviceCategory'];
    issueDescription: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerDni: string;
    address?: string;
    district?: string;
    preferredDate: string;
    preferredTime: string;
  }): TechnicalServiceBooking => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const nowStr = new Date().toLocaleString('es-PE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newBooking: TechnicalServiceBooking = {
      id: `SERV-${new Date().getFullYear()}-${randomNum}`,
      serviceModality: data.serviceModality,
      deviceType: data.deviceType,
      brandModel: data.brandModel,
      serviceCategory: data.serviceCategory,
      issueDescription: data.issueDescription,
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      customerPhone: data.customerPhone,
      customerDni: data.customerDni,
      address: data.address,
      district: data.district,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      status: 'solicitado',
      assignedTechnician: data.serviceModality === 'en_tienda' ? 'Taller Central Yuritec (Calle Humbolt c/ Claveles, Yurimaguas)' : 'Técnico Móvil Domiciliario Yurimaguas',
      estimatedBudget: data.serviceModality === 'en_tienda' ? 50 : 80,
      createdAt: nowStr
    };

    setServiceBookings(prev => [newBooking, ...prev]);
    showToast(`🛠️ ¡Servicio ${newBooking.id} agendado con éxito!`);
    return newBooking;
  };

  const updateServiceBookingStatus = (
    bookingId: string,
    status: TechnicalServiceBooking['status'],
    technician?: string,
    budget?: number
  ) => {
    setServiceBookings(prev =>
      prev.map(b => {
        if (b.id === bookingId) {
          return {
            ...b,
            status,
            assignedTechnician: technician !== undefined ? technician : b.assignedTechnician,
            estimatedBudget: budget !== undefined ? budget : b.estimatedBudget
          };
        }
        return b;
      })
    );
    showToast(`Estado del servicio #${bookingId} actualizado a "${status.toUpperCase()}".`);
  };

  // Slides Management (WooCommerce / CMS style)
  const updateSlide = (id: string, updates: Partial<HeroSlide>) => {
    setSlides(prev =>
      prev.map(s => (s.id === id ? { ...s, ...updates } : s))
    );
    showToast('Diapositiva actualizada.');
  };

  const addSlide = (newSlide: Omit<HeroSlide, 'id'>) => {
    const slide: HeroSlide = {
      ...newSlide,
      id: `slide-${Date.now()}`
    };
    setSlides(prev => [...prev, slide]);
    showToast('Nueva diapositiva añadida al slider.');
  };

  const deleteSlide = (id: string) => {
    setSlides(prev => prev.filter(s => s.id !== id));
    showToast('Diapositiva eliminada.');
  };

  // Add custom service (Hosting, Domain, Web dev package) directly to cart
  const addCustomServiceToCart = (item: { name: string; price: number; category: string; description: string; image?: string }) => {
    const serviceProduct: Product = {
      id: `service-${Date.now()}`,
      name: item.name,
      category: 'componentes',
      subCategory: item.category,
      price: item.price,
      stock: 999,
      image: item.image || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      description: item.description,
      brand: 'YURITEC CLOUD & DEV',
      rating: 5.0,
      reviewsCount: 24,
      specs: {
        warranty: 'Garantía Oficial Yuritec',
        'Servicio': item.category,
        'Plazo': 'Activación Inmediata con Asesor',
        'Soporte': 'WhatsApp Directo con 2 Asesores'
      }
    };
    addToCart(serviceProduct, 1);
    setIsCartOpen(true);
    showToast(`🛒 "${item.name}" agregado a tu carrito.`);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        restoreDefaultCatalog,
        addProduct,
        updateProduct,
        deleteProduct,
        updateStock,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        orders,
        createOrder,
        updateOrderStatus,
        tickets,
        createTicket,
        addTicketMessage,
        updateTicketStatus,
        currentUser,
        setCurrentUser,
        updateUserProfile,
        sentEmails,
        lastCreatedOrder,
        selectedEmailForModal,
        setSelectedEmailForModal,
        showEmailModal,
        setShowEmailModal,
        serviceBookings,
        createServiceBooking,
        updateServiceBookingStatus,
        isServiceModalOpen,
        setIsServiceModalOpen,
        selectedServiceModality,
        setSelectedServiceModality,
        slides,
        updateSlide,
        addSlide,
        deleteSlide,
        currentView,
        setCurrentView,
        addCustomServiceToCart,
        searchQuery,
        setSearchQuery,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAccountOpen,
        setIsAccountOpen,
        accountInitialTab,
        setAccountInitialTab,
        isAdminOpen,
        setIsAdminOpen,
        selectedProductForDetail,
        setSelectedProductForDetail,
        selectedProductForShare,
        setSelectedProductForShare,
        toastMessage,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>

  );
};

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
