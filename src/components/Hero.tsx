"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { heroContent, portfolioImpact2026, siteMetadata } from "@/data/content";
import {
  ArrowDownRight,
  Copy,
  Check,
  FileText,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

type ImpactMode = "direct" | "total" | "scale";

export function Hero() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [impactMode, setImpactMode] = useState<ImpactMode>("total");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteMetadata.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${siteMetadata.email}`;
    }
  };

  const currentModeData = portfolioImpact2026.modes[impactMode];

  const getHighlightColor = (tone?: string) => {
    switch (tone) {
      case "emerald":
        return "text-emerald-400 border-emerald-500/30 bg-emerald-500/[0.06]";
      case "amber":
        return "text-amber-300 border-amber-500/30 bg-amber-500/[0.06]";
      case "terracotta":
        return "text-[#F26B43] border-[#E05A36]/35 bg-[#E05A36]/[0.08]";
      default:
        return "text-[#F4F1EA] border-[#F4F1EA]/15 bg-[#F4F1EA]/[0.04]";
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Metadata Strip (Editorial Masthead Header) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#F4F1EA]/12 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#E05A36]/15 border border-[#E05A36]/40 text-[#F26B43] font-semibold">
              <span className="w-1.5 h-1.5 bg-[#E05A36] animate-pulse" />
              {heroContent.badge[language]}
            </span>
            <span className="hidden sm:inline text-[#6E6A63]">/</span>
            <span className="hidden sm:inline text-[#A6A29A]">
              {heroContent.status[language]}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#A6A29A]">
            <span>{siteMetadata.location[language]}</span>
          </div>
        </div>

        {/* Asymmetric Editorial Masthead Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-16">
          {/* Left Column: High-Contrast Serif + Sans Statement (8 cols) */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold tracking-tight text-[#F4F1EA] leading-[1.05] mb-6">
              {heroContent.headlinePre[language]}{" "}
              <span className="font-serif italic font-normal text-[#E05A36] underline decoration-[#E05A36]/30 decoration-1 underline-offset-8">
                {heroContent.headlineSerif[language]}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A6A29A] leading-relaxed max-w-2xl">
              {heroContent.subtitle[language]}
            </p>
          </div>

          {/* Right Column: Action Controls & Quick Spec Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4 lg:border-l lg:border-[#F4F1EA]/12 lg:pl-8">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#6E6A63]">
              {language === "en"
                ? "// DIRECT ACCESS & DOSSIER"
                : "// ACCESO DIRECTO Y DOSSIER"}
            </div>

            <div className="flex flex-col gap-2.5">
              {/* Primary CTA */}
              <a
                href="#enterprise"
                className="inline-flex items-center justify-between px-5 py-3.5 bg-[#F4F1EA] hover:bg-[#E05A36] text-[#0B0B0A] font-semibold text-sm transition-colors group"
              >
                <span>{heroContent.buttons.exploreWork[language]}</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Resume PDF */}
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#121210] hover:bg-[#F4F1EA]/[0.06] text-[#F4F1EA] border border-[#F4F1EA]/15 text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#E05A36]" />
                  <span>{heroContent.buttons.viewResume[language]}</span>
                </a>

                {/* Copy Email */}
                <button
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 border text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    copied
                      ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                      : "bg-[#121210] hover:bg-[#F4F1EA]/[0.06] border-[#F4F1EA]/15 text-[#F4F1EA]"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{heroContent.buttons.emailCopied[language]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A6A29A]" />
                      <span>{heroContent.buttons.copyEmail[language]}</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#121210]/60 hover:bg-[#121210] text-[#A6A29A] hover:text-[#F4F1EA] border border-[#F4F1EA]/10 text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{heroContent.buttons.githubProfile[language]}</span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================================
            01 // INTERACTIVE 2026 EXECUTIVE IMPACT LEDGER
            ===================================================================== */}
        <div
          id="impact"
          className="scroll-mt-24 surface-dossier crosshair-box border border-[#F4F1EA]/15"
        >
          {/* Ledger Top Header Bar */}
          <div className="p-6 sm:p-8 border-b border-[#F4F1EA]/10 bg-hatch-pattern flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#E05A36] uppercase tracking-widest mb-2">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{portfolioImpact2026.sectionIndex}</span>
                <span>·</span>
                <span>{portfolioImpact2026.tag[language]}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F4F1EA] tracking-tight">
                {portfolioImpact2026.title[language]}
              </h2>
              <p className="text-xs sm:text-sm text-[#A6A29A] mt-1 max-w-2xl">
                {portfolioImpact2026.subtitle[language]}
              </p>
            </div>

            {/* Interactive Mode Switcher (Direct vs Consolidated vs Max Scale) */}
            <div
              role="tablist"
              aria-label={
                language === "en"
                  ? "Select portfolio impact view"
                  : "Seleccionar vista de impacto del portafolio"
              }
              className="flex flex-wrap sm:flex-nowrap bg-[#0B0B0A] border border-[#F4F1EA]/15 p-1 gap-1 shrink-0"
            >
              {(["direct", "total", "scale"] as ImpactMode[]).map((modeKey) => {
                const isActive = impactMode === modeKey;
                const modeObj = portfolioImpact2026.modes[modeKey];
                return (
                  <button
                    key={modeKey}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setImpactMode(modeKey)}
                    className={`px-3.5 py-2 text-xs font-mono transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#E05A36] text-[#0B0B0A] font-bold"
                        : "text-[#A6A29A] hover:text-[#F4F1EA] hover:bg-[#F4F1EA]/[0.04]"
                    }`}
                  >
                    {modeObj.label[language]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Mode Context Banner */}
          <div className="px-6 sm:px-8 py-3 bg-[#0B0B0A]/80 border-b border-[#F4F1EA]/10 flex items-center justify-between gap-4 text-xs font-mono">
            <span className="text-[#F4F1EA] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E05A36] shrink-0" />
              <span>{currentModeData.description[language]}</span>
            </span>
            <span className="hidden md:inline text-[#6E6A63] shrink-0">
              {language === "en" ? "PORTFOLIO METRICS" : "MÉTRICAS DE PORTAFOLIO"}
            </span>
          </div>

          {/* 3-Column Quantitative Ledger Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F4F1EA]/10">
            {currentModeData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 flex flex-col justify-between bg-[#121210]/60 hover:bg-[#171714] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#A6A29A]">
                      {metric.label[language]}
                    </span>
                    {metric.unit ? (
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 border ${getHighlightColor(
                          metric.highlight
                        )}`}
                      >
                        {metric.unit[language]}
                      </span>
                    ) : null}
                  </div>

                  <div className="font-mono text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-[#F4F1EA] mb-3">
                    {metric.value}
                  </div>
                </div>

                <p className="text-xs text-[#A6A29A] leading-relaxed border-t border-[#F4F1EA]/[0.06] pt-3">
                  {metric.detail[language]}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Key Accounts & Commercial Pipeline Strip */}
          <div className="p-6 sm:p-8 border-t border-[#F4F1EA]/12 bg-[#0B0B0A]/90">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A6A29A] mb-4">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{portfolioImpact2026.keyAccountsSummary.title[language]}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {portfolioImpact2026.keyAccountsSummary.items.map((account, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#121210] border border-[#F4F1EA]/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#F4F1EA]">
                        {account.client[language]}
                      </span>
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 shrink-0">
                        {account.metric[language]}
                      </span>
                    </div>
                    <p className="text-xs text-[#A6A29A] leading-relaxed">
                      {account.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
