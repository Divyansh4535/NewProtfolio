"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ParticlesBackgroundProps {
  children: ReactNode;
  intensity?: "low" | "medium" | "high";
  theme?: "cosmic" | "aurora" | "fire" | "ocean";
  interactive?: boolean;
}

export default function ParticlesBackground({
  children,
  intensity = "medium",
  theme = "cosmic",
  interactive = true,
}: ParticlesBackgroundProps) {
  const [particles, setParticles] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const getIntensityCount = () => {
      switch (intensity) {
        case "low":
          return 20;
        case "medium":
          return 50;
        case "high":
          return 100;
        default:
          return 50;
      }
    };

    const numParticles = getIntensityCount();
    setParticles(Array.from({ length: numParticles }, (_, i) => i));
  }, [intensity, theme]);

  useLayoutEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive]);

  const getParticleColor = (index: number) => {
    const colors = {
      cosmic: ["bg-purple-400", "bg-blue-400", "bg-pink-400"],
      aurora: ["bg-green-400", "bg-teal-400", "bg-purple-400"],
      fire: ["bg-red-400", "bg-orange-400", "bg-yellow-400"],
      ocean: ["bg-blue-400", "bg-cyan-400", "bg-teal-400"],
    };

    const themeColors = colors[theme] || colors.cosmic;
    return themeColors[index % themeColors.length];
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-full">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-400/30 via-blue-400/30 to-pink-400/30" />

      {/* Interactive Mouse Trail */}
      {interactive && (
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none bg-purple-400"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}

      {/* Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {particles.map((id) => (
          <motion.div
            key={id}
            className={`rounded-full absolute ${getParticleColor(id)}`}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 6 + 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
