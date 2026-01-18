import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioData } from "../data/portfolioData";

const genAI = new GoogleGenerativeAI(
  process.env.REACT_APP_GEMINI_API_KEY || "",
);

const portfolioContext = `
You are a helpful assistant for ${portfolioData.profile.name}'s portfolio website.

Name: ${portfolioData.profile.name}
Title: ${portfolioData.profile.title}
Email: ${portfolioData.profile.email}

About: ${portfolioData.about.intro}

Skills: ${portfolioData.techStack.frontend.join(", ")}, ${portfolioData.techStack.backend.join(", ")}

Please answer questions about this person's background, skills, and projects. Keep responses concise and friendly.
`;

export const sendMessage = async (userMessage, conversationHistory = []) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const messages = [
      { role: "user", parts: [{ text: portfolioContext }] },
      {
        role: "model",
        parts: [
          {
            text: "I understand. I'm here to help answer questions about Cyril's portfolio. How can I help you?",
          },
        ],
      },
      ...conversationHistory,
      { role: "user", parts: [{ text: userMessage }] },
    ];

    const chat = model.startChat({
      history: messages.slice(0, -1),
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("API key")) {
      return "I'm having trouble connecting. Please check the API key configuration.";
    }
    return "I'm having trouble responding right now. Please try again.";
  }
};

export const getSuggestions = () => {
  return [
    "Tell me about Cyril's experience",
    "What projects has Cyril worked on?",
    "What are Cyril's technical skills ? ",
    "How can I contact Cyril?",
  ];
};
