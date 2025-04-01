import { Fights } from "@core/models/fights.model";
import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";
import { ICreate, IDelete, IGetAll, IUpdate } from "./crud.interface";

export interface IFights extends ICreate<Fights>, IUpdate<Fights>, IGetAll<Fights[]>, IDelete {
  updateState(id: number, state: { state: number }): Observable<ResponseRequest<void>>
}
