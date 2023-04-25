require("dotenv").config();
import { appSettings } from "./config/appSettings";
const { app, database } = appSettings;

import express from "express";

const server = express();
const port = app.port;
import connectDB from "./config/database";

// middlewares
import { logRequests, logResponses } from "./api/v1/middlewares/logging";

const startServer = async () => {
  try {
    await connectDB(database.url as string);
    server
      .use(logRequests)
      .use(logResponses)
      .listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });
  } catch (err) {
    console.log(err);
  }
};

startServer();
