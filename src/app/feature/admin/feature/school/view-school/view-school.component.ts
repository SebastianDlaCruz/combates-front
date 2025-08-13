import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { School } from '@core/models/school.model';
import { ToastComponent, ToastService, ToastStatus } from '@shared/components/toast';
import { BehaviorSubject } from 'rxjs';
import { ItemSchoolComponent } from './components/item-school/item-school.component';

@Component({
  selector: 'app-view-school',
  imports: [ItemSchoolComponent, AsyncPipe, ToastComponent],
  templateUrl: './view-school.component.html',
  styleUrl: './view-school.component.css',
  providers: [ToastService]
})
export class ViewSchoolComponent {

  private schoolHttp = inject(SchoolHttpService);
  private destroyRef = inject(DestroyRef);
  private toast = inject(ToastService);
  private schoolsSubject = new BehaviorSubject<School[]>([]);
  schools$ = this.schoolsSubject.asObservable();

  constructor() {
    this.schoolHttp.getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ data }) => this.schoolsSubject.next(data));
  }

  onDelete(id: number) {
    const current = this.schoolsSubject.getValue();
    const updated = current.filter(school => school.id !== id);
    this.schoolsSubject.next(updated);

    this.toast.open({ paragraph: 'Escuela eliminada', status: ToastStatus.SUCCESS, title: 'Éxito', deration: 3000 });
  }


}
