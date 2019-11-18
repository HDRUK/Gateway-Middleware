const { gql } = require("apollo-server-express");

module.exports = gql`
    extend type Query {
        hdrDataModelSearch: HDR_MetaData
        hdrDataModelID(ID: String!): HDR_MetaData_ID
        hdrCatalogueLogin: HDR_CatalogueLogin
        hdrCatalogueLogout: HDR_CatalogueLogout
        hdrCatalogueItemsSearch(searchTerm: String, recordOffset: Int!, recordLimit: Int!): HDR_MetaData
    }

    type HDR_MetaData {
        status: String
        message: String
        count: String
        data: [HDR_MetaData_Result]
    }
    type HDR_MetaData_ID {
        status: String
        message: String
        count: String
        data: HDR_MetaData_Result
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
