# S-Grade Portfolio Build Plan — Eedubilli Premsagar

## Context

`D:\Portfolio` now holds a fresh **Next.js 16 (App Router) + React 19 + TypeScript
+ Tailwind CSS v4** scaffold. Goal: an award-tier ("S-grade") personal portfolio
for **Eedubilli Premsagar, Full-Stack Developer**, built from the résumé PDF and
profile photo, using **GSAP** (scroll timelines) + **Motion** (micro-interactions)
+ **Lenis** (smooth scroll), a **React Hook Form + Zod** contact form, and
**Nodemailer** over Gmail SMTP.

Confirmed choices: Dark modern aesthetic · Gmail SMTP + App Password → inbox
`eedubillipremsagar@gmail.com` · GSAP + Motion split by job · npm · deploy to Vercel.

**Update on user request:**
- Raise the bar to *S-grade* (Awwwards/GSAP-showcase level) — a refreshed pass over
  GitHub repos + Awwwards/GSAP winners (2025–2026) is folded into the research below.
- **Education: keep only the B.Tech degree.** Intermediate (MPC) and SSC are
  **permanently excluded** — no data keys, no timeline entries for prior schooling.

Source résumé: `d:\RESUMES OF PREM SAGAR\EEDUBILLI_PREMSAGAR_Full_Stack_Developer_Resume.pdf`
Photo: `c:\Users\HP\OneDrive\Pictures\Screenshots 1\me.jpeg`

---

## Reference Research (what "S-grade" means here)

Studied award-winning / widely-cloned developer portfolios and the techniques
they share:

| Reference | What we borrow |
|---|---|
| **brittanychiang.com** (v4) | Numbered section eyebrows (`01. About`), fixed side rails for socials + vertical email, spotlight-follow cursor glow, restrained one-accent dark palette, in-view fade/slide |
| **leerob.io** (Vercel) | Ruthless content hierarchy, fast first paint, MDX-style project write-ups, minimal chrome |
| **Awwwards GSAP SOTD winners** (detailed in the 2025–2026 table below) | Preloader counter + curtain reveal, section-to-section transition wipes that feel like camera moves, GSAP `ScrollTrigger` pinning for the project showcase, kinetic oversized typography |
| **Aceternity / Magic UI patterns** | Tasteful micro-animations: magnetic buttons, gradient/spotlight cards, infinite marquee, text-generate-on-scroll |
| **Cassie Evans / GSAP showcase** | `SplitText`-style word/char masking, `matchMedia` + `prefers-reduced-motion` discipline, `gsap.context`/`useGSAP` cleanup |
| **Lenis (darkroom.engineering)** | Buttery smooth scroll synced to GSAP `ScrollTrigger` + rAF loop |

**GitHub repos studied (all free / open-source):**

| Repo | What we take |
|---|---|
| **`Naresh-Khatri/3d-portfolio`** (Next.js + TS + GSAP + Motion) | Section cadence and a real-world GSAP-vs-Motion split in a Next.js App Router project; skills-as-interaction idea |
| **`itsjwill/motion-primitives-website`** (110+ MIT React/Motion/GSAP components) | Openly-licensed implementations to adapt for the Spotlight card, Dock, infinite Marquee, and text-generate-on-scroll — the *reusable* stand-in for Aceternity/Magic UI patterns |
| **`fGiordi/portfolio-framer-motion`** (Next.js + GSAP + Lenis + Motion + Wrap Balancer) | Reference wiring of Lenis ↔ GSAP ↔ Motion in one app; balanced headline line-breaks |
| **`said7388/developer-portfolio`** (Next.js + Tailwind) | Clean conventional section structure + a solid metadata / SEO baseline |
| **`hprakash/portfolio-ideas`** (~6.3k★) · **`emmabostian/portfolios`** | Curated catalogs of layout / section patterns to sanity-check ours against |

**Awwwards / GSAP winners 2025–2026 (borrow the technique, not the look):**

| Site | Technique to borrow |
|---|---|
| **By-Kin** (Awwwards Developer Award) | Weighted smooth scroll; transitions that never call attention to themselves; editorial typography; restraint |
| **Iventions** (SOTD · CSSDA Website of the Month) | Spotlight-driven storytelling; GSAP pacing reveals so the page reads as a guided walk-through, not a grid; effects for atmosphere, not spectacle |
| **Mat Voyce** (GSAP Site of the Year nominee) | Kinetic typography on GSAP timelines — letters stretch / recombine on scroll — without hurting readability |
| **Uncommon Studio** (SOTD · Developer Award) | GSAP section transitions that feel like camera moves; strategic grid breaks; performance discipline on art-directed pages |
| **Minh Pham** (SOTD · dev score 7.77) | A GSAP motion system layered over 3D framing for project work; taste + technical execution in balance |
| **Valentin Gassend** (Honorable Mention) | Immersive, cohesive motion identity with GSAP + smooth UI/UX |

