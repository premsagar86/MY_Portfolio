"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import { skillGroups } from "@/lib/data";
import { getSkillMeta } from "@/lib/skills";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray<HTMLElement>("[data-skill-group]").forEach((group) => {
        gsap.from(group.querySelectorAll("[data-chip]"), {
          opacity: 0,
          y: 16,
          duration: 0.5,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 82%" },
        });
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="skills" className="py-24 md:py-36">
      <Container>
        <SectionHeading index="02" title="Skills" />
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              data-skill-group
              className="grid gap-4 border-t border-line pt-6 md:grid-cols-[220px_1fr]"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => {
                  const { icon: Icon, color } = getSkillMeta(item);
                  return (
                    <motion.li
                      key={item}
                      data-chip
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 0 24px -6px ${color}66`,
                        borderColor: `${color}80`,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm text-text"
                    >
                      {Icon ? (
                        <Icon aria-hidden style={{ color }} className="h-4 w-4 shrink-0" />
                      ) : (
                        <span aria-hidden className="text-accent">
                          ▹
                        </span>
                      )}
                      {item}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
