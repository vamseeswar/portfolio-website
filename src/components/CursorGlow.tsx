"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9990] hidden md:block"
      style={{
        width: "400px",
        height: "400px",
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(59,130,246,0.03) 40%, transparent 70%)",
        borderRadius: "50%",
        transition: "left 0.15s ease-out, top 0.15s ease-out",
      }}
      aria-hidden="true"
    />
  );
}
