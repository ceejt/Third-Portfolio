/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
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
        fira: ["Fira Code", "monospace"],
      },
      fontSize: {
        h1: "24px",
        h2: "18px",
        h3: "14px",
        h4: "10px",
        p: "14px",
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
