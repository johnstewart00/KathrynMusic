import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS/JSX/TSX files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFA', // Define the primary color for text
        secondary: '#0057C7',
        danger: '#e3342f',
      },
    },
  },
  plugins: [],
} satisfies Config;
