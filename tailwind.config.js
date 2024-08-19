/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        generaPhoto: "url(./assets/generalPhone.png)",
      },
      keyframes: {
        bottomLine: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.5" },
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
