import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IBoxer } from '@core/interfaces/boxer.interface';
import { Boxer } from '@core/models/boxer.model';
import { ResponseRequest } from '@core/models/response-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxerHttpService implements IBoxer {

  private http = inject(HttpClient);

  getState(id: string): ResponseRequest<Boxer> {
    throw new Error('Method not implemented.');
  }

  getAll<T>(page?: string, pageSize?: string): Observable<ResponseRequest<T>> {

    if (page && pageSize) {
      return this.http.get<ResponseRequest<T>>('/boxer', {
        params: {
          page,
          pageSize
        }
      });
    }

    return this.http.get<ResponseRequest<T>>('/boxer');
  }

  create<T>(data: T): Observable<ResponseRequest<void>> {
    return this.http.post<ResponseRequest<void>>('/boxer', data);
  }

  update<T>(id: string, data: T): Observable<ResponseRequest<void>> {
    return this.http.patch<ResponseRequest<void>>('/boxer', data, {
      params: {
        id
      }
    })
  }

  delete(id: string): Observable<ResponseRequest<void>> {
    return this.http.delete<ResponseRequest<void>>(`/boxer`, {
      params: {
        id
      }
    });
  }

}
