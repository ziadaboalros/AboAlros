/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { dark: "rgb(10, 12, 16)", light: "rgb(87, 202, 255)" },
      transform: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      rotateY: {
        180: "180deg",
      },
      translate: {
        "-full-8": "calc(-100% - 8px)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".smooth": {
          "transition-property": "all",
          "transition-duration": "400ms",
        },
        ".transform-style-preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".translate-x-full-8": {
          transform: "translateX(calc(-100% - 8px))",
        },
      });
    },
  ],
};
