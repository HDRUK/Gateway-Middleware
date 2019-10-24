const searchAuditLog = require("./resolvers");

describe("index.js", () => {
    beforeEach(() => {});
    it("Should test Resolvers are being loded for use", () => {
        expect(searchAuditLog).not.toBeNull();
    });
});
