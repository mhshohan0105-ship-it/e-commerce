/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f1117',
        navbar: '#1a1f2e',
        topbar: '#111827',
        primary: {
          DEFAULT: '#e8291c',
          hover: '#c41f10'
        },
        trade: '#f97316',
        text: {
          DEFAULT: '#ffffff',
          secondary: '#9ca3af',
          nav: '#e5e7eb'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
