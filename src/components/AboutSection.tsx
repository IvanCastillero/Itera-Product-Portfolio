"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { aboutContent, productPillars } from "@/data/content";
import { Layers, Compass, Zap, Sparkles } from "lucide-react";

export function AboutSection() {
  const { language } = useLanguage();

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Layers className="w-5 h-5 text-[#8B5CF6]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#A855F7]" />;
      case 2:
        return <Zap className="w-5 h-5 text-[#C084FC]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#8B5CF6] mb-4">
            <span>{aboutContent.sectionTag[language]}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6">
            {aboutContent.title[language]}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {aboutContent.paragraphs[language].map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Philosophy Anchor for smooth navigation */}
        <div id="philosophy" className="scroll-mt-24 pt-6 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#8B5CF6] mb-2">
            <span>{language === "en" ? "Philosophy & Core Principles" : "Filosofía y Principios"}</span>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="card-linear p-7 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#8B5CF6]/30 transition-colors">
                    {getPillarIcon(idx)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-neutral-500 tracking-wider">
                    {pillar.number}
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-[#8B5CF6] mb-2 font-medium">
                  {pillar.tag[language]}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                  {pillar.title[language]}
                </h3>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {pillar.description[language]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>{language === "en" ? "Core Principle" : "Principio Clave"}</span>
                <span className="text-neutral-400 group-hover:text-[#A855F7] transition-colors">
                  {language === "en" ? "Applied in Practice" : "Aplicado en la Práctica"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
