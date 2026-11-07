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
        <h2>Recent Certifications & Courses</h2>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="border-b border-border/40 pb-4">
              <h3 className="font-semibold mb-1">{cert.title}</h3>
              <p className="text-h4 text-muted">
                {cert.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
