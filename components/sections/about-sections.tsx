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
            className="text-lg text-black/80 w-full mt-6 text-center glass-card rounded-3xl p-8 border"
          >
            Seorang DevOps Engineer yang bersemangat untuk menyederhanakan dan mengotomatisasi kompleksitas, dari source code hingga production. Fokus utama saya adalah membangun alur kerja CI/CD yang tangguh dan mengelola infrastruktur yang scalable.
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
              <h3 className="text-2xl font-bold text-black mb-4">Perjalanan Karier Saya</h3>
              
              <p className="text-black leading-relaxed mb-4">
                Perjalanan saya dimulai dari frontend development dengan Next.js, React, dan TypeScript selama PKL, yang kemudian memicu minat saya pada keseluruhan siklus rilis dan operasional sistem.
              </p>
              
              <p className="text-black leading-relaxed mb-4">
                Saat ini, saya berdedikasi untuk menguasai ekosistem DevOps, bertekad untuk menguasai tools penting seperti Jenkins, Nginx Proxy Manager, dan seluruh alur kerja CI/CD untuk memastikan deployment yang mulus.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4 mt-8">Keterampilan Teknis</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4 rounded-2xl">
                  <h4 className="font-semibold text-black mb-3">DevOps & Infrastructure</h4>
                  <ul className="text-sm text-black/80 space-y-1">
                    <li>• Jenkins CI/CD</li>
                    <li>• Docker & Containerization</li>
                    <li>• Linux & VPS Management</li>
                    <li>• Nginx & Cloudflare</li>
                  </ul>
                </div>
                <div className="glass-card p-4 rounded-2xl">
                  <h4 className="font-semibold text-black mb-3">Fullstack Development</h4>
                  <ul className="text-sm text-black/80 space-y-1">
                    <li>• Next.js & React</li>
                    <li>• TypeScript & JavaScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Git & Version Control</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats & Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-black text-black mb-2">1+</div>
                <div className="text-black/80 font-medium text-sm">Year Learning</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-black text-black mb-2">20+</div>
                <div className="text-black/80 font-medium text-sm">Projects Completed</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-black text-black mb-2">15+</div>
                <div className="text-black/80 font-medium text-sm">Technologies</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-black text-black mb-2">24/7</div>
                <div className="text-black/80 font-medium text-sm">System Uptime</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="glass-card p-6 rounded-2xl text-center">
              <h3 className="text-lg font-bold text-black mb-3">Mari Berkolaborasi!</h3>
              <p className="text-black/80 text-sm mb-4">
                Tertarik untuk berkolaborasi dalam proyek deployment atau development berikutnya? Jangan ragu untuk melihat proyek-proyek terbaru saya di bawah ini atau terhubung dengan saya!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:fnaufalazmi09@gmail.com" className="btn-primary px-4 py-2 rounded-full text-sm font-semibold text-center">
                  Email Me
                </a>
                <a href="https://linkedin.com/in/zanfuu" className="btn-secondary px-4 py-2 rounded-full text-sm font-semibold text-center">
                  LinkedIn
                </a>
                <a href="https://github.com/zanfuu" className="btn-secondary px-4 py-2 rounded-full text-sm font-semibold text-center">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
