'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onOpen: () => void;
}

export default function SplashScreen({ onOpen }: SplashScreenProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ left: number; top: number; opacity: number; delay: number; duration: number; xOffset: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onOpen();
      }, 500);
    }, 1000);
  };

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    // Generate fixed particle positions to avoid hydration issues
    const generatedParticles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.3 + Math.random() * 0.3,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      xOffset: (Math.random() - 0.5) * 20, // Fixed x offset for animation
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (!isOpening && isMounted) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isOpening, isMounted]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] overflow-hidden"
        >
          {/* Animated Background Particles */}
          {!isOpening && isMounted && (
            <>
              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: `rgba(124, 58, 237, ${particle.opacity})`,
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, particle.xOffset, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </>
          )}

          {/* Mouse Follow Light Effect */}
          {!isOpening && (
            <motion.div
              className="absolute w-96 h-96 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
              }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 200,
              }}
            />
          )}
          {/* Left Door */}
          <motion.div
            initial={{ x: 0 }}
            animate={isOpening ? { x: '-100%' } : { x: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-[#0b0b10] via-[#1a1a2e] to-[#0b0b10]"
            style={{
              boxShadow: isOpening ? 'none' : 'inset -10px 0 30px rgba(0, 0, 0, 0.5)',
            }}
          />

          {/* Right Door */}
          <motion.div
            initial={{ x: 0 }}
            animate={isOpening ? { x: '100%' } : { x: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-[#0b0b10] via-[#1a1a2e] to-[#0b0b10]"
            style={{
              boxShadow: isOpening ? 'none' : 'inset 10px 0 30px rgba(0, 0, 0, 0.5)',
            }}
          />

          {/* Center Content - Click to Open */}
          {!isOpening && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group"
              onClick={handleClick}
            >
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: '0 0 50px rgba(124, 58, 237, 0.8), 0 0 80px rgba(124, 58, 237, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-4xl md:text-6xl font-black text-white mb-4 transition-all duration-300 relative"
                  style={{
                    textShadow: '0 0 30px rgba(124, 58, 237, 0.5)',
                  }}
                >
                  Klik to Open
                  {/* Glow effect on hover */}
                  <motion.span
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, var(--primary-600), var(--primary-400))',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                  >
                    Klik to Open
                  </motion.span>
                </motion.h2>

                {/* Animated Circles */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-center items-center gap-4 mt-8"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 rounded-full border-2 border-white/50"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </motion.div>

                {/* Animated Chevron */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [0, 10, 0],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: 1,
                    ease: 'easeInOut',
                  }}
                  className="flex justify-center mt-6"
                >
                  <motion.svg
                    className="w-8 h-8 text-white/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.2, color: 'rgba(124, 58, 237, 1)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.div>

                {/* Click hint text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-sm text-white/50 mt-6 font-medium"
                >
                  Click anywhere to enter
                </motion.p>
              </div>
            </motion.div>
          )}

          {/* Light effect when opening */}
          {isOpening && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-radial from-white/20 via-white/10 to-transparent pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, rgba(124, 58, 237, 0.1) 50%, transparent 100%)',
                }}
              />
              {/* Light rays */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(${i * 45}deg, transparent 40%, rgba(124, 58, 237, 0.2) 50%, transparent 60%)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    repeat: 2,
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

