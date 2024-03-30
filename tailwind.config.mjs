/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#2E2E2E",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
