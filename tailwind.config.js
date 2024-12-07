/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white': '0 2px 10px rgba(255, 255, 255, 0.5)', // Customize the shadow here
      },
    },
  },
  plugins: [],
}