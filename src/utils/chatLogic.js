import { portfolioData } from "../data/portfolioData";

const responses = {
  greetings: [
    "Hi! I'm TinAI, CJ's portfolio assistant. Ask me about his skills, projects, or experience! 🤖👋",
    "Hello! I can help you learn more about Cyril's work. What interests you?",
    "Hey there! Feel free to ask about Cyril's background, projects, or technical skills!",
  ],

  skills: {
    general: `Cyril's tech stack includes:\n🎨 Frontend: ${portfolioData.techStack.frontend.join(", ")}\n⚙️ Backend: ${portfolioData.techStack.backend.join(", ")}\n🛠️ Tools: ${portfolioData.techStack.tools.join(", ")}`,
    frontend: `For frontend development, Cyril uses ${portfolioData.techStack.frontend.join(", ")}. He's particularly skilled in React and Tailwind CSS!`,
    backend: `On the backend, Cyril works with ${portfolioData.techStack.backend.join(", ")}.`,
    tools: `Cyril's development tools include ${portfolioData.techStack.tools.join(", ")}.`,
  },

  projects: {
    general: `Cyril has worked on: ${portfolioData.projects.map((p) => p.title).join(", ")}.`,
    portfolio: `This portfolio website! Built with React, Tailwind CSS, featuring dark mode, responsive design, and an AI chatbot (that's me! 🤖).`,
    count: `Cyril has completed ${portfolioData.projects.length} major projects showcasing his full-stack development skills.`,
  },

  experience: `CJ is a CS student passionate about web development, with hands-on experience in React, Tailwind CSS, and full-stack projects.`,

  education: `Cyril is a sophomore BS Computer Science student in UP with intermediate skills in C/C++ and beginner web development knowledge.`,

  contact: {
    general: `📧 Email: ${portfolioData.profile.email}\n📱 Phone: ${portfolioData.profile.phone}\n📍 Location: ${portfolioData.profile.location}`,
    email: `You can email Cyril at ${portfolioData.profile.email}`,
    phone: `Call Cyril at ${portfolioData.profile.phone}`,
    social: `Connect with Cyril on LinkedIn, GitHub, Instagram, or Facebook! Links are in the contact section.`,
  },

  languages: `Cyril speaks ${portfolioData.techStack.languages.map((l) => `${l.name} (${l.level})`).join(", ")}.`,

  location: `Cyril is based in ${portfolioData.profile.location}, Philippines.`,

  resume: `You can view and download Cyril's resume by clicking the "View Resume" button at the top of the page!`,

  goals: portfolioData.goals
    ? `Cyril's goals include: ${portfolioData.goals.join(", ")}`
    : "Cyril is focused on continuous learning and building impactful projects!",

  afterhours: `CJ's hobbies include ${portfolioData.afterhours.map((h) => h.title).join(", ")}.`,

  default: [
    "I'm not quite sure about that! Try asking about:\n• Skills & technologies\n• Projects & work\n• Experience & education\n• Contact information",
    "Hmm, I don't have that info. I can tell you about Cyril's skills, projects, background, or how to reach him!",
    "That's outside my knowledge base! Ask me about technical skills, projects, experience, or contact details. 🤔",
    "That's outside my scope! Feel free to contact him instead!",
  ],
};

