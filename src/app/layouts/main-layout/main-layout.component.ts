import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { RouterModule } from '@angular/router';
import { ICONS, IMAGES } from '../../core/constants/images-url';
import { SideMenuComponent } from "../../components/sample-component/side-menu/side-menu.component";
import { HttpClient } from '@angular/common/http';
import { Notification } from '../../core/models/notification.interface';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/sidebar-menu.json').subscribe((data) => {
      this.menuList = data;
    });

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
}
