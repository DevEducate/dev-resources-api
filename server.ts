require("dotenv").config();
import appSettings from "./config/appSettings";
const { app, database } = appSettings;

import express from "express";
import bodyParser from "body-parser";

const server = express();
const port = app.port;
import connectDB from "./config/database";

// middlewares
import { logRequests, logResponses } from "./api/v1/middlewares/logging";
import { errorLoggingMiddleware } from "./api/v1/middlewares/errorLogging";

const startServer = async () => {
  try {
    await connectDB(database.url as string);
    server
      .use(bodyParser.json())
      .use(logRequests)
      .get("/error", (req, res, next) => {
        // This will throw an error and trigger the error logging middleware
        throw new Error("Sample error");
      })
      .use(errorLoggingMiddleware, logResponses)
      .listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });
  } catch (err) {
    console.log(err);
  }
};

startServer();
