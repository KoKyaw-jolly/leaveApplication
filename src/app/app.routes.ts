import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ElementsComponent } from './components/sample-component/elements/elements.component';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user' },
  {path:'user',component:MainLayoutComponent,
    children:[
      {path:'dashboard',component:UserDashboardComponent},
      {path:'elements',component:ElementsComponent}
    ]
  }
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
];
