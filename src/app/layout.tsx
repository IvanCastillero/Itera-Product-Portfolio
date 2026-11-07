import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iván Castillero — Product Manager | 2026 Impact Dossier & Case Studies",
  description:
    "Product Manager portfolio & 2026 impact ledger. US$9.0M contract retention, up to US$213.6K/yr projected operational savings, 1,280+ hrs/mo freed, and Spec-Driven Development.",
  keywords: [
    "Iván Castillero",
    "Product Manager",
    "Technical Product Manager",
    "B2B Enterprise Product Manager",
    "Conversational AI",
    "Spec-Driven Development",
    "Product Case Studies",
  ],
  authors: [{ name: "Iván Castillero" }],
  openGraph: {
    title: "Iván Castillero — Product Manager | 2026 Impact & Case Studies",
    description:
      "Turning ambiguous operational problems into measurable business impact. Explore PAR case studies, trade-offs, and 2026 financial outcomes.",
    type: "website",
    locale: "es_PA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`dark scroll-smooth ${instrumentSerif.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#0B0B0A] text-[#A6A29A] font-sans antialiased selection:bg-[#E05A36]/30 selection:text-[#F4F1EA]">
        {children}
      </body>
    </html>
  );
}
