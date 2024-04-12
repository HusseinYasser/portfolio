/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'dark': '#1A1B26'
      },
      fontFamily: {
        pixelfy: ['VT323'],
        sans: ['Space Mono']
      },
    },
  },
  plugins: [],
}

