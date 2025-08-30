/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f0b261',
        'bg-color': '#000000',
        'text-color': '#ffffff',
        'nav-bg-color': 'rgba(10, 10, 10, 0.8)',
        'menu-bg-color': 'rgba(10, 10, 10, 0.8)',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'team-night': ['Team Night', 'serif'],
      },
    },
  },
  plugins: [],
}