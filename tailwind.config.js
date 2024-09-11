const { platformSelect } = require("nativewind");

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         // fontFamily: {
         //    nunito: "Nunito-Regular, sans-serif",
         //    "nunito-medium": "Nunito-Medium, sans-serif",
         // },
      },
   },
   plugins: [],
};
