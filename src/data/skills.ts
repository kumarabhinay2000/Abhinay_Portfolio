export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'REST APIs', 'Microservices', 'gRPC'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['TypeScript', 'React', 'Vite', 'CSS Modules', 'Responsive Design'],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'PGVector'],
  },
  {
    id: 'messaging',
    label: 'Messaging',
    skills: ['Apache Kafka', 'RabbitMQ', 'Redis Pub/Sub'],
  },
  {
    id: 'devops',
    label: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform'],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    skills: ['AWS', 'EC2', 'S3', 'RDS', 'Lambda'],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    skills: ['LLMs', 'RAG', 'Embeddings', 'Prompt Engineering', 'Fine-tuning', 'Langchain'],
  },
  {
    id: 'geospatial',
    label: 'Geospatial',
    skills: ['LiDAR', 'DEM / DTM', 'GIS', 'GDAL', 'PostGIS', 'Point Clouds', 'OpenStreetMap'],
  },
  {
    id: 'threed',
    label: '3D / Web',
    skills: ['Three.js', 'WebGL', 'React Three Fiber', 'GLSL Shaders', 'Drei'],
  },
];

export const featuredTechnologies = [
  'Java',
  'Python',
  'TypeScript',
  'React',
  'Spring Boot',
  'FastAPI',
  'PostgreSQL',
  'Redis',
  'Kafka',
  'Docker',
  'Kubernetes',
  'AWS',
  'Three.js',
];
