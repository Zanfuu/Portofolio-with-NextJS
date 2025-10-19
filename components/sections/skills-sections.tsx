'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import TitleUnderline from '../ui/title-underline';

export default function SkillsSection() {
  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Testing', 'Tools'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <TitleUnderline
            title="Skills & Technologies"
            animated={false}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-black/80 max-w-2xl mx-auto mt-6 text-center glass-card rounded-2xl p-6"
          >
            Technologies and tools I work with to build amazing applications
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category ? 'chip-active' : 'chip'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-black">
                  {skill.name}
                </h3>
                <span className="text-sm font-semibold text-black/80">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="progress-fill h-3 rounded-full shadow-modern"
                />
              </div>
              
              <span className="text-sm font-medium text-black/70">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
