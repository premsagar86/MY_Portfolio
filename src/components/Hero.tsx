"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { gsap, useGSAP } from "@/lib/gsap";
import { splitWords, prefersReducedMotion } from "@/lib/utils";
import { profile } from "@/lib/data";
import { Container } from "@/components/Container";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  const scope = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const root = scope.current!;
      const words = root.querySelectorAll<HTMLElement>("[data-hero-name]");
      const targets: HTMLElement[] = [];
      words.forEach((w) => targets.push(...splitWords(w)));

      gsap.set(targets, { yPercent: 120 });
      const tl = gsap.timeline({ delay: 0.15 });
      tl.to(targets, {
        yPercent: 0,
        duration: 1,
        stagger: 0.06,
        ease: "expo.out",
      })
        .from(
          "[data-hero-fade]",
          { opacity: 0, y: 20, duration: 0.8, stagger: 0.1, ease: "power3.out" },
          "-=0.6",
        );

      gsap.to("[data-hero-photo]", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope },
  );

  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
  };
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section
      ref={scope}
      id="home"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="glow left-[-10%] top-[-10%] h-[500px] w-[500px]" />

      {/* left rail */}
      <div className="fixed bottom-0 left-6 z-30 hidden flex-col items-center gap-5 lg:flex">
        <a href={profile.github} target="_blank" rel="noopener" className="text-muted transition-colors hover:text-accent">
          GH
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener" className="text-muted transition-colors hover:text-accent">
          IN
        </a>
        <span className="h-24 w-px bg-line" />
      </div>
      {/* right rail */}
      <div className="fixed bottom-0 right-8 z-30 hidden flex-col items-center gap-6 lg:flex">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs tracking-widest text-muted transition-colors [writing-mode:vertical-rl] hover:text-accent"
        >
          {profile.email}
        </a>
        <span className="h-24 w-px bg-line" />
      </div>

      <Container className="relative z-10 grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p
            data-hero-fade
            className="font-mono text-xs tracking-[0.25em] text-accent"
          >
            {profile.role.toUpperCase()}
          </p>
          <h1 className="mt-4 font-display text-[15vw] font-bold leading-[0.92] tracking-tight md:text-[6.5vw]">
            <span data-hero-name className="block">
              Eedubilli
            </span>
            <span data-hero-name className="block text-muted">
              Premsagar
            </span>
          </h1>
          <p
            data-hero-fade
            className="mt-6 max-w-md text-base leading-relaxed text-muted"
          >
            {profile.tagline}
          </p>
          <div data-hero-fade className="mt-8 flex flex-wrap gap-4">
            <MagneticButton
              href="#work"
              className="bg-accent text-bg hover:bg-accent/90"
            >
              View Work
            </MagneticButton>
            <MagneticButton
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="border border-line-strong text-text hover:border-accent hover:text-accent"
            >
              Download CV
            </MagneticButton>
          </div>
          <p
            data-hero-fade
            className="mt-8 font-mono text-xs tracking-wider text-muted"
          >
            {profile.location} · {profile.phone}
          </p>
        </div>

        <div className="mx-auto w-full max-w-xs md:max-w-none" data-hero-photo>
          <div
            onMouseMove={tilt}
            onMouseLeave={resetTilt}
            className="grain relative aspect-[4/5] overflow-hidden rounded-[48%_48%_44%_44%/8%_8%_92%_92%] border border-line transition-transform duration-300 will-change-transform"
          >
            <Image
              src="/me.jpeg"
              alt="Eedubilli Premsagar"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 32vw"
              className="duotone object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
          </div>
        </div>
      </Container>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-muted"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
