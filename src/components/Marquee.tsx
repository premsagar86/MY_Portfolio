import { marqueeTech } from "@/lib/data";

export function Marquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div className="border-y border-line bg-surface/50 py-6">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track">
          {items.map((tech, i) => (
            <span
              key={i}
              className="mx-8 flex items-center gap-8 font-display text-2xl font-medium text-muted md:text-3xl"
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
