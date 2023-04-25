import { Request, Response, NextFunction } from "express";

export const errorHandlingMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.error = err;
  next(err);
};
