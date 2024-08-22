import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { APP_IMPORT } from './app.import';
import { SideMenuComponent } from "./components/sample-component/side-menu/side-menu.component";
import { AppDataInitService } from './core/services/app-data-init.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet, 
    APP_IMPORT, 
    SideMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sipLeaveApplication';

  // private actions = inject(AppDataInitService);
  // constructor(private appService: AppDataInitService) { }
  ngOnInit(): void {
    // this.actions.appDataInit();
  }
}
