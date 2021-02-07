import { Request, NextFunction } from "express";
import { Controller } from "../../../system/Controller";
import { ListExchangeRatesInteractor } from "./ListExchangeRatesInteractor";
import { ReponseModel } from "../../../types/index";

export class ListExchangeRatesController extends Controller {
  interactor: ListExchangeRatesInteractor;

  constructor() {
  	super();
  	this.interactor = new ListExchangeRatesInteractor();
  }

  handler() {
  	return async (req: Request, res: ReponseModel, next: NextFunction) => {
  		const responseModel = await this.interactor.exec(req.body);
  		res.responseModel = responseModel;
  		next();
  	};
  }
}
