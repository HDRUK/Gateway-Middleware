module.exports = {
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/", "./dist"],
    collectCoverageFrom: ["src/**/*.js"],
    coveragePathIgnorePatterns: ["/node_modules/"]
};
