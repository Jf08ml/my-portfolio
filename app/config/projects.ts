export interface Project {
  slug: string;
  title: string;
  category: string;
  context: string;
  solution: string;
  architecture: string;
  stack: string[];
  impact: string;
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "agenditapp",
    title: "AgenditApp",
    category: "SaaS Multitenant",
    context:
      "Negocios de servicios necesitaban una plataforma unificada para gestionar agendas, clientes y pagos sin depender de múltiples herramientas desconectadas.",
    solution:
      "Plataforma SaaS multitenant con aislamiento de datos por organización, sistema de roles, gestión de citas en tiempo real y pasarela de pagos integrada.",
    architecture:
      "Arquitectura multitenant con base de datos compartida y aislamiento lógico por tenant. API RESTful modular con autenticación JWT y refresh tokens. Frontend con SSR para SEO y CSR para interactividad.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Stripe", "Vercel"],
    impact:
      "Reducción del 60% en tiempo de gestión de citas. Onboarding de nuevos tenants en menos de 2 minutos. Arquitectura preparada para escalar a miles de organizaciones.",
    url: "https://agenditapp.com"
  },
  {
    slug: "plataforma-transmision",
    title: "Plataforma de Transmisión Empresarial",
    category: "Real-Time Streaming",
    context:
      "Empresa requería transmisiones en vivo con baja latencia, salas privadas y grabación automática para eventos corporativos internos.",
    solution:
      "Sistema de streaming en tiempo real con salas dinámicas, control de acceso por roles, grabación en la nube y notificaciones push para participantes.",
    architecture:
      "Arquitectura basada en WebRTC con LiveKit como servidor de medios. Backend en NestJS orquestando sesiones, permisos y almacenamiento. Firebase para autenticación y notificaciones en tiempo real.",
    stack: ["LiveKit", "NestJS", "Firebase", "React", "WebRTC", "Cloud Storage"],
    impact:
      "Latencia inferior a 200ms. Soporte para 500+ espectadores simultáneos. Grabaciones disponibles automáticamente post-evento.",
  },
  {
    slug: "microservicio-whatsapp",
    title: "Microservicio WhatsApp",
    category: "Microservicios",
    context:
      "Múltiples aplicaciones del ecosistema necesitaban enviar notificaciones y comunicarse con clientes vía WhatsApp de forma centralizada y confiable.",
    solution:
      "Microservicio independiente con API REST para envío de mensajes, plantillas dinámicas, cola de reintentos y webhook para respuestas entrantes.",
    architecture:
      "Servicio desacoplado con Baileys como cliente de WhatsApp Web. Cola de mensajes para manejar picos de tráfico. API Gateway para autenticación entre servicios. Monitoreo de estado de conexión.",
    stack: ["Node.js", "Baileys", "Redis", "Docker", "REST API"],
    impact:
      "Centralización de comunicaciones WhatsApp para 3+ aplicaciones. Tasa de entrega del 99.2%. Reducción de código duplicado en un 80%.",
  },
  {
    slug: "galaxia-glamour",
    title: "Galaxia Glamour",
    category: "E-commerce",
    context:
      "Marca de cosméticos necesitaba una tienda online con catálogo dinámico, carrito persistente y proceso de compra optimizado para conversión móvil.",
    solution:
      "E-commerce fullstack con catálogo administrable, sistema de inventario en tiempo real, checkout optimizado y panel de administración para gestión de productos y pedidos.",
    architecture:
      "Frontend SSR con Next.js para SEO del catálogo. API REST con NestJS. Base de datos relacional para productos, pedidos e inventario. Integración con pasarela de pagos local.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Cloudinary", "Vercel"],
    impact:
      "Tasa de conversión móvil mejorada en 35%. Tiempo de carga del catálogo menor a 1.5s. Panel admin que redujo tiempo de gestión de productos en 70%.",
    url: "https://store.galaxiaglamour.com"
  },
  {
    slug: "apps-react-native",
    title: "Aplicaciones Móviles React Native",
    category: "Mobile Apps",
    context:
      "Startups necesitaban aplicaciones móviles multiplataforma con experiencia nativa, sin duplicar equipos de desarrollo para iOS y Android.",
    solution:
      "Aplicaciones móviles con React Native y Expo, compartiendo lógica de negocio con backends existentes. Push notifications, navegación compleja y offline-first donde fue necesario.",
    architecture:
      "Monorepo con código compartido entre apps. Expo para build y distribución. Integración con APIs REST existentes. Estado global con Zustand y persistencia local con AsyncStorage.",
    stack: ["React Native", "Expo", "TypeScript", "Zustand", "Firebase"],
    impact:
      "Time-to-market reducido en 50% vs desarrollo nativo. Una sola base de código para iOS y Android. Actualizaciones OTA sin pasar por app stores.",
  },
];
