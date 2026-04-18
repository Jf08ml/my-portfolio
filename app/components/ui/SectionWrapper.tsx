"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export { itemVariants };

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`mx-auto w-full max-w-4xl px-6 py-20 md:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      variants={itemVariants}
      className={`mb-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function SectionDescription({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.p
      variants={itemVariants}
      className={`mb-12 max-w-2xl text-base leading-relaxed text-muted ${className}`}
    >
      {children}
    </motion.p>
  );
}
