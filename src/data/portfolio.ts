import { Project, Skill, Social, Experience } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Bookmaker Management System',
    description: 'A fullstack application that was made during my second year of lyceum that can handle multiple clients and items.',
    longDescription: 'A comprehensive e-commerce backend built with Node.js microservices, featuring user authentication, payment processing, inventory management, order processing, and real-time analytics. Deployed on Kubernetes with auto-scaling capabilities.',
    image: './images/bookmaker.png',
    technologies: ['SpringBoot', 'Java', 'Azure', 'MSQL', 'BashScripts'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://lombard-db.netlify.app/login',
    featured: true
  },
  {
    id: '2',
    title: 'E-commerce Application',
    description: 'This is a robust, scalable, and production-ready e-commerce application built using modern architecture. ',
    longDescription: 'A complete online store system where users can register, browse products, place orders, and receive notifications. Built with modern tools to ensure it\'s fast, secure, and ready to grow. Each part of the app (users, products, payments) works independently, making it reliable and easy to maintain.',
    image: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['SpringBoot', 'Apache Kafka', 'MSQL', 'React', 'GitHub Actions', 'Docker'],
    githubUrl: 'https://github.com/mariusss11/e-commerce-app',
    featured: true
  },
  {
    id: '3',
    title: 'Authentication Service',
    description: 'JWT authentication service with multi-tenant support',
    longDescription: 'A comprehensive authentication and authorization service supporting JWT.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Spring Boot', 'Junit & Mockito', 'SpringSecurity', 'MSQL'],
    githubUrl: 'https://github.com/mariusss11/SpringSecurity.git',
    featured: false
  },
  {
    id: '4',
    title: 'Simple Console Application',
    description: 'A simple console application that demonstrates basic programming concepts.',
    longDescription: 'This console application showcases fundamental programming techniques such as input/output operations, data structures, and algorithms. It serves as a learning tool for beginners.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
    technologies: ['C++', 'Github', 'Version Control'],
    githubUrl: 'https://github.com/mariusss11/Simple-Console-Bank-.git',
    featured: true
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', category: 'languages', level: 80 },
  { name: 'C++', category: 'languages', level: 70 },
  { name: 'JavaScript', category: 'languages', level: 70 },
  { name: 'Python', category: 'languages', level: 20 },
  { name: 'Node.js', category: 'languages', level: 20 },
  
  // Frameworks & Libraries
  { name: 'Spring Boot', category: 'frameworks', level: 90 },
  { name: 'Junit & Mockito', category: 'frameworks', level: 70 },
  { name: 'Express.js', category: 'frameworks', level: 20 },
  
  // Databases
  { name: 'PostgreSQL', category: 'databases', level: 90 },
  { name: 'MySQL', category: 'databases', level: 90 },
  { name: 'MSQL', category: 'databases', level: 90 },
  { name: 'MongoDB', category: 'databases', level: 80 },
  
  // Cloud & DevOps
  { name: 'Docker', category: 'cloud', level: 70 },  
  { name: 'Jenkins', category: 'cloud', level: 50 },  
  { name: 'AWS', category: 'cloud', level: 50 },


  // Tools & Technologies
  { name: 'SonarQube', category: 'tools', level: 80 },
  { name: 'Apache Kafka', category: 'tools', level: 70 },
  { name: 'MailPit', category: 'tools', level: 90 }
];

export const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com/mariusss11', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/marius-carchilan-066860273/', icon: 'linkedin' },
  { name: 'Telegram', url: 'https://t.me/mar_fnl', icon: 'telegram' },
  // { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Email', url: 'mailto:mariuscarchilan07@gmail.com', icon: 'mail' }
];

export const githubUrl = 'https://github.com/mariusss11';

export const experiences: Experience[] = [
  {
    title: 'Student at Programming and Software Engineering',
    company: 'CEITI',
    companyUrl: 'https://ceiti.md',
    period: '2023 - present',
    description: 'Gaining my first experience with multiple programming languages thanks to my teachers\' discussions and code reviews.'
  }
];