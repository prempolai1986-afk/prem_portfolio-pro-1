import { 
  Palette, 
  Video, 
  Code2, 
  Layout, 
  PenTool, 
  MonitorSmartphone,
  Github,
  Linkedin,
  Mail,
  Instagram
} from 'lucide-react';
import { Service, Project, Experience, SkillItem, SocialLink, Companion } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', url: 'mailto:prempolai1986@gmail.com', icon: Mail, display: 'prempolai1986@gmail.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prem-polai-411849378', icon: Linkedin, display: 'in/prem-polai-411849378' },
  { name: 'GitHub', url: 'https://github.com/prempolai', icon: Github, display: 'prempolai' },
  { name: 'Instagram', url: 'https://instagram.com/2819.prem', icon: Instagram, display: '2819.prem' },
];

export const HERO_CONTENT = {
  name: "Prem Polai",
  title: "UI/UX Designer | Video Editor | Full-Stack Developer",
  tagline: "Engineering student passionate about design, development, and innovation.",
};

export const ABOUT_CONTENT = {
  bio: "I am an engineering student and a graphics designer with strong creative and technical skills. Currently pursuing my B.Tech at Nalanda Institute of Technology, Bhubaneswar. I bridge the gap between functional code and exceptional visual design.",
  location: "Bhubaneswar, India",
  education: "B.Tech, Nalanda Institute of Technology (2nd Year)",
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    role: 'Intern',
    company: 'Logisaar',
    period: '',
    description: 'Contributing to technical projects and gaining hands-on industry experience.',
    type: 'work'
  },
  {
    id: '2',
    role: 'Core Member',
    company: 'Techxera Club',
    period: '',
    description: 'Organizing technical events, workshops, and leading design initiatives within the institution.',
    type: 'work'
  },
  {
    id: '3',
    role: 'B.Tech Student',
    company: 'Nalanda Institute of Technology',
    period: '',
    description: 'Focusing on Computer Science fundamentals, software engineering, and system design.',
    type: 'education'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'Graphics Design', level: 90, category: 'Design' },
  { name: 'Video Editing', level: 85, category: 'Design' },
  { name: 'UI/UX Design', level: 80, category: 'Design' },
  { name: 'React/Next.js', level: 75, category: 'Development' },
  { name: 'TypeScript', level: 70, category: 'Development' },
  { name: 'Tailwind CSS', level: 85, category: 'Development' },
  { name: 'Branding', level: 80, category: 'Design' },
  { name: 'Node.js', level: 65, category: 'Development' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Modern, user-centered interface designs that ensure a seamless user experience.',
    icon: Layout
  },
  {
    id: 'web',
    title: 'Web Design',
    description: 'Clean, responsive, and functional website layouts optimized for all devices.',
    icon: Code2
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Logo design, visual identity, and brand styles to make your business stand out.',
    icon: Palette
  },
  {
    id: 'editing',
    title: 'Editing',
    description: 'Professional video and graphic editing services for content creators and businesses.',
    icon: Video
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'kismat',
    title: 'Kismat.AI',
    category: 'Full Stack & AI',
    description: 'A cutting-edge project demonstrating the integration of artificial intelligence with intuitive user interface design. This platform leverages advanced algorithms to provide predictive insights.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Python', 'AI/ML', 'Tailwind']
  },
  {
    id: 'portfolio-v1',
    title: 'Creative Portfolio',
    category: 'Web Design',
    description: 'A responsive portfolio template designed for creatives to showcase their work effectively.',
    imageUrl: 'https://i.postimg.cc/g03FskNF/Screenshot-2025-12-05-235809.png',
    tags: ['Figma', 'Webflow', 'CSS']
  }
];

export const COMPANIONS_DATA: Companion[] = [
  {
    id: '1',
    name: 'Raghab Barik',
    role: 'Full Stack Developer',
    imageUrl: 'https://i.postimg.cc/G21WBwFJ/Whats-App-Image-2025-12-06-at-00-14-48.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/raghab-barik-b44692337/',
    portfolioUrl: 'https://raghab-portfolio2.vercel.app/'
  }
];

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_orqi6q6',
  TEMPLATE_ID: 'template_dl1tl8o',
  PUBLIC_KEY: 'JRzRDtgU-EzmnsPDA',
};