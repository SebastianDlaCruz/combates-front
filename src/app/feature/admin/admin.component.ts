import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherMoreVertical } from '@ng-icons/feather-icons';
import { NavBarAdminComponent } from './components/nav-bar-admin/nav-bar-admin.component';


@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, NavBarAdminComponent, NgIcon],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers: [
    provideIcons({ featherMoreVertical }),
    provideNgIconsConfig({
      color: 'white',
      size: '1.6rem'
    })
  ]

})
export class AdminComponent {
  activeNav = signal(false);
  featherMoreVerticalIcon = featherMoreVertical;

  onActiveNav() {
    this.activeNav.set(true);
  }

  onCloseNav() {
    this.activeNav.set(false);
  }
}
