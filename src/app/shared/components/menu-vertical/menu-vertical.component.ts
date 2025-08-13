import { Component, input, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherMoreVertical } from '@ng-icons/feather-icons';
import { MenuVerticalItem } from './model/menu-vertical.model';

@Component({
  selector: 'app-menu-vertical',
  imports: [NgIcon],
  templateUrl: './menu-vertical.component.html',
  styleUrl: './menu-vertical.component.css',
  providers: [
    provideIcons({ featherMoreVertical })
  ]
})
export class MenuVerticalComponent {

  items = input.required<MenuVerticalItem[]>();
  active = signal(false);

  iconMoreVertical = featherMoreVertical;

  onActiveNav() {
    this.active.set(!this.active());
  }

  onCloseNav() {
    this.active.set(false);
  }

}
