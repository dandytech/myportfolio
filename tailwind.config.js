/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        arial: ["Arial", "sans-serif]"],
        redHat: ['"Red Hat Display"', "sans-serif"],
      },
      screens: {
        "min-400": { min: "471px", max: "1023px" },
        "min-1028": { min: "1024px", max: "1330px" },
        "min-1202": { min: "1202px" },
        "min-mobdesk": { min: "761px", max: "1280px" },
      },
    },
  },
  plugins: [],
};
