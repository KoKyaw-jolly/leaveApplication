import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APP_IMPORT } from './app.import';
import { Store } from '@ngrx/store';
import { AppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet, 
    APP_IMPORT
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'leaveApplication';

  constructor(private store: Store<AppState>) { }

  // private actions = inject(AppDataInitService);
  // constructor(private appService: AppDataInitService) { }
  ngOnInit(): void {
    // this.actions.appDataInit();
    // this.store.dispatch(holidayAction.loadHolidays());
    // this.store.dispatch(StaffActions.loadStaff());
  }
}
