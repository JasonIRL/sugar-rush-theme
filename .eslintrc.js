module.exports = {
  plugins: ["json", "prettier"],
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
};
