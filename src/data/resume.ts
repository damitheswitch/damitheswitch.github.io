export const site = {
  name: 'Imad Charradi',
  role: 'AI Software Engineer',
  tagline: 'I build AI agents, computer vision systems, and the backends that tie them together.',
  location: "Xi'an, China · Morocco",
  email: 'charradiimad7@gmail.com',
  cvUrl: '/Imad_Charradi_CV.pdf',
  socials: {
    github: 'https://github.com/damitheswitch',
    linkedin: 'https://www.linkedin.com/in/imad-charradi/',
    x: 'https://x.com/MARCN3334/',
  },
};

export const about = [
  "I'm passionate about building software that feels intelligent — whether that's an AI agent automating complex workflows, a computer vision model understanding live video, or a backend system that ties everything together. I enjoy taking ideas from prototype to production.",
  "I'm currently pursuing an M.Sc. in Artificial Intelligence at Xidian University. Before that, I worked as an AI Agent Engineer in Hangzhou, building production agent systems that generate images, video, and text for e-commerce automation.",
  'I grew up in Morocco and have spent the last few years studying and working in China — a path that left me fluent across five languages and comfortable building across cultures.',
];

export const currently = [
  'AI Agents & Multi-Agent Systems',
  'Retrieval-Augmented Generation (RAG)',
  'Computer Vision',
  'LLM Engineering & MLOps',
  'Distributed AI Systems',
  'Self-hosted AI Infrastructure',
];

export interface ExperienceItem {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'AI Agent Engineer — E-commerce Automation',
    org: 'Hangzhou Mokelili Technology Co., Ltd.',
    location: 'Hangzhou, China',
    period: 'Jan 2026 — May 2026',
    bullets: [
      'Architected and developed full-stack AI agent systems to automate multi-modal media generation (image, video, text).',
      'Engineered robust API integration pipelines, web scrapers, and n8n workflows for automated content processing.',
      'Designed website architecture and managed end-to-end self-hosting, testing, and deployment of production-oriented AI automation solutions.',
    ],
  },
  {
    role: 'Python Engineer Intern — R&D',
    org: 'DRONEMAR Morocco',
    location: 'Casablanca, Morocco',
    period: 'May 2025 — Sep 2025',
    bullets: [
      'Worked on backend development, data processing pipelines, and system integration for autonomous drone operations.',
      'Contributed to the Drone Autonomous Flight monitoring platform as a Python engineer in the R&D department.',
      'Developed features for real-time drone flight monitoring and data analysis systems.',
    ],
  },
  {
    role: 'Information Systems & Data Support Intern',
    org: 'JAD CARROSSERIE',
    location: 'Casablanca, Morocco',
    period: 'Jun 2024 — Sep 2024',
    bullets: [
      'Automated internal workflows and data processing with Python scripts, saving 10+ hours of manual reporting weekly.',
      'Structured and managed MySQL databases for document digitization, querying, and reporting.',
      'Supported digital transformation by modernizing legacy document systems.',
    ],
  },
];

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Traffic Analysis & Vehicle Detection',
    subtitle: 'Undergraduate Thesis',
    description:
      'End-to-end computer vision pipeline for real-time traffic monitoring, multi-object tracking, and rule-violation detection. Fine-tuned custom detection models for vehicle attributes and optimized inference for live video streams.',
    tags: ['PyTorch', 'YOLO', 'OpenCV', 'Python'],
    featured: true,
  },
  {
    title: 'AI Agent Platform',
    subtitle: 'Production System',
    description:
      'Production AI agents capable of generating images, videos, and content while orchestrating complex e-commerce workflows through API pipelines, scrapers, and n8n automation.',
    tags: ['Multi-Agent Systems', 'n8n', 'LLMs', 'Python'],
    featured: true,
  },
  {
    title: 'Predictive Maintenance for Industrial Equipment',
    subtitle: 'ML Pipeline',
    description:
      'End-to-end ML pipeline on 10,000 industrial sensor samples predicting binary equipment faults. Handled severe class imbalance with SMOTE and feature engineering — 98%+ accuracy and F1.',
    tags: ['XGBoost', 'Scikit-learn', 'Pandas', 'Python'],
    featured: true,
  },
  {
    title: 'Voice Assistant with Mood Detection',
    subtitle: 'IoT Project',
    description:
      'Hardware assistant that analyzes facial features to detect user emotion, with low-latency API communication between an embedded edge device and a local processing server.',
    tags: ['IoT', 'Computer Vision', 'Embedded', 'Python'],
  },
  {
    title: 'Online Examination System',
    subtitle: 'Web Platform',
    description:
      'Secure, role-based web platform for automated exam grading with real-time analytics dashboards, custom authentication, and a scalable database schema via Django ORM.',
    tags: ['Django', 'REST APIs', 'PostgreSQL', 'Python'],
  },
  {
    title: 'University Review Platform API',
    subtitle: 'Open Source',
    description: 'A RESTful API for university reviews with authentication and structured data models.',
    tags: ['Python', 'REST', 'API Design'],
    link: 'https://github.com/damitheswitch/university-review-platform-api',
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Kotlin', 'C', 'HTML/CSS'],
  },
  {
    label: 'AI, ML & Computer Vision',
    items: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'Scikit-learn', 'XGBoost', 'Feature Engineering'],
  },
  {
    label: 'LLMs & Agent Systems',
    items: ['AI Agent Development', 'Multi-Agent Systems', 'RAG', 'LLM Integration', 'Vector Databases', 'Embeddings', 'Prompt Engineering', 'n8n'],
  },
  {
    label: 'Backend & Systems',
    items: ['Django', 'Flask', 'REST APIs', 'Microservices', 'System Design', 'Auth & Authorization', 'SQL'],
  },
  {
    label: 'Data & Cloud',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'AWS S3', 'Apache Spark', 'Hadoop'],
  },
  {
    label: 'DevOps & Infra',
    items: ['Docker', 'Docker Compose', 'Linux', 'Nginx', 'Git', 'Bash', 'CI/CD'],
  },
];

export interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

export const education: Education[] = [
  {
    school: 'Xidian University — Xi’an, China',
    degree: 'M.Sc. Artificial Intelligence and Technology',
    period: 'Sep 2026 — Jun 2029',
    details: 'Graduate research student in the School of AI.',
  },
  {
    school: 'China Jiliang University — Hangzhou, China',
    degree: 'B.Eng. Computer Science and Technology',
    period: 'Sep 2022 — Jun 2026',
    details: 'GPA 86.3%. Merit-based scholarship awarded 4 years in a row.',
  },
];

export const certificates = [
  { name: 'Machine Learning Specialization', issuer: 'Coursera — Andrew Ng', date: 'Jul 2026' },
  { name: 'Intermediate Machine Learning', issuer: 'Kaggle', date: 'Sep 2025' },
  { name: 'Back-End Web Development', issuer: 'ALX Academy', date: 'Apr 2025' },
  { name: 'ALX Foundations', issuer: 'ALX Africa', date: 'Sep 2024' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', date: 'Aug 2024' },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'C1' },
  { name: 'French', level: 'C1' },
  { name: 'Mandarin', level: 'HSK 4' },
  { name: 'Spanish', level: 'B1' },
];

export const volunteering = [
  {
    role: 'Project Leader',
    org: 'ENACTUS — Faculté des Sciences Appliquées Ait Melloul',
    period: 'Sep 2020 — Jun 2022',
    description: 'Led economic empowerment initiatives, guiding cross-functional student teams to deploy sustainable community projects.',
  },
  {
    role: 'Team Member — B2C Marketing',
    org: 'AIESEC Agadir',
    period: 'Feb 2022 — Jun 2022',
    description: 'Focused on leads and conversion, helping youth find opportunities worldwide.',
  },
];
