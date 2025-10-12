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
        className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${titleClassName}`}
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={animated ? { width: 0 } : {}}
        animate={animated ? { width: '100%' } : {}}
        transition={animated ? { duration: 0.8, delay: 0.2, ease: 'easeInOut' } : {}}
        className={`h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 rounded-full mx-auto ${centered ? 'w-24' : 'w-16'} ${underlineClassName}`}
      />
    </div>
  );
}