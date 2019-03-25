// Prefering .eslintrc.js over a JSON file, as it lets you leave comments in your configuration!
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off"
  }
};
