import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const ProjectItem = ({ project }) => {
  const isLink = project.url && project.url !== "#";

  const tile = (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-light-card dark:bg-dark-card transition-colors duration-300 group-hover:bg-accent/10">
      {project.image ? (
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <>
          <span className="absolute bottom-4 left-4 text-h4 text-primary font-fira">
            {project.url}
          </span>
          <span
            aria-hidden="true"
            className="absolute right-4 top-4 text-lg text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            ↗
          </span>
        </>
      )}
    </div>
  );

  const caption = (
    <div className="mt-3">
      <p className="flex items-center gap-1.5 text-h3 font-medium transition-colors duration-200 group-hover:text-accent">
        <span>{project.title}</span>
        <span className="text-primary">/</span>
        <span className="text-gray-600 dark:text-gray-400">{project.type}</span>
      </p>
      <p className="mt-1 text-h4 leading-relaxed text-gray-600 dark:text-gray-400">
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
      className="group block rounded-lg"
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

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
