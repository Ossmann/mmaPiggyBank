import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'bounce-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5%)' },
        },
      },
      animation: {
        'bounce-horizontal': 'bounce-horizontal 2s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
