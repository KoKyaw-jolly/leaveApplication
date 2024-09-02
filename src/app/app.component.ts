import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { APP_IMPORT } from './app.import';
import { SideMenuComponent } from "./components/sample-component/side-menu/side-menu.component";
import { AppDataInitService } from './core/services/app-data-init.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/state/app.state';
import * as StaffActions from './store/action/staff.action';
import * as holidayAction from './store/action/holiday.action';

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

  constructor(private store: Store<AppState>) { }

  // private actions = inject(AppDataInitService);
  // constructor(private appService: AppDataInitService) { }
  ngOnInit(): void {
    // this.actions.appDataInit();
    // this.store.dispatch(holidayAction.loadHolidays());
    // this.store.dispatch(StaffActions.loadStaff());
  }
}
