import {
  Product,
  BankAccountInfo,
  Order,
  SupportTicket,
  UserProfile,
  HeroSlide,
  TechnicalServiceBooking,
  HostingPlan,
  DomainPricing,
  WebDevService,
  SalesAdvisor
} from '../types';


export const INITIAL_PRODUCTS: Product[] = [
  // 1. PC GAMER (Ensambladas con componentes de última generación - Precios en Soles)
  {
    id: 'prod-pc-draco-i7',
    name: 'PC Gamer Draco RGB Intel Core i7 13700F + RTX 4060 8GB',
    category: 'pc-gamer',
    subCategory: 'PC Gama Alta Intel',
    brand: 'Yuritec Pro Edition',
    price: 3899,
    originalPrice: 4299,
    stock: 7,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      processor: 'Intel Core i7-13700F (16 núcleos / 24 hilos hasta 5.2GHz)',
      ram: '32GB DDR5 5600MHz Kingston Fury Beast RGB',
      storage: '1TB SSD NVMe M.2 Kingston KC3000 PCIe 4.0 (7000MB/s)',
      gpu: 'NVIDIA GeForce RTX 4060 8GB GDDR6 ASUS Dual OC',
      motherboard: 'ASUS Prime B760M-A WiFi DDR5',
      powerSupply: '750W 80 Plus Bronze Certificada Semi-Modular',
      cooling: 'Refrigeración Líquida 240mm ARGB Dual Fan',
      warranty: '24 Meses de garantía local directa'
    },
    description: 'Computadora de alto rendimiento diseñada para streaming, edición de video 4K y gaming ultra a 1080p y 1440p en configuraciones competitivas. Incluye Windows 11 Pro activado y optimizado.',
    featured: true,
    isNew: true,
    discountPercentage: 9
  },
  {
    id: 'prod-pc-draco-i5-green',
    name: 'PC Gamer Draco Green Core i5 12400F 12th + RTX 3060 12GB',
    category: 'pc-gamer',
    subCategory: 'PC Gama Media Intel',
    brand: 'Yuritec Edition',
    price: 3399,
    originalPrice: 3699,
    stock: 12,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-12400F 6 Núcleos / 12 Hilos hasta 4.4GHz 12th Gen',
      ram: '16GB (2x8GB) DDR4 3200MHz Corsair Vengeance RGB PRO Green',
      storage: '1TB SSD M.2 NVMe Western Digital Black SN770',
      gpu: 'NVIDIA GeForce RTX 3060 12GB GDDR6 MSI Ventus 2X',
      motherboard: 'MSI PRO B660M-A DDR4',
      powerSupply: '650W 80 Plus Bronze Certificada',
      cooling: 'Disipador Torre 4 Heatpipes RGB DeepCool AG400',
      warranty: '24 Meses de garantía local'
    },
    description: 'Excelente balance calidad-precio para disfrutar de títulos como Warzone, Fortnite, Cyberpunk 2077 y Valorant a más de 160FPS estables en Yurimaguas.',
    featured: true,
    discountPercentage: 8
  },
  {
    id: 'prod-pc-draco-pink-i7',
    name: 'PC Gamer Draco PINK Edition Core i7 + RTX 4060 White',
    category: 'pc-gamer',
    subCategory: 'PC Custom Theme Pink',
    brand: 'Yuritec Custom Edition',
    price: 3699,
    originalPrice: 3999,
    stock: 5,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 12700F 12 Núcleos / 20 Hilos 4.9GHz Turbo',
      ram: '16GB (2x8GB) DDR4 3600MHz Kingston Fury Beast RGB White',
      storage: '1TB SSD NVMe M.2 PCIe Gen4',
      gpu: 'NVIDIA GeForce RTX 4060 8GB White Edition OC',
      motherboard: 'ASUS Prime B660-PLUS D4 White/Silver',
      powerSupply: '650W 80 Plus Bronze Blanca',
      cooling: 'Enfriamiento Líquido 240mm Rosa/Blanco ARGB Fans',
      warranty: '24 Meses de garantía local directa'
    },
    description: 'Estética visual única en tono rosa pastel con componentes blancos premium, iluminación sincronizada ARGB y excelente flujo de ventilación.',
    featured: true,
    discountPercentage: 7
  },
  {
    id: 'prod-pc-draco-blue-i5',
    name: 'PC Gamer Draco Blue Plus Core i5 12400F + RTX 4060 Ti',
    category: 'pc-gamer',
    subCategory: 'PC Gama Media-Alta Intel',
    brand: 'Yuritec Edition',
    price: 3999,
    originalPrice: 4399,
    stock: 6,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-12400F 6 Núcleos / 12 Hilos 4.4GHz',
      ram: '32GB (2x16GB) DDR4 3200MHz HyperX Fury RGB',
      storage: '1TB SSD NVMe Gen4 Kingston KC3000',
      gpu: 'NVIDIA GeForce RTX 4060 Ti 8GB GDDR6 DLSS 3',
      motherboard: 'Gigabyte B760M Gaming AC WiFi',
      powerSupply: '700W 80 Plus Bronze Evga',
      cooling: 'Cooler Master Hyper 212 Halo Black ARGB',
      warranty: '24 Meses de garantía oficial'
    },
    description: 'Configuración equilibrada para jugadores exigentes que buscan alta tasa de cuadros en monitores 165Hz/240Hz con DLSS 3 Frame Generation.',
    featured: true,
    discountPercentage: 9
  },
  {
    id: 'prod-pc-draco-rgb-entry',
    name: 'PC Gamer Draco RGB Intel Core i7 6th / GTX 1650 4GB (Económica)',
    category: 'pc-gamer',
    subCategory: 'PC Gamer Entrada',
    brand: 'Yuritec Entry Gamer',
    price: 2799,
    originalPrice: 2999,
    stock: 8,
    minStockAlert: 2,
    rating: 4.7,
    reviewsCount: 53,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 6700 4 Núcleos / 8 Hilos hasta 4.0GHz',
      ram: '16GB DDR4 2666MHz Dual Channel',
      storage: '512GB SSD Solid State Drive ultrarrápido',
      gpu: 'NVIDIA GeForce GTX 1650 4GB GDDR6',
      motherboard: 'H110M Pro Edition con HDMI y USB 3.0',
      powerSupply: '500W Certificada con protección contra sobrevoltaje',
      cooling: 'Case Gamer con 4 Ventiladores LED RGB y panel de vidrio templado',
      warranty: '12 Meses de garantía local directa'
    },
    description: 'Excelente para iniciar en el mundo gaming: corre Dota 2, League of Legends, Valorant, CS:GO 2, Roblox, Minecraft y tareas escolares a precio muy accesible.',
    featured: false,
    discountPercentage: 7
  },
  {
    id: 'prod-pc-ryzen-7',
    name: 'PC Gamer Draco Red AMD Ryzen 7 7700X + RTX 4070 Super 12GB',
    category: 'pc-gamer',
    subCategory: 'PC Gama Extrema AMD',
    brand: 'Yuritec Ultra Edition',
    price: 5499,
    originalPrice: 5999,
    stock: 4,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 7 7700X 8 Núcleos / 16 Hilos 5.4GHz Max Boost AM5',
      ram: '32GB (2x16GB) DDR5 6000MHz EXPO Corsair Dominator Platinum',
      storage: '2TB NVMe M.2 Samsung 990 PRO Gen4',
      gpu: 'NVIDIA GeForce RTX 4070 Super 12GB Gigabyte Windforce OC',
      motherboard: 'Gigabyte B650 AORUS ELITE AX AM5',
      powerSupply: '850W 80 Plus Gold Corsair RM850e ATX 3.0',
      cooling: 'Refrigeración Líquida 360mm DeepCool LT720 Triple Fan ARGB',
      warranty: '36 Meses de garantía oficial'
    },
    description: 'Monstruo de potencia para renderizado 3D en Blender/Maya, IA local y juegos en resolución 4K con Ray Tracing y DLSS 3.5.',
    featured: true,
    isNew: true,
    discountPercentage: 8
  },
  {
    id: 'prod-pc-draco-starter-r5',
    name: 'PC Gamer Draco Starter AMD Ryzen 5 5600G 16GB RAM SSD 500GB',
    category: 'pc-gamer',
    subCategory: 'PC Gamer Económica con Gráficos Radeon Vega 7',
    brand: 'Yuritec Edition',
    price: 1899,
    originalPrice: 2099,
    stock: 10,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 48,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 5 5600G 6 Núcleos / 12 Hilos 4.4GHz Boost',
      ram: '16GB (2x8GB) DDR4 3200MHz Dual Channel para máximo rendimiento gráfico',
      storage: '500GB SSD NVMe M.2 PCIe Kingston NV2',
      gpu: 'Gráficos integrados Radeon Vega 7 (hasta 4GB VRAM compartida)',
      motherboard: 'ASUS Prime B450M-A II con soporte para futuros upgrades',
      powerSupply: '550W 80 Plus Bronze',
      cooling: 'Disipador AMD Wraith Stealth + Case con 3 Fans RGB',
      warranty: '24 Meses de garantía local en Yurimaguas'
    },
    description: 'La opción número 1 para presupuestos ajustados. No requiere tarjeta gráfica dedicada para jugar GTA V, Valorant y Fortnite en calidad competitiva.',
    featured: false,
    discountPercentage: 9
  },

  // 2. COMPUTADORAS (Oficina, Trabajo, Educación, Empresas)
  {
    id: 'prod-pc-oficina-pro',
    name: 'Computadora Corporativa Yuritec Office Core i5 12400 16GB SSD 512GB',
    category: 'computadoras',
    subCategory: 'Computadoras de Escritorio',
    brand: 'Yuritec Business',
    price: 1699,
    originalPrice: 1899,
    stock: 18,
    minStockAlert: 4,
    rating: 4.7,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-12400 6 Núcleos con gráficos Intel UHD 730',
      ram: '16GB DDR4 3200MHz Kingston Fury',
      storage: '512GB SSD M.2 NVMe Ultra Rápido',
      motherboard: 'Gigabyte H610M H V2 con puertos HDMI, VGA y USB 3.2',
      powerSupply: '500W Certificada Antiestática',
      warranty: '12 Meses de garantía directa corporativa'
    },
    description: 'Equipo confiable de bajo consumo para oficinas contables, estudios de arquitectura, notarías y teletrabajo multitarea.',
    discountPercentage: 10
  },
  {
    id: 'prod-pc-home-i3',
    name: 'Computadora Yuritec Home & Study Intel Core i3 12100 8GB SSD 256GB',
    category: 'computadoras',
    subCategory: 'Computadoras Hogar y Estudio',
    brand: 'Yuritec Business',
    price: 1299,
    originalPrice: 1450,
    stock: 15,
    minStockAlert: 3,
    rating: 4.6,
    reviewsCount: 27,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i3-12100 4 Núcleos / 8 Hilos 4.3GHz Turbo',
      ram: '8GB DDR4 3200MHz (expandible a 32GB)',
      storage: '256GB SSD M.2 NVMe de encendido en 7 segundos',
      motherboard: 'H610M con salida HDMI para conectar a monitor o TV',
      powerSupply: '450W Silenciosa con protección de corriente',
      warranty: '12 Meses de garantía local en Yuritec'
    },
    description: 'Perfecta para clases virtuales, tareas escolares, Word, Excel, navegación web fluida y trámites de oficina.',
    discountPercentage: 10
  },
  {
    id: 'prod-pc-workstation-r9',
    name: 'Workstation Yuritec Pro AMD Ryzen 9 7900X 64GB DDR5 RTX 4080 16GB',
    category: 'computadoras',
    subCategory: 'Estaciones de Trabajo y Render',
    brand: 'Yuritec Workstation',
    price: 8499,
    originalPrice: 9199,
    stock: 3,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 12,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 9 7900X 12 Núcleos / 24 Hilos 5.6GHz Max',
      ram: '64GB (2x32GB) DDR5 6000MHz Kingston Fury Beast',
      storage: '2TB SSD M.2 NVMe PCIe 4.0 7300MB/s de alta durabilidad',
      gpu: 'NVIDIA GeForce RTX 4080 Super 16GB GDDR6X',
      motherboard: 'ASUS ProArt B650-CREATOR para creadores de contenido',
      powerSupply: '1000W 80 Plus Gold ATX 3.0 Full Modular',
      cooling: 'Refrigeración Líquida 360mm de triple ventilador',
      warranty: '36 Meses de garantía profesional'
    },
    description: 'Diseñada específicamente para ingenieros civiles, arquitectos, edición audiovisual en 8K, modelado CAD, Revit, Lumion y machine learning.',
    discountPercentage: 8
  },
  {
    id: 'prod-pc-dell-optiplex',
    name: 'Computadora Corporativa Dell OptiPlex SFF Intel Core i7 16GB SSD 512GB',
    category: 'computadoras',
    subCategory: 'Computadoras Compactas Small Form Factor',
    brand: 'Dell',
    price: 2350,
    originalPrice: 2590,
    stock: 7,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 18,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7-12700 vPro 12 Núcleos hasta 4.9GHz',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SSD NVMe Class 35',
      motherboard: 'Dell Custom Business Q670 Chipset con TPM 2.0',
      powerSupply: 'Fuente 80 Plus Platinum 92% Eficiencia',
      warranty: '24 Meses Dell ProSupport con visita técnica'
    },
    description: 'Chasis ultra compacto ideal para ahorrar espacio en escritorios de agencias, instituciones y clínicas.',
    discountPercentage: 9
  },

  // 3. PUNTO DE VENTA (Sistemas POS para negocios en Yurimaguas y Loreto)
  {
    id: 'prod-pos-terminal-touch',
    name: 'Sistema Punto De Venta Táctil POS Pro 15.6" + Impresora Térmica 80mm',
    category: 'punto-de-venta',
    subCategory: 'Sistemas POS Comerciales',
    brand: 'Yuritec POS',
    price: 2199,
    originalPrice: 2499,
    stock: 14,
    minStockAlert: 3,
    rating: 4.9,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Celeron J4125 Quad Core 2.7GHz Fanless silencioso',
      ram: '8GB DDR4 RAM Industrial',
      storage: '128GB SSD mSATA resistente a calor constante',
      screen: 'Pantalla capacitiva táctil 15.6" True Flat grado comercial IP54',
      warranty: '24 Meses de garantía y reemplazo inmediato'
    },
    description: 'Solución integral para restaurantes, ferreterías, farmacias y minimarkets. Compatible con facturación electrónica SUNAT, gaveta de dinero RJ11 y lectores de código de barras.',
    featured: true,
    discountPercentage: 12
  },
  {
    id: 'prod-pos-lector-barras',
    name: 'Lector de Código de Barras 1D y 2D QR Omnidireccional USB Automático',
    category: 'punto-de-venta',
    subCategory: 'Lectores de Código de Barras',
    brand: 'Yuritec POS',
    price: 249,
    originalPrice: 289,
    stock: 25,
    minStockAlert: 5,
    rating: 4.8,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '12 Meses de garantía directa'
    },
    description: 'Lectura ultra rápida de códigos de barras tradicionales 1D y códigos 2D / QR incluso desde pantallas de celulares de clientes.',
    discountPercentage: 14
  },
  {
    id: 'prod-pos-impresora-termica',
    name: 'Impresora Térmica de Tickets 80mm con Corte Automático USB/LAN/Bluetooth',
    category: 'punto-de-venta',
    subCategory: 'Impresoras de Comprobantes POS',
    brand: 'Xprinter Pro',
    price: 380,
    originalPrice: 430,
    stock: 20,
    minStockAlert: 4,
    rating: 4.9,
    reviewsCount: 61,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '12 Meses de soporte técnico'
    },
    description: 'Velocidad de impresión de 260 mm/s con corte automático garantizado para más de 1.5 millones de cortes. Compatible con Boletas Electrónicas SUNAT.',
    discountPercentage: 12
  },
  {
    id: 'prod-pos-gaveta-dinero',
    name: 'Gaveta de Dinero Metálica Automática Pesada 4 Billetes / 8 Monedas RJ11',
    category: 'punto-de-venta',
    subCategory: 'Cajas Registradoras y Gavetas',
    brand: 'Yuritec POS',
    price: 195,
    originalPrice: 230,
    stock: 18,
    minStockAlert: 3,
    rating: 4.7,
    reviewsCount: 33,
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '12 Meses de garantía'
    },
    description: 'Chasis de acero laminado de alta resistencia con rodamiento de bolas y cerradura de 3 posiciones para máxima seguridad.',
    discountPercentage: 15
  },
  {
    id: 'prod-pos-kit-completo',
    name: 'Combo Completo POS Minimarket: Terminal Táctil + Impresora + Gaveta + Lector',
    category: 'punto-de-venta',
    subCategory: 'Kits Completos POS',
    brand: 'Yuritec POS Suite',
    price: 2890,
    originalPrice: 3200,
    stock: 8,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 44,
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses de garantía integral con instalación presencial en Yurimaguas'
    },
    description: 'Paquete completo listo para facturar. Incluye instalación, configuración de comprobantes SUNAT y capacitación presencial para el personal.',
    featured: true,
    discountPercentage: 10
  },

  // 4. TODO EN UNO (All-in-One)
  {
    id: 'prod-aio-hp-24',
    name: 'Computadora Todo En Uno HP 24-ck0003la 23.8" FHD Core i5 16GB SSD 512GB',
    category: 'todo-en-uno',
    subCategory: 'All-in-One Desktops',
    brand: 'HP',
    price: 2499,
    originalPrice: 2799,
    stock: 8,
    minStockAlert: 2,
    rating: 4.6,
    reviewsCount: 15,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-1235U 10 Núcleos hasta 4.4GHz',
      ram: '16GB DDR4 3200MHz SO-DIMM',
      storage: '512GB SSD NVMe M.2',
      screen: '23.8 pulgadas Full HD (1920x1080) IPS Antirreflejo con microbordes',
      warranty: '12 Meses de soporte técnico HP'
    },
    description: 'Elegante diseño minimalista sin cables estorbosos. Incluye cámara retráctil de privacidad, micrófono dual y kit de teclado y mouse inalámbricos.',
    discountPercentage: 11
  },
  {
    id: 'prod-aio-lenovo-3',
    name: 'Computadora Todo En Uno Lenovo IdeaCentre AIO 3 23.8" FHD Ryzen 5 16GB',
    category: 'todo-en-uno',
    subCategory: 'All-in-One Desktops',
    brand: 'Lenovo',
    price: 2299,
    originalPrice: 2550,
    stock: 9,
    minStockAlert: 2,
    rating: 4.7,
    reviewsCount: 21,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 5 7530U 6 Núcleos / 12 Hilos 4.5GHz',
      ram: '16GB DDR4 3200MHz Dual Channel',
      storage: '512GB SSD M.2 NVMe PCIe 4.0',
      screen: '23.8 pulgadas IPS FHD 250 nits con bisel ultradelgado',
      warranty: '12 Meses de garantía oficial Lenovo'
    },
    description: 'Ideal para recepciones de hoteles, cajas de cobro, despachos contables y uso residencial elegante con soporte para teléfono integrado.',
    discountPercentage: 10
  },
  {
    id: 'prod-aio-dell-touch',
    name: 'Computadora Todo En Uno Dell Inspiron 24 5420 Touch 23.8" Core i7 16GB 1TB',
    category: 'todo-en-uno',
    subCategory: 'All-in-One Touchscreen',
    brand: 'Dell',
    price: 3199,
    originalPrice: 3550,
    stock: 5,
    minStockAlert: 1,
    rating: 4.9,
    reviewsCount: 16,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7-1355U 10 Núcleos hasta 5.0GHz Turbo',
      ram: '16GB DDR4 3200MHz (expandible a 32GB)',
      storage: '1TB SSD M.2 NVMe PCIe de alto rendimiento',
      screen: '23.8" Pantalla Táctil Multitouch FHD IPS antirreflejo',
      warranty: '24 Meses de garantía Dell con soporte local'
    },
    description: 'Pantalla táctil de máxima precisión con altavoces frontales sintonizados por Waves MaxxAudio Pro.',
    discountPercentage: 10
  },

  // 5. LAPTOPS (Gamer, Oficina y Trabajo en Ruta)
  {
    id: 'prod-lap-rog-zephyrus',
    name: 'Laptop Gamer ASUS ROG Zephyrus G16 (2024) 16" OLED 240Hz Ultra 9 RTX 4070',
    category: 'laptops',
    subCategory: 'Laptops Gamer de Gama Alta',
    brand: 'ASUS ROG',
    price: 6899,
    originalPrice: 7499,
    stock: 5,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core Ultra 9 185H con NPU AI Boost integrada',
      ram: '32GB LPDDR5X 7467MHz Dual Channel',
      storage: '1TB SSD PCIe 4.0 NVMe M.2 Performance',
      gpu: 'NVIDIA GeForce RTX 4070 8GB GDDR6 105W TGP',
      screen: '16.0" 2.5K (2560x1600) OLED ROG Nebula Display 240Hz 0.2ms 100% DCI-P3',
      warranty: '24 Meses de garantía ASUS oficial en Perú'
    },
    description: 'Chasis de aluminio CNC ultrafino con iluminación Slash Lighting personalizable. Teclado retroiluminado RGB por tecla y audio espacial Dolby Atmos.',
    featured: true,
    isNew: true,
    discountPercentage: 8
  },
  {
    id: 'prod-lap-lenovo-legion',
    name: 'Laptop Gamer Lenovo Legion Pro 5 16" WQXGA 165Hz Core i7 RTX 4060',
    category: 'laptops',
    subCategory: 'Laptops Gamer',
    brand: 'Lenovo Legion',
    price: 4799,
    originalPrice: 5199,
    stock: 9,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 45,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7-13700HX 16 Núcleos 5.0GHz Turbo',
      ram: '16GB DDR5 4800MHz (expandible a 64GB)',
      storage: '512GB SSD NVMe Gen4 + Slot libre M.2 disponible',
      gpu: 'NVIDIA GeForce RTX 4060 8GB GDDR6 140W Full Power',
      screen: '16" WQXGA (2560x1600) IPS 165Hz 300nits G-SYNC',
      warranty: '24 Meses de garantía Lenovo Legion Care'
    },
    description: 'Refrigeración Legion Coldfront 5.0 para largas sesiones de juego intensivo sin sobrecalentamiento.',
    featured: false,
    discountPercentage: 7
  },
  {
    id: 'prod-lap-asus-tuf-a15',
    name: 'Laptop Gamer ASUS TUF Gaming A15 15.6" 144Hz AMD Ryzen 7 RTX 4060',
    category: 'laptops',
    subCategory: 'Laptops Gamer Resistentes',
    brand: 'ASUS TUF',
    price: 3999,
    originalPrice: 4350,
    stock: 8,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 37,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 7 7735HS 8 Núcleos / 16 Hilos 4.75GHz',
      ram: '16GB DDR5 4800MHz de alta velocidad',
      storage: '512GB SSD NVMe PCIe 4.0 M.2',
      gpu: 'NVIDIA GeForce RTX 4060 8GB GDDR6 140W con MUX Switch',
      screen: '15.6 pulgadas FHD IPS 144Hz con Adaptive-Sync',
      warranty: '24 Meses de garantía ASUS militar MIL-STD-810H'
    },
    description: 'Certificación militar de durabilidad contra caídas, vibraciones y calor extremo de la selva amazónica.',
    discountPercentage: 8
  },
  {
    id: 'prod-lap-hp-15-i5',
    name: 'Laptop HP 15-fd0005la 15.6" FHD Intel Core i5-1334U 16GB SSD 512GB',
    category: 'laptops',
    subCategory: 'Laptops de Oficina y Universitarias',
    brand: 'HP',
    price: 2150,
    originalPrice: 2390,
    stock: 15,
    minStockAlert: 4,
    rating: 4.7,
    reviewsCount: 49,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-1334U 10 Núcleos hasta 4.6GHz',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SSD NVMe M.2',
      screen: '15.6" Full HD (1920 x 1080) Micro-edge Antirreflejo',
      warranty: '12 Meses de garantía oficial HP Perú'
    },
    description: 'Autonomía de batería de hasta 9 horas con carga rápida HP Fast Charge (50% en 45 minutos). Perfecta para estudiantes y profesionales.',
    discountPercentage: 10
  },
  {
    id: 'prod-lap-lenovo-slim3',
    name: 'Laptop Lenovo IdeaPad Slim 3 15.6" FHD AMD Ryzen 7 7730U 16GB SSD 512GB',
    category: 'laptops',
    subCategory: 'Laptops Livianas y Productividad',
    brand: 'Lenovo',
    price: 2390,
    originalPrice: 2650,
    stock: 12,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 34,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 7 7730U 8 Núcleos / 16 Hilos 4.5GHz',
      ram: '16GB DDR4 3200MHz integrada',
      storage: '512GB SSD NVMe PCIe 4.0',
      screen: '15.6" FHD IPS 300 nits antirreflejo',
      warranty: '12 Meses de soporte Lenovo'
    },
    description: 'Construcción delgada de grado militar con teclado numérico completo en español y obturador físico de privacidad en cámara.',
    discountPercentage: 10
  },

  // 6. MONITORES (Gamer, Oficina y Profesionales)
  {
    id: 'prod-mon-lg-ultragear-27',
    name: 'Monitor Gamer LG UltraGear 27" QHD 180Hz 1ms IPS HDR10',
    category: 'monitores',
    subCategory: 'Monitores Gamer',
    brand: 'LG UltraGear',
    price: 1099,
    originalPrice: 1299,
    stock: 15,
    minStockAlert: 4,
    rating: 4.9,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '27 pulgadas QHD 2K (2560 x 1440) IPS con sRGB 99%',
      warranty: '36 Meses de garantía LG Perú oficial'
    },
    description: 'Tasa de refresco de 180Hz mediante DisplayPort con 1ms MBR y compatibilidad oficial NVIDIA G-Sync y AMD FreeSync.',
    discountPercentage: 15
  },
  {
    id: 'prod-mon-samsung-odyssey',
    name: 'Monitor Curvo Samsung Odyssey G5 32" WQHD 165Hz 1000R',
    category: 'monitores',
    subCategory: 'Monitores Curvos',
    brand: 'Samsung',
    price: 1399,
    originalPrice: 1599,
    stock: 6,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '32 pulgadas Curvatura 1000R inmersiva WQHD 2560x1440',
      warranty: '36 Meses de garantía Samsung'
    },
    description: 'Curvatura que replica el campo de visión del ojo humano para máxima inmersión y menor fatiga visual en largas jornadas.',
    discountPercentage: 13
  },
  {
    id: 'prod-mon-asus-tuf-24',
    name: 'Monitor Gamer ASUS TUF Gaming VG249Q1A 23.8" FHD Fast IPS 165Hz 1ms',
    category: 'monitores',
    subCategory: 'Monitores Gamer Rápidos',
    brand: 'ASUS TUF',
    price: 649,
    originalPrice: 750,
    stock: 20,
    minStockAlert: 5,
    rating: 4.9,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '23.8" Full HD (1920x1080) Fast IPS 165Hz con ELMB y FreeSync Premium',
      warranty: '36 Meses de garantía oficial ASUS'
    },
    description: 'El favorito de los jugadores competitivos de shooter como Valorant y CS:GO. Claridad sin desenfoque de movimiento.',
    discountPercentage: 13
  },
  {
    id: 'prod-mon-dell-24-prof',
    name: 'Monitor Profesional Dell P2422H 24" FHD IPS Ergonómico con Giro y Altura',
    category: 'monitores',
    subCategory: 'Monitores para Trabajo y Diseño',
    brand: 'Dell',
    price: 680,
    originalPrice: 780,
    stock: 14,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 35,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '23.8" IPS FHD con ComfortView Plus (baja emisión de luz azul)',
      warranty: '36 Meses de intercambio avanzado Dell'
    },
    description: 'Base ergonómica que permite subir, bajar, inclinar y girar a vertical 90°. Hub con 4 puertos USB integrados.',
    discountPercentage: 13
  },
  {
    id: 'prod-mon-xiaomi-27',
    name: 'Monitor Xiaomi Mi Desktop 27" IPS Full HD 75Hz Borde Ultradelgado',
    category: 'monitores',
    subCategory: 'Monitores de Oficina y Hogar',
    brand: 'Xiaomi',
    price: 480,
    originalPrice: 540,
    stock: 18,
    minStockAlert: 4,
    rating: 4.7,
    reviewsCount: 54,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '27 pulgadas IPS FHD 1080p con ángulo de visión de 178°',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Diseño ultrafino con biseles casi invisibles en tres lados, perfecto para configuraciones de múltiples pantallas.',
    discountPercentage: 11
  },

  // 7. IMPRESORAS (Multifuncionales tanque continuo y láser)
  {
    id: 'prod-imp-epson-ecotank',
    name: 'Impresora Multifuncional Epson EcoTank L3250 Wi-Fi Tanque Continuo',
    category: 'impresoras',
    subCategory: 'Impresoras Multifuncionales',
    brand: 'Epson',
    price: 749,
    originalPrice: 859,
    stock: 22,
    minStockAlert: 5,
    rating: 4.8,
    reviewsCount: 110,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses registrando en web de Epson'
    },
    description: 'Imprime hasta 4,500 páginas en negro o 7,500 a color con un solo juego de botellas. Conectividad inalámbrica y app Epson Smart Panel.',
    discountPercentage: 13
  },
  {
    id: 'prod-imp-epson-l4260',
    name: 'Impresora Multifuncional Epson EcoTank L4260 Dúplex Automático Wi-Fi',
    category: 'impresoras',
    subCategory: 'Impresoras para Oficinas y Negocios',
    brand: 'Epson',
    price: 980,
    originalPrice: 1099,
    stock: 12,
    minStockAlert: 3,
    rating: 4.9,
    reviewsCount: 68,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses de garantía oficial Epson'
    },
    description: 'Impresión a doble cara automática (dúplex) para ahorrar hasta un 50% en papel. Pantalla LCD a color de 1.44" y Wi-Fi Direct.',
    discountPercentage: 11
  },
  {
    id: 'prod-imp-canon-g3110',
    name: 'Impresora Multifuncional Canon PIXMA G3110 Wi-Fi Sistema Continuo Original',
    category: 'impresoras',
    subCategory: 'Impresoras Sistema Continuo',
    brand: 'Canon',
    price: 620,
    originalPrice: 699,
    stock: 16,
    minStockAlert: 4,
    rating: 4.7,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '12 Meses de garantía oficial Canon'
    },
    description: 'Excelente para fotos con colores vivos sin bordes. Tanques de tinta transparentes integrados en el cuerpo para monitoreo fácil.',
    discountPercentage: 11
  },
  {
    id: 'prod-imp-hp-smarttank580',
    name: 'Impresora Multifuncional HP Smart Tank 580 Tanque Continuo Wi-Fi Bluetooth',
    category: 'impresoras',
    subCategory: 'Impresoras de Inyección Térmica',
    brand: 'HP',
    price: 640,
    originalPrice: 720,
    stock: 15,
    minStockAlert: 3,
    rating: 4.7,
    reviewsCount: 43,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses registrando con HP'
    },
    description: 'Hasta 12,000 páginas en negro o 6,000 en color incluidas en la caja. Sensores automáticos de nivel de tinta.',
    discountPercentage: 11
  },
  {
    id: 'prod-imp-brother-laser',
    name: 'Impresora Láser Monocromática Brother HL-1212W Wi-Fi Compacta de Alta Velocidad',
    category: 'impresoras',
    subCategory: 'Impresoras Láser Blanco y Negro',
    brand: 'Brother',
    price: 490,
    originalPrice: 560,
    stock: 14,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '12 Meses de garantía oficial Brother'
    },
    description: 'Impresión rápida de hasta 21 páginas por minuto con tecnología láser electrofotográfica que no se seca ni se atasca.',
    discountPercentage: 12
  },

  // 8. COMPONENTES (Procesadores, GPUs, Placas, Memorias, Almacenamiento, Fuentes)
  {
    id: 'prod-comp-rtx-4070ti',
    name: 'Tarjeta de Video ASUS TUF Gaming GeForce RTX 4070 Ti SUPER 16GB',
    category: 'componentes',
    subCategory: 'Tarjetas de Video',
    brand: 'ASUS',
    price: 3699,
    originalPrice: 3999,
    stock: 5,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
    specs: {
      gpu: 'RTX 4070 Ti SUPER 16GB GDDR6X 256-bit',
      warranty: '36 Meses de garantía ASUS Perú'
    },
    description: 'Construcción militar TUF con rodamientos dobles de bolas y condensadores grado militar clasificados para 20,000 horas a 105°C.',
    discountPercentage: 8
  },
  {
    id: 'prod-comp-rtx-4060-msi',
    name: 'Tarjeta de Video MSI GeForce RTX 4060 Ventus 2X Black 8GB GDDR6 DLSS 3',
    category: 'componentes',
    subCategory: 'Tarjetas de Video',
    brand: 'MSI',
    price: 1480,
    originalPrice: 1650,
    stock: 11,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 57,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
    specs: {
      gpu: 'NVIDIA RTX 4060 8GB GDDR6 con ventiladores TORX Fan 4.0',
      warranty: '36 Meses de garantía oficial MSI'
    },
    description: 'Diseño compacto de doble ventilador ideal para cualquier chasis. Consumo muy bajo de energía (solo 115W).',
    discountPercentage: 10
  },
  {
    id: 'prod-comp-ryzen-5700x3d',
    name: 'Procesador AMD Ryzen 7 5700X3D 8 Núcleos 4.1GHz 100MB 3D V-Cache AM4',
    category: 'componentes',
    subCategory: 'Procesadores AMD',
    brand: 'AMD',
    price: 980,
    originalPrice: 1120,
    stock: 14,
    minStockAlert: 3,
    rating: 5.0,
    reviewsCount: 68,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: '8 Núcleos / 16 Hilos con 96MB 3D V-Cache + 4MB L2 (100MB Total)',
      warranty: '36 Meses de garantía oficial AMD en caja sellada'
    },
    description: 'El rey del gaming en plataforma AM4. Maximiza los FPS mínimos y elimina tirones en juegos competitivos.',
    discountPercentage: 12
  },
  {
    id: 'prod-comp-intel-14400f',
    name: 'Procesador Intel Core i5-14400F 10 Núcleos / 16 Hilos hasta 4.7GHz LGA1700',
    category: 'componentes',
    subCategory: 'Procesadores Intel',
    brand: 'Intel',
    price: 820,
    originalPrice: 920,
    stock: 16,
    minStockAlert: 4,
    rating: 4.8,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: '6 Performance-cores + 4 Efficient-cores (10 Núcleos totales)',
      warranty: '36 Meses de garantía oficial Intel'
    },
    description: 'Excelente para multitarea, creación de contenido y gaming a altas frecuencias en placas B660 y B760.',
    discountPercentage: 11
  },
  {
    id: 'prod-comp-motherboard-b650',
    name: 'Placa Madre ASUS TUF Gaming B650-PLUS WiFi Socket AM5 DDR5 PCIe 5.0',
    category: 'componentes',
    subCategory: 'Placas Madres',
    brand: 'ASUS TUF',
    price: 890,
    originalPrice: 990,
    stock: 9,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 32,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    specs: {
      motherboard: 'Fases de poder 12+2 DrMOS, Wi-Fi 6, LAN 2.5GbE y disipadores térmicos M.2',
      warranty: '36 Meses de garantía oficial ASUS'
    },
    description: 'Base sólida de alta durabilidad para procesadores AMD Ryzen serie 7000, 8000 y 9000 con memoria DDR5.',
    discountPercentage: 10
  },
  {
    id: 'prod-comp-ram-ddr5-32gb',
    name: 'Memoria RAM Kingston Fury Beast RGB 32GB (2x16GB) DDR5 6000MHz CL36 AMD EXPO',
    category: 'componentes',
    subCategory: 'Memorias RAM',
    brand: 'Kingston Fury',
    price: 540,
    originalPrice: 620,
    stock: 20,
    minStockAlert: 5,
    rating: 4.9,
    reviewsCount: 85,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    specs: {
      ram: 'Kit Dual Channel 32GB 6000MT/s perfil XMP 3.0 y EXPO con disipador negro RGB',
      warranty: 'Garantía de por vida directa con Kingston'
    },
    description: 'Efectos de iluminación RGB sincronizables con tecnología Kingston FURY Infrared Sync patentada.',
    discountPercentage: 13
  },
  {
    id: 'prod-comp-ssd-kc3000-1tb',
    name: 'Disco Sólido SSD M.2 NVMe Kingston KC3000 1TB PCIe 4.0 7000MB/s con Disipador',
    category: 'componentes',
    subCategory: 'Almacenamiento SSD',
    brand: 'Kingston',
    price: 390,
    originalPrice: 450,
    stock: 25,
    minStockAlert: 6,
    rating: 5.0,
    reviewsCount: 115,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      storage: 'Velocidad de lectura secuencial de hasta 7000 MB/s y escritura de 6000 MB/s',
      warranty: '60 Meses (5 Años) de garantía oficial'
    },
    description: 'Compatible con PC de escritorio y con la ranura de expansión de PlayStation 5 (PS5).',
    discountPercentage: 13
  },
  {
    id: 'prod-comp-fuente-corsair-750w',
    name: 'Fuente de Poder Corsair RM750e 750W 80 Plus Gold Modular ATX 3.0 PCIe 5.0',
    category: 'componentes',
    subCategory: 'Fuentes de Poder Certificadas',
    brand: 'Corsair',
    price: 460,
    originalPrice: 520,
    stock: 12,
    minStockAlert: 3,
    rating: 4.9,
    reviewsCount: 47,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    specs: {
      powerSupply: 'Certificación 80 PLUS Gold con condensadores grado 105°C y cable nativo 12VHPWR',
      warranty: '84 Meses (7 Años) de garantía Corsair'
    },
    description: 'Ventilador de 120 mm con rodamiento de rifle y modo Zero RPM para operación 100% silenciosa a cargas medias.',
    discountPercentage: 12
  },

  // 9. ACCESORIOS (Periféricos, Sillas, Combos, Estabilizadores)
  {
    id: 'prod-acc-teclado-logitech',
    name: 'Teclado Mecánico Inalámbrico Logitech G915 LIGHTSPEED RGB GL Táctil',
    category: 'accesorios',
    subCategory: 'Teclados Gamer',
    brand: 'Logitech G',
    price: 789,
    originalPrice: 899,
    stock: 11,
    minStockAlert: 3,
    rating: 4.9,
    reviewsCount: 73,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses de garantía oficial'
    },
    description: 'Switches mecánicos GL de perfil bajo, tecnología inalámbrica LIGHTSPEED de 1 ms profesional y chasis de aleación de aluminio 5052.',
    discountPercentage: 12
  },
  {
    id: 'prod-acc-mouse-superlight',
    name: 'Mouse Gamer Ultraligero Logitech G PRO X SUPERLIGHT 2 32K DPI',
    category: 'accesorios',
    subCategory: 'Mouses Gamer',
    brand: 'Logitech G',
    price: 549,
    originalPrice: 629,
    stock: 14,
    minStockAlert: 3,
    rating: 5.0,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses de garantía Logitech'
    },
    description: 'Peso inferior a 60 gramos, sensor HERO 2 de 32,000 DPI con interruptores óptico-mecánicos LIGHTFORCE.',
    discountPercentage: 13
  },
  {
    id: 'prod-acc-headset-hyperx',
    name: 'Audífonos Gamer Inalámbricos HyperX Cloud III Wireless 120h Batería',
    category: 'accesorios',
    subCategory: 'Audífonos Gamer',
    brand: 'HyperX',
    price: 499,
    originalPrice: 569,
    stock: 17,
    minStockAlert: 4,
    rating: 4.8,
    reviewsCount: 56,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses de garantía HyperX'
    },
    description: 'Hasta 120 horas de autonomía con una sola carga, controladores angulados de 53 mm y micrófono desmontable con filtro antipop.',
    discountPercentage: 12
  },
  {
    id: 'prod-acc-combo-mk270',
    name: 'Combo Teclado y Mouse Inalámbrico Logitech MK270 Batería Larga Duración',
    category: 'accesorios',
    subCategory: 'Combos de Oficina y Hogar',
    brand: 'Logitech',
    price: 110,
    originalPrice: 135,
    stock: 35,
    minStockAlert: 8,
    rating: 4.8,
    reviewsCount: 120,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '36 Meses de garantía Logitech oficial'
    },
    description: 'Conexión inalámbrica de 2.4 GHz de hasta 10 metros sin retrasos. Resistente a derrames accidentales y con 8 teclas de acceso rápido.',
    discountPercentage: 18
  },
  {
    id: 'prod-acc-silla-cougar',
    name: 'Silla Gamer Ergonómica Cougar Armor One Reclinable 180° con Cojines',
    category: 'accesorios',
    subCategory: 'Sillas Gamer y Ergonómicas',
    brand: 'Cougar',
    price: 720,
    originalPrice: 820,
    stock: 8,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '12 Meses de garantía estructural'
    },
    description: 'Estructura de acero completa, cuero de PVC transpirable, reposabrazos 2D y pistón de gas de clase 4 con soporte de hasta 120 kg.',
    discountPercentage: 12
  },
  {
    id: 'prod-acc-estabilizador-forza',
    name: 'Estabilizador de Voltaje Forza FVR-1211USB 1200VA / 600W 8 Tomas + USB',
    category: 'accesorios',
    subCategory: 'Protección Eléctrica para Computadoras',
    brand: 'Forza Power Technologies',
    price: 135,
    originalPrice: 160,
    stock: 40,
    minStockAlert: 10,
    rating: 4.9,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses de garantía con reemplazo'
    },
    description: 'Imprescindible para proteger computadoras contra fluctuaciones de energía comunes en la región. Incluye 2 puertos USB de carga y temporizador de retardo.',
    discountPercentage: 15
  },
  {
    id: 'prod-acc-pad-mouse-xxl',
    name: 'Mousepad Gamer Speed Control XXL 900x400x4mm Bordes Cosidos RGB',
    category: 'accesorios',
    subCategory: 'Mousepads y Alfombrillas',
    brand: 'Yuritec Gamer',
    price: 65,
    originalPrice: 85,
    stock: 50,
    minStockAlert: 10,
    rating: 4.8,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '6 Meses de garantía'
    },
    description: 'Superficie de microfibra de alta densidad impermeable y base de goma natural antideslizante para máximo control y deslizamiento.',
    discountPercentage: 23
  },

  // ==========================================
  // 10. CCTV Y CÁMARAS DE VIDEOVIGILANCIA (NUEVA CATEGORÍA)
  // ==========================================
  {
    id: 'prod-cctv-kit-4-dahua',
    name: 'Kit de 4 Cámaras FHD 1080P – 2TB WD Purple – Dahua WizSense',
    category: 'cctv',
    subCategory: 'Kits de Videovigilancia CCTV',
    brand: 'Dahua',
    price: 1559,
    originalPrice: 1750,
    stock: 10,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'DVR Dahua Pentahíbrido 4CH WizSense IA con detección de personas/vehículos',
      storage: 'Disco Duro 2TB WD Purple Edición Videovigilancia Continua 24/7',
      screen: 'Salidas de video HDMI Full HD 1080P y VGA simultáneas',
      cooling: '4 Cámaras FHD (2 Domo Interior + 2 Tubo Exterior IP67)',
      warranty: '24 Meses de garantía oficial Dahua en Yuritec'
    },
    description: 'Sistema completo de videovigilancia Dahua listo para instalar en comercios, empresas o residencias en Yurimaguas. Incluye grabador DVR de 4 canales con inteligencia artificial WizSense, 4 cámaras FHD 1080P con visión nocturna Smart IR, disco duro WD Purple de 2TB para semanas de grabación continua, fuentes de alimentación y baluns HD.',
    featured: true,
    isNew: true,
    discountPercentage: 11
  },
  {
    id: 'prod-cctv-kit-8-dahua',
    name: 'Kit de 8 Cámaras FHD 1080P – 2TB WD Purple – Dahua WizSense',
    category: 'cctv',
    subCategory: 'Kits de Videovigilancia CCTV',
    brand: 'Dahua',
    price: 1959,
    originalPrice: 2250,
    stock: 8,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 35,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'DVR Dahua Pentahíbrido 8CH WizSense con Detección Humano/Vehículo',
      storage: 'Disco Duro 2TB Western Digital Purple para grabación ininterrumpida',
      screen: 'App Móvil DMSS gratis para ver en vivo desde cualquier celular Android o iPhone',
      cooling: '8 Cámaras FHD 1080P (4 Domos Interiores + 4 Tubos Metálicos Exterior IP67)',
      warranty: '24 Meses de garantía oficial Dahua'
    },
    description: 'Solución integral de seguridad perimetral para almacenes, hoteles, minimarkets y fundos en Alto Amazonas. Visualiza tus cámaras en tiempo real desde cualquier parte del mundo con la aplicación DMSS en tu celular sin mensualidades ni contratos.',
    featured: true,
    discountPercentage: 13
  },
  {
    id: 'prod-cctv-cam-domo-40m',
    name: 'Cámara Domo FHD 1080P - Visión Nocturna 40 Metros',
    category: 'cctv',
    subCategory: 'Cámaras Domo Interior',
    brand: 'Dahua',
    price: 120,
    originalPrice: 140,
    stock: 25,
    minStockAlert: 5,
    rating: 4.8,
    reviewsCount: 28,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor CMOS 2MP Full HD 1080P con filtro IR-Cut',
      cooling: 'Smart IR de alta potencia hasta 40 metros de distancia en total oscuridad',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Cámara tipo domo de largo alcance con tecnología Smart IR de 40 metros, ideal para galpones, pasadizos extensos y áreas comerciales de gran amplitud.',
    discountPercentage: 14
  },
  {
    id: 'prod-cctv-cam-tubo-720p',
    name: 'Cámara Tubo Exterior HD 720P Protección Intemperie IP67',
    category: 'cctv',
    subCategory: 'Cámaras Tubo Exterior',
    brand: 'Dahua',
    price: 103,
    originalPrice: 120,
    stock: 30,
    minStockAlert: 6,
    rating: 4.7,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor HD 720P con tecnología HDCVI',
      cooling: 'Carcasa sellada impermeable IP67 resistente a lluvia intensa y polvo',
      warranty: '12 Meses de garantía'
    },
    description: 'Diseño tubular con brazo articulado multidireccional y sellado hermético IP67 resistente al clima tropical lluvioso de Yurimaguas.',
    discountPercentage: 14
  },
  {
    id: 'prod-cctv-cam-domo-5mp-audio',
    name: 'Cámara Domo 5MP Ultra HD con Audio Incorporado',
    category: 'cctv',
    subCategory: 'Cámaras con Audio Integrado',
    brand: 'Dahua',
    price: 147,
    originalPrice: 170,
    stock: 20,
    minStockAlert: 4,
    rating: 4.9,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor 5 Megapíxeles Ultra HD (2560 x 1920)',
      motherboard: 'Micrófono omnidireccional con filtro de supresión de ruido ambiental',
      cooling: 'Smart IR 30 metros',
      warranty: '12 Meses de garantía'
    },
    description: 'Combina resolución nítida de 5 megapíxeles con audio directo a través del mismo cable coaxial hacia el grabador, sin necesidad de tender cables de micrófono adicionales.',
    discountPercentage: 13
  },
  {
    id: 'prod-cctv-cam-domo-analog-2mp',
    name: 'Cámara Domo Analógica FHD 2MP 4 en 1 Multi-Formato',
    category: 'cctv',
    subCategory: 'Cámaras Domo Económicas',
    brand: 'Dahua',
    price: 60,
    originalPrice: 75,
    stock: 45,
    minStockAlert: 10,
    rating: 4.7,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor 2MP Full HD 1080P con selector 4-en-1 (HDCVI/TVI/AHD/CVBS)',
      cooling: 'Infrarrojo Smart IR 20 metros',
      warranty: '12 Meses de garantía'
    },
    description: 'La opción más accesible y compatible del mercado. Funciona con cualquier grabador antiguo o moderno conmutando su formato en segundos.',
    discountPercentage: 20
  },
  {
    id: 'prod-cctv-cam-domo-cupula-2k',
    name: 'Cámara Domo Cúpula 2K QHD 4MP Alta Resolución',
    category: 'cctv',
    subCategory: 'Cámaras Domo Interior',
    brand: 'Dahua',
    price: 113,
    originalPrice: 135,
    stock: 22,
    minStockAlert: 5,
    rating: 4.8,
    reviewsCount: 23,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor CMOS 4MP 2K QHD de alto rango dinámico (DWDR)',
      cooling: 'Cúpula transparente de policarbonato óptico antirreflejo',
      warranty: '12 Meses de garantía'
    },
    description: 'Resolución 2K para registrar claramente billetes en cajas de cobro, números de serie y detalles finos que una cámara convencional no alcanza.',
    discountPercentage: 16
  },
  {
    id: 'prod-cctv-cam-domo-ext-1080p',
    name: 'Cámara Domo Exterior FHD 1080P Antivandálica IK10',
    category: 'cctv',
    subCategory: 'Cámaras Domo Exterior',
    brand: 'Dahua',
    price: 85,
    originalPrice: 105,
    stock: 28,
    minStockAlert: 6,
    rating: 4.8,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor Full HD 1080P 2MP 30fps',
      cooling: 'Protección antivandálica certificada IK10 contra impactos',
      warranty: '12 Meses de garantía'
    },
    description: 'Estructura antivandálica con tornillos de seguridad para accesos públicos, veredas, colegios y garajes donde se requiera resistencia física.',
    discountPercentage: 19
  },
  {
    id: 'prod-cctv-cam-domo-1080p-std',
    name: 'Cámara Domo FHD 1080P Lente Gran Angular 2.8mm',
    category: 'cctv',
    subCategory: 'Cámaras Domo Interior',
    brand: 'Dahua',
    price: 92,
    originalPrice: 110,
    stock: 35,
    minStockAlert: 8,
    rating: 4.9,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor 2MP Full HD con lente gran angular de 2.8mm (103° apertura)',
      cooling: 'Infrarrojo Smart IR 20 metros',
      warranty: '12 Meses de garantía'
    },
    description: 'Cubre esquinas y salones completos con su ángulo de 103 grados, eliminando puntos ciegos en tiendas y oficinas.',
    discountPercentage: 16
  },
  {
    id: 'prod-cctv-cam-domo-fullcolor-143',
    name: 'Cámara Domo FHD 1080P Full Color (Color las 24 Horas)',
    category: 'cctv',
    subCategory: 'Cámaras Full Color 24/7',
    brand: 'Dahua Full-Color',
    price: 143,
    originalPrice: 165,
    stock: 18,
    minStockAlert: 4,
    rating: 5.0,
    reviewsCount: 44,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor Starlight ultraluminoso con apertura F1.0',
      cooling: 'Iluminación LED cálida suave que no encandila',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'No más imágenes nocturnas en blanco y negro. La tecnología Full Color permite identificar color de prendas, vehículos y facciones a todo color las 24 horas del día.',
    featured: true,
    discountPercentage: 13
  },
  {
    id: 'prod-cctv-cam-domo-metal-129',
    name: 'Cámara Domo FHD 1080P Metálica Reforzada Alta Durabilidad',
    category: 'cctv',
    subCategory: 'Cámaras Domo Metálicas',
    brand: 'Dahua',
    price: 129,
    originalPrice: 150,
    stock: 24,
    minStockAlert: 5,
    rating: 4.8,
    reviewsCount: 27,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor 2MP FHD 1080P con reducción digital de ruido 2D-DNR',
      cooling: 'Carcasa 100% de aleación de aluminio para óptima disipación térmica',
      warranty: '12 Meses de garantía'
    },
    description: 'Chasis metálico diseñado para disipar calor eficientemente y operar sin fallas durante veranos de altas temperaturas en la Amazonía.',
    discountPercentage: 14
  },
  {
    id: 'prod-cctv-cam-domo-varifocal-203',
    name: 'Cámara Domo FHD 1080P Varifocal 2.7mm - 12mm Zoom Manual',
    category: 'cctv',
    subCategory: 'Cámaras Varifocales',
    brand: 'Dahua',
    price: 203,
    originalPrice: 235,
    stock: 12,
    minStockAlert: 3,
    rating: 4.9,
    reviewsCount: 18,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor CMOS 1080P con lente varifocal de 2.7 a 12mm ajustable',
      screen: 'Zoom óptico manual 4.5X para ajustar plano abierto o cerrado',
      cooling: 'Infrarrojo Smart IR 30 metros',
      warranty: '12 Meses de garantía'
    },
    description: 'Permite regular manualmente el ángulo y zoom desde un plano panorámico hasta enfocar específicamente la placa de un vehículo o el mostrador de atención.',
    discountPercentage: 14
  },
  {
    id: 'prod-cctv-cam-domo-audio-98',
    name: 'Cámara Domo FHD 1080P con Micrófono de Audio Incorporado',
    category: 'cctv',
    subCategory: 'Cámaras con Audio Integrado',
    brand: 'Dahua',
    price: 98,
    originalPrice: 115,
    stock: 26,
    minStockAlert: 5,
    rating: 4.8,
    reviewsCount: 33,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor 2MP Full HD con códec de audio coaxial HDCVI',
      motherboard: 'Micrófono integrado de alta sensibilidad',
      warranty: '12 Meses de garantía'
    },
    description: 'Ideal para atención al público, mostradores de farmacias y cajas de pago para registrar tanto video como conversaciones claras.',
    discountPercentage: 15
  },
  {
    id: 'prod-cctv-cam-fullcolor-2mp-151',
    name: 'Cámara Domo Full Color 2MP Visión Nocturna a Color Especial',
    category: 'cctv',
    subCategory: 'Cámaras Full Color 24/7',
    brand: 'Dahua Full-Color',
    price: 151,
    originalPrice: 175,
    stock: 16,
    minStockAlert: 3,
    rating: 4.9,
    reviewsCount: 25,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Sensor Starlight 2MP con lente F1.2 de alta luminosidad',
      cooling: 'Luz cálida inteligente hasta 20 metros',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Lente de cristal óptico de gran apertura que captura la más mínima iluminación ambiental para brindar una imagen vibrante a color en la noche.',
    discountPercentage: 14
  },

  // ==========================================
  // 11. COMPUTADORAS DE ESCRITORIO & INGENIERÍA REFURBISHED (EXCEL YURITEC)
  // ==========================================
  {
    id: 'prod-pc-hp-z230-i5',
    name: 'Computadora HP Z230 Intel Core i5 4th Refurbished Completa',
    category: 'computadoras',
    subCategory: 'PC de Escritorio Refurbished',
    brand: 'HP Workstation',
    price: 1099,
    originalPrice: 1250,
    stock: 14,
    minStockAlert: 3,
    rating: 4.7,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 4570 Quad Core hasta 3.6GHz',
      ram: '16GB RAM Dual Channel',
      storage: '256GB SSD ultrarrápido + 500GB HDD secundario',
      screen: 'Monitor LED 19" HD + Teclado, Mouse, Parlantes y Wi-Fi',
      warranty: '12 Meses de garantía local directa en Yuritec'
    },
    description: 'Computadora completa reacondicionada grado A con pantalla, teclado, mouse, parlantes estéreo y receptor Wi-Fi. Ideal para estudiantes, docentes y oficinas administrativas.',
    discountPercentage: 12
  },
  {
    id: 'prod-pc-hp-z230-i7',
    name: 'Computadora HP Z230 Intel Core i7 Refurbished Completa',
    category: 'computadoras',
    subCategory: 'PC de Escritorio Refurbished',
    brand: 'HP Workstation',
    price: 1199,
    originalPrice: 1350,
    stock: 12,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 4770 4 Núcleos / 8 Hilos 3.9GHz Turbo',
      ram: '16GB RAM Dual Channel',
      storage: '480GB SSD de Estado Sólido',
      screen: 'Monitor LED 20" HD + Kit Periféricos completo',
      warranty: '12 Meses de garantía en Yurimaguas'
    },
    description: 'Procesador Intel Core i7 con 8 hilos de procesamiento para multitarea veloz en hojas de cálculo pesadas, facturación y navegación fluida.',
    discountPercentage: 11
  },
  {
    id: 'prod-pc-i7-3th',
    name: 'Computadora Intel Core i7 3th Refurbished con Monitor y Audio',
    category: 'computadoras',
    subCategory: 'PC de Escritorio Refurbished',
    brand: 'Yuritec Refurbished',
    price: 1299,
    originalPrice: 1450,
    stock: 9,
    minStockAlert: 2,
    rating: 4.7,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 3770 3.9GHz Max Turbo',
      ram: '16GB RAM',
      storage: '512GB SSD de alta velocidad',
      screen: 'Monitor 20" HD + Teclado gamer con luces + Parlantes y Wi-Fi',
      warranty: '12 Meses de garantía'
    },
    description: 'Kit completo de cómputo con case espacioso, teclado retroiluminado, parlantes de escritorio y disco SSD de 512GB.',
    discountPercentage: 10
  },
  {
    id: 'prod-pc-lenovo-m710s',
    name: 'Computadora LENOVO ThinkCentre M710s Intel Core i5 Refurbished',
    category: 'computadoras',
    subCategory: 'PC de Escritorio Refurbished',
    brand: 'Lenovo ThinkCentre',
    price: 1399,
    originalPrice: 1550,
    stock: 11,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 36,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 6th/7th Gen 4 Cores',
      ram: '16GB DDR4 de alta frecuencia',
      storage: '512GB SSD M.2 NVMe',
      screen: 'Monitor 21.5" Full HD IPS + Teclado y Mouse',
      warranty: '12 Meses de garantía'
    },
    description: 'Chasis SFF super silencioso de la línea corporativa Lenovo ThinkCentre con memoria DDR4 y monitor Full HD de 21.5 pulgadas.',
    discountPercentage: 10
  },
  {
    id: 'prod-pc-dell-optiplex-3060',
    name: 'Computadora DELL OPTIPLEX 3060 Refurbished',
    category: 'computadoras',
    subCategory: 'PC de Escritorio Refurbished',
    brand: 'Dell Optiplex',
    price: 1499,
    originalPrice: 1650,
    stock: 15,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 47,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 8th Gen 8500 6 Núcleos 4.1GHz',
      ram: '16GB DDR4 2666MHz',
      storage: '512GB SSD M.2 NVMe PCIe',
      screen: 'Monitor 22" Full HD IPS + Periféricos y Wi-Fi',
      warranty: '12 Meses de garantía corporativa'
    },
    description: 'Dell Optiplex 3060 con procesador Core i5 de 6 núcleos reales, robustez insuperable para trabajo corporativo y atención en mostrador.',
    discountPercentage: 9
  },
  {
    id: 'prod-pc-lenovo-ryzen-5650ge',
    name: 'Computadora Lenovo ThinkCentre Ryzen 5 PRO 5650GE Refurbished',
    category: 'computadoras',
    subCategory: 'PC de Escritorio Refurbished',
    brand: 'Lenovo ThinkCentre',
    price: 1669,
    originalPrice: 1850,
    stock: 8,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 33,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 5 PRO 5650GE 6 Núcleos / 12 Hilos 4.4GHz Boost',
      ram: '16GB DDR4 3200MHz Dual Channel',
      storage: '512GB SSD NVMe Gen3x4',
      screen: 'Monitor 22" FHD + Kit Gamer con luces + Diadema',
      warranty: '12 Meses de garantía'
    },
    description: 'Gráficos integrados Radeon Vega con excelente rendimiento para diseño gráfico en CorelDraw, Photoshop y edición de fotos.',
    discountPercentage: 10
  },
  {
    id: 'prod-pc-dell-3060-i3',
    name: 'Computadora DELL OPTIPLEX 3060 Intel Core i3 7th Refurbished',
    category: 'computadoras',
    subCategory: 'PC de Escritorio Refurbished',
    brand: 'Dell Optiplex',
    price: 1699,
    originalPrice: 1890,
    stock: 7,
    minStockAlert: 2,
    rating: 4.7,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i3 7th/8th Gen con gráficos HD',
      ram: '16GB DDR4',
      storage: '512GB SSD NVMe',
      screen: 'Monitor 24" Full HD Pantalla Gigante + Antena Wi-Fi Dual Band',
      warranty: '12 Meses de garantía'
    },
    description: 'Incluye pantalla gigante de 24 pulgadas Full HD para máxima comodidad visual al trabajar con documentos extensos y sistemas contables.',
    discountPercentage: 10
  },
  {
    id: 'prod-pc-hp-600g6-i5',
    name: 'Computadora HP PRODESK 600 G6 Intel Core i5 8TH Refurbished',
    category: 'computadoras',
    subCategory: 'PC de Escritorio Refurbished',
    brand: 'HP ProDesk',
    price: 1799,
    originalPrice: 1999,
    stock: 9,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 26,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 8500 6 Núcleos hasta 4.10GHz',
      ram: '16GB DDR4',
      storage: '512GB SSD NVMe Gen3',
      screen: 'Monitor 24" IPS FHD Micro-Edge + Combo Periféricos',
      warranty: '12 Meses de garantía'
    },
    description: 'Elegante computador HP ProDesk con chasis moderno y puertos USB-C frontales para transferencia ultrarrápida.',
    discountPercentage: 10
  },
  {
    id: 'prod-pc-hp-600g4-i5',
    name: 'Computadora HP PRODESK 600 G4 Intel Core i5 8TH Refurbished 1TB',
    category: 'computadoras',
    subCategory: 'PC de Escritorio Refurbished',
    brand: 'HP ProDesk',
    price: 1999,
    originalPrice: 2200,
    stock: 6,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 8500 6 Núcleos',
      ram: '16GB DDR4',
      storage: '1TB SSD NVMe de Máxima Capacidad',
      screen: 'Monitor 24" Curvo FHD + Parlantes Estéreo Potentes',
      warranty: '12 Meses de garantía'
    },
    description: 'Equipada con 1 Terabyte de disco SSD para guardar miles de expedientes, bases de datos y archivos multimedia sin preocuparse por el espacio.',
    discountPercentage: 9
  },
  {
    id: 'prod-pc-hp-prodesk-400g9',
    name: 'Computadora HP Prodesk 400 G9 Intel Core i5 12th Refurbished',
    category: 'computadoras',
    subCategory: 'PC de Escritorio Refurbished',
    brand: 'HP ProDesk',
    price: 2399,
    originalPrice: 2650,
    stock: 5,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 17,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 12500 12th Gen 6 Núcleos / 12 Hilos 4.6GHz',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SSD PCIe NVMe Gen4',
      screen: 'Monitor 24" IPS FHD + Kit HP Original',
      warranty: '12 Meses de garantía'
    },
    description: 'Arquitectura Intel de 12va generación con soporte para hasta 3 monitores simultáneos y seguridad por hardware HP Wolf Security.',
    discountPercentage: 9
  },
  {
    id: 'prod-pc-hp-elitedesk-r5',
    name: 'Computadora HP Elitedesk Ryzen 5 Refurbished',
    category: 'computadoras',
    subCategory: 'PC de Ingeniería y Diseño Refurbished',
    brand: 'HP EliteDesk',
    price: 1299,
    originalPrice: 1450,
    stock: 8,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 5 PRO con gráficos Radeon Vega',
      ram: '16GB RAM',
      storage: '256GB SSD',
      screen: 'Monitor 20" HD + Periféricos completos',
      warranty: '12 Meses de garantía'
    },
    description: 'Optimizada para programas de diseño gráfico, ilustración vectorial y trabajo en la suite de Adobe.',
    discountPercentage: 10
  },
  {
    id: 'prod-pc-lenovo-m83-i7',
    name: 'Computadora Lenovo M83 Torre Core i7 4th Refurbished',
    category: 'computadoras',
    subCategory: 'PC de Ingeniería y Diseño Refurbished',
    brand: 'Lenovo ThinkCentre',
    price: 1469,
    originalPrice: 1650,
    stock: 7,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 28,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 4790 3.6GHz hasta 4.0GHz 8 Hilos',
      ram: '16GB RAM',
      storage: '512GB SSD',
      screen: 'Monitor 22" FHD + Diadema gamer + Cámara web HD',
      warranty: '12 Meses de garantía'
    },
    description: 'Chasis en formato torre espacioso con fuente preparada para repotenciación con tarjetas gráficas para AutoCAD y modelado 3D.',
    discountPercentage: 11
  },
  {
    id: 'prod-pc-workstation-p350',
    name: 'Computadora Ingeniería WORKSTATION LENOVO P350 Intel Core i7 11th',
    category: 'computadoras',
    subCategory: 'Workstations de Ingeniería y Diseño',
    brand: 'Lenovo ThinkStation',
    price: 3999,
    originalPrice: 4400,
    stock: 4,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 15,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 11700 8 Núcleos / 16 Hilos 4.9GHz',
      ram: '32GB DDR4 3200MHz (expandible a 128GB)',
      storage: '1TB SSD NVMe M.2 Gen4 Ultra Performance',
      gpu: 'Tarjeta Gráfica Profesional Certificada ISV',
      screen: 'Monitor 24" IPS FHD Calibrado + Teclado y Mouse Lenovo Pro',
      warranty: '24 Meses de garantía oficial'
    },
    description: 'Workstation certificada para software pesado de ingeniería civil y arquitectura: AutoCAD, Civil 3D, Revit, SketchUp, SAP2000 y ETABS.',
    featured: true,
    discountPercentage: 9
  },
  {
    id: 'prod-pc-workstation-p350-extreme',
    name: 'Computadora Workstation Extrema LENOVO P350 Core i7 11th 64GB RAM',
    category: 'computadoras',
    subCategory: 'Workstations de Ingeniería y Diseño',
    brand: 'Lenovo ThinkStation',
    price: 4999,
    originalPrice: 5500,
    stock: 3,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 12,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 11700 8C/16T con refrigeración avanzada',
      ram: '64GB DDR4 3200MHz Dual Channel',
      storage: '2TB SSD NVMe Gen4 + 2TB HDD Backup',
      gpu: 'GPU Profesional de Alto Renderizado',
      screen: 'Monitor 27" 2K QHD Profesional',
      warranty: '24 Meses de garantía oficial'
    },
    description: 'Configuración de máxima potencia para cálculo estructural, render fotorrealista con V-Ray/Lumion y procesamiento masivo de nubes de puntos con drones.',
    featured: true,
    discountPercentage: 9
  },

  // ==========================================
  // 12. CPUS DE OFICINA Y NUEVAS GENERACIONES (EXCEL YURITEC)
  // ==========================================
  {
    id: 'prod-cpu-i5-10400',
    name: 'CPU de Oficina Intel Core i5 10400 10th Gen 16GB SSD 512GB',
    category: 'computadoras',
    subCategory: 'CPU de Oficina',
    brand: 'Yuritec Office',
    price: 1899,
    originalPrice: 2099,
    stock: 12,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 24,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 10400 6 Núcleos / 12 Hilos 4.3GHz',
      ram: '16GB DDR4 2666MHz Kingston',
      storage: '512GB SSD M.2 NVMe',
      motherboard: 'H510M con puertos HDMI y VGA',
      powerSupply: '500W Silenciosa con protección de voltaje',
      warranty: '12 Meses de garantía'
    },
    description: 'Unidad central de procesamiento silenciosa y confiable para negocios, cooperativas y oficinas con necesidad de alta durabilidad.',
    discountPercentage: 10
  },
  {
    id: 'prod-cpu-i5-12400',
    name: 'CPU de Oficina Intel Core i5 12400 12th Gen 16GB SSD 1TB',
    category: 'computadoras',
    subCategory: 'CPU de Oficina',
    brand: 'Yuritec Office',
    price: 2499,
    originalPrice: 2750,
    stock: 10,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 12400 6 Núcleos / 12 Hilos hasta 4.4GHz Alder Lake',
      ram: '16GB DDR4 3200MHz Kingston Fury',
      storage: '1TB SSD M.2 NVMe PCIe 4.0',
      motherboard: 'B660M con soporte para doble pantalla 4K',
      powerSupply: '550W 80 Plus Bronze',
      warranty: '12 Meses de garantía'
    },
    description: 'Gráficos Intel UHD 730 integrados para conectar hasta 3 pantallas a la vez. Excelente rendimiento para hojas de Excel complejas y ERP.',
    discountPercentage: 9
  },
  {
    id: 'prod-cpu-i7-12700',
    name: 'CPU de Oficina Alta Potencia Intel Core i7 12700 12th Gen 32GB RAM',
    category: 'computadoras',
    subCategory: 'CPU de Oficina Alto Desempeño',
    brand: 'Yuritec Pro Office',
    price: 3699,
    originalPrice: 4050,
    stock: 6,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 16,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 12700 12 Núcleos / 20 Hilos 4.9GHz Turbo',
      ram: '32GB DDR4 3200MHz Dual Channel',
      storage: '1TB SSD NVMe Gen4 (5000MB/s de lectura)',
      motherboard: 'ASUS Prime B660M-A WiFi',
      powerSupply: '650W 80 Plus Bronze',
      warranty: '24 Meses de garantía'
    },
    description: 'Máxima capacidad de cálculo para gerencias, notarías y servidores de base de datos local en Yurimaguas.',
    discountPercentage: 9
  },
  {
    id: 'prod-cpu-i7-14700',
    name: 'CPU de Oficina Avanzado Intel Core i7 14700 14th Gen DDR5',
    category: 'computadoras',
    subCategory: 'CPU de Oficina Alto Desempeño',
    brand: 'Yuritec Pro Office',
    price: 3999,
    originalPrice: 4399,
    stock: 5,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 14,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 14700 20 Núcleos / 28 Hilos hasta 5.4GHz',
      ram: '32GB DDR5 5600MHz Kingston Fury Beast',
      storage: '1TB SSD NVMe PCIe 4.0 (7000MB/s)',
      motherboard: 'MSI B760M Gaming Plus WiFi DDR5',
      powerSupply: '750W 80 Plus Gold Certificada',
      cooling: 'Disipador Torre Doble Fan RGB',
      warranty: '24 Meses de garantía'
    },
    description: 'La vanguardia de la tecnología Intel de 14va generación con memoria DDR5 ultrarrápida. Listo para cualquier software moderno sin cuellos de botella.',
    featured: true,
    isNew: true,
    discountPercentage: 9
  },
  {
    id: 'prod-cpu-hp-prodesk-ai-ultra7',
    name: 'HP ProDesk 4 SFF G1i AI Ultra 7 265 Inteligencia Artificial NPU',
    category: 'computadoras',
    subCategory: 'CPU con Inteligencia Artificial',
    brand: 'HP Business AI',
    price: 5999,
    originalPrice: 6500,
    stock: 4,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 11,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core Ultra 7 265 con NPU Intel AI Boost integrada',
      ram: '32GB DDR5 5600MHz de última generación',
      storage: '1TB SSD PCIe 4.0 NVMe Enterprise',
      cooling: 'Sistema de enfriamiento acústico ultra silencioso HP Whisper',
      warranty: '36 Meses de garantía corporativa HP Perú'
    },
    description: 'El primer equipo empresarial con procesador Intel Core Ultra e Inteligencia Artificial NPU por hardware en Yurimaguas. Optimizado para Windows 11 Copilot+, transcripción en tiempo real y seguridad inteligente.',
    featured: true,
    isNew: true,
    discountPercentage: 8
  },

  // ==========================================
  // 13. TODO EN UNO (ALL-IN-ONE) REFURBISHED & NUEVOS (EXCEL YURITEC)
  // ==========================================
  {
    id: 'prod-aio-lenovo-m700',
    name: 'ALL IN ONE Lenovo ThinkCentre M700 19" Core i5 Refurbished',
    category: 'todo-en-uno',
    subCategory: 'Todo en Uno Refurbished',
    brand: 'Lenovo ThinkCentre',
    price: 1199,
    originalPrice: 1350,
    stock: 10,
    minStockAlert: 2,
    rating: 4.7,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '19.5" HD+ Antirreflejo con ángulo ajustable',
      processor: 'Intel Core i5 6th Gen Quad Core',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      warranty: '12 Meses de garantía directa'
    },
    description: 'Computador todo en uno sin cables desordenados en el piso, ideal para recepciones de hoteles y farmacias en Yurimaguas.',
    discountPercentage: 11
  },
  {
    id: 'prod-aio-hp-elitedesk-705',
    name: 'ALL IN ONE HP ELITEDESK 705 G4 22" Ryzen 5 PRO Refurbished',
    category: 'todo-en-uno',
    subCategory: 'Todo en Uno Refurbished',
    brand: 'HP EliteDesk',
    price: 1299,
    originalPrice: 1450,
    stock: 9,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 28,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '21.5" Full HD IPS antirreflejo',
      processor: 'AMD Ryzen 5 PRO 2400G con gráficos Radeon Vega',
      ram: '16GB RAM Dual Channel',
      storage: '512GB SSD de alta velocidad',
      warranty: '12 Meses de garantía'
    },
    description: 'Pantalla Full HD IPS con colores vivos y cámara retráctil de privacidad para reuniones y videollamadas.',
    discountPercentage: 10
  },
  {
    id: 'prod-aio-lenovo-m70a-i3-8',
    name: 'ALL IN ONE Lenovo ThinkCentre M70a 21.5" Intel Core i3 Refurbished',
    category: 'todo-en-uno',
    subCategory: 'Todo en Uno Refurbished',
    brand: 'Lenovo ThinkCentre',
    price: 1499,
    originalPrice: 1650,
    stock: 8,
    minStockAlert: 2,
    rating: 4.7,
    reviewsCount: 18,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '21.5" Full HD Micro-Border',
      processor: 'Intel Core i3 10100 10th Gen 4C/8T 4.3GHz',
      ram: '8GB DDR4',
      storage: '512GB SSD NVMe',
      warranty: '12 Meses de garantía'
    },
    description: 'Bisel ultradelgado y base ergonómica regulable con altavoces Dolby Audio integrados.',
    discountPercentage: 9
  },
  {
    id: 'prod-aio-lenovo-m70a-i3-16',
    name: 'ALL IN ONE Lenovo ThinkCentre M70a Intel Core i3 16GB RAM SSD',
    category: 'todo-en-uno',
    subCategory: 'Todo en Uno Refurbished',
    brand: 'Lenovo ThinkCentre',
    price: 1699,
    originalPrice: 1850,
    stock: 7,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 21,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '21.5" Full HD IPS antirreflejo',
      processor: 'Intel Core i3 10th Gen 4 Núcleos / 8 Hilos',
      ram: '16GB DDR4 para mayor multitarea',
      storage: '512GB SSD NVMe',
      warranty: '12 Meses de garantía'
    },
    description: 'Versión con 16GB de RAM para mantener decenas de pestañas y hojas de cálculo abiertas sin lentitud.',
    discountPercentage: 8
  },
  {
    id: 'prod-aio-lenovo-r5-5650ge',
    name: 'ALL IN ONE Lenovo ThinkCentre Ryzen 5 PRO 5650GE 23.8"',
    category: 'todo-en-uno',
    subCategory: 'Todo en Uno Refurbished',
    brand: 'Lenovo ThinkCentre',
    price: 1799,
    originalPrice: 1980,
    stock: 6,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 25,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '23.8" Full HD IPS Gran Formato',
      processor: 'AMD Ryzen 5 PRO 5650GE 6 Núcleos / 12 Hilos 4.4GHz',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SSD NVMe',
      warranty: '12 Meses de garantía'
    },
    description: 'Pantalla amplia de casi 24 pulgadas con colores nítidos y ángulos de visión de 178 grados.',
    discountPercentage: 9
  },
  {
    id: 'prod-aio-hp-440g9-8gb',
    name: 'ALL IN ONE HP Proone 440 G9 23.8" Intel Core i5 12500 8GB',
    category: 'todo-en-uno',
    subCategory: 'Todo en Uno Empresarial',
    brand: 'HP ProOne',
    price: 2099,
    originalPrice: 2299,
    stock: 8,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '23.8" FHD IPS Micro-Edge con reducción de luz azul',
      processor: 'Intel Core i5 12500 12th Gen 6 Cores 4.6GHz',
      ram: '8GB DDR4 3200MHz',
      storage: '512GB SSD NVMe M.2',
      warranty: '12 Meses de garantía oficial HP'
    },
    description: 'Diseño elegante con webcam retráctil de 5MP con micrófono con reducción de ruido ambiental por IA.',
    discountPercentage: 9
  },
  {
    id: 'prod-aio-hp-440g9-16gb',
    name: 'ALL IN ONE HP Proone 440 G9 Intel Core i5 16GB RAM SSD 512GB',
    category: 'todo-en-uno',
    subCategory: 'Todo en Uno Empresarial',
    brand: 'HP ProOne',
    price: 2299,
    originalPrice: 2499,
    stock: 7,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '23.8" FHD IPS Antirreflejo 250 nits',
      processor: 'Intel Core i5 12500 12th Gen',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SSD NVMe Gen4',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Perfecto para oficinas de contabilidad y jefaturas que requieren velocidad y presencia ejecutiva.',
    discountPercentage: 8
  },
  {
    id: 'prod-aio-hp-440g9-1tb',
    name: 'ALL IN ONE HP Proone 440 G9 Intel Core i5 16GB + 1TB SSD',
    category: 'todo-en-uno',
    subCategory: 'Todo en Uno Empresarial',
    brand: 'HP ProOne',
    price: 2499,
    originalPrice: 2750,
    stock: 5,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 16,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '23.8" FHD IPS Micro-Edge',
      processor: 'Intel Core i5 12th Gen 6 Núcleos / 12 Hilos',
      ram: '16GB DDR4',
      storage: '1TB SSD NVMe de Máxima Capacidad',
      warranty: '12 Meses de garantía oficial HP'
    },
    description: 'Capacidad masiva de 1 Terabyte para almacenamiento de grandes bases de datos y respaldos.',
    featured: true,
    discountPercentage: 9
  },

  // ==========================================
  // 14. LAPTOPS REFURBISHED DE ALTA GAMA (EXCEL YURITEC)
  // ==========================================
  {
    id: 'prod-lap-lenovo-b50',
    name: 'Laptop Lenovo B50-70 15.6" Intel Core i3 4th Refurbished',
    category: 'laptops',
    subCategory: 'Laptops Económicas Refurbished',
    brand: 'Lenovo',
    price: 999,
    originalPrice: 1150,
    stock: 12,
    minStockAlert: 3,
    rating: 4.6,
    reviewsCount: 37,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '15.6" HD con teclado numérico lateral',
      processor: 'Intel Core i3 4th Gen',
      ram: '8GB RAM',
      storage: '256GB SSD',
      warranty: '12 Meses de garantía'
    },
    description: 'Portátil económica para escolares, tareas de Office y navegación a menos de mil soles.',
    discountPercentage: 13
  },
  {
    id: 'prod-lap-dell-7490',
    name: 'Laptop Dell Latitude 7490 14" FHD Intel Core i7-8650U Refurbished',
    category: 'laptops',
    subCategory: 'Laptops Corporativas Refurbished',
    brand: 'Dell Latitude',
    price: 1349,
    originalPrice: 1499,
    stock: 10,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '14" Full HD IPS antirreflejo',
      processor: 'Intel Core i7 8650U hasta 4.2GHz 4C/8T',
      ram: '16GB DDR4',
      storage: '512GB SSD M.2 NVMe',
      warranty: '12 Meses de garantía'
    },
    description: 'Chasis de fibra de carbono ultrarresistente, teclado retroiluminado y excelente autonomía para viajes.',
    discountPercentage: 10
  },
  {
    id: 'prod-lap-lenovo-v14',
    name: 'Laptop Lenovo V14 14" FHD Intel Core i5 1035G1 Refurbished',
    category: 'laptops',
    subCategory: 'Laptops Livianas Refurbished',
    brand: 'Lenovo',
    price: 1529,
    originalPrice: 1690,
    stock: 8,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '14" FHD (1920x1080)',
      processor: 'Intel Core i5 1035G1 10th Gen 4C/8T',
      ram: '16GB DDR4',
      storage: '512GB SSD NVMe',
      warranty: '12 Meses de garantía'
    },
    description: 'Diseño ultradelgado y ligero de solo 1.5 kg con procesador Core i5 de décima generación.',
    discountPercentage: 10
  },
  {
    id: 'prod-lap-thinkpad-t14',
    name: 'Laptop Lenovo ThinkPad T14 14" Ryzen 5 PRO 4650U Refurbished',
    category: 'laptops',
    subCategory: 'Laptops Profesionales Refurbished',
    brand: 'Lenovo ThinkPad',
    price: 1699,
    originalPrice: 1890,
    stock: 7,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 35,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '14" FHD IPS Antirreflejo 300 nits',
      processor: 'AMD Ryzen 5 PRO 4650U 6 Núcleos / 12 Hilos',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SSD NVMe M.2',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'La legendaria línea ThinkPad con certificación militar MIL-STD-810G contra golpes, calor y humedad de la selva.',
    featured: true,
    discountPercentage: 10
  },
  {
    id: 'prod-lap-dell-5520',
    name: 'Laptop Dell Latitude 5520 15.6" FHD Intel Core i5 1145G7 Refurbished',
    category: 'laptops',
    subCategory: 'Laptops Corporativas Refurbished',
    brand: 'Dell Latitude',
    price: 1799,
    originalPrice: 1990,
    stock: 8,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 26,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '15.6" FHD con teclado numérico incorporado',
      processor: 'Intel Core i5 1145G7 11th Gen vPro hasta 4.4GHz',
      ram: '16GB DDR4',
      storage: '512GB SSD PCIe NVMe',
      warranty: '12 Meses de garantía'
    },
    description: 'Teclado numérico completo ideal para contadores y asistentes administrativos con Intel de 11va generación.',
    discountPercentage: 10
  },
  {
    id: 'prod-lap-dell-3410',
    name: 'Laptop Dell Latitude 3410 14" FHD Intel Core i7 10510U Refurbished',
    category: 'laptops',
    subCategory: 'Laptops Corporativas Refurbished',
    brand: 'Dell Latitude',
    price: 1899,
    originalPrice: 2090,
    stock: 6,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 23,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '14" FHD (1920 x 1080)',
      processor: 'Intel Core i7 10510U hasta 4.90GHz 4C/8T',
      ram: '16GB DDR4',
      storage: '512GB SSD NVMe',
      warranty: '12 Meses de garantía'
    },
    description: 'Procesador Core i7 de alta potencia en un chasis liviano y portable con lector de tarjetas microSD.',
    discountPercentage: 9
  },
  {
    id: 'prod-lap-thinkpad-e15',
    name: 'Laptop Lenovo ThinkPad E15 15.6" FHD Intel Core i7 10510U Refurbished',
    category: 'laptops',
    subCategory: 'Laptops Profesionales Refurbished',
    brand: 'Lenovo ThinkPad',
    price: 1999,
    originalPrice: 2200,
    stock: 5,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 28,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '15.6" Full HD IPS con teclado numérico',
      processor: 'Intel Core i7 10510U 10th Gen',
      ram: '16GB DDR4',
      storage: '512GB SSD NVMe',
      warranty: '12 Meses de garantía'
    },
    description: 'Tapa de aluminio anodizado, altavoces estéreo con Dolby Audio y lector de huellas en el botón de encendido.',
    discountPercentage: 9
  },
  {
    id: 'prod-lap-thinkpad-e14',
    name: 'Laptop Lenovo ThinkPad E14 14" FHD Intel Core i7 10510U Refurbished',
    category: 'laptops',
    subCategory: 'Laptops Profesionales Refurbished',
    brand: 'Lenovo ThinkPad',
    price: 2029,
    originalPrice: 2250,
    stock: 6,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '14" Full HD IPS antirreflejo',
      processor: 'Intel Core i7 10th Gen 4C/8T',
      ram: '16GB DDR4',
      storage: '512GB SSD NVMe PCIe',
      warranty: '12 Meses de garantía'
    },
    description: 'Formato compacto de 14 pulgadas con cubierta de aluminio y tecnología de carga rápida Rapid Charge.',
    discountPercentage: 10
  },
  {
    id: 'prod-lap-dell-7310',
    name: 'Laptop Dell Latitude 7310 13.3" FHD Core i7 10610U Ultraligera Refurbished',
    category: 'laptops',
    subCategory: 'Laptops Ejecutivas Ultraligeras',
    brand: 'Dell Latitude',
    price: 2399,
    originalPrice: 2650,
    stock: 5,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '13.3" Full HD IPS 300 nits Antirreflejo',
      processor: 'Intel Core i7 10610U vPro 4 Núcleos / 8 Hilos',
      ram: '16GB RAM LPDDR4',
      storage: '512GB SSD NVMe Gen3',
      warranty: '12 Meses de garantía'
    },
    description: 'Peso pluma de apenas 1.2 kg con cuerpo de magnesio premium para ejecutivos y profesionales con alta movilidad.',
    discountPercentage: 9
  },
  {
    id: 'prod-lap-dell-precision-3551',
    name: 'Laptop Workstation Dell Precision 3551 15.6" Core i7 10th + Quadro',
    category: 'laptops',
    subCategory: 'Workstations Portátiles para CAD',
    brand: 'Dell Precision',
    price: 2669,
    originalPrice: 2950,
    stock: 4,
    minStockAlert: 1,
    rating: 4.9,
    reviewsCount: 15,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '15.6" FHD 100% sRGB',
      processor: 'Intel Core i7 10750H 6 Núcleos / 12 Hilos 5.0GHz',
      ram: '32GB DDR4 de alta velocidad',
      storage: '512GB SSD NVMe PCIe',
      gpu: 'NVIDIA Quadro P620 4GB GDDR5 Dedicada Certificada CAD',
      warranty: '12 Meses de garantía'
    },
    description: 'Workstation móvil con certificación ISV para modelado 3D en AutoCAD, Civil 3D y renderizado arquitectónico portátil.',
    discountPercentage: 10
  },
  {
    id: 'prod-lap-dell-xps-9500',
    name: 'Laptop Dell XPS 15 9500 15.6" FHD+ InfinityEdge Core i7 GTX 1650Ti',
    category: 'laptops',
    subCategory: 'Laptops Premium Creación de Contenido',
    brand: 'Dell XPS',
    price: 2699,
    originalPrice: 2999,
    stock: 4,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 27,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '15.6" 16:10 FHD+ (1920x1200) InfinityEdge 500 nits',
      processor: 'Intel Core i7 10750H 6 Cores hasta 5.0GHz',
      ram: '16GB DDR4 2933MHz',
      storage: '512GB SSD NVMe Gen3x4',
      gpu: 'NVIDIA GeForce GTX 1650 Ti 4GB GDDR6',
      warranty: '12 Meses de garantía'
    },
    description: 'La laptop más aclamada de Dell con biseles casi invisibles de 4 lados, brillo cegador de 500 nits y audio espacial Waves Nx.',
    featured: true,
    discountPercentage: 10
  },
  {
    id: 'prod-lap-dell-precision-5560',
    name: 'Laptop Workstation Dell Precision 5560 15.6" Core i7 11th RTX A2000',
    category: 'laptops',
    subCategory: 'Workstations Portátiles para CAD',
    brand: 'Dell Precision',
    price: 2999,
    originalPrice: 3350,
    stock: 3,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 14,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '15.6" UltraSharp FHD+ PremierColor 500 nits',
      processor: 'Intel Core i7 11800H 8 Núcleos / 16 Hilos 4.6GHz',
      ram: '32GB DDR4 3200MHz',
      storage: '1TB SSD NVMe Gen4 M.2',
      gpu: 'NVIDIA RTX A2000 4GB GDDR6 Ray Tracing',
      warranty: '12 Meses de garantía'
    },
    description: 'Chasis ultrafino en aluminio maquinado con tarjeta gráfica NVIDIA RTX con núcleos RT para renderizado en tiempo real.',
    featured: true,
    discountPercentage: 10
  },
  {
    id: 'prod-lap-dell-precision-7560',
    name: 'Laptop Workstation Dell Precision 7560 15.6" Core i7 11th RTX A3000',
    category: 'laptops',
    subCategory: 'Workstations Portátiles para CAD',
    brand: 'Dell Precision',
    price: 3099,
    originalPrice: 3450,
    stock: 3,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 12,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '15.6" FHD 100% DCI-P3 500 nits',
      processor: 'Intel Core i7 11850H vPro 8C/16T hasta 4.8GHz',
      ram: '32GB DDR4 ECC con corrección de errores',
      storage: '1TB SSD NVMe Gen4',
      gpu: 'NVIDIA RTX A3000 6GB GDDR6 Dedicada',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Poder de cómputo inquebrantable para simulaciones de ingeniería, renderizado 3D pesado y cálculo numérico.',
    discountPercentage: 10
  },
  {
    id: 'prod-lap-thinkpad-p1',
    name: 'Laptop Workstation Lenovo ThinkPad P1 15.6" 4K OLED Core i7 Quadro',
    category: 'laptops',
    subCategory: 'Workstations Portátiles para CAD',
    brand: 'Lenovo ThinkPad',
    price: 3299,
    originalPrice: 3690,
    stock: 3,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 18,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      screen: '15.6" 4K UHD (3840x2160) OLED Táctil HDR500 True Black',
      processor: 'Intel Core i7 10850H vPro 6C/12T 5.1GHz Turbo',
      ram: '32GB DDR4 2933MHz',
      storage: '1TB SSD NVMe PCIe',
      gpu: 'NVIDIA Quadro T2000 Max-Q 4GB',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Impresionante panel 4K OLED con contraste infinito y negros puros para diseñadores exigentes, arquitectos y fotógrafos.',
    featured: true,
    discountPercentage: 11
  },
  {
    id: 'prod-acc-combo-backpack',
    name: 'Combo Mochila Backpack 15.6" Antirrobo Impermeable + Mouse Inalámbrico',
    category: 'accesorios',
    subCategory: 'Mochilas y Maletines',
    brand: 'Yuritec Combo',
    price: 119,
    originalPrice: 145,
    stock: 40,
    minStockAlert: 8,
    rating: 4.9,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '6 Meses de garantía'
    },
    description: 'Mochila acolchada impermeable contra lluvias con puerto de carga USB exterior para celular, compartimiento para laptop hasta 15.6" y mouse ergonómico inalámbrico silencioso 2.4GHz.',
    discountPercentage: 18
  },

  // ==========================================
  // 15. IMPRESORAS Y MULTIFUNCIONALES (EXCEL YURITEC)
  // ==========================================
  {
    id: 'prod-imp-hp-smarttank-580',
    name: 'Impresora Multifuncional HP Smart Tank 580 Wi-Fi Tanque de Tinta',
    category: 'impresoras',
    subCategory: 'Impresoras a Tanque de Tinta',
    brand: 'HP Smart Tank',
    price: 719,
    originalPrice: 799,
    stock: 15,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 46,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '12 Meses de garantía oficial HP Perú'
    },
    description: 'Impresora multifuncional (imprime, copia, escanea) con Wi-Fi autorreparable y botones inteligentes. Incluye botellas de tinta para imprimir hasta 12,000 páginas en negro o 6,000 a color.',
    featured: true,
    discountPercentage: 10
  },
  {
    id: 'prod-imp-epson-l3310',
    name: 'Impresora Multifuncional Epson EcoTank L3310 Sistema Continuo Original',
    category: 'impresoras',
    subCategory: 'Impresoras a Tanque de Tinta',
    brand: 'Epson EcoTank',
    price: 799,
    originalPrice: 879,
    stock: 14,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 54,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses con registro en línea Epson'
    },
    description: 'Tecnología Heat-Free de Epson sin calor que no requiere calentamiento, garantizando máxima durabilidad del cabezal de impresión y costo por página ultrabajo.',
    discountPercentage: 9
  },
  {
    id: 'prod-imp-epson-l3350',
    name: 'Impresora Multifuncional Epson EcoTank L3350 Wi-Fi Smart Panel',
    category: 'impresoras',
    subCategory: 'Impresoras Wi-Fi Tanque Continuo',
    brand: 'Epson EcoTank',
    price: 869,
    originalPrice: 949,
    stock: 12,
    minStockAlert: 3,
    rating: 4.9,
    reviewsCount: 49,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses de garantía oficial Epson'
    },
    description: 'Conectividad inalámbrica total Wi-Fi y Wi-Fi Direct. Imprime y escanea directamente desde teléfonos celulares con la app Epson Smart Panel.',
    discountPercentage: 8
  },
  {
    id: 'prod-imp-hp-smarttank-720',
    name: 'Impresora Multifuncional HP Smart Tank 720 Dúplex Automático Wi-Fi',
    category: 'impresoras',
    subCategory: 'Impresoras Dúplex Oficina',
    brand: 'HP Smart Tank',
    price: 949,
    originalPrice: 1049,
    stock: 8,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '12 Meses de garantía oficial HP'
    },
    description: 'Impresión automática a doble cara (dúplex) que ahorra hasta un 50% de hojas de papel. Bandeja de entrada de 250 hojas y Wi-Fi de doble banda.',
    discountPercentage: 10
  },
  {
    id: 'prod-imp-epson-l4360',
    name: 'Impresora Multifuncional Epson EcoTank L4360 Dúplex Wi-Fi Pantalla Color',
    category: 'impresoras',
    subCategory: 'Impresoras Dúplex Oficina',
    brand: 'Epson EcoTank',
    price: 1099,
    originalPrice: 1199,
    stock: 10,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses de garantía oficial Epson'
    },
    description: 'Pantalla LCD a color de 1.44" para fotocopiar e imprimir sin encender la PC, más impresión automática a doble cara.',
    discountPercentage: 8
  },
  {
    id: 'prod-imp-epson-l5590',
    name: 'Impresora Multifuncional Epson EcoTank L5590 ADF Red Ethernet Wi-Fi',
    category: 'impresoras',
    subCategory: 'Impresoras Empresariales ADF',
    brand: 'Epson EcoTank',
    price: 1249,
    originalPrice: 1380,
    stock: 7,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses de garantía oficial Epson'
    },
    description: 'Alimentador automático de documentos (ADF) de 30 páginas para escanear y copiar expedientes enteros automáticamente. Puerto de red Ethernet RJ-45.',
    featured: true,
    discountPercentage: 9
  },
  {
    id: 'prod-imp-epson-l6370',
    name: 'Impresora Multifuncional Epson EcoTank L6370 Dúplex Red Ethernet Táctil',
    category: 'impresoras',
    subCategory: 'Impresoras Empresariales de Alto Volumen',
    brand: 'Epson EcoTank',
    price: 1699,
    originalPrice: 1850,
    stock: 5,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: '24 Meses de garantía oficial Epson'
    },
    description: 'Cabezal PrecisionCore para velocidad tipo láser, pantalla táctil a color de 2.4", tintas pigmentadas resistentes al agua y al resaltador.',
    featured: true,
    discountPercentage: 8
  },
  {
    id: 'prod-imp-tinta-epson-hp',
    name: 'Botella de Tinta Original Epson 544 / HP GT53 (Negro / Colores)',
    category: 'impresoras',
    subCategory: 'Tintas y Consumibles',
    brand: 'Epson / HP',
    price: 18,
    originalPrice: 25,
    stock: 120,
    minStockAlert: 20,
    rating: 4.9,
    reviewsCount: 185,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    specs: {
      warranty: 'Garantía de originalidad sellada de fábrica'
    },
    description: 'Botellas de tinta original garantizada con sistema EcoFit antiderrames para rellenar tanques sin salpicaduras ni manchas. Colores negro, cian, magenta y amarillo disponibles en tienda.',
    discountPercentage: 28
  },

  // ==========================================
  // 16. CÁMARAS Y CCTV / VIDEOVIGILANCIA & SEGURIDAD (EXCEL & IMÁGENES YURITEC)
  // ==========================================
  {
    id: 'prod-cctv-kit-4-dahua',
    name: 'Kit de 4 Cámaras FHD 1080P Dahua + Grabador DVR Turbo + Disco 2TB',
    category: 'cctv',
    subCategory: 'Kits de Videovigilancia CCTV',
    brand: 'Dahua',
    price: 1559,
    originalPrice: 1625,
    stock: 10,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 34,
    image: '/assets/aistudio/image_70e18179.png',
    gallery: [
      '/assets/aistudio/image_70e18179.png',
      '/assets/aistudio/image_581d48a8.png'
    ],
    specs: {
      channels: 'Grabador DVR 4 Canales Turbo FHD H.265+',
      cameras: '2 Cámaras Tubo Exterior FHD 1080p + 2 Cámaras Domo FHD 1080p',
      storage: 'Disco Duro Western Digital Purple 2TB Vigilancia Continua 24/7',
      accessories: 'Fuentes de alimentación 12V + Baluns HD + Conectores de energía',
      remoteAccess: 'Vigila en tiempo real desde tu celular Android o iPhone sin pagos mensuales',
      warranty: '24 Meses de garantía oficial Dahua'
    },
    description: '🚨 Vigila en tiempo real desde tu celular!! Tu Kit de 4 cámaras FHD Dahua 2TB incluye: Grabador DVR 4 Ch Turbo FHD, 2 Cámaras Tubo Exterior FHD 1080p, 2 Cámaras Domo FHD 1080p, Disco Duro Western Digital Purple 2TB y kit de accesorios (Fuentes de energía + Baluns + Plugs). Configuración lista para visualizar en Yurimaguas.',
    featured: true,
    discountPercentage: 4
  },
  {
    id: 'prod-cctv-kit-8-dahua',
    name: 'Kit de 8 Cámaras FHD 1080P Dahua + Grabador DVR 8Ch + Disco 2TB',
    category: 'cctv',
    subCategory: 'Kits de Videovigilancia CCTV',
    brand: 'Dahua',
    price: 1959,
    originalPrice: 2025,
    stock: 8,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 28,
    image: '/assets/aistudio/image_a0ac5960.png',
    gallery: [
      '/assets/aistudio/image_a0ac5960.png',
      '/assets/aistudio/image_70e18179.png'
    ],
    specs: {
      channels: 'Grabador DVR 8 Canales Turbo Full HD H.265+',
      cameras: '4 Cámaras Tubo Exterior FHD 1080p + 4 Cámaras Domo FHD 1080p',
      storage: 'Disco Duro Western Digital Purple 2TB para grabación ininterrumpida',
      accessories: 'Kit de accesorios completo: Fuentes de energía + Baluns + Plugs',
      remoteAccess: 'Acceso P2P Cloud por código QR en app DMSS para smartphone y PC',
      warranty: '24 Meses de garantía oficial Dahua'
    },
    description: '🚨 Vigila en tiempo real desde tu celular!! Tu Kit de 8 cámaras FHD Dahua 2TB incluye: Grabador DVR 8 Ch Turbo FHD, 4 Cámaras Tubo Exterior FHD 1080p, 4 Cámaras Domo FHD 1080p, Disco Duro Western Digital Purple 2TB y kit de accesorios completos. Ideal para colegios, empresas, ferreterías y almacenes en Yurimaguas.',
    featured: true,
    discountPercentage: 3
  },
  {
    id: 'prod-cctv-domo-dahua-1080p',
    name: 'Cámara Domo FHD 1080P Dahua Visión Nocturna IR 20m',
    category: 'cctv',
    subCategory: 'Cámaras Domo Interior',
    brand: 'Dahua',
    price: 92,
    originalPrice: 110,
    stock: 35,
    minStockAlert: 5,
    rating: 4.8,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      resolution: 'Full HD 1080P (1920x1080)',
      lens: '2.8mm lente gran angular (103° de apertura)',
      nightVision: 'Smart IR hasta 20 metros en oscuridad total',
      interface: 'Salida de video 4 en 1 conmutable (HDCVI/TVI/AHD/CVBS)',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Cámara Domo FHD 1080P Dahua de alta definición para cielo raso o pared en oficinas, tiendas y residencias.',
    discountPercentage: 16
  },
  {
    id: 'prod-cctv-domo-dahua-fullcolor',
    name: 'Cámara Domo FHD 1080P Full Color 24/7 Dahua',
    category: 'cctv',
    subCategory: 'Cámaras Full Color',
    brand: 'Dahua',
    price: 143,
    originalPrice: 165,
    stock: 25,
    minStockAlert: 4,
    rating: 4.9,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      resolution: 'Full HD 1080P con sensor Full Color',
      lens: 'F1.0 de apertura ultra luminosa',
      nightVision: 'Color las 24 horas del día con luz LED cálida de apoyo hasta 20m',
      protection: 'Carcasa resistente para interior o exterior techado',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Cámara Domo Full Color Dahua: capta colores vivos e intensos las 24 horas del día incluso en la noche sin luz ambiente.',
    featured: true,
    discountPercentage: 13
  },
  {
    id: 'prod-cctv-domo-dahua-metalica',
    name: 'Cámara Domo FHD 1080P Metálica Antivandálica Dahua IP67',
    category: 'cctv',
    subCategory: 'Cámaras Antivandálicas Metálicas',
    brand: 'Dahua',
    price: 129,
    originalPrice: 149,
    stock: 20,
    minStockAlert: 3,
    rating: 4.9,
    reviewsCount: 32,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      casing: 'Cuerpo de aleación de aluminio metálico resistente a golpes',
      protection: 'Grado de impermeabilidad IP67 contra lluvias torrenciales',
      resolution: '1080P FHD con Smart IR 30 metros',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Cámara Domo metálica de alta robustez para áreas exteriores, pasillos transitados y locales comerciales.',
    discountPercentage: 13
  },
  {
    id: 'prod-cctv-domo-dahua-varifocal',
    name: 'Cámara Domo FHD 1080P Lente Varifocal 2.8-12mm Dahua',
    category: 'cctv',
    subCategory: 'Cámaras Profesionales Varifocales',
    brand: 'Dahua',
    price: 203,
    originalPrice: 235,
    stock: 14,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      lens: 'Lente varifocal manual graduable de 2.8mm a 12mm con zoom',
      resolution: '1080P Full HD con ajuste focal fino',
      irRange: 'Infrarrojo de alta potencia hasta 30m',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Permite calibrar manualmente el campo de visión para enfocar cajas de cobro, dinero o ingresos estrechos.',
    discountPercentage: 14
  },
  {
    id: 'prod-cctv-domo-hik-audio',
    name: 'Cámara Domo FHD 1080P con Micrófono Incorporado Hikvision',
    category: 'cctv',
    subCategory: 'Cámaras con Audio Integrado',
    brand: 'Hikvision',
    price: 98,
    originalPrice: 115,
    stock: 30,
    minStockAlert: 5,
    rating: 4.9,
    reviewsCount: 47,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      audio: 'Micrófono de alta fidelidad incorporado (audio por cable coaxial)',
      resolution: 'Full HD 1080P TurboHD',
      nightVision: 'EXIR 2.0 hasta 20m de alcance',
      warranty: '12 Meses de garantía oficial Hikvision'
    },
    description: 'Graba imagen y audio nítido sin tender cables de sonido adicionales gracias a la tecnología Audio Coaxial.',
    featured: true,
    discountPercentage: 15
  },
  {
    id: 'prod-cctv-domo-hik-fullcolor',
    name: 'Cámara Domo Full Color 2MP ColorVu Hikvision',
    category: 'cctv',
    subCategory: 'Cámaras Full Color',
    brand: 'Hikvision',
    price: 151,
    originalPrice: 175,
    stock: 22,
    minStockAlert: 4,
    rating: 4.9,
    reviewsCount: 36,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      technology: 'ColorVu con lente F1.0 que capta 4 veces más luz',
      resolution: '2 Megapíxeles Full HD a color de noche',
      light: 'Luz blanca cálida suplementaria hasta 20 metros',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'La tecnología ColorVu de Hikvision garantiza imágenes a color durante todo el día para reconocimiento de vestimenta y vehículos.',
    featured: true,
    discountPercentage: 14
  },
  {
    id: 'prod-cctv-domo-hik-40m',
    name: 'Cámara Domo FHD 1080P Alcance IR 40 Metros Hikvision',
    category: 'cctv',
    subCategory: 'Cámaras Domo Largo Alcance',
    brand: 'Hikvision',
    price: 120,
    originalPrice: 139,
    stock: 18,
    minStockAlert: 3,
    rating: 4.8,
    reviewsCount: 25,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      irRange: 'Infrarrojo de largo alcance EXIR 40 metros',
      protection: 'Carcasa sellada IP66 para climas húmedos',
      resolution: '1080P Full HD',
      warranty: '12 Meses de garantía'
    },
    description: 'Excelente para galpones, almacenes y patios grandes que necesitan visión nocturna extendida hasta 40 metros.',
    discountPercentage: 14
  },
  {
    id: 'prod-cctv-tubo-hik-exterior',
    name: 'Cámara Tubo Exterior HD 720P / 1080P IP67 Hikvision',
    category: 'cctv',
    subCategory: 'Cámaras Tubo Exterior',
    brand: 'Hikvision',
    price: 103,
    originalPrice: 120,
    stock: 26,
    minStockAlert: 4,
    rating: 4.8,
    reviewsCount: 33,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      format: 'Tubo Bullet para fijación en pared o poste exterior',
      protection: 'Grado IP67 a prueba de lluvia torrencial e intemperie',
      irRange: 'Visión nocturna Smart IR 20m',
      warranty: '12 Meses de garantía'
    },
    description: 'Cámara exterior metálica con soporte de 3 ejes orientable para ver calles, ingresos y veredas.',
    discountPercentage: 14
  },
  {
    id: 'prod-cctv-domo-hik-5mp-audio',
    name: 'Cámara Domo 5MP Ultra HD con Micrófono Hikvision',
    category: 'cctv',
    subCategory: 'Cámaras Ultra HD 5MP',
    brand: 'Hikvision',
    price: 147,
    originalPrice: 170,
    stock: 16,
    minStockAlert: 3,
    rating: 5.0,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      resolution: '5 Megapíxeles Ultra HD (2560 x 1944)',
      audio: 'Micrófono integrado para audio digital claro',
      irRange: 'EXIR 20 metros',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Impresionante calidad de imagen 5MP para máxima nitidez en detección de rostros, billetes y placas de vehículos.',
    featured: true,
    discountPercentage: 14
  },
  {
    id: 'prod-cctv-domo-dahua-2mp-analog',
    name: 'Cámara Domo Analógica FHD 2MP Dahua Cooper',
    category: 'cctv',
    subCategory: 'Cámaras Domo Económicas',
    brand: 'Dahua',
    price: 60,
    originalPrice: 75,
    stock: 45,
    minStockAlert: 8,
    rating: 4.7,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      resolution: '1080P Full HD 2 Megapíxeles',
      lens: '2.8mm gran angular',
      irRange: 'Infrarrojo 20 metros',
      warranty: '12 Meses de garantía'
    },
    description: 'La opción más económica y durable para expandir tu sistema de cámaras en Yurimaguas.',
    discountPercentage: 20
  },
  {
    id: 'prod-cctv-domo-dahua-cupula-2k',
    name: 'Cámara Domo Cúpula 2K / 4MP Dahua HDCVI',
    category: 'cctv',
    subCategory: 'Cámaras Domo Alta Resolución',
    brand: 'Dahua',
    price: 113,
    originalPrice: 130,
    stock: 22,
    minStockAlert: 4,
    rating: 4.9,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      resolution: '2K / 4 Megapíxeles HDCVI',
      lens: 'Lente de alta precisión óptica',
      irRange: 'Smart IR 25 metros',
      warranty: '12 Meses de garantía'
    },
    description: 'Resolución intermedia 2K con excelente claridad y compatibilidad con grabadores HDCVI.',
    discountPercentage: 13
  },
  {
    id: 'prod-cctv-domo-hik-exterior',
    name: 'Cámara Domo Exterior Impermeable FHD 1080P Hikvision',
    category: 'cctv',
    subCategory: 'Cámaras Domo Exterior',
    brand: 'Hikvision',
    price: 85,
    originalPrice: 99,
    stock: 30,
    minStockAlert: 5,
    rating: 4.8,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      protection: 'IP66 para exteriores',
      resolution: 'Full HD 1080P',
      irRange: 'Smart IR 20 metros',
      warranty: '12 Meses de garantía'
    },
    description: 'Domo resistente con visera para montaje exterior en fachadas, balcones y terrazas.',
    discountPercentage: 14
  },
  {
    id: 'prod-cctv-ezviz-wifi',
    name: 'Cámara de Seguridad WiFi Exterior EZVIZ Inalámbrica con Audio',
    category: 'cctv',
    subCategory: 'Cámaras WiFi Inteligentes',
    brand: 'EZVIZ',
    price: 179,
    originalPrice: 210,
    stock: 24,
    minStockAlert: 4,
    rating: 4.9,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: {
      connectivity: 'Wi-Fi 2.4GHz + Antenas duales de largo alcance',
      storage: 'Ranura MicroSD hasta 256GB + Nube CloudPlay opcional',
      audio: 'Audio bidireccional (altavoz y micrófono para hablar desde el celular)',
      defense: 'Alarma con sirena integrada y luz estroboscópica disuasiva',
      protection: 'Resistente al agua y polvo IP67',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Cámara inalámbrica inteligente sin cables de video. Se conecta directo a tu red Wi-Fi y transmite al instante a tu celular con detección de personas por Inteligencia Artificial.',
    featured: true,
    discountPercentage: 15
  },
  {
    id: 'prod-cctv-disco-wd-purple-2tb',
    name: 'Disco Duro Interno Western Digital Purple 2TB Vigilancia CCTV 24/7',
    category: 'cctv',
    subCategory: 'Discos para CCTV',
    brand: 'Western Digital',
    price: 269,
    originalPrice: 299,
    stock: 28,
    minStockAlert: 5,
    rating: 5.0,
    reviewsCount: 74,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: '2 Terabytes (2000GB)',
      technology: 'AllFrame 4K para prevenir pérdida de cuadros de video',
      workload: 'Operación ininterrumpida 24/7/365 en grabadores DVR y NVR',
      warranty: '36 Meses de garantía oficial Western Digital'
    },
    description: 'El disco duro estándar en seguridad electrónica. Diseñado para soportar altas temperaturas y escritura ininterrumpida de video de múltiples cámaras simultáneas.',
    featured: true,
    discountPercentage: 10
  },

  // ==========================================
  // 17. CPUS DE OFICINA ADICIONALES (EXCEL YURITEC)
  // ==========================================
  {
    id: 'prod-cpu-i5-3th',
    name: 'CPU Oficina Computadora Intel Core i5 3th Gen',
    category: 'computadoras',
    subCategory: 'CPU de Oficina Económica',
    brand: 'Yuritec Office',
    price: 999,
    originalPrice: 1100,
    stock: 14,
    minStockAlert: 2,
    rating: 4.6,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 3th Gen 4 Cores',
      ram: '8GB RAM',
      storage: '256GB SSD',
      case: 'Case corporativo negro con USB 3.0 frontal',
      warranty: '12 Meses de garantía'
    },
    description: 'CPU económica para trabajos de oficina, facturación, navegación y tareas escolares a menos de mil soles.',
    discountPercentage: 9
  },
  {
    id: 'prod-cpu-i5-6th',
    name: 'CPU Oficina Computadora Intel Core i5 6th Gen',
    category: 'computadoras',
    subCategory: 'CPU de Oficina',
    brand: 'Yuritec Office',
    price: 1199,
    originalPrice: 1320,
    stock: 12,
    minStockAlert: 2,
    rating: 4.7,
    reviewsCount: 34,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 6400 / 6500 4 Cores hasta 3.6GHz',
      ram: '8GB DDR4',
      storage: '256GB SSD ultrarrápido',
      warranty: '12 Meses de garantía'
    },
    description: 'Excelente para contabilidad, hojas de cálculo, navegación y sistemas de ventas.',
    discountPercentage: 9
  },
  {
    id: 'prod-cpu-i7-3th',
    name: 'CPU Oficina Computadora Intel Core i7 3th Gen',
    category: 'computadoras',
    subCategory: 'CPU de Oficina Potente',
    brand: 'Yuritec Office',
    price: 1299,
    originalPrice: 1450,
    stock: 10,
    minStockAlert: 2,
    rating: 4.7,
    reviewsCount: 27,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 3770 4C/8T 3.9GHz Turbo',
      ram: '16GB RAM',
      storage: '512GB SSD',
      warranty: '12 Meses de garantía'
    },
    description: 'Poder de 8 hilos de procesamiento para multitarea fluida con 16GB de memoria.',
    discountPercentage: 10
  },
  {
    id: 'prod-cpu-i3-7th',
    name: 'CPU Oficina Computadora Intel Core i3 7th Gen',
    category: 'computadoras',
    subCategory: 'CPU de Oficina',
    brand: 'Yuritec Office',
    price: 1399,
    originalPrice: 1540,
    stock: 11,
    minStockAlert: 2,
    rating: 4.7,
    reviewsCount: 23,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i3 7100 3.9GHz',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      warranty: '12 Meses de garantía'
    },
    description: 'Equipo confiable de 7ma generación con memoria de 16GB para trabajo continuo.',
    discountPercentage: 9
  },
  {
    id: 'prod-cpu-i7-7th',
    name: 'CPU Oficina Computadora Intel Core i7 7th Gen',
    category: 'computadoras',
    subCategory: 'CPU de Oficina Alto Rendimiento',
    brand: 'Yuritec Office',
    price: 1699,
    originalPrice: 1890,
    stock: 9,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 7700 4C/8T hasta 4.2GHz',
      ram: '16GB DDR4',
      storage: '512GB SSD NVMe',
      warranty: '12 Meses de garantía'
    },
    description: 'Excelente para diseño gráfico básico en CorelDRAW y Photoshop y software administrativo.',
    discountPercentage: 10
  },
  {
    id: 'prod-cpu-i5-12400-rgb',
    name: 'CPU Oficina Computadora Intel Core i5 12400 12th RGB Edition',
    category: 'computadoras',
    subCategory: 'CPU de Oficina Avanzada',
    brand: 'Yuritec Office',
    price: 2699,
    originalPrice: 2950,
    stock: 8,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 28,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 12400 12th Gen 6 Cores / 12 Hilos hasta 4.4GHz',
      ram: '16GB DDR4 3200MHz',
      storage: '1TB SSD NVMe M.2',
      case: 'Case Gamer con ventiladores ARGB y panel lateral transparente',
      warranty: '12 Meses de garantía'
    },
    description: 'Chasis moderno con iluminación LED y procesador Alder Lake de 12va generación.',
    discountPercentage: 9
  },
  {
    id: 'prod-cpu-ultra-5-225',
    name: 'CPU Oficina Computadora Intel Core Ultra 5 225 Nueva Generación',
    category: 'computadoras',
    subCategory: 'CPU con Inteligencia Artificial',
    brand: 'Yuritec NextGen',
    price: 3399,
    originalPrice: 3699,
    stock: 6,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core Ultra 5 225 con NPU integrada para IA',
      ram: '32GB DDR5 5600MHz',
      storage: '1TB SSD NVMe PCIe Gen4',
      motherboard: 'Placa madre Intel Serie B800 / Z800',
      warranty: '24 Meses de garantía oficial'
    },
    description: 'La nueva arquitectura de procesadores Intel Core Ultra con acelerador de Inteligencia Artificial NPU integrado.',
    featured: true,
    discountPercentage: 8
  },
  {
    id: 'prod-cpu-i7-14700-14th',
    name: 'CPU Oficina Computadora Intel Core i7 14700 14th Gen 20 Cores',
    category: 'computadoras',
    subCategory: 'CPU de Máximo Rendimiento',
    brand: 'Yuritec Extreme',
    price: 3999,
    originalPrice: 4390,
    stock: 5,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7 14700 14th Gen (20 núcleos: 8P + 12E / 28 hilos hasta 5.4GHz)',
      ram: '32GB DDR5 6000MHz',
      storage: '1TB SSD NVMe Gen4 (7000MB/s)',
      cooling: 'Disipador Torre de alto flujo térmico',
      warranty: '24 Meses de garantía oficial'
    },
    description: 'Poder descomunal de 20 núcleos de 14va generación para procesamiento de datos, compilación y multitarea pesada.',
    featured: true,
    discountPercentage: 9
  },
  {
    id: 'prod-cpu-ultra-7-265',
    name: 'CPU Oficina Computadora Intel Core Ultra 7 265 Arquitectura Arrow Lake',
    category: 'computadoras',
    subCategory: 'CPU con Inteligencia Artificial',
    brand: 'Yuritec NextGen',
    price: 4699,
    originalPrice: 5100,
    stock: 4,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 15,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core Ultra 7 265 (20 núcleos híbridos con NPU IA)',
      ram: '32GB DDR5 6000MHz Kingston Fury',
      storage: '2TB SSD NVMe Gen4 Ultra Speed',
      powerSupply: '750W 80 Plus Gold Modular',
      warranty: '24 Meses de garantía oficial'
    },
    description: 'La cima del rendimiento en cómputo empresarial y creación de contenidos con procesamiento local de IA.',
    featured: true,
    discountPercentage: 8
  },
  {
    id: 'prod-cpu-hp-prodesk-ultra-7',
    name: 'CPU Oficina HP ProDesk 4 SFF G11 AI Intel Core Ultra 7 265 Corporativa',
    category: 'computadoras',
    subCategory: 'CPU Corporativa HP SFF',
    brand: 'HP ProDesk',
    price: 5999,
    originalPrice: 6500,
    stock: 3,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 10,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core Ultra 7 265 con HP Wolf Security integrado',
      ram: '32GB DDR5 5600MHz',
      storage: '2TB SSD PCIe NVMe M.2',
      chassis: 'Small Form Factor (SFF) ultra compacto para escritorio ejecutivo',
      warranty: '36 Meses de garantía corporativa HP'
    },
    description: 'Equipo de gama institucional HP con protección de seguridad por hardware contra intrusiones y malware.',
    featured: true,
    discountPercentage: 8
  },

  // ==========================================
  // 18. COMPONENTES Y REDES (EXCEL YURITEC)
  // ==========================================
  {
    id: 'prod-comp-seagate-skyhawk-2tb',
    name: 'Disco Duro Interno Seagate SkyHawk 2TB Surveillance',
    category: 'componentes',
    subCategory: 'Discos Internos',
    brand: 'Seagate SkyHawk',
    price: 269,
    originalPrice: 299,
    stock: 22,
    minStockAlert: 4,
    rating: 4.9,
    reviewsCount: 45,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: '2TB (2000GB)',
      workload: 'Firmware ImagePerfect optimizado para videovigilancia',
      warranty: '36 Meses de garantía oficial'
    },
    description: 'Disco interno para sistemas DVR, NVR y PCs con soporte para grabación fluida de hasta 64 cámaras.',
    discountPercentage: 10
  },
  {
    id: 'prod-acc-seagate-basic-1tb',
    name: 'Disco Duro Externo Seagate Basic 1TB USB 3.0 Portátil',
    category: 'accesorios',
    subCategory: 'Discos Externos',
    brand: 'Seagate',
    price: 229,
    originalPrice: 259,
    stock: 30,
    minStockAlert: 5,
    rating: 4.8,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: '1 Terabyte (1000GB)',
      interface: 'USB 3.0 Plug and Play ultrarrápido',
      compatibility: 'Windows y Mac',
      warranty: '24 Meses de garantía oficial'
    },
    description: 'Copia y guarda tus archivos, fotos y respaldos en segundos. Liviano, compacto y fácil de llevar.',
    discountPercentage: 12
  },
  {
    id: 'prod-acc-estabilizador-forza',
    name: 'Estabilizador de Voltaje Forza 1200VA / 600W 8 Tomas AVR',
    category: 'accesorios',
    subCategory: 'Protección Eléctrica',
    brand: 'Forza Power Technologies',
    price: 89,
    originalPrice: 105,
    stock: 40,
    minStockAlert: 8,
    rating: 4.9,
    reviewsCount: 120,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: '1200VA / 600W',
      outlets: '8 Tomas universales protegidas con regulación automática AVR',
      protection: 'Corta picos de voltaje y caídas de tensión frecuentes en Yurimaguas',
      warranty: '24 Meses de garantía con reemplazo'
    },
    description: 'Protección imprescindible para computadoras, televisores y consolas en Yurimaguas contra subidas y bajones de luz.',
    discountPercentage: 15
  },
  {
    id: 'prod-comp-fuente-evga-500w',
    name: 'Fuente de Poder EVGA 500 BV 500W 80 Plus Bronze Certificada',
    category: 'componentes',
    subCategory: 'Fuentes de Poder',
    brand: 'EVGA',
    price: 219,
    originalPrice: 249,
    stock: 18,
    minStockAlert: 3,
    rating: 4.9,
    reviewsCount: 54,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      power: '500 Watts continuos',
      certification: '80 Plus Bronze (85% de eficiencia energética)',
      fan: 'Ventilador ultrasilencioso de 120mm con control térmico',
      warranty: '36 Meses de garantía oficial EVGA'
    },
    description: 'Alimentación estable, silenciosa y segura para tarjetas de video dedicadas y procesadores potentes.',
    discountPercentage: 12
  },
  {
    id: 'prod-comp-switch-tplink-16p',
    name: 'Switch de Red TP-Link 16-Port Gigabit TL-SG1016D Rackmount',
    category: 'componentes',
    subCategory: 'Redes y Conectividad',
    brand: 'TP-Link',
    price: 289,
    originalPrice: 320,
    stock: 15,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    specs: {
      ports: '16 Puertos Gigabit Ethernet RJ45 10/100/1000 Mbps',
      technology: 'Auto MDI/MDIX + Ahorro energético Green Ethernet',
      casing: 'Metálico para escritorio o gabinete de rack',
      warranty: '36 Meses de garantía oficial'
    },
    description: 'Conecta oficinas enteras, cámaras de seguridad y computadoras con máxima velocidad Gigabit sin cuello de botella.',
    discountPercentage: 10
  },
  {
    id: 'prod-comp-router-dlink-ac1200',
    name: 'Router Inalámbrico Wi-Fi Doble Banda AC1200 D-Link / TP-Link',
    category: 'componentes',
    subCategory: 'Redes Inalámbricas',
    brand: 'D-Link',
    price: 139,
    originalPrice: 160,
    stock: 25,
    minStockAlert: 4,
    rating: 4.8,
    reviewsCount: 62,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    specs: {
      speed: 'Doble banda 2.4GHz (300Mbps) + 5GHz (867Mbps)',
      antennas: '4 Antenas externas de alta ganancia 5dBi',
      modes: 'Modo Router, Punto de Acceso (AP) y Repetidor Wi-Fi',
      warranty: '24 Meses de garantía'
    },
    description: 'Señal inalámbrica potente para atravesar paredes y conectar decenas de celulares y computadoras a la vez.',
    discountPercentage: 13
  },
  {
    id: 'prod-acc-proyector-viewsonic',
    name: 'Proyector Multimedia ViewSonic PA503W 3800 Lúmenes HDMI',
    category: 'accesorios',
    subCategory: 'Proyectores',
    brand: 'ViewSonic',
    price: 1799,
    originalPrice: 1990,
    stock: 6,
    minStockAlert: 1,
    rating: 5.0,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    specs: {
      brightness: '3,800 Lúmenes ANSI de alta luminosidad (se ve con luces encendidas)',
      resolution: 'WXGA HD (1280x800) nativo panorámico 16:10',
      lampLife: 'Hasta 15,000 horas en modo SuperEco',
      connectivity: 'HDMI, VGA, Audio In/Out',
      warranty: '36 Meses de garantía oficial ViewSonic'
    },
    description: 'Ideal para iglesias, auditorios, colegios y empresas en Yurimaguas. Proyecta pantallas gigantes de hasta 300 pulgadas con colores vivos.',
    featured: true,
    discountPercentage: 10
  },
  {
    id: 'prod-acc-silla-gamer',
    name: 'Silla Gamer Ergonómica Reclinable 180° con Cojines Lumbar y Cuello',
    category: 'accesorios',
    subCategory: 'Sillas Gamer',
    brand: 'Yuritec Pro Gaming',
    price: 549,
    originalPrice: 650,
    stock: 14,
    minStockAlert: 2,
    rating: 4.9,
    reviewsCount: 56,
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80',
    specs: {
      recline: 'Reclinable desde 90° hasta 180° con bloqueo',
      materials: 'Cuero PU de alta resistencia con espuma inyectada de alta densidad',
      support: 'Pistón de gas Clase 4 para soportar hasta 150 kg',
      warranty: '12 Meses de garantía'
    },
    description: 'Máxima comodidad para largas jornadas de trabajo frente a la computadora o torneos de gaming.',
    featured: true,
    discountPercentage: 16
  },
  {
    id: 'prod-acc-escritorio-gamer',
    name: 'Escritorio Gamer Ergonómico con Luces RGB y Soporte de Audífono',
    category: 'accesorios',
    subCategory: 'Mobiliario Gamer',
    brand: 'Yuritec Studio',
    price: 429,
    originalPrice: 499,
    stock: 10,
    minStockAlert: 2,
    rating: 4.8,
    reviewsCount: 33,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    specs: {
      dimensions: '120cm ancho x 60cm profundidad x 75cm altura',
      structure: 'Patas de acero en forma de Z super firmes y estables',
      features: 'Soporte para bebidas, gancho para audífonos y gestión de cables',
      warranty: '12 Meses de garantía'
    },
    description: 'Estructura sólida con textura de fibra de carbono que no se raya y soporta múltiples monitores.',
    discountPercentage: 14
  },
  {
    id: 'prod-acc-teclado-mouse-genius',
    name: 'Combo Teclado y Mouse Genius USB Kit Oficina Silencioso',
    category: 'accesorios',
    subCategory: 'Teclados y Mouse',
    brand: 'Genius',
    price: 49,
    originalPrice: 60,
    stock: 60,
    minStockAlert: 10,
    rating: 4.7,
    reviewsCount: 140,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    specs: {
      connection: 'USB Plug & Play con cable reforzado de 1.5m',
      keys: 'Teclas grabadas con láser resistentes al desgaste con tecla Ñ en español',
      mouse: 'Mouse óptico ergonómico 1200 DPI',
      warranty: '12 Meses de garantía'
    },
    description: 'El combo de oficina más vendido por su durabilidad y suavidad al escribir.',
    discountPercentage: 18
  },
  {
    id: 'prod-acc-auriculares-philips',
    name: 'Auriculares Philips Bass+ Diadema Acolchada con Micrófono',
    category: 'accesorios',
    subCategory: 'Auriculares y Audio',
    brand: 'Philips',
    price: 79,
    originalPrice: 95,
    stock: 35,
    minStockAlert: 5,
    rating: 4.8,
    reviewsCount: 82,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    specs: {
      drivers: 'Controladores de neodimio de 32mm para graves profundos BASS+',
      mic: 'Micrófono en línea para llamadas en celular y reuniones por Meet/Zoom',
      cable: 'Cable plano antinudos de 1.2 metros con conector jack 3.5mm',
      warranty: '12 Meses de garantía oficial'
    },
    description: 'Almohadillas ultrasuaves que aíslan el ruido exterior para clases virtuales y música.',
    discountPercentage: 17
  },
  {
    id: 'prod-acc-webcam-fhd',
    name: 'Cámara Web Full HD 1080P con Micrófono Estéreo y Tapa de Privacidad',
    category: 'accesorios',
    subCategory: 'Cámaras Web',
    brand: 'Yuritec Vision',
    price: 89,
    originalPrice: 110,
    stock: 28,
    minStockAlert: 5,
    rating: 4.9,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    specs: {
      resolution: 'Full HD 1080P a 30 FPS con corrección automática de luz baja',
      mic: 'Doble micrófono con cancelación de ruido ambiental',
      clip: 'Clip universal ajustable para monitores, laptops o trípode',
      warranty: '12 Meses de garantía'
    },
    description: 'Imagen clara y sonido limpio para videollamadas de trabajo, audiencias judiciales virtuales y clases.',
    discountPercentage: 19
  },
  {
    id: 'prod-acc-antivirus-kaspersky',
    name: 'Antivirus Kaspersky Standard 1 Dispositivo Licencia 1 Año',
    category: 'accesorios',
    subCategory: 'Software y Seguridad',
    brand: 'Kaspersky Lab',
    price: 69,
    originalPrice: 89,
    stock: 50,
    minStockAlert: 10,
    rating: 5.0,
    reviewsCount: 160,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    specs: {
      license: 'Código de activación original para 1 PC durante 12 meses',
      protection: 'Anti-Ransomware, Anti-Phishing, Escudo Web y Protección de Pagos',
      warranty: 'Soporte de activación garantizado'
    },
    description: 'Protege tu computadora de virus de memorias USB, virus de internet y secuestro de información.',
    discountPercentage: 22
  },
  {
    id: 'prod-comp-audio-focusrite',
    name: 'Interfaz de Audio Focusrite Scarlett 2i2 3rd Gen USB para Estudio',
    category: 'componentes',
    subCategory: 'Audio Profesional',
    brand: 'Focusrite',
    price: 789,
    originalPrice: 890,
    stock: 8,
    minStockAlert: 2,
    rating: 5.0,
    reviewsCount: 44,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    specs: {
      inputs: '2 Entradas combinadas XLR/Plug con preamplificadores Scarlett y modo Air',
      resolution: 'Convertidores de 24 bits / 192 kHz de grado audiófilo',
      connectivity: 'USB Type-C con alimentación por bus',
      warranty: '24 Meses de garantía oficial Focusrite'
    },
    description: 'La interfaz de audio más popular para grabación de locuciones, transmisiones en vivo, podcasts e instrumentos musicales.',
    featured: true,
    discountPercentage: 11
  }
];

