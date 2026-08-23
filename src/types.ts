export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  category: 'Full-Stack' | 'Web App' | 'System Architecture' | 'Mobile & AI' | 'UI/UX & Web';
  technologies: string[];
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  myContribution: string[];
  systemHighlights?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export type ExperienceCategory = 'Freelance Projects' | 'Academic Projects' | 'Personal Projects' | 'Leadership / Organizations';

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  category: ExperienceCategory;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Proficient' | 'Exploring';
    description: string;
    icon?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
  credentialId?: string;
  skillsCovered: string[];
  category: 'AI & Machine Learning' | 'Software Engineering' | 'Cloud & Systems';
  verifyUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  level: string;
  yearPeriod: string;
  location: string;
  description: string;
  coreCourses: string[];
  academicProjects: string[];
  highlights: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}