const patterns = {
  greetings:
    /\b(hi|hello|hey|greetings|good morning|good afternoon|good evening|sup|yo)\b/i,
  skills: {
    general:
      /\b(skill|skills|technology|technologies|tech stack|programming|what.*know|can.*do|technologies)\b/i,
    frontend:
      /\b(frontend|front-end|react|html|css|javascript|tailwind|ui|ux)\b/i,
    backend: /\b(backend|back-end|server|node|python|database|api)\b/i,
    tools: /\b(tool|software|git|github|vscode|figma|postman)\b/i,
  },
  projects: {
    general:
      /\b(project|work|portfolio|built|created|developed|made|what projects|worked on)\b/i,
    portfolio: /\b(this site|this website|this portfolio|portfolio site)\b/i,
    count: /\b(how many|number of)\b/i,
  },
  experience:
    /\b(experience|background|about|who|bio|story|journey|tell me about)\b/i,
  education:
    /\b(education|study|school|university|degree|student|college|learning)\b/i,
  contact: {
    general: /\b(contact|reach|get in touch|connect)\b/i,
    email: /\b(email|mail|send message)\b/i,
    phone: /\b(phone|call|number|mobile)\b/i,
    social: /\b(social|linkedin|github|instagram|facebook|follow)\b/i,
  },
  languages: /\b(language|speak|bilingual|fluent|filipino|english)\b/i,
  location: /\b(location|where|live|based|from)\b/i,
  resume: /\b(resume|cv|curriculum|download|pdf)\b/i,
  goals: /\b(goals|aim|future|plan|aspiration|want|hope)\b/i,
  afterhours: /\b(hobbies|afterhours|after working|interests|what hobbies)\b/i,
};

const cache = new Map();
const CACHE_DURATION = 10 * 60 * 1000;

const getCachedResponse = (query) => {
  const key = query.toLowerCase().trim();
  const cached = cache.get(key);
  if (cached && Date.now() - cached.time < CACHE_DURATION) {
    return cached.response;
  }
  return null;
};

const setCachedResponse = (query, response) => {
  cache.set(query.toLowerCase().trim(), {
    response,
    time: Date.now(),
  });
};

const matchResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  // greetings
  if (patterns.greetings.test(lowerMessage)) {
    return responses.greetings[
      Math.floor(Math.random() * responses.greetings.length)
    ];
  }

  // skills
  if (patterns.skills.frontend.test(lowerMessage))
    return responses.skills.frontend;
  if (patterns.skills.backend.test(lowerMessage))
    return responses.skills.backend;
  if (patterns.skills.tools.test(lowerMessage)) return responses.skills.tools;
  if (patterns.skills.general.test(lowerMessage))
    return responses.skills.general;

  // projects
  if (patterns.projects.portfolio.test(lowerMessage))
    return responses.projects.portfolio;
  if (patterns.projects.count.test(lowerMessage))
    return responses.projects.count;
  if (patterns.projects.general.test(lowerMessage))
    return responses.projects.general;

  // contact
  if (patterns.contact.email.test(lowerMessage)) return responses.contact.email;
  if (patterns.contact.phone.test(lowerMessage)) return responses.contact.phone;
  if (patterns.contact.social.test(lowerMessage))
    return responses.contact.social;
  if (patterns.contact.general.test(lowerMessage))
    return responses.contact.general;

  // etc
  if (patterns.experience.test(lowerMessage)) return responses.experience;
  if (patterns.education.test(lowerMessage)) return responses.education;
  if (patterns.languages.test(lowerMessage)) return responses.languages;
  if (patterns.location.test(lowerMessage)) return responses.location;
  if (patterns.resume.test(lowerMessage)) return responses.resume;
  if (patterns.goals.test(lowerMessage)) return responses.goals;
  if (patterns.afterhours.test(lowerMessage)) return responses.afterhours;

  // default
  return responses.default[
    Math.floor(Math.random() * responses.default.length)
  ];
};

export const sendMessage = async (userMessage, conversationHistory = []) => {
  const cached = getCachedResponse(userMessage);
  if (cached) return cached;

  // simulate natural typing delay
  await new Promise((resolve) =>
    setTimeout(resolve, 400 + Math.random() * 200),
  );

  const response = matchResponse(userMessage);
  setCachedResponse(userMessage, response);

  return response;
};

export const getSuggestions = () => [
  "Tell me about CJ's experience",
  "What projects has CJ worked on?",
  "What are CJ's technical skills?",
  "How can I contact CJ?",
];
