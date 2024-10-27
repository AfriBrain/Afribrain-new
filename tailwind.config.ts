import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      title: ["Lexend Deca", "sans-serif"],
      text: ["Lexend Deca", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        phone: "300px",
        tablet: "568px",
        laptop: "1024px",
        "2xl": "1400px",
      },
    },
    screens: {
      phone: "300px",
      tablet: "568px",
      laptop: "1024px",
      "2xl": "1400px",
    },
    extend: {
      backgroundImage: {
        "custom-1": "url('/assets/images/hero_1.jpg')"
      },
      boxShadow: {
        '3xl': '20px 20px 0px 0px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        primary: "#FF0032",
        secondary: "#F5EAEA",
        tertiary: "#3D1766",
        title: "#FFC0CB",
        link: "#33FFCC",
        complementary: "#FF3366",
        purpleish: "#bd1c87",
      },
      keyframes: {
        'gradient-change': {
          '0%, 100%': { background: 'linear-gradient(to right, #ff7e5f, #feb47b)' },
          '50%': { background: 'linear-gradient(to right, #6a11cb, #2575fc)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },


      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config