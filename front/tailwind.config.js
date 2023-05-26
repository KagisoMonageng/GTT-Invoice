/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FEAC71",
          secondary: "#feac71",
          accent: "#F4F4F4",
          neutral: "#000",
          info:"#ffffff",
          "base-100": "#333333",
        },
      },
    ],
  },
}
