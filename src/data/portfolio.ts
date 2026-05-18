import {
  Brain,
  Code2,
  Database,
  Server,
  BarChart3,
  Bot,
  Cpu,
  Layers,
  GitBranch,
  Workflow,
  Zap,
  Shield,
  Cloud,
  Container,
  FileCode,
  type LucideIcon,
} from "lucide-react";

// ─── Owner Info ──────────────────────────────────────────────
export const owner = {
  name: "Vamseeswara Reddy Datla",
  firstName: "Vamseeswara",
  role: "AI/ML Engineer | Generative AI & Agentic AI Developer",
  summary:
    "AI/ML Engineer with hands-on experience in building LLM-powered applications, RAG systems, agentic workflows, and scalable AI architectures. Skilled in LangChain, LangGraph, vector databases, FastAPI, Docker, MCP, tool/function calling, and AI orchestration systems. Passionate about building production-ready AI systems, AI agents, and full stack GenAI applications.",
  location: "Bangalore, India",
  email: "vamsireddy.datla@gmail.com",
  github: "https://github.com/vamseeswar",
  linkedin: "https://www.linkedin.com/in/vamseeswara-reddy-datla-03a88b276?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resumeUrl: "/VamseeswaraReddy_AIML_Engineer_Resume.pdf",
  availabilityBadge:
    "Open to AI/ML, GenAI, and Software Engineering Opportunities",
};

// ─── About Highlights ────────────────────────────────────────
export const aboutHighlights: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "LLM Applications",
    description:
      "Building intelligent applications powered by large language models with advanced prompt engineering and fine-tuning strategies.",
    icon: Brain,
  },
  {
    title: "RAG Systems",
    description:
      "Designing retrieval-augmented generation pipelines with semantic search, chunking strategies, and reranking for precise context delivery.",
    icon: Database,
  },
  {
    title: "AI Agents",
    description:
      "Developing autonomous AI agents with tool calling, function execution, and decision-making capabilities for complex task automation.",
    icon: Bot,
  },
  {
    title: "Multi-Agent Workflows",
    description:
      "Orchestrating multi-agent systems with LangGraph for collaborative AI workflows, task delegation, and intelligent routing.",
    icon: Workflow,
  },
  {
    title: "Backend AI Infrastructure",
    description:
      "Building scalable backend systems with FastAPI, Docker, and microservices architecture to serve AI models in production.",
    icon: Server,
  },
  {
    title: "Production AI Systems",
    description:
      "End-to-end deployment of AI solutions with CI/CD pipelines, monitoring, and optimization for real-world production environments.",
    icon: Zap,
  },
];

// ─── Skills ──────────────────────────────────────────────────
export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI/ML & GenAI",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "LangChain", icon: Layers },
      { name: "LangGraph", icon: GitBranch },
      { name: "LlamaIndex", icon: Database },
      { name: "HuggingFace", icon: Brain },
      { name: "OpenAI", icon: Zap },
      { name: "RAG Systems", icon: Database },
      { name: "Prompt Engineering", icon: Cpu },
      { name: "Tool Calling", icon: Zap },
      { name: "Multi-Agent Systems", icon: Workflow },
      { name: "Model Fine-tuning", icon: Layers },
    ],
  },
  {
    category: "Core Machine Learning",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "PyTorch", icon: Cpu },
      { name: "TensorFlow", icon: Cpu },
      { name: "Scikit-Learn", icon: Brain },
      { name: "Computer Vision", icon: Zap },
      { name: "NLP", icon: Layers },
      { name: "Data Processing", icon: Database },
    ],
  },
  {
    category: "Programming",
    icon: Code2,
    color: "from-blue-500 to-purple-500",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "SQL", icon: FileCode },
    ],
  },
  {
    category: "Vector Databases",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Pinecone", icon: Database },
      { name: "FAISS", icon: Database },
      { name: "Weaviate", icon: Database },
      { name: "ChromaDB", icon: Database },
    ],
  },
  {
    category: "Backend & MLOps",
    icon: Server,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "FastAPI", icon: Zap },
      { name: "Docker", icon: Container },
      { name: "MLOps", icon: Workflow },
      { name: "AWS / GCP", icon: Cloud },
      { name: "CI/CD Pipelines", icon: GitBranch },
      { name: "Microservices", icon: Layers },
    ],
  },
  {
    category: "Databases & Data",
    icon: BarChart3,
    color: "from-yellow-500 to-amber-500",
    skills: [
      { name: "Redis", icon: Database },
      { name: "PostgreSQL", icon: FileCode },
      { name: "MongoDB", icon: Database },
      { name: "Pandas", icon: BarChart3 },
      { name: "NumPy", icon: BarChart3 },
    ],
  },
];

