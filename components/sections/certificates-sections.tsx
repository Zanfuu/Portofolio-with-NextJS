'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TitleUnderline from '../ui/title-underline';
import CTAButton from '../ui/cta-button';
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
          className="mb-16"
        >
          <TitleUnderline
            title="Certifications"
            animated={false}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-black/80 max-w-2xl mx-auto mt-6 text-center glass-card rounded-3xl p-6 border"
          >
            Professional certifications that validate my expertise in various technologies
          </motion.p>
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
              <div className="relative h-52 rounded-t-2xl overflow-hidden">
                <Image
                  src="/sample.png"
                  alt={certificate.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
          <CTAButton
            text="View All Certificates"
            href="/certificates"
            variant="primary"
            className="px-8 py-4"
          />
        </motion.div>
      </div>
    </section>
  );
}