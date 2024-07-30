import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ElementsComponent } from './components/sample-component/elements/elements.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { LeaveTransactionComponent } from './components/leave-transaction/leave-transaction.component';
import { LeaveDetailComponent } from './components/leave-detail/leave-detail.component';
import { MedicalClaimComponent } from './components/medical-claim/medical-claim.component';
import { LeaveCalendarComponent } from './components/leave-calendar/leave-calendar.component';
import { LoginComponent } from './components/login/login.component';
import { LeaveReportComponent } from './components/leave-report/leave-report.component';
import { StaffManagementComponent } from './components/staff-management/staff-management.component';
import { SettingComponent } from './components/setting/setting.component';
import { LeavePolicyComponent } from './components/leave-policy/leave-policy.component';
export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'user', component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'apply-leave', component: ApplyLeaveComponent },
      { path: 'leave-transaction', component: LeaveTransactionComponent },
      // {path:'leave-details',component:LeaveDetailComponent},
      // {path:'medical-claim',component:MedicalClaimComponent},
      { path: 'leave-calendar', component: LeaveCalendarComponent },
      { path: 'leave-policy', component: LeavePolicyComponent },
      { path: 'elements', component: ElementsComponent }
    ]
  },
  {
    path: 'admin', component: MainLayoutComponent,
    children: [
      { path: 'staff-management', component: StaffManagementComponent },
      { path: 'leave-report', component: LeaveReportComponent },
      { path: 'general-setting', component: SettingComponent }
    ]
  }
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
];
