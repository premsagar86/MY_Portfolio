"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

type AsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsAnchor = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function MagneticButton(props: AsButton | AsAnchor) {
  const { children, className, strength = 0.25, ...rest } = props;
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (reduced || !el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${
      (e.clientY - r.top - r.height / 2) * strength
    }px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const shared = {
    ref: ref as never,
    onMouseMove: onMove,
    onMouseLeave: reset,
    className: cn(
      "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,background-color,color] duration-300 [transition-timing-function:var(--ease-out-expo)] focus-visible:outline-2",
      className,
    ),
  };

  if ("href" in props && props.href !== undefined) {
    return (
      <a {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)} {...shared}>
        {children}
      </a>
    );
  }
  return (
    <button {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)} {...shared}>
      {children}
    </button>
  );
}
