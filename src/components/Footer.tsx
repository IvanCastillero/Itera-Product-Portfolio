"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteMetadata } from "@/data/content";
import { Mail, Copy, Check, MapPin, ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Footer() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteMetadata.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${siteMetadata.email}`;
    }
  };

  return (
    <footer className="border-t border-[#F4F1EA]/15 bg-[#080807] py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F4F1EA]/10 items-end">
          {/* Left CTA & Identity */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#E05A36]">
              {language === "en"
                ? `// ${siteMetadata.edition.en}`
                : `// ${siteMetadata.edition.es}`}
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#F4F1EA] tracking-tight">
              {language === "en" ? (
                <>
                  Ready to solve complex operational problems{" "}
                  <span className="font-serif italic font-normal text-[#E05A36]">
                    together?
                  </span>
                </>
              ) : (
                <>
                  ¿Listo para convertir problemas complejos en{" "}
                  <span className="font-serif italic font-normal text-[#E05A36]">
                    impacto medible?
                  </span>
                </>
              )}
            </h2>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A6A29A]">
              <MapPin className="w-3.5 h-3.5 text-[#E05A36]" />
              <span>{siteMetadata.location[language]}</span>
            </div>
          </div>

          {/* Right Contact Controls */}
          <div className="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F4F1EA] hover:bg-[#E05A36] text-[#0B0B0A] text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{language === "en" ? "Copied!" : "¡Copiado!"}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{siteMetadata.email}</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${siteMetadata.email}`}
              className="p-2.5 bg-[#121210] hover:bg-[#F4F1EA]/[0.08] border border-[#F4F1EA]/15 text-[#F4F1EA] transition-colors"
              title="Send email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#121210] hover:bg-[#F4F1EA]/[0.08] border border-[#F4F1EA]/15 text-xs font-mono text-[#F4F1EA] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#E05A36]" />
              <span>CV.PDF</span>
            </a>

            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#121210] hover:bg-[#F4F1EA]/[0.08] border border-[#F4F1EA]/15 text-xs font-mono text-[#F4F1EA] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#A6A29A]" />
            </a>

            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#121210] hover:bg-[#F4F1EA]/[0.08] border border-[#F4F1EA]/15 text-xs font-mono text-[#F4F1EA] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#E05A36]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#A6A29A]" />
            </a>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6A63] font-mono">
          <div>
            © {new Date().getFullYear()} {siteMetadata.name}.{" "}
            {language === "en"
              ? "All rights reserved."
              : "Todos los derechos reservados."}
          </div>
          <div>
            {language === "en"
              ? "Editorial Dossier System · Structured around PAR (Problem → Action → Result)"
              : "Sistema Editorial de Portafolio · Estructurado bajo PAR (Problema → Acción → Resultado)"}
          </div>
        </div>
      </div>
    </footer>
  );
}
