import { Boxer } from "@core/models/boxer.model";
import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";
import { ICreate, IDelete, IGetAll, IUpdate } from "./crud.interface";

export interface IBoxer extends ICreate<Boxer>, IDelete, IGetAll<Boxer[]>, IUpdate<Boxer> {
  search(id_category: number, name: string): Observable<ResponseRequest<Boxer[]>>;
  getBoxerByName(nameBox: string): Observable<ResponseRequest<Boxer[]>>;
  updateState(id: string, state: { state: number }): Observable<ResponseRequest<void>>;
  updateCorner(id: string, corner: { corner: string }): Observable<ResponseRequest<void>>;
  getBoxer(id: string): Observable<ResponseRequest<Boxer>>;
}
