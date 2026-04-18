"use client";

import { motion } from "framer-motion";
import { ExternalLink, Gauge, Search, TrendingUp, Zap } from "lucide-react";
import {
  SectionWrapper,
  SectionTitle,
  SectionDescription,
  itemVariants,
} from "@/app/components/ui/SectionWrapper";
import Link from "next/link";

const metrics = [
  {
    label: "Core Web Vitals",
    value: "Carga Ultrarrápida",
    detail: "Optimización profunda de LCP, FID y CLS, reduciendo drásticamente el tiempo de carga inicial y mejorando el score en Lighthouse.",
    icon: Gauge,
    color: "text-blue-500",
    bg: "border-blue-500/20 hover:border-blue-500/40"
  },
  {
    label: "Tráfico Orgánico",
    value: "Crecimiento Sostenido",
    detail: "Aumento tangible de captación y visitas cualificadas gracias a una arquitectura de renderizado totalmente procesable por bots.",
    icon: TrendingUp,
    color: "text-emerald-500",
    bg: "border-emerald-500/20 hover:border-emerald-500/40"
  },
  {
    label: "Posicionamiento SEO",
    value: "Top Ranking Estructural",
    detail: "Implementación estricta de JSON-LD, metaetiquetas estructuradas (Schema) y semántica HTML perfecta.",
    icon: Search,
    color: "text-purple-500",
    bg: "border-purple-500/20 hover:border-purple-500/40"
  },
  {
    label: "Arquitectura Híbrida",
    value: "SSR + SSG Optimizados",
    detail: "Páginas estáticas instantáneas para el catálogo educativo e hidratado dinámico hiper-veloz para módulos con estado.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "border-yellow-500/20 hover:border-yellow-500/40"
  },
];

export function GrowthSection() {
  return (
    <SectionWrapper id="growth" className="relative">
      <div className="pointer-events-none absolute left-0 top-10 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px]" />

      <SectionTitle>Growth & Performance</SectionTitle>
      <SectionDescription>
        Optimización técnica extrema con impacto directo en posicionamiento en buscadores, métricas de retención y velocidad de carga.
      </SectionDescription>

      <motion.div
        variants={itemVariants}
        className="group relative mt-12 overflow-hidden rounded-3xl border border-border/80 bg-surface/40 backdrop-blur-md shadow-xl transition-all"
      >
        {/* Top Header / Browser Window Style */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 bg-black/5 dark:bg-black/20 p-5 px-6 lg:px-8 lg:py-6">
          <div>
            <div className="mb-2.5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="rounded-full border border-border bg-surface-alt px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-muted-light uppercase">
                Caso de Estudio Real
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
              Instituto YES — Reingeniería de Performance
            </h3>
          </div>

          <Link
            href="https://yes.edu.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center shrink-0 w-full sm:w-auto gap-2 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 px-5 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-400 transition-colors hover:bg-emerald-500/20 dark:hover:bg-emerald-500/30"
          >
            Visitar yes.edu.co <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        {/* Content Body */}
        <div className="p-6 lg:p-10">
          <p className="mb-10 text-sm md:text-base leading-relaxed text-muted max-w-4xl">
            Lideré una intervención arquitectónica profunda para este sistema educativo.
            No fue solo un proyecto estético, fue una reingeniería Frontend orientada fuertemente a disparar
            el <strong className="font-medium text-foreground">posicionamiento orgánico (SEO)</strong>, asegurar un aumento radical en la <strong className="font-medium text-foreground">velocidad de carga</strong> y
            diseñar pasarelas de hidratación de componentes (Server Side Rendering) capaces de retener masivamente el tráfico móvil, minimizando la tasa de rebote.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  whileHover={{ y: -3 }}
                  className={`flex flex-col gap-4 rounded-2xl border bg-background/60 dark:bg-background/40 p-6 shadow-sm transition-all duration-300 ${metric.bg}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface shadow-sm border border-border/50 ${metric.color}`}>
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-light mb-1">
                        {metric.label}
                      </h4>
                      <p className={`text-base md:text-lg font-bold ${metric.color} tracking-tight`}>
                        {metric.value}
                      </p>
                    </div>
                  </div>
                  <p className="mt-1 text-[13px] text-muted leading-relaxed">
                    {metric.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
