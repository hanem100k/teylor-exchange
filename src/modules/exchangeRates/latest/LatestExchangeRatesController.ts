import { Request, NextFunction } from "express";
import { Controller } from "../../../system/Controller";
import { LatestExchangeRatesInteractor } from "./LatestExchangeRatesInteractor";
import { ReponseModel } from "../../../types/index";

export class LatestExchangeRatesController extends Controller {
  interactor: LatestExchangeRatesInteractor;

  constructor() {
  	super();
  	this.interactor = new LatestExchangeRatesInteractor();
  }

  handler() {
  	return async (req: Request, res: ReponseModel, next: NextFunction) => {
  		const responseModel = await this.interactor.exec(req.body);
  		res.responseModel = responseModel;
  		next();
  	};
  }
}
