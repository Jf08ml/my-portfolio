"use client";

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-foreground/20 ${className}`}
    >
      {children}
    </div>
  );
}
