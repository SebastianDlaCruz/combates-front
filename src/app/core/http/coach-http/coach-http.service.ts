import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Coach } from '@core/models/coach.model';
import { ResponseState, ResponseStateData } from '@core/models/response-state.model';

@Injectable({
  providedIn: 'root'
})
export class CoachHttpService {

  private readonly URL = 'coach';
  private http = inject(HttpClient);


  create(coach: Coach) {
    return this.http.post<ResponseState>(`/${this.URL}`, coach);
  }

  getAll() {
    return this.http.get<ResponseStateData<Coach[]>>(`/${this.URL}`);
  }


  delete(id: number) {
    return this.http.delete<ResponseState>(`/${this.URL}/${id}`);
  }


  update(id: number, coach: Coach) {
    return this.http.patch<ResponseState>(`/${this.URL}/${id}`, coach);
  }

  getFindOne(id: number) {
    return this.http.get<ResponseStateData<Coach>>(`/${this.URL}/${id}`);
  }
}
