import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS/JSX/TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
