import { Component, inject, input, OnInit, output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CoachHttpService } from '@core/http/coach-http/coach-http.service';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { Coach } from '@core/models/coach.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherEdit, featherTrash2 } from '@ng-icons/feather-icons';
import { ConfirmModalComponent } from '@shared/components/confirm-modal/confirm-modal.component';
import { MenuVerticalComponent } from '@shared/components/menu-vertical/menu-vertical.component';
import { MenuVerticalItem } from '@shared/components/menu-vertical/model/menu-vertical.model';

@Component({
  selector: 'app-item-coach',
  imports: [NgIcon, MenuVerticalComponent, ConfirmModalComponent],
  templateUrl: './item-coach.component.html',
  styleUrl: './item-coach.component.css',
  providers: [
    provideIcons({ featherTrash2, featherEdit })
  ]
})
export class ItemCoachComponent implements OnInit {

  @ViewChild('confirmModal') confirmModal!: ConfirmModalComponent;

  private schoolHttp = inject(SchoolHttpService);
  private coachHttp = inject(CoachHttpService);
  private router = inject(Router);

  nameSchool = "";
  editIcon = featherEdit;
  trashIcon = featherTrash2;

  coach = input.required<Coach>();
  deleteCoach = output<number>();

  menuItems: MenuVerticalItem[] = [
    {
      label: 'Editar entrenado',
      icon: featherEdit,
      action: () => {
        this.onEdit();
      }
    },
    {
      label: 'Eliminar entrenado',
      icon: featherTrash2,
      action: () => {
        this.onDelete(this.coach().id ?? 0);
      }
    }
  ];

  ngOnInit(): void {
    this.schoolHttp.getFindOne(this.coach().id_school ?? 0).subscribe(res => this.nameSchool = res.data.name);
  }

  onDelete(id: number) {
    this.coachHttp.delete(id).subscribe({
      next: (res) => {
        this.deleteCoach.emit(id);
      }
    });
  }

  onEdit() {
    this.router.navigate(['admin/edit-coach', this.coach().id ?? 0]);
  }

  onOpenModal() {
    this.confirmModal.open();
  }

}