export const BANK_ACCOUNTS: BankAccountInfo[] = [
  {
    bank: 'BCP (Banco de Crédito del Perú)',
    accountNumber: '193-98234156-0-44',
    cci: '002-193-009823415604-44',
    holder: 'YURITEC COMPUTER SAC'
  },
  {
    bank: 'BBVA Perú',
    accountNumber: '0011-0348-0200891234',
    cci: '011-348-000200891234-82',
    holder: 'YURITEC COMPUTER SAC'
  },
  {
    bank: 'Interbank',
    accountNumber: '200-3001894520',
    cci: '003-200-003001894520-19',
    holder: 'YURITEC COMPUTER SAC'
  },
  {
    bank: 'Banco de la Nación (Detracciones/Nacional)',
    accountNumber: '04-018-934521',
    cci: '018-018-000401893452-11',
    holder: 'YURITEC COMPUTER SAC'
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'YURI-2026-9142',
    date: '2026-10-25 15:30',
    customerName: 'Carlos Mendoza Ramos',
    customerEmail: 'carlos.mendoza@gmail.com',
    customerPhone: '+51 984 123 456',
    customerDniOrRuc: '47891234',
    documentType: 'boleta',
    shippingAddress: 'Av. Javier Prado Este 2450, Dpto 601',
    shippingCity: 'Lima - San Borja',
    shippingMethod: 'lima_express',
    paymentMethod: 'yape-plin',
    paymentDetails: {
      referenceNumber: 'YAPE-OP-892341',
      bankName: 'Yape BCP'
    },
    items: [
      {
        productId: 'prod-pc-draco-i5',
        productName: 'PC Gamer Draco Green Core i5 12400F + RTX 3060 12GB',
        price: 2999,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80'
      },
      {
        productId: 'prod-acc-mouse-superlight',
        productName: 'Mouse Gamer Ultraligero Logitech G PRO X SUPERLIGHT 2',
        price: 549,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
      }
    ],
    subtotal: 3548,
    shippingCost: 0,
    discount: 50,
    total: 3498,
    status: 'en_preparacion',
    trackingNumber: 'SHALOM-EXP-48912',
    estimatedDelivery: '28 Oct 2026'
  },
  {
    id: 'YURI-2026-8819',
    date: '2026-10-22 11:15',
    customerName: 'Inversiones Tecnológicas del Perú SAC',
    customerEmail: 'compras@inverstec.pe',
    customerPhone: '+51 991 882 334',
    customerDniOrRuc: '20608912345',
    companyName: 'Inversiones Tecnológicas del Perú SAC',
    documentType: 'factura',
    shippingAddress: 'Calle Las Begonias 441 Of. 802',
    shippingCity: 'Lima - San Isidro',
    shippingMethod: 'lima_express',
    paymentMethod: 'transfer',
    paymentDetails: {
      bankName: 'BCP',
      referenceNumber: 'TRANSF-BCP-99214'
    },
    items: [
      {
        productId: 'prod-pos-terminal-touch',
        productName: 'Sistema Punto De Venta Táctil POS Pro 15.6" + Impresora Térmica',
        price: 2199,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80'
      }
    ],
    subtotal: 4398,
    shippingCost: 0,
    discount: 100,
    total: 4298,
    status: 'entregado',
    trackingNumber: 'DELIV-YURI-089',
    estimatedDelivery: '23 Oct 2026'
  }
];

