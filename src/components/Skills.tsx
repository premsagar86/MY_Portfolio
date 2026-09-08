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
          y: 20,
          duration: 0.5,
          stagger: 0.045,
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
        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              data-skill-group
              className="grid gap-5 border-t border-line pt-8 md:grid-cols-[220px_1fr]"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {group.title}
              </h3>
              <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
                {group.items.map((item) => {
                  const { icon: Icon, color } = getSkillMeta(item);
                  return (
                    <motion.li
                      key={item}
                      data-chip
                      whileHover={{
                        y: -4,
                        borderColor: `${color}80`,
                        boxShadow: `0 10px 40px -12px ${color}55`,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-surface p-3 text-center"
                    >
                      {Icon ? (
                        <Icon
                          aria-hidden
                          style={{ color }}
                          className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-110 md:h-10 md:w-10"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line-strong font-mono text-sm text-accent transition-transform duration-300 group-hover:scale-110 md:h-10 md:w-10"
                        >
                          {item.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()}
                        </span>
                      )}
                      <span className="text-[10px] leading-tight text-muted md:text-[11px]">
                        {item}
                      </span>
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
