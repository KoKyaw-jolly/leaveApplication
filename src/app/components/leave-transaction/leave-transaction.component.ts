import { Component } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { LeaveRecord, LeaveTypeDetails } from '../../core/models/leave.interface';

@Component({
  selector: 'app-leave-transaction',
  standalone: true,
  imports: [APP_IMPORT],
  templateUrl: './leave-transaction.component.html',
  styleUrl: './leave-transaction.component.scss'
})
export class LeaveTransactionComponent {
  myLeaveSummaryData: LeaveTypeDetails[] = [
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
  listOfData: LeaveRecord[] = [
    {
      id: "1",
      staffId: "1",
      fullName: "Ko Ko Kyaw",
      applyDate: new Date("2024-07-01"),
      leaveType: "Off-In-Lieu",
      takenDays: 1,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-01"),
      reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      leaveStatus: "Approved"
    },
    {
      id: "1",
      staffId: "1",
      fullName: "Ko Ko Kyaw",
      applyDate: new Date("2024-07-01"),
      leaveType: "Off-In-Lieu",
      takenDays: 1,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-01"),
      reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      leaveStatus: "Approved"
    },
    {
      id: "1",
      staffId: "1",
      fullName: "Ko Ko Kyaw",
      applyDate: new Date("2024-07-01"),
      leaveType: "Off-In-Lieu",
      takenDays: 1,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-01"),
      reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      leaveStatus: "Approved"
    },
    {
      id: "1",
      staffId: "1",
      fullName: "Ko Ko Kyaw",
      applyDate: new Date("2024-07-01"),
      leaveType: "Off-In-Lieu",
      takenDays: 1,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-01"),
      reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      leaveStatus: "Approved"
    },
    {
      id: "1",
      staffId: "1",
      fullName: "Ko Ko Kyaw",
      applyDate: new Date("2024-07-01"),
      leaveType: "Off-In-Lieu",
      takenDays: 1,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-01"),
      reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      leaveStatus: "Approved"
    },
    {
      id: "1",
      staffId: "1",
      fullName: "Ko Ko Kyaw",
      applyDate: new Date("2024-07-01"),
      leaveType: "Off-In-Lieu",
      takenDays: 1,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-01"),
      reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      leaveStatus: "Approved"
    },
    {
      id: "1",
      staffId: "1",
      fullName: "Ko Ko Kyaw",
      applyDate: new Date("2024-07-01"),
      leaveType: "Off-In-Lieu",
      takenDays: 1,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-01"),
      reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      leaveStatus: "Approved"
    },
    {
      id: "1",
      staffId: "1",
      fullName: "Ko Ko Kyaw",
      applyDate: new Date("2024-07-01"),
      leaveType: "Off-In-Lieu",
      takenDays: 1,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-01"),
      reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      leaveStatus: "Approved"
    },
    {
      id: "1",
      staffId: "1",
      fullName: "Ko Ko Kyaw",
      applyDate: new Date("2024-07-01"),
      leaveType: "Off-In-Lieu",
      takenDays: 1,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-01"),
      reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      leaveStatus: "Approved"
    }
  ];

}
