export interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 'mca',
    degree: 'MCA — Master of Computer Applications',
    institution: 'K. R. Mangalam University, Sohna, Gurugram',
    startYear: '2024',
    endYear: '2026',
    description: 'Specializing in advanced software engineering, AI/ML, and distributed systems.',
  },
  {
    id: 'bca',
    degree: 'BCA — Bachelor of Computer Applications',
    institution: 'Babasaheb Bhimrao Ambedkar Bihar University, Muzaffarpur',
    startYear: '2020',
    endYear: '2023',
    description:
      'Foundation in computer science, programming, and software development principles.',
  },
];
