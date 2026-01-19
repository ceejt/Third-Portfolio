import React from "react";
import { portfolioData } from "../data/portfolioData";

const Header = () => {
  const { profile } = portfolioData;

  const handleViewResume = () => {
    window.open(profile.resumeUrl, "_blank");
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${profile.email}`;
  };

  return (
    <header className="animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-shrink-0">
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="w-40 h-40 rounded-lg object-cover border-2 border-border"
            loading="eager"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-baseline gap-3 mb-2">
            <h1 className="text-2xl md:text-3xl font-bold">{profile.name}</h1>
            <h4 className="text-sm text-primary font-fira">
              ({profile.nickname})
            </h4>
            {/* <span className="text-2xl md:text-3xl">💻</span> */}
          </div>

          <div className="flex items-center gap-1 mb-2">
            <svg
              className="w-4 h-4 text-primary flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-primary font-fira">{profile.location}</p>
          </div>

          <p className="text-p mb-4">{profile.title}</p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleViewResume}
              className="btn-primary flex items-center gap-2 text-h3 h-9"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
              View Resume
            </button>

            <button
              onClick={handleSendEmail}
              className="btn-secondary flex items-center gap-2 text-h3 h-9"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
