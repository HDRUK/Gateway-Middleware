const { ApolloServer } = require("apollo-server");
require("dotenv").config();

const logger = require("./utils/logger");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: err => {
        if (err.originalError && err.originalError.error_message) {
            err.message = err.originalError.error_message;
        }
        logger.log({
            level: "error",
            message: `${Date()} - ${err.message}`
        });
        return err;
    }
});

server.listen(5001).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
