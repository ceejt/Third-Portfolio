import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const ProjectItem = ({ project }) => {
  const isLink = project.url && project.url !== "#";

  const tile = (
    <div className="tile bg-light-card dark:bg-dark-card">
      {project.image ? (
        <img src={project.image} alt="" loading="lazy" />
      ) : (
        <span className="absolute bottom-4 left-4 font-fira text-h4 text-gray-600 dark:text-gray-400">
          {project.url}
        </span>
      )}
    </div>
  );

  const caption = (
    <div className="mt-3.5">
      <p className="flex items-baseline justify-between gap-4 text-[15px] font-semibold">
        <span className="transition-colors duration-200 group-hover:text-accent">
          {project.title}
        </span>
        <span className="whitespace-nowrap text-[13px] font-normal text-gray-600 dark:text-gray-400">
          {project.type}
        </span>
      </p>
      <p className="mt-1.5 max-w-[46ch] text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
        {project.description}
      </p>
    </div>
  );

  if (!isLink) {
    return (
      <div>
        {tile}
        {caption}
      </div>
    );
  }

  return (
    <a
      href={`https://${project.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {tile}
      {caption}
    </a>
  );
};

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
      className={`animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <h2 className="mb-6">Recent Projects</h2>

      <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
