import React from "react";

const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-lg ${
          isUser
            ? "bg-secondary dark:bg-primary text-white dark:text-secondary"
            : "bg-light-bg dark:bg-dark-bg border border-border"
        }`}
      >
        <p className="text-h4 whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
