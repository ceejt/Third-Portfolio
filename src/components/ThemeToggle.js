import React from "react";
import { useTheme } from "../contexts/ThemeContext";

// The emblem is a mask, so it takes the text color and the bat shows the
// button background through it.
const MARK = `${process.env.PUBLIC_URL || ""}/assets/icons/batman.svg`;
const maskStyle = {
  WebkitMask: `url(${MARK}) center / contain no-repeat`,
  mask: `url(${MARK}) center / contain no-repeat`,
};

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cut fixed right-6 top-6 z-50 bg-light-card p-2.5 transition-colors duration-200 hover:text-accent dark:bg-dark-card"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-cursor-text={isDark ? "Light mode" : "Dark mode"}
    >
      <span
        className={`block h-7 w-7 bg-current ${isDark ? "text-accent" : ""}`}
        style={maskStyle}
        aria-hidden="true"
      />
    </button>
  );
};

export default ThemeToggle;
