import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/components/tab-menu/tab-menu.routes').then(m => m.routes)
  },


];
