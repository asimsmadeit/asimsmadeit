export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  context?: string; // e.g. "NeurIPS 2024", "CVPR Oral"
}

export interface ResearchProblem {
  id: string;
  question: string;
  context: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string; // Markdown-like content
  link?: string; // External URL
}

export interface RssItem {
  id: string;
  source: string;
  title: string;
  date: string;
  url: string;
}

export interface Publication {
  id: string;
  venue: string;
  title: string;
  authors: string;
  linkPdf?: string;
  linkCode?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
  sources?: Array<{
    title: string;
    uri: string;
  }>;
}

export enum ViewState {
  HOME = 'HOME',
  RESUME = 'RESUME',
  PROJECTS_LIST = 'PROJECTS_LIST',
  RESEARCH = 'RESEARCH',
  BLOG_LIST = 'BLOG_LIST',
  PROJECT_DETAIL = 'PROJECT_DETAIL',
  POST_DETAIL = 'POST_DETAIL'
}