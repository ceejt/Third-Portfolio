import React, { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolioData";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "tech-stack", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const useActiveSection = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
};

const NavLinks = ({ active, className }) => (
  <nav aria-label="Sections" className={className}>
    {items.map(({ id, label }) => (
      <a
        key={id}
        href={`#${id}`}
        aria-current={active === id ? "location" : undefined}
        className={`text-[15px] leading-none transition-colors duration-200 hover:text-accent ${
          active === id
            ? "text-accent"
            : "text-gray-600 dark:text-gray-400"
        }`}
      >
        {label}
      </a>
    ))}
  </nav>
);

const Rail = () => {
  const { profile } = portfolioData;
  const active = useActiveSection();

  const logo = (
    <a
      href="#top"
      aria-label={`${profile.name}, back to top`}
      className="block w-fit rounded-full"
    >
      <img src={profile.logo} alt="" className="h-9 w-9" />
    </a>
  );

  return (
    <>
      {/* Desktop: sticky left rail */}
      <aside
        className="blur-in hidden w-40 shrink-0 lg:block"
        style={{ "--delay": "0.05s" }}
      >
        <div className="sticky top-8 pt-2">
          {logo}
          <NavLinks active={active} className="mt-16 flex flex-col gap-4" />
        </div>
      </aside>

      {/* Mobile: logo and a scrolling row of links */}
      <div className="blur-in mb-2 lg:hidden" style={{ "--delay": "0.05s" }}>
        {logo}
        <NavLinks
          active={active}
          className="mt-4 flex gap-5 overflow-x-auto pb-1"
        />
      </div>
    </>
  );
};

export default Rail;
