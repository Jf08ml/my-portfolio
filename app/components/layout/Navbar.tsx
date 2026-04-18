"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeToggle } from "@/app/components/ui/ThemeToggle";
import { siteConfig } from "@/app/config/siteConfig";
import Link from "next/link";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Reveal navbar smoothly when scrolling down 80px or more
    if (latest > 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Spring-like ease out
      className="glass-nav fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 md:px-10"
    >
      <div className="flex items-center">
        <Link href="#" className="text-lg font-extrabold tracking-tight text-foreground transition-opacity hover:opacity-80">
          {siteConfig.name.split(" ")[0]}<span className="text-emerald-500">.</span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="#proyectos" className="text-sm font-medium text-muted transition-colors hover:text-foreground">
          Proyectos
        </Link>
        <Link href="#sobre-mi" className="text-sm font-medium text-muted transition-colors hover:text-foreground">
          Sobre mí
        </Link>
        <Link href="#contacto" className="text-sm font-medium text-muted transition-colors hover:text-foreground">
          Contacto
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
