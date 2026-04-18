"use client";

import { motion } from "framer-motion";
import { 
  Maximize, 
  Layers, 
  Zap, 
  Target, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react";
import {
  SectionWrapper,
  SectionTitle,
  SectionDescription,
  itemVariants,
} from "@/app/components/ui/SectionWrapper";

const principles = [
  {
    title: "Escalabilidad",
    icon: Maximize,
    description:
      "Diseño pensando en el crecimiento. Cada decisión arquitectónica considera qué pasa cuando el producto multiplica sus usuarios por 10.",
    color: "text-blue-500",
    bg: "hover:border-blue-500/30",
  },
  {
    title: "Clean Architecture",
    icon: Layers,
    description:
      "Separación clara de responsabilidades. Código que otros ingenieros pueden entender, mantener y extender sin fricción.",
    color: "text-emerald-500",
    bg: "hover:border-emerald-500/30",
  },
  {
    title: "Performance First",
    icon: Zap,
    description:
      "El rendimiento no es una optimización posterior — es una restricción de diseño desde el primer commit.",
    color: "text-yellow-500",
    bg: "hover:border-yellow-500/30",
  },
  {
    title: "Producto sobre Código",
    icon: Target,
    description:
      "El código es un medio. Las decisiones técnicas se evalúan por su impacto en el producto, no por su elegancia académica.",
    color: "text-rose-500",
    bg: "hover:border-rose-500/30",
  },
  {
    title: "Impacto Medible",
    icon: BarChart3,
    description:
      "Si no se puede medir, no se puede mejorar. Cada feature tiene métricas claras de éxito antes de escribir la primera línea.",
    color: "text-purple-500",
    bg: "hover:border-purple-500/30",
  },
  {
    title: "Seguridad por Diseño",
    icon: ShieldCheck,
    description:
      "Protección de datos y aislamiento como pilar fundamental, no como un requerimiento adicional.",
    color: "text-cyan-500",
    bg: "hover:border-cyan-500/30",
  },
];

export function PhilosophySection() {
  return (
    <SectionWrapper id="filosofia">
      <SectionTitle>Filosofía de Ingeniería</SectionTitle>
      <SectionDescription>
        Principios innegociables que rigen mi proceso de construcción de software de alto rendimiento.
      </SectionDescription>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p, index) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 ${p.bg} hover:bg-surface/60 hover:shadow-xl hover:shadow-emerald-500/5`}
            >
              {/* Background Glow */}
              <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-current opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10 ${p.color}`} />
              
              <div className="relative z-10">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-background/50 shadow-sm border border-border/50 ${p.color}`}>
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                
                <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                  {p.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-muted-light">
                  {p.description}
                </p>
              </div>

              {/* Decorative Index */}
              <div className="absolute bottom-4 right-6 text-4xl font-black text-foreground/5 transition-colors group-hover:text-foreground/10 select-none">
                0{index + 1}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
