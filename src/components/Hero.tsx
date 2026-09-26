"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { heroContent, siteMetadata } from "@/data/content";
import { ArrowDownRight, Copy, Check, FileText } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function Hero() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteMetadata.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const fullHeadline = heroContent.headline[language];
  const accent = heroContent.headlineAccent[language];
  const parts = fullHeadline.split(accent);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 backdrop-blur-md mb-8 group cursor-default shadow-sm shadow-[#8B5CF6]/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wide text-neutral-300">
            {heroContent.badge[language]}
          </span>
          <span className="text-neutral-600">/</span>
          <span className="text-xs text-[#A855F7] font-medium hidden sm:inline">
            {heroContent.status[language]}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.12] mb-6">
          {parts.length === 2 ? (
            <>
              {parts[0]}
              <span className="bg-gradient-to-r from-white via-neutral-200 to-[#A855F7] bg-clip-text text-transparent">
                {accent}
              </span>
              {parts[1]}
            </>
          ) : (
            fullHeadline
          )}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-10 font-normal">
          {heroContent.subtitle[language]}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          {/* Primary CTA: Explore Work */}
          <a
            href="#enterprise"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#08080C] font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg shadow-white/5 active:scale-95"
          >
            <span>{heroContent.buttons.exploreWork[language]}</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>

          {/* Resume (PDF) Button */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-[#8B5CF6]/40 font-medium text-sm transition-all active:scale-95"
          >
            <FileText className="w-4 h-4 text-[#8B5CF6]" />
            <span>{heroContent.buttons.viewResume[language]}</span>
          </a>

          {/* Secondary CTA: GitHub Profile */}
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-[#8B5CF6]/40 font-medium text-sm transition-all active:scale-95"
          >
            <GithubIcon className="w-4 h-4 text-neutral-300" />
            <span>{heroContent.buttons.githubProfile[language]}</span>
          </a>

          {/* Tertiary CTA: Copy Email with Toast Feedback */}
          <button
            onClick={handleCopyEmail}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium transition-all active:scale-95 ${
              copied
                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
                : "bg-white/[0.03] hover:bg-white/[0.07] border-white/10 hover:border-white/20 text-neutral-300 hover:text-white"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{heroContent.buttons.emailCopied[language]}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-neutral-400" />
                <span>{heroContent.buttons.copyEmail[language]}</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Focus / Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-8 border-t border-white/[0.06]">
          {heroContent.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors text-center"
            >
              <div className="text-sm font-semibold text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-[#94A3B8] font-mono">
                {stat.label[language]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
