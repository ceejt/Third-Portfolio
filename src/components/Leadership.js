import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const Leadership = () => {
  const { leadership } = portfolioData;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="leadership"
      ref={ref}
      className={`animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <h2>Leadership & Achievements</h2>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
        {leadership.map((item, index) => (
          <div
            key={index}
            className="border-l-2 border-border pl-4 hover:border-accent transition-colors duration-200"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold">{item.title}</h3>
              <span className="text-h4 text-muted font-fira flex-shrink-0 ml-2">
                {item.year}
              </span>
            </div>
            <p className="text-h4 text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