export const INITIAL_TICKETS: SupportTicket[] = [
  {
    id: 'TICKET-4091',
    userId: 'user-carlos-1',
    userName: 'Carlos Mendoza Ramos',
    userEmail: 'carlos.mendoza@gmail.com',
    userPhone: '+51 984 123 456',
    orderId: 'YURI-2026-9142',
    subject: 'Asistencia con actualización de drivers de tarjeta gráfica RTX 3060',
    category: 'drivers',
    priority: 'media',
    status: 'en_revision',
    createdAt: '2026-10-26 10:20',
    updatedAt: '2026-10-26 14:10',
    messages: [
      {
        id: 'msg-1',
        sender: 'user',
        senderName: 'Carlos Mendoza Ramos',
        message: 'Buenas tardes equipo de Yuritec, acabo de recibir mi PC Gamer Draco y quisiera saber si los controladores NVIDIA ya vienen instalados con la última versión de GeForce Experience.',
        timestamp: '2026-10-26 10:20'
      },
      {
        id: 'msg-2',
        sender: 'support',
        senderName: 'Ing. Rodrigo Paz - Soporte Yuritec',
        message: '¡Hola Carlos! Sí, todas nuestras máquinas se entregan con Windows 11 activado y los controladores GeForce Game Ready más recientes testeados en nuestro banco de pruebas. Puedes abrir la aplicación GeForce Experience en tu escritorio para verificar actualizaciones automáticas.',
        timestamp: '2026-10-26 14:10'
      }
    ]
  }
];

