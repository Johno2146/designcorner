import { Link, createFileRoute } from "@tanstack/react-router";
import { CtaLink, SectionIntro } from "~/components/UI";
import Reveal from "~/components/Reveal";
import { PRICING, PROJECTS, SERVICES, TESTIMONIALS } from "~/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <WhyUs />
      <PricingTeaser />
      <Testimonials />
      <AboutTeaser />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/25 blur-3xl hero-blob" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl hero-blob" style={{ animationDelay: "-8s" }} />
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-navy-700/40 blur-3xl hero-blob" style={{ animationDelay: "-4s" }} />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="hero-fade-fast inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-accent-400 ring-1 ring-white/10">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-400" />
            Proudly South African
          </span>
          <h1 className="hero-fade mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ animationDelay: "0.08s" }}>
            Websites that grow your{" "}
            <span className="relative inline-block text-accent-400">
              small business
              <span aria-hidden className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-accent-500/40" />
            </span>
          </h1>
          <p className="hero-fade-slow mt-6 max-w-lg text-lg text-gray-300" style={{ animationDelay: "0.18s" }}>
            We build clean, fast, affordable websites for South African small
            businesses so you look professional and get found online.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row" style={{ animation: "none" }}>
            <div className="hero-fade-slow" style={{ animationDelay: "0.28s" }}>
              <CtaLink to="/contact">Get a Free Quote</CtaLink>
            </div>
            <div className="hero-fade-slow" style={{ animationDelay: "0.38s" }}>
              <CtaLink to="/portfolio" variant="secondary">
                See our work
              </CtaLink>
            </div>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              ["1 week", "average build"],
              ["Free", "no obligation quote"],
              ["100%", "local support"],
            ].map(([num, label], i) => (
              <div key={label} className="hero-fade" style={{ animationDelay: `${0.5 + i * 0.12}s` }}>
                <div className="text-2xl font-bold text-white">{num}</div>
                <div className="text-xs text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="hero-fade-slow" style={{ animationDelay: "0.35s" }}>
            <a
              href="https://ssproc.co.za"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Sealed and Secured — the live client site shown above — opens in a new tab"
              className="group block"
            >
              <div className="hero-float">
                <div className="rounded-2xl border border-white/10 bg-navy-950/80 shadow-2xl shadow-black/30 backdrop-blur transition duration-300 group-hover:border-white/25 group-hover:shadow-black/50">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                    <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                    <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                    <div className="ml-3 flex flex-1 items-center justify-center rounded-md bg-white/10 px-3 py-1">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-gray-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="5" y="11" width="14" height="10" rx="2" />
                          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                        </svg>
                        ssproc.co.za
                      </span>
                    </div>
                  </div>
                  {/* Real client site screenshot */}
                  <div className="overflow-hidden border-t border-white/10 bg-navy-900">
                    <img
                      src="/portfolio-ssproc.webp"
                      alt=""
                      aria-hidden
                      loading="lazy"
                      decoding="async"
                      className="aspect-video w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <p className="mt-4 flex flex-col items-center justify-center gap-1.5 text-xs font-medium uppercase tracking-widest text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                  <span className="flex items-center gap-1.5">
                    Visit site
                    <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                  <span className="text-[10px] font-normal normal-case tracking-normal text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
                    A Design Corner build — real client site
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Affordable packages",
    "Fast turnaround",
    "Mobile-first design",
    "Local SA support",
    "No jargon, plain talk",
  ];
  return (
    <section className="border-b border-navy-900/10 bg-white">
      <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6 sm:px-6">
        {items.map((t) => (
          <span
            key={t}
            className="flex items-center gap-2 text-sm font-medium text-gray-600"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {t}
          </span>
        ))}
      </Reveal>
    </section>
  );
}

