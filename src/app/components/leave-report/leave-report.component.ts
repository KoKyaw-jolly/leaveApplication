import { Component } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { LeaveRecord } from '../../core/models/leave.interface';

@Component({
  selector: 'app-leave-report',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './leave-report.component.html',
  styleUrl: './leave-report.component.scss'
})
export class LeaveReportComponent {

  date:Date = new Date();

  onChange(event:any){
    console.log('on change -', event)
  }

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
      phoneDuringLeave: '0912334234',
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
      phoneDuringLeave: '0912334234',
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
      phoneDuringLeave: '0912334234',
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
      phoneDuringLeave: '0912334234',
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
      phoneDuringLeave: '0912334234',
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
      phoneDuringLeave: '0912334234',
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
      phoneDuringLeave: '0912334234',
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
      phoneDuringLeave: '0912334234',
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
      phoneDuringLeave: '0912334234',
      reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      leaveStatus: "Approved"
    }
  ];
}
