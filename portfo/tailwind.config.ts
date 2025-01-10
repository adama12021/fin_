import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      tableLayout: ['hover', 'focus'],
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'my-dark-green': '#007566',
      },
    },
  },
  plugins: [],
} satisfies Config;
