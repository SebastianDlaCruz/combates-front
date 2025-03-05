import { Routes } from '@angular/router';
import { TabMenuComponent } from './tab-menu.component';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabMenuComponent,
    children: [{
      path: 'home',
      loadComponent: () => import('../../../feature/home/home.component').then((m) => m.HomeComponent)
    },
    {
      path: 'clashes',
      loadComponent: () => import('../../../feature/clashes/clashes.component').then((m) => m.ClashesComponent)
    }
    ]
  },
  {

    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  }
];
