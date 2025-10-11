import { Project } from '../types';

export const projects: Record<string, Project[]> = {
  All: [
    {
      id: 1,
      title: 'TransGo Dashboard',
      description: 'Comprehensive logistics management system with real-time tracking and analytics.',
      longDescription: 'A full-featured logistics management platform built with modern web technologies. Features include real-time shipment tracking, route optimization, driver management, and comprehensive analytics dashboard.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
      category: 'TransGo',
      date: '2024',
      link: '/projects?tab=transgo',
      features: [
        'Real-time shipment tracking',
        'Route optimization algorithms',
        'Driver management system',
        'Analytics dashboard',
        'Mobile-responsive design',
        'API integration'
      ],
      githubUrl: 'https://github.com/zanfuu/transgo-dashboard',
      liveUrl: 'https://transgo-demo.com'
    },
    {
      id: 2,
      title: 'N8N Automation Platform',
      description: 'Workflow automation platform for business processes with custom integrations.',
      longDescription: 'Built a comprehensive workflow automation platform using N8N with custom nodes and integrations. Enables businesses to automate complex processes and integrate various third-party services.',
      image: '/api/placeholder/400/300',
      technologies: ['N8N', 'Docker', 'PostgreSQL', 'Redis', 'Node.js', 'Webhooks'],
      category: 'N8N',
      date: '2024',
      link: '/projects?tab=n8n',
      features: [
        'Custom N8N nodes development',
        'Workflow automation',
        'Third-party integrations',
        'Real-time monitoring',
        'Error handling and logging',
        'Scalable architecture'
      ],
      githubUrl: 'https://github.com/zanfuu/n8n-automation',
      liveUrl: 'https://n8n-automation-demo.com'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Setup',
      description: 'Scalable cloud infrastructure with CI/CD pipelines and monitoring.',
      longDescription: 'Designed and implemented a complete cloud infrastructure solution with automated CI/CD pipelines, monitoring, and scaling capabilities. Includes container orchestration and security best practices.',
      image: '/api/placeholder/400/300',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
      category: 'Cloud',
      date: '2024',
      link: '/projects?tab=cloud',
      features: [
        'Infrastructure as Code (Terraform)',
        'Container orchestration',
        'CI/CD pipeline automation',
        'Monitoring and alerting',
        'Auto-scaling capabilities',
        'Security best practices'
      ],
      githubUrl: 'https://github.com/zanfuu/cloud-infrastructure',
      liveUrl: 'https://cloud-infra-demo.com'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce platform with advanced features and mobile optimization.',
      longDescription: 'Developed a full-featured e-commerce platform with modern UI/UX, payment integration, inventory management, and admin dashboard. Built with performance and scalability in mind.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      category: 'Web',
      date: '2023',
      link: '/projects?tab=web',
      features: [
        'Modern responsive design',
        'Payment gateway integration',
        'Inventory management',
        'Admin dashboard',
        'Search and filtering',
        'Order tracking system'
      ],
      githubUrl: 'https://github.com/zanfuu/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates.',
      longDescription: 'Built a collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities. Features drag-and-drop interface and advanced filtering.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Material-UI', 'Redux'],
      category: 'Web',
      date: '2023',
      link: '/projects?tab=web',
      features: [
        'Real-time collaboration',
        'Drag-and-drop interface',
        'Team management',
        'Project tracking',
        'Advanced filtering',
        'Mobile app support'
      ],
      githubUrl: 'https://github.com/zanfuu/task-management',
      liveUrl: 'https://taskapp-demo.com'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website with modern design and animations.',
      longDescription: 'Created a modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark mode, and optimized performance with Next.js and Framer Motion.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web',
      date: '2024',
      link: '/projects?tab=web',
      features: [
        'Responsive design',
        'Dark mode support',
        'Smooth animations',
        'Contact form',
        'SEO optimized',
        'Performance optimized'
      ],
      githubUrl: 'https://github.com/zanfuu/portfolio',
      liveUrl: 'https://zanfuu.dev'
    }
  ],
  TransGo: [
    {
      id: 1,
      title: 'TransGo Dashboard',
      description: 'Comprehensive logistics management system with real-time tracking and analytics.',
      longDescription: 'A full-featured logistics management platform built with modern web technologies. Features include real-time shipment tracking, route optimization, driver management, and comprehensive analytics dashboard.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
      category: 'TransGo',
      date: '2024',
      link: '/projects?tab=transgo',
      features: [
        'Real-time shipment tracking',
        'Route optimization algorithms',
        'Driver management system',
        'Analytics dashboard',
        'Mobile-responsive design',
        'API integration'
      ],
      githubUrl: 'https://github.com/zanfuu/transgo-dashboard',
      liveUrl: 'https://transgo-demo.com'
    }
  ],
  N8N: [
    {
      id: 2,
      title: 'N8N Automation Platform',
      description: 'Workflow automation platform for business processes with custom integrations.',
      longDescription: 'Built a comprehensive workflow automation platform using N8N with custom nodes and integrations. Enables businesses to automate complex processes and integrate various third-party services.',
      image: '/api/placeholder/400/300',
      technologies: ['N8N', 'Docker', 'PostgreSQL', 'Redis', 'Node.js', 'Webhooks'],
      category: 'N8N',
      date: '2024',
      link: '/projects?tab=n8n',
      features: [
        'Custom N8N nodes development',
        'Workflow automation',
        'Third-party integrations',
        'Real-time monitoring',
        'Error handling and logging',
        'Scalable architecture'
      ],
      githubUrl: 'https://github.com/zanfuu/n8n-automation',
      liveUrl: 'https://n8n-automation-demo.com'
    }
  ],
  Cloud: [
    {
      id: 3,
      title: 'Cloud Infrastructure Setup',
      description: 'Scalable cloud infrastructure with CI/CD pipelines and monitoring.',
      longDescription: 'Designed and implemented a complete cloud infrastructure solution with automated CI/CD pipelines, monitoring, and scaling capabilities. Includes container orchestration and security best practices.',
      image: '/api/placeholder/400/300',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
      category: 'Cloud',
      date: '2024',
      link: '/projects?tab=cloud',
      features: [
        'Infrastructure as Code (Terraform)',
        'Container orchestration',
        'CI/CD pipeline automation',
        'Monitoring and alerting',
        'Auto-scaling capabilities',
        'Security best practices'
      ],
      githubUrl: 'https://github.com/zanfuu/cloud-infrastructure',
      liveUrl: 'https://cloud-infra-demo.com'
    }
  ],
  Web: [
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce platform with advanced features and mobile optimization.',
      longDescription: 'Developed a full-featured e-commerce platform with modern UI/UX, payment integration, inventory management, and admin dashboard. Built with performance and scalability in mind.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      category: 'Web',
      date: '2023',
      link: '/projects?tab=web',
      features: [
        'Modern responsive design',
        'Payment gateway integration',
        'Inventory management',
        'Admin dashboard',
        'Search and filtering',
        'Order tracking system'
      ],
      githubUrl: 'https://github.com/zanfuu/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates.',
      longDescription: 'Built a collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities. Features drag-and-drop interface and advanced filtering.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Material-UI', 'Redux'],
      category: 'Web',
      date: '2023',
      link: '/projects?tab=web',
      features: [
        'Real-time collaboration',
        'Drag-and-drop interface',
        'Team management',
        'Project tracking',
        'Advanced filtering',
        'Mobile app support'
      ],
      githubUrl: 'https://github.com/zanfuu/task-management',
      liveUrl: 'https://taskapp-demo.com'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website with modern design and animations.',
      longDescription: 'Created a modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark mode, and optimized performance with Next.js and Framer Motion.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web',
      date: '2024',
      link: '/projects?tab=web',
      features: [
        'Responsive design',
        'Dark mode support',
        'Smooth animations',
        'Contact form',
        'SEO optimized',
        'Performance optimized'
      ],
      githubUrl: 'https://github.com/zanfuu/portfolio',
      liveUrl: 'https://zanfuu.dev'
    }
  ]
};
