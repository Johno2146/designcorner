import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import PageHero from "~/components/PageHero";
import Reveal from "~/components/Reveal";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "~/components/Icons";
import { CONTACT } from "~/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbgrvgao";

type SubmitStatus = "idle" | "submitting" | "submitted" | "error";

function ContactPage() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: if a bot filled the hidden field, silently accept and stop.
    const formData = new FormData(form);
    if ((formData.get("_gotcha") as string) || "") {
      setStatus("submitted");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("submitted");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about your website"
        subtitle="Get a free, no-obligation quote. Tell us a little about your business and we'll be in touch within one working day."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact details */}
          <Reveal>
            <h2 className="text-2xl font-bold text-navy-900">
              Get in touch
            </h2>
            <ul className="mt-6 space-y-5">
              <li className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-lg transition-transform duration-200 group-hover:scale-110">
                  <PhoneIcon className="h-6 w-6 text-navy-900" />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <a
                    href={`tel:${CONTACT.phoneLink}`}
                    className="font-semibold text-navy-900 hover:text-accent-600"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-lg transition-transform duration-200 group-hover:scale-110">
                  <WhatsAppIcon className="h-6 w-6 fill-[#25D366]" />
                </span>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <a
                    href={`https://wa.me/${CONTACT.whatsappLink}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-navy-900 hover:text-accent-600"
                  >
                    {CONTACT.whatsapp}
                  </a>
                </div>
              </li>
              <li className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-lg transition-transform duration-200 group-hover:scale-110">
                  <MailIcon className="h-6 w-6 text-navy-900" />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-semibold text-navy-900 hover:text-accent-600"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-lg transition-transform duration-200 group-hover:scale-110">
                  <PinIcon className="h-6 w-6 text-navy-900" />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Based in</p>
                  <p className="font-semibold text-navy-900">{CONTACT.location}</p>
                </div>
              </li>
              <li className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-lg transition-transform duration-200 group-hover:scale-110">
                  <ClockIcon className="h-6 w-6 text-navy-900" />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Hours</p>
                  <p className="font-semibold text-navy-900">{CONTACT.hours}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={140} className="rounded-2xl border border-navy-900/10 bg-navy-50/40 p-8 sm:p-10">
            {status === "submitted" ? (
              <div
                className="flex h-full flex-col items-center justify-center py-16 text-center"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500 text-3xl text-white">
                  ✓
                </span>
                <h2 className="mt-6 text-2xl font-bold text-navy-900">
                  Thank you!
                </h2>
                <p className="mt-3 max-w-sm text-gray-600">
                  Thanks — we've received your message and will be in touch
                  within one working day. If it's urgent, you're welcome to
                  WhatsApp us for the fastest response.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-accent-700 underline-offset-2 hover:text-accent-800 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field — hidden from humans, catches bots. */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
                    />
                  </Field>
                  <Field label="Phone / WhatsApp" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+27 82 000 0000"
                      className="w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
                    />
                  </Field>
                </div>
                <Field
                  label="WhatsApp number (optional)"
                  htmlFor="whatsapp"
                >
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="+27 82 000 0000"
                    className="w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@business.co.za"
                    className="w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
                  />
                </Field>
                <Field label="What kind of website do you need?" htmlFor="type">
                  <select
                    id="type"
                    name="type"
                    defaultValue=""
                    required
                    className="w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
                  >
                    <option value="" disabled>
                      Select an option…
                    </option>
                    <option>New website</option>
                    <option>Improve my current website</option>
                    <option>Online store / e-commerce</option>
                    <option>Maintenance / hosting</option>
                    <option>SEO / getting found online</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
                <Field label="Tell us about your business" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="What does your business do? What do you want the website to achieve?"
                    className="w-full resize-y rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
                  />
                </Field>
                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    <p className="font-semibold">Sorry — something went wrong.</p>
                    <p className="mt-1">
                      Your message wasn't sent. Please try again in a moment, or
                      reach us directly on{" "}
                      <a
                        href={`tel:${CONTACT.phoneLink}`}
                        className="font-semibold underline underline-offset-2"
                      >
                        {CONTACT.phone}
                      </a>{" "}
                      or{" "}
                      <a
                        href={`https://wa.me/${CONTACT.whatsappLink}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold underline underline-offset-2"
                      >
                        WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-lg bg-accent-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-accent-800/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-900 hover:shadow-md hover:shadow-accent-800/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-accent-800"
                >
                  {status === "submitting"
                    ? "Sending…"
                    : "Request My Free Quote"}
                </button>
                <p className="text-center text-xs text-gray-500">
                  By submitting, you agree to be contacted about your enquiry.
                  We never share your details.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
      </span>
      {children}
    </label>
  );
}
