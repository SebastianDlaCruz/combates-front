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
    },
    {
      path: 'create-boxer',
      loadComponent: () => import('./feature/boxer/create-boxer/create-boxer.component').then(m => m.CreateBoxerComponent)
    },
    {
      path: 'view-boxer',
      loadComponent: () => import('./feature/boxer/view-boxer/view-boxer.component').then(m => m.ViewBoxerComponent)
    }, {

      path: 'edit-boxer/:id',
      loadComponent: () => import('./feature/boxer/edit-boxer/edit-boxer.component').then(m => m.EditBoxerComponent)
    },
    {
      path: 'create-coach',
      loadComponent: () => import('./feature/coach/create-coach/create-coach.component').then(m => m.CreateCoachComponent)
    }, {
      path: 'view-coach',
      loadComponent: () => import('./feature/coach/view-coach/view-coach.component').then(m => m.ViewCoachComponent)
    },
    {
      path: 'edit-coach/:id',
      loadComponent: () => import('./feature/coach/edit-coach/edit-coach.component').then(m => m.EditCoachComponent)
    },
    {
      path: 'create-school',
      loadComponent: () => import('./feature/school/create-school/create-school.component').then(m => m.CreateSchoolComponent)
    },
    {
      path: 'view-school',
      loadComponent: () => import('./feature/school/view-school/view-school.component').then(m => m.ViewSchoolComponent)
    },
    {
      path: 'edit-school/:id',
      loadComponent: () => import('./feature/school/edit-school/edit-school.component').then(m => m.EditSchoolComponent)
    }
  ]
}]
