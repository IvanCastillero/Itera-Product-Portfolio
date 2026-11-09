"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  enterpriseIntro,
  enterpriseProjects,
  otherEnterpriseWork,
  talks,
} from "@/data/content";
import {
  Briefcase,
  CheckCircle2,
  Presentation,
  ChevronDown,
  ChevronUp,
  Target,
  Compass,
  Scale,
  Lightbulb,
} from "lucide-react";

type FilterScope = "all" | "direct" | "co-led";

export function EnterpriseSection() {
  const { language } = useLanguage();
  const [filterScope, setFilterScope] = useState<FilterScope>("all");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "coe-reports": true,
  });

  const toggleDossier = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects = enterpriseProjects.filter((project) => {
    if (filterScope === "all") return true;
    return project.leadershipType === filterScope;
  });

  const getMetricToneClasses = (tone?: "emerald" | "amber" | "terracotta") => {
    switch (tone) {
      case "emerald":
        return "text-emerald-400 border-emerald-500/25 bg-emerald-500/[0.05]";
      case "amber":
        return "text-amber-300 border-amber-500/25 bg-amber-500/[0.05]";
      case "terracotta":
        return "text-[#F26B43] border-[#E05A36]/30 bg-[#E05A36]/[0.06]";
      default:
        return "text-[#F4F1EA] border-[#F4F1EA]/15 bg-[#F4F1EA]/[0.03]";
    }
  };

  return (
    <section
      id="enterprise"
      className="py-20 md:py-28 relative scroll-mt-20 border-t border-[#F4F1EA]/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Section Header + Scope Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#F4F1EA]/12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121210] border border-[#F4F1EA]/15 text-xs font-mono text-[#E05A36] uppercase tracking-widest mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>
                {language === "en"
                  ? "02 // ENTERPRISE EXPERIENCE"
                  : "02 // EXPERIENCIA EMPRESARIAL"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F4F1EA] mb-4">
              {language === "en" ? (
                <>
                  Enterprise{" "}
                  <span className="font-serif italic font-normal text-[#E05A36]">
                    Solutions.
                  </span>
                </>
              ) : (
                <>
                  Soluciones{" "}
                  <span className="font-serif italic font-normal text-[#E05A36]">
                    Empresariales.
                  </span>
                </>
              )}
            </h2>

            <p className="text-base text-[#A6A29A] leading-relaxed">
              {enterpriseIntro[language]}
            </p>
          </div>

          {/* Filter by Leadership Scope */}
          <div
            role="group"
            aria-label="Filter projects by leadership scope"
            className="flex flex-wrap bg-[#121210] border border-[#F4F1EA]/15 p-1 gap-1 self-start lg:self-end shrink-0"
          >
            <button
              onClick={() => setFilterScope("all")}
              className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                filterScope === "all"
                  ? "bg-[#E05A36] text-[#0B0B0A] font-bold"
                  : "text-[#A6A29A] hover:text-[#F4F1EA]"
              }`}
            >
              {language === "en" ? "All Projects (4)" : "Todos (4)"}
            </button>
            <button
              onClick={() => setFilterScope("direct")}
              className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                filterScope === "direct"
                  ? "bg-[#E05A36] text-[#0B0B0A] font-bold"
                  : "text-[#A6A29A] hover:text-[#F4F1EA]"
              }`}
            >
              {language === "en" ? "Led End-to-End (3)" : "Liderados (3)"}
            </button>
            <button
              onClick={() => setFilterScope("co-led")}
              className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                filterScope === "co-led"
                  ? "bg-[#E05A36] text-[#0B0B0A] font-bold"
                  : "text-[#A6A29A] hover:text-[#F4F1EA]"
              }`}
            >
              {language === "en" ? "Co-Led (1)" : "Co-Liderados (1)"}
            </button>
          </div>
        </div>

        {/* Case Studies Dossier Stack */}
        <div className="space-y-10">
          {filteredProjects.map((project) => {
            const isExpanded = Boolean(expandedIds[project.id]);
            const isDirect = project.leadershipType === "direct";

            return (
              <article
                key={project.id}
                className="surface-dossier crosshair-box border border-[#F4F1EA]/15 overflow-hidden"
              >
                {/* Top Dossier Classification Bar */}
                <div className="px-6 sm:px-8 py-4 bg-[#0B0B0A]/90 border-b border-[#F4F1EA]/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#E05A36] tracking-wider">
                      {language === "en" ? project.code : project.code.replace("PROJECT", "PROYECTO")}
                    </span>
                    <span className="text-[#6E6A63]">/</span>
                    <span
                      className={`px-2.5 py-0.5 text-[11px] font-mono border ${
                        isDirect
                          ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                          : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                      }`}
                    >
                      {project.leadershipBadge[language]}
                    </span>
                    <span className="px-2.5 py-0.5 text-[11px] font-mono bg-[#F4F1EA]/[0.05] text-[#F4F1EA] border border-[#F4F1EA]/15">
                      {project.statusBadge[language]}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#A6A29A]">
                    {project.category[language]}
                  </span>
                </div>

                {/* Main Case Study Header & Quantitative Strip */}
                <div className="p-6 sm:p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#F4F1EA] tracking-tight mb-2">
                      {project.title[language]}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#E05A36]">
                      {project.role[language]}
                    </p>
                  </div>

                  {/* 3 Quantitative Impact Pillars for this Project */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {project.keyMetrics.map((km, mIdx) => (
                      <div
                        key={mIdx}
                        className={`p-4 sm:p-5 border ${getMetricToneClasses(
                          km.tone
                        )}`}
                      >
                        <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight mb-1">
                          {km.value}
                        </div>
                        <div className="text-xs font-semibold text-[#F4F1EA] mb-1">
                          {km.label[language]}
                        </div>
                        {km.sublabel ? (
                          <div className="text-[11px] font-mono text-[#A6A29A]">
                            {km.sublabel[language]}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {/* PAR (Problem -> Action -> Result) 3-Column Breakdown */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5 sm:p-6 bg-[#0B0B0A]/75 border border-[#F4F1EA]/10 mb-8">
                    {/* P: Problem */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#E05A36]">
                        <span className="px-1.5 py-0.5 bg-[#E05A36]/15 border border-[#E05A36]/30 font-bold">
                          P
                        </span>
                        <span>
                          {language === "en"
                            ? "01. Problem & Friction"
                            : "01. Problema y Fricción"}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed">
                        {project.problem[language]}
                      </p>
                    </div>

                    {/* A: Action */}
                    <div className="space-y-2 lg:border-l lg:border-[#F4F1EA]/10 lg:pl-6">
                      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#F4F1EA]">
                        <span className="px-1.5 py-0.5 bg-[#F4F1EA]/10 border border-[#F4F1EA]/25 font-bold">
                          A
                        </span>
                        <span>
                          {language === "en"
                            ? "02. Action & Strategy"
                            : "02. Acción y Ejecución"}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed">
                        {project.action[language]}
                      </p>
                    </div>

                    {/* R: Result */}
                    <div className="space-y-2 lg:border-l lg:border-[#F4F1EA]/10 lg:pl-6">
                      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                        <span className="px-1.5 py-0.5 bg-emerald-500/15 border border-emerald-500/30 font-bold">
                          R
                        </span>
                        <span>
                          {language === "en"
                            ? "03. Measured Result"
                            : "03. Resultado Medible"}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#F4F1EA] leading-relaxed font-medium">
                        {project.resultSummary[language]}
                      </p>
                    </div>
                  </div>

                  {/* Key Executive Highlights + Frameworks Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-8 space-y-2.5">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-[#6E6A63]">
                        {language === "en"
                          ? "// KEY DELIVERABLES & IMPACT SUMMARY"
                          : "// ENTREGABLES Y RESUMEN DE IMPACTO"}
                      </div>
                      {project.highlights[language].map((hl, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4F1EA]/90 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#E05A36] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    <div className="lg:col-span-4 space-y-3 lg:border-l lg:border-[#F4F1EA]/10 lg:pl-6">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-[#6E6A63]">
                        {language === "en"
                          ? "// METHODS & FRAMEWORKS"
                          : "// METODOLOGÍAS Y MARCOS"}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.frameworks.map((fw, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs bg-[#0B0B0A] border border-[#F4F1EA]/12 text-[#A6A29A] font-mono"
                          >
                            {fw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive PM Thinking Dossier Toggle Button */}
                <div className="border-t border-[#F4F1EA]/12 bg-[#0B0B0A]/60">
                  <button
                    onClick={() => toggleDossier(project.id)}
                    aria-expanded={isExpanded}
                    className="w-full px-6 sm:px-8 py-3.5 flex items-center justify-between text-left hover:bg-[#F4F1EA]/[0.03] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E05A36]">
                      <Scale className="w-3.5 h-3.5" />
                      <span>
                        {isExpanded
                          ? language === "en"
                            ? "Hide PM Thought Process (Research, Decisions, Trade-offs & Learnings)"
                            : "Ocultar Proceso de Pensamiento PM (Investigación, Trade-offs y Aprendizajes)"
                          : language === "en"
                          ? "Inspect PM Thought Process (Research, Decisions, Trade-offs & Learnings)"
                          : "Inspeccionar Pensamiento PM (Investigación, Decisiones, Trade-offs y Aprendizajes)"}
                      </span>
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-[#A6A29A]">
                      <span>
                        {isExpanded
                          ? language === "en" ? "CLOSE" : "CERRAR"
                          : language === "en" ? "EXPAND" : "EXPANDIR"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#E05A36]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#E05A36]" />
                      )}
                    </span>
                  </button>

                  {/* Expanded PM Dossier Content */}
                  {isExpanded ? (
                    <div className="p-6 sm:p-8 border-t border-[#F4F1EA]/10 bg-[#0B0B0A] grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Goal */}
                      <div className="p-5 bg-[#121210] border border-[#F4F1EA]/10 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F4F1EA]">
                          <Target className="w-4 h-4 text-[#E05A36]" />
                          <span>
                            {language === "en"
                              ? "Product Goal & Success Criteria"
                              : "Objetivo de Producto y Criterio de Éxito"}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed">
                          {project.dossier.goal[language]}
                        </p>
                      </div>

                      {/* User Research & Discovery */}
                      <div className="p-5 bg-[#121210] border border-[#F4F1EA]/10 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F4F1EA]">
                          <Compass className="w-4 h-4 text-[#E05A36]" />
                          <span>
                            {language === "en"
                              ? "User Research & Operational Discovery"
                              : "Investigación de Usuarios y Descubrimiento"}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed">
                          {project.dossier.researchAndDiscovery[language]}
                        </p>
                      </div>

                      {/* Key Product Decisions & Trade-offs */}
                      <div className="p-5 bg-[#121210] border border-[#F4F1EA]/10 space-y-3 md:col-span-2">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E05A36]">
                          <Scale className="w-4 h-4" />
                          <span>
                            {language === "en"
                              ? "Key Product Decisions & Trade-offs"
                              : "Decisiones Clave y Trade-offs de Producto"}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.dossier.decisionsAndTradeoffs[language].map(
                            (decision, dIdx) => (
                              <div
                                key={dIdx}
                                className="p-3.5 bg-[#0B0B0A] border border-[#F4F1EA]/10 text-xs sm:text-sm text-[#F4F1EA]/90 leading-relaxed"
                              >
                                {decision}
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Key Learnings */}
                      <div className="p-5 bg-[#121210] border-l-2 border-l-[#E05A36] border border-[#F4F1EA]/10 space-y-2 md:col-span-2">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300">
                          <Lightbulb className="w-4 h-4" />
                          <span>
                            {language === "en"
                              ? "Key Product Takeaway & Retrospective"
                              : "Aprendizaje Clave y Retrospectiva"}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#F4F1EA] leading-relaxed italic font-serif sm:text-base">
                          “{project.dossier.keyLearnings[language]}”
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {/* Additional Enterprise Discovery & Innovation Work */}
        <div className="pt-10 border-t border-[#F4F1EA]/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#F4F1EA] font-mono uppercase tracking-wider">
              {`// ${otherEnterpriseWork.title[language]}`}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherEnterpriseWork.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#121210] border border-[#F4F1EA]/10 hover:border-[#E05A36]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#E05A36]">
                      {item.tag[language]}
                    </span>
                    <span className="font-mono text-xs text-[#6E6A63]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-[#F4F1EA] mb-2">
                    {item.title[language]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed">
                    {item[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Talks & Webinars Banner */}
        <div className="p-6 sm:p-8 bg-[#121210] border border-[#F4F1EA]/15 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E05A36] mb-2">
              <Presentation className="w-4 h-4" />
              <span>{talks.title[language]}</span>
            </div>
            <p className="text-sm text-[#A6A29A] leading-relaxed">
              {talks.intro[language]}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-md">
            {talks.topics.map((topic, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-mono bg-[#0B0B0A] border border-[#F4F1EA]/15 text-[#F4F1EA]"
              >
                {topic[language]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
