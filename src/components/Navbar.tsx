"use client";

import { useEffect, useState } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["#home", ...nav.map((n) => n.href)];
    const sections = ids
      .map((id) => document.querySelector(id))
      .filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled && "border-b border-line bg-bg/70 backdrop-blur-xl",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
          <a
            href="#home"
            className="font-display text-lg font-bold tracking-tight"
          >
            EP<span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-xs tracking-wider text-muted transition-colors hover:text-text",
                  active === item.href && "text-accent",
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-line-strong px-4 py-1.5 font-mono text-xs tracking-wider text-text transition-colors hover:border-accent hover:text-accent"
            >
              Résumé
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={cn(
                "h-px w-6 bg-text transition-transform duration-300",
                menuOpen && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-text transition-transform duration-300",
                menuOpen && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
