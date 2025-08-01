import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherX } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-nav-bar-admin',
  imports: [RouterLink, NgIcon],
  templateUrl: './nav-bar-admin.component.html',
  styleUrl: './nav-bar-admin.component.css',
  providers: [
    provideIcons({ featherX }),
    provideNgIconsConfig({
      size: '1.8rem',
      color: "white"
    })
  ]
})
export class NavBarAdminComponent {
  active = input.required<boolean>();
  close = output<void>();
  xIcon = featherX;


  onCloseNav() {
    this.close.emit();
  }
}
