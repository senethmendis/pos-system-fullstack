/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "parimary-gray": "#f8f9fa",
        "parimary-black": "#212529",
        "primary-light-green": "#38b000",
        "primary-light-orange": "#e85d04",
      },
    },
  },
  plugins: [],
};
