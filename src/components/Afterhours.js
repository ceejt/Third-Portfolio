import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const Afterhours = () => {
  const { afterhours } = portfolioData;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="afterhours"
      ref={ref}
      className={`animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <h2>Afterhours</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {afterhours.map((item, index) => (
          <div
            key={index}
            className="border-t border-border/40 pt-4"
          >
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-h4 text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Afterhours;
