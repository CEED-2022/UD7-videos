const config = {
  verbose: true,
  collectCoverage: false,
  testRegex: "./tests/.*.test.js$",

  moduleFileExtensions: ["js"],
  moduleDirectories: ["node_modules"],

  testEnvironment: 'node',
  transform: {
    // "^.+\\.m?jsx?$": "babel-jest"
    "^.+\\.m?jsx?$": "babel-jest"
  },
};

export default config;
