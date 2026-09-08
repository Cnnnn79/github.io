export type TabType = 'home' | 'about' | 'articles' | 'works';

export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: 'Design' | 'Tech' | 'Product' | 'Life';
  categoryLabel: string;
  date: string;
  readTime: string;
  coverImage: string;
  views: number;
  likes: number;
  featured?: boolean;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'UI/UX Design' | 'Web Apps' | 'Case Studies' | 'Mobile App';
  categoryLabel: string;
  badge: string;
  description: string;
  problem?: string;
  solution?: string;
  outcomes?: string[];
  coverImage: string;
  galleryImages: string[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  year: string;
  colorScheme: 'mint' | 'peach' | 'yellow' | 'purple' | 'pink';
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  highlight: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  guest: string;
  duration: string;
  date: string;
  avatars: string[];
}
