import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const TechStack = () => {
  const { techStack } = portfolioData;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="tech-stack"
      ref={ref}
      className={`card animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <h2>Tech Stack & Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend */}
        <div>
          <h3 className="font-semibold mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.frontend.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-light-bg dark:bg-dark-bg border border-border rounded-md text-h4 hover-lift"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="font-semibold mb-3">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.backend.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-light-bg dark:bg-dark-bg border border-border rounded-md text-h4 hover-lift"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="font-semibold mb-3">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-light-bg dark:bg-dark-bg border border-border rounded-md text-h4 hover-lift"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="font-semibold mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center">
                <span
                  key={index}
                  className="px-3 py-1 bg-light-bg dark:bg-dark-bg border border-border rounded-md text-h4 hover-lift"
                >
                  {lang.name} ({lang.level})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
