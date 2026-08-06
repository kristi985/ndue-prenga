import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
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
  metadataBase: new URL("https://kristi985.github.io"),
  title: "NDUE PRENGA — Lëndë Druri për Ndërtim | Betoforme, Binarë, Dërrasa",
  description:
    "Furnizues i lëndës së drurit për ndërtim: betoforme, binarë, dërrasa, palë dhe më tepër. Cilësi e garantuar, çmime konkurruese, dorëzim i shpejtë.",
  keywords: [
    "lëndë druri",
    "betoforme",
    "binar",
    "dërrasa",
    "druri ndërtim",
    "Ndue Prenga",
    "timber",
    "plywood",
  ],
  openGraph: {
    title: "NDUE PRENGA — Lëndë Druri për Ndërtim",
    description:
      "Betoforme, binarë, dërrasa, palë dhe më tepër. Cilësi e garantuar, çmime konkurruese, dorëzim i shpejtë në gjithë Shqipërinë.",
    type: "website",
    locale: "sq_AL",
    siteName: "NDUE PRENGA",
    images: [{ url: "/ndue-prenga/images/hero-lumber.jpg", width: 1200, height: 630, alt: "NDUE PRENGA — Lëndë druri" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq" className={`${inter.variable} ${archivo.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider>{children}<WhatsAppButton /><CookieBanner /></ThemeProvider>
      </body>
    </html>
  );
}
