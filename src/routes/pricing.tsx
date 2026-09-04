import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "~/components/PageHero";
import Reveal from "~/components/Reveal";
import { ADDONS, PRICING } from "~/lib/site";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, honest pricing"
        subtitle="Clear, confirmed packages with a once-off build fee and a small monthly fee for hosting, care and edits. No hidden costs."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {PRICING.map((t, i) => (
              <Reveal key={t.name} delay={i * 110} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                    t.highlighted
                      ? "bg-navy-900 text-white shadow-xl ring-2 ring-accent-500 hover:shadow-2xl hover:shadow-accent-500/20"
                      : "border border-navy-900/10 bg-white hover:shadow-lg hover:shadow-navy-900/10"
                  }`}
                >
                  {t.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <h2
                    className={`text-xl font-bold ${
                      t.highlighted ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {t.name}
                  </h2>
                  <p
                    className={`mt-1 text-sm ${
                      t.highlighted ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t.tagline}
                  </p>
                  <div
                    className={`mt-5 text-3xl font-bold ${
                      t.highlighted ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {t.onceOff}
                    <span
                      className={`ml-2 text-base font-normal ${
                        t.highlighted ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      once-off
                    </span>
                  </div>
                  <div
                    className={`mt-1 text-sm ${
                      t.highlighted ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    + {t.monthly}/month
                  </div>
                  <ul
                    className={`mt-6 flex-1 space-y-3 text-sm ${
                      t.highlighted ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span className="text-accent-500">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                      t.highlighted
                        ? "bg-accent-800 text-white shadow-sm shadow-accent-800/30 hover:-translate-y-0.5 hover:bg-accent-900 hover:shadow-md hover:shadow-accent-800/40"
                        : "bg-navy-900 text-white hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-md"
                    }`}
                  >
                    {t.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm text-gray-500">
              The monthly fee covers hosting, security, backups and small edits
              so your site stays fast and up to date. Everything is quoted
              up front. No hidden costs, no surprises.
            </p>
          </Reveal>

          <Reveal className="mt-16">
            <h3 className="text-center text-2xl font-bold tracking-tight text-navy-900">
              Add-ons
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
              Optional extras you can add to any package. Quoted as a one off on
              top of your package price.
            </p>
            <div className="mx-auto mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
              {ADDONS.map((a) => (
                <Reveal key={a.name} className="h-full">
                  <div className="flex h-full items-start justify-between gap-4 rounded-2xl border border-navy-900/10 bg-navy-50/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-navy-900/5">
                    <div>
                      <h4 className="font-bold text-navy-900">{a.name}</h4>
                      <p className="mt-1 text-sm text-gray-600">{a.note}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent-500/15 px-3 py-1 text-sm font-semibold text-accent-700">
                      {a.price}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50/50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">
              Need something different?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Every business is different. Tell us what you're imagining and
              we'll tailor a package (and price) that fits.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block rounded-lg bg-accent-800 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-accent-800/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-900 hover:shadow-md hover:shadow-accent-800/40 active:scale-[0.98]"
              >
                Get a Free Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
