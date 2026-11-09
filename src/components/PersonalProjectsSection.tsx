"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { personalProjects, personalProjectsHeader } from "@/data/content";
import { Code2, ExternalLink, Terminal, Scale, Lightbulb } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function PersonalProjectsSection() {
  const { language } = useLanguage();

  return (
    <section
      id="work"
      className="py-20 md:py-28 relative scroll-mt-20 border-t border-[#F4F1EA]/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121210] border border-[#F4F1EA]/15 text-xs font-mono text-[#E05A36] uppercase tracking-widest mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>{personalProjectsHeader.tag[language]}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F4F1EA] mb-4">
            {language === "en" ? (
              <>
                Selected Builds &{" "}
                <span className="font-serif italic font-normal text-[#E05A36]">
                  Personal Projects.
                </span>
              </>
            ) : (
              <>
                Proyectos Personales &{" "}
                <span className="font-serif italic font-normal text-[#E05A36]">
                  Desarrollos Propios.
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#A6A29A] leading-relaxed">
            {personalProjectsHeader.description[language]}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {personalProjects.map((project) => {
            const hasLiveUrl = Boolean(
              project.liveUrl && project.liveUrl.trim().length > 0
            );
            const hasGithubUrl = Boolean(
              project.githubUrl && project.githubUrl.trim().length > 0
            );
            const hasImages = Boolean(
              project.images && project.images.length > 0
            );

            return (
              <article
                key={project.id}
                className="surface-dossier crosshair-box border border-[#F4F1EA]/15 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Bar */}
                  <div className="px-6 py-3.5 bg-[#0B0B0A]/90 border-b border-[#F4F1EA]/10 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#E05A36] font-bold">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>
                        {language === "en"
                          ? project.code
                          : project.code.replace("BUILD", "DESARROLLO")}
                      </span>
                    </div>

                    {project.featuredMetric ? (
                      <span className="px-2.5 py-0.5 text-[11px] font-mono bg-[#F4F1EA]/[0.05] text-[#F4F1EA] border border-[#F4F1EA]/15">
                        {project.featuredMetric[language]}
                      </span>
                    ) : null}
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#F4F1EA] tracking-tight mb-1.5">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#E05A36] font-medium leading-relaxed">
                        {project.tagline[language]}
                      </p>
                    </div>

                    {/* PAR Breakdown inside Personal Build */}
                    <div className="space-y-3 p-4 bg-[#0B0B0A]/80 border border-[#F4F1EA]/10">
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#E05A36] mb-1">
                          {language === "en"
                            ? "P // Problem & Hypothesis"
                            : "P // Problema e Hipótesis"}
                        </div>
                        <p className="text-xs text-[#A6A29A] leading-relaxed">
                          {project.problemHypothesis[language]}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-[#F4F1EA]/[0.06]">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#F4F1EA] mb-1">
                          {language === "en"
                            ? "A // Spec-Driven Action & Architecture"
                            : "A // Acción y Arquitectura (SDD)"}
                        </div>
                        <p className="text-xs text-[#A6A29A] leading-relaxed">
                          {project.actionAndArchitecture[language]}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-[#F4F1EA]/[0.06]">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 mb-1">
                          {language === "en"
                            ? "R // Validated Output"
                            : "R // Resultado y Validación"}
                        </div>
                        <p className="text-xs text-[#F4F1EA] leading-relaxed">
                          {project.resultAndValidation[language]}
                        </p>
                      </div>
                    </div>

                    {/* Trade-off & Key Learning Callouts */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 bg-[#121210] border border-[#F4F1EA]/10 flex items-start gap-2.5">
                        <Scale className="w-3.5 h-3.5 text-[#E05A36] shrink-0 mt-0.5" />
                        <span className="text-[#A6A29A] leading-relaxed">
                          {project.tradeoffNote[language]}
                        </span>
                      </div>

                      <div className="p-3 bg-[#121210] border border-[#F4F1EA]/10 flex items-start gap-2.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                        <span className="text-[#F4F1EA]/90 italic font-serif text-sm leading-snug">
                          “{project.keyLearning[language]}”
                        </span>
                      </div>
                    </div>

                    {hasImages ? (
                      <div className=" overflow-hidden border border-[#F4F1EA]/10 bg-black/40 p-2">
                        <div className="space-y-3">
                          {project.images?.map((imgSrc, imgIdx) => (
                            <Image
                              key={imgIdx}
                              src={imgSrc}
                              alt={`${project.title} screenshot ${imgIdx + 1}`}
                              width={800}
                              height={450}
                              className="w-full h-auto object-cover"
                            />
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Footer: Tech Stack & Links */}
                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#F4F1EA]/10 bg-[#0B0B0A]/50 space-y-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#6E6A63] mb-2">
                      {language === "en"
                        ? "// TECH & ARCHITECTURE STACK"
                        : "// STACK TECNOLÓGICO"}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[11px] bg-[#121210] border border-[#F4F1EA]/10 text-[#A6A29A] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {hasLiveUrl || hasGithubUrl ? (
                    <div className="pt-3 border-t border-[#F4F1EA]/[0.06] flex flex-wrap items-center gap-3">
                      {hasLiveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F4F1EA] text-[#0B0B0A] hover:bg-[#E05A36] font-mono font-bold text-xs uppercase transition-colors"
                        >
                          <span>
                            {language === "en" ? "Live Demo" : "Demo en Vivo"}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : null}

                      {hasGithubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#121210] hover:bg-[#F4F1EA] text-[#F4F1EA] hover:text-[#0B0B0A] border border-[#F4F1EA]/15 font-mono text-xs uppercase tracking-wider transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>
                            {language === "en"
                              ? "Inspect Repository & Specs"
                              : "Ver Repositorio y Specs"}
                          </span>
                        </a>
                      ) : null}
                    </div>
                  ) : (
                    <div className="pt-3 border-t border-[#F4F1EA]/[0.06] flex items-center justify-between text-xs font-mono text-[#A6A29A]">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#E05A36] animate-pulse" />
                        <span>
                          {language === "en"
                            ? "Private Spec · Active Build"
                            : "Spec Privada · En Construcción"}
                        </span>
                      </span>
                      <span className="text-[#6E6A63]">
                        {language === "en" ? "SDD PIPELINE" : "FLUJO SDD"}
                      </span>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