export const BUSINESS_INFO = {
  name: 'YURITEC COMPUTER SAC',
  ruc: '10434869230',
  address: 'Calle Humbolt c/ Claveles - Barrio Las Flores - Yurimaguas, Alto Amazonas, Loreto - Perú',
  shortAddress: 'Calle Humbolt c/ Claveles, Barrio Las Flores, Yurimaguas',
  city: 'Yurimaguas',
  province: 'Alto Amazonas',
  department: 'Loreto',
  country: 'Perú',
  schedule: 'Lunes a Sábado: 8:00 am - 7:00 pm | Domingo: 9:00 am - 1:00 pm',
  email: 'ventas@yuritec.pe',
  supportEmail: 'soporte@yuritec.pe'
};

export const SALES_ADVISORS: SalesAdvisor[] = [
  {
    id: 'advisor-1',
    name: 'Asesor de Ventas 1',
    phone: '920 159 765',
    phoneRaw: '51920159765',
    displayPhone: '+51 920 159 765',
    role: 'Ventas de Computadoras, Laptops y Accesorios'
  },
  {
    id: 'advisor-2',
    name: 'Asesor de Ventas 2',
    phone: '907 373 993',
    phoneRaw: '51907373993',
    displayPhone: '+51 907 373 993',
    role: 'Soporte a Domicilio, Hosting, Dominios y Desarrollo Web'
  }
];

