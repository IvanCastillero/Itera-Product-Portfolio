"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  enterpriseIntro,
  enterpriseProjects,
  otherEnterpriseWork,
  talks,
} from "@/data/content";
import { Briefcase, CheckCircle2, MessageSquare, Presentation } from "lucide-react";

export function EnterpriseSection() {
  const { language } = useLanguage();

  return (
    <section id="enterprise" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Bloque 1: Texto introductorio */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#8B5CF6] mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>
              {language === "en" ? "Enterprise Experience" : "Experiencia Empresarial"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            {language === "en" ? "Enterprise Solutions" : "Soluciones Empresariales"}
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {enterpriseIntro[language]}
          </p>
        </div>

        {/* Bloque 2: Tres proyectos destacados en tarjeta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Proyecto 1: Omnichannel Alert Automation (7 cols) */}
          <div className="lg:col-span-7 card-linear rounded-2xl p-7 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#8B5CF6]/10 text-[#C084FC] border border-[#8B5CF6]/20">
                  {enterpriseProjects[0].badge[language]}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {enterpriseProjects[0].category[language]}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                {enterpriseProjects[0].title[language]}
              </h3>

              <p className="text-xs font-mono text-[#A855F7] mb-5">
                {enterpriseProjects[0].role[language]}
              </p>

              {/* Problem */}
              <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  {language === "en" ? "The Challenge" : "El Problema"}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {enterpriseProjects[0].problem[language]}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  {language === "en" ? "Key Contributions" : "Aportes Clave"}
                </div>
                {enterpriseProjects[0].highlights[language].map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Frameworks */}
              <div className="mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
                  {language === "en" ? "Methodologies & Tools" : "Metodologías y Herramientas"}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {enterpriseProjects[0].frameworks.map((fw, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/[0.06] text-neutral-300 font-mono"
                    >
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Badges */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {enterpriseProjects[0].impactBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Proyecto 2: Ideation, Prioritization & Alignment Workshops (5 cols) */}
          <div className="lg:col-span-5 card-linear rounded-2xl p-7 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-neutral-300 border border-white/10">
                  {enterpriseProjects[1].badge[language]}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {enterpriseProjects[1].category[language]}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                {enterpriseProjects[1].title[language]}
              </h3>

              <p className="text-xs font-mono text-[#A855F7] mb-5">
                {enterpriseProjects[1].role[language]}
              </p>

              {/* Problem */}
              <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  {language === "en" ? "The Challenge" : "El Problema"}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {enterpriseProjects[1].problem[language]}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  {language === "en" ? "Key Contributions" : "Aportes Clave"}
                </div>
                {enterpriseProjects[1].highlights[language].map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Frameworks */}
              <div className="mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
                  {language === "en" ? "Methodologies & Tools" : "Metodologías y Herramientas"}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {enterpriseProjects[1].frameworks.map((fw, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/[0.06] text-neutral-300 font-mono"
                    >
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Badges */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {enterpriseProjects[1].impactBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-[#8B5CF6]/15 text-[#C084FC] border border-[#8B5CF6]/30"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Proyecto 3: Client Service Report Automation (12 cols) */}
          <div className="lg:col-span-12 card-linear rounded-2xl p-7 sm:p-8 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-neutral-300 border border-white/10">
                    {enterpriseProjects[2].badge[language]}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {enterpriseProjects[2].category[language]}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {enterpriseProjects[2].title[language]}
                </h3>

                <p className="text-xs font-mono text-[#A855F7] mb-4">
                  {enterpriseProjects[2].role[language]}
                </p>

                <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    {language === "en" ? "The Challenge" : "El Problema"}
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {enterpriseProjects[2].problem[language]}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    {language === "en" ? "Key Contributions" : "Aportes Clave"}
                  </div>
                  {enterpriseProjects[2].highlights[language].map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-6 lg:pt-0 lg:pl-8 space-y-6">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-3">
                    {language === "en" ? "Methodologies & Tools" : "Metodologías y Herramientas"}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {enterpriseProjects[2].frameworks.map((fw, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/[0.06] text-neutral-300 font-mono"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-3">
                    {language === "en" ? "Validated Outcomes" : "Resultados Validados"}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {enterpriseProjects[2].impactBadges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque 3: Otros proyectos (otherEnterpriseWork) */}
        <div className="pt-8 border-t border-white/[0.06]">
          <h3 className="text-xl font-bold text-white mb-6">
            {otherEnterpriseWork.title[language]}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherEnterpriseWork.items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors flex items-start gap-3"
              >
                <div className="h-6 w-6 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-mono text-[#8B5CF6]">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque 4: Charlas y webinars (talks) */}
        <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A855F7] mb-2">
                <Presentation className="w-4 h-4 text-[#8B5CF6]" />
                <span>{talks.title[language]}</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {talks.intro[language]}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:max-w-md">
              {talks.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-neutral-200"
                >
                  {topic[language]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
