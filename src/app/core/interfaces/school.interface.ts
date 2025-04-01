import { ResponseRequest } from "@core/models/response-request.model";
import { School } from "@core/models/school.model";
import { Observable } from "rxjs";
import { IGetAll } from "./crud.interface";

export interface ISchool extends IGetAll<School[]> {
  getSchool(id: number): Observable<ResponseRequest<School>>
}
