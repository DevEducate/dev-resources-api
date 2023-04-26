export const createUnauthError = (
  message: string
): { message: string; statusCode: number } => ({
  message,
  statusCode: 401,
});

export const createNotFoundError = (
  message: string
): { message: string; statusCode: number } => ({
  message,
  statusCode: 404,
});

export const createBadRequestError = (
  message: string
): { message: string; statusCode: number } => ({
  message,
  statusCode: 400,
});

export const createForbiddenError = (
  message: string
): { message: string; statusCode: number } => ({
  message,
  statusCode: 403,
});

export const createInternalServerError = (
  message: string
): { message: string; statusCode: number } => ({
  message,
  statusCode: 500,
});

export const createConflictError = (
  message: string
): { message: string; statusCode: number } => ({
  message,
  statusCode: 409,
});

export const createValidationError = (
  message: string
): { message: string; statusCode: number } => ({
  message,
  statusCode: 422,
});

export const createUnauthorizedError = (
  message: string
): { message: string; statusCode: number } => ({
  message,
  statusCode: 401,
});

export const createNotImplementedError = (
  message: string
): { message: string; statusCode: number } => ({
  message,
  statusCode: 501,
});
