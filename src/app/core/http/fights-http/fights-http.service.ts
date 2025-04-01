import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFights } from '@core/interfaces/fights.interface';
import { Fights } from '@core/models/fights.model';
import { ResponseRequest } from '@core/models/response-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FightsHttpService implements IFights {


  private http = inject(HttpClient);
  private urlBase = '/clashes';

  updateState(id: number, state: { state: number }): Observable<ResponseRequest<void>> {
    return this.http.put<ResponseRequest<void>>(`${this.urlBase}/${id}`, state);
  };

  getAll(page?: string, pageSize?: string): Observable<ResponseRequest<Fights[]>> {


    if (page && pageSize) {
      return this.http.get<ResponseRequest<Fights[]>>(`${this.urlBase}`, {
        params: {
          page,
          pageSize
        }
      });
    };

    return this.http.get<ResponseRequest<Fights[]>>(`${this.urlBase}`);
  };

  create(data: Fights): Observable<ResponseRequest<void>> {
    return this.http.post<ResponseRequest<void>>(`${this.urlBase}`, data);
  };

  update(id: number, data: Fights): Observable<ResponseRequest<void>> {
    return this.http.patch<ResponseRequest<void>>(`${this.urlBase}/${id}`, data);
  }

  delete(id: number): Observable<ResponseRequest<void>> {
    return this.http.delete<ResponseRequest<void>>(`${this.urlBase}/${id}`);
  };

  getFights(id: number): Observable<ResponseRequest<Fights>> {
    return this.http.get<ResponseRequest<Fights>>(`${this.urlBase}/${id}`);
  }

}

