export interface Tool {
  name: string;
  logo?: string; // path under /public
}

export interface SkillDomain {
  id: string;
  short: string;
  title: string;
  subtitle: string;
  code: string;
  skills: string[];
  tools: Tool[];
  extra?: { label: string; items: string[] };
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  detail?: string;
  period: string;
  score: string;
  highlight?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image?: string;
  points: string[];
  tech: string[];
  links?: ProjectLink[];
}

export interface ResearchItem {
  id: number;
  type: 'IEEE' | 'Conference';
  title: string;
  venue: string;
  year: string;
  authors: string[];
  doi?: string;
  status?: string;
}

export interface Achievement {
  id: number;
  kind: 'Achievement' | 'Certification' | 'Training';
  title: string;
  issuer: string;
  date?: string;
  note?: string;
  image?: string;
  big?: string;
  bigSub?: string;
}
