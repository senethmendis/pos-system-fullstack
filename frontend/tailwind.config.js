/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "parimary-gray": "#faf9f9",
        "parimary-black": "#212529",
        "primary-light-green": "#38b000",
      },
    },
  },
  plugins: [],
};
