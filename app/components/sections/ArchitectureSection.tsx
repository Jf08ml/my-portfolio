"use client";

import { motion, type Transition } from "framer-motion";
import {
  SectionWrapper,
  SectionTitle,
  SectionDescription,
  itemVariants,
} from "@/app/components/ui/SectionWrapper";

// Animación de flujo de electrones / data
const flowAnimation = {
  strokeDashoffset: [24, -24],
};
const flowTransition = {
  repeat: Infinity,
  ease: "linear",
  duration: 1.5,
} as const;

export function ArchitectureSection() {
  return (
    <SectionWrapper id="arquitectura" className="relative">
      <div className="pointer-events-none absolute right-1/4 top-3/4 -z-10 h-64 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

      <SectionTitle>Arquitectura</SectionTitle>
      <SectionDescription>
        Patrones, ecosistemas y flujos de datos que diseño para asegurar
        crecimiento y disponibilidad en entornos de ultra-baja latencia.
      </SectionDescription>

      <div className="mt-12 space-y-12">
        {/* SaaS Multitenant */}
        <motion.div variants={itemVariants} className="group">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-light group-hover:text-emerald-500 transition-colors">
            Arquitectura SaaS Multitenant
          </h3>
          <div className="rounded-2xl border border-border/60 bg-surface/30 p-6 md:p-8 backdrop-blur-sm transition-all group-hover:border-emerald-500/30 group-hover:surface/50">
            <svg
              viewBox="0 0 800 200"
              className="w-full text-foreground/20"
              aria-label="Diagrama de arquitectura SaaS multitenant"
              role="img"
            >
              {/* Central flow backbone */}
              <line x1="160" y1="100" x2="530" y2="100" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />

              {/* Tenants */}
              <rect x="20" y="60" width="140" height="80" rx="8" className="fill-surface stroke-border" strokeWidth="1.5" />
              <text x="90" y="95" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Tenant A</text>
              <text x="90" y="115" textAnchor="middle" className="fill-muted-light text-[10px]">Datos Aislados</text>
              <motion.line x1="160" y1="100" x2="530" y2="100" className="stroke-emerald-500/40" strokeWidth="1.5" strokeDasharray="4 4" animate={flowAnimation} transition={flowTransition} />

              <rect x="180" y="60" width="140" height="80" rx="8" className="fill-surface stroke-border" strokeWidth="1.5" />
              <text x="250" y="95" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Tenant B</text>
              <text x="250" y="115" textAnchor="middle" className="fill-muted-light text-[10px]">Datos Aislados</text>
              <motion.line x1="320" y1="100" x2="530" y2="100" className="stroke-emerald-500/40" strokeWidth="1.5" strokeDasharray="4 4" animate={flowAnimation} transition={flowTransition} />

              <rect x="340" y="60" width="140" height="80" rx="8" className="fill-surface stroke-border" strokeWidth="1.5" />
              <text x="410" y="95" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Tenant N</text>
              <text x="410" y="115" textAnchor="middle" className="fill-muted-light text-[10px]">Datos Aislados</text>
              <motion.line x1="480" y1="100" x2="530" y2="100" className="stroke-emerald-500/40" strokeWidth="1.5" strokeDasharray="4 4" animate={flowAnimation} transition={flowTransition} />

              {/* Shared Platform */}
              <rect x="530" y="30" width="240" height="140" rx="12" className="fill-surface-alt stroke-border" strokeWidth="1.5" />
              <text x="650" y="60" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[13px] font-bold">Plataforma Base Compartida</text>
              <text x="650" y="85" textAnchor="middle" className="fill-muted text-[11px]">Auth · API · Lógica Central</text>
              <text x="650" y="105" textAnchor="middle" className="fill-muted text-[11px]">DB Compartida</text>
              <text x="650" y="125" textAnchor="middle" className="fill-muted text-[11px]">Aislamiento Virtualizado (RLS)</text>

              {/* Gateway flow point */}
              <circle cx="530" cy="100" r="3" className="fill-emerald-500" />
            </svg>
          </div>
        </motion.div>

        {/* Microservices */}
        <motion.div variants={itemVariants} className="group">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-light group-hover:text-emerald-500 transition-colors">
            Microservicios y Message Brokers
          </h3>
          <div className="rounded-2xl border border-border/60 bg-surface/30 p-6 md:p-8 backdrop-blur-sm transition-all group-hover:border-emerald-500/30 group-hover:bg-surface/50">
            <svg
              viewBox="0 0 800 220"
              className="w-full text-foreground/20"
              aria-label="Diagrama de arquitectura de microservicios"
              role="img"
            >
              {/* API Gateway */}
              <rect x="300" y="10" width="200" height="50" rx="8" className="fill-surface-alt stroke-border" strokeWidth="1.5" />
              <text x="400" y="40" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[13px] font-bold">API Gateway & Router</text>

              {/* Services */}
              <rect x="20" y="110" width="150" height="60" rx="8" className="fill-surface stroke-border" strokeWidth="1.5" />
              <text x="95" y="135" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Auth Service</text>
              <text x="95" y="152" textAnchor="middle" className="fill-muted-light text-[10px]">JWT · OAuth</text>

              <rect x="200" y="110" width="150" height="60" rx="8" className="fill-surface stroke-border" strokeWidth="1.5" />
              <text x="275" y="135" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Core Service</text>
              <text x="275" y="152" textAnchor="middle" className="fill-muted-light text-[10px]">Negocio · Entidades</text>

              <rect x="380" y="110" width="150" height="60" rx="8" className="fill-surface stroke-border" strokeWidth="1.5" />
              <text x="455" y="135" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Event Worker</text>
              <text x="455" y="152" textAnchor="middle" className="fill-muted-light text-[10px]">Email · Push · Webhooks</text>

              <rect x="560" y="110" width="150" height="60" rx="8" className="fill-surface stroke-border" strokeWidth="1.5" />
              <text x="635" y="135" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Media Streaming</text>
              <text x="635" y="152" textAnchor="middle" className="fill-muted-light text-[10px]">WebRTC · CDN</text>

              {/* Lines from gateway with motion */}
              <motion.line x1="350" y1="60" x2="95" y2="110" className="stroke-emerald-500/50" strokeWidth="1" strokeDasharray="3 3" animate={flowAnimation} transition={flowTransition} />
              <motion.line x1="380" y1="60" x2="275" y2="110" className="stroke-emerald-500/50" strokeWidth="1" strokeDasharray="3 3" animate={flowAnimation} transition={flowTransition} />
              <motion.line x1="420" y1="60" x2="455" y2="110" className="stroke-emerald-500/50" strokeWidth="1" strokeDasharray="3 3" animate={flowAnimation} transition={flowTransition} />
              <motion.line x1="450" y1="60" x2="635" y2="110" className="stroke-emerald-500/50" strokeWidth="1" strokeDasharray="3 3" animate={flowAnimation} transition={flowTransition} />

              {/* DB icons */}
              <rect x="20" y="190" width="150" height="26" rx="6" className="fill-surface stroke-border/50" strokeWidth="1" />
              <text x="95" y="207" textAnchor="middle" className="fill-muted text-[10px] uppercase font-bold">PostgreSQL</text>

              <rect x="200" y="190" width="150" height="26" rx="6" className="fill-surface stroke-border/50" strokeWidth="1" />
              <text x="275" y="207" textAnchor="middle" className="fill-muted text-[10px] uppercase font-bold">PostgreSQL</text>

              <rect x="380" y="190" width="150" height="26" rx="6" className="fill-surface stroke-border/50" strokeWidth="1" />
              <text x="455" y="207" textAnchor="middle" className="fill-muted text-[10px] uppercase font-bold">Redis Queue</text>

              <rect x="560" y="190" width="150" height="26" rx="6" className="fill-surface stroke-border/50" strokeWidth="1" />
              <text x="635" y="207" textAnchor="middle" className="fill-muted text-[10px] uppercase font-bold">S3 Object Storage</text>

              <line x1="95" y1="170" x2="95" y2="190" className="stroke-border/50" strokeWidth="1" />
              <line x1="275" y1="170" x2="275" y2="190" className="stroke-border/50" strokeWidth="1" />
              <line x1="455" y1="170" x2="455" y2="190" className="stroke-border/50" strokeWidth="1" />
              <line x1="635" y1="170" x2="635" y2="190" className="stroke-border/50" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>

        {/* Request Flow */}
        <motion.div variants={itemVariants} className="group">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-light group-hover:text-emerald-500 transition-colors">
            Flujo de Request Optimizado
          </h3>
          <div className="rounded-2xl border border-border/60 bg-surface/30 p-6 md:p-8 backdrop-blur-sm transition-all group-hover:border-emerald-500/30 group-hover:bg-surface/50">
            <svg
              viewBox="0 0 800 100"
              className="w-full text-foreground/20"
              aria-label="Diagrama de flujo de requests"
              role="img"
            >
              {/* Client */}
              <rect x="10" y="25" width="120" height="50" rx="8" className="fill-surface-alt stroke-border" strokeWidth="1.5" />
              <text x="70" y="55" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[12px] font-bold">Browser / App</text>

              {/* Arrow */}
              <motion.line
                x1="130" y1="50" x2="190" y2="50"
                className="stroke-emerald-500/80"
                strokeWidth="2"
                strokeDasharray="4 4"
                animate={flowAnimation}
                transition={flowTransition}
              />
              <polygon points="188,45 198,50 188,55" className="fill-emerald-500/80" />

              {/* API */}
              <rect x="200" y="25" width="120" height="50" rx="8" className="fill-surface stroke-border" strokeWidth="1.5" />
              <text x="260" y="55" textAnchor="middle" className="fill-foreground text-[12px] font-bold">API / BFF Node</text>

              {/* Arrow */}
              <motion.line
                x1="320" y1="50" x2="380" y2="50"
                className="stroke-emerald-500/80"
                strokeWidth="2"
                strokeDasharray="4 4"
                animate={flowAnimation}
                transition={flowTransition}
              />
              <polygon points="378,45 388,50 378,55" className="fill-emerald-500/80" />

              {/* DB */}
              <rect x="390" y="25" width="120" height="50" rx="8" className="fill-surface stroke-border" strokeWidth="1.5" />
              <text x="450" y="55" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Database Cluster</text>

              {/* Arrow */}
              <motion.line
                x1="510" y1="50" x2="570" y2="50"
                className="stroke-emerald-500/80"
                strokeWidth="2"
                strokeDasharray="4 4"
                animate={flowAnimation}
                transition={flowTransition}
              />
              <polygon points="568,45 578,50 568,55" className="fill-emerald-500/80" />

              {/* External */}
              <rect x="580" y="25" width="190" height="50" rx="8" className="fill-surface stroke-border/50" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="675" y="48" textAnchor="middle" className="fill-muted-light text-[12px] uppercase font-bold">External 3rd Party</text>
              <text x="675" y="65" textAnchor="middle" className="fill-muted-light text-[9px]">Stripe · AWS SES · WhatsApp</text>
            </svg>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