export const DEFAULT_USER: UserProfile = {
  id: 'user-demo-1',
  name: 'Jairo Celis',
  email: 'jairocelis2014@gmail.com',
  phone: '+51 920 159 765',
  dni: '48920154',
  address: 'Calle Humbolt c/ Claveles - Barrio Las Flores',
  city: 'Yurimaguas, Loreto',
  isAdmin: false
};

// Paquetes de Hosting estructurados según almacenamiento (Entre S/ 100 a S/ 350 anual)
export const HOSTING_PLANS: HostingPlan[] = [
  {
    id: 'host-emprendedor-10gb',
    name: 'Plan Emprendedor',
    storageGb: 10,
    storageDisplay: '10 GB SSD NVMe',
    storage: '10 GB NVMe',
    priceAnnual: 100,
    badge: 'ECONÓMICO',
    popular: false,
    isPopular: false,
    idealFor: 'Microempresas, landing pages y profesionales independientes que inician.',
    sitesCount: '1 Sitio Web',
    bandwidth: 'Tráfico No Medido',
    emailsCount: '10 Correos Corporativos',
    sslIncluded: true,
    cPanelIncluded: true,
    description: 'Perfecto para microempresas, profesionales independientes y landing pages que inician su presencia online.',
    features: [
      '10 GB Almacenamiento SSD NVMe Ultra Rápido',
      '1 Dominio alojado',
      '10 Cuentas de Correo Corporativo (@tuempresa.com)',
      'Certificado SSL Let\'s Encrypt Gratis de por vida',
      'Panel de control cPanel en español',
      'Base de datos MySQL / MariaDB SSD',
      'Copias de seguridad semanales automáticas',
      'Soporte técnico directo vía WhatsApp'
    ]
  },
  {
    id: 'host-profesional-25gb',
    name: 'Plan Profesional',
    storageGb: 25,
    storageDisplay: '25 GB SSD NVMe',
    storage: '25 GB NVMe',
    priceAnnual: 160,
    badge: 'POPULAR',
    popular: true,
    isPopular: true,
    idealFor: 'Negocios locales, pymes y estudios profesionales que requieren más correos.',
    sitesCount: '3 Sitios Web',
    bandwidth: 'Tráfico No Medido',
    emailsCount: '25 Correos Corporativos',
    sslIncluded: true,
    cPanelIncluded: true,
    description: 'Excelente para negocios locales, pymes y estudios profesionales que requieren más correos y páginas web.',
    features: [
      '25 GB Almacenamiento SSD NVMe de Alta Velocidad',
      'Hasta 3 Sitios Web independientes',
      '25 Cuentas de Correo Corporativo profesional',
      'Certificados SSL Gratis para cada dominio',
      'Servidor LiteSpeed Web Server + LSCache',
      'Bases de datos ilimitadas',
      'Subdominios y cuentas FTP ilimitadas',
      'Protección Anti-Spam y Firewall Imunify360'
    ]
  },
  {
    id: 'host-negocio-50gb',
    name: 'Plan Negocio Pyme',
    storageGb: 50,
    storageDisplay: '50 GB SSD NVMe',
    storage: '50 GB NVMe',
    priceAnnual: 220,
    badge: 'RECOMENDADO',
    popular: true,
    isPopular: true,
    idealFor: 'Tiendas virtuales, catálogos extensos y empresas en constante crecimiento.',
    sitesCount: '6 Sitios Web',
    bandwidth: 'Tráfico Ilimitado',
    emailsCount: '50 Correos Corporativos',
    sslIncluded: true,
    cPanelIncluded: true,
    description: 'Capacidad robusta para tiendas virtuales, catálogos extensos y empresas en constante crecimiento.',
    features: [
      '50 GB Almacenamiento NVMe Enterprise',
      'Hasta 6 Dominios / Sitios Web',
      '50 Cuentas de Correo Corporativo',
      'Certificados SSL Wildcard incluidos',
      'Memoria RAM dedicada Cloud (2GB RAM)',
      'Copias de seguridad diarias automatizadas',
      'Soporte para Node.js, Python y PHP 8.x',
      'Migración gratuita desde otro proveedor'
    ]
  },
  {
    id: 'host-corporativo-80gb',
    name: 'Plan Corporativo',
    storageGb: 80,
    storageDisplay: '80 GB SSD NVMe',
    storage: '80 GB NVMe',
    priceAnnual: 290,
    badge: 'ALTO RENDIMIENTO',
    popular: false,
    isPopular: false,
    idealFor: 'Empresas comerciales con alto flujo de visitas y tráfico masivo.',
    sitesCount: '12 Sitios Web',
    bandwidth: 'Tráfico Ilimitado',
    emailsCount: 'Correos Ilimitados',
    sslIncluded: true,
    cPanelIncluded: true,
    description: 'Para empresas comerciales e instituciones con alto flujo de visitas, bases de datos complejas y tráfico masivo.',
    features: [
      '80 GB Almacenamiento NVMe Ultra Rendimiento',
      'Hasta 12 Sitios Web alojados',
      'Cuentas de Correo Corporativo Ilimitadas',
      'Certificados SSL Premium Gratis',
      '3 GB RAM dedicada + 2 vCPU Cores',
      'Redis Object Cache & Memcached',
      'Backups diarios con restauración a 1 clic',
      'Soporte prioritario con técnico asignado'
    ]
  },
  {
    id: 'host-cloud-turbo-150gb',
    name: 'Plan Cloud Turbo Empresarial',
    storageGb: 150,
    storageDisplay: '150 GB NVMe (Máximo)',
    storage: '150 GB NVMe',
    priceAnnual: 350,
    badge: 'POTENCIA MÁXIMA',
    popular: false,
    isPopular: false,
    idealFor: 'Máxima potencia en almacenamiento y recursos Cloud para e-commerce.',
    sitesCount: 'Sitios Ilimitados',
    bandwidth: 'Tráfico Ilimitado No Medido',
    emailsCount: 'Correos Ilimitados',
    sslIncluded: true,
    cPanelIncluded: true,
    description: 'La máxima potencia en almacenamiento y recursos en la nube. Diseñado para plataformas e-commerce y sistemas web.',
    features: [
      '150 GB Almacenamiento NVMe de Máxima Capacidad',
      'Sitios Web Ilimitados',
      'Correos y Cuentas de Correo Ilimitadas',
      '4 GB RAM Cloud + 4 vCPU Cores dedicados',
      'IP Dedicada Exclusiva incluida',
      'Aceleración Cloudflare Enterprise CDN',
      'Auditoría y escaneo de malware en tiempo real',
      'Atención VIP 24/7 por llamada y WhatsApp'
    ]
  }
];

