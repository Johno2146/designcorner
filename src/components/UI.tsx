import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/* CTA button that looks like a link but routes to an internal page */
export function CtaLink({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 will-change-transform active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-accent-800 text-white shadow-sm shadow-accent-800/30 hover:-translate-y-0.5 hover:bg-accent-900 hover:shadow-md hover:shadow-accent-800/40"
      : "bg-white text-navy-900 ring-1 ring-navy-900/15 hover:-translate-y-0.5 hover:bg-navy-50 hover:shadow-md";
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

/* Plain anchor CTA for external links (tel:, mailto:, wa.me) */
export function CtaAnchor({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 will-change-transform active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-accent-800 text-white shadow-sm shadow-accent-800/30 hover:-translate-y-0.5 hover:bg-accent-900 hover:shadow-md hover:shadow-accent-800/40"
      : "bg-white text-navy-900 ring-1 ring-navy-900/15 hover:-translate-y-0.5 hover:bg-navy-50 hover:shadow-md";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

/* Eyebrow label + heading + sub copy, used to open sections */
export function SectionIntro({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-700">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
