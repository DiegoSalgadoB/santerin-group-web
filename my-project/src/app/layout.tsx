import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "https://santeringroup.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Santerin Group | Soluciones integrales en maquinaria y suministros",
    template: "%s | Santerin Group",
  },
  description:
    "Santerin Group ofrece soluciones confiables en maquinaria, equipos e infraestructura para proyectos industriales y comerciales.",
  keywords: [
    "Santerin Group",
    "suministros industriales",
    "maquinaria",
    "equipos",
    "infraestructura",
    "servicios industriales",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logosimbolo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logosimbolo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Santerin Group | Soluciones industriales confiables",
    description:
      "Proveemos soluciones confiables en maquinarias, equipos e infraestructura con presencia en múltiples ubicaciones.",
    siteName: "Santerin Group",
    url: siteUrl,
    images: [
      {
        url: "/logosimbolo.png",
        width: 512,
        height: 512,
        alt: "Logotipo de Santerin Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santerin Group | Soluciones industriales confiables",
    description:
      "Santerin Group provee maquinaria, equipos e infraestructura con un servicio confiable y cercano.",
    images: ["/logosimbolo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="chatwoot-script" strategy="afterInteractive">
          {`
            (function(d, t) {
              var BASE_URL = "https://app.chatwoot.com";
              var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
              g.src = BASE_URL + "/packs/js/sdk.js";
              g.async = true;
              s.parentNode.insertBefore(g, s);
              g.onload = function() {
                window.chatwootSDK.run({
                  websiteToken: "s9n6fxyqzCV2VTMK54U11i5U",
                  baseUrl: BASE_URL,
                });
              };
            })(document, "script");
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
