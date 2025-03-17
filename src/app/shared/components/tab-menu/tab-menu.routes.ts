import { Routes } from '@angular/router';
import { TabMenuComponent } from './tab-menu.component';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabMenuComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../../../feature/home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'clashes',
        loadComponent: () => import('../../../feature/clashes/clashes.component').then((m) => m.ClashesComponent)
      },
      {
        path: 'boxers',
        loadComponent: () => import('../../../feature/boxers/boxers.component').then((m) => m.BoxersComponent)
      },
      {
        path: 'boxers/create',
        loadComponent: () => import('../../../feature/boxers/views/create/create.component').then((m) => m.CreateComponent)
      }
    ]
  },
  {

    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  }
];
