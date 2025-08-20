import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { Boxer } from '@core/models/boxer.model';
import { ToastComponent, ToastService, ToastStatus } from '@shared/components/toast';
import { BehaviorSubject } from 'rxjs';
import { ItemBoxerComponent } from './components/item-boxer/item-boxer.component';


@Component({
  selector: 'app-view-boxer',
  imports: [ItemBoxerComponent, AsyncPipe, ToastComponent],
  templateUrl: './view-boxer.component.html',
  styleUrl: './view-boxer.component.css',
  providers: [ToastService]
})
export class ViewBoxerComponent implements OnInit {

  private boxer = inject(BoxerHttpService);
  private destroyRef = inject(DestroyRef);
  private toast = inject(ToastService);

  boxers$ = new BehaviorSubject<Boxer[]>([])


  ngOnInit(): void {
    this.boxer.getAll().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(res => this.boxers$.next(res.data));
  }


  onDelete(uuid: string) {
    const boxers = this.boxers$.getValue();
    const updated = boxers.filter(boxer => boxer.id !== uuid);
    this.boxers$.next(updated);

    this.toast.open({ paragraph: 'Boxeador eliminado', status: ToastStatus.SUCCESS, title: 'Éxito', deration: 3000 });

  }

}
