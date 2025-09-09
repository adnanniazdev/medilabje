import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js, jsx, ts, tsx, mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#155368",
        primary_hover: "#2895B0",
        secandory: "#CCECEE",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
  ],
} satisfies Config;
