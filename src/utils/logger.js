const winston = require("winston");

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [new winston.transports.File({ filename: "log/error.log", level: "error" })]
});

/* eslint-disable */
// eslint is reporting - 'process' is not defined  no-undef
if (process.env.NODE_ENV === "local") {
    /* eslint-enable */
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    );
}
module.exports = logger;
