"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { SpotlightBackground } from "@/components/SpotlightBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { PersonalProjectsSection } from "@/components/PersonalProjectsSection";
import { Footer } from "@/components/Footer";

function PortfolioContent() {
  return (
    <div className="relative min-h-screen bg-[#08080C] text-[#94A3B8] selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Interactive Raycast/Linear Ambient Spotlight and Grid */}
      <SpotlightBackground />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <EnterpriseSection />
        <PersonalProjectsSection />
      </main>

      {/* Footer */}
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
