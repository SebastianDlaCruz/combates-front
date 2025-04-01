import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ISchool } from '@core/interfaces/school.interface';
import { ResponseRequest } from '@core/models/response-request.model';
import { School } from '@core/models/school.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolHttpService implements ISchool {

  private url = '/school';
  private http = inject(HttpClient);

  getSchool(id: number): Observable<ResponseRequest<School>> {
    return this.http.get<ResponseRequest<School>>(`${this.url}/${id}`);
  }

  getAll(): Observable<ResponseRequest<School[]>> {
    return this.http.get<ResponseRequest<School[]>>(`${this.url}`);
  }

}
