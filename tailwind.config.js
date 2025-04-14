/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // permite modo escuro via classe "dark"
  theme: {
    extend: {
      colors: {
        lightBg: '#f9f9f9',
        darkBg: '#181818',
        textLight: '#ffffff',
        textDark: '#121212',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
