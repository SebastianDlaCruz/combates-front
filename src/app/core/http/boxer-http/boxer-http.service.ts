import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Boxer } from '@core/models/boxer.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoxerHttpService {

  private readonly URL = 'boxer'
  private http = inject(HttpClient);

  create(boxer: Boxer) {
    return this.http.post(`${environment.api}/${this.URL}`, boxer);
  }
}
