import { Boxer } from "@core/models/boxer.model";
import { ResponseRequest } from "@core/models/response-request.model";
import { ICrud } from "./crud.interface";

export interface IBoxer extends ICrud {
  getState(id: string): ResponseRequest<Boxer>
}
