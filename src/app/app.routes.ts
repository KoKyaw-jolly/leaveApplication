import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ElementsComponent } from './components/sample-component/elements/elements.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { LeaveTransactionComponent } from './components/leave-transaction/leave-transaction.component';
import { LeaveDetailComponent } from './components/leave-detail/leave-detail.component';
import { MedicalClaimComponent } from './components/medical-claim/medical-claim.component';
import { LeaveCalendarComponent } from './components/leave-calendar/leave-calendar.component';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user' },
  {path:'user',component:MainLayoutComponent,
    children:[
      {path:'dashboard',component:UserDashboardComponent},
      {path:'apply-leave',component:ApplyLeaveComponent},
      {path:'leave-transaction',component:LeaveTransactionComponent},
      {path:'leave-details',component:LeaveDetailComponent},
      {path:'medical-claim',component:MedicalClaimComponent},
      {path:'leave-calendar',component:LeaveCalendarComponent},
      {path:'elements',component:ElementsComponent}
    ]
  }
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
];
