// The DB Resolvers
const searchAuditLog = require("./DB/searchAuditLog_resolver");
const searchAuditLogSave = require("./DB/searchAuditLogSave_resolver");
const searchFilters = require("./DB/searchFilters_resolver");
const searchSort = require("./DB/searchSort_resolver");
const searchSaved = require("./DB/searchSaved_resolver");
const searchSave = require("./DB/searchSave_resolver");
const searchDelete = require("./DB/searchDelete_resolver");
const searchSavedByUserId = require("./DB/searchSavedByUserId_resolver");

// The API Resolvers
const hdrCatalogueItemsSearch = require("./HDR/catalogueItems_search_resolver");
const hdrCatalogueLogin = require("./HDR/catalogueLogin_resolver");
const hdrCatalogueLogout = require("./HDR/catalogueLogout_resolver");
const hdrDataModelSearch = require("./HDR/datamodelSearch_resolver");
const hdrDataModelID = require("./HDR/datamodelID_resolver");
const hdrFilterValues = require("./HDR/datamodelFilters_resolver");
const hdrCustomSearch = require("./HDR/customSearch_resolver");

module.exports = [
    searchAuditLog,
    searchAuditLogSave,
    searchFilters,
    searchSort,
    searchSaved,
    searchSave,
    searchDelete,
    searchSavedByUserId,
    hdrCatalogueItemsSearch,
    hdrCatalogueLogin,
    hdrCatalogueLogout,
    hdrDataModelSearch,
    hdrDataModelID,
    hdrFilterValues,
    hdrCustomSearch
];
