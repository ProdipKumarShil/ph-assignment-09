/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myCustomRed: "red",
      },
      backgroundImage: {
        myGradient:
          "linear-gradient(to right, rgba(126, 144, 254, 0.1), rgba(152, 115, 255, 0.1))",
      },
    },
  },
  plugins: [],
};

