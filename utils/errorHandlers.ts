type CustomError = { message: string; statusCode: number };

const createError =
  (statusCode: number) =>
  (message: string): CustomError => ({
    message,
    statusCode,
  });

export const createUnauthError = createError(401);
export const createNotFoundError = createError(404);
export const createBadRequestError = createError(400);
export const createForbiddenError = createError(403);
export const createInternalServerError = createError(500);
export const createConflictError = createError(409);
export const createValidationError = createError(422);
export const createUnauthorizedError = createError(401);
export const createNotImplementedError = createError(501);
