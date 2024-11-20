import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthLayoutComponent } from './pages/auth/auth-layout/auth-layout.component';
import { DashboardComponent } from './pages/user/user-dashboard/user-dashboard/user-dashboard.component';
import { EjerciciosComponent } from './pages/user/ejercicios/ejercicios.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/auth/register/register.component').then((m) => m.RegisterComponent),
      },
    ],
  },
  {
    path: 'user',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'ejercicios',
        component: EjerciciosComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
