"use client";

import Image from "next/image";
import React, { useEffect, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  Building2,
  Hammer,
  Home,
  Landmark,
  MapPin,
  Menu,
  Mail,
  ShieldCheck,
  TrendingUp,
  X,
  CheckCircle2,
  Warehouse,
  Plus,
  Sun,
  Moon,
  FileCheck2,
  Layers3,
  Ruler,
  Truck,
} from "lucide-react";

type ThemeStyles = CSSProperties & {
  [key: `--${string}`]: string;
};

type SectionBadgeProps = {
  children: React.ReactNode;
};

type ThemeToggleProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenFaq: () => void;
};

type LogoIconProps = {
  size?: number;
};

const emailAddress = "info@oaklandcri.com";
const enquiryMessage =
  "Hello Oakland CRI,%0A%0AName:%0ALocation:%0AProject type:%0AService needed:%0A%0A";
const whatsappContacts = [
  {
    label: "0705 291 9101",
    phoneHref: "tel:+2347052919101",
    whatsappHref: `https://wa.me/2347052919101?text=${enquiryMessage}`,
  },
  {
    label: "0806 301 7616",
    phoneHref: "tel:+2348063017616",
    whatsappHref: `https://wa.me/2348063017616?text=${enquiryMessage}`,
  },
];
const emailLink = `mailto:${emailAddress}?subject=Project%20Enquiry&body=${enquiryMessage}`;
const brandName = "Oakland CRI";
const companyLegalName = "Oakland CRI Company Limited";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Real Estate Development",
    description:
      "Residential, commercial, industrial, and mixed-use property development.",
    icon: Building2,
  },
  {
    title: "Land & Property Acquisition",
    description:
      "Guidance for land, buildings, estates, offices, and warehouses.",
    icon: Landmark,
  },
  {
    title: "Construction & Civil Works",
    description:
      "Construction, civil works, structural works, roads, drainage, and renovation.",
    icon: Hammer,
  },
  {
    title: "Investment & Joint Ventures",
    description:
      "Property investment, development schemes, partnerships, and joint ventures.",
    icon: TrendingUp,
  },
  {
    title: "Project & Facility Management",
    description:
      "Project oversight, facility development, maintenance, and estate management.",
    icon: Home,
  },
  {
    title: "Building Materials Supply",
    description:
      "Reliable supply of core building materials, equipment, and finishing goods.",
    icon: Warehouse,
  },
];

const missionVisionItems = [
  {
    label: "Mission",
    title: "Deliver dependable property solutions.",
    description:
      "Reliable construction, real estate, supply, and investment solutions.",
  },
  {
    label: "Vision",
    title: "Build lasting trust across every project.",
    description:
      "A trusted name in property development, civil works, and materials supply.",
  },
];

const pillars = [
  {
    title: "Verified Property Access",
    description:
      "Clear guidance for land, buildings, estates, and commercial assets.",
    icon: FileCheck2,
  },
  {
    title: "Construction Delivery",
    description:
      "Accountable delivery across construction, civil works, and maintenance.",
    icon: Ruler,
  },
  {
    title: "Investment Advisory",
    description:
      "Property investment guidance focused on durable long-term value.",
    icon: TrendingUp,
  },
  {
    title: "Materials Supply",
    description:
      "Sourcing and supply for materials, equipment, hardware, and finishes.",
    icon: Truck,
  },
];

