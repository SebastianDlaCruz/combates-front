import { inject, Injectable } from '@angular/core';
import { CategoryHttpService } from '@core/http/category-http/category-http.service';
import { CoachHttpService } from '@core/http/coach-http/coach-http.service';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { StateBoxerHttpService } from '@core/http/state-boxer-http/state-boxer-http.service';
import { forkJoin, Subscription } from 'rxjs';
import { DataBoxerRelated } from '../model/data-boxer-related.model';

@Injectable({
  providedIn: 'root'
})
export class BoxerRelatedDataService {

  private schoolHttp = inject(SchoolHttpService);
  private categoryHttp = inject(CategoryHttpService);
  private coachHttp = inject(CoachHttpService);
  private stateHttp = inject(StateBoxerHttpService);
  private sub$?: Subscription;
  data: DataBoxerRelated = {
    categories: [],
    couches: [],
    schools: [],
    stateBoxer: []
  }


  getData() {
    this.sub$ = forkJoin({
      schools: this.schoolHttp.getAll(),
      categories: this.categoryHttp.getAll(),
      couches: this.coachHttp.getAll(),
      stateBoxer: this.stateHttp.getAll()
    }).subscribe(({ schools, categories, couches, stateBoxer }) => {
      this.data = {
        schools: schools.data,
        categories: categories.data,
        couches: couches.data,
        stateBoxer: stateBoxer.data
      }
    })

  }


  onDestroy() {
    this.sub$?.unsubscribe();
  }

}