// Precios de Dominios (S/ 60 soles anual)
export const DOMAIN_PRICING: DomainPricing[] = [
  { tld: '.com', extension: '.com', priceAnnual: 60, popular: true, description: 'La extensión global más reconocida en todo el mundo' },
  { tld: '.pe', extension: '.pe', priceAnnual: 60, popular: true, description: 'Extensión oficial del Perú, ideal para identidad nacional' },
  { tld: '.com.pe', extension: '.com.pe', priceAnnual: 60, popular: true, description: 'Especial para empresas, comercios y marcas en el Perú' },
  { tld: '.net', extension: '.net', priceAnnual: 60, description: 'Excelente para proyectos tecnológicos y de conectividad' },
  { tld: '.org', extension: '.org', priceAnnual: 60, description: 'Ideal para organizaciones, fundaciones y asociaciones' },
  { tld: '.store', extension: '.store', priceAnnual: 60, description: 'Directo y memorable para tiendas virtuales y catálogos' }
];

// Servicios de Desarrollo de Sistemas Webs y Apps
export const WEB_DEV_SERVICES: WebDevService[] = [
  {
    id: 'landing-pages',
    category: 'landing_page',
    title: 'Landing Page de Alta Conversión',
    subtitle: 'Página de aterrizaje orientada 100% a captar clientes y cerrar ventas',
    badge: 'RÁPIDA ENTREGA',
    priceRange: 'Desde S/ 380',
    priceStarting: 'Desde S/ 380',
    deliveryTime: '3 a 5 días hábiles',
    description: 'Diseñada con copywriting persuasivo, llamadas a la acción directas a WhatsApp y formulario para captar leads.',
    features: [
      'Diseño moderno 100% responsivo para celulares y computadoras',
      'Botones flotantes de WhatsApp directos a tus asesores',
      'Formulario de contacto conectado a tu correo corporativo',
      'Optimización SEO para aparecer en Google local (Yurimaguas y Perú)',
      'Velocidad de carga ultrarrápida (menos de 2 segundos)',
      'Integración con redes sociales (Facebook, Instagram, TikTok)',
      '1 Año de Hosting y Dominio .com o .pe incluido (Opcional)'
    ],
    idealFor: 'Lanzamiento de productos, campañas publicitarias, servicios profesionales, inmobiliarias y cursos.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'HTML5/CSS3', 'SEO On-Page']
  },
  {
    id: 'paginas-basicas',
    category: 'web_basica',
    title: 'Página Web Básica / Corporativa',
    subtitle: 'La carta de presentación digital oficial para tu negocio o empresa',
    badge: 'ESENCIAL',
    priceRange: 'Desde S/ 550',
    priceStarting: 'Desde S/ 550',
    deliveryTime: '5 a 8 días hábiles',
    description: 'Muestra quién eres, tus servicios, catálogo de productos, ubicación con Google Maps, historia y testimonios.',
    features: [
      'Estructura completa de 4 a 6 secciones (Inicio, Nosotros, Servicios, Catálogo, Contacto)',
      'Mapa interactivo de Google Maps con la ubicación de tu local',
      'Galería de fotos de alta resolución y videos de tus trabajos',
      'Correos corporativos configurados (ej. ventas@tuempresa.com)',
      'Diseño institucional con tu logotipo y colores corporativos',
      'Certificado de seguridad SSL (candado verde en el navegador)',
      'Soporte y asesoría técnica en Yurimaguas'
    ],
    idealFor: 'Empresas locales, consultorios médicos, estudios contables, cooperativas, hoteles y talleres.',
    technologies: ['WordPress / React', 'Tailwind CSS', 'Google Maps API', 'PHP']
  },
  {
    id: 'paginas-administrables',
    category: 'web_administrable',
    title: 'Página Web Administrable (E-Commerce / CMS)',
    subtitle: 'Control total para subir productos, cambiar precios y gestionar ventas tú mismo',
    badge: 'MÁS SOLICITADO',
    priceRange: 'Desde S/ 950',
    priceStarting: 'Desde S/ 950',
    deliveryTime: '8 a 15 días hábiles',
    description: 'Incluye panel de control intuitivo tipo WooCommerce donde podrás agregar productos, ofertas, controlar stock y recibir pedidos.',
    features: [
      'Panel administrativo intuitivo para agregar y editar productos sin saber programación',
      'Carrito de compras completo con pasarela de pagos (Yape, Plin, Tarjetas, BCP)',
      'Gestión automática de inventario y alertas de stock bajo',
      'Notificaciones automáticas por correo para cada compra realizada',
      'Cupones de descuento, banners publicitarios y sliders personalizables',
      'Capacitación en video y presencial en Yurimaguas sobre el uso del panel',
      'Cuentas de usuario para clientes con historial de pedidos'
    ],
    idealFor: 'Tiendas de ropa, venta de cómputo, zapaterías, distribuidoras, minimarkets y negocios con catálogo activo.',
    technologies: ['WooCommerce', 'React + Vite', 'Node.js', 'PostgreSQL / MySQL', 'Tailwind']
  },
  {
    id: 'sistemas-apps',
    category: 'sistema_web_app',
    title: 'Sistemas Web a Medida & Apps Móviles',
    subtitle: 'Automatización total: Facturación electrónica SUNAT, POS, almacenes y Apps móviles',
    badge: 'EMPRESARIAL',
    priceRange: 'Desde S/ 1,800',
    priceStarting: 'Desde S/ 1,800',
    deliveryTime: '15 a 30 días hábiles',
    description: 'Desarrollamos software a la medida exacta de tus procesos operativos: punto de venta táctil, facturación electrónica, control de inventario en tiempo real y aplicaciones móviles para Android.',
    features: [
      'Módulo de Facturación y Boleta Electrónica homologado con SUNAT',
      'Sistema Punto de Venta (POS) rápido con lector de código de barras',
      'Control de almacenes múltiples, kardex, stock mínimo y entradas/salidas',
      'Módulo de caja chica, arqueo diario, cuentas por cobrar y reportes en Excel/PDF',
      'Roles y permisos de usuarios (Administrador, Vendedor, Cajero, Almacenero)',
      'Desarrollo de App Móvil para ventas en ruta, delivery o consulta de clientes',
      'Base de datos segura en la nube con copias de seguridad diarias',
      'Soporte técnico continuo y mantenimiento en Yurimaguas'
    ],
    idealFor: 'Ferreterías, farmacias, minimarkets, distribuidoras, restaurantes, empresas de transporte y agropecuarias.',
    technologies: ['React / Vue', 'Node.js / Express', 'PostgreSQL / MySQL', 'Flutter / React Native', 'API SUNAT']
  }
];

