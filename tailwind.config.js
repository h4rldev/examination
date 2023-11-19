/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");

module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      mono: ["FiraCode Nerd Font Mono", "monospace"],
    },
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu Nerd Font Propo", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxHeight: {
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
      },
      height: {
        18: "4.5rem",
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
      listStyleType: {
        square: "square",
      },
      transisionProperty: {
        width: "width",
        underline: "text-decoration",
      },
      animationFillMode: {
        forwards: "forwards",
      },
      width: {
        "max-content": "max-content",
      },
      backgroundImage: {
        hideout: "url('../assets/bg/hideout.svg')",
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
