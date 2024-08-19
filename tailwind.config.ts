import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      screens: {
        lg: "1124px",
        "2xl": "1440px",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      kakao: "#FEE500",
      google: "#f44336",
      main: "#0064FF",
      grey: "#CBCBCB",
      whitesmoke: "#F0F0F0",
      lightgray: "#D1D6DB",
      primaryblue: "#3F51B5",
      primaryred: "#FF6C6A",
      lightgrey: "#eeebeb",
      coolgray: "#8B95A1",
      badge: "#f2f4f7",
      silver: "#b5b6b9",
      royalblue: "#3366ff",
      darkgray: "#a4a5a7",
      dimgray: "#656667",
      primary: "#34363D",
      darkgrey: "#3c3a3a",
      lavender: "#d4e1f3",
      aliceblue: "#f1f4ff",
      green: "#449F3C",
      cornflowerblue: "#7493ff",
      error: "#EA2A2A",
      salomon: "#ff6c6a",
      seashell: "#fff2ee",
      limegreen: "#11b143",
      mediumpurple: "#7c6ecd",
      lavenderblue: "#cad4ff",
      navy: "#3f51b5",
      skyblue: "#7493FF",
    },
  },
  plugins: [],
};
export default config;
