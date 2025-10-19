'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
  ];

  // Scrollspy active section
  const [active, setActive] = useState<string>('home');
  if (typeof window !== 'undefined') {
    // basic scroll listener, lightweight
    window.addEventListener('scroll', () => {
      const sections = ['home','about','skills','projects','experience','certificates'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          if (active !== id) setActive(id);
          break;
        }
      }
    }, { passive: true });
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="glass-header sticky top-0 z-50 transition-all duration-300 md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold transition-all duration-300 hover:scale-105">
                <span className="text-gradient-primary">Zanfuu</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-all duration-300 hover:scale-110"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Sheet Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-[9998]"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-[9999] max-h-[70vh] w-full overflow-hidden"
          >
            {/* Handle Bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="px-4 pb-4 border-b border-gray-100 w-full">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-lg font-bold text-black">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="px-4 py-4 max-h-[50vh] overflow-y-auto overflow-x-hidden w-full">
              <nav className="space-y-1 w-full">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between py-3 px-2 text-sm font-medium rounded-xl transition-colors group w-full ${
                      active === item.href.replace('#','') || (item.href==='/' && active==='home') 
                        ? 'text-gradient-primary bg-purple-50' 
                        : 'text-black hover:bg-gray-50'
                    }`}
                    onClick={handleNavClick}
                  >
                    <span className="flex-1 truncate">{item.name}</span>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </nav>
            </div>

            {/* CTA Button */}
            <div className="px-4 pb-6 pt-2 w-full">
              <Link
                href="#contact"
                className="btn-primary block w-full py-3 rounded-2xl text-sm font-semibold text-center"
                onClick={handleNavClick}
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
