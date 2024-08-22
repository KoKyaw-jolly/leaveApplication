import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { Router, RouterModule } from '@angular/router';
import { ICONS, IMAGES } from '../../core/constants/images-url';
import { SideMenuComponent } from "../../components/sample-component/side-menu/side-menu.component";
import { HttpClient } from '@angular/common/http';
import { Notification } from '../../core/models/notification.interface';
import { AtaffActiveRouteInit } from '../../core/models/auth.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectAuthUserInfo } from '../../store/selector/auth.selector';
import * as AuthAction from '../../store/action/auth.action';
import { SideMenuList } from '../../core/models/menu.interface';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    APP_IMPORT,
    RouterModule,
    SideMenuComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  images = IMAGES;
  isCollapsed = false;
  menuList: any[] = [];
  notificationList: Notification[] = [];
  notificationModal: boolean = false;
  notificationObj: Notification = {
    id: 0,
    date: new Date(),
    title: '',
    description: '',
    notifyTo: 'All'
  }

  staffActiveRoute = AtaffActiveRouteInit;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.store.select(selectAuthUserInfo).subscribe(authInfo => {
      this.menuList = authInfo.userInfo.user.role == 'Admin' ? SideMenuList : SideMenuList.filter((menu) => this.staffActiveRoute.includes(menu.routelink));
    })
    // this.http.get<any[]>('assets/data/sidebar-menu.json').subscribe((data) => {
    //   this.menuList = data.filter((item) => this.staffActiveRoute.includes(item.routelink));
    // });

    this.http.get<any[]>('assets/data/notification-temp-data.json').subscribe((data) => {
      this.notificationList = data;
    });
  }

  notificationDetailsModal(notiData: Notification): void {
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
