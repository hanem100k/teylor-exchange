import { ApplicationError } from "./application-error";

export class Conflict extends ApplicationError {
	constructor(message?: string) {
		super(message || "Conflict", 409);
	}
}
