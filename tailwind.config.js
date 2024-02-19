/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#776B5D",
        secondary: "#B0A695",
        background: "#F5EEE6",
        bg2: "#F3D7CA"
      }
    },
    
  },
  plugins: [],
}

