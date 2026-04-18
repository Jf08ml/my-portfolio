"use client";

import { motion } from "framer-motion";
import { Database, Network, Server, Zap } from "lucide-react";
import {
  SectionWrapper,
  SectionTitle,
  itemVariants,
} from "@/app/components/ui/SectionWrapper";

const highlights = [
  {
    title: "SaaS Multitenant",
    desc: "Arquitecturas escalables con aislamiento de datos absoluto.",
    icon: Database,
  },
  {
    title: "Microservicios",
    desc: "Sistemas distribuidos, resilientes y desacoplados.",
    icon: Network,
  },
  {
    title: "Tiempo Real",
    desc: "WebSockets y sincronización asíncrona sin latencia.",
    icon: Zap,
  },
  {
    title: "Infraestructura",
    desc: "Deploy continuo agnóstico (Vercel, AWS, DO, Netlify).",
    icon: Server,
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="sobre-mi" className="relative">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

      <SectionTitle>Sobre mí</SectionTitle>

      <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
        {/* Left Column: Typography & Philosophy */}
        <motion.div variants={itemVariants} className="space-y-6 text-base leading-relaxed text-muted">
          <p className="text-lg font-medium text-foreground tracking-tight">
            Llevo años construyendo productos digitales completos — desde la
            primera línea de código hasta el deploy en producción.
          </p>

          <p>
            No me limito a escribir features: <strong className="font-medium text-foreground dark:text-emerald-50">diseño arquitecturas que soporten crecimiento real</strong>.
            He liderado el desarrollo en plataformas SaaS donde cada decisión
            impacta directamente la escalabilidad, y he construido ecosistemas de microservicios
            que se comunican de forma impecable bajo carga extrema.
          </p>

          <p>
            Integro pasarelas de pago complejas y providers de comunicación
            sin acoplar la lógica de negocio. Mi táctica frontend se enfoca en el
            <span className="font-medium text-foreground dark:text-emerald-50"> SEO técnico</span> y la
            optimización de métricas <span className="font-medium text-foreground dark:text-emerald-50"> Core Web Vitals</span>, mientras que mi arquitectura backend
            asegura un rendimiento sostenido operando bases de datos pesadas.
          </p>

          <blockquote className="relative mt-8 rounded-r-xl border-l-2 border-emerald-500 bg-surface/40 px-6 py-5">
            <p className="text-sm font-medium italic text-foreground/90">
              "Pienso cada decisión técnica como una decisión de producto.
              El código es meramente el medio de construcción; el resultado
              de negocio es el verdadero objetivo final."
            </p>
          </blockquote>
        </motion.div>

        {/* Right Column: Highlight Bento Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-surface/30 px-6 py-6 transition-colors hover:border-emerald-500/30 hover:bg-surface/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/80 shadow-sm border border-border/50 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm tracking-tight">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
