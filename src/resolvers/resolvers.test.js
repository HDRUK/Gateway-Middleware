const searchAuditLog = require("./resolvers");

const hdrCatalogueItemsSearch = require("./HDR/catalogueItems_search_resolver");
const hdrCatalogueLogin = require("./HDR/catalogueLogin_resolver");
const hdrCatalogueLogout = require("./HDR/catalogueLogout_resolver");
const hdrDataModelSearch = require("./HDR/datamodelSearch_resolver");

describe("index.js", () => {
    beforeEach(() => {});

    it("Should test searchAuditLog Resolver is being loded for use", () => {
        expect(searchAuditLog).not.toBeNull();
    });
    it("Should test hdrCatalogueItemsSearch Resolver is being loded for use", () => {
        expect(hdrCatalogueItemsSearch).not.toBeNull();
    });
    it("Should test hdrDataModelSearch Resolver is being loded for use", () => {
        expect(hdrDataModelSearch).not.toBeNull();
    });
    it("Should test hdrCatalogueLogin Resolver is being loded for use", () => {
        expect(hdrCatalogueLogin).not.toBeNull();
    });
    it("Should test hdrCatalogueLogout Resolver is being loded for use", () => {
        expect(hdrCatalogueLogout).not.toBeNull();
    });
});
