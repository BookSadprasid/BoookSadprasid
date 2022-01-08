const spacing = generateSpacing(8, 13);

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      springWood: "#f7f6f1",
      transparent: "transparent",
      white: "#fff",
    },
    borderRadius: {
      30: "30px",
    },
    boxShadow: {
      DEFAULT: "0px 4px 20px 0px #00000040",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: spacing[5],
      },
    },
    screens: {
      tablet: "880px",
      desktop: "1280px",
    },
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
    fontSize: {
      DEFAULT: "16px",
      16: "16px",
      18: "18px",
      24: "24px",
    },
    fontWeight: {
      400: 400,
      500: 500,
      700: 700,
    },
    gradientColorStops: {
      macaroniAndCheese: "#ffbc7b",
      sunshade: "#ff924e",
    },
    spacing,
    textColor: {
      white: "#fff",
      rose: "#f839ce",
      darkGray: "#555555",
      macaroniAndCheese: "#ffbc7b",
    },
    extend: {
      inset: {
        0: 0,
      },
      gridTemplateColumns: {
        20: "repeat(20, 1fr)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

function generateSpacing(increment, howMany) {
  const increments = {};

  for (let i = 1; i <= howMany; i++) {
    increments[i] = `${(increment * i) | 0}px`;
  }

  return increments;
}
