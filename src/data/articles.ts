export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  shortDescription: string;
  content?: string;
  published: boolean;
}

export const articles: Article[] = [
  {
    id: 'lidar-web',
    slug: 'rendering-lidar-point-clouds-in-browser',
    title: 'Rendering LiDAR Point Clouds in the Browser with Three.js',
    category: 'Geospatial',
    date: '2024-10-01',
    readingTime: '8 min read',
    shortDescription:
      'How to efficiently render millions of LiDAR points in the browser using Three.js BufferGeometry, instanced meshes, and Level of Detail techniques.',
    published: true,
  },
  {
    id: 'spring-redis',
    slug: 'spring-boot-redis-caching-patterns',
    title: 'Advanced Redis Caching Patterns in Spring Boot',
    category: 'Backend',
    date: '2024-08-15',
    readingTime: '6 min read',
    shortDescription:
      'Practical caching strategies for Spring Boot applications — TTL management, cache invalidation, and predictive prefetching with Redis.',
    published: true,
  },
  {
    id: 'rag-fastapi',
    slug: 'building-rag-pipeline-fastapi',
    title: 'Building a Production RAG Pipeline with FastAPI and PGVector',
    category: 'AI',
    date: '2024-06-20',
    readingTime: '10 min read',
    shortDescription:
      'A step-by-step guide to building a Retrieval-Augmented Generation pipeline using FastAPI, PostgreSQL with PGVector, and open-source embeddings.',
    published: true,
  },
];
