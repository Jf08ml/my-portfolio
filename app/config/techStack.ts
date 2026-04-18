export interface TechCategory {
  title: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    title: "Frontend Core",
    items: [
      "React",
      "Next.js",
      "Vue JS",
      "TypeScript",
    ],
  },
  {
    title: "UI Frameworks & Gráficos",
    items: [
      "Tailwind CSS",
      "Mantine",
      "Quasar",
      "Framer Motion",
      "Three JS",
    ],
  },
  {
    title: "Mobile y Multiplataforma",
    items: [
      "React Native",
      "React Native Paper",
      "Expo",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "NestJS",
      "Python",
      "Flask",
      "GraphQL",
      "RESTful APIs",
    ],
  },
  {
    title: "Bases de Datos & Real-Time",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "TypeORM",
      "WebSockets",
      "LiveKit / WebRTC",
    ],
  },
  {
    title: "Deploys & Operaciones",
    items: [
      "Docker",
      "Vercel",
      "DigitalOcean",
      "Netlify",
      "GitHub Actions",
      "CI/CD Pipeline",
    ],
  },
];
