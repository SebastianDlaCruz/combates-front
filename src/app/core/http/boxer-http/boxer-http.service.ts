import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Boxer } from '@core/models/boxer.model';
import { ResponseState, ResponseStateData } from '@core/models/response-state.model';

@Injectable({
  providedIn: 'root'
})
export class BoxerHttpService {

  private readonly URL = 'boxer'
  private http = inject(HttpClient);

  create(boxer: Boxer) {
    return this.http.post(`/${this.URL}`, boxer);
  }

  getAll() {
    return this.http.get<ResponseStateData<Boxer[]>>(`/${this.URL}`);
  }

  delete(uuid: string) {
    return this.http.delete<ResponseState>(`/${this.URL}/${uuid}`);
  }

  update(uuid: string, boxer: Boxer) {
    return this.http.patch<ResponseState>(`/${this.URL}/${uuid}`, boxer);
  }


  getFindOne(uuid: string) {
    return this.http.get<ResponseStateData<Boxer>>(`/${this.URL}/${uuid}`);
  }

}
