import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICoach } from '@core/interfaces/coach.interface';
import { Coach } from '@core/models/coach.model';
import { ResponseRequest } from '@core/models/response-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachHttpService implements ICoach {

  private url = '/coach';
  private http = inject(HttpClient);

  getCoach(id: number): Observable<ResponseRequest<Coach>> {
    return this.http.get<ResponseRequest<Coach>>(`${this.url}/${id}`);
  }


}
