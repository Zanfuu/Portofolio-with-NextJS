'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { experiences } from '../../data/experiences';

export default function ExperiencesPageContent() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'TransGo', 'Web'];
  const currentExperiences = experiences[activeTab as keyof typeof experiences] || [];

  return (
    <>
      {/* Header */}
      <div className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black text-black mb-6">
              Work Experience
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              My professional journey and key achievements in frontend development
            </p>
            <Link
              href="/"
              className="inline-flex items-center glass-button text-black hover:scale-105 font-semibold transition-all duration-300 px-6 py-3 rounded-full"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'glass-button-dark text-white'
                  : 'glass-button text-black hover:scale-105'
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
              className="glass-card rounded-2xl transition-all duration-300 p-8 hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center">
                    <div className="text-3xl font-black text-black">
                      {experience.company.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-xl font-semibold text-black mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-500 block">
                        {experience.duration}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="glass-button-dark text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {experience.type}
                    </span>
                    <span className="glass text-black px-3 py-1 rounded-full text-sm font-medium">
                      {experience.category}
                    </span>
                  </div>

                  <p className="text-black/80 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-black mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="list-disc list-inside space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-black/80">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-lg font-semibold text-black mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="glass text-black px-3 py-1 rounded-full text-sm font-medium"
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
            <h3 className="text-xl font-bold text-black mb-2">
              No experience found
            </h3>
            <p className="text-black/80">
              No experience available for the selected category.
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
}
