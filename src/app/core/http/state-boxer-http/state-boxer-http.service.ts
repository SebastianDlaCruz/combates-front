import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IStateBoxer } from '@core/interfaces/state-boxer.interface';
import { ResponseRequest } from '@core/models/response-request.model';
import { StateBoxer } from '@core/models/state-boxer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateBoxerHttpService implements IStateBoxer {

  private url = '/state-boxer';
  private http = inject(HttpClient);

  getAll(): Observable<ResponseRequest<StateBoxer[]>> {
    return this.http.get<ResponseRequest<StateBoxer[]>>(`${this.url}`);
  };

  getStateBoxer(id: number): Observable<ResponseRequest<StateBoxer>> {
    return this.http.get<ResponseRequest<StateBoxer>>(`${this.url}/${id}`);
  }
}
