"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteMetadata, navigationLinks } from "@/data/content";
import { FileText, Menu, X, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080C]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-[#8B5CF6]/50 transition-colors">
            <span className="font-mono text-xs font-semibold tracking-wider text-neutral-200 group-hover:text-white">
              IC
            </span>
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5">
              {siteMetadata.name}
            </span>
            <span className="text-[11px] font-mono text-[#94A3B8] hidden sm:block">
              {siteMetadata.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 text-xs font-medium text-neutral-300 bg-white/[0.02] border border-white/[0.06] rounded-full p-1 backdrop-blur-md"
        >
          {navigationLinks.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full transition-all text-[#94A3B8] hover:text-white hover:bg-white/[0.06]"
            >
              {item.label[language]}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & Controls */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language Switcher Pill */}
          <div
            role="group"
            aria-label="Language selection"
            className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full p-0.5 text-[11px] font-mono"
          >
            <button
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              aria-label="Switch language to English"
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === "en"
                  ? "bg-[#8B5CF6]/20 text-white font-semibold border border-[#8B5CF6]/40"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              aria-pressed={language === "es"}
              aria-label="Cambiar idioma a Español"
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === "es"
                  ? "bg-[#8B5CF6]/20 text-white font-semibold border border-[#8B5CF6]/40"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              ES
            </button>
          </div>

          {/* Resume button linking directly to cv.pdf */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-xs font-medium text-neutral-200 transition-all"
            title={language === "en" ? "View Resume (PDF)" : "Ver CV (PDF)"}
          >
            <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>CV</span>
          </a>

          {/* Social Icons */}
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-neutral-300 hover:text-white transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-neutral-300 hover:text-white transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300"
          >
            <Globe className="w-3 h-3 text-[#8B5CF6]" />
            <span className="uppercase">{language}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0D0D14] border border-white/10 shadow-2xl backdrop-blur-2xl space-y-3"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navigationLinks.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-neutral-300 hover:text-white hover:bg-white/[0.05]"
              >
                {item.label[language]}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/08 flex items-center justify-between">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-white"
            >
              <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>{language === "en" ? "View Resume" : "Ver CV"}</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
