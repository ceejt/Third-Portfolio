import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const Experience = () => {
  const { experience } = portfolioData;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className={`card animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
        <h2>Experience</h2>
      </div>

      <div className="space-y-6">
        {experience.map((job, index) => (
          <div
            key={index}
            className="border-l-2 border-border pl-4 hover:border-secondary dark:hover:border-primary transition-colors duration-200"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold">{job.company}</h3>
              <span className="text-h4 text-primary font-fira flex-shrink-0 ml-2">
                {job.period}
              </span>
            </div>
            <p className="text-h4 text-gray-600 dark:text-gray-400 mb-3">
              {job.role} • {job.type}
            </p>

            <ul className="space-y-2">
              {job.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-p leading-relaxed"
                >
                  <span className="text-primary -mt-0.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
