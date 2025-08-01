import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/fighting-app/fighting.routes').then(r => r.routes)

  },
  {
    path: 'admin',
    loadChildren: () => import('./feature/admin/admin.routes').then(r => r.routes)
  }
];
