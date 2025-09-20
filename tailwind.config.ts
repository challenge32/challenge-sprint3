import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: { '2xl': '1rem' },
      container: { center: true, padding: "1rem" }
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config