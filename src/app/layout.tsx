import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { profile } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premsagar.vercel.app"),
  title: {
    default: "Eedubilli Premsagar — Full-Stack Developer",
    template: "%s — Eedubilli Premsagar",
  },
  description:
    "Full-Stack Developer building fast, secure web apps with React, Next.js, Node, MySQL, Redis and AWS.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Eedubilli Premsagar",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Eedubilli Premsagar — Full-Stack Developer",
    description:
      "Full-Stack Developer building fast, secure web apps with React, Next.js, Node and AWS.",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Full-Stack Developer",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressCountry: "IN",
  },
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-bg text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <ScrollProgress />
          <Cursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
