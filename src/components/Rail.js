import React, { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolioData";

// Items with an id scroll to a section. Items with a route open a page.
const items = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "tech-stack", label: "Skills" },
  { id: "contact", label: "Contact" },
  { route: "#/notes", label: "Notes" },
];

const useActiveSection = (onNotes) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (onNotes) {
      setActive("");
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    items.forEach(({ id }) => {
      const el = id && document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onNotes]);

  return active;
};

const NavLinks = ({ active, onNotes, className }) => (
  <nav aria-label="Sections" className={className}>
    {items.map(({ id, route, label }) => {
      const isActive = route ? onNotes : active === id;
      return (
        <a
          key={label}
          href={route || `#${id}`}
          aria-current={isActive ? (route ? "page" : "location") : undefined}
          className={`text-[15px] leading-none transition-colors duration-200 hover:text-accent ${
            isActive ? "text-accent" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {label}
        </a>
      );
    })}
  </nav>
);

const Rail = ({ onNotes = false }) => {
  const { profile } = portfolioData;
  const active = useActiveSection(onNotes);

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
          <NavLinks
            active={active}
            onNotes={onNotes}
            className="mt-16 flex flex-col gap-4"
          />
        </div>
      </aside>

      {/* Mobile: logo and a scrolling row of links */}
      <div className="blur-in mb-2 lg:hidden" style={{ "--delay": "0.05s" }}>
        {logo}
        <NavLinks
          active={active}
          onNotes={onNotes}
          className="mt-4 flex gap-5 overflow-x-auto pb-1"
        />
      </div>
    </>
  );
};

export default Rail;
