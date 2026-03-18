/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
      colors: {
        'primary': '#00d4ff',
        'primary-dark': '#0099cc',
        'secondary': '#ff3366',
        'dark': '#0a0e27',
        'dark-2': '#151937',
        'dark-3': '#1e2447',
      },
    },
  },
  plugins: [],
}