export const INITIAL_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1-gaming',
    title: 'PC GAMER & COMPUTADORAS EN YURIMAGUAS',
    highlightText: 'MÁXIMA POTENCIA GAMING, STREAMING Y OFICINA',
    subtitle: 'En Yuritec Computer SAC ensamblamos máquinas de alto poder con componentes 100% nuevos sellados. Ubícanos en Calle Humbolt c/ Claveles - Barrio Las Flores, Yurimaguas.',
    badge: 'YURIMAGUAS - LORETO',
    badgeColor: 'bg-red-600',
    ctaText: 'Ver PCs y Laptops en Catálogo',
    ctaActionCategory: 'pc-gamer',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Intel Core i7 13th / AMD Ryzen 7 + NVIDIA RTX Serie 40 con garantía oficial',
    specsSummary: ['Garantía Local en Yurimaguas', 'RTX Serie 40', '32GB RAM DDR5', 'Asesoría 920 159 765 / 907 373 993'],
    priceNotice: 'Desde S/ 2,799'
  },
  {
    id: 'slide-2-soporte',
    title: 'SOPORTE TÉCNICO A DOMICILIO Y TALLER',
    highlightText: '¿FALLA TU COMPUTADORA O LAPTOP PARTICULAR? LA REPARAMOS HOY',
    subtitle: 'Atendemos visitas a domicilio en Yurimaguas o trae tu equipo a nuestro taller en Calle Humbolt c/ Claveles - Barrio Las Flores. Diagnóstico express y repuestos originales.',
    badge: 'A DOMICILIO & EN TALLER',
    badgeColor: 'bg-emerald-600',
    ctaText: 'Solicitar Soporte a Domicilio / Taller',
    isSpecialAction: 'open_service_modal',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Mantenimiento, limpieza profunda, cambio de pasta térmica, formateo y repotenciación con SSD',
    specsSummary: ['Taller en Calle Humbolt', 'Técnico a Domicilio en Yurimaguas', 'Diagnóstico en 24h', 'WhatsApp 920 159 765 / 907 373 993']
  },
  {
    id: 'slide-3-hosting',
    title: 'HOSTING NVME & DOMINIOS ANUALES',
    highlightText: 'DOMINIO S/ 60 AL AÑO • HOSTING DESDE S/ 100 A S/ 350 ANUAL',
    subtitle: 'Paquetes de hosting según volumen de almacenamiento (10GB a 150GB NVMe) con cPanel, correos corporativos y SSL gratis. Registra tu dominio .com o .pe hoy mismo.',
    badge: 'HOSTING & DOMINIOS',
    badgeColor: 'bg-blue-600',
    ctaText: 'Ver Paquetes de Hosting & Dominios',
    isSpecialAction: 'view_hosting',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Servidores con discos SSD NVMe ultra rápidos, cPanel y soporte directo en Yurimaguas',
    specsSummary: ['Dominio: S/ 60/año', 'Hosting: S/ 100 a S/ 350/año', 'Correos Corporativos', 'Copias de Seguridad']
  },
  {
    id: 'slide-4-web-dev',
    title: 'DESARROLLO DE SISTEMAS WEB & APPS',
    highlightText: 'LANDING PAGES, WEBS ADMINISTRABLES Y FACTURACIÓN SUNAT',
    subtitle: 'Creamos la presencia digital y el software de gestión para tu empresa: páginas web básicas, tiendas virtuales autogestionables y sistemas a medida.',
    badge: 'SOFTWARE & WEB',
    badgeColor: 'bg-purple-600',
    ctaText: 'Cotizar Página Web o Sistema',
    isSpecialAction: 'view_web_dev',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Tecnología moderna, tiendas online, sistemas de inventario y aplicaciones móviles para Android/iOS',
    specsSummary: ['Landing Pages de Alta Conversión', 'Webs Administrables', 'Facturación Electrónica', 'Apps Móviles']
  },
  {
    id: 'slide-5-laptops-pos',
    title: 'LAPTOPS, MONITORES & SISTEMAS POS',
    highlightText: 'EQUIPA TU NEGOCIO CON TECNOLOGÍA EN LORETO',
    subtitle: 'Laptops Gamer ASUS ROG y Lenovo Legion, terminales de punto de venta táctiles para facturación en minimarkets y monitores de 180Hz en stock.',
    badge: 'STOCK EN TIENDA',
    badgeColor: 'bg-orange-600',
    ctaText: 'Ver Laptops y Sistemas POS',
    ctaActionCategory: 'punto-de-venta',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Atención presencial en Yurimaguas y envíos a todo Alto Amazonas y Loreto',
    specsSummary: ['Terminales Táctiles POS', 'Laptops Gamer', 'Impresoras Térmicas', 'Garantía Directa']
  }
];

