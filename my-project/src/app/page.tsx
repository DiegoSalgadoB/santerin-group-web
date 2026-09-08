"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Building,
  Hammer,
  Layers,
  Menu,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";

type Language = "es" | "en";

type NavigationItem = { label: string; href: string };
type ServiceCard = {
  icon: typeof Sparkles;
  title: string;
  description: string;
  image: string;
};
type StructureCard = {
  icon: typeof Sparkles;
  title: string;
  description: string;
};
type MissionVisionContent = {
  title: string;
  paragraphs: string[];
  tagline: string;
};
type ContactFormContent = {
  title: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  serviceLabel: string;
  serviceDefaultOption: string;
  serviceOtherOption: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
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
  mission: MissionVisionContent;
  vision: MissionVisionContent;
  services: { title: string; cards: ServiceCard[] };
  structure: { title: string; cards: StructureCard[] };
  contact: { phone: string; primaryEmail: string; secondaryEmail: string };
  contactForm: ContactFormContent;
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
      lead: ", es una empresa internacional registrada en el Estado de Florida (EE. UU.), con registros tributarios ante el Internal Revenue Service (IRS) de los Estados Unidos. Contamos con Agente Registrado en la ciudad de St. Petersburg, Condado de Pinellas, oficina comercial en el sector de Brickell, Condado de Miami-Dade, y operaciones comerciales en Santiago, Región Metropolitana, Chile.",
      paragraphs: [
        "Contamos con un amplio y diversificado portafolio de suministros industriales, orientado a responder a las necesidades de empresas de minería, industria, construcción y mantenimiento en general. Entre nuestras principales soluciones se encuentran herramientas de precisión, repuestos para equipos y maquinaria, componentes para plantas de trituración industrial y soluciones de conexión eléctrica para equipos e instalaciones industriales, entre otros productos especializados.",
        "Nuestro enfoque es facilitar el acceso a productos confiables y soluciones eficientes, respaldados por una red de proveedores nacionales e internacionales y una gestión orientada a las necesidades específicas de cada cliente.",
        "Complementamos nuestra propuesta de valor mediante alianzas estratégicas con operadores logísticos y couriers internacionales, junto con una planificación de despachos programados semanalmente. Esta red nos permite gestionar nuestros envíos de manera ágil, eficiente y trazable, facilitando el seguimiento de cada operación y contribuyendo al cumplimiento oportuno de los requerimientos de nuestros clientes.",
        "En Santerin Group trabajamos para convertirnos en un socio estratégico de largo plazo, proporcionando soluciones confiables, tiempos de respuesta competitivos y un servicio orientado a maximizar la productividad y la continuidad operacional de industrias altamente exigentes.",
      ],
      imageAlt: "Espacio Reservado para Imagen",
    },
    mission: {
      title: "Nuestra Misión",
      paragraphs: [
        "Proveer insumos, repuestos, equipos y soluciones industriales de alta calidad, entregando a nuestros clientes un servicio confiable, ágil y personalizado que contribuya a mantener la continuidad y eficiencia de sus operaciones.",
        "Nos comprometemos a comprender las necesidades de cada cliente, ofreciendo productos nacionales e internacionales y gestionando soluciones para requerimientos estándar y especializados, incluso aquellos de difícil disponibilidad.",
        "Trabajamos para ser un socio estratégico de nuestros clientes, construyendo relaciones comerciales de largo plazo basadas en la confianza, el compromiso, la calidad y la excelencia en el servicio.",
      ],
      tagline: "Entender. Conectar. Resolver. Generar valor.",
    },
    vision: {
      title: "Nuestra Visión",
      paragraphs: [
        "Ser una empresa referente a nivel nacional e internacional en el suministro de insumos, repuestos, equipos y soluciones para la industria, reconocida por nuestra capacidad de respuesta, confiabilidad y conocimiento de las necesidades de nuestros clientes.",
        "Buscamos consolidarnos como un socio estratégico de la industria, ampliando continuamente nuestra oferta de productos y proveedores, fortaleciendo nuestra presencia en mercados internacionales y desarrollando soluciones que permitan a nuestros clientes mejorar su productividad, reducir tiempos de detención y asegurar la continuidad de sus operaciones.",
        "Aspiramos a construir una empresa sólida, innovadora y sostenible, basada en relaciones de largo plazo con nuestros clientes y proveedores.",
      ],
      tagline: "Conectamos la industria con las soluciones que necesita.",
    },
    services: {
      title: "Productos y Soluciones",
      cards: [
        {
          icon: ShieldCheck,
          title: "Smokey 75'S — Indicador de Humo para Pruebas de Hermeticidad",
          image: "/products/smokey-75s.png",
          description:
            "Indicador de humo de origen sueco y licencia norteamericana, libre de aceite inflamable y con cobertura de hasta 600 pies cúbicos (CFM). Diseñado para realizar pruebas de hermeticidad en cabinas de equipos, estanques, refugios mineros y recintos cerrados, permitiendo identificar de forma rápida y efectiva puntos de ingreso de contaminantes. Su uso contribuye a prevenir la exposición a agentes contaminantes y enfermedades profesionales como la silicosis, apoyando el cumplimiento del Plan Nacional de Erradicación de la Silicosis. Cuenta con Resolución Sanitaria Chilena vigente y es homólogo al Indicador de Humo 4C5623.",
        },
        {
          icon: Zap,
          title: "Kits de Conectores y Terminales Eléctricos",
          image: "/products/kits-conectores.png",
          description:
            "Ofrecemos kits de conectores, terminales y componentes eléctricos especializados para maquinaria pesada, equipos industriales y aplicaciones críticas, diseñados para garantizar confiabilidad y desempeño en condiciones de alta exigencia. Nuestro portafolio incluye componentes originales y alternativas de alta calidad, compatibles con marcas líderes como CAT, Komatsu y otros fabricantes, ofreciendo soluciones eficientes para mantenimiento, reparación y recuperación de equipos, contribuyendo a maximizar su continuidad operacional.",
        },
        {
          icon: Wrench,
          title: "Repuestos y Componentes de Motor",
          image: "/products/repuestos-motor.jpeg",
          description:
            "Ofrecemos soluciones a la medida de las necesidades de nuestros clientes a través de un portafolio de repuestos, componentes de motor, sellos, juntas, accesorios, herramientas especializadas y parches magnéticos para el mantenimiento de maquinaria pesada y equipos industriales, que permiten optimizar el mantenimiento, prolongar la vida útil de los equipos y asegurar la continuidad operacional de nuestros clientes.",
        },
        {
          icon: Truck,
          title: "Repuestos y Accesorios para Camiones de Servicio Pesado",
          image: "/products/camiones-pesados.png",
          description:
            "Ofrecemos soluciones a la medida de las necesidades de nuestros clientes por medio de un portafolio de repuestos, componentes y accesorios de alta calidad para camiones MAN, Volvo, Mercedes-Benz, Freightliner, Peterbilt, Kenworth y Mack Trucks. Contamos con una red internacional y nacional de proveedores que nos permite entregar soluciones confiables y oportunas, orientadas a maximizar el rendimiento, confiabilidad y continuidad operacional de su flota.",
        },
        {
          icon: Hammer,
          title: "Soluciones en Ferretería Industrial y Herramientas de Precisión",
          image: "/products/ferreteria-industrial.png",
          description:
            "Ofrecemos soluciones a la medida de las necesidades de nuestros clientes por medio de un portafolio de herramientas de precisión, componentes y suministros industriales para los sectores aeronáutico, minero, industrial y de la construcción. Nuestra red internacional y nacional de proveedores nos permite entregar soluciones confiables, oportunas y especializadas, contribuyendo a la continuidad operacional de nuestros clientes.",
        },
        {
          icon: Layers,
          title:
            "Repuestos, Accesorios y Componentes para Trituración, Cribado y Transporte de Áridos",
          image: "/products/trituracion-cribado.png",
          description:
            "Ofrecemos soluciones a la medida de las necesidades de nuestros clientes para equipos de trituración, clasificación (cribado) y transporte de áridos. Nuestro portafolio incluye PowerScreen y otras marcas reconocidas a nivel mundial, garantizando calidad, disponibilidad y continuidad operacional.",
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
    contactForm: {
      title: "Escríbenos",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre completo",
      emailLabel: "Correo",
      emailPlaceholder: "tucorreo@empresa.com",
      phoneLabel: "Teléfono",
      phonePlaceholder: "+56 9 1234 5678",
      serviceLabel: "Servicio de interés",
      serviceDefaultOption: "Selecciona un producto o servicio",
      serviceOtherOption: "Otra consulta",
      submitLabel: "Enviar mensaje",
      submittingLabel: "Enviando...",
      successMessage: "¡Gracias! Recibimos tu mensaje y te contactaremos a la brevedad.",
      errorMessage:
        "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente o escríbenos directo a contacto@santeringroup.com.",
    },
    footer: {
      aboutTitle: "Sobre Santerin Group",
      aboutDescription:
        "Experiencia, innovación y excelencia al servicio de industrias exigentes.",
      contactTitle: "Contacto",
      contactItems: [
        "Teléfono: +56 9 84699753",
        "Email: contacto@santeringroup.com",
        "Email: santeringroup.usachile@gmail.com",
      ],
      locationsTitle: "Ubicaciones",
      locations: [
        "7901 4TH ST N STE 300, San Petersburgo, FL 33702, Estados Unidos",
        "La Capitanía 80, Piso 1, Of. 108 – Las Condes, Santiago de Chile",
      ],
      rights: "© 2026 Santerin Group USA Chile. Todos los derechos reservados.",
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
      lead: ", is an international company registered in the State of Florida (USA), with tax registration before the U.S. Internal Revenue Service (IRS). We have a Registered Agent in the city of St. Petersburg, Pinellas County, a commercial office in the Brickell area, Miami-Dade County, and commercial operations in Santiago, Metropolitan Region, Chile.",
      paragraphs: [
        "We offer a broad and diversified portfolio of industrial supplies, designed to meet the needs of mining, industrial, construction, and general maintenance companies. Our main solutions include precision tools, spare parts for equipment and machinery, components for industrial crushing plants, and electrical connection solutions for industrial equipment and facilities, among other specialized products.",
        "Our focus is to facilitate access to reliable products and efficient solutions, backed by a network of national and international suppliers and management oriented to each client's specific needs.",
        "We complement our value proposition through strategic alliances with logistics operators and international couriers, together with weekly scheduled shipment planning. This network allows us to manage our shipments in an agile, efficient, and traceable way, facilitating tracking of every operation and contributing to the timely fulfillment of our clients' requirements.",
        "At Santerin Group we work to become a long-term strategic partner, providing reliable solutions, competitive response times, and a service oriented to maximizing the productivity and operational continuity of highly demanding industries.",
      ],
      imageAlt: "Reserved Space for Image",
    },
    mission: {
      title: "Our Mission",
      paragraphs: [
        "To provide high-quality industrial supplies, spare parts, equipment, and solutions, delivering a reliable, agile, and personalized service that helps maintain the continuity and efficiency of our clients' operations.",
        "We are committed to understanding each client's needs, offering national and international products and managing solutions for both standard and specialized requirements, including those that are difficult to source.",
        "We work to be a strategic partner for our clients, building long-term business relationships based on trust, commitment, quality, and service excellence.",
      ],
      tagline: "Understand. Connect. Solve. Generate value.",
    },
    vision: {
      title: "Our Vision",
      paragraphs: [
        "To be a benchmark company, both nationally and internationally, in the supply of goods, spare parts, equipment, and industrial solutions, recognized for our responsiveness, reliability, and understanding of our clients' needs.",
        "We seek to establish ourselves as a strategic partner for the industry, continuously expanding our range of products and suppliers, strengthening our presence in international markets, and developing solutions that help our clients improve productivity, reduce downtime, and ensure the continuity of their operations.",
        "We aim to build a solid, innovative, and sustainable company, based on long-term relationships with our clients and suppliers.",
      ],
      tagline: "Connecting industry with the solutions it needs.",
    },
    services: {
      title: "Products and Solutions",
      cards: [
        {
          icon: ShieldCheck,
          title: "Smokey 75'S — Smoke Indicator for Leak Testing",
          image: "/products/smokey-75s.png",
          description:
            "A Swedish-origin, U.S.-licensed smoke indicator, free of flammable oil, with coverage of up to 600 cubic feet (CFM). Designed to perform leak tests in equipment cabins, tanks, mine refuges, and enclosed spaces, allowing quick and effective identification of contaminant entry points. Its use helps prevent exposure to contaminants and occupational diseases such as silicosis, supporting compliance with the National Silicosis Eradication Plan. It holds a current Chilean Health Resolution and is equivalent to Smoke Indicator 4C5623.",
        },
        {
          icon: Zap,
          title: "Electrical Connector and Terminal Kits",
          image: "/products/kits-conectores.png",
          description:
            "We offer kits of connectors, terminals, and specialized electrical components for heavy machinery, industrial equipment, and critical applications, designed to ensure reliability and performance under demanding conditions. Our portfolio includes original components and high-quality alternatives, compatible with leading brands such as CAT, Komatsu, and other manufacturers, offering efficient solutions for maintenance, repair, and equipment recovery, helping maximize operational continuity.",
        },
        {
          icon: Wrench,
          title: "Engine Parts and Components",
          image: "/products/repuestos-motor.jpeg",
          description:
            "We offer tailored solutions through a portfolio of spare parts, engine components, seals, gaskets, accessories, specialized tools, and magnetic patches for the maintenance of heavy machinery and industrial equipment, helping optimize maintenance, extend equipment lifespan, and ensure our clients' operational continuity.",
        },
        {
          icon: Truck,
          title: "Heavy-Duty Truck Parts and Accessories",
          image: "/products/camiones-pesados.png",
          description:
            "We offer tailored solutions through a portfolio of high-quality parts, components, and accessories for MAN, Volvo, Mercedes-Benz, Freightliner, Peterbilt, Kenworth, and Mack Trucks. Our international and national supplier network allows us to deliver reliable, timely solutions aimed at maximizing the performance, reliability, and operational continuity of your fleet.",
        },
        {
          icon: Hammer,
          title: "Industrial Hardware and Precision Tool Solutions",
          image: "/products/ferreteria-industrial.png",
          description:
            "We offer tailored solutions through a portfolio of precision tools, components, and industrial supplies for the aerospace, mining, industrial, and construction sectors. Our international and national supplier network allows us to deliver reliable, timely, and specialized solutions, contributing to our clients' operational continuity.",
        },
        {
          icon: Layers,
          title:
            "Parts, Accessories, and Components for Crushing, Screening, and Aggregate Transport",
          image: "/products/trituracion-cribado.png",
          description:
            "We offer tailored solutions for crushing, screening (classification), and aggregate transport equipment. Our portfolio includes PowerScreen and other globally recognized brands, ensuring quality, availability, and operational continuity.",
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
    contactForm: {
      title: "Get in touch",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+1 555 123 4567",
      serviceLabel: "Service of interest",
      serviceDefaultOption: "Select a product or service",
      serviceOtherOption: "Other inquiry",
      submitLabel: "Send message",
      submittingLabel: "Sending...",
      successMessage: "Thank you! We received your message and will contact you shortly.",
      errorMessage:
        "There was a problem sending your message. Please try again or email us directly at contacto@santeringroup.com.",
    },
    footer: {
      aboutTitle: "About Santerin Group",
      aboutDescription:
        "Experience, innovation, and excellence in service to demanding industries.",
      contactTitle: "Contact",
      contactItems: [
        "Phone: +56 9 84699753",
        "Email: contacto@santeringroup.com",
        "Email: santeringroup.usachile@gmail.com",
      ],
      locationsTitle: "Locations",
      locations: [
        "7901 4TH ST N STE 300, St. Petersburg, FL 33702, United States",
        "La Capitanía 80, Floor 1, Of. 108 – Las Condes, Santiago, Chile",
      ],
      rights: "© 2026 Santerin Group USA Chile. All rights reserved.",
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

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleContactSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setFormStatus("submitting");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>
        ).toString(),
      });
      setFormStatus("success");
      form.reset();
    } catch {
      setFormStatus("error");
    }
  };

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
          <div className="space-y-8">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div
                id="mision"
                className="space-y-4 rounded-3xl border border-[#c3c3c3] bg-gradient-to-b from-white via-white to-[#efefef] p-8 text-left shadow-[0_12px_24px_rgba(0,0,0,0.08)] scroll-mt-32"
              >
                <h3 className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-[#1f1f1f] md:text-left">
                  {t.mission.title}
                </h3>
                <div className="space-y-3 text-[15px] leading-relaxed text-[#404040]">
                  {t.mission.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className="pt-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#1f1f1f]">
                  {t.mission.tagline}
                </p>
              </div>
              <div
                id="vision"
                className="space-y-4 rounded-3xl border border-[#c3c3c3] bg-gradient-to-b from-white via-white to-[#efefef] p-8 text-left shadow-[0_12px_24px_rgba(0,0,0,0.08)] scroll-mt-32"
              >
                <h3 className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-[#1f1f1f] md:text-left">
                  {t.vision.title}
                </h3>
                <div className="space-y-3 text-[15px] leading-relaxed text-[#404040]">
                  {t.vision.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className="pt-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#1f1f1f]">
                  {t.vision.tagline}
                </p>
              </div>
            </div>
          </div>

          <section id="servicios" className="space-y-12 scroll-mt-32">
            <div className="text-center">
              <h3 className="text-2xl font-semibold uppercase tracking-[0.3em] text-[#1f1f1f]">
                {t.services.title}
              </h3>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {t.services.cards.map(
                ({ icon: Icon, title, description, image }) => (
                  <div
                    key={title}
                    className="overflow-hidden rounded-3xl border border-[#d1d1d1] bg-white text-left shadow-[0_10px_18px_rgba(0,0,0,0.05)]"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4d35e] text-[#1f1f1f]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-base font-semibold uppercase tracking-[0.2em] text-[#1f1f1f]">
                        {title}
                      </h4>
                      <p className="mt-4 text-[15px] leading-relaxed text-[#404040]">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
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
          <div className="flex flex-1 flex-col gap-10">
            <div className="space-y-3 text-[15px] leading-relaxed">
              <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-[#f4d35e]">
                {t.footer.aboutTitle}
              </h4>
              <p className="text-sm text-[#d1d1d1]">
                {t.footer.aboutDescription}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-[#f4d35e]">
                {t.footer.contactTitle}
              </h4>
              <ul className="space-y-2 text-sm text-[#d1d1d1]">
                {t.footer.contactItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
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

          <div className="flex-1">
            <div className="rounded-3xl bg-white p-8 text-[#1f1f1f] shadow-[0_12px_24px_rgba(0,0,0,0.25)]">
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em]">
                {t.contactForm.title}
              </h4>

              {formStatus === "success" ? (
                <p className="text-sm leading-relaxed text-[#1f1f1f]">
                  {t.contactForm.successMessage}
                </p>
              ) : (
                <form
                  name="contacto"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleContactSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contacto" />
                  <p className="hidden">
                    <label>
                      No completar: <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#555]">
                      {t.contactForm.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder={t.contactForm.namePlaceholder}
                      className="w-full rounded-xl border border-[#d1d1d1] px-4 py-3 text-sm text-[#1f1f1f] outline-none focus:border-[#f4d35e]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#555]">
                      {t.contactForm.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="correo"
                      required
                      placeholder={t.contactForm.emailPlaceholder}
                      className="w-full rounded-xl border border-[#d1d1d1] px-4 py-3 text-sm text-[#1f1f1f] outline-none focus:border-[#f4d35e]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#555]">
                      {t.contactForm.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder={t.contactForm.phonePlaceholder}
                      className="w-full rounded-xl border border-[#d1d1d1] px-4 py-3 text-sm text-[#1f1f1f] outline-none focus:border-[#f4d35e]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#555]">
                      {t.contactForm.serviceLabel}
                    </label>
                    <select
                      name="servicio"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-[#d1d1d1] px-4 py-3 text-sm text-[#1f1f1f] outline-none focus:border-[#f4d35e]"
                    >
                      <option value="" disabled>
                        {t.contactForm.serviceDefaultOption}
                      </option>
                      {t.services.cards.map((card) => (
                        <option key={card.title} value={card.title}>
                          {card.title}
                        </option>
                      ))}
                      <option value={t.contactForm.serviceOtherOption}>
                        {t.contactForm.serviceOtherOption}
                      </option>
                    </select>
                  </div>

                  {formStatus === "error" && (
                    <p className="text-sm text-red-600">
                      {t.contactForm.errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="mt-2 w-full rounded-full bg-[#f4d35e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#1f1f1f] transition hover:opacity-90 disabled:opacity-60"
                  >
                    {formStatus === "submitting"
                      ? t.contactForm.submittingLabel
                      : t.contactForm.submitLabel}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl text-center text-[11px] uppercase tracking-[0.35em] text-[#aaaaaa]">
          {t.footer.rights}
        </div>
      </footer>
    </main>
  );
}
