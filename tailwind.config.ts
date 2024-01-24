import { type Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme.js"

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Nunito Sans",
          "Nunito Sans Fallback",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        gray: {
          50: "#FAF9F7",
          100: "#E8E6E1",
          200: "#D3CEC4",
          300: "#B8B2A7",
          400: "#A39E93",
          500: "#857F72",
          600: "#625D52",
          700: "#504A40",
          800: "#423D33",
          900: "#27241D",
        },
        blue: {
          '50': '#f2f9f9',
          '100': '#ddeff0',
          '200': '#bfe0e2',
          '300': '#92cace',
          '400': '#5faab1',
          '500': '#438e96',
          '600': '#3b757f',
          '700': '#356169',
          '800': '#325158',
          '900': '#2d464c',
          '950': '#1a2c32',
      },
      
        
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config
