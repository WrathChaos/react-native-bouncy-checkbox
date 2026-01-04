const tseslint = require("@typescript-eslint/eslint-plugin");
const tsparser = require("@typescript-eslint/parser");
const react = require("eslint-plugin-react");

module.exports = [
  {
    ignores: [
      "node_modules/**",
      "build/**",
      "example/**",
      "exampleManual/**",
      "**/*.js",
      "**/*.json",
    ],
  },
  {
    files: ["lib/**/*.ts", "lib/**/*.tsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: react,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      quotes: ["error", "double", { avoidEscape: true }],
      "max-len": ["error", 120],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      "no-nested-ternary": "error",
      "prefer-destructuring": "error",
      camelcase: "error",
    },
  },
];

