'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { certificates } from '../../data/certificates';

export default function CertificatesPageContent() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Cloud', 'Web', 'Linux', 'DevOps'];
  const currentCertificates = certificates[activeTab as keyof typeof certificates] || [];

  return (
    <>
      {/* Header */}
      <div className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black text-black mb-6">
              My Certifications
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Professional certifications that validate my expertise in various technologies and methodologies
            </p>
            <Link
              href="/"
              className="inline-flex items-center glass-button text-black hover:scale-105 font-semibold transition-all duration-300 px-6 py-3 rounded-full"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'glass-button-dark text-white'
                  : 'glass-button text-black hover:scale-105'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

                <div className="space-y-2 text-xs font-medium text-gray-500">
                  <div className="flex justify-between">
                    <span>Credential ID:</span>
                    <span className="font-mono">{certificate.credentialId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expires:</span>
                    <span className={certificate.expiryDate === 'No Expiry' ? 'text-black font-semibold' : ''}>
                      {certificate.expiryDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span>Status:</span>
                    <span className="text-black font-semibold flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {currentCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📜</div>
            <h3 className="text-xl font-bold text-black mb-2">
              No certificates found
            </h3>
            <p className="text-black/80">
              No certificates available for the selected category.
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
}
