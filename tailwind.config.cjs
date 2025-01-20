/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },

      colors: {
        "blue-100": "#ebf8ff",
        "blue-800": "#2c5282",
        "gray-100": "#f7fafc",
        "gray-800": "#2d3748",
      },
    },
  },
  daisyui: {
    themes: [
      "dark",
      "synthwave",
      "sunset",
      "coffee",
      "business",
      "garden",
      "luxury",
      "night",
      "black",
    ],
  },

  plugins: [require("daisyui")],
};
