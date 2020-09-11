module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  parser: "babel-eslint",
  plugins: ["react", "react-native"],
  env: {
    jest: true,
    "react-native/react-native": true
  },
  rules: {
    // allow js file extension
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
      }
    ],
    // for post defining style object in react-native
    "no-use-before-define": ["error", { variables: false }],
    // react-native rules
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-raw-text": 2
  }
};
