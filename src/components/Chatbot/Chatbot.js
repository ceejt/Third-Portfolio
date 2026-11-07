import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { sendMessage, getSuggestions } from "../../utils/chatLogic";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm TinAI, helping you learn more about Cyril's portfolio. Feel free to ask me anything!",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [showHint, setShowHint] = useState(false);

  // Show the label once after load so first-time visitors notice the button.
  useEffect(() => {
    const on = setTimeout(() => setShowHint(true), 2000);
    const off = setTimeout(() => setShowHint(false), 6500);
    return () => {
      clearTimeout(on);
      clearTimeout(off);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (userMessage) => {
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const conversationHistory = messages.map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      }));

      const response = await sendMessage(userMessage, conversationHistory);

      setMessages([...newMessages, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "I'm sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-light-card dark:bg-dark-card border border-border rounded-lg shadow-2xl flex flex-col animate-slide-up z-40">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="font-semibold">TinAI</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {getSuggestions()
                .slice(0, 3)
                .map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs px-3 py-1 bg-light-bg dark:bg-dark-bg border border-border rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
            </div>
          )}

          <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
        </div>
      )}

      {/* Floating button: icon that widens to show its name */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex h-12 items-center overflow-hidden rounded-full bg-secondary text-white shadow-lg transition-colors duration-200 hover:bg-accent focus-visible:bg-accent dark:bg-primary dark:text-secondary dark:hover:bg-accent dark:focus-visible:bg-accent"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          aria-expanded={isOpen}
        >
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center">
            {isOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            )}
            {!isOpen && (
              <span className="absolute right-2 top-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:animate-none"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
            )}
          </span>

          <span
            className={`grid min-w-0 transition-[grid-template-columns] duration-200 ease-out motion-reduce:transition-none group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr] ${
              showHint && !isOpen ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
            }`}
          >
            <span className="min-w-0 overflow-hidden">
              <span className="block whitespace-nowrap pr-5 text-sm font-medium">
                {isOpen ? "Close" : "Ask TinAI"}
              </span>
            </span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Chatbot;
