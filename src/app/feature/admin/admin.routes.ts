import { Routes } from "@angular/router";

export const routes: Routes = [{
  path: '',
  loadComponent: () => import('./admin.component').then(m => m.AdminComponent),
  children: [
    {
      path: 'start-date',
      loadComponent: () => import('./feature/start-date/start-date.component').then(m => m.StartDateComponent)
    },
    {
      path: 'create-clashes',
      loadComponent: () => import('./feature/clashes/create-clashes/create-clashes.component').then(m => m.CreateClashesComponent)
    },
    {
      path: 'view-clashes',
      loadComponent: () => import('./feature/clashes/view-clashes/view-clashes.component').then(m => m.ViewClashesComponent)
    }
  ]
}]
