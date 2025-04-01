import { ResponseRequest } from "@core/models/response-request.model";
import { StateFights } from "@core/models/state-fights.model";
import { Observable } from "rxjs";
import { IGetAll } from "./crud.interface";

export interface IStateFights extends IGetAll<StateFights[]> {
  getStateFights(id: number): Observable<ResponseRequest<StateFights>>
}
