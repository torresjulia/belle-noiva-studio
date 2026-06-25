import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c4d2f",
        accent: "#c9a84c",
        offwhite: "#fdf8f5",
        surface: "#ffffff",
        textDark: "#2d1f14",
        textSecondary: "#8c6e5a",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
