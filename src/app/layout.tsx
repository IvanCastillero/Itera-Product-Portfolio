import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iván Castillero: Product Manager | Data, Tech & Systems",
  description:
    "Product Manager building digital products at the intersection of data, technology, and people. Enterprise solutions, AI workflows, and modern product craft.",
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
    title: "Iván Castillero: Product Manager",
    description: "Building products where data, technology and people meet.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#08080C] text-[#94A3B8] font-sans antialiased selection:bg-[#8B5CF6]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
