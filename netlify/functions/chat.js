const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { message, conversationHistory } = JSON.parse(event.body);

    // API key from Netlify environment (server-side only)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const portfolioContext = `
    You are a helpful assistant for ${portfolioData.profile.name}'s portfolio website.

    Name: ${portfolioData.profile.name}
    Title: ${portfolioData.profile.title}
    Experience: ${portfolioData.about.experience}
    Email: ${portfolioData.profile.email}

    About: ${portfolioData.about.intro}
    Projects: ${portfolioData.projects.map((p) => `- ${p.title}: ${p.description}`).join("\n")}
    Hobbies: ${portfolioData.afterhours}

    Skills: ${portfolioData.techStack.frontend.join(", ")}, ${portfolioData.techStack.backend.join(", ")}

    Answer questions about this person's background, skills, and projects. Keep responses under 50 words.
    `;

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: portfolioContext }] },
        {
          role: "model",
          parts: [{ text: "I'll help answer questions about CJ's portfolio." }],
        },
        ...conversationHistory,
      ],
      generationConfig: {
        maxOutputTokens: 100,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ response }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process request" }),
    };
  }
};
