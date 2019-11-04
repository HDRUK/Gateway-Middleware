const searchAuditLog = require("./resolvers");

const hdrBasicSearch = require("./HDR/basicSearch_resolver");
const hdrCatalogueLogin = require("./HDR/catalogueLogin_resolver");
const hdrCatalogueLogout = require("./HDR/catalogueLogout_resolver");

describe("index.js", () => {
    beforeEach(() => {});

    it("Should test searchAuditLog Resolver is being loded for use", () => {
        expect(searchAuditLog).not.toBeNull();
    });
    it("Should test hdrBasicSearch Resolver is being loded for use", () => {
        expect(hdrBasicSearch).not.toBeNull();
    });
    it("Should test hdrCatalogueLogin Resolver is being loded for use", () => {
        expect(hdrCatalogueLogin).not.toBeNull();
    });
    it("Should test hdrCatalogueLogout Resolver is being loded for use", () => {
        expect(hdrCatalogueLogout).not.toBeNull();
    });
});
