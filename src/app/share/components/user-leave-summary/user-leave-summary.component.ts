import { Component, Input } from '@angular/core';
import { APP_IMPORT } from '../../../app.import';
import { LeaveTypeDetails } from '../../../core/models/leave.interface';

@Component({
  selector: 'app-user-leave-summary',
  standalone: true,
  imports: [APP_IMPORT],
  templateUrl: './user-leave-summary.component.html',
  styleUrl: './user-leave-summary.component.scss'
})
export class UserLeaveSummaryComponent {

  @Input() leaveSummaryYear: boolean = false;

  today: Date = new Date();

  leaveSummary: LeaveTypeDetails[] = [
    {
      leaveType: 'Annual',
      totalDays: 10,
      remainingDays: 8
    },
    {
      leaveType: 'Off-In-Lieu',
      totalDays: 12,
      remainingDays: 3
    },
    {
      leaveType: 'Medical',
      totalDays: 15,
      remainingDays: 12
    },
  ];

  annualLeave = (percent: number): string => `2/10`;
  offInLieu = (percent: number): string => `5/6`;
  medicalLeave = (percent: number): string => `5/10`;

}