const dashboardTabs = [
  {
    label: "Construction",
    title: "Construction delivery dashboard",
    status: "Active planning",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      ["Scope", "Residential and commercial builds"],
      ["Focus", "Quality control and site supervision"],
      ["Next step", "Project brief and cost review"],
    ],
  },
  {
    label: "Investment",
    title: "Property investment pipeline",
    status: "Investor ready",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      ["Scope", "Land, estates, and property growth"],
      ["Focus", "Asset value and market fit"],
      ["Next step", "Investment objective review"],
    ],
  },
  {
    label: "Supply",
    title: "Materials supply coordination",
    status: "Procurement support",
    image:
      "https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      ["Scope", "Building materials and site inputs"],
      ["Focus", "Reliable sourcing and delivery"],
      ["Next step", "Material schedule and quotation"],
    ],
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
    question: `Does ${brandName} sell verified land?`,
    answer: "Yes. We support land opportunities, documentation, and inspections.",
  },
  {
    question: `Can ${brandName} help with construction?`,
    answer:
      "Yes. We handle construction, civil works, renovation, and supervision.",
  },
  {
    question: "Do you offer property investment advice?",
    answer: "Yes. We help clients make informed property investment decisions.",
  },
  {
    question: "Can you supply building materials?",
    answer: "Yes. We support procurement and supply based on project needs.",
  },
  {
    question: "Can I schedule a site inspection?",
    answer:
      "Yes. You can contact the team through WhatsApp to discuss available inspection options.",
  },
];

function ThemeToggle({ isDarkMode, setIsDarkMode }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-sm transition hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
      aria-label="Toggle light and dark mode"
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function Navbar({ isDarkMode, setIsDarkMode, onOpenFaq }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-lg font-black text-[var(--accent-contrast)] shadow-lg shadow-[var(--button-shadow)]">
            O
          </div>

          <div>
            <p className="max-w-[170px] text-sm font-black leading-tight tracking-tight text-[var(--text)] sm:max-w-none sm:text-lg">
              {companyLegalName}
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--accent-text)]">
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
              className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--accent-text)]"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={onOpenFaq}
            className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--accent-text)]"
          >
            FAQ
          </button>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full bg-[var(--button-bg)] px-5 py-3 text-sm font-bold text-[var(--button-text)] shadow-lg shadow-[var(--button-shadow)] transition hover:bg-[var(--button-bg-hover)]"
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
            href="#contact"
            className="hidden rounded-full bg-[var(--button-bg)] px-4 py-2 text-xs font-bold text-[var(--button-text)] sm:inline-flex"
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

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenFaq();
              }}
              className="text-left text-sm font-semibold text-[var(--muted)]"
            >
              FAQ
            </button>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[var(--button-bg)] px-5 py-3 text-center text-sm font-bold text-[var(--button-text)]"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="inline-flex max-w-full whitespace-normal break-words rounded-full border border-[var(--accent-soft-strong)] bg-[var(--accent-soft)] px-4 py-2 text-center text-xs font-black uppercase leading-5 tracking-[0.12em] text-[var(--accent-text)] sm:tracking-[0.22em]">
      {children}
    </span>
  );
}

