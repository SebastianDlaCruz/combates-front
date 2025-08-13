import { Component } from '@angular/core';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherEdit, featherMoreVertical, featherTrash2, featherUserPlus, featherUsers } from '@ng-icons/feather-icons';
import { MenuVerticalComponent } from '@shared/components/menu-vertical/menu-vertical.component';
import { MenuVerticalItem } from '@shared/components/menu-vertical/model/menu-vertical.model';

@Component({
  selector: 'app-fighting-items',
  imports: [NgIcon, MenuVerticalComponent],
  templateUrl: './fighting-items.component.html',
  styleUrl: './fighting-items.component.css',
  providers: [
    provideIcons({ featherUserPlus, featherEdit, featherTrash2, featherMoreVertical, featherUsers }),
    provideNgIconsConfig({
      size: '1.2rem',
      color: 'white'
    })
  ]
})
export class FightingItemsComponent {

  userIcon = featherUserPlus;
  editIcon = featherEdit;
  trashIcon = featherTrash2;
  moreVerticalIcon = featherMoreVertical;
  featerUsersIcon = featherUsers;

  menuItems: MenuVerticalItem[] = [
    {
      label: 'Agregar boxeador',
      icon: featherUserPlus,
      action: () => {

      }
    }, {
      action: () => { },
      icon: featherUsers,
      label: 'Editar boxeador',
    }, {
      action: () => { },
      icon: featherEdit,
      label: 'Editar pelea'
    }, {
      action: () => { },
      icon: featherTrash2,
      label: 'Eliminar pelea',
    }
  ]



}
