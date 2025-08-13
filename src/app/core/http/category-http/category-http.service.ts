import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@core/models/category.model';
import { ResponseStateData } from '@core/models/response-state.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {

  private readonly URL = 'category';
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<ResponseStateData<Category[]>>(`/${this.URL}`);
  }
}
