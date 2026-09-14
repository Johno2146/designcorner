// Central shared content for Design Corner.
// Contact details and socials here are the real business details from the owner.

export const CONTACT = {
  phone: "+27 79 622 6006",
  phoneLink: "+27796226006",
  whatsapp: "+27 79 622 6006",
  whatsappLink: "27796226006",
  email: "sales@designcorner.co.za",
  location: "Western Cape, South Africa",
  hours: "Mon–Fri, 08:00–17:00 SAST",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  title: string;
  blurb: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Website Design",
    blurb:
      "A clean, modern design that shows off your business and makes people trust you at first glance.",
    features: [
      "Mobile-friendly layouts",
      "Your brand look & colours",
      "Clear calls to action",
      "Fast, usable navigation",
    ],
  },
  {
    title: "Web Development",
    blurb:
      "We turn the design into a fast, reliable website that's easy to update and built to last.",
    features: [
      "Built with modern tech",
      "Quick to load",
      "Secure & reliable hosting setup",
      "Easy-to-manage content",
    ],
  },
  {
    title: "E-commerce",
    blurb:
      "Sell online with a simple, secure online shop that makes buying from you easy.",
    features: [
      "Product & order management",
      "Secure payment options",
      "Shipping & handoff flows",
      "Mobile-first storefront",
    ],
  },
  {
    title: "Maintenance & Hosting",
    blurb:
      "We keep your site online, updated, and protected — so you can focus on running your business.",
    features: [
      "Regular backups & updates",
      "Security monitoring",
      "Content updates",
      "Fast support when you need it",
    ],
  },
  {
    title: "SEO Basics",
    blurb:
      "Help local customers find you online with sensible, honest search fundamentals.",
    features: [
      "Keyword & local SEO setup",
      "Google Business Profile help",
      "Fast, accessible pages",
      "Clear monthly reporting",
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  tag: string;
  image: string;
  domain?: string;
  domainHref?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Sealed and Secured",
    category: "Security Seal Manufacturer",
    description:
      "A professional site for a security seal manufacturer with clear products, a simple way to request a quote, and a look that wins trust from clients and partners alike.",
    tag: "Web Design",
    image: "/portfolio-ssproc.webp",
    domain: "ssproc.co.za",
    domainHref: "https://ssproc.co.za",
  },
  {
    name: "Kaylee and Tenielle's Pet Services",
    category: "Pet Services",
    description:
      "A warm, reassuring site for a pet services business with the services, the people, and a friendly way for pet owners to get in touch and book.",
    tag: "Pet Services",
    image: "/portfolio-ktps.webp",
    domain: "ktps.co.za",
    domainHref: "https://ktps.co.za",
  },
  {
    name: "Do My Payroll",
    category: "Payroll Services",
    description:
      "A clean, credible B2B site for a payroll services business with clear information, a reassuring design, and an easy path for clients to find out more and get in touch.",
    tag: "Web Design",
    image: "/portfolio-domy.webp",
    domain: "domypayroll.co.uk",
    domainHref: "https://domypayroll.co.uk",
  },
];

export type Tier = {
  name: string;
  onceOff: string;
  monthly: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const PRICING: Tier[] = [
  {
    name: "Starter Site",
    onceOff: "R2,999",
    monthly: "R499",
    tagline: "A clean first website for a small business getting online.",
    features: [
      "5-page mobile-responsive site",
      "Contact form",
      "WhatsApp / click-to-call button",
      "Basic Google Business Profile setup",
      "Hosting + small edits",
    ],
    cta: "Get a Free Quote",
  },
  {
    name: "Growth Site",
    onceOff: "R5,999",
    monthly: "R899",
    tagline: "Our most popular package for businesses ready to grow.",
    features: [
      "Everything in Starter",
      "Up to 8 pages",
      "Blog / news section",
      "Basic on-page SEO",
      "Google Analytics + monthly traffic snapshot",
    ],
    cta: "Start Your Project",
    highlighted: true,
  },
  {
    name: "E-commerce Site",
    onceOff: "R9,999",
    monthly: "R999",
    tagline: "Sell online with a secure, easy-to-manage store.",
    features: [
      "Everything in Growth",
      "Online store setup",
      "Product listings",
      "Payment gateway integration",
      "Order management",
    ],
    cta: "Start Your Project",
  },
];

export type AddOn = {
  name: string;
  price: string;
  note: string;
};

export const ADDONS: AddOn[] = [
  {
    name: "Booking system integration",
    price: "+R1,500",
    note: "Let customers book appointments or services online.",
  },
  {
    name: "Logo / branding refresh",
    price: "+R1,000",
    note: "A refreshed logo and brand colours to match your site.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  domain?: string;
  domainHref?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Design Corner gave our business a professional online presence that actually reflects what we do. The site is fast, easy to navigate, and has already brought in new enquiries. Couldn't ask for better service.",
    name: "Sealed and Secured",
    role: "Security Seal Manufacturer",
    domain: "ssproc.co.za",
    domainHref: "https://ssproc.co.za",
  },
  {
    quote:
      "We needed a website that felt warm and trustworthy for pet owners, and that's exactly what we got. Design Corner understood our brand from day one and delivered exactly on time.",
    name: "Kaylee and Tenielle's Pet Services",
    role: "Pet Services",
    domain: "ktps.co.za",
    domainHref: "https://ktps.co.za",
  },
  {
    quote:
      "As a payroll service, we needed a site that looked credible and professional. Design Corner nailed the balance between clean design and clear information for our clients.",
    name: "Do My Payroll",
    role: "Payroll service",
    domain: "domypayroll.co.uk",
    domainHref: "https://domypayroll.co.uk",
  },
];

export const SOCIAL = [
  { label: "Facebook", href: "https://facebook.com/designcorner" },
  { label: "Instagram", href: "https://instagram.com/designcorner" },
  { label: "WhatsApp", href: `https://wa.me/${CONTACT.whatsappLink}` },
];
