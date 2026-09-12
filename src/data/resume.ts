export const site = {
  name: 'Imad Charradi',
  handle: 'damitheswitch',
  role: 'AI Software Engineer',
  tagline: 'I build AI agents, computer vision systems, and the backends that tie them together.',
  description:
    "Imad Charradi (@damitheswitch): AI software engineer building AI agents, computer vision systems, and backends. M.Sc. AI at Xidian University. Open to opportunities.",
  location: "Xi'an, China · Morocco",
  email: 'charradiimad7@gmail.com',
  cvUrl: '/Imad_Charradi_CV.pdf',
  socials: {
    github: 'https://github.com/damitheswitch',
    linkedin: 'https://www.linkedin.com/in/imad-charradi/',
    x: 'https://x.com/MARCN3334/',
  },
};

export const rotatorPhrases = [
  'build AI agents.',
  'shipped therealchina.net.',
  'am an AI grad student at Xidian.',
  'build computer vision systems.',
  'automate workflows end-to-end.',
  'am open to opportunities.',
];

export const about = [
  "I'm passionate about building software that feels intelligent: AI agents that automate complex workflows, computer vision models that understand live video, and backend systems that tie everything together. I enjoy taking ideas from prototype to production.",
  "I'm currently pursuing an M.Sc. in Artificial Intelligence at Xidian University. Before that, I worked as an AI Agent Engineer in Hangzhou, building production agent systems for e-commerce automation.",
  'Right now I\'m building The Real China, a community review platform where international students share honest takes on Chinese universities. It grew out of my own path: born in Morocco, now studying and working in China.',
];

export const currently = [
  'Distributed AI Systems',
  'LLM Engineering & MLOps',
  'Self-hosted AI Infrastructure',
  'AI for Healthcare & Genomics',
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
    role: 'AI Agent Engineer · E-commerce Automation',
    org: 'Hangzhou Mokelili Technology Co., Ltd.',
    location: 'Hangzhou, China',
    period: 'Jan 2026 - May 2026',
    bullets: [
      'Architected and developed full-stack AI agent systems for e-commerce automation: winning product selection, multi-modal content generation (image, video, text), and automated publishing across platforms.',
      'Built data-driven analytics to measure ad performance and support optimized ad-spend decisions.',
      'Engineered API integration pipelines, web scrapers, and n8n workflows for automated content processing.',
      'Delivered production AI automation for online sellers and cross-border marketers with a small engineering team, managing self-hosting, testing, and deployment end to end.',
    ],
  },
  {
    role: 'Python Engineer Intern · R&D',
    org: 'DRONEMAR Morocco',
    location: 'Casablanca, Morocco',
    period: 'May 2025 - Sep 2025',
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
    period: 'Jun 2024 - Sep 2024',
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
  repo?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: 'The Real China (TRC)',
    subtitle: 'Live Product · Passion Project',
    description:
      'Community-driven platform where international students share honest reviews of Chinese universities. Born from navigating the process myself. Live in production: seeded directory of 580+ universities, no-login review flow, real users.',
    tags: ['TypeScript', 'Supabase', 'Netlify', 'Full-Stack'],
    repo: 'https://github.com/damitheswitch/therealchina',
    live: 'https://therealchina.net',
  },
  {
    title: 'Traffic Analysis & Vehicle Detection',
    subtitle: 'Undergraduate Thesis',
    description:
      'End-to-end computer vision pipeline for real-time traffic monitoring, multi-object tracking, and rule-violation detection. Fine-tuned custom detection models for vehicle attributes and optimized inference for live video streams.',
    tags: ['PyTorch', 'YOLO', 'OpenCV', 'Python'],
  },
  {
    title: 'AI Agent Platform',
    subtitle: 'Production System',
    description:
      'Production AI agents generating images, videos, and content while orchestrating complex e-commerce workflows through API pipelines, scrapers, and n8n automation.',
    tags: ['Multi-Agent Systems', 'n8n', 'LLMs', 'Python'],
  },
  {
    title: 'Predictive Maintenance for Industrial Equipment',
    subtitle: 'ML Pipeline',
    description:
      'End-to-end ML pipeline on 10,000 industrial sensor samples predicting binary equipment faults. Handled severe class imbalance with SMOTE and feature engineering, reaching 98%+ accuracy and F1.',
    tags: ['XGBoost', 'Scikit-learn', 'Pandas', 'Python'],
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
    school: 'Xidian University · Xi’an, China',
    degree: 'M.Sc. Artificial Intelligence and Technology',
    period: 'Sep 2026 - Jul 2029',
    details: 'Graduate research student in the School of AI.',
  },
  {
    school: 'China Jiliang University · Hangzhou, China',
    degree: 'B.Eng. Computer Science and Technology',
    period: 'Sep 2022 - Jun 2026',
    details: 'GPA 86.3%. Merit-based scholarship awarded 4 years in a row.',
  },
];

export const certificates = [
  { name: 'Machine Learning Specialization', issuer: 'Coursera · Andrew Ng', date: 'Jul 2026' },
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
  { name: 'German', level: 'Elementary' },
];

export const volunteering = [
  {
    role: 'Project Leader',
    org: 'ENACTUS · Faculté des Sciences Appliquées Ait Melloul',
    period: 'Sep 2020 - Jun 2022',
    description: 'Led economic empowerment initiatives, guiding cross-functional student teams to deploy sustainable community projects.',
  },
  {
    role: 'Team Member · B2C Marketing',
    org: 'AIESEC Agadir',
    period: 'Feb 2022 - Jun 2022',
    description: 'Focused on leads and conversion, helping youth find opportunities worldwide.',
  },
];
