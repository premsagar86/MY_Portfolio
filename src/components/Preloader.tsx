"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion() || sessionStorage.getItem("preloaded")) {
        setDone(true);
        return;
      }
      const obj = { n: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("preloaded", "1");
          setDone(true);
        },
      });
      tl.to(obj, {
        n: 100,
        duration: 1.6,
        ease: "power2.inOut",
        onUpdate: () => setCount(Math.round(obj.n)),
      })
        .to("[data-pre-name]", { opacity: 1, y: 0, duration: 0.4 }, "-=0.5")
        .to("[data-pre-name]", { opacity: 0, duration: 0.3, delay: 0.35 })
        .to(root.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        });
    },
    { scope: root },
  );

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-bg"
    >
      <p
        data-pre-name
        className="translate-y-3 font-display text-2xl font-bold tracking-tight opacity-0 md:text-4xl"
      >
        Eedubilli Premsagar
      </p>
      <span className="absolute bottom-8 right-8 font-mono text-6xl tabular-nums text-muted md:text-8xl">
        {String(count).padStart(3, "0")}
      </span>
    </div>
  );
}
