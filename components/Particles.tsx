"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Particle {
  id: number;
  style: {
    top: string;
    left: string;
    animationDuration: string;
    animationDelay: string;
  };
}

interface ParticlesBackgroundProps {
  children: ReactNode;
}

export default function ParticlesBackground({
  children,
}: ParticlesBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles dynamically
    const numParticles = 50;
    const particlesArray: Particle[] = Array.from({ length: numParticles }).map(
      (_, index) => ({
        id: index,
        style: {
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 4 + 2}s`,
          animationDelay: `${Math.random() * 2}s`,
        },
      })
    );

    setParticles(particlesArray);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Particles Layer */}
      <div className="absolute top-0 left-0 w-full h-full">
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className={`particle w-2 h-2 ${
              index % 4 === 0
                ? "bg-amber-600"
                : index % 3 === 0
                ? "bg-gradient-to-r from-purple-600 to-blue-600"
                : "bg-red-300"
            } rounded-full absolute`}
            style={particle.style}
            animate={{ y: ["0", "100vh"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="">{children}</div>
    </div>
  );
}
