"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 30, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reduced) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setActive(!!t.closest("a, button, [data-cursor='view'], input, textarea"));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] hidden motion-reduce:!hidden [@media(pointer:fine)]:block"
    >
      <motion.div
        style={{ x, y }}
        className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: active ? 1.8 : 1, opacity: active ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-accent"
      />
    </div>
  );
}
