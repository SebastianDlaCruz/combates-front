import { AsyncPipe } from '@angular/common';
import { Component, computed, DestroyRef, inject, input, output, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { CoachHttpService } from '@core/http/coach-http/coach-http.service';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { Boxer } from '@core/models/boxer.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherEdit, featherTrash2 } from '@ng-icons/feather-icons';
import { ConfirmModalComponent } from '@shared/components/confirm-modal/confirm-modal.component';
import { MenuVerticalComponent } from '@shared/components/menu-vertical/menu-vertical.component';
import { MenuVerticalItem } from '@shared/components/menu-vertical/model/menu-vertical.model';

@Component({
  selector: 'app-item-boxer',
  imports: [NgIcon, MenuVerticalComponent, ConfirmModalComponent, AsyncPipe],
  templateUrl: './item-boxer.component.html',
  styleUrl: './item-boxer.component.css',
  providers: [
    provideIcons({ featherEdit, featherTrash2 })
  ]
})
export class ItemBoxerComponent {

  @ViewChild('confirmModal') confirmModal!: ConfirmModalComponent;

  private boxerHttp = inject(BoxerHttpService);
  private coach = inject(CoachHttpService);
  private school = inject(SchoolHttpService);
  private refDestroy = inject(DestroyRef);
  private router = inject(Router);

  boxer = input.required<Boxer>();
  deleteBoxer = output<string>();

  coach$ = computed(() => this.coach.getFindOne(this.boxer().id_coach).pipe(
    takeUntilDestroyed(this.refDestroy)
  ));

  school$ = computed(() => this.school.getFindOne(this.boxer().id_school).pipe(
    takeUntilDestroyed(this.refDestroy)
  ));


  editIcon = featherEdit;
  trashIcon = featherTrash2;

  menuItems: MenuVerticalItem[] = [
    {
      label: 'Editar',
      icon: featherEdit,
      action: () => {
        this.onEdit();
      }
    }, {
      label: 'Eliminar',
      icon: featherTrash2,
      action: () => {
        this.onDelete(this.boxer().id ?? '');
      }
    }
  ];


  onDelete(uuid: string) {

    this.boxerHttp.delete(uuid).subscribe({
      next: () => {
        this.deleteBoxer.emit(uuid);

      }
    })
  }

  onEdit() {
    this.router.navigate([`/admin/edit-boxer/${this.boxer().id}`]);
  }

  onOpenModal() {
    this.confirmModal.open();
  }
}
