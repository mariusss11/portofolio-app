import { Project, Skill, Social, Experience } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Microservices E-Commerce API',
    description: 'Scalable microservices architecture handling 10M+ daily transactions',
    longDescription: 'A comprehensive e-commerce backend built with Node.js microservices, featuring user authentication, payment processing, inventory management, order processing, and real-time analytics. Deployed on Kubernetes with auto-scaling capabilities.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'RabbitMQ'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://api.example.com/docs',
    featured: true
  },
  {
    id: '2',
    title: 'Real-time Analytics Platform',
    description: 'High-throughput data processing system with real-time dashboards',
    longDescription: 'A distributed system processing millions of events per second using Apache Kafka, with real-time analytics and machine learning pipelines. Built with Python and deployed on AWS with auto-scaling infrastructure.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Apache Kafka', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://analytics.example.com',
    featured: true
  },
  {
    id: '3',
    title: 'GraphQL API Gateway',
    description: 'Unified API gateway serving multiple microservices',
    longDescription: 'A GraphQL API gateway that aggregates data from multiple microservices, providing a unified interface for frontend applications. Features include authentication, rate limiting, caching, and comprehensive monitoring.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Node.js', 'GraphQL', 'Apollo Server', 'MongoDB', 'Redis', 'Docker'],
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: '4',
    title: 'Distributed File Storage System',
    description: 'Scalable file storage with CDN integration and encryption',
    longDescription: 'A distributed file storage system built with Go, featuring automatic replication, encryption at rest, CDN integration, and a RESTful API. Handles petabytes of data with 99.99% uptime.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Go', 'PostgreSQL', 'MinIO', 'Docker', 'Kubernetes', 'AWS S3'],
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: '5',
    title: 'Message Queue System',
    description: 'High-performance message broker with guaranteed delivery',
    longDescription: 'A custom message queue system built with Rust, providing guaranteed message delivery, horizontal scaling, and sub-millisecond latency. Used in production to handle billions of messages daily.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Rust', 'PostgreSQL', 'Redis', 'Docker', 'Prometheus'],
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '6',
    title: 'Authentication Service',
    description: 'OAuth2/JWT authentication service with multi-tenant support',
    longDescription: 'A comprehensive authentication and authorization service supporting OAuth2, JWT, multi-tenant architecture, and integration with popular identity providers. Serves millions of authentication requests daily.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'OAuth2'],
    githubUrl: 'https://github.com',
    featured: false
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'languages', level: 95 },
  { name: 'Node.js', category: 'languages', level: 92 },
  { name: 'Go', category: 'languages', level: 88 },
  { name: 'Java', category: 'languages', level: 85 },
  { name: 'Rust', category: 'languages', level: 78 },
  
  // Frameworks & Libraries
  { name: 'Express.js', category: 'frameworks', level: 90 },
  { name: 'FastAPI', category: 'frameworks', level: 88 },
  { name: 'Spring Boot', category: 'frameworks', level: 82 },
  { name: 'Django', category: 'frameworks', level: 85 },
  
  // Databases
  { name: 'PostgreSQL', category: 'databases', level: 92 },
  { name: 'MongoDB', category: 'databases', level: 88 },
  { name: 'Redis', category: 'databases', level: 90 },
  { name: 'Elasticsearch', category: 'databases', level: 80 },
  
  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', level: 90 },
  { name: 'Docker', category: 'cloud', level: 95 },
  { name: 'Kubernetes', category: 'cloud', level: 85 },
  { name: 'Terraform', category: 'cloud', level: 80 },
  
  // Tools & Technologies
  { name: 'Apache Kafka', category: 'tools', level: 88 },
  { name: 'RabbitMQ', category: 'tools', level: 85 },
  { name: 'GraphQL', category: 'tools', level: 82 },
  { name: 'gRPC', category: 'tools', level: 78 }
];

export const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: 'Mail' }
];

export const experiences: Experience[] = [
  {
    title: 'Senior Backend Engineer',
    company: 'TechScale Solutions',
    period: '2022 - Present',
    description: 'Leading backend architecture for high-scale distributed systems serving 50M+ users. Designed and implemented microservices handling 100M+ API requests daily with 99.99% uptime. Mentoring team of 8 engineers and establishing engineering best practices.'
  },
  {
    title: 'Backend Developer',
    company: 'CloudFirst Technologies',
    period: '2020 - 2022',
    description: 'Built and maintained RESTful APIs and GraphQL services using Node.js and Python. Optimized database performance resulting in 60% query time reduction. Implemented CI/CD pipelines and monitoring solutions using Docker and Kubernetes.'
  },
  {
    title: 'Software Engineer',
    company: 'DataFlow Systems',
    period: '2019 - 2020',
    description: 'Developed real-time data processing pipelines handling millions of events per second. Built message queue systems and implemented caching strategies that improved system performance by 40%. Worked with Apache Kafka, Redis, and PostgreSQL.'
  },
  {
    title: 'Junior Backend Developer',
    company: 'StartupHub Inc.',
    period: '2018 - 2019',
    description: 'Started career building REST APIs and database schemas for various client projects. Gained experience with multiple programming languages and frameworks while contributing to system design discussions and code reviews.'
  }
];