import { Component, OnInit } from '@angular/core';
import { UserLeaveSummaryComponent } from "../../share/components/user-leave-summary/user-leave-summary.component";
import { APP_IMPORT } from '../../app.import';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectAuthUserInfo } from '../../store/selector/auth.selector';
import { AuthInfoState } from '../../store/state/auth.state';
import { selectHolidays } from '../../store/selector/holiday.selector';
import { Holiday } from '../../core/models/holiday.interface';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [APP_IMPORT, UserLeaveSummaryComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent implements OnInit {

  holidays: any[] = []
  holidayModal: boolean = false;
  holidayModalData:Holiday = {
    id: '',
    name: '',
    date: new Date(),
    description: ''
  }
  // holidays: any[] = [
  //   { name: 'Thadingyut Festival', date: '2024-10-15' },
  //   { name: 'Tazaungdaing Festival', date: '2024-11-14' }, 
  //   { name: 'National Day', date: '2024-11-27' },
  //   { name: 'Christmas Day', date: '2024-12-25' },
  //   { name: 'New Year\'s Eve', date: '2024-12-31' }];

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.select(selectHolidays).subscribe(res => {
      this.holidays = res.holidays;
    })
  }

  closeAllModal():void {
    this.holidayModal = false;
  }

  openHolidayModal(holiday: Holiday): void {
    this.holidayModal = true;
    this.holidayModalData = holiday;
  }
}
