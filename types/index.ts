// Project Types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  date: string;
  link: string;
  longDescription?: string;
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Certificate Types
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  category: string;
  expiryDate: string;
  credentialId: string;
  verificationUrl?: string;
  skills?: string[];
}

// Experience Types
export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  category: string;
  achievements: string[];
  location: string;
  type: string;
  responsibilities?: string[];
  teamSize?: number;
}

// Skills Types
export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
  description?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation Types
export interface NavigationItem {
  name: string;
  href: string;
}
