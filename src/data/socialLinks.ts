import { siteConfig } from './siteConfig';

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: siteConfig.github,
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: siteConfig.linkedin,
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'Email',
    url: `mailto:${siteConfig.email}`,
    icon: 'mail',
  },
];
