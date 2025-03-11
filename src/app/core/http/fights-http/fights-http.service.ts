import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFights } from '@core/interfaces/fights.interface';
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

  getAll<T>(page?: string, pageSize?: string): Observable<ResponseRequest<T>> {

    if (page && pageSize) {
      return this.http.get<ResponseRequest<T>>(`${this.urlBase}`, {
        params: {
          page,
          pageSize
        }
      });
    };

    return this.http.get<ResponseRequest<T>>(`${this.urlBase}`);
  };

  create<T>(data: T): Observable<ResponseRequest<void>> {
    return this.http.post<ResponseRequest<void>>(`${this.urlBase}`, data);
  };

  update<T>(id: number, data: T): Observable<ResponseRequest<void>> {
    return this.http.patch<ResponseRequest<void>>(`${this.urlBase}/${id}`, data);
  }

  delete(id: number): Observable<ResponseRequest<void>> {
    return this.http.delete<ResponseRequest<void>>(`${this.urlBase}/${id}`);
  };


}
