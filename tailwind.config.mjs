/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d4ed8', // blue-700
          light: '#dbeafe',   // blue-100
          dark: '#1e40af',    // blue-800
        },
        secondary: {
          DEFAULT: '#10b981', // emerald-500
          light: '#d1fae5',   // emerald-100
          dark: '#059669',    // emerald-600
        },
        neutral: {
          DEFAULT: '#1f2937', // gray-800
          light: '#e5e7eb',   // gray-200
          white: '#ffffff',
        },
        success: '#22c55e', // green-500
        danger: '#ef4444',  // red-500
      },
    },
  },
  plugins: [],
};
