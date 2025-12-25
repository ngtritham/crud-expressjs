import { AppError } from "../../middlewares/errors";
import { HttpStatusCode } from "../constants";

export class NotFoundError extends AppError {
  constructor(entityName?: string) {
    const message = entityName ? `${entityName} is not found` : "Not found";
    super(message, HttpStatusCode.NOT_FOUND);
  }
}
