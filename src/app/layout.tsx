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
  title: "Iván Castillero — Product Manager | Data, Tech & Systems",
  description:
    "Product Manager building digital products where data, technology, and people meet. Enterprise solutions, AI workflows, and personal builds.",
  keywords: [
    "Iván Castillero",
    "Product Manager",
    "Technical Product Manager",
    "Enterprise Solutions",
    "Conversational AI",
    "Systems Thinking",
    "Data Science",
  ],
  authors: [{ name: "Iván Castillero" }],
  openGraph: {
    title: "Iván Castillero — Product Manager",
    description:
      "Building products where data, technology and people meet.",
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
