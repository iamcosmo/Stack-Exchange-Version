/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Include the main HTML file
    './src/**/*.{js,ts,jsx,tsx}' // Include all React component files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7F00', // Add StackOverflow-like color
      },
    },
  },
  plugins: [],
};
