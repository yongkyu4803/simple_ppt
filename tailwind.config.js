/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF5FB",
          100: "#D6EAF8",
          200: "#AED6F1",
          300: "#85C1E9",
          400: "#5DADE2",
          500: "#3498DB",
          600: "#2980B9",
          700: "#1F618D",
          800: "#154360",
          900: "#0A2942",
        }
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-down": "slideDown 0.8s ease-out forwards",
        "slide-left": "slideLeft 0.8s ease-out forwards", 
        "slide-right": "slideRight 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(-50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
