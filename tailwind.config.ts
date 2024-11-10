import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        whiteFade: 'rgba(255, 255, 255, 0)', // for transparent fade
        whiteSolid: '#ffffff', // solid white for the line
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        'nav-font-size': '12.69px', // Custom font size (12.69px)
        'custom-heading': '33px',
      },
      lineHeight: {
        'nav-line-height': '15.47px', // Custom line height (15.47px)
        'custom-line': '39.6px',
      },
      fontWeight: {
        'nav-font-weight': 300, // Custom font weight (300)
      },
      spacing: {
        'line-offset': '140px', // adjust based on desired spacing
        'line-width': '120px', // adjust based on line length
      },
      backgroundImage: {
        'fade-line-right': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'fade-line-left': 'linear-gradient(to left, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
