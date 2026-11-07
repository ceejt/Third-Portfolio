import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { about } = portfolioData;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <h2>About</h2>
      </div>

      <div className="max-w-[52ch] space-y-4 text-p leading-relaxed">
        <p>{about.intro}</p>
        <p>{about.approach}</p>
        <p>{about.next}</p>
      </div>
    </section>
  );
};

export default About;
