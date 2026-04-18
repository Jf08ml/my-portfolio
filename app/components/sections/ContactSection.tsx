"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MessageCircle, 
  ArrowUpRight,
  Send,
  Check,
  Copy,
  Globe
} from "lucide-react";
import {
  SectionWrapper,
  SectionTitle,
  itemVariants,
} from "@/app/components/ui/SectionWrapper";
import { siteConfig } from "@/app/config/siteConfig";

// Custom Brand Icons to bypass missing Lucide brand icons in some versions
const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      label: "LinkedIn",
      value: "Professional Profile",
      href: siteConfig.socials.linkedin,
      icon: LinkedinIcon,
      color: "text-blue-500",
      bg: "bg-blue-500/5",
      border: "hover:border-blue-500/40"
    },
    {
      label: "GitHub",
      value: "Repositories & Code",
      href: siteConfig.socials.github,
      icon: GithubIcon,
      color: "text-neutral-400",
      bg: "bg-neutral-500/5",
      border: "hover:border-neutral-500/40"
    },
    {
      label: "WhatsApp",
      value: "Direct Chat",
      href: siteConfig.socials.whatsapp,
      icon: MessageCircle,
      color: "text-emerald-500",
      bg: "bg-emerald-500/5",
      border: "hover:border-emerald-500/40"
    }
  ];

  return (
    <SectionWrapper id="contacto" className="relative">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px] dark:bg-emerald-500/10" />

      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left Side: Text & Status */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <SectionTitle className="mb-6 text-left">Hablemos de tu próximo gran proyecto</SectionTitle>
            <p className="max-w-md text-balance text-lg text-muted-foreground">
              Estoy abierto a unirme a equipos de desarrollo, participar en proyectos establecidos o liderar productos completos. 
              Busco colaborar en soluciones escalables que impacten positivamente en el negocio.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-sm font-medium text-foreground">Disponible para desarrollo y colaboración inmediata</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {["Fullstack Developer", "Team Player", "SaaS Architecture"].map((tag) => (
                <span key={tag} className="rounded-full bg-surface/50 px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground border border-border/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Cards */}
        <div className="space-y-4">
          {/* Main Email Card - Highlighted */}
          <motion.div 
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-1 backdrop-blur-md transition-all hover:bg-surface/80"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-rose-500/10 p-4 text-rose-500 border border-rose-500/20">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground">Email Directo</h3>
                  <p className="text-sm text-muted-foreground truncate">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={copyEmail}
                  className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-background/50 px-4 py-3 text-sm font-medium border border-border/80 transition-colors hover:bg-background"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        className="flex items-center gap-2 text-emerald-500"
                      >
                        <Check className="h-4 w-4" />
                        <span>Copiado</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Copy className="h-4 w-4 text-muted-foreground" />
                        <span>Copiar</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-xl bg-foreground p-3 text-background transition-transform hover:scale-105 active:scale-95"
                  aria-label="Enviar email"
                >
                  <Send className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Secondary Grid for Socials */}
          <div className="grid gap-4 sm:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className={`group rounded-2xl border border-border bg-surface/40 p-5 backdrop-blur-sm transition-all ${method.border} hover:bg-surface/60`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`rounded-xl ${method.bg} p-2.5 ${method.color} border border-white/5`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">{method.label}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{method.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <motion.div 
        variants={itemVariants}
        className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-border/40 pt-10 sm:flex-row sm:gap-0"
      >
        <p className="text-sm text-muted-foreground/80">
          © {new Date().getFullYear()} {siteConfig.name}.
        </p>
        <div className="flex items-center gap-6">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/40">Open to Global Opportunities</span>
          <div className="h-4 w-px bg-border/40" />
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-500/60">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            UTC-5
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
