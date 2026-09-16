import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://prenga.al"),
  title: "Ndue Prenga — Lëndë Druri e Thatë për Ndërtim | Tiranë",
  description:
    "Furnizim me lëndë druri të thatë për ndërtim: betoforme, binarë & trarë çatie, dërrasa të thata, tjegull Mladost dhe prerje sipas kërkesës. Magazinë në SH56, Tiranë — dorëzim zakonisht brenda 24 orësh në gjithë Shqipërinë.",
  keywords: [
    "lëndë druri e thatë",
    "druri ndërtimi",
    "betoforme",
    "binarë",
    "trarë çatie",
    "dërrasa të thata",
    "tjegull mladost",
    "prerje druri sipas kërkesës",
    "lëndë drusore Tiranë",
    "Ndue Prenga",
    "SH56 Tiranë",
    "timber",
    "lumber Albania",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://prenga.al",
  },
  openGraph: {
    title: "Ndue Prenga — Lëndë Druri e Thatë për Ndërtim",
    description:
      "Betoforme, binarë & trarë çatie, dërrasa të thata, tjegull Mladost, prerje sipas kërkesës. Magazinë në SH56, Tiranë — dorëzim brenda 24 orësh.",
    url: "https://prenga.al",
    siteName: "Ndue Prenga",
    locale: "sq_AL",
    images: [{ url: "https://prenga.al/images/hero-lumber.jpg", width: 1200, height: 630, alt: "Ndue Prenga — Stiva lënde druri e thatë në magazinë" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ndue Prenga — Lëndë Druri e Thatë për Ndërtim",
    description:
      "Betoforme, binarë & trarë çatie, dërrasa të thata, tjegull Mladost. SH56, Tiranë — dorëzim brenda 24 orësh.",
    images: ["https://prenga.al/images/hero-lumber.jpg"],
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Ndue Prenga — Lëndë Druri e Thatë",
  alternateName: "NDUE PRENGA",
  description: "Furnizim me lëndë druri të thatë për ndërtim: betoforme, binarë & trarë çatie, dërrasa të thata, tjegull Mladost, prerje sipas kërkesës.",
  url: "https://prenga.al/",
  telephone: "+355682006400",
  email: "kristiprenga301@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SH56",
    addressLocality: "Tiranë",
    addressCountry: "AL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.3075989,
    longitude: 19.7575329,
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=41.3075989,19.7575329",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
  areaServed: {
    "@type": "Country",
    name: "Shqipëri",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+355682006400",
    contactType: "sales",
    availableLanguage: ["Albanian"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq" className={`${inter.variable} ${archivo.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      </head>
      <body>
        {children}<WhatsAppButton /><CookieBanner />
      </body>
    </html>
  );
}
