import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { NAV } from "~/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/90 backdrop-blur">
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="Design Corner"
            width={132}
            height={100}
            className="h-[3.75rem] w-auto transition-transform duration-200 hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="nav-link text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-navy-900"
              activeProps={{ className: "is-active text-navy-900 font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-lg bg-accent-800 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-accent-800/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-900 hover:shadow-md hover:shadow-accent-800/40 active:scale-[0.97]"
          >
            Get a Free Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy-900 md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="menu-enter border-t border-navy-900/10 bg-white px-4 pb-4 pt-2 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-navy-900"
              activeProps={{ className: "bg-navy-50 text-navy-900 font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-accent-800 px-3 py-3 text-center text-base font-semibold text-white shadow-sm shadow-accent-800/30 transition-all duration-200 hover:bg-accent-900"
          >
            Get a Free Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
