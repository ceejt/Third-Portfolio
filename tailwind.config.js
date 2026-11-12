/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "rgb(var(--accent) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        primary: "#B6B6B6",
        secondary: "#1C1E21",
        border: "#B6B6B6",
        light: {
          bg: "#FFFFFF",
          text: "#1C1E21",
          card: "#F5F5F5",
        },
        dark: {
          bg: "#0A0A0A",
          text: "#FFFFFF",
          card: "#1C1E21",
        },
      },
      fontFamily: {
        geist: ["Geist", "system-ui", "sans-serif"],
        display: ["Chakra Petch", "Geist", "system-ui", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
      // Type roles: h1 name, h2 section title, h3 item title, h4 meta,
      // ui nav and short labels, p body.
      fontSize: {
        h1: ["1.875rem", { lineHeight: "1.2" }],
        h2: ["1.5rem", { lineHeight: "1.25" }],
        h3: ["1rem", { lineHeight: "1.4" }],
        h4: ["0.8125rem", { lineHeight: "1.45" }],
        ui: ["0.9375rem", { lineHeight: "1.5" }],
        p: ["1rem", { lineHeight: "1.65" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
