'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ui/projects-card';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('transgo');

  const projects = {
    transgo: [
      {
        id: 1,
        title: 'TransGo Dashboard',
        description: 'Comprehensive logistics management system with real-time tracking, analytics, and automated workflows.',
        image: '/api/placeholder/400/300',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
        category: 'TransGo',
        date: '2024',
        link: '#'
      },
      {
        id: 2,
        title: 'Fleet Management System',
        description: 'Advanced fleet tracking and management solution with GPS integration and maintenance scheduling.',
        image: '/api/placeholder/400/300',
        technologies: ['Next.js', 'TypeScript', 'MongoDB', 'AWS'],
        category: 'TransGo',
        date: '2024',
        link: '#'
      },
      {
        id: 3,
        title: 'Route Optimization Engine',
        description: 'AI-powered route optimization system that reduces delivery time and fuel consumption.',
        image: '/api/placeholder/400/300',
        technologies: ['Python', 'Machine Learning', 'PostgreSQL', 'Docker'],
        category: 'TransGo',
        date: '2023',
        link: '#'
      }
    ],
    n8n: [
      {
        id: 4,
        title: 'N8N Automation Platform',
        description: 'Workflow automation platform for business processes with custom integrations and webhooks.',
        image: '/api/placeholder/400/300',
        technologies: ['N8N', 'Docker', 'PostgreSQL', 'Redis', 'Webhooks'],
        category: 'N8N',
        date: '2024',
        link: '#'
      },
      {
        id: 5,
        title: 'Data Pipeline Automation',
        description: 'Automated data processing pipeline that handles ETL operations and data synchronization.',
        image: '/api/placeholder/400/300',
        technologies: ['N8N', 'Python', 'PostgreSQL', 'AWS S3'],
        category: 'N8N',
        date: '2024',
        link: '#'
      },
      {
        id: 6,
        title: 'API Integration Hub',
        description: 'Centralized hub for managing API integrations across multiple third-party services.',
        image: '/api/placeholder/400/300',
        technologies: ['N8N', 'REST APIs', 'OAuth', 'Docker'],
        category: 'N8N',
        date: '2023',
        link: '#'
      }
    ],
    cloud: [
      {
        id: 7,
        title: 'Cloud Infrastructure Setup',
        description: 'Scalable cloud infrastructure with CI/CD pipelines, monitoring, and auto-scaling capabilities.',
        image: '/api/placeholder/400/300',
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
        category: 'Cloud',
        date: '2024',
        link: '#'
      },
      {
        id: 8,
        title: 'Microservices Architecture',
        description: 'Containerized microservices architecture with service mesh and distributed logging.',
        image: '/api/placeholder/400/300',
        technologies: ['Docker', 'Kubernetes', 'Istio', 'Prometheus', 'Grafana'],
        category: 'Cloud',
        date: '2024',
        link: '#'
      },
      {
        id: 9,
        title: 'DevOps Pipeline',
        description: 'Complete DevOps pipeline with automated testing, deployment, and rollback capabilities.',
        image: '/api/placeholder/400/300',
        technologies: ['GitLab CI', 'Docker', 'AWS', 'Terraform', 'Ansible'],
        category: 'Cloud',
        date: '2023',
        link: '#'
      }
    ],
    web: [
      {
        id: 10,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.',
        image: '/api/placeholder/400/300',
        technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
        category: 'Web',
        date: '2024',
        link: '#'
      },
      {
        id: 11,
        title: 'Portfolio Website',
        description: 'Modern portfolio website with dark mode, animations, and responsive design.',
        image: '/api/placeholder/400/300',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        category: 'Web',
        date: '2024',
        link: '#'
      },
      {
        id: 12,
        title: 'Task Management App',
        description: 'Collaborative task management application with real-time updates and team collaboration features.',
        image: '/api/placeholder/400/300',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
        category: 'Web',
        date: '2023',
        link: '#'
      }
    ]
  };

  const tabs = [
    { id: 'transgo', name: 'TransGo', count: projects.transgo.length },
    { id: 'n8n', name: 'N8N', count: projects.n8n.length },
    { id: 'cloud', name: 'Cloud', count: projects.cloud.length },
    { id: 'web', name: 'Web', count: projects.web.length }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive showcase of my work across different domains and technologies
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tab.name} ({tab.count})
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects[activeTab as keyof typeof projects].map((project, index) => (
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
      </div>
    </div>
  );
}
