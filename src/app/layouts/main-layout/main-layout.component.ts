import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { Router, RouterModule } from '@angular/router';
import { IMAGES } from '../../core/constants/images-url';
import { HttpClient } from '@angular/common/http';
import { AppNotification, appNotificationEmptyInitialObj } from '../../core/models/notification.interface';
import { AtaffActiveRouteInit } from '../../core/models/auth.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectAuthUserInfo } from '../../store/selector/auth.selector';
import * as AuthAction from '../../store/action/auth.action';
import * as StaffActions from '../../store/action/staff.action';
import * as holidayActions from '../../store/action/holiday.action';
import * as leaveActions from '../../store/action/leave.action';
import * as generalSettingActions from '../../store/action/general-setting.action';
import { SideMenuList } from '../../core/models/menu.interface';
import { selectGeneralSetting } from '../../store/selector/general-setting.selector';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    APP_IMPORT,
    RouterModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  images = IMAGES;
  isCollapsed = false;
  menuList: any[] = [];
  notificationList: AppNotification[] = [];
  notificationModal: boolean = false;
  notificationObj: AppNotification = appNotificationEmptyInitialObj
  headerContent = {
    fullName: '',
    position: '',
    image: ''
  }

  staffActiveRoute = AtaffActiveRouteInit;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.select(selectAuthUserInfo).subscribe(authInfo => {
      this.menuList = authInfo.userInfo.user.role == 'Admin' ? SideMenuList : SideMenuList.filter((menu) => this.staffActiveRoute.includes(menu.routelink));
      this.headerContent = {
        fullName: authInfo.userInfo.user.fullName,
        position: authInfo.userInfo.user.position,
        image: authInfo.userInfo.user.image
      }
      this.store.dispatch(leaveActions.loadLeaveRecordsUser({ staffID: authInfo.userInfo.user.staffId }));
      this.store.dispatch(generalSettingActions.loadNotificationUser({ staffID: authInfo.userInfo.user.staffId }));
    })
    this.store.select(selectGeneralSetting).subscribe(generalSetting=>{
      this.notificationList = generalSetting.notificationsUser;
    })
    this.store.dispatch(holidayActions.loadHolidays());
    this.store.dispatch(StaffActions.loadStaff());
    this.store.dispatch(leaveActions.loadLeaveRecordsAll());
    this.store.dispatch(leaveActions.loadLeaveCalendar());
  }

  notificationDetailsModal(notiData: AppNotification): void {
    this.notificationModal = true;
    this.notificationObj = notiData;
  }
  closeModal(): void {
    this.notificationModal = false;
  }

  logOut(): void {
    this.store.dispatch(AuthAction.logOut());
  }
}
