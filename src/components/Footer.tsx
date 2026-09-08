"use client";

import { useLocalTime } from "@/hooks/useLocalTime";
import { profile } from "@/lib/data";
import { Container } from "@/components/Container";

export function Footer() {
  const time = useLocalTime();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <Container className="py-20 md:py-28">
        <a
          href="#contact"
          className="block font-display text-[13vw] font-bold leading-[0.95] tracking-tight text-text transition-colors hover:text-accent md:text-[7vw]"
        >
          Let&rsquo;s build
          <br />
          something.
        </a>

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs tracking-wider">
            <a href={profile.github} target="_blank" rel="noopener" className="hover:text-text">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="hover:text-text">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-text">
              Email
            </a>
            <span className="text-muted/70">
              Vizag, India — {time ?? "--:--:--"} IST
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs tracking-wider">
            <span className="text-muted/70">
              Built with Next.js · GSAP · Motion · Lenis
            </span>
            <a href="#home" className="hover:text-text">
              Back to top ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
