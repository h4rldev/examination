/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");

module.exports = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        float: "float 1s linear infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animationFillMode: {
        forwards: "forwards",
      },
      width: {
        "max-content": "max-content",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      prefix: "puccin",
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "mocha",
    }),
    // `icon-`
    addDynamicIconSelectors(),
    // `icon-hover-`
    addDynamicIconSelectors({
      prefix: "icon-hover",
      overrideOnly: true,
    }),
  ],
};