function WhatsAppLogo({ size = 22 }: LogoIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.04 2a9.93 9.93 0 0 0-8.42 15.2L2.5 21.29l4.19-1.1A9.94 9.94 0 1 0 12.04 2Zm0 18.21c-1.76 0-3.39-.52-4.76-1.42l-.34-.22-2.49.65.66-2.43-.23-.35a8.24 8.24 0 1 1 7.16 3.77Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="home"
      data-reveal
      className="reveal-section relative min-h-[82svh] overflow-hidden bg-gray-950 pt-24 text-white sm:pt-28 lg:min-h-[92vh] lg:pt-36"
    >
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat lg:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/92 via-gray-950/72 to-gray-950/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-24">
        <div>
          <SectionBadge>Real Estate • Construction • Investment • Supply</SectionBadge>

          <h1 className="mt-6 max-w-4xl text-[clamp(2.15rem,10vw,3.25rem)] font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:mt-7 lg:text-7xl">
            Oakland CRI builds property value from land to handover.
          </h1>

          <p className="mt-5 max-w-2xl text-[clamp(0.95rem,3.8vw,1.05rem)] leading-7 text-gray-200 sm:text-lg sm:leading-8 lg:mt-6">
            Construction, real estate, investment, and materials supply with a
            clear, dependable execution partner.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9 lg:gap-4">
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--button-bg)] px-7 py-4 text-sm font-black text-[var(--button-text)] shadow-xl shadow-[var(--button-shadow)] transition hover:bg-[var(--button-bg-hover)]"
            >
              Explore Capabilities <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:border-[var(--accent)] hover:bg-white/15"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-8 hidden max-w-xl grid-cols-1 gap-3 sm:grid sm:grid-cols-3 lg:mt-10 lg:gap-4">
            {[
              ["Real Estate", "Solutions"],
              ["Construction", "Delivery"],
              ["Supply", "Materials"],
            ].map(([top, bottom]) => (
              <div
                key={top}
                className="min-w-0 rounded-lg border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur"
              >
                <p className="break-words text-[13px] font-black text-white sm:text-sm">
                  {top}
                </p>
                <p className="mt-1 text-xs font-semibold text-gray-300">
                  {bottom}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 overflow-hidden rounded-xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur lg:hidden">
            <div className="relative h-48 overflow-hidden rounded-lg sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1000&q=80"
                alt="Modern building under construction"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/95 p-4 text-gray-950">
                <p className="break-words text-sm font-black leading-5">
                  Build. Property. Investment. Supply.
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-600">
                  One coordinated path from enquiry to project decision.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/35 backdrop-blur">
            <div className="relative h-[470px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80"
                alt="Modern building under construction"
                fill
                sizes="42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/82 via-gray-950/18 to-transparent" />
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-white/15 bg-white/95 p-5 text-gray-950 shadow-2xl shadow-black/25">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[var(--accent)] p-3 text-white">
                    <ShieldCheck size={24} />
                  </div>

                  <div>
                    <p className="font-black">Construction, property, and supply</p>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      From land and planning to site delivery and supply.
                    </p>
                  </div>
                </div>

                <div className="grid shrink-0 grid-cols-2 gap-3 text-center">
                  <div className="rounded-lg bg-orange-50 px-4 py-3">
                    <p className="text-2xl font-black text-orange-600">4</p>
                    <p className="text-[11px] font-black uppercase tracking-[0.14em] text-gray-500">
                      Pillars
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-100 px-4 py-3">
                    <p className="text-2xl font-black text-gray-950">1</p>
                    <p className="text-[11px] font-black uppercase tracking-[0.14em] text-gray-500">
                      Partner
                    </p>
                  </div>
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
  const [activeStatement, setActiveStatement] = useState(0);
  const currentStatement = missionVisionItems[activeStatement];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStatement((index) => (index + 1) % missionVisionItems.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      data-reveal
      className="reveal-section bg-[var(--soft-bg)] py-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
        <div>
          <SectionBadge>About {brandName}</SectionBadge>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[var(--text)] md:text-5xl">
            A practical real estate partner for building, buying, and investing
            well.
          </h2>

          <div className="mt-6 hidden overflow-hidden rounded-xl border border-[var(--border)] shadow-lg shadow-[var(--card-shadow)] md:block">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
              alt="Construction worker reviewing site progress"
              width={1000}
              height={667}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="h-64 w-full object-cover lg:h-72"
            />
          </div>
        </div>

        <div className="space-y-5 text-base leading-7 text-[var(--muted)] lg:text-lg lg:leading-8">
          <p className="text-lg leading-8">
            {brandName} helps clients build, buy, invest, and supply with
            greater clarity and confidence.
          </p>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm lg:p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--accent-text)]">
                {currentStatement.label}
              </p>

              <div className="flex gap-2" aria-label="Mission and vision controls">
                {missionVisionItems.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveStatement(index)}
                    className={`h-2.5 rounded-full transition ${
                      activeStatement === index
                        ? "w-7 bg-[var(--accent)]"
                        : "w-2.5 bg-[var(--border)]"
                    }`}
                    aria-label={`Show ${item.label}`}
                    aria-pressed={activeStatement === index}
                  />
                ))}
              </div>
            </div>

            <h3 className="mt-4 text-xl font-black leading-7 text-[var(--text)]">
              {currentStatement.title}
            </h3>

            <p className="mt-3 text-base leading-7 text-[var(--muted)]">
              {currentStatement.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section
      data-reveal
      className="reveal-section bg-[var(--bg)] py-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionBadge>Four Pillars</SectionBadge>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-[var(--text)] md:text-5xl">
              The operating model behind every Oakland CRI engagement.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[var(--muted)]">
            Property, construction, supply, and investment. Clear and
            accountable.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-2 lg:mt-9 lg:grid-cols-4 lg:gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--card-shadow)] lg:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-text)] lg:h-12 lg:w-12">
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 text-base font-black leading-6 text-[var(--text)] lg:mt-5 lg:text-xl">
                  {pillar.title}
                </h3>

                <p className="mt-3 hidden leading-7 text-[var(--muted)] sm:block">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      data-reveal
      className="reveal-section bg-[var(--bg)] py-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Our Services</SectionBadge>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[var(--text)] md:text-5xl">
            End-to-end support across construction, real estate, supply, and
            investment.
          </h2>
        </div>

        <div className="mt-7 overflow-x-auto pb-3 lg:mt-10 lg:overflow-visible lg:pb-0">
          <div className="relative flex min-w-max items-start justify-between gap-5 px-1 pt-2 lg:min-w-0 lg:gap-4 lg:px-0">
            <div className="absolute left-8 right-8 top-8 h-px bg-[var(--border)]" />

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative z-10 flex w-28 shrink-0 flex-col items-center text-center sm:w-36 lg:w-auto lg:flex-1 lg:shrink"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--accent-text)] shadow-lg shadow-[var(--card-shadow)] transition group-hover:-translate-y-1 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)]">
                  <Icon size={21} />
                </div>

                <h3 className="mt-3 text-xs font-black leading-5 text-[var(--text)] sm:text-sm lg:text-base">
                  {service.title}
                </h3>

                <p className="mt-2 hidden max-w-44 text-sm leading-6 text-[var(--muted)] lg:block">
                  {service.description}
                </p>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section
      data-reveal
      className="reveal-section py-12 text-white lg:py-20"
      style={{ background: "var(--dark-section)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <SectionBadge>Why Choose Us</SectionBadge>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-5xl">
            Built on trust, clarity, and quality execution.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--on-dark-muted)]">
            Better information. Practical guidance. Dependable delivery.
          </p>

          <div className="mt-6 rounded-lg border border-[var(--on-dark-border)] bg-[var(--on-dark-panel)] p-5 backdrop-blur lg:mt-8">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-[var(--accent)] p-3 text-white">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-lg font-black text-white">
                  Trusted by the federal government
                </p>
                <p className="mt-2 leading-7 text-[var(--on-dark-muted)]">
                  Professional standards, disciplined process, accountable
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
          {values.map((value, index) => (
            <div
              key={value}
              className={`items-start gap-3 rounded-lg border border-[var(--on-dark-border)] bg-[var(--on-dark-panel)] p-4 backdrop-blur lg:p-5 ${
                index > 3 ? "hidden sm:flex" : "flex"
              }`}
            >
              <CheckCircle2
                className="mt-1 shrink-0 text-[var(--accent-text)]"
                size={22}
              />
              <p className="font-semibold leading-7 text-[var(--on-dark-text)]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDashboard() {
  const [activeTab, setActiveTab] = useState(dashboardTabs[0]);

  return (
    <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl shadow-[var(--card-shadow)] sm:p-4 lg:mt-10 lg:p-6">
      <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-4 lg:flex-row lg:items-center lg:justify-between lg:pb-5">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-text)] lg:h-10 lg:w-10">
              <Layers3 size={20} />
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-text)] lg:text-sm lg:font-black lg:tracking-[0.18em]">
              Project Dashboard
            </p>
          </div>

          <h3 className="mt-3 text-xl font-extrabold leading-7 text-[var(--text)] lg:text-2xl lg:font-black">
            Track the work by capability.
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-1 rounded-lg border border-[var(--border)] bg-[var(--soft-bg)] p-1 sm:gap-2">
          {dashboardTabs.map((tab) => {
            const isActive = activeTab.label === tab.label;

            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-2 py-2 text-[11px] font-bold transition sm:px-3 sm:text-xs lg:px-4 lg:py-3 lg:text-sm lg:font-black ${
                  isActive
                    ? "bg-[var(--button-bg)] text-[var(--button-text)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--accent-text)]"
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 pt-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-6 lg:pt-6">
        <div className="relative min-h-48 overflow-hidden rounded-lg sm:min-h-60 lg:min-h-64">
          <Image
            src={activeTab.image}
            alt={activeTab.title}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <span className="rounded-full bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-gray-950 lg:px-4 lg:text-xs lg:font-black lg:tracking-[0.16em]">
              {activeTab.status}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-lg border border-[var(--border)] bg-[var(--soft-bg)] p-4 lg:gap-6 lg:p-6">
          <div>
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-[var(--text)] lg:text-3xl lg:font-black">
              {activeTab.title}
            </h4>

            <p className="mt-3 text-sm leading-6 text-[var(--muted)] lg:mt-4 lg:text-base lg:leading-7">
              A simple view of scope, focus, and next steps.
            </p>
          </div>

          <div className="grid gap-2 lg:gap-3">
            {activeTab.metrics.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 sm:grid-cols-[120px_1fr] lg:gap-2 lg:p-4 lg:sm:grid-cols-[140px_1fr]"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--accent-text)] lg:text-xs lg:font-black lg:tracking-[0.16em]">
                  {label}
                </p>
                <p className="text-sm font-medium leading-6 text-[var(--text)] lg:text-base lg:font-semibold">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      data-reveal
      className="reveal-section bg-[var(--bg)] py-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionBadge>Project Dashboard</SectionBadge>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-[var(--text)] md:text-5xl">
              Construction, investment, and supply at a glance.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[var(--muted)]">
            A compact view of the work Oakland CRI is positioned to deliver.
          </p>
        </div>

        <ProjectDashboard />
      </div>
    </section>
  );
}

function ReadyStart() {
  return (
    <section
      data-reveal
      className="reveal-section bg-[var(--soft-bg)] py-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <SectionBadge>Ready To Start</SectionBadge>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[var(--text)] md:text-5xl">
            Ready to start your project with Oakland CRI?
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] lg:text-lg lg:leading-8">
            Share the location, service need, and project stage. We will guide
            the next step.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--button-bg)] px-7 py-4 text-sm font-black text-[var(--button-text)] shadow-xl shadow-[var(--button-shadow)] transition hover:bg-[var(--button-bg-hover)]"
          >
            Start Your Project <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-2xl shadow-[var(--card-shadow)]">
          <div className="relative h-60 overflow-hidden rounded-xl sm:h-80 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
              alt="Modern residential property exterior"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-white/95 p-4 text-gray-950 shadow-xl backdrop-blur sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--accent-text)]">
                Next Step
              </p>
              <p className="mt-2 text-xl font-black leading-7 sm:text-2xl">
                Tell us what you want to build, buy, invest in, or supply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] overflow-y-auto bg-gray-950/70 px-4 py-6 backdrop-blur-sm sm:py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="faq-title"
    >
      <button
        type="button"
        className="fixed inset-0 cursor-default"
        aria-label="Close FAQ"
        onClick={onClose}
      />

      <div className="relative mx-auto max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl shadow-black/30 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <SectionBadge>FAQ</SectionBadge>

            <h2
              id="faq-title"
              className="mt-4 text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl"
            >
              Common questions.
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--soft-bg)] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent-text)]"
            aria-label="Close FAQ"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-[var(--border)] bg-[var(--soft-bg)] p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-black text-[var(--text)] marker:hidden sm:text-lg">
                <span className="flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-text)] transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)] sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      data-reveal
      className="reveal-section py-12 text-white lg:py-20"
      style={{ background: "var(--dark-section)" }}
    >
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div>
          <SectionBadge>Contact Us</SectionBadge>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-5xl">
            Contact Oakland CRI Company Limited.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--on-dark-muted)]">
            Reach us by email or WhatsApp.
          </p>

          <div className="mt-8 space-y-3 lg:mt-10 lg:space-y-4">
            {whatsappContacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-[var(--on-dark-border)] bg-[var(--on-dark-panel)] p-5 transition hover:bg-[var(--on-dark-panel-hover)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25d366] text-white">
                  <WhatsAppLogo size={20} />
                </span>
                <span className="font-semibold">
                  WhatsApp: {contact.label}
                </span>
              </a>
            ))}

            <a
              href={emailLink}
              className="flex items-center gap-4 rounded-lg border border-[var(--on-dark-border)] bg-[var(--on-dark-panel)] p-5 transition hover:bg-[var(--on-dark-panel-hover)]"
            >
              <Mail className="text-[var(--accent-text)]" size={24} />
              <span className="font-semibold">{emailAddress}</span>
            </a>

            <div className="flex items-center gap-4 rounded-lg border border-[var(--on-dark-border)] bg-[var(--on-dark-panel)] p-5">
              <MapPin className="text-[var(--accent-text)]" size={24} />
              <span className="font-semibold">Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      data-reveal
      className="reveal-section border-t border-[var(--border)] bg-[var(--bg)] py-4 lg:py-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 text-center sm:flex-row sm:gap-4 sm:text-left lg:px-8">
        <div>
          <p className="text-base font-black text-[var(--text)] sm:text-lg">
            {companyLegalName}
          </p>
          <p className="hidden text-sm text-[var(--muted)] sm:block">
            Real estate, construction, and property investment solutions.
          </p>
        </div>

        <p className="text-xs text-[var(--muted)] sm:text-sm">
          Copyright 2026 {companyLegalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function MobileContactBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 lg:hidden">
      {isOpen && (
        <div className="flex flex-col items-end gap-3">
          {whatsappContacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-black/25 transition hover:bg-green-600"
              aria-label={`Contact Oakland CRI on WhatsApp at ${contact.label}`}
              title={contact.label}
            >
              <WhatsAppLogo size={23} />
            </a>
          ))}

          <a
            href={emailLink}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--accent-text)] shadow-xl shadow-black/20 ring-1 ring-[var(--border)] transition hover:bg-[var(--accent-soft)]"
            aria-label="Email Oakland CRI"
          >
            <Mail size={22} />
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[var(--button-bg)] text-[var(--button-text)] shadow-2xl shadow-[var(--button-shadow)] transition hover:bg-[var(--button-bg-hover)]"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
      >
        <span className="absolute inset-0 grid place-items-center">
          <X
            size={26}
            className={`transition duration-200 ${
              isOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
            }`}
          />
        </span>
        <span
          className={`absolute inset-0 grid place-items-center transition duration-200 ${
            isOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
          }`}
        >
          <Plus size={28} />
        </span>
      </button>
    </div>
  );
}

