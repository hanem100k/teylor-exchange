import { Request, NextFunction } from "express";
import { Controller } from "../../../system/Controller";
import { AddExchangeRatesInteractor } from "./AddExchangeRatesInteractor";
import { ReponseModel } from "../../../types/index";

export class AddExchangeRatesController extends Controller {
  interactor: AddExchangeRatesInteractor;

  constructor() {
  	super();
  	this.interactor = new AddExchangeRatesInteractor();
  }

  handler() {
  	return async (req: Request, res: ReponseModel, next: NextFunction) => {
  		const responseModel = await this.interactor.exec(req.body);
  		res.responseModel = responseModel;
  		next();
  	};
  }
}
