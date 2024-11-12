import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'user',
    loadChildren: () => import('./pages/user/user.routes').then(m => m.userRoutes),
  },
  {
    path:'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then(m => m.authRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
