'use client';

import { motion } from 'framer-motion';
import TitleUnderline from '../ui/title-underline';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <TitleUnderline
            title="About Me"
            animated={false}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-black/80 max-w-2xl mx-auto mt-6 text-center glass-card rounded-2xl p-6"
          >
            Passionate developer with expertise in modern frontend technologies and user experience
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-black leading-relaxed">
                I'm a passionate Frontend Developer with over 3 years of experience 
                in building beautiful and interactive web applications. I love creating 
                amazing user experiences that solve real-world problems and make a positive impact.
              </p>
              
              <p className="text-black leading-relaxed">
                My journey in technology started with curiosity about how things work, and it has evolved 
                into a career focused on building robust, efficient, and user-friendly applications. 
                I enjoy working with modern technologies and staying up-to-date with the latest trends 
                in software development.
              </p>
              
              <p className="text-black leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous learning 
                and helping others grow in their technical journey.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats or Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-black text-black mb-2">3+</div>
              <div className="text-black/80 font-medium">Years Experience</div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-black text-black mb-2">50+</div>
              <div className="text-black/80 font-medium">Projects Completed</div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-black text-black mb-2">15+</div>
              <div className="text-black/80 font-medium">Technologies</div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-black text-black mb-2">100%</div>
              <div className="text-black/80 font-medium">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
