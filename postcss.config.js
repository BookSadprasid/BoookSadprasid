// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
// Format: https://nextjs.org/docs/messages/postcss-shape
module.exports = {
  plugins: [
    // https://tailwindcss.com/docs/using-with-preprocessors#nesting
    "tailwindcss/nesting",
    "tailwindcss",
    "autoprefixer",
  ],
};
