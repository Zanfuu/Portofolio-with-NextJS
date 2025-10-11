import { Experience } from '../types';

export const experiences: Record<string, Experience[]> = {
  All: [
    {
      id: 1,
      company: 'TransGo',
      position: 'Frontend Developer',
      duration: '2023 - Present',
      description: 'Leading frontend development of logistics management systems and user interfaces. Working with modern React ecosystem and implementing responsive designs.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'Jest', 'Storybook'],
      category: 'TransGo',
      achievements: [
        'Built responsive dashboard with real-time updates',
        'Implemented modern UI/UX design patterns',
        'Improved user experience and performance by 60%',
        'Led frontend architecture decisions',
        'Mentored junior developers',
        'Reduced bundle size by 40% through code optimization'
      ],
      location: 'Jakarta, Indonesia',
      type: 'Full-time',
      responsibilities: [
        'Develop and maintain React-based web applications',
        'Collaborate with UX/UI designers to implement designs',
        'Optimize application performance and user experience',
        'Code review and mentoring team members',
        'Implement testing strategies and best practices'
      ],
      teamSize: 8
    },
    {
      id: 2,
      company: 'Freelance',
      position: 'Frontend Developer',
      duration: '2022 - 2023',
      description: 'Helped startups and small businesses with modern web applications and user interfaces. Delivered high-quality solutions on time and within budget.',
      technologies: ['React', 'Vue.js', 'JavaScript', 'CSS', 'Node.js', 'MongoDB', 'Firebase'],
      category: 'Web',
      achievements: [
        'Created responsive and accessible web applications',
        'Implemented modern design systems',
        'Improved user engagement by 40%',
        'Delivered 15+ successful projects',
        'Maintained 100% client satisfaction',
        'Built reusable component libraries'
      ],
      location: 'Remote',
      type: 'Freelance',
      responsibilities: [
        'Client consultation and requirement gathering',
        'Frontend development and implementation',
        'Project management and delivery',
        'Client communication and support',
        'Technical documentation and training'
      ],
      teamSize: 1
    },
    {
      id: 3,
      company: 'TechCorp Solutions',
      position: 'Frontend Developer',
      duration: '2021 - 2022',
      description: 'Developed user interfaces and interactive web applications for various client projects. Focused on creating seamless user experiences.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP', 'MySQL'],
      category: 'Web',
      achievements: [
        'Built responsive and interactive websites',
        'Implemented modern CSS techniques',
        'Optimized website performance and loading times',
        'Collaborated with design and backend teams',
        'Maintained and updated legacy codebases',
        'Improved website accessibility scores'
      ],
      location: 'Bandung, Indonesia',
      type: 'Full-time',
      responsibilities: [
        'Develop responsive web applications',
        'Collaborate with backend developers',
        'Implement UI/UX designs',
        'Maintain and update existing websites',
        'Cross-browser compatibility testing'
      ],
      teamSize: 5
    },
    {
      id: 4,
      company: 'Digital Agency Pro',
      position: 'Junior Frontend Developer',
      duration: '2020 - 2021',
      description: 'Started my professional journey in web development. Learned modern frontend technologies and best practices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'WordPress', 'jQuery'],
      category: 'Web',
      achievements: [
        'Learned modern web development practices',
        'Built first professional websites',
        'Gained experience with client communication',
        'Improved coding skills and problem-solving',
        'Contributed to team projects',
        'Completed 20+ small to medium projects'
      ],
      location: 'Surabaya, Indonesia',
      type: 'Full-time',
      responsibilities: [
        'Learn and apply web development fundamentals',
        'Assist senior developers with projects',
        'Build simple to medium complexity websites',
        'Participate in code reviews',
        'Client support and maintenance'
      ],
      teamSize: 12
    }
  ],
  TransGo: [
    {
      id: 1,
      company: 'TransGo',
      position: 'Frontend Developer',
      duration: '2023 - Present',
      description: 'Leading frontend development of logistics management systems and user interfaces. Working with modern React ecosystem and implementing responsive designs.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'Jest', 'Storybook'],
      category: 'TransGo',
      achievements: [
        'Built responsive dashboard with real-time updates',
        'Implemented modern UI/UX design patterns',
        'Improved user experience and performance by 60%',
        'Led frontend architecture decisions',
        'Mentored junior developers',
        'Reduced bundle size by 40% through code optimization'
      ],
      location: 'Jakarta, Indonesia',
      type: 'Full-time',
      responsibilities: [
        'Develop and maintain React-based web applications',
        'Collaborate with UX/UI designers to implement designs',
        'Optimize application performance and user experience',
        'Code review and mentoring team members',
        'Implement testing strategies and best practices'
      ],
      teamSize: 8
    }
  ],
  Web: [
    {
      id: 2,
      company: 'Freelance',
      position: 'Frontend Developer',
      duration: '2022 - 2023',
      description: 'Helped startups and small businesses with modern web applications and user interfaces. Delivered high-quality solutions on time and within budget.',
      technologies: ['React', 'Vue.js', 'JavaScript', 'CSS', 'Node.js', 'MongoDB', 'Firebase'],
      category: 'Web',
      achievements: [
        'Created responsive and accessible web applications',
        'Implemented modern design systems',
        'Improved user engagement by 40%',
        'Delivered 15+ successful projects',
        'Maintained 100% client satisfaction',
        'Built reusable component libraries'
      ],
      location: 'Remote',
      type: 'Freelance',
      responsibilities: [
        'Client consultation and requirement gathering',
        'Frontend development and implementation',
        'Project management and delivery',
        'Client communication and support',
        'Technical documentation and training'
      ],
      teamSize: 1
    },
    {
      id: 3,
      company: 'TechCorp Solutions',
      position: 'Frontend Developer',
      duration: '2021 - 2022',
      description: 'Developed user interfaces and interactive web applications for various client projects. Focused on creating seamless user experiences.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP', 'MySQL'],
      category: 'Web',
      achievements: [
        'Built responsive and interactive websites',
        'Implemented modern CSS techniques',
        'Optimized website performance and loading times',
        'Collaborated with design and backend teams',
        'Maintained and updated legacy codebases',
        'Improved website accessibility scores'
      ],
      location: 'Bandung, Indonesia',
      type: 'Full-time',
      responsibilities: [
        'Develop responsive web applications',
        'Collaborate with backend developers',
        'Implement UI/UX designs',
        'Maintain and update existing websites',
        'Cross-browser compatibility testing'
      ],
      teamSize: 5
    },
    {
      id: 4,
      company: 'Digital Agency Pro',
      position: 'Junior Frontend Developer',
      duration: '2020 - 2021',
      description: 'Started my professional journey in web development. Learned modern frontend technologies and best practices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'WordPress', 'jQuery'],
      category: 'Web',
      achievements: [
        'Learned modern web development practices',
        'Built first professional websites',
        'Gained experience with client communication',
        'Improved coding skills and problem-solving',
        'Contributed to team projects',
        'Completed 20+ small to medium projects'
      ],
      location: 'Surabaya, Indonesia',
      type: 'Full-time',
      responsibilities: [
        'Learn and apply web development fundamentals',
        'Assist senior developers with projects',
        'Build simple to medium complexity websites',
        'Participate in code reviews',
        'Client support and maintenance'
      ],
      teamSize: 12
    }
  ]
};
