import { profile, quickFacts } from "@/lib/data";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <Container>
        <SectionHeading index="01" title="About" />
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              {profile.summary}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
              I care about scalable design, clean maintainable code, and shipping
              things end-to-end — from schema to deploy.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {quickFacts.map((f) => (
                <div key={f.label} className="bg-surface p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-text">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
