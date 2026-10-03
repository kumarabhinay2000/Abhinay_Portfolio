export type { Project } from '../data/projects';
export type { Experience } from '../data/experience';
export type { Education } from '../data/education';
export type { SkillCategory } from '../data/skills';
export type { Article } from '../data/articles';
export type { SocialLink } from '../data/socialLinks';

export interface NavLink {
  label: string;
  href: string;
}

export interface Meta {
  title: string;
  description: string;
}
