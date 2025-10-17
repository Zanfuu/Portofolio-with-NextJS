'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/projects-card';
import { projects } from '../../data/projects';
import Link from 'next/link';

export default function ProjectsPageContent() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'TransGo', 'N8N', 'Cloud', 'Web'];
  const currentProjects = projects[activeTab as keyof typeof projects] || [];

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
              My Projects
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              A showcase of my recent work and projects across different domains
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

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {currentProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-black mb-2">
              No projects found
            </h3>
            <p className="text-black/80">
              No projects available for the selected category.
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
}
