import { createFileRoute } from "@tanstack/react-router";
import PageHero from "~/components/PageHero";
import { CtaLink, SectionIntro } from "~/components/UI";
import Reveal from "~/components/Reveal";
import { SERVICES } from "~/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const SERVICE_IMAGES: Record<string, string> = {
  "Website Design": "/card-design.webp",
  "Web Development": "/card-dev.webp",
  "E-commerce": "/card-ecom.webp",
  "Maintenance & Hosting": "/card-server.webp",
  "SEO Basics": "/card-seo.webp",
};

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Websites built for how small business actually works"
        subtitle="Simple, affordable and reliable."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-6">
            {SERVICES.map((s, i) => {
              const features =
                s.title === "Maintenance & Hosting" ? [] : s.features;
              return (
                <Reveal key={s.title} delay={(i % 2) * 80}>
                  <div
                    className="group relative overflow-hidden rounded-2xl border border-navy-900/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-navy-900/5"
                  >
                    <img
                      src={SERVICE_IMAGES[s.title]}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/70 to-navy-900/90" />
                    <div className="relative grid gap-6 p-8 md:grid-cols-[240px_1fr]">
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          {s.title}
                        </h2>
                      </div>
                      <div className="md:border-l md:border-white/15 md:pl-8">
                        <p className="text-gray-100">{s.blurb}</p>
                        {features.length > 0 && (
                          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {features.map((f) => (
                              <li key={f} className="flex items-center gap-2 text-sm text-gray-200">
                                <span className="text-accent-400">✓</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl hero-blob" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <Reveal>
            <SectionIntro
              center
              eyebrow="Not sure what you need?"
              title={
                <span className="text-white">
                  Let's figure it out together
                </span>
              }
              subtitle={
                <span className="text-gray-300">
                  Tell us about your business and we'll recommend the simplest
                  setup that gets you results.
                </span>
              }
            />
            <div className="mt-8">
              <CtaLink to="/contact">Get a Free Quote</CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
