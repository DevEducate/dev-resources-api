import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import appSettings from "./../../../config/appSettings";
import { createUnauthError } from "./../../../utils/errorHandlers";

type UserPayload = {
  userID: string;
  name: string;
};

type CustomRequest = Request & {
  user?: UserPayload;
};

const authenticationMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const error = createUnauthError("No token provided");
    res.status(error.statusCode).json({ error: error.message });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const { auth } = appSettings.middleware;
    const payload = jwt.verify(token, auth.secret as string) as UserPayload;
    req.user = { userID: payload.userID, name: payload.name };

    next();
  } catch (error) {
    const unauthError = createUnauthError(
      "Not authorized to access this route"
    );
    res.status(unauthError.statusCode).json({ error: unauthError.message });
  }
};

export default authenticationMiddleware;
