"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
