/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'default': 'whitesmoke',
      },
      colors: {
        primaryGreen: '#4CAF50',
        secondaryGreen: '#66BB6A',
        lightGray: '#F4F4F4',
        darkText: '#2E2E2E',
        accentOrange: '#FFB74D',
        accentBlue: '#4FC3F7',
      },
      boxShadow: {
        sm: "0 2px 2px rgba(0, 0, 0, 0.2)", 
        md: "0 2px 2px rgba(0, 0, 0, 0.22)", 
        lg: "0 3px 4px rgba(0, 0, 0, 0.24)", 
        xl: "0 5px 6px rgba(0, 0, 0, 0.3)", 
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "3rem",
        '2xl': "1.5rem",
        '3xl': "1.875rem",
        '4xl': "2.25rem",
        '5xl': "3rem",
        '6xl': "4rem",
      },
    },
  },
}

