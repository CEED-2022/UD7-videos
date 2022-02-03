const config = {
  verbose: true,
  collectCoverage: false,
  testRegex: "./tests/.*js$",

  moduleFileExtensions: ["js"],
  moduleDirectories: ["node_modules"],

  testEnvironment: 'node',
  transform: {
    "^.+\\.m?jsx?$": "babel-jest"
  },
};

export default config;
