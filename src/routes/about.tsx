import { createFileRoute } from "@tanstack/react-router";
import PageHero from "~/components/PageHero";
import { CtaLink, SectionIntro } from "~/components/UI";
import Reveal from "~/components/Reveal";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      title: "Plain talk",
      text: "No jargon and no confusing tech terms. We explain everything in language you actually understand.",
    },
    {
      title: "Honest pricing",
      text: "Clear quotes, no hidden costs, and we'll tell you when you don't need to spend more.",
    },
    {
      title: "Local roots",
      text: "We're proudly South African and we get local small business, from town to township to city.",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Helping South African small businesses look their best online"
        subtitle="Design Corner is a local team of web designers and developers who believe every small business deserves a website it can be proud of."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <SectionIntro
                center={false}
                title="Our story"
              />
              <p className="mt-4 text-gray-600">
                Design Corner started with a simple observation: too many small
                businesses were either going without a website, or paying large
                agencies far too much for something overly complicated. Neither
                felt right.
              </p>
              <p className="mt-4 text-gray-600">
                So we built a different kind of web company. One that keeps things
                affordable, fast and friendly. We help bakeries, plumbers,
                boutiques, tour operators and service providers across South
                Africa get online with clean, mobile-friendly websites that
                look professional and actually bring in enquiries.
              </p>
              <p className="mt-4 text-gray-600">
                We stay small on purpose, work closely with every client, and
                treat your business like it's our own. When you work with us,
                you're working with people who care about your success.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} duration="slow">
            <div className="rounded-3xl bg-navy-50/70 p-8 sm:p-10">
              <h3 className="text-xl font-bold text-navy-900">Our values</h3>
              <ul className="mt-6 space-y-6">
                {values.map((v) => (
                  <li key={v.title} className="flex gap-4 transition-transform duration-300 hover:translate-x-1">
                    <span className="mt-1 text-accent-500">✦</span>
                    <div>
                      <h4 className="font-semibold text-navy-900">{v.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{v.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl hero-blob" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-navy-700/40 blur-3xl hero-blob" style={{ animationDelay: "-7s" }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's build your website together
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Tell us about your business and we'll point you in the right
                direction.
              </p>
              <div className="mt-8">
                <CtaLink to="/contact">Get a Free Quote</CtaLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
