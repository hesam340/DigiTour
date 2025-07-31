/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: [`var(--font-yekan)`],
        vazir: [`var(--font-vazir)`],
      },
      colors: {
        primary: "#FDB713",
        secondary: "#10411B",
        complementry: "#009ECA",
        textColor: "#282828",
      },
    },
  },
  plugins: [require("daisyui")],
};
