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

  updateState(id: number): Observable<ResponseRequest<Fights>> {
    throw new Error('Method not implemented.');
  };

  getAll<T>(page: string, pageSize: string): Observable<ResponseRequest<T>> {

    if (page && pageSize) {
      return this.http.get<ResponseRequest<T>>('/clashes', {
        params: {
          page,
          pageSize
        }
      });
    };

    return this.http.get<ResponseRequest<T>>('/clashes');
  };

  create<T>(data: T): Observable<ResponseRequest<void>> {
    return this.http.post<ResponseRequest<void>>('/clashes', data);
  };

  update<T>(id: number, data: T): Observable<ResponseRequest<void>> {
    return this.http.patch<ResponseRequest<void>>(`/clashes/${id}`, data);
  }

  delete(id: string): Observable<ResponseRequest<void>> {
    return this.http.delete<ResponseRequest<void>>(`/clashes/${id}`);
  }


}
