const PUBLIC_URL = process.env.PUBLIC_URL || "";

const assetPath = (path) => `${PUBLIC_URL}${path}`;

export const portfolioData = {
  profile: {
    name: "Cyril Josef A. Tinae",
    nickname: "CJ",
    title:
      "Aspiring Software Engineer | Specialized in Web Development & UI Design",
    location: "Cebu City, Philippines",
    email: "tinaecyriljosef@gmail.com",
    phone: "+63-917-193-7051",
    resumeUrl: assetPath("/assets/Cyril-Josef-Tinae_CV1.pdf"),
    profileImage: assetPath("/assets/images/profile.jpg"),
  },

  about: {
    intro:
      "I am an aspiring web developer and UI designer with a strong foundation in computer science, known for being adaptable, fast-learning, and creative, with a balanced sense of humor that informs my approach to problem-solving and design.",
    experience:
      "I am currently a sophomore Computer Science student at University of the Philippines, with experience in online programming courses and certifications, and a long-standing passion for technology developed since high school, including success in a pitching competition.",
    current:
      "At present, I am sharpening my web development and design skills through hands-on projects such as BudgetWise and Snippit, daily Figma and Leetcode practice, as I actively preparing to secure a project-based web development role within the month.",
  },

  techStack: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "C#"],
    backend: ["Node.js", "Python", "SQL", "Express", "Supabase", "C", "C++"],
    tools: ["Git", "VS Code", "Figma"],
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
    { title: "freeCodeCamp", subtitle: "Front End Development Libraries" },
  ],

  projects: [
    {
      title: "Ligtasyon Landing Page",
      description: "Applied sleek and intuitive UI in React + Vite",
      url: "ligtasyon-landing.netlify.app",
      type: "Web App",
    },
    {
      title: "BudgetWise Landing Page",
      description: "Dynamic, animated landing page in vanilla HTML/CSS/JS",
      url: "budgetwise-mvp.vercel.app",
      type: "Website",
    },
    {
      title: "Snippit Landing Page",
      description: "Animated and intuitive UI in React",
      url: "snippit-land.netlify.app",
      type: "Web App",
    },
    {
      title: "Design Projects",
      description: "UI and Layout Designs",
      url: "ceejt-design.netlify.app",
      type: "Creative Work",
    },
  ],

  goals: [
    "Launch my career as a web developer by securing a role where I can build real products as soon as possible.",
    "Generate my own income early this year by applying my skills in practical, client- or product-driven work.",
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
        "Following basketball and other sports. Go Spurs Go, Wemby my GOAT!",
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
