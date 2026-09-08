"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import { education } from "@/lib/data";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  const scope = useRef<HTMLElement>(null);
  const edu = education[0]; // single entry — no Intermediate, no SSC

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-edu-line]", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.9,
        ease: "power3.inOut",
        scrollTrigger: { trigger: scope.current, start: "top 75%" },
      });
      gsap.from("[data-edu-node]", {
        scale: 0,
        duration: 0.5,
        ease: "back.out(2)",
        delay: 0.5,
        scrollTrigger: { trigger: scope.current, start: "top 75%" },
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="education" className="py-24 md:py-36">
      <Container>
        <SectionHeading index="04" title="Education" />
        <div className="relative pl-8">
          <span
            data-edu-line
            className="absolute left-[5px] top-2 h-full w-px bg-line-strong"
          />
          <span
            data-edu-node
            className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-display text-xl font-bold md:text-2xl">
              {edu.degree}
            </h3>
            <span className="font-mono text-sm text-accent">{edu.period}</span>
          </div>
          <p className="mt-1 text-muted">{edu.school}</p>
          <p className="mt-1 font-mono text-sm text-muted">GPA {edu.gpa}</p>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Relevant coursework
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {edu.coursework.map((c) => (
              <li
                key={c}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-text"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