function BrandedLoader() {
  return (
    <div className="loader-screen fixed inset-0 z-[90] grid place-items-center overflow-hidden bg-[#111827]">
      <div className="loader-orange absolute inset-0 bg-[var(--accent)]" />
      <div className="relative flex flex-col items-center gap-5">
        <div className="loader-o text-6xl font-black text-white">
          O
        </div>

        <div className="loader-copy text-center">
          <p className="text-xl font-black tracking-tight text-white">
            Oakland CRI Company Limited
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-200">
            Building value
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("reveal-visible"));
      return;
    }

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.9) {
        section.classList.add("reveal-visible");
      }
    });

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const themeStyles: ThemeStyles = {
    "--bg": isDarkMode ? "#12110f" : "#ffffff",
    "--surface": isDarkMode ? "#1a1815" : "#ffffff",
    "--surface-2": isDarkMode ? "#211e19" : "#fff7ed",
    "--soft-bg": isDarkMode ? "#171512" : "#fff7ed",
    "--text": isDarkMode ? "#f7f1e8" : "#111827",
    "--muted": isDarkMode ? "#c8bfb2" : "#4b5563",
    "--border": isDarkMode ? "rgba(249, 115, 22, 0.24)" : "#fed7aa",
    "--nav-bg": isDarkMode
      ? "rgba(18, 17, 15, 0.9)"
      : "rgba(255, 255, 255, 0.92)",
    "--dark-section": isDarkMode
      ? "linear-gradient(135deg, #14120f 0%, #1f1b15 56%, #2a2117 100%)"
      : "#111827",
    "--accent": "#f97316",
    "--accent-strong": "#ea580c",
    "--accent-soft": isDarkMode ? "rgba(249, 115, 22, 0.14)" : "#ffedd5",
    "--accent-soft-strong": isDarkMode
      ? "rgba(249, 115, 22, 0.32)"
      : "#fed7aa",
    "--accent-text": "#f97316",
    "--accent-contrast": "#ffffff",
    "--button-bg": "#f97316",
    "--button-bg-hover": "#ea580c",
    "--button-text": "#ffffff",
    "--button-shadow": isDarkMode
      ? "rgba(249, 115, 22, 0.28)"
      : "rgba(249, 115, 22, 0.28)",
    "--card-shadow": isDarkMode
      ? "rgba(0, 0, 0, 0.28)"
      : "rgba(255, 237, 213, 0.95)",
    "--image-shadow": isDarkMode
      ? "rgba(0, 0, 0, 0.38)"
      : "rgba(255, 237, 213, 0.95)",
    "--floating-panel": isDarkMode
      ? "rgba(247, 241, 232, 0.94)"
      : "rgba(255, 255, 255, 0.95)",
    "--floating-text": isDarkMode ? "#171512" : "#030712",
    "--floating-muted": isDarkMode ? "#665a4b" : "#4b5563",
    "--on-dark-text": "#f8f5ef",
    "--on-dark-muted": isDarkMode ? "#d6cec3" : "#d1d5db",
    "--on-dark-border": isDarkMode
      ? "rgba(249, 115, 22, 0.18)"
      : "rgba(255, 255, 255, 0.1)",
    "--on-dark-panel": isDarkMode
      ? "rgba(255, 255, 255, 0.055)"
      : "rgba(255, 255, 255, 0.05)",
    "--on-dark-panel-hover": isDarkMode
      ? "rgba(249, 115, 22, 0.11)"
      : "rgba(255, 255, 255, 0.1)",
    "--contact-card": isDarkMode ? "#f8f1e7" : "#ffffff",
    "--contact-card-border": isDarkMode
      ? "rgba(249, 115, 22, 0.3)"
      : "rgba(255, 255, 255, 0.1)",
  };

  return (
    <main
      style={themeStyles}
      className="min-h-screen scroll-smooth bg-[var(--bg)] font-sans text-[var(--text)] transition-colors duration-300"
    >
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenFaq={() => setIsFaqOpen(true)}
      />
      <Hero />
      <About />
      <Pillars />
      <Services />
      <WhyChooseUs />
      <Projects />
      <ReadyStart />
      <Contact />
      <Footer />
      <MobileContactBar />
      <FAQModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
      <BrandedLoader />
    </main>
  );
}
