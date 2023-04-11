/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        "dinosaur-green": "#1A8F51"
      },
      fontFamily: {
        retroComputer: ['retro-computer']
      },
      fontSize: {
        "d-xxxl": "clamp(3rem, 5vw, 7rem)",
        "d-xl": "clamp(1rem, 2vw, 2rem)",
      }
    },
  },
  plugins: [],
};
