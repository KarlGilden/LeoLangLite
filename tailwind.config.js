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
      },
      gray: {
        DEFAULT: "#F2F2F2",
        medium: "#D3D3D3",
        dark: "#A9A9A9"
      },
      red:{
        DEFAULT: "#b91c1c"
      },
      orange: {
        DEFAULT: "#d97706"
      },
      green: {
        DEFAULT: "#4d7c0f"
      },
      primary: "#1e4d2b",
      primaryDark: "#051805",
      secondary: "#BABD8D",
      highlight: "#a7c957",
      wash: "#dce1de",
      transparent: "transparent"
    },
    fontFamily: {
      nunito: ["Nunito", "serif"],
      header: ["Poppins", "serif"]
    },
    extend: {
      boxShadow: {
        'container': 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
      }
    },
  },
  plugins: [],
}

