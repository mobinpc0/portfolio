export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ResearchItem {
  id: number;
  title: string;
  journal: string;
  year: string;
  abstract: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
}
