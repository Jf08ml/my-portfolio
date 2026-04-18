import { siteConfig } from "@/app/config/siteConfig";

export function generateJsonLd() {
  const personId = `${siteConfig.url}/#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        jobTitle: "Fullstack Engineer",
        description: siteConfig.description,
        url: siteConfig.url,
        image: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/perfil.png`,
          contentUrl: `${siteConfig.url}/images/perfil.png`,
        },
        email: siteConfig.email,
        sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "professional inquiries",
          email: siteConfig.email,
          availableLanguage: ["Spanish", "English"],
        },
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
          "WebRTC",
          "Docker",
          "Redis",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: `${siteConfig.name} — Portfolio`,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        author: { "@id": personId },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
