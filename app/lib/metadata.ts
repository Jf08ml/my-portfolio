import { siteConfig } from "@/app/config/siteConfig";

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: "Fullstack Engineer",
        description: siteConfig.description,
        url: siteConfig.url,
        sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
        knowsAbout: [
          "Software Architecture",
          "SaaS Development",
          "Microservices",
          "Real-Time Systems",
          "Full Stack Development",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "PostgreSQL",
        ],
      },
      {
        "@type": "WebSite",
        name: `${siteConfig.name} — Portfolio`,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
      },
    ],
  };
}
