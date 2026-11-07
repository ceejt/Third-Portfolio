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

      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              key={index}
              className="border-b border-border/40 pb-4"
            >
              <h3 className="font-semibold mb-1">{cert.title}</h3>
              <p className="text-h4 text-gray-600 dark:text-gray-400">
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
