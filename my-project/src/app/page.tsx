"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Building, Menu, ShieldCheck, Sparkles, Users, X } from "lucide-react";

type Language = "es" | "en";

type NavigationItem = { label: string; href: string };
type ServiceCard = { title: string; description: string };
type StructureCard = {
  icon: typeof Sparkles;
  title: string;
  description: string;
};
type FooterContent = {
  aboutTitle: string;
  aboutDescription: string;
  contactTitle: string;
  contactItems: string[];
  locationsTitle: string;
  locations: string[];
  rights: string;
};

type TranslationContent = {
  navigation: NavigationItem[];
  languageLabel: string;
  languageNames: Record<Language, string>;
  companyLines: [string, string];
  about: {
    title: string;
    lead: string;
    paragraphs: string[];
    imageAlt: string;
  };
  mission: { title: string; description: string };
  vision: { title: string; description: string };
  services: { title: string; cards: ServiceCard[] };
  structure: { title: string; cards: StructureCard[] };
  contact: { phone: string; primaryEmail: string; secondaryEmail: string };
  footer: FooterContent;
};

const translations: Record<Language, TranslationContent> = {
  es: {
    navigation: [
      { label: "Inicio", href: "#inicio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Misión", href: "#mision" },
      { label: "Visión", href: "#vision" },
      { label: "Servicios", href: "#servicios" },
      { label: "Estructura", href: "#estructura" },
      { label: "Contacto", href: "#contacto" },
    ],
    languageLabel: "Idioma",
    languageNames: {
      es: "Español",
      en: "Inglés",
    },
    companyLines: [
      "S.G Usa Chile",
      "Suministros y Servicios para Industrias Exigentes",
    ],
    about: {
      title: "Nosotros...",
      lead: " es una empresa con presencia en Chile y Estados Unidos, impulsado por un fuerte espíritu empresarial y una visión con sentido social.",
      paragraphs: [
        "Buscamos aportar valor real a nuestros clientes a lo largo de toda su cadena de valor, tanto en los procesos industriales como en los servicios que entregamos. Nuestro modelo de negocio se enfoca en resolver problemas operativos, reducir costos y potenciar la eficiencia y la innovación en nuestros clientes.",
        "Más que vender, nos enfocamos en construir relaciones de largo plazo, con soluciones concretas y un servicio de excelencia que nos define.",
      ],
      imageAlt: "Espacio Reservado para Imagen",
    },
    mission: {
      title: "Nuestra Misión",
      description:
        "Ser una fuente de orgullo para nuestro talento humano y superar consistentemente las expectativas de nuestros clientes, basándonos en la tecnología, el liderazgo, la innovación y el desarrollo de nuestro equipo, con un desempeño sobresaliente y sostenible a largo plazo.",
    },
    vision: {
      title: "Nuestra Visión",
      description:
        "Ser la empresa líder a nivel nacional en la entrega de soluciones y servicios integrales para la industria, destacando por nuestra rentabilidad, eficiencia, calidad y excelencia en el servicio, asegurando un firme compromiso con la responsabilidad social y ambiental.",
    },
    services: {
      title: "Suministros y Servicios para Industrias Exigentes",
      cards: [
        {
          title: "Orientación a Resultados",
          description:
            "Nos enfocamos en generar propuestas de valor sostenibles, impulsando la mejora continua y el cumplimiento de objetivos a través de indicadores claros, medibles y alineados con la eficiencia operativa.",
        },
        {
          title: "Calidad",
          description:
            "Nos comprometemos a satisfacer y superar constantemente las necesidades de nuestros clientes, garantizando excelencia en cada producto, servicio y entrega.",
        },
        {
          title: "Compromiso ético y responsabilidad social",
          description:
            "Actuamos con integridad, transparencia y respeto, conduciéndonos con un firme propósito de generar impacto positivo en la sociedad y el entorno.",
        },
      ],
    },
    structure: {
      title: "Estructura Diversificada y Sinergia Empresarial",
      cards: [
        {
          icon: Sparkles,
          title: "Respuestas Ágiles",
          description:
            "Esta sinergia nos permite ofrecer respuestas ágiles y efectivas, ajustándonos con nuestros partners de valor y cumpliendo con los compromisos.",
        },
        {
          icon: Users,
          title: "Adaptabilidad y Cercanía",
          description:
            "Gestionamos negocios, somos ágiles y ofrecemos soluciones personalizadas con innovación y enfoque en resolver problemas reales en nuestros clientes.",
        },
        {
          icon: ShieldCheck,
          title: "Unidades Especializadas",
          description:
            "Contamos con una estructura diversificada, conformada por individuos con roles, talento y experiencia que trabajan de manera integrada para atender nuestros mercados.",
        },
        {
          icon: Building,
          title: "Experiencia de Excelencia",
          description:
            "Nos distingue la solidez de nuestro servicio, la coordinación interna y la competitividad con la que sostenemos la relación con nuestros clientes.",
        },
      ],
    },
    contact: {
      phone: "+56 9 84699753",
      primaryEmail: "contacto@santeringroup.com",
      secondaryEmail: "santeringroup.usachile@gmail.com",
    },
    footer: {
      aboutTitle: "Sobre Santerin Group",
      aboutDescription:
        "Impulsamos soluciones de alto impacto para industrias exigentes en Chile y Estados Unidos, con un equipo multidisciplinario comprometido con la excelencia.",
      contactTitle: "Contacto",
      contactItems: [
        "Teléfono: +56 9 84699753",
        "Email: contacto@santeringroup.com",
        "Email: santeringroup.usachile@gmail.com",
      ],
      locationsTitle: "Ubicaciones",
      locations: [
        "7901 4TH ST N STE 300, San Petersburgo, FL 33702, Estados Unidos",
        "La Capitana 80, Piso 1, Of 108 – Las Condes, Santiago de Chile",
      ],
      rights: "© 2024 Santerin Group USA Chile. Todos los derechos reservados.",
    },
  },
  en: {
    navigation: [
      { label: "Home", href: "#inicio" },
      { label: "About", href: "#nosotros" },
      { label: "Mission", href: "#mision" },
      { label: "Vision", href: "#vision" },
      { label: "Services", href: "#servicios" },
      { label: "Structure", href: "#estructura" },
      { label: "Contact", href: "#contacto" },
    ],
    languageLabel: "Language",
    languageNames: {
      es: "Spanish",
      en: "English",
    },
    companyLines: [
      "S.G Usa Chile",
      "Supplies and Services for Demanding Industries",
    ],
    about: {
      title: "About Us...",
      lead: " operates in Chile and the United States, driven by an entrepreneurial spirit and a socially conscious vision.",
      paragraphs: [
        "We deliver tangible value to our clients throughout their value chain, supporting industrial processes and services alike. Our business model focuses on solving operational challenges, reducing costs, and boosting efficiency and innovation for our clients.",
        "More than selling, we build long-term relationships through concrete solutions and a service experience that defines who we are.",
      ],
      imageAlt: "Reserved Space for Image",
    },
    mission: {
      title: "Our Mission",
      description:
        "To be a source of pride for our people and consistently exceed our clients’ expectations through technology, leadership, innovation, and team development, achieving outstanding and sustainable performance over time.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To lead nationally in providing comprehensive industrial solutions and services, recognized for profitability, efficiency, quality, and excellence while upholding social and environmental responsibility.",
    },
    services: {
      title: "Supplies and Services for Demanding Industries",
      cards: [
        {
          title: "Results-Oriented",
          description:
            "We deliver sustainable value propositions, driving continuous improvement and goal achievement with clear, measurable indicators aligned to operational efficiency.",
        },
        {
          title: "Quality",
          description:
            "We are committed to consistently meeting and exceeding client needs, ensuring excellence in every product, service, and delivery.",
        },
        {
          title: "Ethics and Social Responsibility",
          description:
            "We act with integrity, transparency, and respect, guided by a firm purpose of generating positive impact in society and the environment.",
        },
      ],
    },
    structure: {
      title: "Diversified Structure and Business Synergy",
      cards: [
        {
          icon: Sparkles,
          title: "Agile Responses",
          description:
            "Our synergy enables agile and effective responses, coordinating with our value partners and honoring every commitment.",
        },
        {
          icon: Users,
          title: "Adaptability and Closeness",
          description:
            "We manage businesses with agility and offer customized solutions, innovating with a focus on solving real client challenges.",
        },
        {
          icon: ShieldCheck,
          title: "Specialized Units",
          description:
            "We operate with a diversified structure of talented experts working together to serve each of our markets effectively.",
        },
        {
          icon: Building,
          title: "Excellence Experience",
          description:
            "We stand out through service reliability, internal coordination, and the competitiveness that sustains our client relationships.",
        },
      ],
    },
    contact: {
      phone: "+56 9 84699753",
      primaryEmail: "contacto@santeringroup.com",
      secondaryEmail: "santeringroup.usachile@gmail.com",
    },
    footer: {
      aboutTitle: "About Santerin Group",
      aboutDescription:
        "We deliver high-impact solutions for demanding industries in Chile and the United States with a multidisciplinary team committed to excellence.",
      contactTitle: "Contact",
      contactItems: [
        "Phone: +56 9 84699753",
        "Email: contacto@santeringroup.com",
        "Email: santeringroup.usachile@gmail.com",
      ],
      locationsTitle: "Locations",
      locations: [
        "7901 4TH ST N STE 300, St. Petersburg, FL 33702, United States",
        "La Capitana 80, Floor 1, Of. 108 – Las Condes, Santiago, Chile",
      ],
      rights: "© 2024 Santerin Group USA Chile. All rights reserved.",
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [transitionStage, setTransitionStage] = useState<
    "idle" | "out" | "in"
  >("idle");
  const [pendingLanguage, setPendingLanguage] = useState<Language | null>(null);

  const handleLanguageChange = (lang: Language) => {
    if (lang === language || transitionStage !== "idle") {
      setMenuOpen(false);
      return;
    }

    setPendingLanguage(lang);
    setTransitionStage("out");
    setMenuOpen(false);
  };

  useEffect(() => {
    if (transitionStage === "out" && pendingLanguage) {
      const timeout = setTimeout(() => {
        setLanguage(pendingLanguage);
        setPendingLanguage(null);
        setTransitionStage("in");
      }, 200);

      return () => clearTimeout(timeout);
    }

    if (transitionStage === "in") {
      const timeout = setTimeout(() => {
        setTransitionStage("idle");
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [pendingLanguage, transitionStage]);

  const transitionClasses =
    transitionStage === "out"
      ? "opacity-0 translate-y-2"
      : "opacity-100 translate-y-0";
  const disableLanguageButtons = transitionStage !== "idle";
  const t = translations[language];

  return (
    <main
      id="inicio"
      className={`min-h-screen scroll-smooth bg-white text-[#1f1f1f] transition-all duration-300 ease-in-out ${transitionClasses}`}
      aria-busy={transitionStage !== "idle"}
    >
      <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-white via-white to-[#d9d9d9] px-6 py-4 shadow-[0_6px_24px_rgba(0,0,0,0.08)] md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative h-20 w-20 md:h-24 md:w-24">
                <Image
                  src="/logosimbolo.png"
                  alt="Santerin Group logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="text-sm uppercase tracking-[0.45em] text-[#555]">
                <p>{t.companyLines[0]}</p>
                <p className="mt-2 text-xs tracking-[0.3em] text-[#3f3f3f]">
                  {t.companyLines[1]}
                </p>
              </div>
            </div>

            <div className="hidden items-center justify-end gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#555] md:flex">
              <span className="text-lg tracking-normal">{t.languageLabel}</span>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#3f3f3f]">
                <button
                  type="button"
                  onClick={() => handleLanguageChange("en")}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 transition ${
                    language === "en"
                      ? "bg-[#f4d35e] text-[#1f1f1f]"
                      : "hover:text-[#1f1f1f]"
                  }`}
                  aria-pressed={language === "en"}
                  disabled={disableLanguageButtons}
                  aria-disabled={disableLanguageButtons}
                >
                  <span role="img" aria-label="United States flag">
                    🇺🇸
                  </span>
                  <span className="text-[11px]">{t.languageNames.en}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleLanguageChange("es")}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 transition ${
                    language === "es"
                      ? "bg-[#f4d35e] text-[#1f1f1f]"
                      : "hover:text-[#1f1f1f]"
                  }`}
                  aria-pressed={language === "es"}
                  disabled={disableLanguageButtons}
                  aria-disabled={disableLanguageButtons}
                >
                  <span role="img" aria-label="Chile flag">
                    🇨🇱
                  </span>
                  <span className="text-[11px]">{t.languageNames.es}</span>
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f4d35e] bg-[#f4d35e] text-[#1f1f1f] shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e] md:hidden"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="md:hidden">
            <div className="flex items-center justify-end">
              <div className="flex w-full items-center justify-between gap-3 rounded-full bg-[#f4d35e]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3f3f3f] shadow-inner">
                <span className="text-[12px] tracking-[0.2em] text-[#555]">
                  {t.languageLabel}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("en")}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e] disabled:cursor-not-allowed disabled:opacity-60 ${
                      language === "en"
                        ? "bg-[#f4d35e] text-[#1f1f1f] shadow"
                        : "hover:bg-[#f4d35e]/70 hover:text-[#1f1f1f]"
                    }`}
                    aria-pressed={language === "en"}
                    aria-label={t.languageNames.en}
                    disabled={disableLanguageButtons}
                    aria-disabled={disableLanguageButtons}
                  >
                    <span role="img" aria-label="United States flag">
                      🇺🇸
                    </span>
                    <span className="text-[10px]">{t.languageNames.en}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("es")}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e] disabled:cursor-not-allowed disabled:opacity-60 ${
                      language === "es"
                        ? "bg-[#f4d35e] text-[#1f1f1f] shadow"
                        : "hover:bg-[#f4d35e]/70 hover:text-[#1f1f1f]"
                    }`}
                    aria-pressed={language === "es"}
                    aria-label={t.languageNames.es}
                    disabled={disableLanguageButtons}
                    aria-disabled={disableLanguageButtons}
                  >
                    <span role="img" aria-label="Chile flag">
                      🇨🇱
                    </span>
                    <span className="text-[10px]">{t.languageNames.es}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden items-center justify-center gap-4 text-[13px] font-semibold uppercase tracking-[0.35em] text-[#3f3f3f] md:flex md:justify-between">
            {t.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-full px-4 py-2 transition hover:bg-[#f4d35e] hover:text-[#1f1f1f]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="mx-auto mt-4 flex max-w-6xl flex-col gap-6 rounded-3xl bg-white/95 p-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#3f3f3f] shadow-[0_6px_24px_rgba(0,0,0,0.08)] backdrop-blur">
              <div className="flex flex-col gap-3">
                {t.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full px-4 py-3 text-center transition hover:bg-[#f4d35e] hover:text-[#1f1f1f]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <section
        id="nosotros"
        className="px-6 pt-64 pb-16 scroll-mt-32 md:px-16 md:pt-56"
      >
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-[15px] leading-relaxed text-[#404040]">
            <h1 className="text-2xl font-semibold uppercase tracking-[0.3em] text-[#1f1f1f]">
              {t.about.title}
            </h1>
            <p>
              <strong>Santerin Group USA Chile</strong>
              {t.about.lead}
            </p>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full max-w-sm overflow-hidden rounded-3xl shadow-[0_12px_24px_rgba(0,0,0,0.08)] sm:h-72 sm:max-w-md md:h-96 md:max-w-lg">
              <Image
                src="/herophoto.png"
                alt={t.about.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div
              id="mision"
              className="space-y-4 rounded-3xl border border-[#c3c3c3] bg-gradient-to-b from-white via-white to-[#efefef] p-8 text-left shadow-[0_12px_24px_rgba(0,0,0,0.08)] scroll-mt-32"
            >
              <h3 className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-[#1f1f1f] md:text-left">
                {t.mission.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#404040]">
                {t.mission.description}
              </p>
            </div>
            <div
              id="vision"
              className="space-y-4 rounded-3xl border border-[#c3c3c3] bg-gradient-to-b from-white via-white to-[#efefef] p-8 text-left shadow-[0_12px_24px_rgba(0,0,0,0.08)] scroll-mt-32"
            >
              <h3 className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-[#1f1f1f] md:text-left">
                {t.vision.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#404040]">
                {t.vision.description}
              </p>
            </div>
          </div>

          <section id="servicios" className="space-y-12 scroll-mt-32">
            <div className="text-center">
              <h3 className="text-2xl font-semibold uppercase tracking-[0.3em] text-[#1f1f1f]">
                {t.services.title}
              </h3>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {t.services.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-[#d1d1d1] bg-white p-8 text-center shadow-[0_10px_18px_rgba(0,0,0,0.05)]"
                >
                  <h4 className="text-lg font-semibold uppercase tracking-[0.25em] text-[#1f1f1f]">
                    {card.title}
                  </h4>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#404040]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="estructura" className="space-y-12 scroll-mt-32">
            <div className="text-center">
              <h3 className="text-2xl font-semibold uppercase tracking-[0.3em] text-[#1f1f1f]">
                {t.structure.title}
              </h3>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {t.structure.cards.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-3xl border border-[#d1d1d1] bg-gradient-to-b from-white via-white to-[#f3f3f3] p-8 shadow-[0_10px_18px_rgba(0,0,0,0.05)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4d35e] text-[#1f1f1f]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold uppercase tracking-[0.25em] text-[#1f1f1f]">
                      {title}
                    </h4>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#404040]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <footer
        id="contacto"
        className="bg-[#1f1f1f] px-6 py-12 text-white md:px-16"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:gap-16">
          <div className="flex-1 space-y-3 text-[15px] leading-relaxed">
            <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-[#f4d35e]">
              {t.footer.aboutTitle}
            </h4>
            <p className="text-sm text-[#d1d1d1]">
              {t.footer.aboutDescription}
            </p>
          </div>
          <div className="flex-1 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-[#f4d35e]">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2 text-sm text-[#d1d1d1]">
              {t.footer.contactItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-[#f4d35e]">
              {t.footer.locationsTitle}
            </h4>
            <ul className="space-y-2 text-sm text-[#d1d1d1]">
              {t.footer.locations.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl text-center text-[11px] uppercase tracking-[0.35em] text-[#aaaaaa]">
          {t.footer.rights}
        </div>
      </footer>
    </main>
  );
}
