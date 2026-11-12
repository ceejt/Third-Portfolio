import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const Certifications = () => {
  const { certifications } = portfolioData;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="certifications"
      ref={ref}
      className={`animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <h2>Certifications & Courses</h2>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            data-cursor-text="View certificate"
          >
            <div className="border-t border-border/40 pt-4">
              <h3 className="mb-1 font-semibold transition-colors duration-200 group-hover:text-accent">
                {cert.subtitle}
              </h3>
              <p className="text-h4 text-muted">{cert.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
