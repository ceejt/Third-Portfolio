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
      className={`card animate-on-scroll ${inView ? "visible" : ""} sticky top-8`}
    >
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <h2>Leadership & Achievements</h2>
      </div>

      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {leadership.map((item, index) => (
          <div
            key={index}
            className="border-l-2 border-border pl-4 hover:border-secondary dark:hover:border-primary transition-colors duration-200"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold">{item.title}</h3>
              <span className="text-h4 text-primary font-fira flex-shrink-0 ml-2">
                {item.year}
              </span>
            </div>
            <p className="text-h4 text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
