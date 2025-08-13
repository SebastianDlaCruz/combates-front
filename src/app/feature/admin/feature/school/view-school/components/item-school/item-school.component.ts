import { Component, inject, input, output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { School } from '@core/models/school.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherEdit, featherTrash2 } from '@ng-icons/feather-icons';
import { ConfirmModalComponent } from '@shared/components/confirm-modal/confirm-modal.component';
import { MenuVerticalComponent } from '@shared/components/menu-vertical/menu-vertical.component';
import { MenuVerticalItem } from '@shared/components/menu-vertical/model/menu-vertical.model';
import { ToastComponent, ToastService } from '@shared/components/toast';

@Component({
  selector: 'app-item-school',
  imports: [NgIcon, MenuVerticalComponent, ConfirmModalComponent, ToastComponent],
  templateUrl: './item-school.component.html',
  styleUrl: './item-school.component.css',
  providers: [
    provideIcons({ featherEdit, featherTrash2 }),
    ToastService
  ]
})
export class ItemSchoolComponent {

  @ViewChild('confirmModal') confirmModal!: ConfirmModalComponent;

  private schoolHttp = inject(SchoolHttpService);
  private router = inject(Router)

  editIcon = featherEdit;
  trashIcon = featherTrash2;

  school = input.required<School>();
  deleteElement = output<number>();


  menuItems: MenuVerticalItem[] = [
    {
      label: 'Editar escuela',
      icon: featherEdit,
      action: () => {
        this.onEdit(this.school().id || 0);
      }
    },
    {
      label: 'Eliminar escuela',
      icon: featherTrash2,
      action: () => {
        this.onDelete(this.school().id || 0);
      }
    }
  ];



  onDelete(id: number) {
    this.schoolHttp.delete(id).subscribe({
      next: () => {

        this.confirmModal.close();
        this.deleteElement.emit(id);

      }
    })

  }

  onEdit(id: number) {
    this.router.navigate(['/admin/edit-school/', id]);
  }


  onOpenModal() {
    this.confirmModal.open();
  }
}
