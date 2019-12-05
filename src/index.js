const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();

const logger = require("./utils/logger");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");
const cors = require("cors");
const fetch = require("node-fetch");

const port = process.env.PORT;

const app = express();
const corsOptions = {
    origin: process.env.FRONTEND_APP,
    credentials: true
};

app.use(cors(corsOptions));

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

server.applyMiddleware({
    app,
    path: "/",
    cors: false
});

app.listen(port, () =>
    logger.log({
        level: "info",
        message: `Server running on Port ${port}`
    })
);