**Three non-negotiables every winner converges on** — the yardstick this build is
measured against:
1. **Art direction** — a specific point of view that survives with animation *off*.
2. **Directed motion** — every transition is choreographed and carries narrative
   meaning; the craft lives *between* states, not on the pages themselves.
3. **Performance** — hold ~60fps on a mid-range phone; QA with **4× CPU slowdown +
   Fast 3G** in DevTools, never just a fast desktop.

> Aceternity / Magic UI remain *inspiration only* (source-available, not freely
> reusable); ship the equivalents from `motion-primitives` (MIT) instead.

**Reference links** (open these while building):

- GitHub repos: `github.com/Naresh-Khatri/3d-portfolio` ·
  `github.com/itsjwill/motion-primitives-website` ·
  `github.com/fGiordi/portfolio-framer-motion` ·
  `github.com/said7388/developer-portfolio` ·
  `github.com/hprakash/portfolio-ideas` · `github.com/emmabostian/portfolios`
- Inspiration galleries: `awwwards.com/websites/gsap/` ·
  `awwwards.com/websites/winner_category_portfolio/` ·
  `github.com/topics/developer-portfolio`
- Award-winner technique breakdown (By-Kin, Iventions, Mat Voyce, Uncommon Studio,
  Minh Pham): `hontran.dev/blog/best-award-winning-websites-2026`
- Canonical craft refs: `brittanychiang.com` · `leerob.io` ·
  `lenis.darkroom.engineering` · GSAP docs `gsap.com/docs/v3/`

