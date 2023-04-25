// errorLogging.ts
import { Request, Response, NextFunction } from "express";
import { logger } from "./logging";

// Function to log errors
const logError = (error: Error) => {
  logger.error({
    message: "Error",
    error: error.message,
    timestamp: new Date().toISOString(),
  });
};

export const errorLoggingMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    status: 500,
    message: err.message,
  });
  logError(err);
  next(err);
};