export const INITIAL_SERVICE_BOOKINGS: TechnicalServiceBooking[] = [
  {
    id: 'SERV-2026-8941',
    serviceModality: 'en_tienda',
    deviceType: 'pc_gamer',
    brandModel: 'PC Gamer Asus TUF Core i7',
    serviceCategory: 'diagnostico_falla',
    issueDescription: 'El equipo se apaga repentinamente al ejecutar juegos y programas de renderizado; la temperatura de la tarjeta gráfica sube.',
    customerName: 'Mario Vargas Silva',
    customerEmail: 'mario.vargas@gmail.com',
    customerPhone: '+51 920 159 765',
    customerDni: '46890123',
    address: 'Calle Humbolt c/ Claveles - Barrio Las Flores',
    district: 'Yurimaguas, Alto Amazonas',
    preferredDate: '2026-11-03',
    preferredTime: '11:00 AM',
    status: 'en_evaluacion',
    assignedTechnician: 'Técnico Especialista Yuritec',
    estimatedBudget: 80,
    createdAt: '2026-11-01 10:40'
  },
  {
    id: 'SERV-2026-7732',
    serviceModality: 'a_domicilio',
    deviceType: 'laptop',
    brandModel: 'Laptop Lenovo Legion 5 Pro',
    serviceCategory: 'limpieza_pasta_termica',
    issueDescription: 'Mantenimiento preventivo general a domicilio, cambio de pasta térmica por Arctic MX-6 y limpieza de ventiladores.',
    customerName: 'Elena Quispe Huamán',
    customerEmail: 'elena.quispe@outlook.com',
    customerPhone: '+51 907 373 993',
    customerDni: '71239845',
    address: 'Jr. Comercio 340 (Cerca a la Plaza de Armas)',
    district: 'Yurimaguas',
    preferredDate: '2026-11-04',
    preferredTime: '03:30 PM',
    status: 'tecnico_asignado',
    assignedTechnician: 'Téc. Marco Aurelio (Móvil Yuritec)',
    estimatedBudget: 120,
    createdAt: '2026-11-02 09:15'
  }
];


