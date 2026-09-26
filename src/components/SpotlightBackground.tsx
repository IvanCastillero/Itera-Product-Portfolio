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
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Top subtle ambient violet glow */}
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-[#8B5CF6]/15 via-[#A855F7]/05 to-transparent blur-[120px] pointer-events-none" />

      {/* Secondary deep purple ambient corner glow */}
      <div className="absolute top-[40%] -right-[200px] h-[500px] w-[500px] rounded-full bg-[#7C3AED]/08 blur-[140px] pointer-events-none" />
      <div className="absolute top-[75%] -left-[200px] h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/06 blur-[140px] pointer-events-none" />

      {/* High-performance RAF mouse spotlight */}
      <div
        ref={spotlightRef}
        className="hidden md:block absolute top-0 left-0 h-[600px] w-[600px] rounded-full opacity-0 pointer-events-none transition-opacity duration-700 ease-out will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(168, 85, 247, 0.02) 40%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />
    </div>
  );
}
