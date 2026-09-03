import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import { themeInitScript } from "@/components/ThemeToggle";
import { SITE } from "@/data/site";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.legalName} — Solutions digitales sur mesure au Mali`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "agence digitale Mali",
    "développement application Mali",
    "e-commerce Mobile Money Mali",
    "solutions digitales Mali",
    "création site web Bamako",
  ],
  authors: [{ name: SITE.legalName }],
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.legalName,
    title: `${SITE.legalName} — Solutions digitales sur mesure`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.legalName,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#04050c",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    areaServed: "ML",
    slogan: SITE.tagline,
  };

  return (
    <html lang="fr" className={outfit.variable} data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Applique le thème mémorisé avant le premier rendu (évite le flash) */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Starfield />
        <div className="app-shell">
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
