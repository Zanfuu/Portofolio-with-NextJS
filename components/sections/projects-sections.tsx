'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '../ui/projects-card';

export default function ProjectsSection() {
  const featuredProjects = [
    {
      id: 1,
      title: 'TransGo Dashboard',
      description: 'Comprehensive logistics management system with real-time tracking and analytics.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      category: 'TransGo',
      date: '2024',
      link: '/projects?tab=transgo'
    },
    {
      id: 2,
      title: 'N8N Automation Platform',
      description: 'Workflow automation platform for business processes with custom integrations.',
      image: '/api/placeholder/400/300',
      technologies: ['N8N', 'Docker', 'PostgreSQL', 'Redis'],
      category: 'N8N',
      date: '2024',
      link: '/projects?tab=n8n'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Setup',
      description: 'Scalable cloud infrastructure with CI/CD pipelines and monitoring.',
      image: '/api/placeholder/400/300',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      category: 'Cloud',
      date: '2024',
      link: '/projects?tab=cloud'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and projects across different domains
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
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
            href="/projects"
            className="inline-flex items-center bg-blue-600 dark:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
