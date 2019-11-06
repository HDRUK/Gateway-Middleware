const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        getSearchAuditLog: [SearchAudit_log]
        hdrDataModelSearch: HDR_MetaData
        hdrCatalogueLogin: HDR_CatalogueLogin
        hdrCatalogueLogout: HDR_CatalogueLogout
        hdrCatalogueItemsSearch(searchTerm: String, recordOffset: Int!, recordLimit: Int!): HDR_MetaData
    }
    type SearchAudit_log {
        searchAudit_ID: ID
        search_user_ID: String
        search_Detail: String
        search_end_point: String
        created_on: String
        last_updated: String
    }
    type HDR_MetaData {
        status: String
        message: String
        count: String
        data: [HDR_MetaData_Result]
    }
    type HDR_MetaData_Result {
        id: String
        domainType: String
        label: String
        aliases: [String]
        description: String
        author: String
        organisation: String
        editable: String
        documentationVersion: String
        lastUpdated: String
        classifiers: [HDR_Classifier_Record]
        type: String
        finalised: String
    }
    type HDR_Classifier_Record {
        id: String
        label: String
        lastUpdated: String
    }
    type HDR_CatalogueLogin {
        status: String
        url: String
        result: HDR_Login_Result
    }

    type HDR_Login_Result {
        id: ID
        emailAddress: String
        firstName: String
        lastName: String
        userRole: String
        disabled: Boolean
    }
    type HDR_CatalogueLogout {
        status: String
    }
`;

module.exports = typeDefs;
