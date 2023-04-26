// errorLogging.ts
import { Request, Response, NextFunction } from "express";
import { logger } from "./logging";

const formatTime = (time: string) => {
  // Formats the string representing the time to the local time of the user
  const date = new Date(time);
  const userDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60 * 1000
  );

  // You can adjust options as needed
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return userDate.toLocaleString(undefined, options);
};

// Function to log errors
const logError = (error: Error, req: Request) => {
  logger.error({
    message: "Error",
    error: error.message,
    // log the user's IP address
    ip: req.ip,
    // log the API address
    apiAddress: req.originalUrl,
    timestamp: formatTime(new Date().toISOString()),
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
  logError(err, req);
  next(err);
};
