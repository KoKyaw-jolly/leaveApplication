import { Component } from '@angular/core';
import { UserLeaveSummaryComponent } from "../../share/components/user-leave-summary/user-leave-summary.component";
import { APP_IMPORT } from '../../app.import';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [APP_IMPORT,UserLeaveSummaryComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

  holidays: any[] = [
    { name: 'Thadingyut Festival', date: '2024-10-15' },
    { name: 'Tazaungdaing Festival', date: '2024-11-14' }, 
    { name: 'National Day', date: '2024-11-27' },
    { name: 'Christmas Day', date: '2024-12-25' },
    { name: 'New Year\'s Eve', date: '2024-12-31' }];
}
