/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: {
        DEFAULT: "#000",
        blur: "rgba(0,0,0,0.5)"
      }
    },
    extend: {
      boxShadow: {
        'container': 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
      }
    },
  },
  plugins: [],
}

