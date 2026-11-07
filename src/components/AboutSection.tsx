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
        return <Layers className="w-4 h-4 text-[#E05A36]" />;
      case 1:
        return <Compass className="w-4 h-4 text-[#E05A36]" />;
      case 2:
        return <Zap className="w-4 h-4 text-[#E05A36]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#E05A36]" />;
    }
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 relative scroll-mt-20 border-t border-[#F4F1EA]/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Editorial 2-Column Background & Philosophy Essay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Section Index & Editorial Lead */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121210] border border-[#F4F1EA]/15 text-xs font-mono text-[#E05A36] uppercase tracking-widest">
              <span>{aboutContent.sectionIndex}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F4F1EA] leading-tight">
              {aboutContent.title[language]}
            </h2>

            <blockquote className="p-5 bg-[#121210] border-l-2 border-l-[#E05A36] border border-[#F4F1EA]/10 font-serif italic text-lg text-[#F4F1EA] leading-relaxed">
              “{aboutContent.leadQuote[language]}”
            </blockquote>
          </div>

          {/* Right Column: Narrative Paragraphs */}
          <div className="lg:col-span-7 lg:border-l lg:border-[#F4F1EA]/12 lg:pl-10 space-y-5 text-base text-[#A6A29A] leading-relaxed">
            <div className="text-xs font-mono uppercase tracking-widest text-[#6E6A63]">
              {`// ${aboutContent.sectionTag[language]}`}
            </div>
            {aboutContent.paragraphs[language].map((paragraph, idx) => (
              <p key={idx} className="max-w-[70ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 3 Product Decision Pillars */}
        <div id="philosophy" className="scroll-mt-24 pt-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E05A36]">
              {language === "en"
                ? "// OPERATING PRINCIPLES & DECISION HEURISTICS"
                : "// PRINCIPIOS OPERATIVOS Y REGLAS DE DECISIÓN"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F4F1EA]/12 border border-[#F4F1EA]/15 bg-[#121210]/80">
            {productPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 flex flex-col justify-between hover:bg-[#171714] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2 bg-[#0B0B0A] border border-[#F4F1EA]/15">
                      {getPillarIcon(idx)}
                    </div>
                    <span className="font-mono text-sm font-bold text-[#E05A36]">
                      [{pillar.number}]
                    </span>
                  </div>

                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#6E6A63] mb-2">
                    {pillar.tag[language]}
                  </div>

                  <h3 className="text-xl font-semibold text-[#F4F1EA] mb-3 tracking-tight">
                    {pillar.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed mb-6">
                    {pillar.description[language]}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F4F1EA]/10 text-xs font-mono text-[#F4F1EA]/90">
                  {pillar.tradeoffPrinciple[language]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
