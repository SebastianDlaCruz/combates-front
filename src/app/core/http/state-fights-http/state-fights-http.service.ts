import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IStateFights } from '@core/interfaces/state-fights.model';
import { ResponseRequest } from '@core/models/response-request.model';
import { StateFights } from '@core/models/state-fights.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StateFightsHttpService implements IStateFights {

  private url = '/state-clashes';
  private http = inject(HttpClient);


  getAll(): Observable<ResponseRequest<StateFights[]>> {
    return this.http.get<ResponseRequest<StateFights[]>>(`${this.url}`);
  }

  getStateFights(id: number): Observable<ResponseRequest<StateFights>> {
    return this.http.get<ResponseRequest<StateFights>>(`${this.url}/${id}`);
  }

}
