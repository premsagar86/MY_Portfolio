"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduced = prefersReducedMotion();

    // In-page anchor navigation (works with or without Lenis).
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -1 });
      else el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      history.replaceState(null, "", id);
    };

    let lenis: Lenis | null = null;
    let onTick: ((t: number) => void) | null = null;

    if (!reduced) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      onTick = (t: number) => lenis!.raf(t * 1000);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      if (onTick) gsap.ticker.remove(onTick);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
