import { Coach } from "@core/models/coach.model";
import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";

export interface ICoach {
  getCoach(id: number): Observable<ResponseRequest<Coach>>
}
