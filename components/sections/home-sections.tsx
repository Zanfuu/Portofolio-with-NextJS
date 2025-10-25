'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Mobile First */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 w-full"
          >
            <div className="relative w-full max-w-sm">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center relative mx-auto" style={{
                boxShadow: 'inset 0 0 0 6px rgba(167,139,250,0.6), 0 20px 40px rgba(124,58,237,0.15)'
              }}>
                <div className="w-56 h-56 sm:w-72 sm:h-72 glass-card rounded-full flex items-center justify-center">
                  <div className="text-4xl sm:text-6xl font-extrabold text-gradient-primary">
                    Z
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-600), var(--accent-500))',
                  boxShadow: '0 10px 24px rgba(34,211,238,0.25)'
                }}
              >
                <span className="text-lg sm:text-2xl text-white">🚀</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-600), var(--primary-400))',
                  boxShadow: '0 8px 20px rgba(124,58,237,0.25)'
                }}
              >
                <span className="text-sm sm:text-xl text-white">💻</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Mobile Second */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient-primary">Fauzan Naufal Azmi</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-black mb-8 font-medium"
            >
              Frontend Developer | DevOps Engineer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-black/80 mb-10 max-w-2xl leading-relaxed"
            >
              I build beautiful and interactive web applications. 
              Passionate about clean code, modern technologies, and creating 
              amazing user experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contact"
                className="btn-primary px-8 py-4 rounded-full font-semibold text-center"
              >
                Get In Touch
              </Link>
              <Link
                href="#projects"
                className="btn-secondary px-8 py-4 rounded-full font-semibold text-center"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
