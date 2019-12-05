const { ApolloServer } = require("apollo-server");
require("dotenv").config();

const logger = require("./utils/logger");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");
const fetch = require("node-fetch");

const port = process.env.PORT;

const getUser = async token => {
    try {
        if (token) {
            const response = await fetch(process.env.USER_INFO, {
                method: "GET",
                headers: { authorization: `Bearer ${token}` }
            });

            const json = await response.json();
            return json;
        }

        return null;
    } catch (err) {
        return null;
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: { origin: process.env.FRONTEND_APP, credentials: true },
    context: async ({ req }) => {
        const tokenWithBearer = req.headers.authorization || "";
        const token = tokenWithBearer.split(" ")[1];
        const user = await getUser(token);
        return {
            user
        };
    },
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
