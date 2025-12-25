import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "../../common/errors";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = new NotFoundError();
  next(error);
};
