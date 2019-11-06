const searchAuditLog = require("./searchAuditLog_resolver");

// The API Resolvers
const hdrCatalogueItemsSearch = require("./HDR/catalogueItems_search_resolver");
const hdrCatalogueLogin = require("./HDR/catalogueLogin_resolver");
const hdrCatalogueLogout = require("./HDR/catalogueLogout_resolver");
const hdrDataModelSearch = require("./HDR/datamodelSearch_resolver");

module.exports = [hdrCatalogueItemsSearch, searchAuditLog, hdrCatalogueLogin, hdrCatalogueLogout, hdrDataModelSearch];
