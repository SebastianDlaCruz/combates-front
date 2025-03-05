import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";

export interface ICrud {
  getAll<T>(page?: string, pageSize?: string): Observable<ResponseRequest<T>>;
  create<T>(data: T): Observable<ResponseRequest<void>>;
  update<T>(id: string | number, data: T): Observable<ResponseRequest<void>>;
  delete(id: string | number): Observable<ResponseRequest<void>>;
}
