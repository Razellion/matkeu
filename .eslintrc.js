module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next", "next/core-web-vitals"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
};
