const cache = new Map();
const CACHE_DURATION = 10 * 60 * 1000;

const getCachedResponse = (query) => {
  const key = query.toLowerCase().trim();
  const cached = cache.get(key);
  if (cached && Date.now() - cached.time < CACHE_DURATION) {
    console.log("Cache hit!");
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

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const retryWithBackoff = async (fn, maxRetries = 2) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.message?.includes("quota")) {
        const waitTime = Math.pow(2, i) * 3000;
        console.log(`Rate limit. Waiting ${waitTime / 1000}s...`);
        await wait(waitTime);
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries reached.");
};

export const sendMessage = async (userMessage, conversationHistory = []) => {
  try {
    const cached = getCachedResponse(userMessage);
    if (cached) return cached;

    // Call Netlify Function instead of direct API
    const response = await retryWithBackoff(async () => {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: conversationHistory,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      return await res.json();
    });

    const text = response.response;
    setCachedResponse(userMessage, text);
    return text;
  } catch (error) {
    console.error("API Error:", error);

    if (error.message?.includes("quota")) {
      return "I'm at my rate limit. Please wait 30 seconds and try again! ^^";
    }

    return "Sorry, I'm having trouble right now :( Please try again in a moment.";
  }
};

export const getSuggestions = () => {
  return [
    "Tell me about CJ's experience",
    "What projects has CJ worked on?",
    "What are CJ's technical skills ? ",
    "How can I contact CJ?",
  ];
};
