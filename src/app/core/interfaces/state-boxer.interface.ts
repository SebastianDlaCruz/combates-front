import { ResponseRequest } from "@core/models/response-request.model";
import { StateBoxer } from "@core/models/state-boxer.model";
import { Observable } from "rxjs";
import { IGetAll } from "./crud.interface";

export interface IStateBoxer extends IGetAll<StateBoxer[]> {
  getStateBoxer(id: number): Observable<ResponseRequest<StateBoxer>>
}
