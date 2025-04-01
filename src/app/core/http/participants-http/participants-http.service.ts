import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IParticipants } from '@core/interfaces/participants.interface';
import { Participants } from '@core/models/participants.model';
import { ResponseRequest } from '@core/models/response-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsHttpService implements IParticipants {

  private http = inject(HttpClient);
  private readonly url = '/clashes-participants';

  getAll(): Observable<ResponseRequest<Participants[]>> {
    return this.http.get<ResponseRequest<Participants[]>>(`${this.url}`);
  };

  getAllByIdClashes(id_clashes: number): Observable<ResponseRequest<Participants[]>> {
    return this.http.get<ResponseRequest<Participants[]>>(`${this.url}/clashes/${id_clashes}`);
  }


}
