'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Mobile First */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <div className="w-80 h-80 glass-card-dark rounded-full flex items-center justify-center relative">
                <div className="w-72 h-72 glass-card rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-black">
                    Z
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 glass-card-dark rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 glass-card-dark rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <span className="text-xl">💻</span>
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
              <span className="text-black bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Fauzan Naufal Azmi</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-black mb-8 font-medium"
            >
              Frontend Developer
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
                className="glass-button-dark text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-center"
              >
                Get In Touch
              </Link>
              <Link
                href="#projects"
                className="glass-button text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-center"
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
