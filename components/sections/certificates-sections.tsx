'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { certificates } from '../../data/certificates';

export default function CertificatesSection() {
  const featuredCertificates = certificates.All.slice(0, 3);

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
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
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-400 dark:text-gray-500 mb-2">
                      📜
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {certificate.category}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {certificate.category}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {certificate.title}
                </h3>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {certificate.issuer}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {certificate.date}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {certificate.description}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>Expires: {certificate.expiryDate}</span>
                  <span className="text-green-600 dark:text-green-400">✓ Verified</span>
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
            className="inline-flex items-center bg-blue-600 dark:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
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