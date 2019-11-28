const { ApolloServer } = require("apollo-server");
require("dotenv").config();

const logger = require("./utils/logger");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");

const port = process.env.PORT;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        console.log(req.headers.cookie);
    },
    cors: { origin: process.env.FRONTEND_APP, credentials: true },
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
