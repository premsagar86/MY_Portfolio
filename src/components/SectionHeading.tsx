import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", className)}>
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm tracking-[0.2em] text-accent">
          {index}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
