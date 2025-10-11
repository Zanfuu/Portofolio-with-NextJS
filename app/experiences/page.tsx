'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { experiences } from '../../data/experiences';

export default function ExperiencesPage() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'TransGo', 'Web'];
  const currentExperiences = experiences[activeTab as keyof typeof experiences] || [];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Work Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              My professional journey and key achievements in frontend development
            </p>
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          {currentExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {experience.company.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">
                        {experience.duration}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {experience.type}
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      {experience.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="list-disc list-inside space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-600 dark:text-gray-300">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {currentExperiences.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No experience found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              No experience available for the selected category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}