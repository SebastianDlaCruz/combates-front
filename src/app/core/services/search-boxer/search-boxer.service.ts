import { inject, Injectable } from '@angular/core';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { Boxer } from '@core/models/boxer.model';
import { map, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBoxerService {

  private boxerHttp = inject(BoxerHttpService);
  private destroySearchBoxers$ = new Subject<void>();

  byName(name: string) {
    return this.boxerHttp.getBoxerByName<Boxer[]>(name).pipe(
      takeUntil(this.destroySearchBoxers$),
      map(res => res.data));
  };

  destroySearchBoxer() {
    this.destroySearchBoxers$.next();
    this.destroySearchBoxers$.complete();
  }

}
