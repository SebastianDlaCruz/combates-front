import { inject, Injectable } from '@angular/core';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { map, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBoxerService {

  private boxerHttp = inject(BoxerHttpService);
  private destroySearchBoxers$ = new Subject<void>();

  byName(id_category: number, name: string) {
    return this.boxerHttp.search(id_category, name).pipe(
      takeUntil(this.destroySearchBoxers$),
      map(res => res.data));
  };

  destroySearchBoxer() {
    this.destroySearchBoxers$.next();
    this.destroySearchBoxers$.complete();
  }

}


