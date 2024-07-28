/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#222222',
        'custom-gradient': '#1a5c38',
        'custom-green': '#00FF7F',
      },
    },
  },
  plugins: [],
}