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
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] drop-shadow-2xl">
          <div className="blur-in cut cut-lg flex h-[500px] flex-col bg-light-card dark:bg-dark-card">
          <div className="flex items-center justify-between px-5 pb-2 pt-5">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 motion-safe:animate-pulse"></div>
              <h3 className="text-ui font-medium">TinAI</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted transition-colors duration-200 hover:text-accent"
              aria-label="Close chat"
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

          <div className="flex-1 space-y-5 overflow-y-auto px-5 py-3">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-muted">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
                <div
                  className="h-2 w-2 rounded-full bg-accent animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-2 w-2 rounded-full bg-accent animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 px-5 pb-3">
              {getSuggestions()
                .slice(0, 3)
                .map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="cut cut-sm bg-light-bg px-3 py-1.5 text-h4 transition-colors duration-200 hover:bg-accent hover:text-white dark:bg-dark-bg dark:hover:text-dark-bg"
                  >
                    {suggestion}
                  </button>
                ))}
            </div>
          )}

          <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
          </div>
        </div>
      )}

      {/* Floating button: icon that widens to show its name */}
      <div className="fixed bottom-6 right-6 z-40 drop-shadow-lg">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group cut relative flex h-12 items-center overflow-hidden bg-accent text-white transition-[filter] duration-200 hover:brightness-110 focus-visible:brightness-110 dark:text-dark-bg"
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
