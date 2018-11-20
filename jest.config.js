// jest.config.js
const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  ...tsjPreset,
  preset: "react-native",
  testEnvironment: "node",
  transform: {
    ...tsjPreset.transform,
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  globals: {
    "ts-jest": {
      babelConfig: true
    }
  },
  roots: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/setupTests.js"],

  setupTestFrameworkScriptFile: "./setupTestFramework.js",
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/.blueprints"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/.blueprints",
    "(story|usage|test).tsx?$"
  ],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],

  snapshotSerializers: ["enzyme-to-json/serializer"],

  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: ".jest/cache"
};
