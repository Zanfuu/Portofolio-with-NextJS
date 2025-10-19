'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { certificates } from '../../data/certificates';

export default function CertificatesSection() {
  const featuredCertificates = certificates.All.slice(0, 3);

  return (
    <section id="certificates" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">Certifications</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8 leading-relaxed glass-card rounded-3xl p-6 border">
            Professional certifications that validate my expertise in various technologies
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Certificate Image */}
              <div className="relative h-52 glass rounded-t-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-black text-gray-500 mb-2">
                      📜
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {certificate.category}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="glass-button-dark text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    {certificate.category}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-black mb-2">
                  {certificate.title}
                </h3>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">
                    {certificate.issuer}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {certificate.date}
                  </span>
                </div>

                <p className="text-black/80 mb-4 text-sm leading-relaxed">
                  {certificate.description}
                </p>

                <div className="flex justify-between items-center text-xs font-medium text-gray-500">
                  <span>Expires: {certificate.expiryDate}</span>
                  <span className="text-black font-semibold">✓ Verified</span>
                </div>
              </div>
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
            href="/certificates"
            className="inline-flex items-center glass-button-dark text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            View All Certificates
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}