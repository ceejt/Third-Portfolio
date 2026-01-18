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
      className={`card animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <h2>Goals</h2>
      </div>

      <ul className="space-y-4">
        {goals.map((goal, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-p leading-relaxed"
          >
            <span className="text-primary mt-1">•</span>
            <span>{goal}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Goals;
