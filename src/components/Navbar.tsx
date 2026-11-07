"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteMetadata, navigationLinks } from "@/data/content";
import { FileText, Menu, X, Globe, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0B0B0A]/90 backdrop-blur-xl border-[#F4F1EA]/12 py-3"
          : "bg-[#0B0B0A]/60 backdrop-blur-md border-[#F4F1EA]/[0.06] py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left Brand / Editorial Masthead Identity */}
        <a
          href="#"
          className="group flex items-center gap-3 text-[#F4F1EA] transition-opacity hover:opacity-95"
        >
          <div className="relative flex items-center justify-center w-8 h-8 bg-[#121210] border border-[#F4F1EA]/15 group-hover:border-[#E05A36] transition-colors">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#F4F1EA]">
              IC
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#F4F1EA]">
              {siteMetadata.name}
            </span>
            <span className="text-[11px] font-mono text-[#A6A29A] hidden sm:block">
              {siteMetadata.role}
            </span>
          </div>
        </a>

        {/* Desktop Numbered Index Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center border border-[#F4F1EA]/10 bg-[#121210]/90 divide-x divide-[#F4F1EA]/10"
        >
          {navigationLinks.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="px-3.5 py-2 text-xs font-medium text-[#A6A29A] hover:text-[#F4F1EA] hover:bg-[#F4F1EA]/[0.04] transition-colors flex items-center gap-1.5"
            >
              <span className="font-mono text-[10px] text-[#E05A36]">
                {item.index}
              </span>
              <span>{item.label[language]}</span>
            </a>
          ))}
        </nav>

        {/* Right Controls: Language, CV, Socials */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language Switcher */}
          <div
            role="group"
            aria-label="Language selection"
            className="flex items-center bg-[#121210] border border-[#F4F1EA]/12 p-0.5 text-[11px] font-mono"
          >
            <button
              onClick={() => setLanguage("es")}
              aria-pressed={language === "es"}
              className={`px-2.5 py-1 transition-all cursor-pointer ${
                language === "es"
                  ? "bg-[#E05A36] text-[#0B0B0A] font-bold"
                  : "text-[#A6A29A] hover:text-[#F4F1EA]"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`px-2.5 py-1 transition-all cursor-pointer ${
                language === "en"
                  ? "bg-[#E05A36] text-[#0B0B0A] font-bold"
                  : "text-[#A6A29A] hover:text-[#F4F1EA]"
              }`}
            >
              EN
            </button>
          </div>

          {/* Resume (PDF) */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121210] hover:bg-[#F4F1EA] text-[#F4F1EA] hover:text-[#0B0B0A] border border-[#F4F1EA]/15 text-xs font-mono uppercase tracking-wider transition-colors"
            title={language === "en" ? "View Resume (PDF)" : "Ver CV (PDF)"}
          >
            <FileText className="w-3.5 h-3.5 text-[#E05A36] group-hover:text-[#0B0B0A]" />
            <span>CV.PDF</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          {/* Social Links */}
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 bg-[#121210] hover:bg-[#F4F1EA]/[0.08] border border-[#F4F1EA]/12 text-[#A6A29A] hover:text-[#F4F1EA] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 bg-[#121210] hover:bg-[#F4F1EA]/[0.08] border border-[#F4F1EA]/12 text-[#A6A29A] hover:text-[#F4F1EA] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono bg-[#121210] border border-[#F4F1EA]/15 text-[#F4F1EA]"
          >
            <Globe className="w-3.5 h-3.5 text-[#E05A36]" />
            <span className="uppercase">{language}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation menu"
            className="p-2 bg-[#121210] border border-[#F4F1EA]/15 text-[#F4F1EA]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen ? (
        <div
          id="mobile-nav-menu"
          className="md:hidden mt-3 mx-4 p-4 bg-[#121210] border border-[#F4F1EA]/15 shadow-2xl space-y-4"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#F4F1EA]/10">
            {navigationLinks.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-sm text-[#F4F1EA] flex items-center justify-between"
              >
                <span>{item.label[language]}</span>
                <span className="font-mono text-xs text-[#E05A36]">{item.index}</span>
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#F4F1EA]/10 flex items-center justify-between">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E05A36] text-[#0B0B0A] text-xs font-mono font-bold uppercase"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === "en" ? "Resume (PDF)" : "Ver CV (PDF)"}</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 bg-[#0B0B0A] border border-[#F4F1EA]/15 text-[#F4F1EA]"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 bg-[#0B0B0A] border border-[#F4F1EA]/15 text-[#F4F1EA]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
