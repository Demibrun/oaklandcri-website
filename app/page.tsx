"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Building2,
  Hammer,
  Home,
  Landmark,
  MapPin,
  Menu,
  Phone,
  Mail,
  ShieldCheck,
  TrendingUp,
  X,
  CheckCircle2,
  Warehouse,
  MessageCircle,
  Sun,
  Moon,
} from "lucide-react";

const whatsappLink = "https://wa.me/2347062874510";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: whatsappLink },
];

const services = [
  {
    title: "Real Estate Development",
    description:
      "Residential and commercial property development designed around quality, functionality, and long-term value.",
    icon: Building2,
  },
  {
    title: "Land Sales & Acquisition",
    description:
      "Support with verified land opportunities, documentation guidance, and site inspection coordination.",
    icon: Landmark,
  },
  {
    title: "Construction Services",
    description:
      "Building construction, renovation, finishing, and project supervision for private and commercial clients.",
    icon: Hammer,
  },
  {
    title: "Property Investment",
    description:
      "Real estate investment advisory and property portfolio support for individuals, families, and businesses.",
    icon: TrendingUp,
  },
  {
    title: "Property Management",
    description:
      "Maintenance coordination, tenant support, and practical oversight for rental and investment properties.",
    icon: Home,
  },
  {
    title: "Building Materials Supply",
    description:
      "Procurement and supply support for reliable construction materials and project execution needs.",
    icon: Warehouse,
  },
];

