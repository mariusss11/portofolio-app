export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'cloud' | 'tools';
  level: number;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}