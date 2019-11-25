const { ApolloServer } = require("apollo-server");
require("dotenv").config();

const logger = require("./utils/logger");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");

const port = process.env.PORT;

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
    console.log("DB USER ", process.env.DATABASE_USER);
    console.log("DB PATH ", process.env.PATH);
    logger.log({
        level: "info",
        message: `Server running on Port ${url}`
    });
});
