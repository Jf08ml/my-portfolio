"use client";

import { motion } from "framer-motion";
import { AppWindow, Boxes, Cloud, Database, Server, Smartphone } from "lucide-react";
import {
  SectionWrapper,
  SectionTitle,
  SectionDescription,
  itemVariants,
} from "@/app/components/ui/SectionWrapper";
import { Badge } from "@/app/components/ui/Badge";
import { techStack } from "@/app/config/techStack";

const getCategoryIcon = (title: string) => {
  if (title.includes("Frontend")) return AppWindow;
  if (title.includes("UI")) return Boxes;
  if (title.includes("Mobile")) return Smartphone;
  if (title.includes("Backend")) return Server;
  if (title.includes("Bases de Datos")) return Database;
  return Cloud;
};

export function TechStackSection() {
  return (
    <SectionWrapper id="stack" className="relative">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />
      
      <SectionTitle>Stack Tecnológico</SectionTitle>
      <SectionDescription>
        Ecosistema de leguajes, frameworks y herramientas core que utilizo para orquestar plataformas de extremo a extremo.
      </SectionDescription>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((category) => {
          const Icon = getCategoryIcon(category.title);
          return (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-border/80 bg-surface/30 p-6 backdrop-blur-sm transition-all hover:bg-surface/50 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background/80 shadow-sm border border-border/50 text-muted-light group-hover:text-emerald-500 transition-colors">
                  <Icon className="h-[22px] w-[22px]" strokeWidth={2} />
                </div>
                <h3 className="text-sm md:text-[15px] font-bold uppercase tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
                  {category.title}
</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <Badge 
                    key={item} 
                    className="bg-background/40 hover:bg-surface-alt border-border/60 text-foreground/80 group-hover:border-border px-3 py-1.5 transition-colors shadow-sm"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
