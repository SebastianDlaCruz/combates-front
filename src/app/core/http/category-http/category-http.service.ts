import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICategory } from '@core/interfaces/category.interface';
import { Category } from '@core/models/category.model';
import { ResponseRequest } from '@core/models/response-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService implements ICategory {

  private http = inject(HttpClient);
  private readonly url = '/category';

  constructor() { }

  getCategory(id: number): Observable<ResponseRequest<Category>> {
    return this.http.get<ResponseRequest<Category>>(`${this.url}/${id}`);
  }

  getAll(): Observable<ResponseRequest<Category[]>> {
    return this.http.get<ResponseRequest<Category[]>>(`${this.url}`)
  }

  create(data: Category): Observable<ResponseRequest<void>> {
    throw new Error('Method not implemented.');
  }
  update(id: string | number, data: Category): Observable<ResponseRequest<void>> {
    throw new Error('Method not implemented.');
  }
  delete(id: string | number): Observable<ResponseRequest<void>> {
    throw new Error('Method not implemented.');
  }
}
