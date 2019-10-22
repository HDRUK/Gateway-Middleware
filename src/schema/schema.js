const { gql } = require("apollo-server");

// const userSchema = require("./user");
// const bundleSchema = require("./bundle");
// const allocationSchema = require("./allocation");
// const fileSchema = require("./file/file");

// const linkSchema = gql`
//   type Query {
//     _: Boolean
//   }

//   type Mutation {
//     _: Boolean
//   }

//   type Subscription {
//     _: Boolean
//   }
// `;

// module.exports = [linkSchema, bundleSchema, allocationSchema, userSchema, fileSchema];

const typeDefs = gql`
  # Your schema will go here
`;

module.exports = typeDefs;
