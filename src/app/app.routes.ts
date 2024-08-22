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
import { HolidayManagementComponent } from './components/holiday-management/holiday-management.component';
import { ErrorComponent } from './share/components/error/error.component';
import { TestNgrxComponent } from './components/sample-component/test-ngrx/test-ngrx.component';
import { AuthGuard } from './share/guard/auth.guard';
export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: UserDashboardComponent ,canActivate: [AuthGuard]},
      { path: 'apply-leave', component: ApplyLeaveComponent ,canActivate: [AuthGuard]},
      { path: 'leave-transaction', component: LeaveTransactionComponent ,canActivate: [AuthGuard]},
      { path: 'leave-calendar', component: LeaveCalendarComponent ,canActivate: [AuthGuard]},
      { path: 'leave-policy', component: LeavePolicyComponent ,canActivate: [AuthGuard]},
      { path: 'elements', component: ElementsComponent ,canActivate: [AuthGuard]},
      { path: 'testRx', component: TestNgrxComponent ,canActivate: [AuthGuard]},
      { path: 'staff-management', component: StaffManagementComponent ,canActivate: [AuthGuard]},
      { path: 'leave-report', component: LeaveReportComponent ,canActivate: [AuthGuard]},
      { path: 'general-setting', component: SettingComponent ,canActivate: [AuthGuard]},
      { path: 'holiday-management', component: HolidayManagementComponent ,canActivate: [AuthGuard]},
    ]
  },
  { path: '**', component: ErrorComponent }
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
];
