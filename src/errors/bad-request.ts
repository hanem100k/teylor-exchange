import { ApplicationError } from "./application-error";

export class BadRequestError extends ApplicationError {
	type: string = "BadRequest";

	constructor(message?: string) {
		super(message || "Bad request", 400);
	}
}
