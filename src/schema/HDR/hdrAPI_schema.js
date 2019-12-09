const { gql } = require("apollo-server");

module.exports = gql`
    extend type Query {
        hdrDataModelSearch: HDR_MetaData
        hdrDataModelID(ID: String!): HDR_MetaData_ID
        hdrCatalogueLogin: HDR_CatalogueLogin
        hdrCatalogueLogout: HDR_CatalogueLogout
        hdrCatalogueItemsSearch(searchTerm: String, recordOffset: Int!, recordLimit: Int!): HDR_MetaData
        hdrFilterValues(filterValues: [String]): HDR_FilterData
        hdrCustomSearch(
            searchTerm: String
            recordOffset: Int!
            recordLimit: Int!
            sortField: String
            filterItems: [String]
        ): HDR_CustomSearchData
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
        data: HDR_CustomSearchData_Results
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
    type HDR_FilterData {
        status: String
        message: String
        data: [HDR_FilterData_Values]
    }
    type HDR_FilterData_Values {
        fieldName: String
        fieldValues: [String]
    }
    type HDR_CustomSearchData {
        status: String
        message: String
        count: String
        data: [HDR_CustomSearchData_Results]
    }
    type HDR_CustomSearchData_Results {
        id: String
        identifier: String
        license: String
        title: String
        publisher: String
        creator: String
        description: String
        keywords: String
        language: String
        dataProcessor: String
        contactPoint: String
        dataController: String
        group: String
        abstract: String
        accessRights: String
        accessRequestCost: String
        accesRequestDuration: String
        datasetEndDate: String
        datasetStartDate: String
        releaseDate: String
        periodicity: String
        physicalSampleAvailability: String
        statisticalPopulation: String
        ageBand: String
        geographicCoverage: String
        conformsTo: String
        derivedDatasets: String
        format: String
        populationType: String
        citations: String
        linkedDataset: String
        jurisdiction: String
        doi: String
        fileSize: String
        label: String
        lastUpdated: String
    }
`;
