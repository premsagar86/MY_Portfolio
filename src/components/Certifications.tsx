import { certifications } from "@/lib/data";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-36">
      <Container>
        <SectionHeading index="05" title="Certifications & Achievements" />
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="grain relative flex items-center gap-4 overflow-hidden rounded-2xl border border-line bg-surface p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent font-mono text-accent">
                  ✦
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">{c.title}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
