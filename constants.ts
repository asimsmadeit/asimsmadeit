import { Project, BlogPost, ResearchProblem, RssItem, Publication } from './types';

export const MY_NAME = "Anna Sims";
export const MY_ROLE = "Data Science";
export const MY_AFFILIATION = "University of Michigan, College of Engineering";
export const MY_EMAIL = "tesims@umich.edu";
export const MY_BIO = "Hi, I'm Anna. I study what's happening inside AI systems before it becomes a problem";
export const CURRENT_FOCUS = "I've had a winding path to get here. I built cognitive architectures for negotiating agents during Google Summer of Code with DeepMind, worked on deep hedging at a crypto trading desk, developed multimodal video pipelines as a ByteDance fellow, and won an Intel prize for an AI DJ at a hackathon. Outside of research I play racquetball, do CNC machining for clay engraving, and use computer vision to find ancient structures hiding in satellite data.";
export const RESUME_URL = "/resume.pdf"; // Point to where you will upload your actual PDF file

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/asimsmadeit" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/teannasims/" },
  { name: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=QbNVQBkAAAAJ" },
  { name: "Twitter", url: "https://x.com/asimsmadeit" },
  { name: "Instagram", url: "https://instagram.com/asimsmadeit" }
];

export const RESUME_DATA = {
  education: {
    school: "University of Michigan",
    location: "Ann Arbor, MI",
    degree: "Bachelor of Science in Data Science, Minor in Business",
    date: "December 2026",
    details: [
      "Linear Algebra, Data Structures and Algorithms, Probability, Statistics, Numerical Analysis, Machine Learning",
      "Competitions: 1st Place Best Use of Intel AI, MHacks; Runner Up, JPMorgan Data for Good; Most Marvelous, HackMIT; Top 5, Google x MHacks AI Hackathon"
    ]
  },
  experience: [
    {
      role: "Research Fellow",
      company: "Supervised Program for Alignment Research (SPAR)",
      location: "Remote",
      date: "Feb. 2026 – May 2026",
      points: [
        "Building a coding agent that distills verified behavior traces from a neurosymbolic planner into a neural policy, combining theory of mind about user intent with formal safety constraints to produce safer agentic systems. Advised by Professor Dylan Hadfield-Menell in the Algorithmic Alignment Group at MIT CSAIL."
      ]
    },
    {
      role: "Incoming Data Science Analyst Intern",
      company: "JPMorgan Chase",
      location: "Plano, TX",
      date: "Summer 2026",
      points: [
        "Incoming summer 2026 intern on the Data Science Analyst team."
      ]
    },
    {
      role: "Open Source Developer",
      company: "Google Summer of Code, DeepMind",
      location: "Remote",
      date: "May 2025 – Sept 2025",
      points: [
        "Designed a modular system that gives these AI agents the ability to negotiate. I built 'cognitive blocks' like empathy, cultural awareness, and strategy that researchers can mix and match to create complex agents, along with a 'referee' system to manage the rules of the deal. This turned a manual coding process into a scalable, plug-and-play research tool."
      ]
    },
    {
      role: "Innovator Fellow",
      company: "ByteDance",
      location: "San Jose, CA",
      date: "May 2024 – Nov. 2024",
      points: [
        "Developed a multimodal masking pipeline, created from the ground up to maintain essential video context for AI model fine-tuning, improving upon standard masking methods using synthetic data generation and pseudonymization techniques."
      ]
    },
    {
      role: "Undergraduate Research Assistant",
      company: "Strategic Reasoning Group, University of Michigan",
      location: "Ann Arbor, MI",
      date: "Sept. 2022 – Aug. 2023",
      points: [
        "Transitioned a Java-based trading simulator to Python, improving simulation speed and scalability, which facilitated more comprehensive strategy analysis.",
        "Researched and built deep reinforcement learning models to analyze the real-world effectiveness of deep hedging, providing critical insights for their application in dynamic market environments."
      ]
    },
    {
      role: "Sales and Trading Analyst",
      company: "Genesis Global Trading",
      location: "New York, NY",
      date: "May 2022 – Aug. 2022",
      points: [
        "Built a machine learning model to identify optimal hedging strategies by integrating Imaki’s no-transaction band network into Buhler’s Deep Hedging framework, utilizing neural networks to address transaction costs and enhance risk management."
      ]
    },
    {
      role: "Undergraduate Research Assistant",
      company: "ASSET Lab, University of Michigan",
      location: "Ann Arbor, MI",
      date: "Jun. 2020 – May 2022",
      points: [
        "Improved the understanding of emissions performance by analyzing large datasets and developing comparison models for diesel vs. solar-powered motorcycles, contributing to sustainable transportation research.",
        "Co-authored a paper detailing the emissions impacts of electrifying motorcycle taxis in Kampala, Uganda"
      ]
    }
  ],
  projects: [
    {
      title: "Head-to-Head LLM Evaluation",
      tech: "Python, scikit-learn, sentence-transformers, Claude, transformers, AWS",
      points: [
        "Built custom head-to-head LLM evaluation framework for closed models that covered 13 different prompt categories combining LLM-as-a-Judge and human evaluations"
      ]
    },
    {
      title: "Detecting Emergent Deception via Multi-Agent Negotiation",
      tech: "TransformerLens, PyTorch, Concordia",
      points: [
        "Applied linear probing to detect emergent deception in multi-agent negotiations where cognitive modules create strategic incentives for misrepresentation; used Concordia’s GM observation layer to generate ground-truth labels comparing agent intent versus output, then probed Gemma 2B activations across 18 layers."
      ]
    },
    {
      title: "Automated Red Teaming",
      tech: "Python, CUDA, PyTorch, Concordia, Gemini, Git, Docker",
      points: [
        "Adapted social science simulation framework to automate LLM vulnerability discovery by orchestrating multi-agent adversarial attacks, repurposing gen agent behaviors to systematically probe LLM architectures for safety flaws."
      ]
    }
  ],
  skills: "Python, C/C++, SQL (PostgreSQL), FastAPI, Pandas, NumPy, PyTorch, OpenCV, MediaPipe, Pydantic, Pytest"
};

