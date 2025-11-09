'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  category: string;
  achievements: string[];
  location?: string;
  type?: string;
  logo?: string;
  logoAlt?: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  // Get company initials (first letter of each word) - fallback jika tidak ada logo
  const getCompanyInitials = (company: string) => {
    return company
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="glass-card rounded-2xl transition-all duration-300 p-8 hover:-translate-y-1"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Company Logo/Icon */}
        <div className="flex-shrink-0">
          <div 
            className="w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden relative"
            style={{
              background: experience.logo 
                ? '#fff' 
                : 'linear-gradient(135deg, var(--primary-600), var(--primary-400))',
              boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)'
            }}
          >
            {experience.logo ? (
              <Image
                src={experience.logo}
                alt={experience.logoAlt || `${experience.company} logo`}
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 96px, 112px"
              />
            ) : (
              <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
                {getCompanyInitials(experience.company)}
              </div>
            )}
          </div>
        </div>

        {/* Experience Details */}
        <div className="flex-1 min-w-0">
          {/* Header with Position and Duration */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-1">
                {experience.position}
              </h3>
              <h4 className="text-lg md:text-xl font-semibold text-black mb-2">
                {experience.company}
              </h4>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                {experience.duration}
              </span>
              {experience.location && (
                <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                  {experience.location}
                </span>
              )}
            </div>
          </div>

          {/* Badges */}
          {(experience.type || experience.category) && (
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              {experience.type && (
                <span className="chip-active text-xs px-4 py-1.5">
                  {experience.type}
                </span>
              )}
              {experience.category && (
                <span className="chip text-xs px-4 py-1.5">
                  {experience.category}
                </span>
              )}
            </div>
          )}
          
          {/* Description */}
          <p className="text-black/80 mb-5 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mb-5">
              <h5 className="text-sm font-semibold text-black mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--primary-400)]"></span>
                Key Achievements:
              </h5>
              <ul className="list-none space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-black/80 leading-relaxed flex items-start gap-2">
                    <span className="text-[var(--primary-500)] mt-1.5 flex-shrink-0">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-black mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--primary-400)]"></span>
                Technologies:
              </h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="chip text-xs px-3 py-1.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
