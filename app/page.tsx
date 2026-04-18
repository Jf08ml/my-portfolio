import dynamic from "next/dynamic";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { AboutSection } from "@/app/components/sections/AboutSection";

const ProjectsSection = dynamic(
  () =>
    import("@/app/components/sections/ProjectsSection").then(
      (mod) => mod.ProjectsSection
    ),
  { ssr: true }
);

const GrowthSection = dynamic(
  () =>
    import("@/app/components/sections/GrowthSection").then(
      (mod) => mod.GrowthSection
    ),
  { ssr: true }
);

const TechStackSection = dynamic(
  () =>
    import("@/app/components/sections/TechStackSection").then(
      (mod) => mod.TechStackSection
    ),
  { ssr: true }
);

const ArchitectureSection = dynamic(
  () =>
    import("@/app/components/sections/ArchitectureSection").then(
      (mod) => mod.ArchitectureSection
    ),
  { ssr: true }
);

const PhilosophySection = dynamic(
  () =>
    import("@/app/components/sections/PhilosophySection").then(
      (mod) => mod.PhilosophySection
    ),
  { ssr: true }
);

const ContactSection = dynamic(
  () =>
    import("@/app/components/sections/ContactSection").then(
      (mod) => mod.ContactSection
    ),
  { ssr: true }
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="border-t border-border" />
      <AboutSection />
      <div className="border-t border-border" />
      <ProjectsSection />
      <div className="border-t border-border" />
      <GrowthSection />
      <div className="border-t border-border" />
      <TechStackSection />
      <div className="border-t border-border" />
      <ArchitectureSection />
      <div className="border-t border-border" />
      <PhilosophySection />
      <div className="border-t border-border" />
      <ContactSection />
    </main>
  );
}
