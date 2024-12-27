/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#030416', 
        mabry: ['Mabry Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
