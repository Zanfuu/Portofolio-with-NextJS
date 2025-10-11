import { Certificate } from '../types';

export const certificates: Record<string, Certificate[]> = {
  All: [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Demonstrates ability to design and deploy scalable systems on AWS.',
      image: '/api/placeholder/300/200',
      category: 'Cloud',
      expiryDate: '2027',
      credentialId: 'AWS-SAA-2024-001',
      verificationUrl: 'https://aws.amazon.com/verification',
      skills: ['AWS', 'Cloud Architecture', 'Scalability', 'Security', 'Networking']
    },
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      description: 'Advanced React development skills and best practices.',
      image: '/api/placeholder/300/200',
      category: 'Web',
      expiryDate: 'No Expiry',
      credentialId: 'META-REACT-2023-002',
      verificationUrl: 'https://meta.com/verification',
      skills: ['React', 'JavaScript', 'Component Design', 'State Management', 'Hooks']
    },
    {
      id: 3,
      title: 'Linux System Administration',
      issuer: 'Red Hat',
      date: '2023',
      description: 'Comprehensive Linux system administration and troubleshooting.',
      image: '/api/placeholder/300/200',
      category: 'Linux',
      expiryDate: '2026',
      credentialId: 'RHCSA-2023-003',
      verificationUrl: 'https://redhat.com/verification',
      skills: ['Linux', 'System Administration', 'Shell Scripting', 'Troubleshooting', 'Security']
    },
    {
      id: 4,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2022',
      description: 'Master JavaScript fundamentals and problem-solving skills.',
      image: '/api/placeholder/300/200',
      category: 'Web',
      expiryDate: 'No Expiry',
      credentialId: 'FCC-JS-2022-004',
      verificationUrl: 'https://freecodecamp.org/verification',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving', 'ES6+']
    },
    {
      id: 5,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2023',
      description: 'Containerization and orchestration with Docker.',
      image: '/api/placeholder/300/200',
      category: 'DevOps',
      expiryDate: '2026',
      credentialId: 'DCA-2023-005',
      verificationUrl: 'https://docker.com/verification',
      skills: ['Docker', 'Containerization', 'Orchestration', 'DevOps', 'CI/CD']
    },
    {
      id: 6,
      title: 'TypeScript Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      description: 'TypeScript programming language fundamentals and advanced features.',
      image: '/api/placeholder/300/200',
      category: 'Web',
      expiryDate: 'No Expiry',
      credentialId: 'MS-TS-2023-006',
      verificationUrl: 'https://microsoft.com/verification',
      skills: ['TypeScript', 'Type Safety', 'Advanced Types', 'Generics', 'Decorators']
    },
    {
      id: 7,
      title: 'Next.js App Router Certification',
      issuer: 'Vercel',
      date: '2024',
      description: 'Advanced Next.js development with App Router and modern features.',
      image: '/api/placeholder/300/200',
      category: 'Web',
      expiryDate: 'No Expiry',
      credentialId: 'VERCEL-NEXT-2024-007',
      verificationUrl: 'https://vercel.com/verification',
      skills: ['Next.js', 'App Router', 'Server Components', 'SSR', 'Performance']
    },
    {
      id: 8,
      title: 'Tailwind CSS Mastery',
      issuer: 'Tailwind Labs',
      date: '2023',
      description: 'Advanced Tailwind CSS techniques and best practices.',
      image: '/api/placeholder/300/200',
      category: 'Web',
      expiryDate: 'No Expiry',
      credentialId: 'TAILWIND-2023-008',
      verificationUrl: 'https://tailwindcss.com/verification',
      skills: ['Tailwind CSS', 'Utility-First', 'Responsive Design', 'Custom Components', 'Performance']
    }
  ],
  Cloud: [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Demonstrates ability to design and deploy scalable systems on AWS.',
      image: '/api/placeholder/300/200',
      category: 'Cloud',
      expiryDate: '2027',
      credentialId: 'AWS-SAA-2024-001',
      verificationUrl: 'https://aws.amazon.com/verification',
      skills: ['AWS', 'Cloud Architecture', 'Scalability', 'Security', 'Networking']
    }
  ],
  Web: [
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      description: 'Advanced React development skills and best practices.',
      image: '/api/placeholder/300/200',
      category: 'Web',
      expiryDate: 'No Expiry',
      credentialId: 'META-REACT-2023-002',
      verificationUrl: 'https://meta.com/verification',
      skills: ['React', 'JavaScript', 'Component Design', 'State Management', 'Hooks']
    },
    {
      id: 4,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2022',
      description: 'Master JavaScript fundamentals and problem-solving skills.',
      image: '/api/placeholder/300/200',
      category: 'Web',
      expiryDate: 'No Expiry',
      credentialId: 'FCC-JS-2022-004',
      verificationUrl: 'https://freecodecamp.org/verification',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving', 'ES6+']
    },
    {
      id: 6,
      title: 'TypeScript Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      description: 'TypeScript programming language fundamentals and advanced features.',
      image: '/api/placeholder/300/200',
      category: 'Web',
      expiryDate: 'No Expiry',
      credentialId: 'MS-TS-2023-006',
      verificationUrl: 'https://microsoft.com/verification',
      skills: ['TypeScript', 'Type Safety', 'Advanced Types', 'Generics', 'Decorators']
    },
    {
      id: 7,
      title: 'Next.js App Router Certification',
      issuer: 'Vercel',
      date: '2024',
      description: 'Advanced Next.js development with App Router and modern features.',
      image: '/api/placeholder/300/200',
      category: 'Web',
      expiryDate: 'No Expiry',
      credentialId: 'VERCEL-NEXT-2024-007',
      verificationUrl: 'https://vercel.com/verification',
      skills: ['Next.js', 'App Router', 'Server Components', 'SSR', 'Performance']
    },
    {
      id: 8,
      title: 'Tailwind CSS Mastery',
      issuer: 'Tailwind Labs',
      date: '2023',
      description: 'Advanced Tailwind CSS techniques and best practices.',
      image: '/api/placeholder/300/200',
      category: 'Web',
      expiryDate: 'No Expiry',
      credentialId: 'TAILWIND-2023-008',
      verificationUrl: 'https://tailwindcss.com/verification',
      skills: ['Tailwind CSS', 'Utility-First', 'Responsive Design', 'Custom Components', 'Performance']
    }
  ],
  Linux: [
    {
      id: 3,
      title: 'Linux System Administration',
      issuer: 'Red Hat',
      date: '2023',
      description: 'Comprehensive Linux system administration and troubleshooting.',
      image: '/api/placeholder/300/200',
      category: 'Linux',
      expiryDate: '2026',
      credentialId: 'RHCSA-2023-003',
      verificationUrl: 'https://redhat.com/verification',
      skills: ['Linux', 'System Administration', 'Shell Scripting', 'Troubleshooting', 'Security']
    }
  ],
  DevOps: [
    {
      id: 5,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2023',
      description: 'Containerization and orchestration with Docker.',
      image: '/api/placeholder/300/200',
      category: 'DevOps',
      expiryDate: '2026',
      credentialId: 'DCA-2023-005',
      verificationUrl: 'https://docker.com/verification',
      skills: ['Docker', 'Containerization', 'Orchestration', 'DevOps', 'CI/CD']
    }
  ]
};
