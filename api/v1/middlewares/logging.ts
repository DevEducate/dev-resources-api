import { Request, Response, NextFunction } from "express";
import winston from "winston";
import { ElasticsearchTransport } from "winston-elasticsearch";

// app settings
import { appSettings } from "./../../../config/appSettings";
const { elasticsearch } = appSettings;

// logger configuration
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(), // Adds a timestamp to the log entries
    winston.format.json() // Formats the log entries as a JSON object
  ),
  transports: [
    new winston.transports.Console(), // Logs to the console
    new winston.transports.File({
      filename: "api/v1/logs/error.log",
      level: "error",
    }), // Log errors to a file
    new winston.transports.File({ filename: "api/v1/logs/combined.log" }), // Log all entries to a file
    new ElasticsearchTransport({
      // Log entries to Elasticsearch
      level: "info",
      indexPrefix: "dev-resources-api-logs",
      clientOpts: {
        node: elasticsearch.url,
      }, // this code makes it so that the logs are sent to Elasticsearch running on localhost:9200
    }),
  ],
});

// Middleware to log incoming requests
export const logRequests = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log request information
  logger.info({
    message: `${req.method} ${req.originalUrl}`,
    query: req.query,
    body: req.body,
    headers: req.headers,
  });
  next(); // Call the next middleware or route handler in the chain
};

// Middleware to log responses
export const logResponses = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Save the original `send` function of the response object
  const originalSend = res.send;

  // Override the `send` function of the response object
  res.send = function (...args: any[]) {
    // Log response information
    logger.info({
      message: `Response status: ${res.statusCode}`,
      headers: res.getHeaders(),
      body: args[0],
    });
    // Call the original `send` function with the provided arguments
    return originalSend.call(res, ...args);
  };

  next(); // Call the next middleware or route handler in the chain
};
