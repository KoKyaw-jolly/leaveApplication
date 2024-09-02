import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { LeaveRecord } from '../../core/models/leave.interface';
import * as leaveAction from '../../store/action/leave.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import * as leaveSelect from '../../store/selector/leave.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leave-report',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './leave-report.component.html',
  styleUrl: './leave-report.component.scss'
})
export class LeaveReportComponent implements OnInit {

  dateRange = null;
  leaveType: string = '';
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
  leaveReportData: LeaveRecord[] = [];
  private leaveReportSubscription: Subscription | undefined;
  private subscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(leaveAction.loadLeaveReport({ filterData: { fromDate: '', toDate: '', leaveType: '' } }));
    this.subscription.add(
      this.store.select(leaveSelect.selectLeaveReportData).subscribe(res => {
        if (res && res.length > 0) {
          this.leaveReportData = res;
        }
      })
    )
  }

  onChange(event: any) {
    console.log('on change -', event)
  }

  searchClick(): void {
    const filterFormData = {
      fromDate: this.dateRange == null ? '' : this.dateRange[0],
      toDate: this.dateRange == null ? '' : this.dateRange[1],
      leaveType: this.leaveType
    };
    this.store.dispatch(leaveAction.loadLeaveReport({ filterData: filterFormData }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
