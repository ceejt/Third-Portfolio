import React from "react";

const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] ${
          isUser
            ? "rounded-2xl rounded-br-md bg-accent px-4 py-2 text-white dark:text-dark-bg"
            : ""
        }`}
      >
        <p className="whitespace-pre-wrap text-[14px] leading-relaxed">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
