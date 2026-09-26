"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteMetadata } from "@/data/content";
import { Mail, Copy, Check, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Footer() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteMetadata.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#060609] py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Identity & Location */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-[10px] font-mono text-white font-semibold">
                IC
              </div>
              <span className="text-base font-semibold text-white tracking-tight">
                {siteMetadata.name}
              </span>
              <span className="text-neutral-600">.</span>
              <span className="text-xs font-mono text-[#94A3B8]">
                {siteMetadata.role}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>{siteMetadata.location[language]}</span>
            </div>
          </div>

          {/* Outbound Social & Contact Links */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">
                    {language === "en" ? "Copied" : "Copiado"}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{siteMetadata.email}</span>
                </>
              )}
            </button>

            {/* Email mailto link */}
            <a
              href={`mailto:${siteMetadata.email}`}
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="Send email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* GitHub */}
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>

            {/* LinkedIn */}
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Design System Notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} {siteMetadata.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>High-craft design system inspired by Linear & Raycast</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
