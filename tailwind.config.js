/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        "dinosaur-green": "#1A8F51",
        "highlight-green": "#2BD182",
        "gray-h2": "#858585"
      },
      fontFamily: {
        retroComputer: ['retro-computer'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        "d-xxxl": "clamp(3rem, 5vw, 7rem)",
        "d-xl": "clamp(1rem, 2vw, 2rem)",
      }
    },
  },
  plugins: [],
};
