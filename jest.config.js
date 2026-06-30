module.exports = {
  preset: "react-native",
  roots: ["<rootDir>/lib"],
  modulePathIgnorePatterns: [
    "<rootDir>/example",
    "<rootDir>/exampleManual",
    "<rootDir>/build",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?|@testing-library))",
  ],
};
