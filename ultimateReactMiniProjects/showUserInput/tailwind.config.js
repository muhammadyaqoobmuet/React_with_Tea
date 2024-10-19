/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extend the theme with custom colors for light and dark modes
      colors: {
        // Light mode colors
        light: {
          background: '#ffffff', // Background color for light mode
          text: '#1f2937', // Text color for light mode
          primary: '#3b82f6', // Primary color for light mode
          secondary: '#fbbf24', // Secondary color for light mode
        },
        // Dark mode colors
        dark: {
          background: '#1f2937', // Background color for dark mode
          text: '#ffffff', // Text color for dark mode
          primary: '#60a5fa', // Primary color for dark mode
          secondary: '#fcd34d', // Secondary color for dark mode
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode by adding a 'dark' class
}
