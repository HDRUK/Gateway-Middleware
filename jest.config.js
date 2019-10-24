module.exports = {
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/", "./dist", "./src/index.js"],
    collectCoverageFrom: ["src/**/*.js"],
    coveragePathIgnorePatterns: ["/node_modules/", "./dist", "./src/index.js"]
};
