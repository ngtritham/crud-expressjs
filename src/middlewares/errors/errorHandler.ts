import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";
import { HttpStatusCode } from "../../common/constants";

interface ErrorResponse {
  status: string;
  message: string;
  stack?: string;
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let statusCode: number = HttpStatusCode.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";
  let isOperational = false;
  console.log("💡 errorHandler err: ", err);

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    isOperational = err.isOperational;
  }

  const errorResponse: ErrorResponse = {
    status: "error",
    message: message,
  };

  if (process.env.NODE_ENV === "development") {
    errorResponse.stack = err.stack;
    console.error("Error:", {
      message: err.message,
      stack: err.stack,
      statusCode,
    });
  } else {
    if (!isOperational) {
      console.error("CRITICAL ERROR:", err);
      errorResponse.message = "Something went wrong";
    }
  }

  res.status(statusCode).json(errorResponse);
};