// ─── Experience ──────────────────────────────────────────────
export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  icon: LucideIcon;
  color: string;
}

export const experiences: Experience[] = [
  {
    title: "AI Engineer Intern",
    company: "Vrittify AI",
    period: "Jan 2026 – Mar 2026",
    responsibilities: [
      "Built LLM-powered applications using LangChain and FastAPI",
      "Designed RAG pipelines for intelligent document retrieval",
      "Developed multi-agent systems using LangGraph",
      "Integrated tool calling and workflow automation",
      "Deployed Dockerized AI services for production use",
    ],
    icon: Brain,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "AI Intern",
    company: "Infosys Springboard",
    period: "Sep 2025 – Oct 2025",
    responsibilities: [
      "Worked on AI and Generative AI concepts",
      "Learned prompt engineering and AI workflows",
      "Built foundational AI automation projects",
      "Explored intelligent systems and AI applications",
    ],
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
  },
];

// ─── Projects ────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  icon: LucideIcon;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "AI Data Analyst Agent",
    description:
      "An intelligent AI-powered analytics assistant that transforms natural language queries into actionable data insights with automated reporting workflows.",
    tech: ["Python", "LangChain", "FastAPI", "SQL", "Vector Databases"],
    features: [
      "AI-powered analytics assistant",
      "Natural language KPI generation",
      "RAG-based querying",
      "Automated reporting workflows",
    ],
    github: "https://github.com/vamseeswar/AI_Data_Analyst_Agent.git",
    demo: "https://ai-data-analyst-h793.onrender.com/",
    icon: BarChart3,
    gradient: "from-blue-600 via-purple-600 to-cyan-500",
  },
  {
    title: "RAG-Based Document Intelligence System",
    description:
      "A sophisticated document intelligence platform with semantic search capabilities, context-aware retrieval, and real-time querying for enterprise knowledge management.",
    tech: ["Python", "LangGraph", "FAISS", "FastAPI"],
    features: [
      "Semantic search",
      "Context-aware retrieval",
      "Chunking and reranking",
      "Real-time document querying",
    ],
    github: "https://github.com/vamseeswar/Advanced_RAG_QA_Chatbot.git",
    demo: "https://huggingface.co/spaces/Vamseeswar/Advanced_RAG_QA_Chatbot",
    icon: Database,
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
  },
  {
    title: "AI Code Generation Assistant",
    description:
      "A multi-agent code generation platform with AI reasoning pipelines, tool calling integration, and automated Docker deployment for streamlined development workflows.",
    tech: ["Python", "Flask", "LangChain", "LLM APIs"],
    features: [
      "Multi-agent code generation workflows",
      "Tool calling integration",
      "AI reasoning pipelines",
      "Docker deployment",
    ],
    github: "https://github.com/vamseeswar/AI_CODE_ASSISTANT.git",
    demo: "https://ai-code-assistant1.onrender.com/",
    icon: Code2,
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
];

// ─── Certifications ──────────────────────────────────────────
export interface Certification {
  title: string;
  issuer: string;
  icon: LucideIcon;
  color: string;
}

export const certifications: Certification[] = [
  {
    title: "Generative AI",
    issuer: "PrepInsta",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Prompt Engineering",
    issuer: "Infosys Springboard",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Artificial Intelligence Primer",
    issuer: "Infosys Springboard",
    icon: Bot,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Gen AI Data Analytics",
    issuer: "Forage",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Python Advanced Certificate",
    issuer: "Programming Hub",
    icon: FileCode,
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Python Programming & SQL",
    issuer: "ExcelR",
    icon: Database,
    color: "from-amber-400 to-orange-500",
  },
];

// ─── Education ───────────────────────────────────────────────
export interface Education {
  degree: string;
  institution: string;
  score: string;
  period: string;
}

export const education: Education[] = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Sri Venkateswara College of Engineering and Technology, Chittoor, India",
    score: "CGPA: 8.89/10",
    period: "2022 – 2026",
  },
  {
    degree: "Intermediate MPC",
    institution: "Vijayawada Nalanda Junior College, Nandyal, India",
    score: "Percentage: 96.3%",
    period: "2020 – 2022",
  },
  {
    degree: "SSC",
    institution: "Sri Vasavi High School, Nandyal, India",
    score: "Percentage: 97.1%",
    period: "2019 – 2020",
  },
];

// ─── Navigation ──────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ─── Stats ───────────────────────────────────────────────────
export const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "AI Agents Deployed", value: 5, suffix: "+" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Lines of AI Code", value: 50, suffix: "K+" },
];
