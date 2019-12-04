const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();

const logger = require("./utils/logger");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");
const cors = require("cors");
const passport = require("passport");
// const session = require("express-session");

const port = process.env.PORT;

const app = express();

// app.use(
//     session({
//         secret: process.env.SESSION_SECRET,
//         resave: false,
//         saveUninitialized: true
//     })
// );

app.use(passport.initialize());
app.use(passport.session());

passport.deserializeUser((user, next) => {
    console.log("called");
    next(null, user);
});

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
