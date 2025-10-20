'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: boolean;
}

export default function CTAButton({ 
  text, 
  href, 
  variant = 'primary', 
  className = '',
  icon = true 
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1";
  
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {text}
        {icon && (
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </Link>
    </motion.div>
  );
}
