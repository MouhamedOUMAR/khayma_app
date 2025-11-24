/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fad5a5',
          300: '#f7b76d',
          400: '#f38f33',
          500: '#f0710b',
          600: '#e15706',
          700: '#ba4008',
          800: '#94330e',
          900: '#782c0f',
        },
        desert: {
          50: '#faf7f2',
          100: '#f5efe5',
          200: '#e9ddc5',
          300: '#dcc5a1',
          400: '#cba675',
          500: '#bf8e55',
          600: '#b17a49',
          700: '#93623e',
          800: '#785137',
          900: '#614330',
        },
      },
    },
  },
  plugins: [],
}
