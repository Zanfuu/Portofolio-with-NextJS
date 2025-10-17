'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  date: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
          className="glass-card rounded-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
        >
      {/* Project Image */}
      <div className="relative h-52 glass rounded-t-2xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl font-black text-gray-500">
            {project.category.charAt(0)}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="glass-button-dark text-white px-3 py-1.5 rounded-full text-xs font-semibold">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-black mb-2">
            {project.title}
          </h3>
          <span className="text-sm font-medium text-gray-500">
            {project.date}
          </span>
        </div>
        
        <p className="text-black/80 mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="glass text-black px-3 py-1.5 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <Link
          href={project.link}
          className="inline-flex items-center text-black hover:text-gray-600 font-semibold transition-all duration-300 hover:scale-105"
        >
          View Details
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
