const { gql } = require("apollo-server-express");

const searchSchema = require("./DB/search_schema");
const hdrAPISchema = require("./HDR/hdrAPI_schema");

const linkSchema = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }

    type Subscription {
        _: Boolean
    }
`;

module.exports = [linkSchema, searchSchema, hdrAPISchema];
