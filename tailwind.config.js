/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#FAF9F6",
        "secondary" : "#28282B",
        "tertiary" : "#899499"
      }
    },
  },
  plugins: [],
}