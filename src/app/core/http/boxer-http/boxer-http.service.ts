import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IBoxer } from '@core/interfaces/boxer.interface';
import { ResponseRequest } from '@core/models/response-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxerHttpService implements IBoxer {

  updateCorner(id: string, body: { corner: string }): Observable<ResponseRequest<void>> {
    return this.http.put<ResponseRequest<void>>(`${this.routerBase}/corner/${id}`, body);
  }

  private http = inject(HttpClient);
  private routerBase = '/boxer'

  updateState(id: string, state: { state: number }): Observable<ResponseRequest<void>> {
    return this.http.put<ResponseRequest<void>>(`${this.routerBase}/${id}`, state);
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


  getBoxerByName<T>(nameBoxer: string): Observable<ResponseRequest<T>> {
    return this.http.get<ResponseRequest<T>>(this.routerBase, {
      params: {
        nameBoxer
      }
    });
  };


  /**
   * Crea a el boxeador
   * @param data
   * @returns Observable<ResponseRequest<void>>
   */

  create<T>(data: T): Observable<ResponseRequest<void>> {
    return this.http.post<ResponseRequest<void>>(this.routerBase, data);
  }

  /**
   * Actuliza los datos del boxeador. Requiere de un id y los datos a actulizar
   * @param id
   * @param data
   * @returns Observable<ResponseRequest<void>>
   */
  update<T>(id: string, data: T): Observable<ResponseRequest<void>> {
    return this.http.patch<ResponseRequest<void>>(`${this.routerBase}/${id}`, data)
  }
  /**
   * Elimina al boxeador a travez de su id
   * @param id
   * @returns Observable<ResponseRequest<void>>
   */
  delete(id: string): Observable<ResponseRequest<void>> {
    return this.http.delete<ResponseRequest<void>>(`${this.routerBase}/${id}`);
  }

}
