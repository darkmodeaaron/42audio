/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        heroBlue: '#008CCB',
        heroBlue2: '#83CACF', // Replace with your desired color hex code
      },
    },
  },
  plugins: [],
};
