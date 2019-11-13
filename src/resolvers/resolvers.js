// The DB Resolvers
const searchAuditLog = require("./DB/searchAuditLog_resolver");
const searchFilters = require("./DB/searchFilters_resolver");
const searchSort = require("./DB/searchSort_resolver");
const searchSaved = require("./DB/searchSaved_resolver");

// The API Resolvers
const hdrCatalogueItemsSearch = require("./HDR/catalogueItems_search_resolver");
const hdrCatalogueLogin = require("./HDR/catalogueLogin_resolver");
const hdrCatalogueLogout = require("./HDR/catalogueLogout_resolver");
const hdrDataModelSearch = require("./HDR/datamodelSearch_resolver");

module.exports = [
    searchAuditLog,
    searchFilters,
    searchSort,
    searchSaved,
    hdrCatalogueItemsSearch,
    hdrCatalogueLogin,
    hdrCatalogueLogout,
    hdrDataModelSearch
];
