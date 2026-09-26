"use client";

import React, { useEffect, useState } from "react";

export function SpotlightBackground() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Top subtle ambient violet glow */}
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-[#8B5CF6]/15 via-[#A855F7]/05 to-transparent blur-[120px] pointer-events-none" />

      {/* Secondary deep purple ambient corner glow */}
      <div className="absolute top-[40%] -right-[200px] h-[500px] w-[500px] rounded-full bg-[#7C3AED]/08 blur-[140px] pointer-events-none" />
      <div className="absolute top-[75%] -left-[200px] h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/06 blur-[140px] pointer-events-none" />

      {/* Interactive mouse spotlight */}
      {isClient && (
        <div
          className="hidden md:block absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.07) 0%, rgba(168, 85, 247, 0.02) 40%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      )}
    </div>
  );
}