**S-grade feature set adopted:**
1. **Lenis smooth scroll** driving GSAP `ScrollTrigger` (single rAF loop, disabled under reduced-motion).
2. **Preloader**: monospace counter `00 → 100` + name flash, then a curtain wipe that hands off to the hero reveal.
3. **Custom cursor** (pointer: fine only): dot + lagging ring, grows on interactive elements, shows a "View" label over project media. **Magnetic** effect on primary buttons + nav.
4. **Kinetic hero**: oversized name in display type, per-word mask reveal (letters may stretch/recombine on the reveal, à la Mat Voyce), scroll-parallax; photo with a dark duotone + grain, subtle pointer-tilt. All motion `prefers-reduced-motion`-gated.
5. **Numbered section system**: monospace eyebrows `01 — ABOUT`, thin rules, generous whitespace; a **scroll-progress bar** + current-section indicator.
6. **Infinite marquee** of the tech stack between hero and about.
7. **Project showcase**: pinned/sticky `ScrollTrigger` sequence — large alternating numbered rows, `clip-path` image reveal on enter, hover lift + cursor "View", Live / Code links.
8. **"Camera-move" section transitions** between major sections (accent panel sweep that reads like a camera cut, à la Uncommon Studio) — short, eased, reduced-motion-safe.
9. **Footer**: full-bleed "Let's build something" CTA, **live Vizag local time (IST)** ticking, socials, back-to-top.
10. **Craft details**: real `focus-visible` rings, keyboard-navigable, semantic landmarks, `next/image`, self-hosted fonts, JSON-LD, OG image, Lighthouse ≥ 95.
11. **Art direction holds with motion off**: dark palette, fluid type scale, numbered-section system and whitespace must read as deliberate with *every* animation disabled — this is also the reduced-motion acceptance bar.
12. **Performance budget**: 60fps target on mid-range mobile; QA under 4× CPU throttle + Fast 3G; decorative canvas/WebGL stays **out of scope for v1** to protect Lighthouse ≥ 95 (grain + duotone + radial glow already carry the hero's atmosphere).

---

## Tech Stack

- **Next.js 16** (App Router, Turbopack dev), **React 19**, **TypeScript**, **Tailwind CSS v4** (`@theme` in `globals.css`)
- **gsap** + **@gsap/react** (`useGSAP`) + `ScrollTrigger` — scroll-driven animation, pinning, reveals. Plugins registered once in `src/lib/gsap.ts`. Hero word-mask uses the `splitWords()` util in `lib/utils.ts` (SSR-safe); GSAP `SplitText` is bundled/free and an optional upgrade.
- **motion** (`motion/react`) — hover/tap, mobile menu, form feedback, magnetic buttons, cursor
- **lenis** — smooth scroll, wired to `ScrollTrigger.update` + `gsap.ticker`
- **react-hook-form** + **zod** + `@hookform/resolvers` — contact form + shared client/server schema
- **nodemailer** (+ `@types/nodemailer`) — email in a Node route handler
- **react-icons** — official brand logos for Skills (Simple Icons `si`, plus `FaJava` / `FaAws` where Simple Icons lacks a mark), each in its brand color via a color map
- **clsx** — conditional class names
- `next/font/google` — Space Grotesk (display) · Inter (body) · JetBrains Mono (eyebrows/labels)

---

## Project Structure

```
D:\Portfolio\
├─ public\
│  ├─ me.jpeg                          # copied from the screenshot
│  ├─ EEDUBILLI_PREMSAGAR_Resume.pdf   # copied résumé → "Download CV"
│  ├─ grain.svg / noise texture
│  └─ og.png (or opengraph-image.tsx generated)
├─ src\
│  ├─ app\
│  │  ├─ layout.tsx                    # fonts, metadata, JSON-LD, <SmoothScroll> <Cursor> <Navbar> <Footer>
│  │  ├─ page.tsx                      # composes sections
│  │  ├─ globals.css                   # Tailwind v4 @theme tokens + grain/glow/marquee utils
│  │  ├─ not-found.tsx
│  │  ├─ opengraph-image.tsx           # generated OG card (next/og)
│  │  ├─ icon.tsx                      # generated monogram favicon (next/og)
│  │  └─ api\contact\route.ts          # runtime='nodejs'; POST → zod → nodemailer
│  ├─ components\
│  │  ├─ providers\SmoothScroll.tsx    # Lenis + GSAP ticker bridge  ('use client')
│  │  ├─ Preloader.tsx  Cursor.tsx  MagneticButton.tsx
│  │  ├─ Navbar.tsx  MobileMenu.tsx  ScrollProgress.tsx  Footer.tsx
│  │  ├─ SectionHeading.tsx  Container.tsx  Reveal.tsx   # Reveal = Motion whileInView wrapper
│  │  ├─ Marquee.tsx
│  │  ├─ Hero.tsx  About.tsx  Skills.tsx  Projects.tsx
│  │  ├─ Education.tsx  Certifications.tsx  Contact.tsx
│  ├─ lib\
│  │  ├─ data.ts        # ALL résumé content, typed — single source of truth
│  │  ├─ skills.ts      # skill → { label, icon, brandColor, category }
│  │  ├─ validation.ts  # zod contactSchema (form + route import this)
│  │  ├─ mailer.ts      # nodemailer transporter factory
│  │  ├─ gsap.ts        # registerPlugin(ScrollTrigger, useGSAP) once — client-only re-export
│  │  └─ utils.ts       # cn(), prefersReducedMotion(), splitWords()
│  └─ hooks\useLocalTime.ts            # ticking IST clock for the footer
├─ .env.local.example
├─ .env.local            # gitignored — you fill in
├─ README.md
└─ plan.md               # this file
```

---

## Content Mapping (résumé → sections)

**0. Preloader** — counter `00–100`, name flash, curtain wipe.

**1. Hero** (`#home`) — "Eedubilli Premsagar", "Full-Stack Developer", one-line
pitch from the summary. CTAs: *View Work* / *Download CV* (magnetic). Fixed side
rails (desktop): GitHub `github.com/eedubillipremsagar`, LinkedIn
`linkedin.com/in/eedubilli-premsagar`, email, + vertical email on the right.
"Vizag, India · +91 8688024148". Photo (`me.jpeg`) in an arched frame, dark
duotone + grain, top crop, pointer-tilt. GSAP per-word mask reveal + scroll parallax.

**2. Marquee** — infinite scroll of the headline tech (React · Next.js · Node ·
Express · MySQL · Redis · Docker · AWS · TypeScript …).

**3. About** (`#about`) — condensed summary paragraph (Motion text-reveal on
scroll). Quick-facts grid: location Vizag · open to **SDE / Full-Stack** roles ·
spoken languages **Telugu · English · Hindi** · currently B.Tech CSE @ Raghu
Engineering College.

**4. Skills** (`#skills`) — grouped exactly as the résumé, each entry = **official
logo + label chip**, GSAP `ScrollTrigger` staggered reveal per group, Motion hover
(scale + brand-color glow):
- **Languages:** Python, Java, JavaScript
- **Frontend:** React.js, Next.js, HTML5, CSS3, Tailwind CSS, React Router, React Hook Form
- **Backend:** Node.js, Express.js, REST APIs, JWT Authentication, WebSocket APIs, Prisma
- **Database & Caching:** MySQL, Redis
- **AWS:** Lambda, API Gateway, DynamoDB, S3, IAM, CloudWatch
- **Deployment / Cloud Hosting:** Vercel, AWS Amplify, Railway
- **Data Analysis:** pandas, NumPy, Matplotlib
- **Tools:** Git, GitHub, Docker, Postman, VS Code
Entries without an official mark (REST APIs, JWT, WebSocket APIs, API Gateway,
IAM, CloudWatch, React Router) fall back to the closest Simple Icon
(`jsonwebtokens`, `reactrouter`) or a generic `FaAws` / outline icon — mapping
lives in `src/lib/skills.ts`.

**5. Projects** (`#work`) — pinned `ScrollTrigger` showcase, 4 large numbered rows
from `data.ts`:
- **Full Stack Authentication System** — React/Node/Express/MySQL/Redis/Docker/JWT/AWS. Highlights: access+refresh tokens, rotation, silent auth, HttpOnly cookies, Redis OTP + refresh-token blocklist, bcrypt, Zod, CORS, rate-limit, login-attempt lockout, Dockerized. *Code* → GitHub profile (swap in repo URL later).
- **Forge Digital — Agency Portfolio (curate-x)** — Next.js/React/Tailwind — Live `https://curate-x.vercel.app/`. Three-tier pricing, Discovery→Design→Build→Delivery workflow, service detail pages, quote-request flow.
- **TechSpark 2026 — Hackathon / Ideathon Platform** — React/Tailwind/Node/Express/MySQL — Live `https://tech-spark-zeta.vercel.app/`. Event details, tracks, registration flow + REST API.
- **Data Analysis with Python** — pandas/NumPy/Matplotlib — dataset cleaning, vectorized ops, Matplotlib trend visualizations.
Each: `clip-path` media reveal, tag list, hover lift + cursor "View", Live / Code buttons.

**6. Education** (`#education`) — **single entry only**:
> **B.Tech, Computer Science and Engineering** — Raghu Engineering College,
> Dakamarri, Visakhapatnam · **2024 – 2028** · GPA **7.5**
Plus a **Relevant coursework** chip row (from the résumé summary): Data
Structures, Algorithms, OOP, Operating Systems, DBMS, Computer Networks.
GSAP line-draw + node pop on scroll.

*Data rule:* `data.ts` `education` is an array with **exactly one object** (the
B.Tech above) + the coursework chips. **No `intermediate` / `ssc` / `tenth` /
`twelfth` keys anywhere** in `data.ts`, and `Education.tsx` renders a single node —
no timeline list of prior schooling. Intermediate (MPC) and SSC are excluded by
user request.

**7. Certifications & Achievements** — "AI Agents — B.J. Swaroop" badge card
(shown as-is; no issuer link in résumé).

**8. Contact** (`#contact`) — React Hook Form + Zod fields: name, email, subject
(optional), message + hidden honeypot. Client validation → `POST /api/contact` →
Nodemailer → Gmail SMTP → inbox. Motion submit states (idle / sending / success
check / error shake). Also shows direct email, phone, GitHub, LinkedIn.

**9. Navbar / Footer** — fixed navbar, blur bg after scroll, active-section
highlight (IntersectionObserver), *Résumé* button, Motion mobile drawer. Footer:
full-bleed CTA, **live Vizag IST clock**, socials, "Built with Next.js · GSAP ·
Motion · Lenis", back-to-top.

---

## Animation Split

**GSAP + ScrollTrigger + `useGSAP`** (all inside `gsap.matchMedia`, fully
disabled under `prefers-reduced-motion`):
- Preloader counter + curtain
- Hero per-word mask reveal (via `splitWords()` in `lib/utils.ts`, not GSAP `SplitText`) + scroll parallax
- Section-heading reveals; section transition wipes; scroll-progress bar
- Skills staggered group reveals
- Projects pinned showcase + `clip-path` media reveals
- Education timeline line-draw
- Navbar bg state + active link

**Motion (`motion/react`)**:
- Custom cursor, magnetic buttons/nav
- Card / chip hover + tap, gradient spotlight on project + skill cards
- Mobile menu drawer + hamburger morph
- Contact form field focus + submit state machine
- `Reveal` wrapper (`whileInView` fade/slide) for plain text blocks
- Photo pointer-tilt

**Lenis**: one `requestAnimationFrame` loop; `lenis.on('scroll', ScrollTrigger.update)`;
`gsap.ticker.add((t)=>lenis.raf(t*1000))`; `gsap.ticker.lagSmoothing(0)`. Skipped
entirely when reduced-motion is set.

**References for the wiring**: cross-check the Lenis ↔ GSAP ↔ Motion setup against
`fGiordi/portfolio-framer-motion`; adapt the reusable primitives (Spotlight card,
Dock, Marquee, text-generate-on-scroll) from `itsjwill/motion-primitives-website` (MIT).

---

## Reference Code Snippets (verified against installed versions)

Cross-checked against the bundled Next 16 docs (`node_modules/next/dist/docs/`) and
the *actually installed* packages: Next **16.3.4** · React **19.2.8** · Tailwind
**v4.3.3** · gsap **3.15.0** · @gsap/react **2.1.2** · motion **13.2.0** · lenis
**1.3.26** · zod **4.5.4** · react-hook-form **7.87** · @hookform/resolvers **5.9.1**
· nodemailer **10.0.1**.

Key version notes baked into the snippets below:
- **Turbopack** is the default in 16 (`next dev` / `next build`, no flag). No webpack config.
- **Scroll**: Next 16 no longer overrides CSS `scroll-behavior` — do **not** set
  `scroll-behavior: smooth` in CSS (it fights Lenis); anchor jumps go through `lenis.scrollTo()`.
- **GSAP `SplitText`** is bundled/free but we use a tiny SSR-safe `splitWords()` util
  instead (no license question, smaller). SplitText stays an optional upgrade.
- **Zod v4**: top-level `z.email()` (not the deprecated `z.string().email()`).
- **motion**: import from `motion/react`. **@hookform/resolvers**: `.../zod` subpath.
- **`next/font`**: Space Grotesk / Inter / JetBrains Mono are variable → no `weight`.
- **`layout.tsx`** keeps the scaffold's Next 16 `LayoutProps<"/">` signature.
- **`ImageResponse`** imports from `next/og`. Root `opengraph-image` / `icon` take no params.
- **nodemailer 10** ships no types → `@types/nodemailer` (devDep) provides them; bump if TS complains.

### `src/lib/utils.ts`
```ts
import { clsx, type ClassValue } from "clsx";
export const cn = (...i: ClassValue[]) => clsx(i);
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/** wrap each word: <span class="rmask"><span class="rword">…</span></span> */
export function splitWords(el: HTMLElement) {
  const words = (el.textContent ?? "").trim().split(/\s+/);
  el.innerHTML = words
    .map((w) => `<span class="rmask"><span class="rword">${w}</span></span>`)
    .join(" ");
  return Array.from(el.querySelectorAll<HTMLElement>(".rword"));
}
```

### `src/lib/gsap.ts`  (register plugins once, client-only)
```ts
"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export { gsap, ScrollTrigger, useGSAP };
```

### `src/components/providers/SmoothScroll.tsx`  (Lenis ↔ GSAP bridge)
```tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const onTick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(onTick); lenis.destroy(); };
  }, []);
  return <>{children}</>;
}
```

### `src/components/Reveal.tsx`  (Motion `whileInView` wrapper)
```tsx
"use client";
import { motion, useReducedMotion } from "motion/react";
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const rm = useReducedMotion();
  return (
    <motion.div
      initial={rm ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

### `src/components/MagneticButton.tsx`
```tsx
"use client";
import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
export function MagneticButton({ children, className, ...p }: React.ComponentProps<"button">) {
  const ref = useRef<HTMLButtonElement>(null);
  const rm = useReducedMotion();
  const onMove = (e: React.MouseEvent) => {
    if (rm || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.transform =
      `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <motion.button ref={ref} onMouseMove={onMove} onMouseLeave={reset}
      className={className} style={{ transition: "transform .3s cubic-bezier(.22,1,.36,1)" }} {...p}>
      {children}
    </motion.button>
  );
}
```

### Hero mask reveal  (inside `Hero.tsx`)
```tsx
"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { splitWords, prefersReducedMotion } from "@/lib/utils";
// ...
const scope = useRef<HTMLElement>(null);
useGSAP(() => {
  if (prefersReducedMotion()) return;
  const h1 = scope.current!.querySelector<HTMLElement>("[data-hero-name]")!;
  const words = splitWords(h1);
  gsap.set(words, { yPercent: 120 });
  gsap.to(words, { yPercent: 0, duration: 1, stagger: 0.08, ease: "expo.out", delay: 0.2 });
  gsap.to("[data-hero-photo]", {
    yPercent: -12, ease: "none",
    scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: true },
  });
}, { scope });
```

### Projects pinned showcase  (inside `Projects.tsx`)
```tsx
useGSAP(() => {
  if (prefersReducedMotion()) return;
  const rows = gsap.utils.toArray<HTMLElement>("[data-project-row]");
  rows.forEach((row) => {
    gsap.from(row.querySelector("[data-project-media]"), {
      clipPath: "inset(100% 0 0 0)", duration: 1, ease: "power4.out",
      scrollTrigger: { trigger: row, start: "top 75%" },
    });
  });
  ScrollTrigger.create({
    trigger: "[data-projects]", start: "top top",
    end: () => "+=" + rows.length * 300, pin: "[data-projects-sticky]", scrub: true,
  });
}, { scope });
```

### `src/lib/validation.ts`  (Zod v4 — shared by form + route)
```ts
import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.email("Enter a valid email"),
  subject: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Message is too short").max(3000),
  company: z.string().max(0).optional(), // honeypot: must stay empty
});
export type ContactInput = z.infer<typeof contactSchema>;
```

### `src/lib/mailer.ts`
```ts
import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", port: 465, secure: true,
  auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
});
```

### `src/app/api/contact/route.ts`
```ts
export const runtime = "nodejs";
import { contactSchema } from "@/lib/validation";
import { transporter } from "@/lib/mailer";

const hits = new Map<string, { n: number; t: number }>();
function limited(ip: string) {
  const now = Date.now(), e = hits.get(ip);
  if (!e || now - e.t > 60_000) { hits.set(ip, { n: 1, t: now }); return false; }
  e.n++; return e.n > 5;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "local";
  if (limited(ip)) return Response.json({ ok: false, error: "Too many requests" }, { status: 429 });
  const parsed = contactSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ ok: false, error: "Invalid input" }, { status: 400 });
  const { name, email, subject, message, company } = parsed.data;
  if (company) return Response.json({ ok: true }); // silently drop bots
  try {
    await transporter.sendMail({
      from: `Portfolio <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO, replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Message from ${name}`,
      text: `${name} <${email}>\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }
}
```

### Contact form  (`Contact.tsx` — RHF + zodResolver + submit state machine)
```tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactInput } from "@/lib/validation";

type Status = "idle" | "sending" | "success" | "error";
export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const { register, handleSubmit, reset, formState: { errors } } =
    useForm<ContactInput>({ resolver: zodResolver(contactSchema) });
  const onSubmit = async (data: ContactInput) => {
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
      });
      const j = await r.json();
      setStatus(j.ok ? "success" : "error");
      if (j.ok) reset();
    } catch { setStatus("error"); }
  };
  // render: fields via {...register("name")} + {errors.name?.message}; hidden "company";
  // submit button label / animation keyed off `status`.
}
```

### `src/hooks/useLocalTime.ts`  (ticking IST clock, hydration-safe)
```ts
"use client";
import { useEffect, useState } from "react";
export function useLocalTime() {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t; // render nothing until non-null → no SSR mismatch
}
```

### `src/app/opengraph-image.tsx`
```tsx
import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: 80, background: "#08080a", color: "#ededed",
        fontSize: 64, fontWeight: 700 }}>
        <div style={{ color: "#c8ff2d", fontSize: 28, letterSpacing: 4 }}>FULL-STACK DEVELOPER</div>
        <div>Eedubilli Premsagar</div>
      </div>
    ),
    { ...size },
  );
}
```

### `src/app/icon.tsx`  (monogram favicon)
```tsx
import { ImageResponse } from "next/og";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center",
      justifyContent: "center", background: "#08080a", color: "#c8ff2d", fontSize: 20, fontWeight: 700 }}>P</div>,
    { ...size },
  );
}
```

### `src/app/globals.css`  (replaces the scaffold `@theme` block)
```css
@import "tailwindcss";

