const hdrDataModelSearch = require("./datamodelSearch_resolver");

describe("index.js", () => {
    beforeEach(() => {});

    it("Should test hdrDataModelSearch is being loded for use", () => {
        expect(hdrDataModelSearch).not.toBeNull();

        console.log(hdrDataModelSearch.Query.hdrDataModelSearch);
    });
});
