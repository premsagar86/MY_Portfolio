import { marqueeTech } from "@/lib/data";

export function Marquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div className="border-y border-line bg-surface/50 py-6">
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track">
          {items.map((tech, i) => (
            <span
              key={i}
              className="mx-8 inline-flex shrink-0 items-center gap-6 whitespace-nowrap font-display text-2xl font-medium text-muted md:text-3xl"
            >
              {tech}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
