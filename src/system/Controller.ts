import {
	RequestHandler, Request, Response, NextFunction
} from "express";
import { ReponseModel } from "../types/index";
import { BadRequestError } from "../errors/bad-request";
import { HandlerOptions, getMessageFromJoiError } from "./util";

export class Controller {
  preHandler = (options?: HandlerOptions): RequestHandler => async (
  	req: Request,
  	res: Response,
  	next: NextFunction
  ) => {
  	if (options?.validation?.body) {
  		const { error } = options?.validation?.body.validate(req.body);
  		if (error) {
  			return next(new BadRequestError(getMessageFromJoiError(error)));
  		}
  	}

  	return next();
  };

  handler() {}

  reply() {
  	return (req: Request, res: ReponseModel) => {
  		const { responseModel } = res;

  		res.json(responseModel);
  	};
  }
}
