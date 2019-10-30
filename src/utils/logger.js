const winston = require("winston");
const winstonDailyRotateFile = require("winston-daily-rotate-file");

const logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => `${info.timestamp} - ${info.level}  - ${info.message}`)
);

winston.loggers.add("customLogger", {
    format: logFormat,
    transports: [
        new winstonDailyRotateFile({
            filename: "./log/custom-%DATE%.log",
            datPattern: "YYYY-MM-DD",
            level: "info"
        }),
        new winston.transports.Console({
            level: "info"
        })
    ]
});

const logger = winston.loggers.get("customLogger");

module.exports = logger;
