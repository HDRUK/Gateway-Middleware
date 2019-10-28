const { ApolloServer } = require("apollo-server");
require("dotenv").config();

const logger = require("./utils/logger");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");

/* eslint-disable */
//  error  'process' is not defined  no-undef
const port = process.env.PORT;
/* eslint-enable */

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: err => {
        if (err.originalError && err.originalError.error_message) {
            err.message = err.originalError.error_message;
        }
        logger.log("error", err.message);

        return err;
    }
});

server.listen(port).then(({ url }) => {
    logger.log({
        level: "info",
        message: `Server running on Port ${url}`
    });
});
