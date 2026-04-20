/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.03)", opacity: "0.88" },
        },
      },
      animation: {
        "fade-in": "fade-in 500ms ease-out both",
        "soft-pulse": "soft-pulse 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
