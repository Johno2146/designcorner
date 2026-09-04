import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "~/components/PageHero";
import { SectionIntro } from "~/components/UI";
import Reveal from "~/components/Reveal";
import { PROJECTS } from "~/lib/site";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="A few small businesses we've helped look great online"
        subtitle="Real screenshots from real websites — small businesses we've had the pleasure to build for, across South Africa."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 100} className="h-full">
                <a
                  href={p.domainHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit the ${p.name} website (opens in a new tab)`}
                  className="group block h-full"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
                    <div className="aspect-video overflow-hidden bg-navy-900">
                      <img
                        src={p.image}
                        alt={`Screenshot of the ${p.name} website`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-700">
                        {p.category}
                      </span>
                      <h2 className="mt-2 text-xl font-bold text-navy-900">
                        {p.name}
                      </h2>
                      <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 transition-colors duration-200 group-hover:text-accent-900">
                        Visit site
                        <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionIntro
              title="Want a site like these?"
              subtitle="Let's build one that fits your business, budget and style."
            />
            <div className="mt-8 text-center">
              <Link
                to="/contact"
                className="inline-block rounded-lg bg-accent-800 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-accent-800/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-900 hover:shadow-md hover:shadow-accent-800/40 active:scale-[0.98]"
              >
                Start Your Project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
