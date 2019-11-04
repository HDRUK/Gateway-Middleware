const searchAuditLog = require("./searchAuditLog_resolver");

// The API Resolvers
const hdrBasicSearch = require("./HDR/basicSearch_resolver");
const hdrCatalogueLogin = require("./HDR/catalogueLogin_resolver");
const hdrCatalogueLogout = require("./HDR/catalogueLogout_resolver");

module.exports = [searchAuditLog, hdrBasicSearch, hdrCatalogueLogin, hdrCatalogueLogout];
