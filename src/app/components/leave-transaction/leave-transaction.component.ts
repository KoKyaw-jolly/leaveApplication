import { Component } from '@angular/core';
import { APP_IMPORT } from '../../app.import';

@Component({
  selector: 'app-leave-transaction',
  standalone: true,
  imports: [APP_IMPORT],
  templateUrl: './leave-transaction.component.html',
  styleUrl: './leave-transaction.component.scss'
})
export class LeaveTransactionComponent {

  listOfData:any[] = [
    {
      applyDate: "2024-07-01",
      leaveType: "Off-In-Lieu",
      taken: 1,
      startDate: "2024-07-01",
      endDate: "2024-07-01",
      medicalClaim: null,
      status: "approve"
    },
    {
      applyDate: "2024-07-02",
      leaveType: "Off-In-Lieu",
      taken: 1,
      startDate: "2024-07-02",
      endDate: "2024-07-02",
      medicalClaim: null,
      status: "approve"
    },
    {
      applyDate: "2024-07-03",
      leaveType: "Off-In-Lieu",
      taken: 1,
      startDate: "2024-07-03",
      endDate: "2024-07-03",
      medicalClaim: null,
      status: "approve"
    },
    {
      applyDate: "2024-07-04",
      leaveType: "Off-In-Lieu",
      taken: 1,
      startDate: "2024-07-04",
      endDate: "2024-07-04",
      medicalClaim: null,
      status: "approve"
    },
    {
      applyDate: "2024-07-05",
      leaveType: "Off-In-Lieu",
      taken: 1,
      startDate: "2024-07-05",
      endDate: "2024-07-05",
      medicalClaim: null,
      status: "approve"
    },
    {
      applyDate: "2024-07-06",
      leaveType: "Off-In-Lieu",
      taken: 1,
      startDate: "2024-07-06",
      endDate: "2024-07-06",
      medicalClaim: null,
      status: "approve"
    },
    {
      applyDate: "2024-07-07",
      leaveType: "Off-In-Lieu",
      taken: 1,
      startDate: "2024-07-07",
      endDate: "2024-07-07",
      medicalClaim: null,
      status: "approve"
    }
  ];
  
}
