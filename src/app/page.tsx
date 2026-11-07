"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { SpotlightBackground } from "@/components/SpotlightBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { PersonalProjectsSection } from "@/components/PersonalProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

function PortfolioContent() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0A] text-[#A6A29A] selection:bg-[#E05A36]/30 selection:text-[#F4F1EA]">
      {/* Architectural Grid & Warm Editorial Spotlight */}
      <SpotlightBackground />

      {/* Top Architectural Command Bar */}
      <Navbar />

      {/* Main Content Flow:
          01. Executive Masthead & 2026 Quantitative Impact Ledger
          02. Enterprise Case Studies (PAR + Deep-Dive Dossiers)
          03. Spec-Driven Product Lab (Personal Builds)
          04. How I Think (Background & Decision Heuristics)
      */}
      <main className="relative z-10">
        <Hero />
        <EnterpriseSection />
        <PersonalProjectsSection />
        <AboutSection />
      </main>

      {/* Editorial Colophon & Contact Footer */}
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
