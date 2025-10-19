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
      <div className="relative h-52 rounded-t-2xl" style={{
        background: 'linear-gradient(180deg, rgba(167,139,250,0.15), rgba(255,255,255,0.6))'
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl font-black text-gray-500">
            {project.category.charAt(0)}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="chip-active text-xs" style={{paddingTop: '0.375rem', paddingBottom: '0.375rem'}}>
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
              className="chip text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <Link
          href={project.link}
          className="inline-flex items-center btn-secondary px-5 py-2 rounded-full font-semibold"
        >
          View Details
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
