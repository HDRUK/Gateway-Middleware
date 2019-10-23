const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        searchAuditLog: [SearchAudit_log]
    }
    type SearchAudit_log {
        searchAudit_ID: ID!
        search_user_ID: String
        search_Detail: String
        search_end_point: String
        created_on: TimeStamp
        last_updated: TimeStamp
    }
`;

module.exports = typeDefs;
