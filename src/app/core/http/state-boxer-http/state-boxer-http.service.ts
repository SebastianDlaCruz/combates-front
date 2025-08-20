import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseStateData } from '@core/models/response-state.model';
import { StateBoxer } from '@core/models/state-boxer.model';

@Injectable({
  providedIn: 'root'
})
export class StateBoxerHttpService {

  private readonly API = "state-boxer";
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<ResponseStateData<StateBoxer[]>>(`/${this.API}`);
  }
}
