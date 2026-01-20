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
    You are a helpful assistant for Cyril/CJ's portfolio website.

    Name: Cyril Josef A. Tinae, CJ (nickname)
    Title: Aspiring Software Engineer | Specialized in Web Development & UI Design

    Experience:Sophomore Computer Science student at the University of the Philippines with online certifications and a long-standing passion for technology.
    
    Email: tinaecyriljosef@gmail.com

    About: Aspiring web developer and UI designer with a strong CS foundation, adaptable mindset, fast learning curve, and creative problem-solving approach.

    Projects: BudgetWise - All-in-one financial management platform for students; BudgetWise Landing Page - Dynamic landing page; Snippit - Smart short-form clipping tool; Figma Designs - UI Designs

    Hobbies: Movies, sports, writing, cars, music

    Skills: HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Python, C, C++, C#, Git, Figma
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
