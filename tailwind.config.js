/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00658e',
        primarytext: '#4F4F4F',
        secondarytext: '#828282',
      },
      padding: {
        card: '22px',
      },
      borderRadius: {
        theme: '12px',
      },
      fontSize: {
        heading: '24px',
        subheading: '18px',
        body: '16px',
      },
    },
  },
  plugins: [],
};