export const RESEARCH_PROBLEMS: ResearchProblem[] = [
  {
    id: '1',
    question: "Can we catch deception models won't admit to?",
    context: "Using activation probes to detect lying that emerges on its own, not from explicit instructions, and that stays internal, never showing up in the model's actual outputs."
  },
  {
    id: '2',
    question: "Is raising AI safer than patching it?",
    context: "Testing whether gradual learning, stable values, and multi-agent interaction can build AI with a coherent sense of self—instead of waiting for problems and fixing them after the fact."
  },
  {
    id: '3',
    question: "Can interpretability flag bad predictions before deployment?",
    context: "For agentic systems making calls about human behavior: using internal states to catch confabulation and predict failures without needing ground truth labels to train on."
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Detecting Emergent Deception via Mechanistic Interpretability',
    description: 'Built a deception detection pipeline using linear probes on Gemma 2B activations via TransformerLens. Key finding: cross-scenario generalization fails completely—no universal "deception direction" in activation space. Models encode deception-relevant information they don\'t acknowledge in outputs.',
    image: 'https://picsum.photos/800/500?grayscale&blur=2',
    tags: ['Mechanistic Interpretability', 'TransformerLens', 'Probing'],
    context: 'APART AI Manipulation Hackathon',
    link: '#'
  },
  {
    id: '2',
    title: 'Multi-Agent Cognitive Architecture for Negotiation',
    description: '14-module dual-layer cognitive architecture for DeepMind\'s Concordia framework. Agent-side modules (Theory of Mind, Cultural Adaptation, Temporal Strategy, Swarm Intelligence, Uncertainty Aware, Strategy Evolution) + 6 Game Master modules providing ground-truth labels for agent behaviors.',
    image: 'https://picsum.photos/800/500?grayscale&blur=2',
    tags: ['Multi-Agent Systems', 'LLM Agents', 'Simulation'],
    context: 'GSoC 25 — DeepMind',
    link: '#'
  },
  {
    id: '3',
    title: 'Context-Preserving Multimodal Masking Pipeline',
    description: 'Developed an open-source pipeline that maintains essential video context during privacy-preserving preprocessing for VLM fine-tuning. Uses GNN entity tracking, dense video captioning, and synthetic data generation. Standard masking destroys semantic structure—mine doesn\'t.',
    image: 'https://picsum.photos/800/500?grayscale&blur=2',
    tags: ['Computer Vision', 'GNN', 'Privacy', 'Multimodal'],
    context: 'ByteDance Innovator Fellowship',
    link: '#'
  },
  {
    id: '4',
    title: 'The Quality Paradox: LLM Evaluation Framework',
    description: 'Discovered that traditional automated metrics are negatively correlated with human preference.',
    image: 'https://picsum.photos/800/500?grayscale&blur=2',
    tags: ['Evaluation', 'Human Preference', 'RLHF'],
    context: 'Contract',
    link: '#'
  },
  {
    id: '5',
    title: 'ArcheoVLM: Automated Archaeological Discovery',
    description: 'End-to-end pipeline processing 3,154 LiDAR tiles from the Brazilian Amazon using hybrid YOLO + GPT-4V detection. Identified 36 potential pre-Columbian sites including 3 flagged for immediate field investigation. Demonstrates VLMs can do scientific discovery, not just classification.',
    image: 'https://picsum.photos/800/500?grayscale&blur=2',
    tags: ['VLMs', 'LiDAR', 'Computer Vision', 'Scientific Discovery'],
    context: 'OpenAI to Z Challenge',
    link: '#'
  },
  {
    id: '6',
    title: 'Adversarial Multi-Agent Red-Teaming System',
    description: 'Repurposed my Concordia multi-agent infrastructure into an adversarial testing system. Four specialized agents (Systematic Prober, Novelty-Seeker, Multi-Model Generator, Chaos Agent) running in parallel. Found 208 vulnerabilities across 17 categories including a universal chain-of-thought exposure technique.',
    image: 'https://picsum.photos/800/500?grayscale&blur=2',
    tags: ['Red Teaming', 'Security', 'Multi-Agent'],
    context: 'Red‑Teaming Challenge',
    link: '#'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    venue: 'NeurIPS 2023',
    title: 'Sparse Autoencoders for Interpretability',
    authors: 'A. Rivera, S. Connor, J. Doe',
    linkPdf: '#',
    linkCode: '#'
  },
  {
    id: '2',
    venue: 'ICLR 2024',
    title: 'Chain-of-Thought Topology',
    authors: 'A. Rivera, J. Smith',
    linkPdf: '#',
    linkCode: '#'
  }
];

