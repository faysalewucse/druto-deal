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
        primary: "#4f46e5",
        violet: "#8b5cf6",
        secondary: "#9333ea",
        warning: "#eab308",
        success: "#16a34a",
        danger: "#dc2626",
        "primary-hover": "#4338ca",
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  experimental: true,
  plugins: [],
};