function Services() {
  const shown = SERVICES.slice(0, 3);
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionIntro
            eyebrow="What we do"
            title="Everything you need to look great online"
            subtitle="From your first website to an online store, we handle design, build, hosting and search — so you don't have to."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="h-full">
              <div className="group h-full rounded-2xl border border-navy-900/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-navy-900/5">
                <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.blurb}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-accent-500">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-semibold text-accent-700 transition-colors hover:text-accent-800"
          >
            See all our services
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="bg-navy-50/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionIntro
            eyebrow="Our work"
            title="Small businesses we've helped"
            subtitle="A few recent projects showing the kind of clean, effective sites we build for local businesses like yours."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 6).map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 100} className="h-full">
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard(p: {
  name: string;
  category: string;
  description: string;
  image: string;
}) {
  return (
    <Link
      to="/portfolio"
      className="group block h-full overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <div className="aspect-video overflow-hidden bg-navy-900">
        <img
          src={p.image}
          alt={`Screenshot of the ${p.name} website`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent-700">
          {p.category}
        </span>
        <h3 className="mt-2 text-lg font-bold text-navy-900">{p.name}</h3>
        <p className="mt-2 text-sm text-gray-600">{p.description}</p>
      </div>
    </Link>
  );
}

function WhyUs() {
  const reasons = [
    {
      title: "Fast turnaround",
      text: "Most sites go live in about a week. You don't wait months to look professional online.",
      image: "/card-fast.webp",
    },
    {
      title: "Local South African support",
      text: "A real local team, in your time zone, who understand South African small business.",
      image: "/card-local.webp",
    },
    {
      title: "Affordable packages",
      text: "Clear, honest pricing with no hidden costs. Quality websites that fit a small budget.",
      image: "/card-money.webp",
    },
    {
      title: "Mobile-friendly sites",
      text: "Your customers browse on phones. Every site we build looks and works beautifully on mobile.",
      image: "/card-mobile.webp",
    },
  ];
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionIntro
            eyebrow="Why choose us"
            title="A partner, not an intimidating agency"
            subtitle="We keep things simple, honest and friendly — so you always know where your project stands."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5">
                <img
                  src={r.image}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/70 to-navy-900/90" />
                <div className="relative flex h-full flex-col p-6">
                  <h3 className="text-base font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-100">
                    {r.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingTeaser() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, honest packages
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Three clear packages, each with a once-off build fee and a small
            monthly fee for hosting and care. No surprises.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PRICING.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <div
                className={`h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  t.highlighted
                    ? "bg-white shadow-lg ring-2 ring-accent-500 hover:shadow-2xl hover:shadow-accent-500/20"
                    : "bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:shadow-lg hover:shadow-black/30"
                }`}
              >
                <h3 className={`text-lg font-bold ${t.highlighted ? "text-navy-900" : "text-white"}`}>
                  {t.name}
                </h3>
                <p className={`mt-1 text-sm ${t.highlighted ? "text-gray-600" : "text-gray-400"}`}>
                  {t.tagline}
                </p>
                <div className={`mt-4 text-2xl font-bold ${t.highlighted ? "text-navy-900" : "text-white"}`}>
                  {t.onceOff}
                  <span className={`ml-1 text-sm font-normal ${t.highlighted ? "text-gray-500" : "text-gray-400"}`}>
                    once-off
                  </span>
                  <span className={`ml-2 text-sm font-normal ${t.highlighted ? "text-gray-500" : "text-gray-400"}`}>
                    + {t.monthly}/month
                  </span>
                </div>
                <ul className={`mt-5 space-y-2 text-sm ${t.highlighted ? "text-gray-600" : "text-gray-300"}`}>
                  {t.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-accent-500">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            to="/pricing"
            className="group inline-flex items-center gap-2 font-semibold text-accent-400 transition-colors hover:text-accent-500"
          >
            See full pricing details
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionIntro
            eyebrow="Testimonials"
            title="What our clients say"
            subtitle="Real words from the small business owners we've built for."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <figure
                className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-navy-50/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-navy-900/5"
              >
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
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="bg-navy-50/50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-700">
            About us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Helpers for South African small business
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Design Corner started with a simple belief: every small business
            deserves a website it can be proud of without the big-agency price
            tag or the confusing jargon.
          </p>
          <p className="mt-4 text-gray-600">
            We're a local team that's built sites for bakeries, plumbers,
            boutiques and service providers around South Africa. We'd love to do
            it for you too.
          </p>
          <div className="mt-7">
            <CtaLink to="/about" variant="secondary">
              More about Design Corner
            </CtaLink>
          </div>
        </Reveal>
        <Reveal delay={120} duration="slow">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl hero-blob" />
            <div className="relative">
              <p className="text-2xl font-bold leading-snug">
                "Your website is often the first impression a customer gets of your
                business. It should be a great one."
              </p>
              <p className="mt-5 text-sm text-gray-300">
                — The Design Corner team
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to grow your business online?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Get a free, no obligation quote. Tell us about your business and we'll
          point you in the right direction.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink to="/contact">Get a Free Quote</CtaLink>
          <CtaLink to="/pricing" variant="secondary">
            Start Your Project
          </CtaLink>
        </div>
      </Reveal>
    </section>
  );
}
