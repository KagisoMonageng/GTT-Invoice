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
          primary: "#15fcd9",
          secondary: "#feac71",
          accent: "#F4F4F4",
          neutral: "#ff852d",
          info:"#333333",
          "base-100": "#fff",
        },
      },
    ],
  },
}
