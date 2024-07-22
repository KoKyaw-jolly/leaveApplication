import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { RouterModule } from '@angular/router';
import { ICONS, IMAGES } from '../../core/constants/images-url';
import { SideMenuComponent } from "../../components/sample-component/side-menu/side-menu.component";
import { HttpClient } from '@angular/common/http';

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
export class MainLayoutComponent implements OnInit{
  images = IMAGES;
  isCollapsed = false;
  menuList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/sidebar-menu.json').subscribe((data) => {
      this.menuList = data;
      console.log(data);
    });
  }
}
