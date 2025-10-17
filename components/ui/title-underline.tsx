'use client';

import { motion } from 'framer-motion';

interface TitleUnderlineProps {
  title: string;
  className?: string;
  titleClassName?: string;
  underlineClassName?: string;
  centered?: boolean;
  animated?: boolean;
}

export default function TitleUnderline({
  title,
  className = '',
  titleClassName = '',
  underlineClassName = '',
  centered = true,
  animated = true
}: TitleUnderlineProps) {
  const containerClasses = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`${containerClasses} ${className}`}>
      <motion.h2
        initial={animated ? { opacity: 0, y: 20 } : {}}
        animate={animated ? { opacity: 1, y: 0 } : {}}
        transition={animated ? { duration: 0.8 } : {}}
        className={`text-4xl md:text-5xl font-black text-black mb-6 ${titleClassName}`}
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={animated ? { width: 0 } : {}}
        animate={animated ? { width: '100%' } : {}}
        transition={animated ? { duration: 0.8, delay: 0.2, ease: 'easeInOut' } : {}}
        className={`h-1.5 bg-black rounded-full mx-auto ${centered ? 'w-32' : 'w-20'} ${underlineClassName}`}
      />
    </div>
  );
}