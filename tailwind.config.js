/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        //Custom colors
        'regal-orange': '#ffa500',
        'bg-home': '#520590',
        'regal-pink': '#ea186d',
      },
      backgroundImage: {
        'house-background': "url('/src/assets/background.jpg)",
      },
      borderRadius: {
        '8xl': '90px',
      },
      height: {
        100: '440px',
        '95/100': '70vh',
      },
      borderWidth: {
        one: '1px',
      },
      width: {
        cusw: '40vw',
      },
    },
  },
  plugins: [],
};
