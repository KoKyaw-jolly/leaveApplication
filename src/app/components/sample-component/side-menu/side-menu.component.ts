import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../../app.import';
import { RouterModule } from '@angular/router';
import { IMAGES } from '../../../core/constants/images-url';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule, APP_IMPORT],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {
  images = IMAGES;
  isCollapsed = false;
  menuList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/sidebar-menu.json').subscribe((data) => {
      this.menuList = data;
    });
  }
}
