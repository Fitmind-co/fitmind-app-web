import { UserSettingsComponent } from './user-settings/user-settings.component';
import { Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHabitsComponent } from './user-habits/user-habits.component';
import { UserGoalsComponent } from './user-goals/user-goals.component';
import { UserActivityLogComponent } from './user-activity-log/user-activity-log.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { UserRemindersComponent } from './user-reminders/user-reminders.component';

export const userRoutes: Routes = [
  {
    path:'',
    component: UserLayoutComponent,
    children: [
      {path: 'profile', component: UserProfileComponent},
      {path: 'settings', component: UserSettingsComponent},
      {path: 'habits', component: UserHabitsComponent},
      {path: 'goals', component: UserGoalsComponent},
      {path: 'activity-log', component: UserActivityLogComponent},
      {path: 'notifications', component: UserNotificationsComponent},
      {path: 'friends', component: UserFriendsComponent},
      {path: 'reminders', component: UserRemindersComponent},
      {path: ' ', redirectTo: 'profile', pathMatch: 'full'},

    ]
  }
];
