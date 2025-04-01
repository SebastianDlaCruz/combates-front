import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";

/**
 * Requerido para devolver valores datos de las peticiones HTTP.
 * Si necesita paginacion tiene parámetros específicos
 * @params  page y pageSize
 *
 */
export interface IGetAll<T> {
  getAll(page?: string, pageSize?: string): Observable<ResponseRequest<T>>;
}

/**
 * Requerido para crear un dato
 * @params data T
 */

export interface ICreate<T> {
  create(data: T): Observable<ResponseRequest<void>>;
}

/**
 * Requerido para actualizar un dato
 * @params  id  data
 */

export interface IUpdate<T> {
  update(id: string | number, data: T): Observable<ResponseRequest<void>>;
}


/**
 * Requerido para eliminar un dato
 * @params data T
 */

export interface IDelete {
  delete(id: string | number): Observable<ResponseRequest<void>>;
}
