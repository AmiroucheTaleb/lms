/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parimary__bg: "#DEDDBC",
        parimary__txt: "#9E8324",
        project: "#8BA8A1",
      },
      letterSpacing: {
        logo: "-5px",
      },
    },
  },
  plugins: [require("daisyui")],
}
