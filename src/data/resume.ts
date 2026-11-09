export const site = {
  name: 'Imad Charradi',
  handle: 'damitheswitch',
  role: 'AI Software Engineer',
  tagline: 'I build AI agents and the backend systems that tie them together.',
  description:
    "Imad Charradi (@damitheswitch): AI software engineer building AI agents and backend systems. M.Sc. AI at Xidian University. Open to opportunities.",
  location: "Xi'an, China · Morocco",
  email: 'charradiimad7@gmail.com',
  socials: {
    github: 'https://github.com/damitheswitch',
    linkedin: 'https://www.linkedin.com/in/imad-charradi/',
    kaggle: 'https://www.kaggle.com/imadcharradi',
    huggingface: 'https://huggingface.co/DAMIcn',
    x: 'https://x.com/MARCN3334/',
  },
  community: {
    name: 'AIRMN',
    repo: 'https://github.com/damitheswitch/airmn',
    discord: 'https://discord.gg/w9jkvrNHWy',
  },
};

export const rotatorPhrases = [
  'am an AI grad student at Xidian.',
  'build multi-agent systems.',
  'am an AI researcher.',
  'shipped therealchina.net.',
  'co-authored a paper on LLM memory.',
  'co-founded AIRMN, an AI community.',
  'am open to opportunities.',
];

export const about = [
  "I'm passionate about building software that feels intelligent: multi-agent systems that automate complex workflows, and backend systems that tie everything together. I enjoy taking ideas from prototype to production.",
  "I'm currently pursuing an M.Sc. in Artificial Intelligence at Xidian University, where I'm exploring multi-agent systems and bio/brain-inspired computing in various fields. Before that, I worked as an AI Agent Engineer in Hangzhou, building production agent systems for e-commerce automation.",
  'Right now I\'m building The Real China, a community review platform where international students share honest takes on Chinese universities. It grew out of my own path: born in Morocco, now studying and working in China.',
  "I also co-founded AIRMN (AI Research Moroccan Network), a global Discord community for AI researchers, students, and engineers connected to Morocco. It has grown to 100+ active contributors, and our multi-agent LLM paper came out of a collaboration inside the community.",
];

export const currently = [
  'Multi-Agent Systems',
  'Bio/Brain-Inspired Computing',
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

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  url: string;
  note?: string;
}

export const publications: Publication[] = [
  {
    title: 'Rare, Relevant, and Still Wrong: How Memory Fails LLM Group Decisions',
    authors: ['Anouar Imel', 'Imad Charradi', 'Abderrahman Sghir', 'Khalil El Khammar'],
    venue: 'arXiv preprint arXiv:2610.37624',
    year: '2026',
    url: 'https://arxiv.org/abs/2610.37624',
    note: 'This is v1. An improved version is in preparation and will be posted after conference submission.',
  },
];

export interface OpenSourceItem {
  title: string;
  year: string;
  description: string;
  url: string;
  tags: string[];
}

export const openSource: OpenSourceItem[] = [
  {
    title: 'china-universities',
    year: '2026',
    description:
      'Open dataset of 582 Chinese universities: names, location, 985/211 tags, rankings, and crests. 1,200+ downloads across Hugging Face and Kaggle.',
    url: 'https://huggingface.co/datasets/DAMIcn/china-universities',
    tags: ['Dataset', 'Hugging Face', 'Kaggle'],
  },
];

export interface Award {
  title: string;
  org: string;
  year: string;
  note?: string;
}

export const awards: Award[] = [
  {
    title: 'First-class Huashan Excellence Scholarship',
    org: 'Xidian University',
    year: '2026',
    note: '4 recipients school-wide',
  },
  {
    title: 'Merit-based scholarship',
    org: 'China Jiliang University',
    year: '2022 - 2026',
    note: 'Awarded four years in a row',
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
    title: 'Epigenetic Age Prediction: MAPLE Study',
    subtitle: 'DNA Methylation · In Progress',
    description:
      'Review and reproduction of MAPLE (Zhang et al., Nature Computational Science, 2026), a pairwise-learning epigenetic age predictor. Analyzing where its robustness comes from and how to use it at inference. Medical Information Processing course project.',
    tags: ['DNA Methylation', 'Pairwise Learning', 'Python', 'Reproduction'],
  },
  {
    title: 'AIRMN',
    subtitle: 'AI Community · Co-Founder',
    description:
      'AI Research Moroccan Network: a global community for AI researchers, students, and engineers connected to Morocco. Co-founded and grown to 100+ active contributors: paper discussions, conference deadline alerts, mentorship, and collaboration across institutions. Our multi-agent LLM paper stemmed from it.',
    tags: ['Community', 'Discord', 'AI Research'],
    repo: 'https://github.com/damitheswitch/airmn',
    live: 'https://discord.gg/w9jkvrNHWy',
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
    items: ['PyTorch', 'vLLM', 'TensorFlow', 'OpenCV', 'YOLO', 'Scikit-learn', 'XGBoost', 'Feature Engineering'],
  },
  {
    label: 'LLMs & Agent Systems',
    items: ['AI Agent Development', 'Multi-Agent Systems', 'Qwen / Llama / DeepSeek', 'RAG', 'LLM Integration', 'Vector Databases', 'Embeddings', 'Prompt Engineering', 'n8n'],
  },
  {
    label: 'Research Methods',
    items: ['LLM Evaluation', 'Benchmark Design', 'Ablations', 'Bootstrap Statistics'],
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
  { name: 'Back-End Web Development and Foundations', issuer: 'ALX Academy', date: 'Apr 2025' },
  { name: 'Seminar on Quality Infrastructure Construction and Connectivity', issuer: 'SAMRDRC · Certificate of Achievement', date: '2024' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', date: 'Aug 2024' },
  { name: 'Open P-TECH for Africa', issuer: 'INJAZ Al-Maghrib · Junior Achievement Worldwide', date: '2021' },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'C1' },
  { name: 'French', level: 'B2' },
  { name: 'Mandarin', level: 'HSK 3' },
];

export const volunteering = [
  {
    role: 'Co-Founder',
    org: 'AIRMN · AI Research Moroccan Network',
    period: 'Oct 2026 - Present',
    description: 'Online community for AI researchers connected to Morocco. Grew it to 100+ active contributors; the multi-agent LLM paper stemmed from a collaboration within it.',
  },
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
