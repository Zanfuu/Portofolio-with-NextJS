'use client';

import { useState } from 'react';
import Link from 'next/link';
import CTAButton from '../ui/cta-button';
import { NAVIGATION_ITEMS } from '@/constants/navigation';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = useScrollSpy();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

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
                  {NAVIGATION_ITEMS.map((item) => (
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
            <CTAButton
              text="contact me"
              href="#contact"
              variant="primary"
              className="px-6 py-2.5 text-sm"
              icon={false}
            />
          </div>
        </div>

      </div>
    </header>
  );
}
