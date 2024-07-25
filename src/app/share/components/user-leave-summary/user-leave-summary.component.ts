import { Component } from '@angular/core';
import { APP_IMPORT } from '../../../app.import';

@Component({
  selector: 'app-user-leave-summary',
  standalone: true,
  imports: [APP_IMPORT],
  templateUrl: './user-leave-summary.component.html',
  styleUrl: './user-leave-summary.component.scss'
})
export class UserLeaveSummaryComponent {

  today: Date = new Date();
  
  leaveSummary: any[] = [
    {
      leaveType: 'Annual Leave',
      remainDays: 6
    },
    {
      leaveType: 'Off-In-Lieu',
      remainDays: 3
    },
    {
      leaveType: 'Medical Leave',
      remainDays: 12
    }
  ];

  annualLeave = (percent: number): string => `2/10`;
  offInLieu = (percent: number): string => `5/6`;
  medicalLeave = (percent: number): string => `5/10`;

}
