/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      daisyui: {
        themes: [
          {
            mytheme: {
              primary: "#ce37b2",

              secondary: "#8b6ec9",

              accent: "#38f7d4",

              neutral: "#1e1d26",

              "base-100": "#3b4354",

              info: "#8fdcef",

              success: "#13aa89",

              warning: "#a3590a",

              error: "rgba(250, 41, 65, 0.5)",
            },
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
};
