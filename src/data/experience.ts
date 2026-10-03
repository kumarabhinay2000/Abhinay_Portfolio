export interface Experience {
  id: string;
  role: string;
  company: string;
  type: 'full-time' | 'internship' | 'research' | 'freelance';
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  location: string;
}

export const experiences: Experience[] = [
  {
    id: 'iitd-jre',
    role: 'Junior Research Engineer (JRE)',
    company: 'IIT Delhi — FIIT',
    type: 'research',
    startDate: 'Jun 2026',
    endDate: 'Present',
    current: true,
    description:
      'Engineering scalable backend services and data-processing pipelines for large-scale drone photogrammetry, LiDAR, and geospatial datasets at IIT Delhi\'s Foundation for Innovation and Technology Transfer (FIIT).',
    responsibilities: [
      'Engineered scalable backend services and asynchronous processing workflows for large-scale drone photogrammetry, LiDAR, and geospatial datasets, supporting automated terrain and earthwork analysis.',
      'Developed a high-precision 2.5D/3D cut-and-fill analysis engine for multi-polygon AOIs, elevation profiling, and automated volumetric calculations.',
      'Designed automated data-processing pipelines for large raster, LiDAR, and 3D terrain datasets with background job execution and optimized processing workflows.',
      'Built an interactive GIS platform for AOI annotation, terrain visualization, and automated spatial analysis workflows.',
    ],
    technologies: ['Python', 'FastAPI', 'GIS', 'GDAL', 'LiDAR', 'PostgreSQL', 'PostGIS', 'Docker'],
    location: 'New Delhi, India',
  },
  {
    id: 'iitd-fullstack',
    role: 'Java Full Stack Developer Intern',
    company: 'IIT Delhi — Dept. of Electrical Engineering',
    type: 'internship',
    startDate: 'Jan 2026',
    endDate: 'Jun 2026',
    current: false,
    description:
      'Engineered and deployed backend services for AdiVaani — a government platform for tribal language translation under the Ministry of Tribal Affairs — ensuring scalability and production reliability.',
    responsibilities: [
      'Engineered and deployed backend services for AdiVaani under Ministry of Tribal Affairs, a government platform for tribal language translation, ensuring scalability and production reliability.',
      'Designed and implemented RESTful APIs using Java and Spring Boot for real-time translation, chat, and document processing workflows.',
      'Containerized applications using Docker and implemented CI/CD pipelines with Jenkins for automated delivery.',
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Docker', 'Jenkins', 'PostgreSQL'],
    location: 'New Delhi, India',
  },
  {
    id: 'raajsons-intern',
    role: 'Junior Software Intern',
    company: 'Raajsons Infotech Pvt. Ltd.',
    type: 'internship',
    startDate: 'Jun 2025',
    endDate: 'Nov 2025',
    current: false,
    description:
      'Developed a document processing pipeline and REST APIs for automated data extraction, OCR correction, and Excel export, integrated with a React.js frontend and an AI-powered chatbot.',
    responsibilities: [
      'Developed a document processing pipeline using Spring Boot and FastAPI to extract data from uploaded form images, perform OCR-based text correction, and convert records into structured vectorized data.',
      'Built REST APIs for data validation, processing, and automated export of corrected records to Excel sheets, integrated with a React.js frontend.',
      'Integrated an AI-powered chatbot to assist users with form-related queries and improve workflows.',
    ],
    technologies: ['Spring Boot', 'FastAPI', 'Python', 'React.js', 'REST APIs', 'OCR', 'AI'],
    location: 'India',
  },
];
