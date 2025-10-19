'use client';

import { motion } from 'framer-motion';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  category: string;
  achievements: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="glass-card rounded-2xl transition-all duration-300 p-8 hover:-translate-y-1"
        >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {/* Company Logo/Icon */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{
            background: 'url(/sample.png) center/cover, linear-gradient(135deg, var(--primary-600), var(--primary-400))'
          }}>
            <div className="text-3xl font-black text-white drop-shadow">{experience.company.charAt(0)}</div>
          </div>
        </div>

        {/* Experience Details */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-xl font-bold text-black">
              {experience.position}
            </h3>
            <span className="text-sm font-medium text-gray-500">
              {experience.duration}
            </span>
          </div>
          
          <h4 className="text-lg font-semibold text-black mb-2">
            {experience.company}
          </h4>
          
          <p className="text-black/80 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="mb-4">
            <h5 className="text-sm font-semibold text-black mb-3">
              Key Achievements:
            </h5>
            <ul className="list-disc list-inside space-y-1">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-black/80 leading-relaxed">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="chip text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
