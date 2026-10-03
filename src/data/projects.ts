export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  year: string;
  featured: boolean;
  tags: string[];
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  keyFeatures?: string[];
  challenges?: string;
  results?: string;
  technicalDetails?: string;
}

export const projects: Project[] = [
  {
    id: 'earthsense',
    number: '01',
    title: 'EarthSense',
    category: 'Geospatial',
    shortDescription: 'LiDAR Processing & Geospatial Analysis Platform',
    description:
      'A high-performance geospatial data platform for processing large-scale drone photogrammetry and LiDAR datasets, generating 2.5D/3D terrain models, and performing automated cut-and-fill volumetric analysis.',
    technologies: ['Python', 'FastAPI', 'GIS', 'GDAL', 'LiDAR', 'PostgreSQL', 'PostGIS', 'Docker'],
    image: '',
    liveUrl: '',
    sourceUrl: '',
    year: '2026',
    featured: true,
    tags: ['Geospatial', 'Backend', '3D', 'Research'],
    overview:
      'Built at IIT Delhi (FIIT), EarthSense is a platform for processing and analyzing large-scale geospatial data from drones and LiDAR sensors. It supports automated terrain analysis, earthwork calculations, and interactive GIS workflows.',
    problem:
      'Processing raw LiDAR and drone photogrammetry data is computationally expensive. Performing accurate 2.5D/3D cut-and-fill analysis across multi-polygon AOIs requires specialized high-precision engines.',
    solution:
      'Built asynchronous Python/FastAPI backend services with background job execution for large raster and LiDAR datasets. Developed a high-precision cut-and-fill engine for elevation profiling and volumetric calculations.',
    architecture:
      'FastAPI services handle data ingestion and async processing pipelines. GDAL and PostGIS power geospatial transformations. PostgreSQL stores terrain datasets and results.',
    keyFeatures: [
      'Scalable backend for drone photogrammetry and LiDAR dataset processing',
      'High-precision 2.5D/3D cut-and-fill analysis engine for multi-polygon AOIs',
      'Automated volumetric calculation and elevation profiling',
      'Background job execution for large raster and 3D terrain datasets',
      'Interactive GIS platform for AOI annotation and terrain visualization',
    ],
    challenges:
      'Handling multi-gigabyte LiDAR files and maintaining precision for multi-polygon volumetric calculations required carefully optimized async processing pipelines.',
    results:
      'Successfully deployed at IIT Delhi FIIT, supporting automated terrain and earthwork analysis workflows for research teams.',
    technicalDetails:
      'Uses GDAL pipelines for raster processing, PostGIS for spatial queries, and async FastAPI workers with background task queues for large dataset processing.',
  },
  {
    id: 'adivaani',
    number: '02',
    title: 'AdiVaani',
    category: 'AI / Backend',
    shortDescription: 'Government Platform for Tribal Language Translation',
    description:
      'A production-grade government platform for tribal language translation under the Ministry of Tribal Affairs, featuring real-time translation, chat, and document processing workflows built with Java and Spring Boot.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Docker', 'Jenkins', 'PostgreSQL', 'CI/CD'],
    image: '',
    liveUrl: '',
    sourceUrl: '',
    year: '2026',
    featured: true,
    tags: ['AI', 'Backend', 'Government'],
    overview:
      'AdiVaani is a government-commissioned platform under the Ministry of Tribal Affairs for tribal language translation. Built during the IIT Delhi internship, it serves real-time translation, chat, and document processing at scale.',
    problem:
      'Tribal communities lack digital tools for language translation and communication. A scalable, reliable government platform was needed to bridge this gap.',
    solution:
      'Engineered scalable Spring Boot backend services for real-time translation and chat workflows. Containerized with Docker and deployed via Jenkins CI/CD pipelines for production reliability.',
    architecture:
      'Spring Boot RESTful API layer handles translation, chat, and document processing. Docker containers managed by Jenkins CI/CD ensure consistent deployments.',
    keyFeatures: [
      'Real-time tribal language translation API',
      'Chat and document processing workflows',
      'RESTful APIs using Java and Spring Boot',
      'Docker containerization and Jenkins CI/CD pipelines',
      'Production-grade reliability for government deployment',
    ],
    challenges:
      'Ensuring production reliability and scalability for a government platform with strict uptime requirements required robust CI/CD and containerization.',
    results:
      'Successfully deployed in production under Ministry of Tribal Affairs, providing tribal language translation services at scale.',
    technicalDetails:
      'Spring Boot microservices with REST APIs, Docker for containerization, and Jenkins pipelines for automated delivery and continuous integration.',
  },
  {
    id: 'voice-chat',
    number: '03',
    title: 'Real-Time Voice Chat Platform',
    category: 'Backend',
    shortDescription: 'Scalable Real-Time Voice & Messaging Platform',
    description:
      'A scalable real-time voice chat platform with voice rooms, messaging, media sharing, and WebSocket-based low-latency communication, supporting 100+ concurrent users.',
    technologies: ['Python', 'FastAPI', 'Express.js', 'Next.js', 'WebSocket', 'Redis', 'LiveKit', 'JWT'],
    image: '',
    liveUrl: '',
    sourceUrl: '',
    year: '2025',
    featured: true,
    tags: ['Backend', 'Real-Time', 'WebSocket'],
    overview:
      'A full-stack real-time voice chat platform supporting voice rooms, instant messaging, and media sharing with WebSocket-based low-latency communication. Designed for concurrent real-time users.',
    problem:
      'Building a low-latency real-time voice and messaging platform that scales to concurrent users requires careful architecture for session management, event handling, and media routing.',
    solution:
      'Built with FastAPI and Express.js backends, Redis for distributed session handling, and LiveKit for voice media routing. JWT authentication ensures secure user sessions.',
    architecture:
      'FastAPI handles core API logic, Express.js manages middleware and routing, Redis powers distributed session storage and pub/sub. LiveKit provides WebRTC infrastructure for voice rooms.',
    keyFeatures: [
      'Real-time voice rooms with WebRTC via LiveKit',
      'WebSocket-based low-latency messaging and media sharing',
      'JWT authentication and Redis distributed session handling',
      'Event-driven backend architecture for concurrent users',
      '100+ RESTful APIs for auth, rooms, messaging, and media',
    ],
    challenges:
      'Achieving low-latency for concurrent voice and messaging sessions required event-driven architecture with Redis pub/sub and efficient WebSocket management.',
    results:
      'Platform supports concurrent real-time voice and chat sessions with 100+ REST APIs and robust session management.',
    technicalDetails:
      'Express.js middleware handles auth, request validation, error handling, and routing. LiveKit powers WebRTC media. Redis manages distributed sessions.',
  },
  {
    id: 'ai-chatbot',
    number: '04',
    title: 'AI Customer Support Chatbot',
    category: 'AI / Microservices',
    shortDescription: 'Spring Boot Microservices with Gemini AI & RAG',
    description:
      'A cloud-native AI customer support system with 8 Spring Boot microservices, Gemini AI integration with RAG workflows, achieving 85% automated query resolution for 150+ concurrent real-time chat sessions.',
    technologies: ['Spring Boot', 'Microservices', 'Spring AI', 'Apache Kafka', 'Docker', 'AWS EC2', 'Next.js', 'PostgreSQL', 'PGVector', 'Jenkins'],
    image: '',
    liveUrl: '',
    sourceUrl: '',
    year: '2025',
    featured: false,
    tags: ['AI', 'Microservices', 'Backend', 'GenAI'],
    overview:
      'A production-grade AI customer support platform built with 8 Spring Boot microservices and a Next.js frontend, leveraging Gemini AI with RAG and multi-agent orchestration for automated query resolution.',
    problem:
      'Customer support at scale requires handling 150+ concurrent sessions while maintaining accurate, automated responses — which demands robust AI integration and a reliable microservices architecture.',
    solution:
      'Built 8 Spring Boot microservices orchestrated via Apache Kafka. Integrated Gemini AI with RAG using PostgreSQL PGVector for semantic search. Deployed cloud-native on AWS EC2 with Docker and Jenkins CI/CD.',
    architecture:
      '8 Spring Boot microservices communicate via REST APIs and WebSocket. Apache Kafka handles async event streaming. PostgreSQL PGVector stores embeddings for RAG. Jenkins CI/CD on AWS EC2.',
    keyFeatures: [
      '8 Spring Boot microservices supporting 150+ concurrent real-time chat sessions',
      'Gemini AI with RAG workflows and multi-agent orchestration',
      '85% automated query resolution rate',
      'Next.js frontend integrated with Spring Boot via REST APIs and WebSocket',
      'Cloud-native deployment: Docker, Apache Kafka, PGVector, Jenkins, AWS EC2',
    ],
    challenges:
      'Orchestrating 8 microservices with reliable AI-augmented responses while maintaining low latency for 150+ concurrent WebSocket sessions required careful async architecture.',
    results:
      'Achieved 85% automated query resolution. Successfully deployed cloud-native infrastructure on AWS EC2 with full CI/CD pipeline.',
    technicalDetails:
      'Spring AI handles Gemini LLM integration. PGVector stores embeddings for RAG retrieval. Kafka manages inter-service events. Jenkins automates build and deployment pipelines.',
  },
  {
    id: 'unisearch',
    number: '05',
    title: 'UniSearch',
    category: 'Backend',
    shortDescription: 'Predictive Location Search Engine',
    description:
      'A high-performance predictive search engine combining TomTom APIs, OpenStreetMap data, and Redis caching for fast, accurate location-based search with sub-millisecond response times.',
    technologies: ['Java', 'Spring Boot', 'TomTom API', 'OpenStreetMap', 'Redis', 'PostgreSQL'],
    image: '',
    liveUrl: '',
    sourceUrl: '',
    year: '2024',
    featured: false,
    tags: ['Backend', 'Geospatial', 'Search'],
    overview:
      'UniSearch provides predictive location search by aggregating multiple geospatial data sources and caching results for sub-millisecond response times.',
    problem:
      'Location search across multiple data providers is slow and expensive due to API rate limits and network latency.',
    solution:
      'Built a caching layer with Redis that stores pre-computed search results and implements a predictive prefetching strategy based on user patterns.',
    architecture:
      'Spring Boot REST API aggregates TomTom and OSM data. Redis caches results with TTL-based invalidation. PostgreSQL stores persistent location data.',
    keyFeatures: [
      'Multi-source location aggregation (TomTom + OpenStreetMap)',
      'Predictive prefetching with Redis',
      'Fuzzy string matching for typo tolerance',
      'Rate limiting and API key management',
      'GeoJSON output format',
    ],
    challenges:
      'Synchronizing data from multiple providers with different formats and update frequencies required a robust data normalization layer.',
    results:
      'Reduced average search latency by 80% compared to direct API calls through intelligent caching.',
    technicalDetails:
      'Implements a trie-based prefix cache for instant completions, with a fallback to external APIs for cache misses.',
  },
];
