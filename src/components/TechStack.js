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
      className={`animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <h2>Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend */}
        <div>
          <h3 className="font-semibold mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.frontend.map((tech, index) => (
              <span
                key={index}
                className="chip"
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
                className="chip"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* AI */}
        <div>
          <h3 className="font-semibold mb-3">AI</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.ai.map((tech, index) => (
              <span
                key={index}
                className="chip"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* AI Tools */}
        <div>
          <h3 className="font-semibold mb-3">AI Tools</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.aiTools.map((tool, index) => (
              <span
                key={index}
                className="chip"
              >
                {tool}
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
                className="chip"
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
                  className="chip"
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
