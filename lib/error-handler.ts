import logger from './logger';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export const handleError = (error: Error | AppError) => {
  if (error instanceof AppError) {
    logger.error(`[${error.statusCode}] ${error.message}`);
    return {
      status: error.statusCode,
      message: error.message,
      isOperational: error.isOperational
    };
  }

  // Handle unknown errors
  logger.error(`[500] ${error.message}`);
  return {
    status: 500,
    message: 'Internal server error',
    isOperational: false
  };
};

export const asyncHandler = (fn: Function) => {
  return (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      const errorResponse = handleError(error);
      res.status(errorResponse.status).json({
        success: false,
        message: errorResponse.message
      });
    });
  };
}; 