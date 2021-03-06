const accessRequestCreate = require("./DB/accessRequestCreate_resolver");
const accessRequestGetByUserId = require("./DB/accessRequestGetByUserId_resolver");
const searchAuditLog = require("./DB/searchAuditLog_resolver");
const searchFilters = require("./DB/searchFilters_resolver");
const searchSort = require("./DB/searchSort_resolver");
const searchSaved = require("./DB/searchSaved_resolver");
const searchSave = require("./DB/searchSave_resolver");
const searchDelete = require("./DB/searchDelete_resolver");
const searchSavedByUserId = require("./DB/searchSavedByUserId_resolver");

const hdrDataModelSearch = require("./HDR/datamodelSearch_resolver");
const hdrDataModelID = require("./HDR/datamodelID_resolver");
const hdrFilterValues = require("./HDR/datamodelFilters_resolver");
const hdrCustomSearch = require("./HDR/customSearch_resolver");

describe("index.js", () => {
    beforeEach(() => {});

    it("Should test accessRequestCreate Resolver is being loded for use", () => {
        expect(accessRequestCreate).not.toBeNull();
    });
    it("Should test accessRequestGetByUserId Resolver is being loded for use", () => {
        expect(accessRequestGetByUserId).not.toBeNull();
    });
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
    it("Should test hdrDataModelSearch Resolver is being loded for use", () => {
        expect(hdrDataModelSearch).not.toBeNull();
    });
    it("Should test hdrDataModelID Resolver is being loded for use", () => {
        expect(hdrDataModelID).not.toBeNull();
    });
    it("Should test hdrFilterValues Resolver is being loded for use", () => {
        expect(hdrFilterValues).not.toBeNull();
    });
    it("Should test hdrCustomSearch Resolver is being loded for use", () => {
        expect(hdrCustomSearch).not.toBeNull();
    });
});
