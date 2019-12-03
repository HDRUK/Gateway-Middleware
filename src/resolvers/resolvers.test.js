const searchAuditLog = require("./DB/searchAuditLog_resolver");
const searchFilters = require("./DB/searchFilters_resolver");
const searchSort = require("./DB/searchSort_resolver");
const searchSaved = require("./DB/searchSaved_resolver");
const searchSave = require("./DB/searchSave_resolver");
const searchDelete = require("./DB/searchDelete_resolver");
const searchSavedByUserId = require("./DB/searchSavedByUserId_resolver");

const hdrCatalogueItemsSearch = require("./HDR/catalogueItems_search_resolver");
const hdrCatalogueLogin = require("./HDR/catalogueLogin_resolver");
const hdrCatalogueLogout = require("./HDR/catalogueLogout_resolver");
const hdrDataModelSearch = require("./HDR/datamodelSearch_resolver");
const hdrDataModelID = require("./HDR/datamodelID_resolver");
const hdrFilterValues = require("./HDR/datamodelFilters_resolver");

describe("index.js", () => {
    beforeEach(() => {});

    it("Should test searchAuditLog Resolver is being loded for use", () => {
        expect(searchAuditLog).not.toBeNull();
    });
    it("Should test searchFilters Resolver is being loded for use", () => {
        expect(searchFilters).not.toBeNull();
    });
    it("Should test searchSort Resolver is being loded for use", () => {
        expect(searchSort).not.toBeNull();
    });
    it("Should test searchSaved Resolver is being loded for use", () => {
        expect(searchSaved).not.toBeNull();
    });
    it("Should test searchSave Resolver is being loded for use", () => {
        expect(searchSave).not.toBeNull();
    });
    it("Should test searchDelete Resolver is being loded for use", () => {
        expect(searchDelete).not.toBeNull();
    });
    it("Should test searchSavedByUserId Resolver is being loded for use", () => {
        expect(searchSavedByUserId).not.toBeNull();
    });
    it("Should test hdrCatalogueItemsSearch Resolver is being loded for use", () => {
        expect(hdrCatalogueItemsSearch).not.toBeNull();
    });
    it("Should test hdrCatalogueLogin Resolver is being loded for use", () => {
        expect(hdrCatalogueLogin).not.toBeNull();
    });
    it("Should test hdrCatalogueLogout Resolver is being loded for use", () => {
        expect(hdrCatalogueLogout).not.toBeNull();
    });
    it("Should test hdrDataModelSearch Resolver is being loded for use", () => {
        expect(hdrDataModelSearch).not.toBeNull();
    });
    it("Should test hdrDataModelID Resolver is being loded for use", () => {
        expect(hdrDataModelID).not.toBeNull();
    });
    it("Should test hdrFilterValues Resolver is being loded for use", () => {
        expect(hdrFilterValues).not.toBeNull();
    });
});
