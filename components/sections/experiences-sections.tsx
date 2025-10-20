'use client';

import { motion } from 'framer-motion';
import ExperienceCard from '../ui/experience-card';
import TitleUnderline from '../ui/title-underline';
import CTAButton from '../ui/cta-button';
import { experiences } from '../../data/experiences';

export default function ExperienceSection() {
  const featuredExperiences = experiences.All.slice(0, 2);

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <TitleUnderline
            title="Work Experience"
            animated={false}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-black/80 max-w-2xl mx-auto mt-6 text-center glass-card rounded-3xl p-6 border"
          >
            My professional journey and key achievements in software development
          </motion.p>
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
          <CTAButton
            text="View Full Experience"
            href="/experiences"
            variant="primary"
            className="px-8 py-4"
          />
        </motion.div>
      </div>
    </section>
  );
}