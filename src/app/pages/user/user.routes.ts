import { UserSettingsComponent } from './user-settings/user-settings.component';
import { Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHabitsComponent } from './user-habits/user-habits.component';

export const userRoutes: Routes = [
  {
    path:'',
    component: UserLayoutComponent,
    children: [
      {path: 'profile', component: UserProfileComponent},
      {path: 'settings', component: UserSettingsComponent},
      {path: 'habits', component: UserHabitsComponent},
      {path: ' ', redirectTo: 'profile', pathMatch: 'full'},

    ]
  }
];
