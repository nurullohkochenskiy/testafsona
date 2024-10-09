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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        arial: ["var(--font-arial)"],
        roboto: ["var(--font-roboto)"],
        helvetica: ["var(--font-helvetica)"],
        arsenal: ["var(--font-arsenal)"],
        
      },
    },

    screens: {
      sm: "767px",
      // => @media (min-width: 767px) { ... }

      md: "992px",
      // => @media (min-width: 991px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
