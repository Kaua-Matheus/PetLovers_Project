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
        sm: "0 1px 3px rgba(0, 0, 0, 0.12)", // Sombra suave personalizada
        md: "0 2px 6px rgba(0, 0, 0, 0.15)", // Sombra média
        lg: "0 4px 10px rgba(0, 0, 0, 0.2)", // Sombra maior
        xl: "0 10px 15px rgba(0, 0, 0, 0.3)", // Sombra mais intensa
      },
    },
  },
}

