"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  SectionWrapper,
  SectionTitle,
  SectionDescription,
  itemVariants,
} from "@/app/components/ui/SectionWrapper";
import { Badge } from "@/app/components/ui/Badge";
import { projects } from "@/app/config/projects";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <SectionWrapper id="proyectos" className="relative">
      <div className="pointer-events-none absolute right-0 top-32 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[120px]" />

      <SectionTitle>Proyectos Destacados</SectionTitle>
      <SectionDescription>
        Productos reales construidos con arquitecturas pensadas para escalar y generar negocio.
      </SectionDescription>

      <div className="grid gap-8 mt-12">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/40 hover:bg-surface/60 transition-colors shadow-sm hover:shadow-md hover:border-emerald-500/30"
            >
              <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-10">
                {/* Left side: Context & Links */}
                <div className="lg:w-1/3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border/50 pb-6 lg:pb-0 lg:pr-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono font-bold text-muted-light">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <span className="rounded-full border border-border bg-surface-alt px-2.5 py-0.5 text-[11px] font-medium text-emerald-500 dark:text-emerald-400">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground tracking-tight mb-4 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {project.context}
                    </p>
                  </div>

                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                    >
                      Ver Proyecto <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>

                {/* Right side: Architecture, Impact & Stack */}
                <div className="lg:w-2/3 flex flex-col gap-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-light">
                        Solución Técnica
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-light">
                        Arquitectura
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {project.architecture}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 p-5">
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      Impacto de Negocio
                    </h4>
                    <p className="text-sm leading-relaxed font-medium text-foreground/90">
                      {project.impact}
                    </p>
                  </div>

                  <div className="mt-auto pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} className="bg-surface border-border/50 text-foreground/80 hover:bg-surface-alt">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
