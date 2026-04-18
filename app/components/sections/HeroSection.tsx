"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import { siteConfig } from "@/app/config/siteConfig";
import Image from "next/image";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...springTransition,
      delay: 0.1 + i * 0.08,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...springTransition,
      delay,
    },
  }),
};

export function HeroSection() {
  const nameWords = siteConfig.name.split(" ");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="group relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic mouse-tracking radial gradient background */}
      <motion.div
        className="pointer-events-none absolute -inset-x-20 -inset-y-20 z-0 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.05),
              transparent 80%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Subtle dot grid background */}
      <div className="dot-grid pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-overlay" aria-hidden="true" />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center px-6">
        {/* Hero Layout: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 w-full">

          {/* Left Column: Presentation */}
          <div className="flex flex-col relative z-10 items-start">
            {/* Availability Badge */}
            <motion.div
              custom={0.1}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-medium text-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.1)] ring-1 ring-inset ring-emerald-500/20 backdrop-blur-md dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Disponible para proyectos
              </div>
            </motion.div>

            {/* Name - Word by word animation + Accessible markup */}
            <h1
              className="mt-8 mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-7xl"
              aria-label={siteConfig.name}
            >
              {nameWords.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="mr-[0.3em] inline-block"
                  aria-hidden="true"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Title */}
            <motion.h2
              custom={0.4}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mb-4 text-lg font-semibold tracking-wide text-foreground/80 md:text-xl lg:text-2xl"
            >
              <span className="block sm:inline">SaaS Architect</span>
              <span className="hidden sm:inline mx-2 text-muted-light/60">·</span>
              <span className="block sm:inline mt-1 sm:mt-0">Real-Time Systems</span>
              <span className="hidden sm:inline mx-2 text-muted-light/60">·</span>
              <span className="block sm:inline mt-1 sm:mt-0">Growth-Oriented</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              custom={0.5}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mb-10 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.65}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <Button href="#proyectos" className="shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/30">
                Ver proyectos
              </Button>
              <Button variant="secondary" href="#contacto" className="bg-surface/50 backdrop-blur-md transition-all hover:bg-surface/80">
                Contactar
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Glassmorphic Monitor / Photo Window */}
          <motion.div
            custom={0.8}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col relative overflow-hidden rounded-2xl border border-emerald-500/30 dark:border-emerald-500/20 bg-surface/60 dark:bg-surface/40 shadow-2xl shadow-emerald-500/20 dark:shadow-emerald-500/10 backdrop-blur-xl"
            >
              {/* Monitor Top Bar */}
              <div className="flex h-10 w-full items-center gap-2 border-b border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/20 px-4">
                <div className="h-3 w-3 rounded-full bg-red-400/80 shadow-[0_0_10px_rgba(248,113,113,0.3)]" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80 shadow-[0_0_10px_rgba(250,204,21,0.3)]" />
                <div className="h-3 w-3 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
              </div>

              {/* Monitor Content / Photo Background */}
              <div className="relative aspect-[4/5] w-full bg-black/5 dark:bg-black/40 sm:aspect-square">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-500/10 via-surface to-background">
                  <Image
                    src="/images/perfil.png"
                    alt="Juan Felipe Mosquera Lasso — Ingeniero Fullstack especializado en SaaS y sistemas en tiempo real"
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top opacity-100 dark:opacity-90 drop-shadow-2xl mix-blend-normal"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Subtle ambient glow behind the monitor */}
            <div className="absolute -inset-10 -z-10 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-emerald-500/20 dark:bg-emerald-500/10 blur-3xl" />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 opacity-60 transition-opacity hover:opacity-100"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            Scroll
          </span>
          <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

