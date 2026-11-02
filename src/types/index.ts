export type ProductCategory = 
  | 'pc-gamer'
  | 'computadoras'
  | 'cctv'
  | 'punto-de-venta'
  | 'todo-en-uno'
  | 'laptops'
  | 'monitores'
  | 'impresoras'
  | 'componentes'
  | 'accesorios';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  brand: string;
  price: number;
  originalPrice?: number;
  stock: number;
  minStockAlert?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery?: string[];
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    gpu?: string;
    motherboard?: string;
    powerSupply?: string;
    screen?: string;
    cooling?: string;
    warranty: string;
    [key: string]: string | undefined;
  };
  description: string;
  featured?: boolean;
  isNew?: boolean;
  discountPercentage?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PaymentMethodType = 'card' | 'yape-plin' | 'transfer' | 'pagoefectivo';

export interface BankAccountInfo {
  bank: string;
  accountNumber: string;
  cci: string;
  holder: string;
}

export type OrderStatus = 'pendiente' | 'pagado' | 'en_preparacion' | 'enviado' | 'entregado';

export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string; // e.g. YURI-2026-4891
  date: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerDniOrRuc: string;
  documentType: 'boleta' | 'factura';
  companyName?: string;
  shippingAddress: string;
  shippingCity: string;
  shippingMethod: 'lima_express' | 'provincia_shalom' | 'recojo_tienda';
  paymentMethod: PaymentMethodType;
  paymentDetails: {
    referenceNumber?: string;
    cardLast4?: string;
    bankName?: string;
    voucherImage?: string;
    cipCode?: string;
  };
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  discount: number;
  total: number;
  status: OrderStatus;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

export interface SupportTicket {
  id: string; // e.g. TICKET-9041
  userId: string;
  userName: string;
  userEmail: string;
  userPhone?: string;
  orderId?: string;
  subject: string;
  category: 'garantia' | 'ensamblaje' | 'drivers' | 'reparacion' | 'consulta_general';
  priority: 'baja' | 'media' | 'alta' | 'urgente';
  status: 'abierto' | 'en_revision' | 'resuelto' | 'cerrado';
  createdAt: string;
  updatedAt: string;
  messages: {
    id: string;
    sender: 'user' | 'support';
    senderName: string;
    message: string;
    timestamp: string;
  }[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  dni: string;
  address: string;
  city: string;
  isAdmin?: boolean;
}

export interface SentEmail {
  id: string;
  orderId: string;
  toEmail: string;
  subject: string;
  sentAt: string;
  htmlContent: string;
}

export type TechnicalServiceModality = 'en_tienda' | 'a_domicilio';

export interface TechnicalServiceBooking {
  id: string; // e.g. SERV-2026-8941
  serviceModality: TechnicalServiceModality;
  deviceType: 'pc_escritorio' | 'pc_gamer' | 'laptop' | 'punto_de_venta' | 'todo_en_uno' | 'servidor';
  brandModel: string;
  serviceCategory: 'diagnostico_falla' | 'mantenimiento_preventivo' | 'formateo_software' | 'repotenciacion_hardware' | 'cambio_pantalla_teclado' | 'limpieza_pasta_termica';
  issueDescription: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerDni: string;
  address?: string;
  district?: string;
  preferredDate: string;
  preferredTime: string;
  status: 'solicitado' | 'en_evaluacion' | 'tecnico_asignado' | 'en_reparacion' | 'listo_entrega' | 'finalizado';
  assignedTechnician?: string;
  estimatedBudget?: number;
  createdAt: string;
}

export type AppView = 'shop' | 'technical-service' | 'hosting-domains' | 'web-app-development';

export interface SalesAdvisor {
  id: string;
  name: string;
  phone: string;
  displayPhone: string;
  role: string;
  phoneRaw?: string;
}

export interface HostingPlan {
  id: string;
  name: string;
  storageGb: number;
  storageDisplay: string;
  priceAnnual: number;
  badge?: string;
  popular?: boolean;
  isPopular?: boolean;
  storage?: string;
  idealFor?: string;
  sitesCount: string;
  bandwidth: string;
  emailsCount: string;
  sslIncluded: boolean;
  cPanelIncluded: boolean;
  description: string;
  features: string[];
}

export interface DomainPricing {
  tld: string;
  extension?: string;
  priceAnnual: number;
  popular?: boolean;
  description: string;
}

export interface WebDevService {
  id: string;
  category: 'landing_page' | 'web_basica' | 'web_administrable' | 'sistema_web_app';
  title: string;
  subtitle: string;
  badge?: string;
  priceRange: string;
  priceStarting?: string;
  deliveryTime: string;
  description: string;
  features: string[];
  idealFor: string;
  technologies: string[];
}

export interface HeroSlide {
  id: string;
  title: string;
  highlightText: string;
  subtitle: string;
  badge: string;
  badgeColor?: string;
  ctaText: string;
  ctaActionCategory?: string;
  isSpecialAction?: 'open_service_modal' | 'view_hosting' | 'view_web_dev';
  image: string;
  tagline: string;
  specsSummary?: string[];
  priceNotice?: string;
}



