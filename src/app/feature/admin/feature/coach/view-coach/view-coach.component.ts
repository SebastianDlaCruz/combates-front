import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CoachHttpService } from '@core/http/coach-http/coach-http.service';
import { Coach } from '@core/models/coach.model';
import { ToastComponent, ToastService, ToastStatus } from '@shared/components/toast';
import { BehaviorSubject } from 'rxjs';
import { ItemCoachComponent } from './components/item-coach/item-coach.component';

@Component({
  selector: 'app-view-coach',
  imports: [ItemCoachComponent, AsyncPipe, ToastComponent],
  templateUrl: './view-coach.component.html',
  styleUrl: './view-coach.component.css'
})
export class ViewCoachComponent {

  private coachHttp = inject(CoachHttpService);
  private destroyRef = inject(DestroyRef);
  private toast = inject(ToastService);

  coaches$ = new BehaviorSubject<Coach[]>([]);

  ngOnInit(): void {
    this.coachHttp.getAll().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(res => this.coaches$.next(res.data));
  }

  onDelete(id: number) {
    const coach = this.coaches$.getValue();
    const updated = coach.filter(coach => coach.id !== id);
    this.coaches$.next(updated);

    this.toast.open({ paragraph: 'Entrenador eliminado', status: ToastStatus.SUCCESS, title: 'Éxito', deration: 3000 });
  }

}
