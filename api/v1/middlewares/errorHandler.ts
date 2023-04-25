import { Request, Response, NextFunction } from "express";

type ErrorResponse = {
  status: number;
  message: string;
  error?: any;
};

export const errorHandler =
  (status: number, message: string, error?: any) =>
  (req: Request, res: Response, next: NextFunction) => {
    const errorResponse: ErrorResponse = { status, message, error };

    if (!errorResponse.error) {
      delete errorResponse.error;
    }

    res.status(status).json(errorResponse);
  };

export const catchAsyncErrors =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
