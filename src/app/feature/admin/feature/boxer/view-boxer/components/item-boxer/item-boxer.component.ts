import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherEdit, featherTrash2 } from '@ng-icons/feather-icons';
import { MenuVerticalComponent } from '@shared/components/menu-vertical/menu-vertical.component';
import { MenuVerticalItem } from '@shared/components/menu-vertical/model/menu-vertical.model';

@Component({
  selector: 'app-item-boxer',
  imports: [NgIcon, MenuVerticalComponent],
  templateUrl: './item-boxer.component.html',
  styleUrl: './item-boxer.component.css',
  providers: [
    provideIcons({ featherEdit, featherTrash2 })
  ]
})
export class ItemBoxerComponent {
  /* boxer = input.required<Boxer>(); */

  editIcon = featherEdit;
  trashIcon = featherTrash2;

  menuItems: MenuVerticalItem[] = [
    {
      label: 'Editar',
      icon: featherEdit,
      action: () => {
        console.log('editar');
      }
    }, {
      label: 'Eliminar',
      icon: featherTrash2,
      action: () => {
        console.log('eliminar');
      }
    }
  ]
}
