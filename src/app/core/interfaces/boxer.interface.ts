import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";
import { ICrud } from "./crud.interface";

export interface IBoxer extends ICrud {
  getBoxerByName<T>(nameBox: string): Observable<ResponseRequest<T>>;
  updateState(id: string, state: { state: number }): Observable<ResponseRequest<void>>;
  updateCorner(id: string, corner: { corner: string }): Observable<ResponseRequest<void>>;
}
