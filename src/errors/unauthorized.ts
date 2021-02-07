export class UnauthorizedError extends Error {
    status: number

    type: string

    message: string

    constructor(message?: string, type?: string) {
    	super();
    	this.status = 403;
    	this.type = type || "UNAUTHORIZED";
    	this.message = message || "Unauthorized";
    }
}
