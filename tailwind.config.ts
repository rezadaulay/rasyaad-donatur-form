import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'red': '#f44250',
      'light-green': '#2fc872',
      'light': '#ffffff',
      'gray-50': '#f9fafb',
      'gray-300': '#d1d5db',
      'gray-900': '#111827',
      'dark': '#222222',
      'dark-gray': '#ebebeb',
      'gray': '#fafafa',
      'primary': '#33691d',
      'secondary': '#ed7420'
    },
    fontFamily: {
      // sans: ['Poppins', 'sans-serif'],
      sans: ['Rubik', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      semibold: '500',
      bold: '600'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
