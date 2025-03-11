import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";
import { ICrud } from "./crud.interface";

export interface IFights extends ICrud {
  updateState(id: number, state: { state: number }): Observable<ResponseRequest<void>>
}
