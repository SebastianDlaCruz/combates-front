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
  private routerBase = '/boxer'

  getState(id: string): ResponseRequest<Boxer> {
    throw new Error('Method not implemented.');
  }

  /**
   * Retorno todos los boxeadores. Si se le ingresa los parametros page y pageSize retornara la paginacion de los boxeadores
   * @param page
   * @param pageSize
   * @returns Observable<ResponseRequest<Boxer[]>>
   */
  getAll<T>(page?: string, pageSize?: string): Observable<ResponseRequest<T>> {

    if (page && pageSize) {
      return this.http.get<ResponseRequest<T>>(this.routerBase, {
        params: {
          page,
          pageSize
        }
      });
    }

    return this.http.get<ResponseRequest<T>>(this.routerBase);
  }

  create<T>(data: T): Observable<ResponseRequest<void>> {
    return this.http.post<ResponseRequest<void>>(this.routerBase, data);
  }

  update<T>(id: string, data: T): Observable<ResponseRequest<void>> {
    return this.http.patch<ResponseRequest<void>>(`${this.routerBase}/${id}`, data)
  }

  delete(id: string): Observable<ResponseRequest<void>> {
    return this.http.delete<ResponseRequest<void>>(`${this.routerBase}/${id}`);
  }

}
