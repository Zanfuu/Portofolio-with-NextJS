'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ExperienceCard from '../ui/experience-card';

export default function ExperienceSection() {
  const featuredExperiences = [
    {
      id: 1,
      company: 'TransGo',
      position: 'Frontend Developer',
      duration: '2023 - Present',
      description: 'Leading frontend development of logistics management systems and user interfaces.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      category: 'TransGo',
      achievements: [
        'Built responsive dashboard with real-time updates',
        'Implemented modern UI/UX design patterns',
        'Improved user experience and performance by 60%'
      ]
    },
    {
      id: 2,
      company: 'Freelance',
      position: 'Frontend Developer',
      duration: '2022 - 2023',
      description: 'Helped startups and small businesses with modern web applications and user interfaces.',
      technologies: ['React', 'Vue.js', 'JavaScript', 'CSS'],
      category: 'Web',
      achievements: [
        'Created responsive and accessible web applications',
        'Implemented modern design systems',
        'Improved user engagement by 40%'
      ]
    },
    {
      id: 3,
      company: 'Previous Role',
      position: 'Frontend Developer',
      duration: '2021 - 2022',
      description: 'Developed user interfaces and interactive web applications for various client projects.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      category: 'Web',
      achievements: [
        'Built responsive and interactive websites',
        'Implemented modern CSS techniques',
        'Optimized website performance and loading times'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            My professional journey and key achievements in software development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 mb-12"
        >
          {featuredExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/experiences"
            className="inline-flex items-center bg-blue-600 dark:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            View Full Experience
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
