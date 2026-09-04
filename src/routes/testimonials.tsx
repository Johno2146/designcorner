import { createFileRoute } from "@tanstack/react-router";
import PageHero from "~/components/PageHero";
import { CtaLink, SectionIntro } from "~/components/UI";
import Reveal from "~/components/Reveal";
import { TESTIMONIALS } from "~/lib/site";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What our clients say"
        subtitle="Real words from the small business owners we've built for — no invented reviews, ever."
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionIntro
              center={false}
              title="Straight from the people we've worked with"
              subtitle="Every quote below comes from a business with a live site we built."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-navy-50/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-navy-900/5">
                  <div className="text-accent-500">★★★★★</div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 border-t border-navy-900/10 pt-4">
                    <p className="font-semibold text-navy-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    {t.domain && t.domainHref && (
                      <a
                        href={t.domainHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm font-medium text-accent-700 transition-colors hover:text-accent-800"
                      >
                        {t.domain}
                      </a>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <CtaLink to="/contact">Become our next happy client</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}