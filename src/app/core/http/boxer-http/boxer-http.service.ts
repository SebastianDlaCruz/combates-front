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
  private url = '/boxer'


  getBoxer(id: string): Observable<ResponseRequest<Boxer>> {
    return this.http.get<ResponseRequest<Boxer>>(`${this.url}/${id}`);
  }

  updateState(id: string, state: { state: number }): Observable<ResponseRequest<void>> {
    return this.http.put<ResponseRequest<void>>(`${this.url}/${id}`, state);
  }

  search(id_category: number, name: string): Observable<ResponseRequest<Boxer[]>> {
    return this.http.get<ResponseRequest<Boxer[]>>(`${this.url}`, {
      params: {
        id_category,
        name
      }
    })
  };

  updateCorner(id: string, body: { corner: string }): Observable<ResponseRequest<void>> {
    return this.http.put<ResponseRequest<void>>(`${this.url}/corner/${id}`, body);
  }



  /**
   * Retorno todos los boxeadores. Si se le ingresa los parametros page y pageSize retornara la paginacion de los boxeadores
   * @param page
   * @param pageSize
   * @returns Observable<ResponseRequest<Boxer[]>>
   */

  getAll(page?: string, pageSize?: string): Observable<ResponseRequest<Boxer[]>> {
    if (page && pageSize) {
      return this.http.get<ResponseRequest<Boxer[]>>(this.url, {
        params: {
          page,
          pageSize
        }
      });
    }

    return this.http.get<ResponseRequest<Boxer[]>>(this.url);
  }


  getBoxerByName(nameBoxer: string): Observable<ResponseRequest<Boxer[]>> {
    return this.http.get<ResponseRequest<Boxer[]>>(this.url, {
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
    return this.http.post<ResponseRequest<void>>(this.url, data);
  }

  /**
   * Actuliza los datos del boxeador. Requiere de un id y los datos a actulizar
   * @param id
   * @param data
   * @returns Observable<ResponseRequest<void>>
   */
  update<T>(id: string, data: T): Observable<ResponseRequest<void>> {
    return this.http.patch<ResponseRequest<void>>(`${this.url}/${id}`, data)
  }
  /**
   * Elimina al boxeador a travez de su id
   * @param id
   * @returns Observable<ResponseRequest<void>>
   */
  delete(id: string): Observable<ResponseRequest<void>> {
    return this.http.delete<ResponseRequest<void>>(`${this.url}/${id}`);
  }

}
