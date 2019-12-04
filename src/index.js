const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();

const logger = require("./utils/logger");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");
const cors = require("cors");
const passport = require("passport");

const port = process.env.PORT;

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: { origin: process.env.FRONTEND_APP, credentials: true },
    formatError: err => {
        if (err.originalError && err.originalError.error_message) {
            err.message = err.originalError.error_message;
        }
        logger.log("error", err.message);

        return err;
    }
});

const corsOptions = {
    origin: process.env.FRONTEND_APP,
    credentials: true
};

app.use(cors(corsOptions));

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
