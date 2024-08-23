import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { LeaveRecord, LeaveTypeDetails } from '../../core/models/leave.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectAuthUserInfo } from '../../store/selector/auth.selector';
import { AuthInfo, AuthInfoState, authInitialState } from '../../store/state/auth.state';
import * as leaveSelect from '../../store/selector/leave.selector';
import * as leaveActions from '../../store/action/leave.action';

@Component({
  selector: 'app-leave-transaction',
  standalone: true,
  imports: [APP_IMPORT],
  templateUrl: './leave-transaction.component.html',
  styleUrl: './leave-transaction.component.scss'
})
export class LeaveTransactionComponent implements OnInit {


  constructor(
    private store: Store<AppState>,
  ) { }

  leaveDetailsModal: boolean = false;
  leaveDetailsObj: LeaveRecord = {
    id: '',
    staffId: '',
    fullName: '',
    applyDate: new Date(),
    leaveType: 'Annual',
    takenDays: 0,
    startDate: new Date(),
    endDate: new Date(),
    phoneDuringLeave: '',
    reason: '',
    leaveStatus: 'Pending'
  }
  userInfoState: AuthInfoState = authInitialState;
  leaveRecordsAll: LeaveRecord[] = [];
  leaveRecordsUser: LeaveRecord[] = [];

  leaveDetails(data: LeaveRecord) {
    this.leaveDetailsModal = true;
    this.leaveDetailsObj = data;
  }
  closeModal() {
    this.leaveDetailsModal = false;
  }

  ngOnInit(): void {
    this.store.select(selectAuthUserInfo).subscribe(res => {
      this.userInfoState = res;
    });
    this.store.dispatch(leaveActions.loadLeaveRecordsAll());
    this.store.select(leaveSelect.selectLeaveRecordsAll).subscribe(res => {
      this.leaveRecordsAll = res;
    });
    this.store.dispatch(leaveActions.loadLeaveRecordsUser({ staffID: this.userInfoState.userInfo.user.staffId }));
    this.store.select(leaveSelect.selectLeaveRecordsUser).subscribe(res => {
      this.leaveRecordsUser = res;
    });
  }
}
