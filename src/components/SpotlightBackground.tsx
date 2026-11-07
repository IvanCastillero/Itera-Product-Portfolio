"use client";

import React, { useEffect, useRef } from "react";

export function SpotlightBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;

    const updatePosition = () => {
      if (el) {
        el.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
        el.style.opacity = "1";
      }
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Architectural Drafting Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-70" />

      {/* Vertical Structural Guide Rails (Desktop) */}
      <div className="hidden xl:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-6xl border-x border-[#F4F1EA]/[0.04]" />

      {/* Warm Editorial Top Light (Subtle Alabaster / Terracotta Wash) */}
      <div
        className="absolute -top-[360px] left-1/2 -translate-x-1/2 h-[620px] w-[1100px] rounded-full pointer-events-none blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(224, 90, 54, 0.07) 0%, rgba(244, 241, 234, 0.03) 45%, transparent 75%)",
        }}
      />

      {/* High-performance RAF warm spotlight */}
      <div
        ref={spotlightRef}
        className="hidden md:block absolute top-0 left-0 h-[560px] w-[560px] rounded-full opacity-0 pointer-events-none transition-opacity duration-700 ease-out will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(244, 241, 234, 0.035) 0%, rgba(224, 90, 54, 0.015) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
