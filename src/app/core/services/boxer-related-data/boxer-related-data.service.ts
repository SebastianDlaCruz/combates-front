import { inject, Injectable } from '@angular/core';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { CategoryHttpService } from '@core/http/category-http/category-http.service';
import { CoachHttpService } from '@core/http/coach-http/coach-http.service';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { StateBoxerHttpService } from '@core/http/state-boxer-http/state-boxer-http.service';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxerRelatedDataService {


  private boxerHttp = inject(BoxerHttpService);
  private schoolHttp = inject(SchoolHttpService);
  private categoryHttp = inject(CategoryHttpService);
  private coachHttp = inject(CoachHttpService);
  private stateHttp = inject(StateBoxerHttpService);

  getData() {
    return forkJoin({
      schools: this.schoolHttp.getAll(),
      categories: this.categoryHttp.getAll(),
      couches: this.coachHttp.getAll(),
      stateBoxer: this.stateHttp.getAll()
    }).pipe(
      map(({ schools, categories, couches, stateBoxer }) => ({ schools: schools.data, categories: categories.data, couches: couches.data, stateBoxer: stateBoxer.data }))
    )
  }

}
