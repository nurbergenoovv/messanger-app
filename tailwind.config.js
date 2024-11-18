/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': "#5d42f5",
        'secondary': "#f1c40f",
        'danger': "#e74c3c",
        'success': "#2ecc71",
        'warning': "#f39c12",
        'white-50': 'rgba(255, 255, 255, 0.5)',
        'white-80': 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
}