const projects = [
  {
    title: "Residential Developments",
    category: "Housing & Estates",
    description:
      "Modern homes and estate concepts built for comfort, durability, and long-term asset value.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Land Banking Opportunities",
    category: "Land & Investment",
    description:
      "Strategic land opportunities for buyers and investors seeking future growth potential.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Construction Projects",
    category: "Build & Supervision",
    description:
      "Construction support from planning to execution, with attention to quality and accountability.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

const values = [
  "Transparent real estate process",
  "Quality-driven construction approach",
  "Client-focused service delivery",
  "Long-term investment thinking",
  "Reliable documentation support",
  "Professional project execution",
];

const faqs = [
  {
    question: "Does OaklandCRI sell verified land?",
    answer:
      "Yes. OaklandCRI can support clients with verified land opportunities, documentation guidance, and site inspection coordination.",
  },
  {
    question: "Can OaklandCRI help with construction?",
    answer:
      "Yes. The company supports building construction, renovation, finishing, and project supervision across different project types.",
  },
  {
    question: "Do you offer property investment advice?",
    answer:
      "Yes. OaklandCRI provides property investment support for clients who want to make informed real estate decisions.",
  },
  {
    question: "Can I schedule a site inspection?",
    answer:
      "Yes. You can contact the team through WhatsApp to discuss available inspection options.",
  },
];

function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <button
      type="button"
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-sm transition hover:border-orange-400 hover:bg-orange-50"
      aria-label="Toggle light and dark mode"
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white shadow-lg shadow-orange-200">
            O
          </div>

          <div>
            <p className="text-lg font-black tracking-tight text-[var(--text)]">
              OaklandCRI
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-orange-600">
              Real Estate
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("https") ? "_blank" : undefined}
              rel={
                link.href.startsWith("https")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-sm font-semibold text-[var(--muted)] transition hover:text-orange-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
          >
            Contact Us
          </a>

          <ThemeToggle
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white sm:inline-flex"
          >
            Contact
          </a>

          <ThemeToggle
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-[var(--border)] p-2 text-[var(--text)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("https") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("https")
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-[var(--muted)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-orange-500 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionBadge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-600">
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--bg)] pt-32 lg:pt-40"
    >
      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-orange-100 blur-3xl opacity-60" />
      <div className="absolute -right-32 top-72 h-96 w-96 rounded-full bg-orange-200 blur-3xl opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <div>
          <SectionBadge>Real Estate • Construction • Investment</SectionBadge>

          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.03] tracking-tight text-[var(--text)] md:text-6xl lg:text-7xl">
            Building lasting value through real estate and construction.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            OaklandCRI provides real estate, construction, property investment,
            and development solutions for clients who want quality, trust, and
            long-term value.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-orange-200 transition hover:bg-orange-600"
            >
              Explore Services <ArrowRight size={18} />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-4 text-sm font-black text-[var(--text)] transition hover:border-orange-500 hover:text-orange-600"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["Real Estate", "Solutions"],
              ["Construction", "Support"],
              ["Investment", "Advisory"],
            ].map(([top, bottom]) => (
              <div
                key={top}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm"
              >
                <p className="text-sm font-black text-[var(--text)]">{top}</p>
                <p className="mt-1 text-xs font-semibold text-[var(--muted)]">
                  {bottom}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border-8 border-[var(--surface)] shadow-2xl shadow-orange-100">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80"
              alt="Modern residential building"
              className="h-[520px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-5 shadow-xl backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <p className="font-black text-gray-950">
                    Professional property support
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    From land acquisition to construction and investment
                    advisory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[var(--soft-bg)] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionBadge>About OaklandCRI</SectionBadge>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[var(--text)] md:text-5xl">
            A practical real estate partner for building, buying, and investing
            well.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
          <p>
            OaklandCRI is a real estate and construction company focused on
            helping clients access quality property solutions, from land
            acquisition and development to construction, investment support, and
            property advisory.
          </p>

          <p>
            The company is built around a simple promise: to help clients make
            property decisions with greater clarity, confidence, and long-term
            value in mind.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">
                Mission
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                To deliver reliable real estate and construction solutions that
                create lasting value for clients.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">
                Vision
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                To become a trusted name in property development, investment,
                and construction support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[var(--bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Our Services</SectionBadge>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[var(--text)] md:text-5xl">
            End-to-end support across real estate, construction, and property
            investment.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Clear, practical services designed to support clients at different
            stages of their property journey.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-black text-[var(--text)]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section
      className="py-20 text-white lg:py-28"
      style={{ background: "var(--dark-section)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <SectionBadge>Why Choose Us</SectionBadge>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            Built on trust, clarity, and quality execution.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Real estate decisions are significant. OaklandCRI helps clients move
            with better information, practical guidance, and dependable project
            support.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value}
              className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <CheckCircle2
                className="mt-1 shrink-0 text-orange-400"
                size={22}
              />
              <p className="font-semibold leading-7 text-gray-100">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-[var(--bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionBadge>Project Areas</SectionBadge>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[var(--text)] md:text-5xl">
              Property solutions OaklandCRI is positioned to deliver.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[var(--muted)]">
            Our project portfolio is currently being updated. These visuals
            represent the types of real estate and construction solutions we
            support.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-sm transition hover:shadow-xl hover:shadow-orange-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-600 backdrop-blur">
                  {project.category}
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black text-[var(--text)]">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          Visuals shown are representative concept images and may not depict
          completed OaklandCRI projects.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[var(--soft-bg)] py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <SectionBadge>Client Stories</SectionBadge>

        <h2 className="mt-6 text-4xl font-black tracking-tight text-[var(--text)] md:text-5xl">
          Testimonials coming soon.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          OaklandCRI is currently building a strong record of client success
          stories. Verified testimonials will be shared here as the company grows
          its project portfolio.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-[var(--bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <SectionBadge>FAQ</SectionBadge>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[var(--text)] md:text-5xl">
            Common questions.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm open:shadow-lg open:shadow-orange-100"
            >
              <summary className="cursor-pointer list-none text-lg font-black text-[var(--text)] marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>

              <p className="mt-4 leading-7 text-[var(--muted)]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 text-white lg:py-28"
      style={{ background: "var(--dark-section)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionBadge>Contact Us</SectionBadge>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            Ready to discuss your property needs?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Send us a message on WhatsApp and the OaklandCRI team will follow up
            on your real estate, construction, or investment enquiry.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="tel:+2347062874510"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <Phone className="text-orange-400" size={24} />
              <span className="font-semibold">0706 287 4510</span>
            </a>

            <a
              href="mailto:hello@oaklandcri.com"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <Mail className="text-orange-400" size={24} />
              <span className="font-semibold">hello@oaklandcri.com</span>
            </a>

            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
              <MapPin className="text-orange-400" size={24} />
              <span className="font-semibold">Nigeria</span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-gray-950 shadow-2xl shadow-black/20 lg:p-8">
          <div className="rounded-3xl bg-orange-50 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white">
              <MessageCircle size={32} />
            </div>

            <h3 className="mt-6 text-3xl font-black text-gray-950">
              Chat with OaklandCRI on WhatsApp
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Click the button below to start a WhatsApp conversation about land,
              construction, property investment, site inspection, or any other
              real estate enquiry.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-orange-200 transition hover:bg-orange-600"
            >
              Start WhatsApp Chat <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-6 rounded-3xl border border-orange-100 p-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">
              Direct Contact
            </p>

            <p className="mt-3 text-2xl font-black text-gray-950">
              0706 287 4510
            </p>

            <p className="mt-3 leading-7 text-gray-600">
              We recommend sending a short message with your name, location, and
              the service you are interested in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:text-left lg:px-8">
        <div>
          <p className="text-lg font-black text-[var(--text)]">OaklandCRI</p>
          <p className="text-sm text-[var(--muted)]">
            Real estate, construction, and property investment solutions.
          </p>
        </div>

        <p className="text-sm text-[var(--muted)]">
          © 2026 OaklandCRI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeStyles = {
    "--bg": isDarkMode ? "#07111f" : "#ffffff",
    "--surface": isDarkMode ? "#101b2d" : "#ffffff",
    "--surface-2": isDarkMode ? "#14213a" : "#fff7ed",
    "--soft-bg": isDarkMode ? "#0b1728" : "#fff7ed",
    "--text": isDarkMode ? "#f8fafc" : "#111827",
    "--muted": isDarkMode ? "#cbd5e1" : "#4b5563",
    "--border": isDarkMode ? "rgba(251, 146, 60, 0.22)" : "#fed7aa",
    "--nav-bg": isDarkMode
      ? "rgba(7, 17, 31, 0.92)"
      : "rgba(255, 255, 255, 0.92)",
    "--dark-section": isDarkMode
      ? "linear-gradient(135deg, #020617 0%, #0f172a 45%, #431407 100%)"
      : "#111827",
  };

  return (
    <main
      style={themeStyles}
      className="min-h-screen scroll-smooth bg-[var(--bg)] font-sans text-[var(--text)] transition-colors duration-300"
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}