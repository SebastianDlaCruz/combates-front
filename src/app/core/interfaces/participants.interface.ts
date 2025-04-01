import { Participants } from "@core/models/participants.model";
import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";

export interface IParticipants {
  getAll(id_category?: number): Observable<ResponseRequest<Participants[]>>
  getAllByIdClashes(id_clashes: number): Observable<ResponseRequest<Participants[]>>
}
