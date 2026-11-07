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
      className={`animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <h2>Experience</h2>
      </div>

      <div className="space-y-6">
        {experience.map((job, index) => (
          <div
            key={index}
            className="border-l-2 border-border pl-4 hover:border-accent transition-colors duration-200"
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
