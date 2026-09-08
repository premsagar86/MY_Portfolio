import { clsx, type ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => clsx(inputs);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Replace an element's text with per-word spans:
 *   <span class="rmask"><span class="rword">word</span></span>
 * Returns the array of `.rword` nodes to animate. SSR-safe (no-op without DOM).
 */
export function splitWords(el: HTMLElement): HTMLElement[] {
  const words = (el.textContent ?? "").trim().split(/\s+/).filter(Boolean);
  el.innerHTML = words
    .map((w) => `<span class="rmask"><span class="rword">${w}</span></span>`)
    .join(" ");
  return Array.from(el.querySelectorAll<HTMLElement>(".rword"));
}

export const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);
