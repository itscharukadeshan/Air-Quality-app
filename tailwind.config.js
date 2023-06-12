/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
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

          success: "#18bfa8",

          warning: "#fa971e",

          error: "#f07056",
          success: "#009966",
          orange: "#ffde33",
          danger: "#ff9933",
          unhealthy: "#660099",
          hazardous: "#7e0023",
        },
      },
    ],
  },
};
