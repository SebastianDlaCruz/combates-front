import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";
import { ICrud } from "./crud.interface";

export interface IBoxer extends ICrud {
  updateState(id: string, state: { state: number }): Observable<ResponseRequest<void>>
}
