import { DashboardComponent } from './user-dashboard/user-dashboard/user-dashboard.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHabitsComponent } from './user-habits/user-habits.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';

export const userRoutes: Routes = [
  {
    path:'',
    component: UserLayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'profile', component: UserProfileComponent},
      {path: 'settings', component: UserSettingsComponent},
      {path: 'habits', component: UserHabitsComponent},
      {path: 'ejercicios', component: EjerciciosComponent},
      {path: ' ', redirectTo: 'profile', pathMatch: 'full'},

    ]
  }
];
