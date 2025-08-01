import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./fighting-app.component').then(m => m.FightingAppComponent)
  }
];
