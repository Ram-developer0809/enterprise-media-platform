import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { LayoutComponent } from './layout/layout';

import { UsersComponent } from './users/users';
import { MediaComponent } from './media/media';
import { ReportsComponent } from './reports/reports';
import { SettingsComponent } from './settings/settings';
import { NotificationsComponent } from './notifications/notifications';

import { authGuard } from './auth/auth-guard';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    children: [

      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'users',
        component: UsersComponent
      },

      {
        path: 'media',
        component: MediaComponent
      },

      {
        path: 'reports',
        component: ReportsComponent
      },

      {
        path: 'settings',
        component: SettingsComponent
      },

      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
  path: 'notifications',
  component: NotificationsComponent
},
{
  path: 'settings',
  component: SettingsComponent
},
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];