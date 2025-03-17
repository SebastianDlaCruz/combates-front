import { inject, Injectable } from '@angular/core';
import { CategoryHttpService } from '@core/http/category-http/category-http.service';
import { catchError, map, of, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly categoryHttp = inject(CategoryHttpService);
  private destroy$ = new Subject<void>();


  getName(id: number) {
    return this.categoryHttp.getCategory(id).pipe(
      takeUntil(this.destroy$),
      map(category => category.data?.name),
      catchError(() => of('Esta categoría no existe'))
    );
  }

  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