@theme {
  --color-bg: #08080a;
  --color-surface: #101013;
  --color-line: rgba(255, 255, 255, 0.08);
  --color-text: #ededed;
  --color-muted: #9a9aa2;
  --color-accent: #c8ff2d;
  --font-display: var(--font-space-grotesk);
  --font-sans: var(--font-inter);
  --font-mono: var(--font-jetbrains-mono);
}
body { background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.rmask { overflow: hidden; display: inline-block; }
.rword { display: inline-block; will-change: transform; }
/* NOTE: no `scroll-behavior: smooth` here — Lenis owns smooth scroll. */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

### `src/app/layout.tsx`  (fonts + metadata + JSON-LD + providers)
```tsx
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://premsagar.vercel.app"), // TODO: real domain
  title: "Eedubilli Premsagar — Full-Stack Developer",
  description: "Full-Stack Developer building fast, secure web apps with React, Next.js, Node and AWS.",
  openGraph: { title: "Eedubilli Premsagar — Full-Stack Developer", type: "website" },
  twitter: { card: "summary_large_image" },
};

const personLd = {
  "@context": "https://schema.org", "@type": "Person", name: "Eedubilli Premsagar",
  jobTitle: "Full-Stack Developer",
  address: { "@type": "PostalAddress", addressLocality: "Visakhapatnam", addressCountry: "IN" },
  sameAs: ["https://github.com/eedubillipremsagar", "https://linkedin.com/in/eedubilli-premsagar"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
```

### `src/lib/data.ts`  (shape + single-education rule)
```ts
export const profile = {
  name: "Eedubilli Premsagar", role: "Full-Stack Developer",
  location: "Visakhapatnam, India", phone: "+91 8688024148",
  email: "eedubillipremsagar@gmail.com",
  github: "https://github.com/eedubillipremsagar",
  linkedin: "https://linkedin.com/in/eedubilli-premsagar",
  languages: ["Telugu", "English", "Hindi"],
} as const;

// EXACTLY ONE degree. No intermediate / ssc / tenth / twelfth keys anywhere.
export const education = [{
  degree: "B.Tech, Computer Science and Engineering",
  school: "Raghu Engineering College, Dakamarri, Visakhapatnam",
  period: "2024 – 2028", gpa: "7.5",
  coursework: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
}] as const;

export const projects = [ /* 4 rows from §5 — each { title, stack[], live?, code, highlights[] } */ ];
export const certifications = [{ title: "AI Agents", issuer: "B.J. Swaroop" }];
```

---

## Nodemailer / Contact API

`src/app/api/contact/route.ts`:
- `export const runtime = 'nodejs'` (Nodemailer is not Edge-compatible; also opts out of static prerender)
- `POST`: parse JSON → validate with shared `contactSchema` → reject if honeypot
  filled → best-effort in-memory IP rate-limit → `sendMail` → return
  `Response.json({ ok: true })` or `{ ok: false, error }` with proper status codes
- `src/lib/mailer.ts`: `nodemailer.createTransport({ host: 'smtp.gmail.com',
  port: 465, secure: true, auth: { user: SMTP_USER, pass: SMTP_PASS } })`
- Mail: `from: "Portfolio <SMTP_USER>"`, `to: CONTACT_TO`, `replyTo:` submitter
  email, text + minimal HTML template

`.env.local.example`:
```
SMTP_USER=eedubillipremsagar@gmail.com
SMTP_PASS=your_16_char_google_app_password   # Google Account → Security → 2-Step Verification → App passwords
CONTACT_TO=eedubillipremsagar@gmail.com
```
README documents creating the App Password and adding the same three vars in
Vercel → Project → Settings → Environment Variables.

---

## Theme / Design Tokens (Tailwind v4 `@theme` in `globals.css`)

- `--color-bg: #08080a`, `--color-surface: #101013`, `--color-line: rgba(255,255,255,.08)`
- `--color-text: #ededed`, `--color-muted: #9a9aa2`
- `--color-accent: #c8ff2d` (electric lime — final tweak during build, one token)
- Fonts: `--font-display` Space Grotesk · `--font-sans` Inter · `--font-mono` JetBrains Mono
- Fluid type scale via `clamp()`; SVG grain overlay + radial accent glow behind hero
- `rounded-2xl` cards, hairline borders; responsive at 360 / 768 / 1280 / 1536
- Global `prefers-reduced-motion` block that neutralizes transitions/animations
  (see the `globals.css` snippet above)
- **No CSS `scroll-behavior: smooth`** — Lenis owns smooth scroll (Next 16 no longer
  overrides it); in-page anchor nav calls `lenis.scrollTo(target)`

---

## SEO / A11y / Perf

- `metadata` (title, description, `metadataBase`, OpenGraph, Twitter, theme-color),
  generated `opengraph-image.tsx`, JSON-LD `Person` via a `<script type="application/ld+json">`
- Semantic landmarks, skip link, visible `focus-visible` rings, AA contrast, icons
  `aria-hidden` with real text labels, form labels + `aria-describedby` errors
- `prefers-reduced-motion` disables Lenis + GSAP + Motion transforms
- `next/image` for the photo; self-hosted fonts; lazy-mount heavy sections
- Target Lighthouse ≥ 95 (perf / a11y / best-practices / SEO)

---

## Execution Steps

1. **Done** — Next.js 16 scaffold created and moved to `D:\Portfolio` root.
2. **Done** — deps installed (`gsap @gsap/react motion react-hook-form zod @hookform/resolvers nodemailer react-icons lenis clsx`, `-D @types/nodemailer`). Verified present in `package.json`; `@types/nodemailer` is `^8.0.1` vs nodemailer 10 — bump to latest if `npm run build` flags a types mismatch.
3. **Done** — `public/me.jpeg`, `public/EEDUBILLI_PREMSAGAR_Resume.pdf`, `public/grain.svg` added; create-next-app boilerplate SVGs + `favicon.ico` removed.
4. **Done** — `globals.css` (@theme tokens, fonts, `.grain`/`.glow`/`.marquee-track`/`.duotone`/`.rmask`/`.rword`, reduced-motion block); `layout.tsx` + `page.tsx` rewritten.
5. **Done** — `lib/{data,skills,validation,mailer,gsap,utils}.ts`, `hooks/useLocalTime.ts`.
6. **Done** — `providers/SmoothScroll`, `Cursor`, `MagneticButton`, `Reveal`, `Container`, `SectionHeading`, `ScrollProgress`, `Navbar`+`MobileMenu`, `Footer`, `Preloader`.
7. **Done** — Preloader → Hero → Marquee → About → Skills → Projects → Education (single node) → Certifications → Contact, composed in `page.tsx`.
8. **Done** — `api/contact/route.ts` (zod → honeypot → per-IP rate-limit → nodemailer) + `Contact.tsx` form `fetch` + idle/sending/success/error state machine.
9. **Done** — GSAP: preloader counter+curtain, hero `splitWords` mask + photo parallax, skills staggered group reveals, projects `clip-path` media reveals, education line-draw + node pop. Motion: cursor, magnetic buttons, chip/card hover, mobile drawer, `Reveal`, photo tilt, scroll-progress. All gated on `prefersReducedMotion()`.
10. **Done** — metadata (title template, OG, Twitter, JSON-LD Person, `metadataBase`), `opengraph-image.tsx`, `icon.tsx` monogram, `not-found.tsx`, skip link. Responsive breakpoints wired (360/768/1280/1536) — visual QA at 4 sizes still pending (browser MCP was offline).
11. **Done** — `.env.local.example` written; `.gitignore` already covers `.env*`; `README.md` rewritten.
12. **Verified**: `npm run build` — 0 TS/ESLint errors, static export of `/`, `/icon`, `/opengraph-image`; `npx eslint src` clean; `/api/contact` tested (400 invalid, 200+`{ok:true}` honeypot, 429 rate-limit, 500 when SMTP env absent); rendered HTML has all 7 sections, JSON-LD, skip link, and no Intermediate/SSC content; `/EEDUBILLI_PREMSAGAR_Resume.pdf` serves 200. **Pending**: real Gmail App Password in `.env.local` + a live send test; 4-breakpoint screenshots + Lighthouse; first commit (left for you).

---

## Verification

- `npm run dev` → `http://localhost:3000`: preloader plays once; Lenis smooth
  scroll active; every section renders; GSAP reveals + pinned projects fire;
  custom cursor + magnetic buttons work on desktop; **skill logos show in brand
  colors**; *Download CV* serves the PDF; framed photo reads well on dark.
- OS "reduce motion" ON → no Lenis, no transforms, content fully visible, no counter.
- Keyboard-only pass: visible focus, logical order, mobile menu escapable.
- Contact form: fill `.env.local` with a real Gmail App Password → submit a test
  message → **confirm delivery** to `eedubillipremsagar@gmail.com`; check
  validation errors (empty / bad email), honeypot rejection, network-error path.
- `npm run build` passes with zero TypeScript/ESLint errors; `npm run start` smoke test.
- Optional: drive Chrome via the browser MCP to screenshot 360 / 768 / 1280 / 1536
  and run Lighthouse; send images.
- Deploy: push to GitHub → import in Vercel → add `SMTP_USER` / `SMTP_PASS` /
  `CONTACT_TO` → redeploy.

---

## Assumptions / Open Items

- Per-project GitHub repo links aren't in the résumé → *Code* buttons point to
  `github.com/eedubillipremsagar`; update per-repo later.
- `me.jpeg` has a busy background → handled with a dark duotone overlay + top
  crop + grain. A clean cut-out would need a background-removed PNG (not automatic).
- "AI Agents — B.J. Swaroop" shown as-is (no date / issuer / link available).
- Contact rate-limiting is best-effort in-memory only (resets per serverless
  invocation) — fine for a portfolio.
- Accent color + display font are single-token changes if you want a different look.
- Education shows **only** the B.Tech degree (+ coursework chips). Intermediate
  (MPC) and SSC are **permanently excluded** per your request — not "omitted for
  now"; no data keys or component branches for prior schooling.
