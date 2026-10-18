const PUBLIC_URL = process.env.PUBLIC_URL || "";

const assetPath = (path) => `${PUBLIC_URL}${path}`;

export const portfolioData = {
  profile: {
    name: "Cyril Josef A. Tinae",
    nickname: "CJ",
    title: "Fullstack Developer & Designer | AI Integration",
    location: "Cebu City, Philippines",
    email: "tinaecyriljosef@gmail.com",
    phone: "+63-917-193-7051",
    resumeUrl: assetPath("/assets/cj-tinae-2.pdf"),
    profileImage: assetPath("/assets/images/profile.jpg"),
  },

  about: {
    intro:
      "I am a fullstack developer and designer who builds web products and adds AI features to them. I study Computer Science at the University of the Philippines Cebu (Cum Laude standing, expected July 2028).",
    experience:
      "In 2026, I worked as a fullstack developer at InstaCode, where I built Vue.js features, an AI coach chat widget, and an MCP server integration. At XGrowth, I manage a real estate website end to end: I design in Figma, build on Snapps (Duda), and handle the technical side, including the PHP and MySQL listing backend, MLS integration, and DNS and server issues.",
    current:
      "Right now, I am building personal projects like BudgetWise and FinFlow, and I am looking for a full-time fullstack or AI integration role.",
  },

  experience: [
    {
      company: "InstaCode",
      role: "Fullstack Developer",
      type: "Full-time, Remote",
      period: "Mar 2026 - Aug 2026",
      highlights: [
        "Built a notes feature in Vue.js with dynamic filtering, category management, inline editing, and unit tests.",
        "Built the My Plan feature: active achievement, daily log, action checklist, and full plan view, with shared progress and status logic.",
        "Developed a Groq-based AI coach chat widget with context-aware prompts, suggested prompt chips, and markdown responses.",
        "Integrated the InstaCode MCP server so AI agents can query app data, and fixed data-visibility bugs from missing foreign-key links.",
        "Contributed to a JSON-driven datatype schema engine for validation, test-data generation, and database type mapping.",
      ],
    },
    {
      company: "XGrowth",
      role: "Website Manager & Designer",
      type: "Full-time, Remote",
      period: "Mar 2026 - Oct 2026",
      highlights: [
        "Designed layouts in Figma and built 1440px HTML drafts for 8+ real estate pages on a shared design system.",
        "Implemented approved designs on the Snapps (Duda) site builder, from draft to live deployment.",
        "Fixed responsive issues caused by the builder re-applying inline styles, using grid and breakpoint settings.",
        "Handled backend and server work: the PHP and MySQL MLS listing system, MLS data integration, and DNS and Cloudflare diagnostics.",
        "Managed a real estate CRM, keeping listings, client records, and workflow updates accurate.",
      ],
    },
  ],

  techStack: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vue",
      "Next.js",
      "Vite",
      "Typescript",
    ],
    backend: [
      "PHP",
      "SQL",
      "PostgreSQL",
      "Node.js",
      "Python",
      "Express",
      "Supabase",
      "Docker",
      "C",
      "C++",
      "C#",
    ],
    ai: [
      "LLM Integration",
      "Groq API",
      "Claude API",
      "MCP",
      "OpenAI API",
      "Prompt Engineering",
      "Embeddings",
      "Vector Databases",
      "RAG",
      "Function Calling",
      "Hugging Face",
      "LLMOps",
    ],
    aiTools: ["Claude Code", "Codex", "Gemini", "GitHub Copilot"],
    tools: [
      "Git",
      "VS Code",
      "Figma",
      "Canva",
      "Lightroom",
      "Photoshop",
      "DaVinci Resolve",
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Filipino", level: "Fluent" },
      { name: "Bisaya", level: "Native" },
      { name: "Chavacano", level: "Native" },
    ],
  },

  leadership: [
    {
      title: "Hire me!",
      description: "Actively seeking for employment",
      year: "2026",
    },
    {
      title: "CMSC 130 Project Showcase",
      description: "3rd Place",
      year: "2025",
    },
    {
      title: "The Odin Project",
      description: "Completed HTML and CSS Course",
      year: "2025",
    },
    {
      title: "BS Computer Science",
      description: "University of the Philippines - Cebu",
      year: "2024",
    },
    {
      title: "Ateneo de Zamboanga University",
      description: "Graduated with High Honors",
      year: "2024",
    },
    {
      title: "DICT Regional Pitching Competition",
      description:
        "Placed 4th against collegteams in startup pitch competitition",
      year: "2024",
    },
    {
      title: "Eureka Stem AO",
      description: "Secretary",
      year: "2023",
    },
    {
      title: "The Oculus Publications",
      description: "Sports Editor",
      year: "2023",
    },
    {
      title: "First Build",
      description: "Learned Scratch and Arduino robotics in Grade 8",
      year: "2019",
    },
  ],

  certifications: [
    {
      title: "Datacamp",
      subtitle: "Building AI Applications with Pinecone",
      url: assetPath("/assets/certificates/pinecone.pdf"),
    },
    {
      title: "Datacamp",
      subtitle: "Introduction to Embeddings with the OpenAI API",
      url: assetPath("/assets/certificates/embeddings-openai.pdf"),
    },
    {
      title: "Datacamp",
      subtitle: "Developing AI Systems with the OpenAI API",
      url: assetPath("/assets/certificates/developing-ai-systems-openai.pdf"),
    },
    {
      title: "Datacamp",
      subtitle: "LLMOps Concepts",
      url: assetPath("/assets/certificates/llmops-concepts.pdf"),
    },
    {
      title: "Datacamp",
      subtitle: "Working with Hugging Face",
      url: assetPath("/assets/certificates/hugging-face.pdf"),
    },
    {
      title: "Datacamp",
      subtitle: "Prompt Engineering with the OpenAI API",
      url: assetPath("/assets/certificates/prompt-engineering-openai.pdf"),
    },
    {
      title: "Datacamp",
      subtitle: "Software Engineering Principles in Python",
      url: assetPath("/assets/certificates/software-engineering-python.pdf"),
    },
    {
      title: "Datacamp",
      subtitle: "Working with the OpenAI API",
      url: assetPath("/assets/certificates/working-with-openai-api.pdf"),
    },
    {
      title: "Datacamp",
      subtitle: "Introduction to Python",
      url: assetPath("/assets/certificates/intro-to-python.pdf"),
    },
    {
      title: "Datacamp",
      subtitle: "Intermediate SQL",
      url: assetPath("/assets/certificates/intermediate-sql.pdf"),
    },
    {
      title: "The Odin Project",
      subtitle: "Advanced HTML and CSS",
      url: "https://ceejt-portfolio.netlify.app/",
    },
    {
      title: "The Odin Project",
      subtitle: "Intermediate HTML and CSS",
      url: "https://ceejt.github.io/odin-dashboard/",
    },
    {
      title: "The Odin Project",
      subtitle: "Foundations Course",
      url: "https://ceejt.github.io/odin-calculator/",
    },
  ],

  projects: [
    {
      title: "BudgetWise",
      description:
        "Fullstack finance app in Next.js and Supabase with income and expense tracking, e-wallet integrations, and AI financial tips ",
      url: "budgetwise-lvm.vercel.app",
      type: "Website",
    },
    {
      title: "FinFlow",
      description:
        "Local-first financial advisor skill in Python that projects cash flow and answers affordability questions, with a private JSON profile",
      url: "github.com/ceejt/finflow",
      type: "Tool",
    },
    {
      title: "Ligtasyon Landing Page",
      description: "Applied sleek and intuitive UI in React + Vite",
      url: "ligtasyon-landing.vercel.app",
      type: "Web App",
    },

    {
      title: "Snippit Landing Page",
      description: "Animated and intuitive UI in React",
      url: "snippit-landing.vercel.app",
      type: "Web App",
    },
    {
      title: "Design Projects",
      description: "UI and Layout Designs",
      url: "ceejt-design.vercel.app",
      type: "Creative Work",
    },
  ],

  goals: [
    "Join a team as a fullstack or AI integration developer, where I can ship real product features.",
    "Keep building AI-powered tools, such as chat assistants and MCP integrations, and grow toward an AI engineering role.",
    "I am currently studying and working towards earning my first AWS cloud certification",
  ],

  afterhours: [
    {
      title: "Films",
      description:
        "Watching films and logging thoughts as I go. (Letterboxd: feelm_ct -lets be friends)",
    },
    {
      title: "Sports",
      description:
        "Following basketball and other sports. (P.S. I got Spurs winning it all this year, if not, next year!)",
    },
    {
      title: "Writing",
      description:
        "Writing about sports beyond the scoreboard-articles, breakdowns, feature",
    },
    {
      title: "Cars",
      description:
        "Learning how cars are engineered and reviewed. P.S. dream car: Mazda 3",
    },
  ],

  social: {
    linkedin: "https://linkedin.com/in/cj-tinae",
    github: "https://github.com/ceejt",
    instagram: "https://instagram.com/cyriljosef",
    facebook: "https://facebook.com/cyriljosef.tinae",
    fiverr: "http://www.fiverr.com/s/VYEPPVl",
    onlinejobs: "https://www.onlinejobs.ph/jobseekers/info/4236840",
  },

  gallery: [
    assetPath("/assets/images/gallery/gallery-1.jpg"),
    assetPath("/assets/images/gallery/gallery-2.jpg"),
    assetPath("/assets/images/gallery/gallery-3.jpeg"),
    assetPath("/assets/images/gallery/gallery-4.jpg"),
    assetPath("/assets/images/gallery/gallery-5.jpg"),
    assetPath("/assets/images/gallery/gallery-6.jpg"),
    assetPath("/assets/images/gallery/gallery-7.jpg"),
    assetPath("/assets/images/gallery/gallery-8.jpg"),
  ],
};
