"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { personalProjects } from "@/data/content";
import { Code2, ExternalLink, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function PersonalProjectsSection() {
  const { language } = useLanguage();

  return (
    <section id="work" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#8B5CF6] mb-4">
            <Code2 className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>
              {language === "en" ? "Personal Projects" : "Proyectos Personales"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {language === "en" ? (
              <>
                Selected Builds <br />
                <span className="text-neutral-400">& Personal Projects.</span>
              </>
            ) : (
              <>
                Proyectos Personales <br />
                <span className="text-neutral-400">& Desarrollos Propios.</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8]">
            {language === "en"
              ? "Tools and digital products I design and build to solve real everyday problems, exploring new paradigms in product development."
              : "Herramientas y productos digitales que diseño y construyo para resolver problemas reales del día a día, explorando nuevos paradigmas de desarrollo."}
          </p>
        </div>

        {/* Projects Layout: Grid for multiple projects or full width for single */}
        <div
          className={`grid gap-8 ${
            personalProjects.length > 1
              ? "grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {personalProjects.map((project) => {
            const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
            const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
            const hasImages = Boolean(project.images && project.images.length > 0);

            return (
              <div
                key={project.id}
                className="card-linear rounded-2xl p-7 sm:p-9 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#8B5CF6] group-hover:border-[#8B5CF6]/40 transition-colors">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-neutral-400">
                        {language === "en" ? "Personal Build" : "Proyecto Personal"}
                      </span>
                    </div>

                    {project.featuredMetric && (
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-[#8B5CF6]/15 text-[#C084FC] border border-[#8B5CF6]/30 font-medium">
                        {project.featuredMetric[language]}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#A855F7] font-medium mb-6 leading-relaxed">
                    {project.tagline[language]}
                  </p>

                  {/* Problem / Hypothesis */}
                  <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      {language === "en" ? "Problem / Hypothesis" : "Problema / Hipótesis"}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {project.problemHypothesis[language]}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      {language === "en" ? "Product Solution" : "Solución de Producto"}
                    </div>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {project.solution[language]}
                    </p>
                  </div>

                  {/* Screenshots / GIF preview container: only rendered if images exist */}
                  {hasImages && (
                    <div className="mb-6 rounded-xl overflow-hidden border border-white/10 bg-black/40 p-2">
                      <div className="space-y-3">
                        {project.images?.map((imgSrc, imgIdx) => (
                          <Image
                            key={imgIdx}
                            src={imgSrc}
                            alt={`${project.title} screenshot ${imgIdx + 1}`}
                            width={800}
                            height={450}
                            className="w-full h-auto rounded-lg object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech & Tools Stack */}
                  <div className="mb-6 pt-4 border-t border-white/[0.04]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2.5">
                      {language === "en" ? "Tech & Stack" : "Stack Tecnológico"}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] border border-white/[0.08] text-neutral-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons: Only show if URLs exist */}
                  {(hasLiveUrl || hasGithubUrl) && (
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
                      {hasLiveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#08080C] hover:bg-neutral-200 font-semibold text-xs transition-all shadow-sm"
                        >
                          <span>{language === "en" ? "Live Demo" : "Demo en Vivo"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {hasGithubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-medium text-xs transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>{language === "en" ? "View on GitHub" : "Ver en GitHub"}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
