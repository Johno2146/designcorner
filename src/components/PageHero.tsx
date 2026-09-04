import type { ReactNode } from "react";

/* Consistent page header for interior pages */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-900/10 bg-gradient-to-b from-navy-50/60 to-white">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl hero-blob" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-navy-800/10 blur-3xl hero-blob" style={{ animationDelay: "-8s" }} />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <span className="hero-fade inline-block text-xs font-semibold uppercase tracking-widest text-accent-700">
          {eyebrow}
        </span>
        <h1 className="hero-fade-slow mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="hero-fade-slow mt-5 max-w-2xl text-lg text-gray-600" style={{ animationDelay: "0.12s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
