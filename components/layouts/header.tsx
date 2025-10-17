'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
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

  return (
    <header className="glass-header sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300 hover:scale-105">
              Zanfuu
            </Link>
          </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleNavClick}
                      className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-all duration-300 relative group glass-button rounded-lg"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4"></span>
                    </Link>
                  ))}
                </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="glass-button text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300"
            >
              contact me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-header border-t border-white/20">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-white hover:text-gray-300 block px-4 py-3 text-base font-medium transition-all duration-300 glass-button rounded-lg"
                        onClick={handleNavClick}
                      >
                        {item.name}
                      </Link>
                    ))}
              <div className="pt-4">
                    <Link
                      href="#contact"
                      className="glass-button text-black block px-6 py-3 rounded-full text-base font-semibold hover:scale-105 transition-all duration-300 text-center"
                      onClick={handleNavClick}
                    >
                      contact me
                    </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
