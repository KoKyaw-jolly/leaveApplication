import { Component, OnDestroy, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { LeaveRecord, LeaveTypeDetails, leaveRecordEmptyInitialObj } from '../../core/models/leave.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectAuthUserInfo } from '../../store/selector/auth.selector';
import { AuthInfo, AuthInfoState, authInitialState } from '../../store/state/auth.state';
import * as leaveSelect from '../../store/selector/leave.selector';
import * as leaveActions from '../../store/action/leave.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leave-transaction',
  standalone: true,
  imports: [APP_IMPORT],
  templateUrl: './leave-transaction.component.html',
  styleUrl: './leave-transaction.component.scss'
})
export class LeaveTransactionComponent implements OnInit, OnDestroy {

  leaveDetailsModal: boolean = false;
  leaveDetailsObj: LeaveRecord = leaveRecordEmptyInitialObj;
  userInfoState: AuthInfoState = authInitialState;
  leaveRecordsAll: LeaveRecord[] = [];
  leaveRecordsUser: LeaveRecord[] = [];
  private subscription: Subscription = new Subscription();

  loading: boolean = false;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(selectAuthUserInfo).subscribe(res => {
        this.userInfoState = res;
      })
    )
    this.subscription.add(
      this.store.select(leaveSelect.selectLeave).subscribe(res => {
        this.leaveRecordsAll = res.leaveRecordsAll;
        this.leaveRecordsUser = res.leaveRecordsUser;
        this.loading = res.loading;
      })
    )
  }

  leaveDetails(data: LeaveRecord): void {
    this.leaveDetailsModal = true;
    this.leaveDetailsObj = data;
  }

  closeModal(): void {
    this.leaveDetailsModal = false;
  }

  approveRejectLeave(leaveRecord: LeaveRecord,approveRejectStatus:string): void {
    if(leaveRecord.leaveStatus == "Pending") {
      this.store.dispatch(leaveActions.approveRejectLeave({ leaveRecord: leaveRecord, approveRejectStatus: approveRejectStatus }))
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
