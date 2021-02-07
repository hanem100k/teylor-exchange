import { Response } from "express";

export interface ReponseModel extends Response {
  responseModel: object;
}
