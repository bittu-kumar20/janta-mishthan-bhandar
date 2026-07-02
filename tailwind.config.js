/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B1E28', // Deep Crimson/Maroon
        secondary: '#E6A11C', // Saffron Gold
        accent: '#FFF8EE', // Warm Cream
        background: '#FFFCF5', // Very light warm background
        text: '#2C1810', // Dark Warm Brown
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(139, 30, 40, 0.15)',
        'gold-glow': '0 4px 20px -2px rgba(230, 161, 28, 0.3)',
      },
      backgroundImage: {
        'mandala': "url('https://www.transparenttextures.com/patterns/arabesque.png')",
      }
    },
  },
  plugins: [],
}
