import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseState, ResponseStateData } from '@core/models/response-state.model';
import { School } from '@core/models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolHttpService {

  private readonly URL = 'school';
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<ResponseStateData<School[]>>(`/${this.URL}`);
  }

  create(school: School) {
    return this.http.post<ResponseState>(`/${this.URL}`, school);
  }

  delete(id: number) {
    return this.http.delete<ResponseState>(`/${this.URL}/${id}`);
  }

  getFindOne(id: number) {
    return this.http.get<ResponseStateData<School>>(`/${this.URL}/${id}`);
  }

  update(id: number, school: { name: string }) {
    return this.http.patch<ResponseState>(`/${this.URL}/${id}`, school);
  }
}
