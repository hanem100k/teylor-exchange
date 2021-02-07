import { Request, NextFunction } from "express";
import { Controller } from "../../../system/Controller";
import { SearchExchangeRatesInteractor } from "./SearchExchangeRatesInteractor";
import { ReponseModel } from "../../../types/index";

export class SearchExchangeRatesController extends Controller {
  interactor: SearchExchangeRatesInteractor;

  constructor() {
  	super();
  	this.interactor = new SearchExchangeRatesInteractor();
  }

  handler() {
  	return async (req: Request, res: ReponseModel, next: NextFunction) => {
  		const responseModel = await this.interactor.exec(req.body);
  		res.responseModel = responseModel;
  		next();
  	};
  }
}
