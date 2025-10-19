'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <header className="glass-header sticky top-0 z-50 transition-all duration-300 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold transition-all duration-300 hover:scale-105">
              <span className="text-gradient-primary">Zanfuu</span>
            </Link>
          </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleNavClick}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-lg ${active === item.href.replace('#','') || (item.href==='/' && active==='home') ? 'text-gradient-primary' : 'text-white'}`}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5" style={{background:'var(--primary-400)'}}></span>
                    </Link>
                  ))}
                </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link
              href="#contact"
              className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              contact me
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
