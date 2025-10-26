"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Particle {
  id: number;
  type: 'star' | 'circle' | 'sparkle' | 'nebula' | 'comet';
  style: {
    top: string;
    left: string;
    width: string;
    height: string;
    opacity: number;
  };
  animation: {
    duration: number;
    delay: number;
    direction: 'normal' | 'reverse' | 'alternate';
  };
}

interface ParticlesBackgroundProps {
  children: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'cosmic' | 'aurora' | 'fire' | 'ocean';
  interactive?: boolean;
}

export default function ParticlesBackground({ 
  children, 
  intensity = 'medium',
  theme = 'cosmic',
  interactive = true 
}: ParticlesBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const getIntensityCount = () => {
    switch (intensity) {
      case 'low': return 30;
      case 'medium': return 80;
      case 'high': return 150;
      default: return 80;
    }
  };

  const getThemeColors = () => {
    switch (theme) {
      case 'cosmic':
        return [
          'bg-gradient-to-r from-purple-400 to-pink-400',
          'bg-gradient-to-r from-blue-400 to-cyan-400',
          'bg-gradient-to-r from-indigo-400 to-purple-400',
          'bg-gradient-to-r from-pink-400 to-rose-400'
        ];
      case 'aurora':
        return [
          'bg-gradient-to-r from-green-400 to-emerald-400',
          'bg-gradient-to-r from-teal-400 to-cyan-400',
          'bg-gradient-to-r from-blue-400 to-indigo-400',
          'bg-gradient-to-r from-purple-400 to-pink-400'
        ];
      case 'fire':
        return [
          'bg-gradient-to-r from-red-400 to-orange-400',
          'bg-gradient-to-r from-orange-400 to-yellow-400',
          'bg-gradient-to-r from-red-500 to-pink-500',
          'bg-gradient-to-r from-yellow-400 to-amber-400'
        ];
      case 'ocean':
        return [
          'bg-gradient-to-r from-blue-400 to-cyan-400',
          'bg-gradient-to-r from-teal-400 to-emerald-400',
          'bg-gradient-to-r from-sky-400 to-blue-400',
          'bg-gradient-to-r from-cyan-400 to-teal-400'
        ];
      default:
        return [
          'bg-gradient-to-r from-purple-400 to-pink-400',
          'bg-gradient-to-r from-blue-400 to-cyan-400',
          'bg-gradient-to-r from-indigo-400 to-purple-400',
          'bg-gradient-to-r from-pink-400 to-rose-400'
        ];
    }
  };

  const getParticleType = (index: number): Particle['type'] => {
    const types: Particle['type'][] = ['star', 'circle', 'sparkle', 'nebula', 'comet'];
    return types[index % types.length];
  };

  const getParticleSize = (type: Particle['type']) => {
    switch (type) {
      case 'star': return { width: '4px', height: '4px' };
      case 'circle': return { width: '6px', height: '6px' };
      case 'sparkle': return { width: '8px', height: '8px' };
      case 'nebula': return { width: '12px', height: '12px' };
      case 'comet': return { width: '3px', height: '15px' };
      default: return { width: '4px', height: '4px' };
    }
  };

  useEffect(() => {
    const numParticles = getIntensityCount();
    const colors = getThemeColors();
    
    const particlesArray: Particle[] = Array.from({ length: numParticles }).map((_, index) => {
      const type = getParticleType(index);
      const size = getParticleSize(type);
      
      return {
        id: index,
        type,
        style: {
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          width: size.width,
          height: size.height,
          opacity: Math.random() * 0.8 + 0.2,
        },
        animation: {
          duration: Math.random() * 8 + 4,
          delay: Math.random() * 5,
          direction: Math.random() > 0.5 ? 'normal' : 'alternate',
        },
      };
    });

    setParticles(particlesArray);
  }, [intensity, theme]);

  useEffect(() => {
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  const getParticleClass = (type: Particle['type'], index: number) => {
    const colors = getThemeColors();
    const baseClasses = "rounded-full absolute";
    
    switch (type) {
      case 'star':
        return `${baseClasses} ${colors[0]} shadow-lg shadow-current`;
      case 'circle':
        return `${baseClasses} ${colors[1]} blur-[1px]`;
      case 'sparkle':
        return `${baseClasses} ${colors[2]} animate-pulse`;
      case 'nebula':
        return `${baseClasses} ${colors[3]} blur-[2px] opacity-70`;
      case 'comet':
        return `${baseClasses} bg-white blur-[1px]`;
      default:
        return `${baseClasses} ${colors[index % colors.length]}`;
    }
  };

  const getParticleAnimation = (particle: Particle) => {
    const { type, animation } = particle;
    
    switch (type) {
      case 'star':
        return {
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, 180, 360],
        };
      case 'circle':
        return {
          y: [0, -30, 0],
          x: [0, -15, 0],
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
        };
      case 'sparkle':
        return {
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 2, 1],
          opacity: [0.4, 1, 0.4],
          rotate: [0, 90, 180],
        };
      case 'nebula':
        return {
          y: [0, -50, 0],
          x: [0, -25, 0],
          scale: [1, 2.5, 1],
          opacity: [0.1, 0.4, 0.1],
        };
      case 'comet':
        return {
          y: [-100, 1000],
          x: [0, 100],
          opacity: [0, 0.8, 0],
          rotate: [0, 45],
        };
      default:
        return {
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        };
    }
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-full">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Interactive Mouse Trail Effect */}
      {interactive && (
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${getThemeColors()[0]} 0%, transparent 70%)`,
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

      {/* Particles Layer */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={getParticleClass(particle.type, particle.id)}
            style={particle.style}
            initial={getParticleAnimation(particle)}
            animate={getParticleAnimation(particle)}
            transition={{
              duration: particle.animation.duration,
              delay: particle.animation.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            {/* Sparkle effect for star particles */}
            {particle.type === 'star' && (
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Floating Glow Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: getThemeColors()[0],
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full blur-xl opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: getThemeColors()[1],
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}