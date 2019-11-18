const { linkSchema, searchSchema, hdrAPISchema } = require("./schema");

describe("Check that the correct Schemas are included and defined", () => {
    beforeEach(() => {});

    it("should check that the linkSchema exists", () => {
        expect(linkSchema).not.toBeNull();
    });
    it("should check that the searchSchema exists", () => {
        expect(searchSchema).not.toBeNull();
    });
    it("should check that the hdrAPISchema exists", () => {
        expect(hdrAPISchema).not.toBeNull();
    });
});
