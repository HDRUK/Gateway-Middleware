const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        getSearchAuditLog: [SearchAudit_log]
        getSearchFilters: [SearchFilters]
        getSearchSaved: [SearchSaved]
        getSearchSort: [SearchSort]
        hdrDataModelSearch: HDR_MetaData
        hdrCatalogueLogin: HDR_CatalogueLogin
        hdrCatalogueLogout: HDR_CatalogueLogout
        hdrCatalogueItemsSearch(searchTerm: String, recordOffset: Int!, recordLimit: Int!): HDR_MetaData
    }

    type Mutation {
        searchSave(
            userId: String!
            searchTerm: String!
            endPoint: String!
            offSet: Int!
            recordLimit: Int!
            filters: [Filter]
            sort: Sort!
        ): SearchSaveResult
    }

    input Filter {
        type: String
        value: String
    }
    input Sort {
        applied: String
        value: String
    }

    type SearchAudit_log {
        searchaudit_id: ID
        searchaudit_user_id: String
        searchaudit_detail: String
        searchaudit_end_point: String
        searchaudit_record_offset: Int
        searchaudit_record_limit: Int
        searchaudit_created_on: String
        searchaudit_updated_on: String
    }

    type SearchFilters {
        searchfilters_id: ID
        searchfilters_value: String
        searchfilters_type: String
        searchfilters_searchaudit_id: ID
        searchfilters_created_on: String
        searchfilters_updated_on: String
    }
    type SearchSaved {
        searchsaved_id: ID
        searchsaved_user_id: String
        searchsaved_searchaudit_id: ID
        searchsaved_created_on: String
        searchsaved_updated_on: String
    }
    type SearchSort {
        searchsort_id: ID
        searchsort_applied: String
        searchsort_value: String
        searchsort_searchaudit_id: ID
        searchsort_created_on: String
        searchsort_updated_on: String
    }
    type SearchSaveResult {
        status: String
        message: String
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
