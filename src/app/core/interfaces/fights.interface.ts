import { Fights } from "@core/models/fights.model";
import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";
import { ICrud } from "./crud.interface";

export interface IFights extends ICrud {
  updateState(id: number): Observable<ResponseRequest<Fights>>
}
