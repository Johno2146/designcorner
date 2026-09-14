import { Link } from "@tanstack/react-router";
import { CONTACT, NAV, SOCIAL } from "~/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "~/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Affordable, high quality websites for South African small
              businesses. We build sites that help you look professional, get
              found, and grow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL.map((s) => {
                const brand =
                  s.label === "Facebook"
                    ? "#1877F2"
                    : s.label === "Instagram"
                      ? "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                      : "#25D366";
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Design Corner on ${s.label}`}
                    title={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: brand }}
                  >
                    {s.label === "Facebook" ? (
                      <FacebookIcon className="h-5 w-5" />
                    ) : s.label === "Instagram" ? (
                      <InstagramIcon className="h-5 w-5" />
                    ) : (
                      <WhatsAppIcon className="h-5 w-5" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="footer-link text-sm text-gray-400 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li>
                <a href={`tel:${CONTACT.phoneLink}`} className="footer-link hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="footer-link hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.location}</li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Design Corner. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 90 60"
              width={30}
              height={20}
              className="h-5 w-auto"
            >
              <defs>
                <clipPath id="za-flag-t">
                  <path d="m0 0 45 30L0 60z" />
                </clipPath>
                <clipPath id="za-flag-f">
                  <path d="m0 0h90v60H0z" />
                </clipPath>
              </defs>
              <path fill="#E03C31" d="m0 0h90v30H45z" />
              <path fill="#001489" d="m0 60h90V30H45z" />
              <g clipPath="url(#za-flag-f)" fill="none">
                <path stroke="#FFF" strokeWidth="20" d="m90 30H45L0 0v60l45-30" />
                <path
                  fill="#000"
                  stroke="#ffb81c"
                  strokeWidth="20"
                  clipPath="url(#za-flag-t)"
                  d="m0 0 45 30L0 60"
                />
                <path stroke="#007749" strokeWidth="12" d="m0 0 45 30h45M0 60l45-30" />
              </g>
            </svg>
            <p>Proudly South African</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
