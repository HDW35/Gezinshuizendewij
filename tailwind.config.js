const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // To add the fonts, setup in app/configs/fonts.ts
      fontFamily: {
        brand: ["Archivo", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Chivo Mono", ...defaultTheme.fontFamily.mono],
      },
      // Use https://uicolors.app to generate these
      colors: {
        brand: {
          50: "#fff6eb",
          100: "#fee4c7",
          200: "#fdc88a",
          300: "#fcab4d",
          400: "#fb9724",
          500: "#f5880b",
          600: "#d97706",
          700: "#b46509",
          800: "#92550e",
          900: "#78470f",
          950: "#452603",
        },
        surface: {
          50: "#fff6eb",
          100: "#fee4c7",
          200: "#fdc88a",
          300: "#fcab4d",
          400: "#fb9724",
          500: "#f5880b",
          600: "#d97706",
          700: "#b46509",
          800: "#92550e",
          900: "#78470f",
          950: "#452603",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      minHeight: {
        100: "100",
      },
      minWeight: {
        100: "100",
      },
    },
    debugScreens: {
      position: ["bottom", "left"],
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("tailwindcss-autofill"),
    require("tailwindcss-shadow-fill"),
    require("tailwindcss-text-fill"),
    require("tailwindcss-radix")(),
  ],
};
