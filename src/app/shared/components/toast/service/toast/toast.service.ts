import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil, timer } from 'rxjs';
import { Toast } from '../../model/toast.model';


@Injectable()
export class ToastService {

  private readonly visible$ = new BehaviorSubject<boolean>(false);
  private readonly data$ = new BehaviorSubject<Toast | null>(null);
  private destroyTimer$ = new Subject<void>();

  open(config: Toast) {
    this.visible$.next(true);
    this.data$.next(config);

    if (config.deration) {
      this.timer(config.deration);
    }
  }

  close() {
    this.visible$.next(false);
  }

  timer(duration: number) {

    timer(duration).pipe(
      takeUntil(this.destroyTimer$)
    ).subscribe(() => this.close())


  }

  getVisible$() {
    return this.visible$.asObservable();
  }

  getData$() {
    return this.data$.asObservable();
  }

}
