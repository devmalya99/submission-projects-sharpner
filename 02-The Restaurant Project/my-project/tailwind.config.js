/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: { 'medium': 'blur(12px)' },
      colors: {
         'backdrop': 'rgba(255, 255, 255, 0.8)',
    },
  },
  plugins: [],
}}