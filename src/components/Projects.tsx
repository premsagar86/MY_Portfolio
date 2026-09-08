"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import { projects } from "@/lib/data";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray<HTMLElement>("[data-project-row]").forEach((row) => {
        gsap.from(row.querySelector("[data-project-media]"), {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: row, start: "top 78%" },
        });
        gsap.from(row.querySelectorAll("[data-project-line]"), {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 72%" },
        });
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="work" className="py-24 md:py-36">
      <Container>
        <SectionHeading index="03" title="Selected Work" />
        <div className="space-y-28 md:space-y-40">
          {projects.map((p, i) => (
            <article
              key={p.title}
              data-project-row
              className={`grid gap-8 md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* media panel */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                data-cursor="view"
                className="group relative"
              >
                <a
                  href={p.live ?? p.code}
                  target="_blank"
                  rel="noopener"
                  className="block"
                >
                  <div
                    data-project-media
                    className="grain relative flex aspect-[16/11] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-2 to-surface p-6"
                  >
                    <span className="font-mono text-xs tracking-widest text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl font-bold leading-tight text-text md:text-3xl">
                      {p.title}
                    </span>
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg/60 font-mono text-xs tracking-[0.3em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      VIEW →
                    </span>
                  </div>
                </a>
              </motion.div>

              {/* copy */}
              <div>
                <p
                  data-project-line
                  className="font-mono text-xs tracking-widest text-accent"
                >
                  {p.live ? "LIVE PROJECT" : "PROJECT"}
                </p>
                <h3
                  data-project-line
                  className="mt-3 font-display text-2xl font-bold tracking-tight md:text-4xl"
                >
                  {p.title}
                </h3>
                <p
                  data-project-line
                  className="mt-4 max-w-md text-muted"
                >
                  {p.blurb}
                </p>
                <ul
                  data-project-line
                  className="mt-5 space-y-1.5 text-sm text-muted"
                >
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-accent">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <ul
                  data-project-line
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div data-project-line className="mt-6 flex gap-4 text-sm">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener"
                      className="border-b border-accent pb-0.5 text-accent transition-opacity hover:opacity-70"
                    >
                      Live ↗
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener"
                    className="border-b border-line-strong pb-0.5 text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    Code ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
