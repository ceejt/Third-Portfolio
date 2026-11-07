import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const Goals = () => {
  const { goals } = portfolioData;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="goals"
      ref={ref}
      className={`animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <h2>Goals</h2>
      </div>

      <ul className="space-y-4">
        {goals.map((goal, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-p leading-relaxed"
          >
            <span className="text-primary -mt-0.5">•</span>
            <span>{goal}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Goals;
