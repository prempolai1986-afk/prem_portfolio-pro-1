import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'education' | 'work';
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: 'Design' | 'Development' | 'Tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  display?: string;
}

export interface Companion {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
}