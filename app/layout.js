import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieBanner from "./components/CookieBanner";

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq" className={`${geist.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider>{children}<WhatsAppButton /><CookieBanner /></ThemeProvider>
      </body>
    </html>
  );
}
