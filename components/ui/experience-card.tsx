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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {/* Company Logo/Icon */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {experience.company.charAt(0)}
            </div>
          </div>
        </div>

        {/* Experience Details */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {experience.position}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {experience.duration}
            </span>
          </div>
          
          <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
            {experience.company}
          </h4>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="mb-4">
            <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              Key Achievements:
            </h5>
            <ul className="list-disc list-inside space-y-1">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
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
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
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