export const RSS_FEED: RssItem[] = [
  { id: '1', source: 'Substack', title: 'Building a Multi-Agent Negotiation Framework for Concordia: My GSoC 2025 Journey', date: 'Sep 01, 2025', url: 'https://sycorpia.substack.com/p/building-a-multi-agent-negotiation' },
  { id: '2', source: 'Substack', title: 'Ghost Fighting, Imposter Syndrome, and Cuddly Nephews: My Weekend at HackMIT', date: 'Sep 23, 2024', url: 'https://sycorpia.substack.com/p/ghost-fighting-imposter-syndrome' },
  { id: '3', source: 'Substack', title: 'Best Tutorials + Resources to Build from Scratch, Not Copying Code', date: 'Jul 19, 2024', url: 'https://sycorpia.substack.com/p/best-tutorials-resources-to-build' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Multi-Agent Negotiation Framework for Concordia: My GSoC 2025 Journey',
    date: 'Sep 01, 2025',
    excerpt: 'A comprehensive negotiation system with emotional intelligence, cultural awareness, and strategic learning for AI agents',
    link: 'https://sycorpia.substack.com/p/building-a-multi-agent-negotiation'
  },
  {
    id: '2',
    title: 'Ghost Fighting, Imposter Syndrome, and Cuddly Nephews: My Weekend at HackMIT',
    date: 'Sep 23, 2024',
    excerpt: 'This past weekend, I flew on to Boston for HackMIT, competing against 215 other totally cracked teams in a 24-hour caffeine-fueled showdown to turn our wildest ideas into reality.',
    link: 'https://sycorpia.substack.com/p/ghost-fighting-imposter-syndrome'
  },
  {
    id: '3',
    title: 'Best Tutorials + Resources to Build from Scratch, Not Copying Code',
    date: 'Jul 19, 2024',
    excerpt: 'Built for programmers who learn by doing, not watching or reading. Tutorials cover key skill sets in computer vision, ML + AI, and data engineering.',
    link: 'https://sycorpia.substack.com/p/best-tutorials-resources-to-build'
  }
];