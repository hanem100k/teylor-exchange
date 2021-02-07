export class CustomResponse {
  statuscode: number;

  version: string;

  timestamp: Date;

  data: object;

  constructor(data = {}, statuscode = 200, version = "1.0") {
  	this.statuscode = statuscode;
  	this.version = version;
  	this.timestamp = new Date();
  	this.data = data;
  }
}
