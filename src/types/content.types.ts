export interface SeoMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

export interface Profile {
  name: string;
  role: string;
  shortIntro: string;
  longAbout: string;
  email: string;
  socials: {
    linkedin?: string;
    x?: string;
    github?: string;
    behance?: string;
  };
  location?: string;
  availability: string;
  languages: string[];
  resumeUrl?: string;
  seoDescription?: string;
  metaKeywords?: string[];
}

export interface HeroData {
  headline: string;
  tagline: string;
  description: string;
  missionLabel: string;
  professionalLabel: string;
  ctaButtons: {
    label: string;
    href: string;
    variant: "primary" | "secondary" | "outline";
  }[];
}

export interface AboutData {
  biography: string;
  education: {
    institution: string;
    degree: string;
    year: string;
  }[];
  interests: string[];
  currentlyLearning: string[];
  goal: string;
  designPhilosophy: string;
  statistics: {
    label: string;
    value: string;
  }[];
  timeline?: {
    year: string;
    milestone: string;
  }[];
}

export type ServiceCategory = "Design" | "Development" | "Strategy" | "Photography";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  features?: string[];
  toolsUsed?: string[];
  iconName: string; // Lucide icon string
  category: ServiceCategory;
  displayOrder: number;
}

export type ToolCategory = "Design" | "Development" | "Data" | "Productivity" | "Learning";

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  iconName: string;
  experienceLevel?: "Expert" | "Intermediate" | "Familiar";
  yearsUsed?: number;
  description: string;
  url?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  employmentType?: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  startDate?: string;
  endDate: string | "Present" | "Ongoing";
  description: string;
  achievements?: string[];
  skillsUsed?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string; // E.g., "Graphic Design", "Brand Identity", etc.
  thumbnail: string;
  coverImage?: string;
  gallery?: string[];
  shortDescription: string;
  longDescription?: string;
  problemStatement?: string;
  solution?: string;
  toolsUsed?: string[]; // Legacy field
  technologies?: string[];
  tags?: string[];
  role?: string;
  year?: string;
  visibility?: "public" | "private";
  overview?: string;
  objectives?: string[];
  research?: string;
  process?: string;
  wireframes?: string[];
  designSolution?: string;
  finalOutcome?: string;
  challenges?: string[];
  keyLearnings?: string[];
  timeline?: string;
  liveUrl?: string;
  githubUrl?: string;
  ctaUrl?: string;
  isFeatured: boolean;
  seoMetadata?: SeoMetadata;
}

export interface ContactData {
  email: string;
  preferredMethod: string;
  availabilityTimezone: string;
  responseTime: string;
  ctaMessage: string;
}

export interface FooterData {
  copyrightYear: number;
  credits: string;
  version: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
}
