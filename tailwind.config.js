/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        "dinosaur-green": "#1A8F51",
        "highlight-green": "#2BD182",
        "hint": "#858585"
      },
      fontFamily: {
        retroComputer: ['retro-computer'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "d-xxxl": "clamp(3rem, 5vw, 7rem)",
        "d-xl": "clamp(1rem, 2vw, 2rem)",
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.25rem',
        '6xl': '2.5rem',
      }
    },
  },
  plugins: [],
};
