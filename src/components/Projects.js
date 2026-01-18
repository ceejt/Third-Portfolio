import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const { projects } = portfolioData;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={`card animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V9a1 1 0 00-1-1H4zm6 2a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        <h2>Recent Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-border rounded-lg p-4 hover-lift cursor-pointer"
            onClick={() =>
              project.url !== "#" &&
              window.open(`https://${project.url}`, "_blank")
            }
          >
            <h3 className="font-semibold mb-2">{project.title}</h3>
            <p className="text-h4 text-gray-600 dark:text-gray-400 mb-3">
              {project.description}
            </p>
            <p className="text-h4 text-primary font-fira">{project.url}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
