/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        success: "#009966",

        warning: "#ffde33",

        orange: "#ff9933",

        danger: "#cc0033",

        unhealthy: "#660099",

        hazardous: "#4b0014",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f492ab",

          secondary: "#e8887f",

          accent: "#eaa6c8",

          neutral: "#242a3d",

          "base-100": "#383838",

          info: "#5ba8f1",

          error: "#f07056",
        },
      },
    ],
  },
};
