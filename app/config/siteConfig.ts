export const siteConfig = {
  name: "Juan Felipe Mosquera Lasso",
  title: "Fullstack Engineer | SaaS Architect | Real-Time Systems | Growth-Oriented",
  description:
    "Ingeniero Fullstack especializado en arquitectura SaaS, microservicios y sistemas en tiempo real. Construyo productos escalables con enfoque en performance, mantenibilidad y conversión.",
  url: "https://juanfelipemosquera.dev",
  email: "lassojuanfe@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/juanfemosquera/",
    github: "https://github.com/Jf08ml?tab=repositories",
    whatsapp: "https://wa.me/573132735116",
  },
  locale: "es_CO",
  language: "es",
} as const;

export type SiteConfig = typeof siteConfig;
