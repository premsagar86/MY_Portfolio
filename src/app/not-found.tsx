import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-sm tracking-[0.3em] text-accent">404</p>
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
        Page not found
      </h1>
      <p className="max-w-sm text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="rounded-full border border-line-strong px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
      >
        Back home
      </Link>
    </div>
  );
}
